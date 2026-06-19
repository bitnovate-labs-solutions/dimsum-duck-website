import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ffmpegPath from "ffmpeg-static";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, "..", "public", "hero");
const source = path.join(publicDir, "hero-video.source.mp4");
const output = path.join(publicDir, "hero-video.mp4");

if (!ffmpegPath) {
  console.error("ffmpeg-static binary not found");
  process.exit(1);
}

if (!fs.existsSync(source)) {
  console.error(`Missing source video: ${source}`);
  process.exit(1);
}

execFileSync(
  ffmpegPath,
  [
    "-y",
    "-i",
    source,
    "-vf",
    "scale=960:-2",
    "-r",
    "24",
    "-c:v",
    "libx264",
    "-preset",
    "slow",
    "-crf",
    "34",
    "-movflags",
    "+faststart",
    "-an",
    "-pix_fmt",
    "yuv420p",
    output,
  ],
  { stdio: "inherit" },
);

const { size } = fs.statSync(output);
console.log(`hero-video.mp4 — ${(size / 1024).toFixed(0)} KB`);
