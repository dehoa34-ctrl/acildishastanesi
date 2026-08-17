import { readFileSync, writeFileSync } from "node:fs";

const PROVINCES = ["Adana","Adıyaman","Afyonkarahisar","Ağrı","Aksaray","Amasya","Ankara","Antalya","Ardahan","Artvin","Aydın","Balıkesir","Bartın","Batman","Bayburt","Bilecik","Bingöl","Bitlis","Bolu","Burdur","Bursa","Çanakkale","Çankırı","Çorum","Denizli","Diyarbakır","Düzce","Edirne","Elazığ","Erzincan","Erzurum","Eskişehir","Gaziantep","Giresun","Gümüşhane","Hakkari","Hatay","Iğdır","Isparta","İstanbul","İzmir","Kahramanmaraş","Karabük","Karaman","Kars","Kastamonu","Kayseri","Kilis","Kırıkkale","Kırklareli","Kırşehir","Kocaeli","Konya","Kütahya","Malatya","Manisa","Mardin","Mersin","Muğla","Muş","Nevşehir","Niğde","Ordu","Osmaniye","Rize","Sakarya","Samsun","Siirt","Sinop","Sivas","Şanlıurfa","Şırnak","Tekirdağ","Tokat","Trabzon","Tunceli","Uşak","Van","Yalova","Yozgat","Zonguldak"];
const DISTRICTS = ["Adalar","Arnavutköy","Ataşehir","Avcılar","Bağcılar","Bahçelievler","Bakırköy","Başakşehir","Bayrampaşa","Beşiktaş","Beykoz","Beylikdüzü","Beyoğlu","Büyükçekmece","Çatalca","Çekmeköy","Esenler","Esenyurt","Eyüpsultan","Fatih","Gaziosmanpaşa","Güngören","Kadıköy","Kağıthane","Kartal","Küçükçekmece","Maltepe","Pendik","Sancaktepe","Sarıyer","Şile","Silivri","Şişli","Sultanbeyli","Sultangazi","Tuzla","Ümraniye","Üsküdar","Zeytinburnu"];
const LOCS = [...new Set([...PROVINCES, ...DISTRICTS])].sort((a, b) => b.length - a.length); // uzun olan önce (örn. "Afyonkarahisar" vs "Ağrı")
const LOC_ALT = LOCS.map((l) => l.replace(/ı/g, "[ıiİI]").replace(/İ/g, "[iIİı]").replace(/ö/g, "[öÖ]").replace(/Ö/g, "[öÖ]").replace(/ü/g, "[üÜ]").replace(/Ü/g, "[üÜ]").replace(/ç/g, "[çÇ]").replace(/Ç/g, "[çÇ]").replace(/ş/g, "[şŞ]").replace(/Ş/g, "[şŞ]").replace(/ğ/g, "[ğĞ]").replace(/Ğ/g, "[ğĞ]"));

function isLocationListItem(p) {
  if (p.length > 100) return false;
  if (/\d/.test(p)) return false;
  if (/[.,;:!?]/.test(p)) return false;
  // TÜM paragraf = konum + birkaç kelime + "Fiyatları" (liste satırı)
  return new RegExp(`^(?:${LOC_ALT.join("|")})\\s+\\S+(?:\\s+\\S+){0,6}\\s*Fiyatları?$`, "i").test(p);
}
function isGiantList(p) {
  // 3+ ardışık "{konum} ... Fiyatları" belirteci (dev liste)
  return new RegExp(`(?:(?:${LOC_ALT.join("|")})\\s+[^.,;:!?]{1,60}?\\s*Fiyatları?\\s*){3,}`, "i").test(p);
}
function isPriceValue(p) {
  // Yalnızca bağımsız fiyat hücresi/KDV satırı (cümle içinde geçen fiyatı değil)
  return /^\s*KDV\s*HARİÇ\s*$/i.test(p)
    || /^\d[\d.,]+\s*TL/i.test(p)
    || /^TL(?:’|')?den başlamaktadır/i.test(p);
}
function isShortTableName(p) {
  if (p.length >= 90) return false;
  if (/\d/.test(p)) return false;
  if (/[.,;:!?]/.test(p)) return false;
  return /Fiyatları?$/.test(p);
}
function isWhitespace(p) {
  return p.trim() === "";
}

function cleanParagraphs(paras) {
  return paras.filter((p) => {
    if (isWhitespace(p)) return false;
    if (isPriceValue(p)) return false;
    if (isLocationListItem(p)) return false;
    if (isGiantList(p)) return false;
    if (isShortTableName(p)) return false;
    return true;
  });
}

function cleanBody(body) {
  if (!Array.isArray(body)) return body;
  return body
    .filter((sec) => sec && typeof sec.h2 === "string" && sec.h2.trim() !== "")
    .filter((sec) => !/Ne Kadar\?/.test(sec.h2)) // H1/intro tekrarı olan bölüm
    .map((sec) => ({
      h2: sec.h2,
      paragraphs: cleanParagraphs(Array.isArray(sec.paragraphs) ? sec.paragraphs : []),
    }))
    .filter((sec) => sec.paragraphs.length > 0);
}

/* ---- service-content.ts parse ---- */
const raw = readFileSync("src/lib/service-content.ts", "utf8");
const cOpen = raw.indexOf("= {");
const cBodyStart = raw.indexOf("{", cOpen);
const cClose = raw.lastIndexOf("};");
const cBody = raw.slice(cBodyStart + 1, cClose);

let modified = 0, removedSections = 0, removedParas = 0;
const newRecords = [];
{
  let depth = 0, start = -1, inStr = false, esc = false;
  for (let i = 0; i < cBody.length; i++) {
    const ch = cBody[i];
    if (inStr) { if (esc) esc = false; else if (ch === "\\") esc = true; else if (ch === '"') inStr = false; continue; }
    if (ch === '"') { inStr = true; continue; }
    if (ch === "{") { if (depth === 0) start = i; depth++; continue; }
    if (ch === "}") {
      depth--;
      if (depth === 0 && start >= 0) {
        // "key": önekini de dahil et
        const before = cBody.slice(0, start);
        const km = before.match(/"([a-z0-9-]+)"\s*:\s*$/);
        const full = km
          ? cBody.slice(before.lastIndexOf('"' + km[1] + '"'), i + 1)
          : cBody.slice(start, i + 1);
        // body temizliği
        const m = full.match(/body:\s*(\[[\s\S]*?\])(?=,\s*faq)/);
        let out = full;
        if (m) {
          try {
            const body = JSON.parse(m[1]);
            const clean = cleanBody(body);
            const beforeParas = countParas(body);
            const afterParas = countParas(clean);
            if (beforeParas !== afterParas) {
              modified++;
              removedParas += beforeParas - afterParas;
              removedSections += (body ? body.length : 0) - clean.length;
              out = full.replace(m[1], JSON.stringify(clean));
            }
          } catch {}
        }
        newRecords.push(out);
        start = -1;
      }
      continue;
    }
  }
}

function countParas(body) {
  if (!Array.isArray(body)) return 0;
  return body.reduce((n, s) => n + (Array.isArray(s.paragraphs) ? s.paragraphs.length : 0), 0);
}

const newContent = raw.slice(0, cBodyStart + 1) + "\n" + newRecords.join(",\n") + "\n" + raw.slice(cClose);
writeFileSync("src/lib/service-content.ts", newContent, "utf8");
console.log("değişen kayıt:", modified);
console.log("silinen bölüm:", removedSections, "| silinen paragraf:", removedParas);
