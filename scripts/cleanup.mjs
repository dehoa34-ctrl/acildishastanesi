import { readFileSync, writeFileSync, existsSync, readdirSync, rmSync } from "node:fs";

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

function classify(slug) {
  const first = slug.split("-")[0];
  if (PROVINCES.has(first)) return "IL";
  if (ANATOLIAN_DISTRICTS.has(first)) return "ANADOLU";
  return "KEEP";
}

/** cBody içindeki tüm top-level `{...}` objelerini ayır */
function splitTopObjects(body) {
  const spans = [];
  let depth = 0, start = -1, inStr = false, esc = false;
  for (let i = 0; i < body.length; i++) {
    const ch = body[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') { inStr = true; continue; }
    if (ch === "{") { if (depth === 0) start = i; depth++; continue; }
    if (ch === "}") {
      depth--;
      if (depth === 0 && start >= 0) { spans.push([start, i + 1]); start = -1; }
      continue;
    }
  }
  return spans;
}

/* ---------- services.ts ---------- */
const servicesRaw = readFileSync("src/lib/services.ts", "utf8");
const arrStartIdx = servicesRaw.indexOf("export const services: Service[] = [");
const arrOpen = servicesRaw.indexOf("[", arrStartIdx);
const arrClose = servicesRaw.indexOf("];", arrOpen);
const tail = servicesRaw.slice(arrClose + 2);

const entries = splitTopObjects(servicesRaw.slice(arrOpen + 1, arrClose)).map(([s, e]) => servicesRaw.slice(arrOpen + 1 + s, arrOpen + 1 + e));

const parsed = entries.map((entry) => ({
  slug: entry.match(/slug:\s*"([^"]+)"/)?.[1],
  entry,
}));

const toRemove = new Set();
const keep = [];
for (const p of parsed) {
  if (!p.slug) { keep.push(p.entry); continue; }
  if (classify(p.slug) === "KEEP") keep.push(p.entry);
  else toRemove.add(p.slug);
}
console.log("services.ts: total", parsed.length, "→ remove", toRemove.size, "→ keep", keep.length);

const prefix = servicesRaw.slice(0, arrStartIdx);
const newServices =
  prefix + "export const services: Service[] = [\n" + keep.join(",\n") + "\n];" + tail;
writeFileSync("src/lib/services.ts", newServices, "utf8");
console.log("services.ts rebuilt ✓");

/* ---------- service-content.ts ---------- */
const contentRaw = readFileSync("src/lib/service-content.ts", "utf8");
const cOpen = contentRaw.indexOf("= {");
const cBodyStart = contentRaw.indexOf("{", cOpen);
const cClose = contentRaw.lastIndexOf("};");
const cBody = contentRaw.slice(cBodyStart + 1, cClose);

const cSpans = splitTopObjects(cBody);
const contentRecords = [];
for (const [s, e] of cSpans) {
  // key: span öncesindeki "slug": kısmını bul
  const before = cBody.slice(0, s);
  const keyM = before.match(/"([a-z0-9\-]+)"\s*:\s*$/);
  if (!keyM) { contentRecords.push({ key: null, full: cBody.slice(s, e) }); continue; }
  const keyIdx = before.lastIndexOf('"' + keyM[1] + '"');
  contentRecords.push({ key: keyM[1], full: cBody.slice(keyIdx, e) });
}

const contentKeep = contentRecords.filter((r) => r.key && !toRemove.has(r.key));
const removedKeys = contentRecords.filter((r) => r.key && toRemove.has(r.key)).map((r) => r.key);
console.log("service-content.ts: keys", contentRecords.length, "→ remove", removedKeys.length, "→ keep", contentKeep.length);

const newContent =
  contentRaw.slice(0, cBodyStart + 1) + "\n" +
  contentKeep.map((r) => r.full).join(",\n") + "\n" +
  contentRaw.slice(cClose);
writeFileSync("src/lib/service-content.ts", newContent, "utf8");
console.log("service-content.ts rebuilt ✓");

/* ---------- görseller ---------- */
let imgRemoved = 0;
const imgDir = "public/images/servis";
if (existsSync(imgDir)) {
  const files = readdirSync(imgDir);
  for (const slug of toRemove) {
    const hits = files.filter((f) => f.startsWith(slug + "-") || f === slug + ".webp");
    for (const h of hits) { rmSync(`${imgDir}/${h}`); imgRemoved++; }
  }
}
console.log("görseller silindi:", imgRemoved);

writeFileSync("scripts/data/removed-slugs.json", JSON.stringify([...toRemove].sort(), null, 2), "utf8");
console.log("rapor: scripts/data/removed-slugs.json ✓");
