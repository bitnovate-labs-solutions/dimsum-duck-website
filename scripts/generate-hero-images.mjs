import { execFileSync } from "child_process";
import fs from "fs";
import path from "path";
import sharp from "sharp";
import ffmpegPath from "@ffmpeg-installer/ffmpeg";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(root, "..", "public");
const heroesDir = path.join(publicDir, "images", "heroes");
const heroDir = path.join(publicDir, "hero");

/** @type {{ id: string; source: string }[]} */
const pageHeroes = [
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

const heroPosterSource = "images/dimsumduck/Dim Sum Duck 090426-3499.jpg";
const imageWidth = 1920;
const imageQuality = 80;

fs.mkdirSync(heroesDir, { recursive: true });
fs.mkdirSync(heroDir, { recursive: true });

for (const hero of pageHeroes) {
  const input = path.join(publicDir, hero.source);
  const output = path.join(heroesDir, `${hero.id}.webp`);

  if (!fs.existsSync(input)) {
    console.error(`Missing source: ${input}`);
    process.exitCode = 1;
    continue;
  }

  await sharp(input)
    .rotate()
    .resize({ width: imageWidth, withoutEnlargement: true })
    .webp({ quality: imageQuality })
    .toFile(output);

  const { size } = fs.statSync(output);
  console.log(`${hero.id}.webp — ${(size / 1024).toFixed(0)} KB`);
}

const posterInput = path.join(publicDir, heroPosterSource);
const posterOutput = path.join(heroDir, "hero-poster.webp");

if (fs.existsSync(posterInput)) {
  await sharp(posterInput)
    .rotate()
    .resize({ width: imageWidth, withoutEnlargement: true })
    .webp({ quality: imageQuality })
    .toFile(posterOutput);

  const { size } = fs.statSync(posterOutput);
  console.log(`hero-poster.webp — ${(size / 1024).toFixed(0)} KB`);
} else {
  console.error(`Missing hero poster source: ${posterInput}`);
  process.exitCode = 1;
}

const sourceVideo = path.join(heroDir, "hero-video.source.mp4");
const outputVideo = path.join(heroDir, "hero-video.mp4");
const tempVideo = path.join(heroDir, "hero-video.next.mp4");

if (!fs.existsSync(sourceVideo) && fs.existsSync(outputVideo)) {
  fs.copyFileSync(outputVideo, sourceVideo);
  console.log("Saved hero-video.source.mp4 from existing hero-video.mp4");
}

if (fs.existsSync(sourceVideo)) {
  const sourceStat = fs.statSync(sourceVideo);
  const outputStat = fs.existsSync(outputVideo) ? fs.statSync(outputVideo) : null;
  const needsRebuild =
    !outputStat || sourceStat.mtimeMs > outputStat.mtimeMs;

  if (needsRebuild) {
    execFileSync(
      ffmpegPath.path,
      [
        "-y",
        "-i",
        sourceVideo,
        "-an",
        "-c:v",
        "libx264",
        "-preset",
        "medium",
        "-crf",
        "28",
        "-vf",
        "scale='min(1920,iw)':-2",
        "-movflags",
        "+faststart",
        tempVideo,
      ],
      { stdio: "inherit" },
    );

    fs.renameSync(tempVideo, outputVideo);
    const { size } = fs.statSync(outputVideo);
    console.log(`hero-video.mp4 — ${(size / 1024 / 1024).toFixed(1)} MB`);
  } else {
    const { size } = fs.statSync(outputVideo);
    console.log(`hero-video.mp4 — ${(size / 1024 / 1024).toFixed(1)} MB (cached)`);
  }
} else {
  console.warn("No hero video source found — skipping video compression");
}
