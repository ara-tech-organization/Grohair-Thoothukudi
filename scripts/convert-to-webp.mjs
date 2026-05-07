// One-time script: resize + convert all treatment images to WebP.
// Usage: node scripts/convert-to-webp.mjs
//
// Reads src/assets/treatments/*, writes <slug>.webp into the same folder.
// Source files are left in place — delete them after verifying the WebP output.

import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TREATMENTS_DIR = path.resolve(__dirname, "../src/assets/treatments");

const MAX_WIDTH = 1200;
const QUALITY = 80;

const SOURCE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

async function main() {
  const entries = await readdir(TREATMENTS_DIR);
  const sources = entries.filter((f) =>
    SOURCE_EXTS.has(path.extname(f).toLowerCase())
  );

  if (sources.length === 0) {
    console.log("No PNG/JPG files to convert.");
    return;
  }

  let totalIn = 0;
  let totalOut = 0;
  const renames = [];

  for (const file of sources) {
    const src = path.join(TREATMENTS_DIR, file);
    const base = path.basename(file, path.extname(file));
    const slug = slugify(base);
    const out = path.join(TREATMENTS_DIR, `${slug}.webp`);

    const { size: srcSize } = await stat(src);

    await sharp(src)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(out);

    const { size: outSize } = await stat(out);
    totalIn += srcSize;
    totalOut += outSize;

    const reduction = ((1 - outSize / srcSize) * 100).toFixed(0);
    console.log(
      `${file.padEnd(40)} ${(srcSize / 1024).toFixed(0).padStart(6)} kB → ${(outSize / 1024).toFixed(0).padStart(6)} kB  (-${reduction}%)`
    );

    if (file !== `${slug}.webp`) renames.push({ src, slug });
  }

  const totalReduction = ((1 - totalOut / totalIn) * 100).toFixed(0);
  console.log(
    `\nTotal: ${(totalIn / 1024 / 1024).toFixed(1)} MB → ${(totalOut / 1024 / 1024).toFixed(1)} MB  (-${totalReduction}%)`
  );

  // Delete source PNG/JPG files now that WebPs exist.
  for (const { src } of renames) {
    await unlink(src);
  }
  console.log(`\nDeleted ${renames.length} source files. WebP versions saved.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
