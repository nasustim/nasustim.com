import { stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const rootDir = process.cwd();

const images = [
  {
    src: path.join(rootDir, "public/static/profile_400x400.jpg"),
    dest: path.join(rootDir, "public/static/profile_180x180.webp"),
    width: 180,
    height: 180,
    quality: 80,
  },
];

async function shouldGenerate(srcPath, destPath) {
  try {
    const [srcStat, destStat] = await Promise.all([
      stat(srcPath),
      stat(destPath),
    ]);
    return srcStat.mtimeMs > destStat.mtimeMs;
  } catch {
    return true;
  }
}

for (const img of images) {
  if (await shouldGenerate(img.src, img.dest)) {
    await sharp(img.src)
      .resize(img.width, img.height)
      .webp({ quality: img.quality, effort: 6 })
      .toFile(img.dest);
    console.log(
      `[optimize-images] Generated ${path.relative(rootDir, img.dest)}`,
    );
  }
}
