import { readFileSync, writeFileSync } from "node:fs";

const PRICES = {
  "astra-implant-fiyati": "20.000 TL'den başlamaktadır.",
  "bego-implant-fiyati": "19.000 TL'den başlamaktadır.",
  "medentika-implant-fiyati": "17.500 TL'den başlamaktadır.",
  "medigma-implant-fiyati": "12.000 TL'den başlamaktadır.",
  "nobel-biocare-implant-fiyati": "24.000 TL'den başlamaktadır.",
  "nucleoss-implant-fiyati": "10.000 TL'den başlamaktadır.",
  "osstem-implant-fiyati": "14.000 TL civarından başlamaktadır.",
  "straumann-implant-fiyati": "25.000 TL'den başlamaktadır.",
};

const NAME = {
  "astra-implant-fiyati": "Astra",
  "bego-implant-fiyati": "Bego",
  "medentika-implant-fiyati": "Medentika",
  "medigma-implant-fiyati": "Medigma",
  "nobel-biocare-implant-fiyati": "Nobel Biocare",
  "nucleoss-implant-fiyati": "Nucleoss",
  "osstem-implant-fiyati": "Osstem",
  "straumann-implant-fiyati": "Straumann",
};

let s = readFileSync("src/lib/services.ts", "utf8");

for (const [slug, price] of Object.entries(PRICES)) {
  const i = s.indexOf(`slug: "${slug}"`);
  if (i < 0) { console.log("BULUNAMADI:", slug); continue; }
  // entry'nin sonundaki "category: \"fiyat\"," kısmından önce priceNote + priceRows ekle
  const catPos = s.indexOf(`category: "fiyat",`, i);
  if (catPos < 0) { console.log("category bulunamadı:", slug); continue; }
  const brand = NAME[slug];
  const note = `priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",\n    priceRows: [{"name":"${brand} İmplant","price":"${price}"}],\n    `;
  s = s.slice(0, catPos) + note + s.slice(catPos);
  console.log("tablo eklendi:", slug, "→", price);
}

writeFileSync("src/lib/services.ts", s, "utf8");
console.log("yazıldı ✓");
