import { readFileSync } from "node:fs";

const live = JSON.parse(readFileSync("scripts/data/price-live.json", "utf8"));
const target = new Set(live.price); // canlı avrupadis İstanbul-Avrupa fiyat slug'ları

const services = readFileSync("src/lib/services.ts", "utf8");
const slugs = [...services.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const ourSet = new Set(slugs);

// 1) avrupadis'te var, bizde yok (EKSİK)
const missing = [...target].filter((s) => !ourSet.has(s)).sort();
console.log("Hedef (canlı) fiyat slug:", target.size);
console.log("EKSİK (bizde yok):", missing.length);
for (const s of missing) console.log("  ✗", s);

// 2) bizde var, avrupadis İstanbul-Avrupa'da yok (FAZLA / kapsam dışı)
const priceSlugs = slugs.filter((s) => s.includes("fiyat") || s.includes("fiyati"));
const extras = priceSlugs.filter((s) => !target.has(s)).sort();
console.log("\nBizdeki fiyat slug:", priceSlugs.length);
console.log("KAPSAM DIŞI (avrupadis İst-Avrupa setinde yok):", extras.length);
for (const s of extras) console.log("  ?", s);
