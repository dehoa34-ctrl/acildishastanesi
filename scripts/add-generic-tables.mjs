import { readFileSync, writeFileSync } from "node:fs";

const ADD = {
  "dis-agrisi-tedavisi-fiyatlari": {
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    rows: [
      { name: "Kanal Tedavisi", price: "2.350 TL'den başlamaktadır." },
      { name: "Diş Dolgusu", price: "1.454 TL'den başlamaktadır." },
      { name: "Diş Çekimi", price: "1.000 TL'den başlamaktadır." },
    ],
  },
  "dis-eti-estetigi-fiyatlari": {
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    rows: [
      { name: "Diş Eti Estetiği (Gingivektomi)", price: "4.500 TL'den başlamaktadır." },
    ],
  },
  "lazerle-dis-beyazlatma-fiyatlari": {
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    rows: [
      { name: "Lazerle Diş Beyazlatma", price: "9.000 TL'den başlamaktadır." },
    ],
  },
};

let s = readFileSync("src/lib/services.ts", "utf8");

for (const [slug, cfg] of Object.entries(ADD)) {
  const i = s.indexOf(`slug: "${slug}"`);
  if (i < 0) { console.log("BULUNAMADI:", slug); continue; }
  const catPos = s.indexOf(`category: "fiyat",`, i);
  if (catPos < 0) { console.log("category yok:", slug); continue; }
  const rows = cfg.rows.map((r) => `{"name":"${r.name}","price":"${r.price}"}`).join(",");
  const note = `priceNote: "${cfg.priceNote}",\n    priceRows: [${rows}],\n    `;
  s = s.slice(0, catPos) + note + s.slice(catPos);
  console.log("tablo eklendi:", slug, "→", cfg.rows.length, "satır");
}

writeFileSync("src/lib/services.ts", s, "utf8");
console.log("yazıldı ✓");
