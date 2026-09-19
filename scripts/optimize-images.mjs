import fs from "fs";
import path from "path";
import sharp from "sharp";

const imagesDir = path.join(process.cwd(), "public", "images");

async function optimizeImages() {
  console.log("Starting image optimization...");
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && /\.(png|jpg|jpeg)$/i.test(file)) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const webpPath = path.join(imagesDir, `${name}.webp`);

      const origSize = (stat.size / 1024).toFixed(1);

      try {
        // Compress & convert to webp
        await sharp(filePath)
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(webpPath);

        const newStat = fs.statSync(webpPath);
        const newSize = (newStat.size / 1024).toFixed(1);
        console.log(`Optimized ${file} (${origSize} KB) -> ${name}.webp (${newSize} KB)`);
      } catch (err) {
        console.error(`Error optimizing ${file}:`, err);
      }
    }
  }

  console.log("Image optimization completed!");
}

optimizeImages();
