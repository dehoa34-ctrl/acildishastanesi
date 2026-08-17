import { readFileSync } from "node:fs";

const check = (file, label) => {
  const c = readFileSync(file, "utf8");
  const ob = (c.match(/\{/g) || []).length;
  const cb = (c.match(/\}/g) || []).length;
  const obr = (c.match(/\[/g) || []).length;
  const cbr = (c.match(/\]/g) || []).length;
  console.log(`${label}: { }=${ob}/${cb}  [ ]=${obr}/${cbr}  → ${ob === cb && obr === cbr ? "OK" : "DENGESIZ!"}`);
};

check("src/lib/services.ts", "services.ts");
check("src/lib/service-content.ts", "service-content.ts");

const services = readFileSync("src/lib/services.ts", "utf8");
const slugs = [...services.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
console.log("services.ts slug count:", slugs.length);

const removed = JSON.parse(readFileSync("scripts/data/removed-slugs.json", "utf8"));
const removedSet = new Set(removed);
const remaining = slugs.filter((s) => removedSet.has(s));
console.log("Kalan slug'lar içinde silinmesi gereken var mı:", remaining.length, remaining.slice(0, 5));

// İstanbul/Avrupa beklenenler
const avrupa = slugs.filter((s) => s.includes("porselen-dis-kaplama-fiyatlari") || s.includes("istanbul"));
console.log("Kalan porselen/istanbul slug'ları:", avrupa.length);
for (const s of avrupa.sort()) console.log("  ", s);
