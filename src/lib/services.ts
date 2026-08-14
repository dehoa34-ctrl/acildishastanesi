export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  priceNote: string;
  priceRows: { name: string; price: string }[];
  features: string[];
};

export const services: Service[] = [
  {
    slug: "dis-implant-fiyatlari",
    name: "İmplant Diş Fiyatları",
    short: "Tek diş implant, alman/kore/isviçre implant seçenekleri ve ömür boyu çözümler.",
    intro:
      "İmplant, eksik dişlerin en kalıcı ve doğal çözümüdür. Titanyum kök, çene kemiğine yerleştirilerek hem görünüm hem çiğneme fonksiyonu açısından en yakın sonucu verir. Kliniğimizde tek dişten tam çene implantlara kadar tüm işlemler son teknoloji cihazlarla ve uzman hekimlerce gerçekleştirilir.",
    priceNote:
      "İmplant fiyatları marka, çene durumu ve üst yapı seçimine göre değişir. Net fiyat için muayene ve kişiye özel planlama gerekir.",
    priceRows: [
      { name: "Kemik İçi İmplant (Tek Diş)", price: "3.090 TL" },
      { name: "Alman Malı İmplant", price: "5.000 – 6.500 TL" },
      { name: "Kore Malı İmplant", price: "4.000 – 4.500 TL" },
      { name: "İsviçre Malı İmplant", price: "5.250 – 6.000 TL" },
      { name: "Straumann İmplant", price: "9.000 – 12.000 TL" },
      { name: "İmplant Üstü Zirkonyum Kron", price: "2.240 TL" },
      { name: "Diş Çekimi", price: "475 TL" },
    ],
    features: [
      "Lokal anestezi ile ağrısız uygulama",
      "Alman, Kore, İsviçre ve Straumann marka seçenekleri",
      "Son teknoloji panoramik röntgen ve 3D planlama",
      "Ortalama 25-35 yıl kullanım ömrü",
      "Cumartesi, pazar ve bayramlarda açık",
    ],
  },
  {
    slug: "lamine-emax-kaplama-dis-fiyatlari",
    name: "Lamine Diş (Emax) Fiyatları",
    short: "Gülüş tasarımı, yaprak porselen ve Emax kaplama ile estetik gülüş.",
    intro:
      "Lamine diş, dişlerin ön yüzeyine uygulanan ince yaprak porselendir. Minene zarar vermeden diş şekli, rengi ve boyutunu düzelterek doğal bir gülüş sağlar. Emax malzeme, ışık geçirgenliğiyle gerçek dişten ayırt edilemeyen sonuçlar sunar.",
    priceNote:
      "Lamine ve Emax fiyatları; diş sayısına, malzeme kalitesine ve gülüş tasarımına göre değişir.",
    priceRows: [
      { name: "Lamine Yaprak Porselen (Tek Diş)", price: "2.500 – 4.000 TL" },
      { name: "Emax Lamine (Tek Diş)", price: "3.000 – 5.000 TL" },
      { name: "Gülüş Tasarımı + Dijital Planlama", price: "Ücretsiz muayene" },
    ],
    features: [
      "Minimal diş kesimi, maksimum doğallık",
      "Emax ve yüksek kalite porselen malzemeler",
      "Dijital gülüş tasarımı ile ön izleme",
      "Estetik ve fonksiyonel sonuç garantisi",
      "Randevu ile aynı gün başlama imkânı",
    ],
  },
  {
    slug: "porselen-dis-kaplama-fiyatlari",
    name: "Porselen Diş Kaplama Fiyatları",
    short: "Zirkonyum ve metal destekli porselen kaplamalarla sağlam, estetik dişler.",
    intro:
      "Porselen kaplama, hasarlı veya estetik olarak yetersiz dişlerin üzerine uygulanan dayanıklı ve doğal görünümlü restorasyondur. Metal destekli ya da tam porselen seçeneklerle hem ön hem arka dişlerde uzun ömürlü çözümler üretiyoruz.",
    priceNote:
      "Kaplama fiyatları; kaplama tipi, malzeme ve diş sayısına göre değişiklik gösterir.",
    priceRows: [
      { name: "Metal Destekli Porselen", price: "1.800 – 2.500 TL" },
      { name: "Zirkonyum Kaplama", price: "3.500 – 5.500 TL" },
      { name: "Emax Kaplama", price: "4.000 – 6.000 TL" },
    ],
    features: [
      "Estetik ve dayanıklı porselen malzemeler",
      "Dişe tam uyum, uzun ömürlü sonuç",
      "Renk ve şekil olarak doğal görünüm",
      "Kırık, renklenmiş ve çürük dişlerde çözüm",
      "7/24 acil kaplama onarımı",
    ],
  },
  {
    slug: "protez-takma-dis-fiyatlari",
    name: "Protez Diş Fiyatları",
    short: "Takma diş, akrilik protez ve implant üstü protez çözümleri.",
    intro:
      "Diş eksikliği çiğneme, konuşma ve özgüveni doğrudan etkiler. Tam veya kısmi protez, akrilik ya da implant üstü protez seçenekleriyle her hastaya uygun, konforlu ve doğal görünümlü çözümler sunuyoruz.",
    priceNote:
      "Protez fiyatları; protez tipi, çene durumu ve malzeme kalitesine göre değişir.",
    priceRows: [
      { name: "Akrilik Tam Protez (Tek Çene)", price: "6.000 – 12.000 TL" },
      { name: "Hassas Tutuculu Protez", price: "4.820 TL" },
      { name: "İmplant Üstü Protez (Tek Çene)", price: "Kişiye özel" },
    ],
    features: [
      "Tam ve kısmi protez seçenekleri",
      "İmplant üstü hareketli protezler",
      "Konfor ve ağıza tam uyum",
      "Estetik ve fonksiyonel tasarım",
      "Bayram ve tatil günlerinde de hizmet",
    ],
  },
  {
    slug: "zirkonyum-kaplama-dis-fiyatlari",
    name: "Zirkonyum Diş Fiyatları",
    short: "Metal içermeyen, biyouyumlu ve son derece estetik zirkonyum kaplamalar.",
    intro:
      "Zirkonyum, metal altyapı içermeyen ve vücutla tam uyumlu yüksek teknoloji bir kaplama malzemesidir. Işık geçirgenliği ve doğal rengi sayesinde gülüş estetiğinde en çok tercih edilen seçeneklerin başında gelir.",
    priceNote:
      "Zirkonyum fiyatları; marka, katman sayısı ve diş sayısına göre değişiklik gösterir.",
    priceRows: [
      { name: "Zirkonyum Kaplama (Tek Diş)", price: "3.500 – 5.500 TL" },
      { name: "Zirkonyum Köprü (3 Üye)", price: "Kişiye özel" },
      { name: "İmplant Üstü Zirkonyum", price: "2.240 TL" },
    ],
    features: [
      "%100 metal içermeyen biyouyumlu yapı",
      "Doğal dişe en yakın ışık geçirgenliği",
      "Diş eti uyumu ve estetik sonuç",
      "Uzun ömürlü, dayanıklı malzeme",
      "Alerjik reaksiyon riski minimum",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
