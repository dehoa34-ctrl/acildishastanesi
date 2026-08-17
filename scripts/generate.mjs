import { readFileSync, readdirSync, writeFileSync, existsSync } from "node:fs";

const RAW_DIR = "scripts/data/raw";

const LOCATIONS = {
  istanbul: "İstanbul", arnavutkoy: "Arnavutköy", avcilar: "Avcılar",
  bagcilar: "Bağcılar", bahcelievler: "Bahçelievler", bakirkoy: "Bakırköy",
  basaksehir: "Başakşehir", bayrampasa: "Bayrampaşa", besiktas: "Beşiktaş",
  beylikduzu: "Beylikdüzü", beyoglu: "Beyoğlu", buyukcekmece: "Büyükçekmece",
  catalca: "Çatalca", esenler: "Esenler", esenyurt: "Esenyurt",
  eyupsultan: "Eyüpsultan", fatih: "Fatih", gaziosmanpasa: "Gaziosmanpaşa",
  gungoren: "Güngören", kagithane: "Kağıthane", kucukcekmece: "Küçükçekmece",
  sariyer: "Sarıyer", silivri: "Silivri", sisli: "Şişli",
  sultangazi: "Sultangazi", zeytinburnu: "Zeytinburnu",
};

const SYSTEM_PATTERNS = [
  ["porselen-dis-kaplama-fiyatlari", "porselen"],
  ["seffaf-plak-fiyatlari", "seffaf"],
  ["gulus-tasarimi-fiyatlari", "gulus"],
  ["zirkonyum-dis-kaplama-fiyatlari", "zirkonyum"],
  ["emax-dis-kaplama-fiyatlari", "emax"],
  ["lamine-dis-kaplama-fiyatlari", "lamine"],
  ["metal-dis-kaplama-fiyatlari", "metal"],
  ["kron-dis-kaplama-fiyatlari", "kron"],
  ["dis-kaplama-fiyatlari", "kaplama"],
  ["dis-dolgu-fiyatlari", "dolgu"],
  ["dis-beyazlatma-fiyatlari", "beyazlatma"],
  ["lazerle-dis-beyazlatma-fiyatlari", "lazer-beyazlatma"],
  ["dis-tasi-temizligi-fiyatlari", "tasi"],
  ["protez-dis-fiyatlari", "protez"],
  ["dis-teli-fiyatlari", "dis-teli"],
  ["kanal-tedavisi-fiyatlari", "kanal"],
  ["dis-rontgeni-fiyatlari", "rontgen"],
  ["dis-tomografisi-fiyatlari", "tomografi"],
  ["dis-cekim-fiyatlari", "cekim"],
  ["20lik-dis-cekimi-fiyatlari", "20lik"],
  ["implant-fiyatlari", "implant"],
  ["implant-fiyati", "implant"],
  ["ortodonti-tedavisi-ve-fiyatlari", "ortodonti"],
];

const SYSTEM_LABELS = {
  porselen: "Porselen Diş Kaplama Fiyatları",
  seffaf: "Şeffaf Plak Fiyatları",
  gulus: "Gülüş Tasarımı Fiyatları",
  zirkonyum: "Zirkonyum Diş Kaplama Fiyatları",
  emax: "Emax Diş Kaplama Fiyatları",
  lamine: "Lamine Diş Kaplama Fiyatları",
  metal: "Metal Diş Kaplama Fiyatları",
  kron: "Kron Diş Kaplama Fiyatları",
  kaplama: "Diş Kaplama Fiyatları",
  dolgu: "Diş Dolgu Fiyatları",
  beyazlatma: "Diş Beyazlatma Fiyatları",
  "lazer-beyazlatma": "Lazerle Diş Beyazlatma Fiyatları",
  tasi: "Diş Taşı Temizliği Fiyatları",
  protez: "Protez Diş Fiyatları",
  "dis-teli": "Diş Teli Fiyatları",
  kanal: "Kanal Tedavisi Fiyatları",
  rontgen: "Diş Röntgeni Fiyatları",
  tomografi: "Diş Tomografisi Fiyatları",
  cekim: "Diş Çekimi Fiyatları",
  "20lik": "20'lik Diş Çekimi Fiyatları",
  implant: "İmplant Fiyatları",
  ortodonti: "Ortodonti Tedavisi ve Fiyatları",
};

