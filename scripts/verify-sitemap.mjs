import { readFileSync } from "node:fs";

// Üretilen sitemap.xml
const sitemap = readFileSync("out/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>https:\/\/acildishastanesi\.org\/([^<]+?)<\/loc>/g)].map((m) => m[1].replace(/\/$/, ""));
console.log("Sitemap URL:", urls.length);

// hedef: avrupadis İstanbul-Avrupa canlı fiyat slug'ları
const live = JSON.parse(readFileSync("scripts/data/price-live.json", "utf8"));
const target = new Set(live.price);
const targetMissing = [...target].filter((s) => !urls.includes(s)).sort();
console.log("Hedef fiyat slug:", target.size);
console.log("Sitemap'te EKSİK olan hedef slug:", targetMissing.length);
for (const s of targetMissing) console.log("  ✗", s);

// sitemap'teki fiyat slug'ları hedefte olmayanlar (kapsam dışı görünürler)
const priceInSitemap = urls.filter((s) => s.includes("fiyat") || s.includes("fiyati"));
const outside = priceInSitemap.filter((s) => !target.has(s)).sort();
console.log("\nSitemap'teki fiyat slug:", priceInSitemap.length);
console.log("Hedef dışı (görünür) fiyat slug:", outside.length);
for (const s of outside) console.log("  ?", s);
