/** Güncel takvim yılı — fiyat tarihlerinde "2026" hardcode yerine kullanılır. */
export const CURRENT_YEAR = new Date().getFullYear();

/** Fiyat metinlerindeki sabit yıl ibaresini güncel yıla çevirir (örn. "2026" → "2027"). */
export function fmtYear(text?: string): string {
  if (!text) return "";
  return text.replaceAll("2026", String(CURRENT_YEAR));
}

export const SITE = {
  name: "İstanbul Ağız ve Diş Sağlığı Merkezi",
  shortName: "İstanbul Diş",
  domain: "https://acildishastanesi.org",
  phoneDisplay: "0532 438 13 03",
  phoneHref: "tel:+905324381303",
  whatsappHref: "https://wa.me/905324381303?text=Merhaba",
  email: "info@oraldent.com.tr",
  city: "İstanbul",
  openingHours: "7 gün 24 saat",
  tagline: "7/24 Açık • Nöbetçi Diş Hekimi",
};

export const CONTACT = {
  phoneDisplay: "0532 438 13 03",
  phoneHref: "tel:+905324381303",
  whatsappHref: "https://wa.me/905324381303?text=Merhaba",
  email: "info@oraldent.com.tr",
};
