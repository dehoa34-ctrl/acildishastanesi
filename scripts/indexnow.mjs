import { readFileSync, readdirSync } from "node:fs";

const KEY = readFileSync("public/8f2a1c3d9e4b5a6c7d8e9f0a1b2c3d4e.txt", "utf8").trim();
const HOST = "acildishastanesi.org";

// yeni eklenen fiyat sayfaları (raw scrape klasöründeki slug'lar)
const raws = readdirSync("scripts/data/raw").filter((f) => f.endsWith(".json")).map((f) => f.replace(".json", ""));
const urls = raws.map((s) => `https://${HOST}/${s}/`);

// güncellenen/önemli sayfalar
const extra = [
  "https://acildishastanesi.org/",
  "https://acildishastanesi.org/semtler/",
  "https://acildishastanesi.org/hizmetler/",
  "https://acildishastanesi.org/sitemap.xml",
  "https://acildishastanesi.org/site-haritasi/",
  "https://acildishastanesi.org/blog/",
];
const all = [...new Set([...urls, ...extra])];
console.log("IndexNow URL sayısı:", all.length);

// 10.000'lik batch'ler (IndexNow limiti)
const BATCH = 10000;
async function ping(batchUrls) {
  const body = JSON.stringify({ host: HOST, key: KEY, urlList: batchUrls });
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  });
  return { status: res.status, text: await res.text() };
}

for (let i = 0; i < all.length; i += BATCH) {
  const batch = all.slice(i, i + BATCH);
  const r = await ping(batch);
  console.log(`batch ${i / BATCH + 1}: ${batch.length} URL → HTTP ${r.status} ${r.text}`);
}