export function systemOf(slug) {
  for (const [pat, key] of SYSTEM_PATTERNS) {
    if (slug.includes(pat)) return key;
  }
  return null;
}

const FEATURES = [
  "7/24 açık klinik",
  "Uzman hekim kadrosu",
  "Son teknoloji cihazlar",
  "Net ve şeffaf fiyat",
  "Cumartesi, pazar ve bayramlarda açık",
];
const PRICE_NOTE = "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.";

function buildServiceEntry(raw) {
  const slug = raw.slug;
  const first = slug.split("-")[0];
  const system = systemOf(slug);
  const locName = LOCATIONS[first] || first;
  const sysLabel = (system && SYSTEM_LABELS[system]) || system || "";
  const name = sysLabel ? `${locName} ${sysLabel}` : raw.h1 || slug;
  const intro = raw.intro || `${name} hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz.`;
  const hasRows = raw.priceRows && raw.priceRows.length > 0;
  return {
    text: `  {\n    slug: ${JSON.stringify(slug)},\n    name: ${JSON.stringify(name)},\n    short: ${JSON.stringify(`${name} — 2026 güncel TDB tarifesi.`)},\n    intro: ${JSON.stringify(intro)},\n    features: ${JSON.stringify(FEATURES)},\n${hasRows ? `    priceNote: ${JSON.stringify(PRICE_NOTE)},\n    priceRows: ${JSON.stringify(raw.priceRows)},\n` : ""}    category: "fiyat",\n    menu: false,\n  }`,
    name,
  };
}

function buildContentEntry(raw) {
  const slug = raw.slug;
  const first = slug.split("-")[0];
  const system = systemOf(slug);
  const locName = LOCATIONS[first] || first;
  const sysLabel = (system && SYSTEM_LABELS[system]) || system || "";
  const display = sysLabel ? `${locName} ${sysLabel}` : raw.h1 || slug;
  const body = (raw.body || []).filter((b) => b.h2 && b.paragraphs.length > 0);
  const faq = [
    { question: `${display} ne kadar?`, answer: "2026 güncel tarifeye göre fiyatlar tedavi yöntemine ve seansa göre değişir. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz." },
    { question: "Fiyatlar KDV dahil mi?", answer: "Fiyat tarifesinde belirtilen ücretler KDV hariçtir. Kesin fiyat muayene sonrası netleştirilir." },
  ];
  return `${JSON.stringify(slug)}: {
    image: ${JSON.stringify(`/images/servis/${slug}-hero.webp`)},
    body: ${JSON.stringify(body)},
    faq: ${JSON.stringify(faq)},
    related: ${JSON.stringify(["dis-tedavisi-fiyatlari"])},
  }`;
}

/* ---- raw verileri yükle ---- */
const raws = [];
for (const f of readdirSync(RAW_DIR)) {
  if (!f.endsWith(".json")) continue;
  raws.push(JSON.parse(readFileSync(`${RAW_DIR}/${f}`, "utf8")));
}
console.log("raw veri:", raws.length);

/* ---- services.ts ---- */
const servicesRaw = readFileSync("src/lib/services.ts", "utf8");
const arrStartIdx = servicesRaw.indexOf("export const services: Service[] = [");
const arrOpen = servicesRaw.indexOf("[", arrStartIdx);
const arrClose = servicesRaw.indexOf("];", arrOpen);
const prefix = servicesRaw.slice(0, arrStartIdx);
const tail = servicesRaw.slice(arrClose + 2);

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
    if (ch === "}") { depth--; if (depth === 0 && start >= 0) { spans.push([start, i + 1]); start = -1; } continue; }
  }
  return spans;
}

