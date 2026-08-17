import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";

const DECODE = new TextDecoder("utf-8");
const OUT = "scripts/data/raw";
mkdirSync(OUT, { recursive: true });

function decodeEntities(s) {
  return s
    .replace(/&ccedil;/g, "ç")
    .replace(/&Ccedil;/g, "Ç")
    .replace(/&CCEDIL;/g, "Ç")
    .replace(/&uuml;/g, "ü")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&ouml;/g, "ö")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&nbsp;/g, " ")
    .replace(/&rsquo;/g, "’")
    .replace(/&lsquo;/g, "‘")
    .replace(/&ldquo;/g, "“")
    .replace(/&rdquo;/g, "”")
    .replace(/&ndash;/g, "–")
    .replace(/&mdash;/g, "—")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&#(\d+);/g, (_m, n) => String.fromCharCode(Number(n)));
}

function clean(s) {
  return decodeEntities(s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function extract(html, slug) {
  const h1 = clean(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");

  const afterH1 = html.slice((html.toLowerCase().indexOf("</h1>") || 0) + 5);
  const firstP = afterH1.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  let intro = firstP ? clean(firstP[1]) : "";
  if (!intro && h1) intro = h1;

  // og:image
  const ogImg = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1] ?? "";

  // fiyat tablosu
  let priceNote = "";
  const priceRows = [];
  const table = html.match(/<table[^>]*>([\s\S]*?)<\/table>/i);
  if (table) {
    const ths = [...table[1].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g)].map((m) => clean(m[1]));
    if (ths.length >= 2) priceNote = ths[1];
    for (const r of table[1].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
      const cells = [...r[1].matchAll(/<td[^>]*>([\s\S]*?)<\/td>/g)].map((m) => clean(m[1]));
      if (cells.length >= 2) priceRows.push({ name: cells[0], price: cells[1] });
    }
  }

  // body bölümleri (h2 + paragraflar)
  const body = [];
  const sectionRe = /<h2[^>]*>([\s\S]*?)<\/h2>([\s\S]*?)(?=<h2[^>]*>|$)/gi;
  let m;
  while ((m = sectionRe.exec(html))) {
    const h2Text = clean(m[1]);
    if (!h2Text) continue;
    const paragraphs = [];
    for (const pm of m[2].matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)) {
      const t = clean(pm[1]);
      if (t) paragraphs.push(t);
    }
    body.push({ h2: h2Text, paragraphs });
  }

  return { slug, h1, intro, image: ogImg, priceNote, priceRows, body };
}

async function fetchPage(slug) {
  const url = `https://www.avrupadis.com/${slug}/`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/125.0" },
      });
      if (res.status !== 200) return { slug, status: res.status, error: `HTTP ${res.status}` };
      const buf = Buffer.from(await res.arrayBuffer());
      const html = DECODE.decode(buf);
      const data = extract(html, slug);
      writeFileSync(`${OUT}/${slug}.json`, JSON.stringify(data, null, 2));
      return { slug, status: 200, rows: data.priceRows.length, body: data.body.length };
    } catch (e) {
      if (attempt === 3) return { slug, status: 0, error: e.message };
      await new Promise((r) => setTimeout(r, 1500 * attempt));
    }
  }
}

const price = JSON.parse(readFileSync("scripts/data/price-live.json", "utf8"));
const matched = new Set(JSON.parse(readFileSync("scripts/data/matched.json", "utf8")));
// Mojibake'li mevcut kayıtlar yeniden çekilecek
const EXTRA = [
  "catalca-dis-kaplama-fiyatlari",
  "esenler-porselen-dis-kaplama-fiyatlari",
  "kucukcekmece-gulus-tasarimi-fiyatlari",
  "lazerle-dis-beyazlatma-fiyatlari",
];
const targets = [...new Set([...price.price.filter((s) => !matched.has(s)), ...EXTRA])];
console.log("Hedef sayfa:", targets.length);

// halihazırda çekilmiş olanları atla
const todo = targets.filter((s) => !existsSync(`${OUT}/${s}.json`));
console.log("Çekilecek:", todo.length);

const results = [];
let idx = 0;
async function worker() {
  while (idx < todo.length) {
    const slug = todo[idx++];
    results.push(await fetchPage(slug));
  }
}
await Promise.all(Array.from({ length: 6 }, () => worker()));

const ok = results.filter((r) => r.status === 200);
const fail = results.filter((r) => r.status !== 200);
console.log("OK:", ok.length, "  HATA:", fail.length);
for (const f of fail) console.log("  FAIL:", f.slug, f.error || "");
const noTable = ok.filter((r) => r.rows === 0);
console.log("Tablosuz sayfalar:", noTable.length);
for (const s of noTable) console.log("  NOTABLE:", s.slug);
