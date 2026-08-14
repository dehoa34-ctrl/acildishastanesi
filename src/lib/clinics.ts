export type Clinic = {
  slug: string;
  name: string;
  area: string;
  address: string;
  mapsUrl: string;
  description: string;
};

export const clinics: Clinic[] = [
  {
    slug: "beylikduzu",
    name: "AvrupaDİŞ Beylikdüzü Ağız ve Diş Sağlığı Polikliniği",
    area: "İstanbul Avrupa",
    address: "Gülyapı, Yakuplu mah. Hürriyet Bulvarı No:1/27-49 Skyport Plaza, 34524 Beylikdüzü/İstanbul",
    mapsUrl: "https://maps.app.goo.gl/XdxkprfNkZbiHb4R8",
    description: "Beylikdüzü'nün merkezinde, Skyport Plaza içinde modern ağız ve diş sağlığı polikliniği.",
  },
  {
    slug: "beykent",
    name: "AvrupaDİŞ Beykent Diş Kliniği",
    area: "İstanbul Avrupa",
    address: "Cumhuriyet mah. Cesaret Sk. Kaya Millennium İş Merkezi Giriş Kat No:1A Beykent / Büyükçekmece / İSTANBUL",
    mapsUrl: "https://maps.app.goo.gl/YPsPNRDmcuU4seno6",
    description: "Beykent'te iş merkezi içinde, kolay ulaşılabilir diş kliniği.",
  },
  {
    slug: "avcilar",
    name: "AvrupaDİŞ Avcılar Diş Polikliniği",
    area: "İstanbul Avrupa",
    address: "Üniversite Mahallesi E-5 Yan Yolu No:112 Türksan Durağı – Parseller, 34320 Avcılar/İstanbul",
    mapsUrl: "https://maps.app.goo.gl/YWJ9yYW3NDMqdzM26",
    description: "Avcılar'da E-5 üzerinde, öğrenci bölgesine yakın diş polikliniği.",
  },
  {
    slug: "esenyurt",
    name: "AvrupaDİŞ Esenyurt Ağız Ve Diş Sağlığı Polikliniği",
    area: "İstanbul Avrupa",
    address: "Yenikent Mh. Doğan Araslı Cd. Eskule AVM Kat:2 No:170/83 Esenyurt / İSTANBUL",
    mapsUrl: "https://maps.app.goo.gl/yAB8ocXz4qEAxBKSA",
    description: "Esenyurt'ta Eskule AVM içinde, geniş hasta kapasiteli poliklinik.",
  },
  {
    slug: "sefakoy",
    name: "AvrupaDİŞ Sefaköy Ağız Ve Diş Sağlığı Polikliniği",
    area: "İstanbul Avrupa",
    address: "Halkalı Cd. No:132/C (Armonipark AVM yanı) Sefaköy / İSTANBUL",
    mapsUrl: "https://maps.app.goo.gl/68uBRyGAACX5XS9g9",
    description: "Sefaköy'de Armonipark AVM'nin hemen yanında ulaşımı kolay poliklinik.",
  },
  {
    slug: "ambarli",
    name: "AvrupaDİŞ Ambarlı Ağız Ve Diş Sağlığı Polikliniği",
    area: "İstanbul Avrupa",
    address: "Ambarlı Mh. Cumhuriyet Cd. No:58/A Avcılar / İSTANBUL",
    mapsUrl: "https://maps.app.goo.gl/xDEpF9KG2k5y1oou7",
    description: "Avcılar Ambarlı mahallesinde, sahil bölgesine yakın diş polikliniği.",
  },
  {
    slug: "bahcelievler",
    name: "AvrupaDİŞ Bahçelievler Ağız Ve Diş Sağlığı Merkezi",
    area: "İstanbul Avrupa",
    address: "Yenibosna Merkez Mh. Değirmenbahçe Cd. İstWest Konutları No: 17/BJ (Starcity AVM Karşısı) Bahçelievler / İSTANBUL",
    mapsUrl: "https://maps.app.goo.gl/JYQvEVbrqLZZZyAV7",
    description: "Bahçelievler'de Starcity AVM karşısında tam teşekküllü ağız ve diş sağlığı merkezi.",
  },
  {
    slug: "atasehir",
    name: "AvrupaDİŞ Ataşehir Ağız Ve Diş Sağlığı Polikliniği",
    area: "İstanbul Anadolu",
    address: "Barbaros Mah. Mor Sümbül Sk. No:7/3 Nidakule Güney Ataşehir / İSTANBUL / TURKEY",
    mapsUrl: "https://maps.app.goo.gl/PvkcaEmraEbSf2GFA",
    description: "Ataşehir'de Nidakule Güney'de, Anadolu Yakası'nın merkezinde poliklinik.",
  },
  {
    slug: "acibadem",
    name: "AvrupaDİŞ Acıbadem Ağız Ve Diş Sağlığı Polikliniği",
    area: "İstanbul Anadolu",
    address: "Acıbadem Mah. Acıbadem Cad Zeamet Sk. No: 2 Safter Köşkü / Kadıköy / İSTANBUL / TURKEY",
    mapsUrl: "https://maps.app.goo.gl/gye22kJnb3upXbW5A",
    description: "Kadıköy Acıbadem'de, hastane bölgesine yakın tarihi ve modern poliklinik.",
  },
  {
    slug: "esenyurt-agora",
    name: "AvrupaDİŞ Esenyurt/Agora Ağız Ve Diş Sağlığı Merkezi",
    area: "İstanbul Avrupa",
    address: "Zafer mah. Doğan Araslı Bulvarı Agora Hotel No:93 İç Kapı No:156 Esenyurt / İSTANBUL / TURKEY",
    mapsUrl: "https://maps.app.goo.gl/jX5bjZn9cP6hzpwa7",
    description: "Esenyurt Agora Hotel içinde, bölgenin en kapsamlı ağız ve diş sağlığı merkezi.",
  },
  {
    slug: "bahcesehir",
    name: "Bahçeşehir Diş Kliniği",
    area: "İstanbul Avrupa",
    address: "Bahçeşehir 1. Kısım mah. Vali Recep Yazıcıoğlu cad Vaditepe Göl Evleri No:50/DC-DE, 34538 Başakşehir/İstanbul",
    mapsUrl: "https://maps.app.goo.gl/Lz8Pxyg2zFipZqRg9",
    description: "Bahçeşehir Vaditepe Göl Evleri'nde, göl manzaralı diş kliniği.",
  },
  {
    slug: "antalya",
    name: "AvrupaDİŞ Antalya Ağız Ve Diş Sağlığı Merkezi",
    area: "Antalya",
    address: "Altındağ, 100 Yıl Blv M. Ülkü Kandemir Apt D:No: 1/D, 07050 Muratpaşa/Antalya",
    mapsUrl: "https://maps.app.goo.gl/rV4CBorfg38Y43gJ9",
    description: "Antalya Muratpaşa'da, Akdeniz Bölgesi'nin ağız ve diş sağlığı merkezi.",
  },
];

export function getClinic(slug: string) {
  return clinics.find((c) => c.slug === slug);
}
