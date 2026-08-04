/**
 * Convert all JPG/JPEG/PNG under public/ to WebP at quality 80.
 * Writes sibling .webp files, then deletes the originals on success.
 * Leaves existing .webp and SVG assets alone (heroes already at q80;
 * animated hero-video.webp must not be flattened).
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const quality = 80;

const RASTER_EXT = new Set([".jpg", ".jpeg", ".png"]);
const SKIP_DIRS = new Set(["node_modules", ".git"]);

/** @param {string} dir */
function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      yield* walk(full);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

/**
 * @param {string} input
 * @param {string} output
 */
async function toWebp(input, output) {
  await sharp(input)
    .rotate()
    .webp({ quality, effort: 4 })
    .toFile(output);
}

let converted = 0;
let failed = 0;
let skipped = 0;
let bytesIn = 0;
let bytesOut = 0;

const files = [...walk(publicDir)];

for (const input of files) {
  const ext = path.extname(input).toLowerCase();
  const rel = path.relative(publicDir, input);

  if (!RASTER_EXT.has(ext)) {
    skipped += 1;
    continue;
  }

  try {
    const output = input.slice(0, -ext.length) + ".webp";
    const before = fs.statSync(input).size;
    await toWebp(input, output);
    const after = fs.statSync(output).size;
    fs.unlinkSync(input);
    bytesIn += before;
    bytesOut += after;
    converted += 1;
    console.log(
      `✓ ${rel} → ${path.basename(output)} (${kb(before)} → ${kb(after)})`,
    );
  } catch (err) {
    failed += 1;
    console.error(`✗ ${rel}:`, err instanceof Error ? err.message : err);
  }
}

console.log("\nDone.");
console.log(`Converted: ${converted}`);
console.log(`Skipped (non-raster): ${skipped}`);
console.log(`Failed: ${failed}`);
console.log(
  `Size: ${kb(bytesIn)} → ${kb(bytesOut)} (saved ${kb(Math.max(0, bytesIn - bytesOut))})`,
);

/** @param {number} n */
function kb(n) {
  return `${(n / 1024).toFixed(0)} KB`;
}
