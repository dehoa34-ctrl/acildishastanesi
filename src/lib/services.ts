export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  priceNote?: string;
  priceRows?: { name: string; price: string }[];
  features: string[];
  category: "acil" | "implant" | "estetik" | "kaplama" | "ortodonti" | "cocuk" | "cerrahi" | "dolgu";
};

export const services: Service[] = [
  /* ---------- ACİL ---------- */
  {
    slug: "acil-dis-tedavisi",
    name: "Acil Diş Tedavisi",
    short: "Gece, pazar ve bayramda 7/24 acil diş müdahalesi. Beklemeden aynı gün çözüm.",
    intro:
      "Diş ağrısı randevu beklemez. Gece yarısı başlayan zonklama, kırılan diş, düşen dolgu veya şişlik yapan apse için 7/24 açık kliniğimizde acil diş hekimi hazırdır. Beklemeden arayın, aynı gece müdahale edelim.",
    priceNote: "Acil muayene ve müdahale için hemen arayın.",
    priceRows: [{ name: "Acil Diş Muayenesi", price: "Arayın" }],
    features: [
      "Gece, pazar ve bayram dahil 7/24 açık",
      "Acil dolgu, kanal ve çekim",
      "Apse ve şişlik müdahalesi",
      "Randevusuz acil kabul",
      "Düşen dolgu/kaplama yapıştırma",
    ],
    category: "acil",
  },
  {
    slug: "dis-cekimi",
    name: "Diş Çekimi",
    short: "Ağrısız ve komplikasyonsuz diş çekimi. Uzman hekim, son teknoloji ekipman.",
    intro:
      "Kurtarılamayan çürük, iltihap veya travma sonucu hasar gören dişlerin ağrısız şekilde çekilmesi gerekir. Lokal anestezi ile konforlu bir işlem olan diş çekimi, kliniğimizde son teknoloji ekipmanlarla ve uzman hekimlerce gerçekleştirilir.",
    priceNote: "Çekim fiyatı dişin durumuna göre değişir.",
    priceRows: [
      { name: "Basit Diş Çekimi", price: "475 TL" },
      { name: "20'lik Diş Çekimi", price: "Kişiye özel" },
      { name: "Gömülü Diş Çekimi", price: "Kişiye özel" },
    ],
    features: [
      "Lokal anestezi ile ağrısız işlem",
      "Basit ve cerrahi çekim seçenekleri",
      "20'lik ve gömülü diş uzmanlığı",
      "Çekim sonrası bakım talimatı",
      "Gece ve hafta sonu dahil hizmet",
    ],
    category: "cerrahi",
  },
  {
    slug: "20lik-dis-cekimi",
    name: "20'lik Diş Çekimi",
    short: "20 yaş dişi (yirmilik diş) ağrısı ve çekimi. Uzman cerrahi müdahale.",
    intro:
      "20 yaş dişleri ağızda yer kalmadığında gömülü kalabilir veya yanlış açıyla çıkarak ağrı, iltihap ve çevre dişlere baskı yapabilir. Kliniğimizde 20'lik diş çekimleri lokal anestezi ile konforlu ve güvenli şekilde yapılır.",
    priceNote: "20'lik diş çekim fiyatı gömülülük durumuna göre değişir.",
    priceRows: [
      { name: "20'lik Diş Muayenesi", price: "Ücretsiz" },
      { name: "20'lik Diş Çekimi", price: "Kişiye özel" },
      { name: "Gömülü 20'lik Diş Çekimi", price: "Kişiye özel" },
    ],
    features: [
      "Röntgen ile durum analizi",
      "Gömülü ve yarı gömülü 20'lik çekimi",
      "Lokal anestezi ile ağrısız işlem",
      "Çekim sonrası iyileşme takibi",
      "Cumartesi, pazar açık",
    ],
    category: "cerrahi",
  },
  {
    slug: "gomulu-20lik-dis-cekimi",
    name: "Gömülü 20'lik Diş Çekimi",
    short: "Diş eti altında kalmış 20'lik dişlerin cerrahi çekimi.",
    intro:
      "Bazı 20'lik dişler tamamen diş eti veya kemik içinde gömülü kalır. Bu dişler kist, iltihap ve çevre dişlerde çürüme riski oluşturabilir. Gömülü 20'lik diş çekimi, uzman cerrah tarafından güvenli ve ağrısız şekilde gerçekleştirilir.",
    priceNote: "Gömülü diş çekim fiyatı zorluk derecesine göre değişir.",
    priceRows: [{ name: "Gömülü 20'lik Diş Çekimi", price: "Kişiye özel" }],
    features: [
      "3D röntgen ile planlama",
      "Gömülü ve yarı gömülü dişler",
      "Genel veya lokal anestezi seçeneği",
      "Dikişli cerrahi müdahale",
      "Sonrası kontrollü iyileşme",
    ],
    category: "cerrahi",
  },
  {
    slug: "komplikasyonlu-dis-cekimi",
    name: "Komplikasyonlu Diş Çekimi",
    short: "Kökü kırık, eğri veya yapışık dişlerin zorlu cerrahi çekimi.",
    intro:
      "Bazı dişlerin kökleri eğri, kırık veya çevre dokulara yapışık olabilir. Bu durumlarda standart çekim yerine cerrahi müdahale gerekir. Deneyimli cerrah kadromuz komplikasyonlu çekimleri güvenle gerçekleştirir.",
    priceNote: "Fiyat işlemin zorluk derecesine göre belirlenir.",
    priceRows: [{ name: "Komplikasyonlu Diş Çekimi", price: "Kişiye özel" }],
    features: [
      "Kök ucu kırık dişler",
      "Eğri ve yapışık kökler",
      "Uzman cerrah kadrosu",
      "Cerrahi dikiş ve sonrası bakım",
      "Ağrısız işlem garantisi",
    ],
    category: "cerrahi",
  },
  {
    slug: "sut-dis-cekimi",
    name: "Süt Diş Çekimi",
    short: "Çocuklarda sallanan veya çürük süt dişlerinin güvenli çekimi.",
    intro:
      "Sallanarak düşmeyen veya derin çürük nedeniyle kurtarılamayan süt dişlerinin çekimi, çocuğun ağrısız ve güvenli bir deneyim yaşaması için özel ilgi gerektirir. Çocuk dostu yaklaşımımızla süt diş çekimi konforlu geçer.",
    priceNote: "Süt diş çekimi fiyatı için arayın.",
    priceRows: [{ name: "Süt Diş Çekimi", price: "Kişiye özel" }],
    features: [
      "Çocuk dostu, yumuşak yaklaşım",
      "Gerekmedikçe süt diş korunur",
      "Lokal anestezi ile konfor",
      "Çürük ve iltihap kontrolü",
      "Gece ve hafta sonu dahil hizmet",
    ],
    category: "cocuk",
  },

  /* ---------- İMPLANT ---------- */
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
    category: "implant",
  },
  {
    slug: "all-on-four-implant",
    name: "All On Four İmplant",
    short: "Tam çene dişsizlikte 4 implant ile sabit protez çözümü.",
    intro:
      "All On Four, dişsiz bir çeneye yerleştirilen dört implant üzerine sabit bir protezin vidalanması esasına dayanır. Tek seansta geçici dişler takılabilir; hareketli protez derdi olmadan sabit ve konforlu bir gülüş sağlar.",
    priceNote: "All On Four fiyatı çene durumuna ve protez malzemesine göre değişir.",
    priceRows: [{ name: "All On Four (Tek Çene)", price: "Kişiye özel" }],
    features: [
      "4 implant ile tam çene çözümü",
      "Tek seansta geçici dişler",
      "Hareketli proteze alternatif",
      "Kemik yetmezliğinde de uygulanabilir",
      "Uzun ömürlü sabit protez",
    ],
    category: "implant",
  },
  {
    slug: "bir-gunde-implant",
    name: "Bir Günde İmplant",
    short: "Diş çekimi ve implant aynı seansta. Geçici dişler aynı gün takılır.",
    intro:
      "Bir günde implant; diş çekimi, implant vidasının yerleştirilmesi ve üzerine geçici dişlerin takılmasının aynı seansta yapıldığı hızlı bir tedavidir. Böylece estetik kaygı yaşamadan kısa sürede sabit dişlere kavuşursunuz.",
    priceNote: "Fiyat implant sayısı ve üst yapıya göre değişir.",
    priceRows: [{ name: "Bir Günde İmplant", price: "Kişiye özel" }],
    features: [
      "Aynı seansta çekim + implant",
      "Geçici dişler aynı gün takılır",
      "Estetik bekleme dönemi yok",
      "3D dijital planlama",
      "Uzman implant hekimi",
    ],
    category: "implant",
  },
  {
    slug: "sinus-lifting",
    name: "Sinus Lifting (Sinüs Kaldırma)",
    short: "Üst çene arka bölgede implant için kemik hacmi artırma.",
    intro:
      "Sinus lifting, üst çene arka bölgesine implant yerleştirmek için sinüs boşluğunu yükselterek kemik hacmini artıran bir işlemdir. Kemik yetersizliği olan hastalarda implant tedavisinin ön koşuludur ve uzman cerrah tarafından güvenle uygulanır.",
    priceNote: "Sinus lifting fiyatı için muayene gerekir.",
    priceRows: [{ name: "Sinus Lifting", price: "Kişiye özel" }],
    features: [
      "Kemik yetersizliğinde implant imkânı",
      "Açık ve kapalı teknik seçenekleri",
      "Uzman cerrah kadrosu",
      "3D röntgen ile planlama",
      "Güvenli, kontrollü iyileşme",
    ],
    category: "implant",
  },

  /* ---------- ESTETİK ---------- */
  {
    slug: "gulus-tasarimi",
    name: "Gülüş Tasarımı",
    short: "Dijital smile design ile kişiye özel estetik gülüş planlaması.",
    intro:
      "Gülüş tasarımı; dişlerin rengi, şekli, boyutu ve diş eti çizgisi bütün olarak değerlendirilerek kişiye özel estetik bir gülüş planlanmasıdır. Dijital planlama sayesinde sonucu önceden görebilir, ön izleme ile karar verebilirsiniz.",
    priceNote: "Gülüş tasarımı fiyatı kapsama göre değişir.",
    priceRows: [
      { name: "Gülüş Tasarımı Danışmanlığı", price: "Ücretsiz" },
      { name: "Dijital Smile Design", price: "Kişiye özel" },
    ],
    features: [
      "Dijital gülüş planlama (smile design)",
      "Ön izleme ile sonucu görme",
      "Lamine, Emax ve zirkonyum ile uygulama",
      "Yüz hatlarıyla uyumlu tasarım",
      "3 günde gülüş tasarımı imkânı",
    ],
    category: "estetik",
  },
  {
    slug: "dis-beyazlatma",
    name: "Diş Beyazlatma (Bleaching)",
    short: "Ofis tipi ve ev tipi diş beyazlatma ile daha aydınlık gülüş.",
    intro:
      "Diş beyazlatma; kahve, çay, sigara ve yaşlanma kaynaklı renklenmelerin giderilmesini sağlar. Ofis tipi lazer beyazlatma tek seansta birkaç ton aydınlatırken, ev tipi uygulamalar kullanım kolaylığı sunar.",
    priceNote: "Diş beyazlatma fiyatı yönteme göre değişir.",
    priceRows: [
      { name: "Ofis Tipi Beyazlatma", price: "Kişiye özel" },
      { name: "Ev Tipi Beyazlatma Seti", price: "Kişiye özel" },
    ],
    features: [
      "Tek seansta birkaç ton aydınlatma",
      "Ofis ve ev tipi seçenekler",
      "Diş minesine zarar vermez",
      "Uzman hekim kontrolünde",
      "Kalıcı sonuç için bakım önerisi",
    ],
    category: "estetik",
  },
  {
    slug: "dental-bonding",
    name: "Dental Bonding",
    short: "Kompozit dolgu maddesi ile kırık, çatlak ve aralıklı dişlerin estetik onarımı.",
    intro:
      "Dental bonding; kırık, çatlak, renklenmiş veya aralıklı dişlerin kompozit reçine ile tek seansta estetik şekilde onarılmasıdır. Diş kesimi gerektirmeyen, ekonomik ve hızlı bir estetik çözümdür.",
    priceNote: "Bonding fiyatı diş sayısına göre değişir.",
    priceRows: [{ name: "Dental Bonding (Tek Diş)", price: "Kişiye özel" }],
    features: [
      "Tek seansta estetik onarım",
      "Diş kesimi gerekmez",
      "Kırık ve çatlaklarda hızlı çözüm",
      "Aralıklı dişlerin kapatılması",
      "Ekonomik estetik seçenek",
    ],
    category: "estetik",
  },
  {
    slug: "dis-eti-estetigi",
    name: "Diş Eti Estetiği (Pembe Estetik)",
    short: "Gülüş hattını düzenleyen diş eti şekillendirme ve estetik tedaviler.",
    intro:
      "Pembe estetik; diş etlerinin sağlıklı, simetrik ve estetik bir görünüme kavuşturulması için yapılan tedavilerdir. Gülümserken fazla görünen diş eti veya asimetrik gülüş hattı, diş eti estetiği ile düzeltilir.",
    priceNote: "Pembe estetik fiyatı uygulama kapsamına göre değişir.",
    priceRows: [{ name: "Diş Eti Estetiği", price: "Kişiye özel" }],
    features: [
      "Gülüş hattı düzenleme",
      "Lazerle ağrısız işlem",
      "Simetrik diş eti görünümü",
      "Diş eti büyümesi tedavisi",
      "Estetik ve fonksiyonel sonuç",
    ],
    category: "estetik",
  },
  {
    slug: "inlay-onlay-overlay-dolgular",
    name: "Inlay / Onlay / Overlay Dolgular",
    short: "Laboratuvarda hazırlanan porselen dolgularla doğal ve dayanıklı onarım.",
    intro:
      "Inlay, onlay ve overlay dolgular; büyük çürüklerin laboratuvarda hazırlanan porselen veya kompozit parçalarla onarıldığı modern restorasyonlardır. Dişin sağlıklı dokusu korunur ve doğal görünümlü, dayanıklı sonuç elde edilir.",
    priceNote: "Fiyat diş başına ve malzemeye göre değişir.",
    priceRows: [{ name: "Inlay/Onlay Dolgu", price: "Kişiye özel" }],
    features: [
      "Diş dokusunu korur",
      "Porselen ve kompozit seçenekler",
      "Doğal, estetik görünüm",
      "Uzun ömürlü restorasyon",
      "Laboratuvar destekli üretim",
    ],
    category: "dolgu",
  },

  /* ---------- KAPLAMA ---------- */
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
    category: "estetik",
  },
  {
    slug: "emax-dis-kaplama",
    name: "Emax Diş Kaplama",
    short: "Lityum disilikat seramikten üretilen yüksek estetik değere sahip kaplama.",
    intro:
      "Emax, estetik görünümlü lityum disilikat porselenden üretilen bir seramik kaplama türüdür. Işık geçirgenliği sayesinde doğal dişe en yakın görünümü sağlar ve özellikle ön diş estetiğinde tercih edilir.",
    priceNote: "Emax fiyatı diş sayısına göre değişir.",
    priceRows: [{ name: "Emax Kaplama (Tek Diş)", price: "4.000 – 6.000 TL" }],
    features: [
      "Doğal dişe en yakın ışık geçirgenliği",
      "Metal içermeyen yapı",
      "Ön diş estetiğinde ideal",
      "Yüksek estetik değer",
      "Uzun ömürlü malzeme",
    ],
    category: "kaplama",
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
    category: "kaplama",
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
    category: "kaplama",
  },
  {
    slug: "metal-dis-kaplama",
    name: "Metal Destekli Porselen Kaplama",
    short: "Ekonomik, dayanıklı ve uzun yıllardır güvenle kullanılan kaplama çözümü.",
    intro:
      "Metal destekli porselen kaplama; metal altyapı üzerine porselen uygulanan, dayanıklılığı ve ekonomikliği ile bilinen klasik kaplama yöntemidir. Özellikle arka dişlerde çiğneme kuvvetlerine dayanıklı sonuç verir.",
    priceNote: "Metal destekli porselen fiyatı diş sayısına göre değişir.",
    priceRows: [{ name: "Metal Destekli Porselen", price: "1.800 – 2.500 TL" }],
    features: [
      "Ekonomik ve dayanıklı çözüm",
      "Arka dişlerde yüksek dayanıklılık",
      "Uzun yıllık klinik geçmiş",
      "Çiğneme fonksiyonunu korur",
      "Kısa üretim süresi",
    ],
    category: "kaplama",
  },
  {
    slug: "kron-dis-kaplama",
    name: "Kron Diş Kaplama",
    short: "Hasar görmüş veya zayıflamış dişin tamamını sararak koruyan kaplama.",
    intro:
      "Kron, hasar görmüş veya zayıflamış bir dişin tamamını sararak koruyan ve güçlendiren sabit bir restorasyondur. Kanal tedavisi görmüş dişlerde ve büyük çürüklerde dişin ömrünü uzatmak için uygulanır.",
    priceNote: "Kron kaplama fiyatı malzemeye göre değişir.",
    priceRows: [
      { name: "Kron Kaplama (Zirkonyum)", price: "3.500 TL'den" },
      { name: "Kron Kaplama (Emax)", price: "4.000 TL'den" },
    ],
    features: [
      "Dişi tamamen korur ve güçlendirir",
      "Kanal tedavili dişlerde ideal",
      "Zirkonyum, Emax ve porselen seçenek",
      "Doğal renk ve form",
      "Uzun ömürlü koruma",
    ],
    category: "kaplama",
  },

  /* ---------- DOLGU ---------- */
  {
    slug: "dis-dolgusu",
    name: "Diş Dolgusu",
    short: "Kompozit ve porselen dolgularla çürük dişlerin estetik onarımı.",
    intro:
      "Diş dolgusu, çürük nedeniyle hasar gören diş dokusunun temizlenip özel dolgu malzemesiyle onarılmasıdır. Estetik kompozit dolgular doğal diş renginde olduğu için görünmez bir çözüm sunar.",
    priceNote: "Dolgu fiyatı diş ve dolgu tipine göre değişir.",
    priceRows: [
      { name: "Kompozit Dolgu", price: "Kişiye özel" },
      { name: "Estetik Ön Diş Dolgusu", price: "Kişiye özel" },
    ],
    features: [
      "Doğal diş renginde kompozit",
      "Tek seansta tamamlanır",
      "Ağrısız, lokal anestezi ile",
      "Çürük kontrolü ve koruma",
      "Acil dolgu (gece dahil)",
    ],
    category: "dolgu",
  },

  /* ---------- KANAL ---------- */
  {
    slug: "kanal-tedavisi",
    name: "Ağrısız Kanal Tedavisi",
    short: "İltihaplı ve ağrılı dişlerin sinir dokusunun temizlenerek kurtarılması.",
    intro:
      "Kanal tedavisi; derin çürük veya travma nedeniyle iltihaplanan diş sinirinin temizlenip doldurulmasıyla dişin kurtarılmasıdır. Modern anestezi ve cihazlarla ağrısız yapılır ve diş kaybını önler.",
    priceNote: "Kanal tedavisi fiyatı diş ve kanal sayısına göre değişir.",
    priceRows: [
      { name: "Kanal Tedavisi (Ön Diş)", price: "Kişiye özel" },
      { name: "Kanal Tedavisi (Azı Dişi)", price: "Kişiye özel" },
    ],
    features: [
      "Lokal anestezi ile ağrısız işlem",
      "Modern endodonti cihazları",
      "Genellikle 1-2 seansta biter",
      "Dişi kurtararak çekimi önler",
      "Gece ve pazar acil kanal tedavisi",
    ],
    category: "dolgu",
  },

  /* ---------- ORTODONTİ ---------- */
  {
    slug: "ortodonti",
    name: "Ortodonti (Diş Teli)",
    short: "Çapraşık dişlerin düzeltilmesi için tel ve şeffaf plak tedavileri.",
    intro:
      "Ortodonti; çapraşık, aralıklı ve kapanış bozukluğu olan dişlerin düzeltilmesini sağlayan diş hekimliği dalıdır. Metal, seramik ve şeffaf plak (telsiz) seçenekleriyle her yaştan hastaya uygun tedavi planlanır.",
    priceNote: "Ortodonti fiyatı tedavi süresine ve yönteme göre değişir.",
    priceRows: [
      { name: "Metal Diş Teli", price: "Kişiye özel" },
      { name: "Şeffaf Plak Tedavisi", price: "Kişiye özel" },
    ],
    features: [
      "Metal, seramik ve şeffaf plak",
      "Çocuk ve yetişkin tedavisi",
      "Çapraşıklık ve kapanış düzeltme",
      "Dijital tedavi planlaması",
      "Düzenli kontrol takibi",
    ],
    category: "ortodonti",
  },
  {
    slug: "dis-teli-tedavisi",
    name: "Diş Teli Tedavisi",
    short: "Metal ve estetik braketlerle diş düzeltme.",
    intro:
      "Diş teli tedavisi; çapraşık ve hizalı olmayan dişlerin braket ve ark telleri yardımıyla düzeltilmesidir. Metal braketler ekonomik, seramik braketler estetik açıdan avantajlıdır.",
    priceNote: "Diş teli fiyatı braket tipine göre değişir.",
    priceRows: [
      { name: "Metal Braket", price: "Kişiye özel" },
      { name: "Seramik Braket", price: "Kişiye özel" },
    ],
    features: [
      "Metal ve estetik seçenek",
      "Her yaş grubuna uygun",
      "Çapraşık dişlerin düzeltilmesi",
      "Kapanış bozukluğu tedavisi",
      "Düzenli hekim takibi",
    ],
    category: "ortodonti",
  },
  {
    slug: "seffaf-plak",
    name: "Şeffaf Plak Tedavisi",
    short: "Telsiz ortodonti. Görünmeyen, çıkarılabilir şeffaf plaklarla diş düzeltme.",
    intro:
      "Şeffaf plak (telsiz ortodonti), dişleri yavaşça hizalayan şeffaf ve çıkarılabilir plaklarla yapılan estetik bir tedavidir. Diş tellerinin görünümünden çekinen yetişkinler için ideal bir seçenektir.",
    priceNote: "Şeffaf plak fiyatı tedavi süresine göre değişir.",
    priceRows: [{ name: "Şeffaf Plak Tedavisi", price: "Kişiye özel" }],
    features: [
      "Görünmeyen, estetik tedavi",
      "Çıkarılabilir plaklar",
      "Yemek yerken çıkarılabilir",
      "Yetişkinler için ideal",
      "Dijital planlama",
    ],
    category: "ortodonti",
  },

  /* ---------- ÇOCUK ---------- */
  {
    slug: "cocuk-dis",
    name: "Çocuk Diş Doktoru (Pedodonti)",
    short: "Çocuklara özel diş tedavisi, dolgu, flor ve koruyucu uygulamalar.",
    intro:
      "Pedodonti, 0-13 yaş arası çocukların ağız ve diş sağlığıyla ilgilenen uzmanlık dalıdır. Çocuk dostu yaklaşımımızla süt diş dolgusu, flor uygulaması, fissür örtücü ve diş travmalarına müdahale konforlu şekilde yapılır.",
    priceNote: "Çocuk diş tedavisi fiyatı işleme göre değişir.",
    priceRows: [
      { name: "Çocuk Muayenesi", price: "Kişiye özel" },
      { name: "Süt Diş Dolgusu", price: "Kişiye özel" },
    ],
    features: [
      "Çocuk dostu, yumuşak yaklaşım",
      "Süt diş dolgusu ve kanal",
      "Flor ve fissür örtücü",
      "Diş travmalarına müdahale",
      "Gece ve hafta sonu dahil hizmet",
    ],
    category: "cocuk",
  },

  /* ---------- PROTEZ ---------- */
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
    category: "estetik",
  },
  {
    slug: "protetik-dis-tedavisi",
    name: "Protetik Diş Tedavisi",
    short: "Diş protezleri ve kaplamaların planlanması ve uygulanması.",
    intro:
      "Protetik diş tedavisi; eksik dişlerin protezlerle, hasarlı dişlerin ise kron ve köprülerle restore edilmesidir. Sabit ve hareketli protez seçenekleri hastanın ihtiyacına göre planlanır.",
    priceNote: "Protetik tedavi fiyatı uygulamaya göre değişir.",
    priceRows: [{ name: "Protetik Tedavi", price: "Kişiye özel" }],
    features: [
      "Sabit ve hareketli protezler",
      "Kron ve köprü uygulamaları",
      "Estetik ve fonksiyonel planlama",
      "Laboratuvar destekli üretim",
      "Dişe tam uyum",
    ],
    category: "estetik",
  },

  /* ---------- DİĞER ---------- */
  {
    slug: "cerrahi-uygulamalar",
    name: "Cerrahi Uygulamalar",
    short: "Gömülü diş, kist, apse ve çene cerrahisi işlemleri.",
    intro:
      "Ağız, diş ve çene cerrahisi; gömülü dişlerin çekimi, kist ve tümörlerin çıkarılması, diş ve çene kırıkları, implant cerrahisi gibi işlemleri kapsar. Uzman cerrah kadromuz modern tekniklerle güvenli müdahale eder.",
    priceNote: "Cerrahi işlem fiyatı müdahaleye göre değişir.",
    priceRows: [{ name: "Cerrahi Değerlendirme", price: "Ücretsiz muayene" }],
    features: [
      "Gömülü diş ve kist cerrahisi",
      "Çene kırıkları tedavisi",
      "İmplant cerrahisi",
      "Apse drenajı",
      "Uzman cerrah kadrosu",
    ],
    category: "cerrahi",
  },
  {
    slug: "kirik-dis-tedavisi",
    name: "Kırık Diş Tedavisi",
    short: "Kırılmış ve çatlamış dişlerin estetik onarımı.",
    intro:
      "Kırık diş tedavisi; çatlamış veya kırılmış dişin yapısını ve işlevini onarmak için uygulanan diş hekimliği yöntemidir. Bonding, dolgu veya kaplama ile dişin doğal görünümü ve fonksiyonu geri kazandırılır.",
    priceNote: "Kırık diş tedavi fiyatı hasar durumuna göre değişir.",
    priceRows: [{ name: "Kırık Diş Onarımı", price: "Kişiye özel" }],
    features: [
      "Bonding ile hızlı onarım",
      "Dolgu veya kaplama seçeneği",
      "Estetik ve fonksiyonel sonuç",
      "Çocuklarda diş travması müdahalesi",
      "Acil kırık diş (gece dahil)",
    ],
    category: "dolgu",
  },
  {
    slug: "periodontoloji",
    name: "Periodontoloji (Diş Eti Tedavisi)",
    short: "Diş eti kanaması, iltihabı ve çekilmesi tedavileri.",
    intro:
      "Periodontoloji, dişleri çevreleyen diş eti ve destek dokuların sağlığıyla ilgilenen uzmanlık dalıdır. Diş eti kanaması, iltihap, çekilme ve kötü ağız kokusu tedavi edilmezse diş kaybına yol açabilir.",
    priceNote: "Diş eti tedavisi fiyatı duruma göre değişir.",
    priceRows: [
      { name: "Diş Taşı Temizliği", price: "Kişiye özel" },
      { name: "Diş Eti Tedavisi", price: "Kişiye özel" },
    ],
    features: [
      "Diş eti iltihabı tedavisi",
      "Diş taşı temizliği",
      "Diş eti çekilmesi müdahalesi",
      "Lazer destekli tedavi",
      "Kötü ağız kokusu çözümü",
    ],
    category: "acil",
  },
  {
    slug: "dijital-dis-hekimligi",
    name: "Dijital Diş Hekimliği",
    short: "CAD/CAM, 3D röntgen ve dijital gülüş tasarımı ile hızlı ve hassas tedavi.",
    intro:
      "Dijital diş hekimliği; CAD/CAM teknolojisi, 3D röntgen ve dijital gülüş tasarımı ile tedavileri daha hızlı, hassas ve konforlu hale getirir. Ölçü alma süreci dijital tarayıcılarla kolaylaşır.",
    priceNote: "Dijital tedavi fiyatı uygulamaya göre değişir.",
    priceRows: [{ name: "Dijital Ölçü / Planlama", price: "Ücretsiz muayene" }],
    features: [
      "CAD/CAM ile aynı gün kaplama",
      "3D röntgen ve tomografi",
      "Dijital gülüş tasarımı",
      "Hassas ve hızlı tedavi",
      "Konforlu ölçü alma",
    ],
    category: "estetik",
  },
  {
    slug: "agrisiz-dis-tedavisi",
    name: "Ağrısız Diş Tedavisi",
    short: "Sedasyon ve modern anestezi ile tamamen konforlu diş tedavisi.",
    intro:
      "Diş hekimi fobisi olan hastalar için ağrısız diş tedavisi özel önem taşır. Modern anestezi teknikleri, yumuşak lazerler ve gerektiğinde sedasyon desteği ile tedavi tamamen konforlu hale getirilir.",
    priceNote: "Ağrısız tedavi fiyatı uygulamaya göre değişir.",
    priceRows: [{ name: "Ağrısız Tedavi Değerlendirme", price: "Ücretsiz muayene" }],
    features: [
      "Diş hekimi fobisine özel yaklaşım",
      "Modern anestezi teknikleri",
      "Sedasyon seçeneği",
      "Lazerle minimal invaziv işlem",
      "Konforlu ve hızlı tedavi",
    ],
    category: "acil",
  },
  {
    slug: "dis-tedavisi-fiyatlari",
    name: "Diş Tedavisi Fiyatları 2026",
    short: "Tüm diş tedavilerinin 2026 güncel fiyat rehberi.",
    intro:
      "Diş tedavileri; dolgu, kanal, çekim, kaplama, implant ve protez gibi uygulamalardan oluşur. Fiyatlar işlemin türüne, diş sayısına ve kullanılan malzemeye göre değişir. Güncel fiyat bilgisi için bize ulaşabilirsiniz.",
    priceNote: "Fiyatlar kişiye özel muayene ile netleşir.",
    priceRows: [
      { name: "Diş Muayenesi", price: "Ücretsiz" },
      { name: "Diş Dolgusu", price: "Kişiye özel" },
      { name: "Kanal Tedavisi", price: "Kişiye özel" },
      { name: "Diş Çekimi", price: "475 TL" },
      { name: "İmplant", price: "3.090 TL'den" },
    ],
    features: [
      "Tüm tedaviler tek çatı altında",
      "Ücretsiz ilk muayene",
      "Net ve şeffaf fiyat",
      "7/24 açık klinik",
      "Peşin ve taksit seçenekleri",
    ],
    category: "acil",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const serviceCategories: { key: Service["category"]; label: string }[] = [
  { key: "acil", label: "Acil Diş" },
  { key: "implant", label: "İmplant" },
  { key: "estetik", label: "Estetik & Gülüş Tasarımı" },
  { key: "kaplama", label: "Kaplamalar" },
  { key: "dolgu", label: "Dolgu & Kanal" },
  { key: "ortodonti", label: "Ortodonti" },
  { key: "cocuk", label: "Çocuk Diş" },
  { key: "cerrahi", label: "Cerrahi" },
];
