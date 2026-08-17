import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";

const RAW_DIR = "scripts/data/raw";
const imgDir = "public/images/servis";
const FALLBACK = "https://www.avrupadis.com/app/Images/30.08.2021-bb637565addcb244f8ca6565be1a267a612.webp";

const raws = readdirSync(RAW_DIR).filter((f) => f.endsWith(".json")).map((f) => JSON.parse(readFileSync(`${RAW_DIR}/${f}`, "utf8")));

let fixed = 0, stillFail = 0, ok = 0;
for (const raw of raws) {
  const dest = `${imgDir}/${raw.slug}-hero.webp`;
  if (existsSync(dest)) { ok++; continue; }
  let src = raw.image;
  let got = false;
  if (src) {
    try {
      const r = await fetch(src, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (r.ok) { writeFileSync(dest, Buffer.from(await r.arrayBuffer())); got = true; }
    } catch {}
  }
  if (!got && FALLBACK) {
    try {
      const r = await fetch(FALLBACK, { headers: { "User-Agent": "Mozilla/5.0" } });
      if (r.ok) { writeFileSync(dest, Buffer.from(await r.arrayBuffer())); got = true; }
    } catch {}
  }
  if (got) fixed++;
  else { stillFail++; console.log("HALA HATA:", raw.slug); }
}
console.log("mevcut ok:", ok, "  düzeltilen (fallback):", fixed, "  hâlâ hata:", stillFail);
