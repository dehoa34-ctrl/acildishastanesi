import { readFileSync, writeFileSync } from "node:fs";

// 81 il (istanbul hariç tutulur -> ayrı)
const PROVINCES = new Set([
  "adana","adiyaman","afyonkarahisar","agri","aksaray","amasya","ankara","antalya",
  "ardahan","artvin","aydin","balikesir","bartin","batman","bayburt","bilecik",
  "bingol","bitlis","bolu","burdur","bursa","canakkale","cankiri","corum","denizli",
  "diyarbakir","duzce","edirne","elazig","erzincan","erzurum","eskisehir","gaziantep",
  "giresun","gumushane","hakkari","hatay","igdir","isparta","izmir","kahramanmaras",
  "karabuk","karaman","kars","kastamonu","kayseri","kilis","kirikkale","kirklareli",
  "kirsehir","kocaeli","konya","kutahya","malatya","manisa","mardin","mersin","mugla",
  "mus","nevsehir","nigde","ordu","osmaniye","rize","sakarya","samsun","sanliurfa",
  "siirt","sinop","sirnak","sivas","tekirdag","tokat","trabzon","tunceli","usak",
  "van","yalova","yozgat","zonguldak"
]);

const ANATOLIAN_DISTRICTS = new Set([
  "adalar","atasehir","beykoz","cekmekoy","kadikoy","kartal","maltepe","pendik",
  "sancaktepe","sile","sultanbeyli","tuzla","umraniye","uskudar"
]);

const EUROPEAN_DISTRICTS = new Set([
  "arnavutkoy","avcilar","bagcilar","bahcelievler","bakirkoy","basaksehir",
  "bayrampasa","besiktas","beylikduzu","beyoglu","buyukcekmece","catalca","esenler",
  "esenyurt","eyupsultan","fatih","gaziosmanpasa","gungoren","kagithane",
  "kucukcekmece","sariyer","silivri","sisli","sultangazi","zeytinburnu"
]);

export function classifyPriceSlug(slug) {
  const first = slug.split("-")[0];
  if (PROVINCES.has(first)) return "IL";
  if (ANATOLIAN_DISTRICTS.has(first)) return "ANADOLU";
  if (EUROPEAN_DISTRICTS.has(first)) return "AVRUPA";
  if (first === "istanbul") return "ISTANBUL";
  return "DIGER";
}

const servicesRaw = readFileSync("src/lib/services.ts", "utf8");

// Array içi top-level entry'leri brace-derinliği ile ayır
const start = servicesRaw.indexOf("export const services: Service[] = [");
const end = servicesRaw.indexOf("];", start);
const arrayBody = servicesRaw.slice(servicesRaw.indexOf("[", start) + 1, end);

const entries = [];
let brace = 0, cur = "", inEntry = false, inStr = false, esc = false;
for (const ch of arrayBody) {
  if (inStr) {
    cur += ch;
    if (esc) esc = false;
    else if (ch === "\\") esc = true;
    else if (ch === '"') inStr = false;
    continue;
  }
  if (ch === '"') { inStr = true; if (inEntry) cur += ch; continue; }
  if (ch === "{") {
    if (brace === 0) { inEntry = true; cur = "{"; }
    brace++;
  } else if (ch === "}") {
    brace--;
    if (brace === 0 && inEntry) { entries.push(cur + "}"); cur = ""; inEntry = false; }
  } else if (inEntry) {
    cur += ch;
  }
}

const parsed = entries.map((e) => {
  const slug = e.match(/slug:\s*"([^"]+)"/)?.[1];
  const cat = e.match(/category:\s*"([^"]+)"/)?.[1];
  return { slug, cat, entry: e };
});

const fiyat = parsed.filter((p) => p.slug && p.cat === "fiyat");
const nonFiyat = parsed.filter((p) => p.slug && p.cat !== "fiyat");

const groups = {};
for (const p of fiyat) {
  const cls = classifyPriceSlug(p.slug);
  (groups[cls] = groups[cls] || []).push(p.slug);
}

const summary = {};
for (const [k, v] of Object.entries(groups)) summary[k] = v.length;
console.log("Total entries parsed:", parsed.length);
console.log("fiyat:", fiyat.length, "non-fiyat:", nonFiyat.length);
console.log("Classification:", JSON.stringify(summary, null, 2));

// DİĞER kategorisini incele (hub'lar, markalar, özel)
console.log("\n--- DIGER (kategori fiyat, ilk token tanınmayan) ---");
for (const s of (groups.DIGER || []).sort()) console.log("  ", s);

// AVRUPA kalacaklar
console.log("\n--- AVRUPA (kalacak) count:", (groups.AVRUPA || []).length);

writeFileSync("scripts/data/fiyat-groups.json", JSON.stringify(groups, null, 2));
writeFileSync("scripts/data/all-parsed.json", JSON.stringify(parsed.map(({ slug, cat }) => ({ slug, cat })), null, 2));
console.log("\nSaved scripts/data/fiyat-groups.json");
