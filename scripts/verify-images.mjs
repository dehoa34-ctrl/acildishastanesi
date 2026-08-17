import { readFileSync, existsSync, readdirSync } from "node:fs";
const content = readFileSync("src/lib/service-content.ts", "utf8");
const services = readFileSync("src/lib/services.ts", "utf8");

// her content kaydının image'i dosya var mı?
const imgs = [...content.matchAll(/image:\s*"([^"]+)"/g)].map((m) => m[1]);
const missing = imgs.filter((p) => !existsSync("public" + p));
console.log("content image kaydı:", imgs.length, "  eksik dosya:", missing.length);
for (const m of missing) console.log("  EKSİK:", m);

// her service'in content'i var mı?
const slugs = [...services.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const contentKeys = [...content.matchAll(/"([a-z0-9-]+)":\s*\{/g)].map((m) => m[1]);
const noContent = slugs.filter((s) => !contentKeys.includes(s));
console.log("\nservices slug:", slugs.length, " content key:", contentKeys.length);
console.log("content'i olmayan service:", noContent.length, noContent.slice(0, 10));

// content'i olup service'i olmayan (fazlalık)
const noService = contentKeys.filter((s) => !slugs.includes(s));
console.log("service'i olmayan content:", noService.length, noService.slice(0, 10));

// görsel dosyaların sayısı
const imgFiles = readdirSync("public/images/servis").filter((f) => f.endsWith("-hero.webp"));
console.log("\nhero görsel dosyası:", imgFiles.length);
