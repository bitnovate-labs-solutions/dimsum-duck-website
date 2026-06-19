import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, "..", "public");
const outDir = path.join(publicDir, "images", "heroes");

/** @type {{ id: string; source: string }[]} */
const heroes = [
  {
    id: "menu",
    source: "images/dimsumduck/Dim Sum Duck 090426-2624.jpg",
  },
  {
    id: "locations",
    source: "images/dimsumduck/Dim Sum Duck 090426-2937.jpg",
  },
  {
    id: "reviews",
    source: "images/dimsumduck/Dim Sum Duck 090426-3527.jpg",
  },
  {
    id: "faq",
    source: "images/dimsumduck/Dim Sum Duck 090426-3518.jpg",
  },
  {
    id: "our-story",
    source: "images/ourstory/inspired by city/IMG_4286.jpg",
  },
  {
    id: "pentonville-road",
    source: "images/dimsumduck/Dim Sum Duck 090426-3560.jpg",
  },
  {
    id: "kings-cross-road",
    source: "images/dimsumduck/Dim Sum Duck 090426-3592.jpg",
  },
];

const width = 1920;
const quality = 80;

fs.mkdirSync(outDir, { recursive: true });

for (const hero of heroes) {
  const input = path.join(publicDir, hero.source);
  const output = path.join(outDir, `${hero.id}.webp`);

  if (!fs.existsSync(input)) {
    console.error(`Missing source: ${input}`);
    process.exitCode = 1;
    continue;
  }

  await sharp(input)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(output);

  const { size } = fs.statSync(output);
  console.log(`${hero.id}.webp — ${(size / 1024).toFixed(0)} KB`);
}