const oldEntries = splitTopObjects(servicesRaw.slice(arrOpen + 1, arrClose)).map(([s, e]) => servicesRaw.slice(arrOpen + 1 + s, arrOpen + 1 + e));
const oldBySlug = new Map();
const nonSlug = [];
for (const e of oldEntries) {
  const slug = e.match(/slug:\s*"([^"]+)"/)?.[1];
  if (slug) oldBySlug.set(slug, e);
  else nonSlug.push(e);
}

const generated = raws.map((r) => ({ slug: r.slug, text: buildServiceEntry(r).text }));
const genBySlug = new Map(generated.map((g) => [g.slug, g.text]));

// mevcut sıralama korunur; scrape edilenler yenilenir; yeni slug'lar sona eklenir
const newEntries = [];
const seen = new Set();
for (const [slug, e] of oldBySlug) {
  seen.add(slug);
  newEntries.push(genBySlug.has(slug) ? genBySlug.get(slug) : e);
}
for (const g of generated) {
  if (!seen.has(g.slug)) { seen.add(g.slug); newEntries.push(g.text); }
}
newEntries.push(...nonSlug);

writeFileSync("src/lib/services.ts", prefix + "export const services: Service[] = [\n" + newEntries.join(",\n") + "\n];" + tail, "utf8");
console.log("services.ts:", newEntries.length, "entry yazıldı");

/* ---- service-content.ts ---- */
const contentRaw = readFileSync("src/lib/service-content.ts", "utf8");
const cOpen = contentRaw.indexOf("= {");
const cBodyStart = contentRaw.indexOf("{", cOpen);
const cClose = contentRaw.lastIndexOf("};");
const cBody = contentRaw.slice(cBodyStart + 1, cClose);

const cSpans = splitTopObjects(cBody);
const contentOld = [];
for (const [s, e] of cSpans) {
  const before = cBody.slice(0, s);
  const keyM = before.match(/"([a-z0-9-]+)"\s*:\s*$/);
  if (!keyM) { contentOld.push({ key: null, full: cBody.slice(s, e) }); continue; }
  const keyIdx = before.lastIndexOf('"' + keyM[1] + '"');
  contentOld.push({ key: keyM[1], full: cBody.slice(keyIdx, e) });
}
const contentBySlug = new Map();
for (const r of contentOld) if (r.key) contentBySlug.set(r.key, r.full);

const genContent = raws.map((r) => ({ slug: r.slug, text: buildContentEntry(r) }));
const genContentBySlug = new Map(genContent.map((g) => [g.slug, g.text]));

const newContentEntries = [];
const cSeen = new Set();
for (const [slug, full] of contentBySlug) {
  cSeen.add(slug);
  newContentEntries.push(genContentBySlug.has(slug) ? genContentBySlug.get(slug) : full);
}
for (const g of genContent) {
  if (!cSeen.has(g.slug)) { cSeen.add(g.slug); newContentEntries.push(g.text); }
}

writeFileSync("src/lib/service-content.ts", contentRaw.slice(0, cBodyStart + 1) + "\n" + newContentEntries.join(",\n") + "\n" + contentRaw.slice(cClose), "utf8");
console.log("service-content.ts:", newContentEntries.length, "kayıt yazıldı");

/* ---- görseller ---- */
const imgDir = "public/images/servis";
let downloaded = 0, failed = 0;
async function dl(raw) {
  if (!raw.image) return;
  const dest = `${imgDir}/${raw.slug}-hero.webp`;
  if (existsSync(dest)) { downloaded++; return; }
  try {
    const res = await fetch(raw.image, { headers: { "User-Agent": "Mozilla/5.0" } });
    if (!res.ok) { failed++; console.log("  img FAIL", raw.slug, res.status); return; }
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    downloaded++;
  } catch (e) { failed++; console.log("  img ERR", raw.slug, e.message); }
}
let i = 0;
async function dlPool(concurrency = 8) {
  const workers = Array.from({ length: concurrency }, async () => {
    while (i < raws.length) await dl(raws[i++]);
  });
  await Promise.all(workers);
}
await dlPool();
console.log("görsel indirildi:", downloaded, "  hata:", failed);
