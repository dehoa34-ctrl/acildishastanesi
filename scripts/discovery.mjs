import { readFileSync, writeFileSync } from "node:fs";

const EUROPEAN_DISTRICTS = new Set([
  "arnavutkoy","avcilar","bagcilar","bahcelievler","bakirkoy","basaksehir",
  "bayrampasa","besiktas","beylikduzu","beyoglu","buyukcekmece","catalca","esenler",
  "esenyurt","eyupsultan","fatih","gaziosmanpasa","gungoren","kagithane",
  "kucukcekmece","sariyer","silivri","sisli","sultangazi","zeytinburnu"
]);

// Sistem kalıpları -> grup anahtarı
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
  ["implant-fiyati", "implant-marka"],
  ["ortodonti-tedavisi-ve-fiyatlari", "ortodonti"],
  ["dis-implanti", "implant-rehber"],
];

function systemOf(slug) {
  for (const [pat, key] of SYSTEM_PATTERNS) {
    if (slug.includes(pat)) return key;
  }
  return null;
}

// 1) avrupadis slug seti: blog basinitem + tüm href'ler
const slugs = new Set();
for (const s of readFileSync("C:/Users/canbi/AppData/Local/Temp/opencode/avrupadis/blog-all/all_posts.txt", "utf8").split(/\r?\n/)) {
  if (s.trim()) slugs.add(s.trim().split("/").filter(Boolean).pop());
}
for (const s of readFileSync("C:/Users/canbi/AppData/Local/Temp/opencode/avrupadis/all_href_slugs.txt", "utf8").split(/\r?\n/)) {
  if (!s.trim()) continue;
  const parts = s.split("/").filter(Boolean);
  const last = parts[parts.length - 1];
  if (last && last !== "tr") slugs.add(last);
}
console.log("Toplam avrupadis slug:", slugs.size);

// 2) İstanbul-Avrupa kapsamı filtre
const candidates = [];
for (const slug of slugs) {
  const first = slug.split("-")[0];
  if (first === "istanbul" || EUROPEAN_DISTRICTS.has(first)) {
    candidates.push(slug);
  }
}
console.log("İstanbul-Avrupa aday sayısı:", candidates.length);

// 3) Sistem hub adayları (istanbul-{sistem})
const HUB_SYSTEMS = [
  "porselen-dis-kaplama-fiyatlari","seffaf-plak-fiyatlari","gulus-tasarimi-fiyatlari",
  "zirkonyum-dis-kaplama-fiyatlari","emax-dis-kaplama-fiyatlari","lamine-dis-kaplama-fiyatlari",
  "metal-dis-kaplama-fiyatlari","kron-dis-kaplama-fiyatlari","dis-kaplama-fiyatlari",
  "dis-dolgu-fiyatlari","dis-beyazlatma-fiyatlari","lazerle-dis-beyazlatma-fiyatlari",
  "dis-tasi-temizligi-fiyatlari","protez-dis-fiyatlari","dis-teli-fiyatlari",
  "kanal-tedavisi-fiyatlari","dis-rontgeni-fiyatlari","dis-tomografisi-fiyatlari",
  "dis-cekim-fiyatlari","20lik-dis-cekimi-fiyatlari","implant-fiyatlari",
];
for (const hub of HUB_SYSTEMS) {
  candidates.push(`istanbul-${hub}`);
}
const uniqueCandidates = [...new Set(candidates)];
console.log("Benzersiz aday:", uniqueCandidates.length);

// 4) HTTP 200 kontrolü (eşzamanlı 6)
async function check(url) {
  try {
    const res = await fetch(url, { redirect: "follow", headers: { "User-Agent": "Mozilla/5.0" } });
    return { url, status: res.status };
    } catch {
    return { url, status: 0 };
  }
}
async function runPool(urls, concurrency = 6) {
  const results = [];
  let idx = 0;
  async function worker() {
    while (idx < urls.length) {
      const u = urls[idx++];
      results.push(await check(u));
    }
  }
  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  return results;
}

console.log("HTTP kontrol başlıyor...");
const checks = await runPool(uniqueCandidates.map((s) => `https://www.avrupadis.com/${s}/`));
const live = [];
for (const c of checks) {
  if (c.status === 200) {
    const slug = c.url.split("/").filter(Boolean).pop();
    live.push(slug);
  } else {
    console.log("  (atla) 404/err:", c.url.replace("https://www.avrupadis.com/", ""), "->", c.status);
  }
}
console.log("Canlı İstanbul-Avrupa sayfası:", live.length);

// Grupla
const bySystem = {};
for (const slug of live) {
  const sys = systemOf(slug) || "diger";
  (bySystem[sys] = bySystem[sys] || []).push(slug);
}
for (const [k, v] of Object.entries(bySystem).sort((a, b) => b[1].length - a[1].length)) {
  console.log(`  ${k.padEnd(16)} ${v.length}`);
}

// 5) Bizim mevcut slug'larla fark
const ourSlugs = [...readFileSync("src/lib/services.ts", "utf8").matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const ourSet = new Set(ourSlugs);
const missing = live.filter((s) => !ourSet.has(s));
const matched = live.filter((s) => ourSet.has(s));
console.log("\nEKSİK (eklenecek):", missing.length);
console.log("MEVCUT (eşleşen):", matched.length);

writeFileSync("scripts/data/istanbul-live.json", JSON.stringify({ live, bySystem }, null, 2));
writeFileSync("scripts/data/missing.json", JSON.stringify(missing.sort(), null, 2));
writeFileSync("scripts/data/matched.json", JSON.stringify(matched.sort(), null, 2));
console.log("\nKayıt: scripts/data/istanbul-live.json, missing.json, matched.json");
