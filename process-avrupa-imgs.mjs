import sharp from "sharp";
import fs from "fs";

const dir = "public/images/servis";
// Avrupadis'ten yeni inen görseller (indirilen orijinaller -hero/-card olmayanlar)
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".webp") && !f.includes("-hero") && !f.includes("-card") && !f.startsWith("ph-"));

for (const f of files) {
  const base = f.replace(".webp", "");
  await sharp(`${dir}/${f}`)
    .resize(1600, 600, { fit: "cover", position: "center", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.4 })
    .webp({ quality: 85 })
    .toFile(`${dir}/${base}-hero.webp`);
  await sharp(`${dir}/${f}`)
    .resize(800, 600, { fit: "cover", position: "center", kernel: sharp.kernel.lanczos3 })
    .sharpen({ sigma: 1.2 })
    .webp({ quality: 85 })
    .toFile(`${dir}/${base}-card.webp`);
  console.log("OK", base);
}
