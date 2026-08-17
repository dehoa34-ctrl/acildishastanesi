import { readFileSync } from "node:fs";

const s = readFileSync("src/lib/services.ts", "utf8");

// her service'i ayır
const arrStart = s.indexOf("export const services: Service[] = [");
const arrOpen = s.indexOf("[", arrStart);
const arrClose = s.indexOf("];", arrOpen);
const body = s.slice(arrOpen + 1, arrClose);

const spans = [];
let depth = 0, start = -1, inStr = false, esc = false;
for (let i = 0; i < body.length; i++) {
  const ch = body[i];
  if (inStr) { if (esc) esc = false; else if (ch === "\\") esc = true; else if (ch === '"') inStr = false; continue; }
  if (ch === '"') { inStr = true; continue; }
  if (ch === "{") { if (depth === 0) start = i; depth++; continue; }
  if (ch === "}") { depth--; if (depth === 0 && start >= 0) { spans.push(body.slice(start, i + 1)); start = -1; } continue; }
}

const fiyatNoRows = [];
const fiyatWithRows = [];
for (const seg of spans) {
  const slug = seg.match(/slug:\s*"([^"]+)"/)?.[1];
  const cat = seg.match(/category:\s*"([^"]+)"/)?.[1];
  if (!slug || cat !== "fiyat") continue;
  const hasRows = /priceRows:/.test(seg);
  if (hasRows) fiyatWithRows.push(slug);
  else fiyatNoRows.push(slug);
}

console.log("fiyat kategorisi toplam:", fiyatWithRows.length + fiyatNoRows.length);
console.log("priceRows OLAN:", fiyatWithRows.length);
console.log("priceRows OLMAYAN (tablo yok):", fiyatNoRows.length);
for (const x of fiyatNoRows.sort()) console.log("  NO-TABLE:", x);
