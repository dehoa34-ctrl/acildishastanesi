export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  priceNote?: string;
  priceRows?: { name: string; price: string }[];
  features: string[];
  category: "acil" | "implant" | "estetik" | "kaplama" | "ortodonti" | "cocuk" | "cerrahi" | "dolgu" | "branc" | "gulus" | "fiyat";
  image?: string;
  body?: { h2: string; paragraphs: string[] }[];
  faq?: { question: string; answer: string }[];
  related?: string[];
  /** Menüde gösterilip gösterilmeyeceği. İl bazlı fiyat rehberleri menüde gizlenir (SEO için vardır). */
  menu?: boolean;
};

export const services: Service[] = [
{
    slug: "cerrahi-uygulamalar",
    name: "Cerrahi Uygulamalar",
    short: "Ağız, diş ve çene cerrahisi, gömülü diş, kist ve implant cerrahisi işlemleri.",
    intro: "Cerrahi Uygulamalar hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "dijital-dis-hekimligi",
    name: "Dijital Diş Hekimliği",
    short: "CAD/CAM, 3D röntgen ve dijital gülüş tasarımı ile hızlı ve hassas tedavi.",
    intro: "Dijital Diş Hekimliği hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "kanal-tedavisi-nedir-kanal-tedavisi-neden-yapilir",
    name: "Kanal Tedavisi Nedir?",
    short: "Dişin içindeki enfekte sinir ve dokuların temizlenip doldurulmasıyla dişi kurtarma tedavisi.",
    intro: "Kanal Tedavisi Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "protetik-dis-tedavisi-nedir-protetik-dis-tedavisi-nasil-yapilir",
    name: "Protetik Diş Tedavisi Nedir?",
    short: "Eksik dişlerin protez, kron ve köprülerle restore edilmesi.",
    intro: "Protetik Diş Tedavisi Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "kirik-dis-tedavisi",
    name: "Kırık Diş Tedavisi",
    short: "Kırılmış veya çatlamış dişlerin estetik ve fonksiyonel onarımı.",
    intro: "Kırık Diş Tedavisi hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "pedodonti-cocuk-dis-hekimligi",
    name: "Pedodonti (Çocuk Diş Hekimliği)",
    short: "0-13 yaş çocukların ağız ve diş sağlığına özel tedaviler.",
    intro: "Pedodonti (Çocuk Diş Hekimliği) hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "ortodonti-nedir-ortodonti-tedavisi-ne-demek",
    name: "Ortodonti Nedir?",
    short: "Çapraşık dişlerin tel ve şeffaf plak ile düzeltilmesi.",
    intro: "Ortodonti Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "periodontoloji",
    name: "Periodontoloji",
    short: "Diş eti ve dişi çevreleyen destek dokuların sağlığıyla ilgilenen uzmanlık dalı.",
    intro: "Periodontoloji hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "branc",
  },
{
    slug: "implant-nedir-implant-tedavisi-nasil-yapilir",
    name: "İmplant Nedir? İmplant Tedavisi Nasıl Yapılır?",
    short: "Eksik dişlerin çene kemiğine yerleştirilen titanyum köklerle tamamlanması.",
    intro: "İmplant Nedir? İmplant Tedavisi Nasıl Yapılır? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "all-on-four-implant",
    name: "All On Four İmplant",
    short: "Dört implant üzerine sabit protez ile tam çene çözümü.",
    intro: "All On Four İmplant hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "bir-gunde-implant",
    name: "Bir Günde İmplant",
    short: "Diş çekimi ve implantın aynı seansta yapılarak aynı gün diş takılması.",
    intro: "Bir Günde İmplant hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "sinus-lifting-sinus-kaldirma-nedir-sinus-sarkmasi-belirtileri-nelerdir",
    name: "Sinus Lifting (Sinüs Kaldırma)",
    short: "Üst çene arka bölgede implant için kemik hacmini artıran işlem.",
    intro: "Sinus Lifting (Sinüs Kaldırma) hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "dis-cekimi-nedir-dis-nasil-cekilir-dis-cekimi-ne-kadar-surer",
    name: "Diş Çekimi Nedir?",
    short: "Kurtarılamayan dişlerin ağrısız ve güvenli şekilde çekilmesi.",
    intro: "Diş Çekimi Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "20lik-dis-nedir-20lik-dis-ne-ise-yarar-20lik-dis-cekimi",
    name: "20'lik Diş Nedir? 20'lik Diş Çekimi",
    short: "Yirmilik dişlerin ağrısı ve gömülü 20'lik diş çekimi.",
    intro: "20'lik Diş Nedir? 20'lik Diş Çekimi hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "gomulu-20lik-dis-nedir-gomulu-20lik-dis-cekimi",
    name: "Gömülü 20'lik Diş Nedir? Gömülü 20'lik Diş Çekimi",
    short: "Diş eti ve kemik içinde gömülü kalan 20'lik dişlerin cerrahi çekimi.",
    intro: "Gömülü 20'lik Diş Nedir? Gömülü 20'lik Diş Çekimi hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "komplikasyonlu-dis-cekimi-nedir-komplikasyonlu-dis-cekimi-nasil-yapilir",
    name: "Komplikasyonlu Diş Çekimi Nedir?",
    short: "Kökü kırık, eğri veya yapışık dişlerin cerrahi çekimi.",
    intro: "Komplikasyonlu Diş Çekimi Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "sut-dis-cekimi",
    name: "Süt Diş Çekimi",
    short: "Sallanan veya çürük süt dişlerinin güvenli ve ağrısız çekimi.",
    intro: "Süt Diş Çekimi hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "cerrahi",
  },
{
    slug: "dental-bonding",
    name: "Dental Bonding",
    short: "Kompozit ile kırık, çatlak ve aralıklı dişlerin tek seansta onarımı.",
    intro: "Dental Bonding hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "dis-beyazlatma-bleaching-nedir-en-etkili-dis-beyazlatma-yontemleri-nelerdir",
    name: "Diş Beyazlatma (Bleaching) Nedir?",
    short: "Lazer ve jel ile diş rengini birkaç ton aydınlatan estetik uygulama.",
    intro: "Diş Beyazlatma (Bleaching) Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "inlay-onlay-overlay-dolgular",
    name: "Inlay Onlay Overlay Dolgular",
    short: "Büyük çürüklerde laboratuvar destekli porselen dolgu çözümleri.",
    intro: "Inlay Onlay Overlay Dolgular hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "seffaf-plak-nedir-seffaf-dis-plagi-ne-ise-yarar",
    name: "Şeffaf Plak Nedir? Şeffaf Diş Plağı Ne İşe Yarar?",
    short: "Görünmeyen, çıkarılabilir şeffaf plaklarla telsiz ortodonti.",
    intro: "Şeffaf Plak Nedir? Şeffaf Diş Plağı Ne İşe Yarar? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "lamine-dis-kaplama-nedir-yaprak-dis-kaplama-nasil-yapilir",
    name: "Lamine Diş Kaplama Nedir? Yaprak Diş Kaplama Nasıl Yapılır?",
    short: "Ön dişlere ince porselen yaprak kaplama ile estetik gülüş.",
    intro: "Lamine Diş Kaplama Nedir? Yaprak Diş Kaplama Nasıl Yapılır? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "dis-teli-tedavisi-nedir-dis-teli-ne-ise-yarar",
    name: "Diş Teli Tedavisi Nedir?",
    short: "Metal ve estetik braketlerle çapraşık dişlerin düzeltilmesi.",
    intro: "Diş Teli Tedavisi Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "pembe-estetik-estetik-dis-eti-tedavisi",
    name: "Pembe Estetik (Estetik Diş Eti Tedavisi)",
    short: "Diş eti şekillendirme ile gülüş hattının estetik düzenlenmesi.",
    intro: "Pembe Estetik (Estetik Diş Eti Tedavisi) hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "zirkonyum-dis-nedir-zirkonyum-dis-kaplama-nedir",
    name: "Zirkonyum Diş Nedir? Zirkonyum Diş Kaplama",
    short: "Metal içermeyen, biyouyumlu ve estetik zirkonyum kaplamalar.",
    intro: "Zirkonyum Diş Nedir? Zirkonyum Diş Kaplama hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "porselen-dis-kaplama-nedir-porselen-dis-kaplama-nasil-yapilir",
    name: "Porselen Diş Kaplama Nedir?",
    short: "Metal destekli ve tam porselen ile dayanıklı, estetik kaplamalar.",
    intro: "Porselen Diş Kaplama Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "gulus",
  },
{
    slug: "emax-dis-kaplama",
    name: "Emax Diş Kaplama",
    short: "Lityum disilikat seramikten üretilen yüksek estetik kaplama.",
    intro: "Emax Diş Kaplama hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "gulus",
  },
{
    slug: "metal-dis-kaplama-nedir-metal-destekli-porselen-dis-kaplama-nasil-yapilir",
    name: "Metal Diş Kaplama Nedir?",
    short: "Metal destekli porselen ile ekonomik ve dayanıklı kaplamalar.",
    intro: "Metal Diş Kaplama Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "gulus",
  },
{
    slug: "kron-dis-kaplama-nedir-kron-dis-kaplama-nasil-yapilir",
    name: "Kron Diş Kaplama Nedir?",
    short: "Hasar görmüş dişi sararak koruyan sabit kaplama.",
    intro: "Kron Diş Kaplama Nedir? hakkında detaylı bilgi almak için kliniğimizle iletişime geçebilirsiniz. 7/24 açık kliniğimizde uzman diş hekimlerimiz sizin için hazırdır.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "gulus",
  },
{
    slug: "acil-dis-tedavisi",
    name: "Acil Diş Tedavisi",
    short: "Gece, pazar ve bayramda 7/24 acil diş müdahalesi. Beklemeden aynı gün çözüm.",
    intro: "Gece, pazar ve bayramda 7/24 acil diş müdahalesi. Beklemeden aynı gün çözüm. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "acil",
  },
{
    slug: "gulus-tasarimi",
    name: "Gülüş Tasarımı",
    short: "Dijital smile design ile kişiye özel estetik gülüş planlaması.",
    intro: "Dijital smile design ile kişiye özel estetik gülüş planlaması. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "dis-dolgusu",
    name: "Diş Dolgusu",
    short: "Kompozit ve porselen dolgularla çürük dişlerin estetik onarımı.",
    intro: "Kompozit ve porselen dolgularla çürük dişlerin estetik onarımı. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "dolgu",
  },
{
    slug: "protez-takma-dis-fiyatlari",
    name: "Protez Diş Fiyatları",
    short: "Takma diş, akrilik protez ve implant üstü protez çözümleri.",
    intro: "Takma diş, akrilik protez ve implant üstü protez çözümleri. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "estetik",
  },
{
    slug: "agrisiz-dis-tedavisi",
    name: "Ağrısız Diş Tedavisi",
    short: "Sedasyon ve modern anestezi ile tamamen konforlu diş tedavisi.",
    intro: "Sedasyon ve modern anestezi ile tamamen konforlu diş tedavisi. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "acil",
  },
{
    slug: "implant-fiyatlari",
    name: "İmplant Fiyatları",
    short: "2026 implant fiyatları. TDB güncel tarifesi ve implant tedavi ücretleri.",
    intro: "Bu yazıda implant fiyatlarının neden değişkenlik gösterdiğini ve bütçenizi belirlerken nelere dikkat etmeniz gerektiğini öğrenebilirsiniz. 2026 güncel implant fiyat tarifesi sayfamızda.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV dahil). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Kemik İçi İmplant (Tek Silindirik İmplant Ücreti Hariç)","price":"15.675,00 TL"},{"name":"İmplant Üstü Veneer Kuron (Seramik) (Abutment Ücreti Hariç)","price":"10.090,00 TL"},{"name":"İmplant Destekli Hareketli Protezler (Hassas Tutucu Ücreti Hariç - Tek Çene)","price":"26.035,00 TL"},{"name":"İmplant Rehberi (Yarım Çene)","price":"7.235,00 TL"},{"name":"İmplant Rehberi (Tam Çene)","price":"10.485,00 TL"},{"name":"Kapişon İzalesi - İmplant Üstü Açılması","price":"2.705,00 TL"},{"name":"İmplant Çıkartılması","price":"7.680,00 TL"},{"name":"Zigoma İmplant (İmplant Ücreti Hariç)","price":"31.105,00 TL"}],
    category: "fiyat",
  },
{
    slug: "dis-tedavisi-fiyatlari",
    name: "Diş Tedavisi Fiyatları 2026",
    short: "Tüm diş tedavilerinin 2026 güncel fiyat rehberi.",
    intro: "Tüm diş tedavilerinin 2026 güncel fiyat rehberi. Detaylı bilgi için 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "acil",
  },
{
    slug: "bahcelievler-dis-beyazlatma-fiyatlari",
    name: "Bahçelievler Diş Beyazlatma Fiyatları",
    short: "2026 Bahçelievler diş beyazlatma fiyatları. Lazer, jel, kalıcı beyazlatma.",
    intro: "Bahçelievler diş beyazlatma fiyatları, uygulanan yönteme ve seans sayısına göre değişiklik gösterebilir. 2026 yılı itibarıyla, Bahçelievler diş beyazlatma fiyatları 9.000 TL'den ba",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Bahçelievler Diş Beyazlatma Fiyatları","price":"KDV HARİÇ"},{"name":"Bahçelievler Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Kalıcı Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Jel ile Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Lazerle Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Ev Tipi Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Zirkonyum Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Kanal Tedavili Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Ofis Tipi Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler Tüm Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."},{"name":"Bahçelievler 18 Yaş Altı Diş Beyazlatma","price":"9.000 TL'den başlamaktadır."}],
    category: "fiyat",
  },
{
    slug: "catalca-dis-kaplama-fiyatlari",
    name: "Çatalca Diş Kaplama Fiyatları",
    short: "2026 Çatalca diş kaplama fiyatları. TDB güncel tarifesi.",
    intro: "Çatalca diş kaplama fiyatları, kullanılan malzeme türüne, tedavi sürecine ve kliniğin konumuna bağlı olarak değişiklik gösterebilir. 2026 yılı itibarıyla, Çatalca diş kaplama fiyat",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Çatalca Diş Kaplama Fiyatları","price":"KDV HARİÇ"},{"name":"Çatalca Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Zirkonyum Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Porselen Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Lamine Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Tek Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Kron Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Ön Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Altın Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Yamuk Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Gümüş Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Metal Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Kırık Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Seramik Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Kompozit Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Emax Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Çocuk Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Titanyum Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Silikon Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Köprü Tek Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Pırlanta Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Metal Destekli Porselen Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Alt Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Çarpık Diş Kaplama","price":"4.800 TL'den başlamaktadır."},{"name":"Çatalca Kompozit Laminate Veneer Diş Kaplama","price":"4.800 TL'den başlamaktadır."}],
    category: "fiyat",
  },
{
    slug: "esenler-porselen-dis-kaplama-fiyatlari",
    name: "Esenler Porselen Diş Kaplama Fiyatları",
    short: "2026 Esenler porselen diş kaplama fiyatları. TDB güncel tarifesi.",
    intro: "Esenler porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı it",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Esenler Porselen Diş Kaplama Fiyatları","price":"KDV HARİÇ"},{"name":"Esenler Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenler Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
  },
{
    slug: "kucukcekmece-gulus-tasarimi-fiyatlari",
    name: "Küçükçekmece Gülüş Tasarımı Fiyatları",
    short: "2026 Küçükçekmece gülüş tasarımı fiyatları. Dijital smile design.",
    intro: "Küçükçekmece Gülüş Tasarımı Fiyatları Ne Kadar? (2026 TDB Gülüş Estetiği Ücreti) Küçükçekmece gülüş tasarımı fiyatları, uygulanacak işlemlerin kapsamına, hastanın diş yapısına ve k",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Küçükçekmece Gülüş Tasarımı Fiyatları","price":"KDV HARİÇ"},{"name":"Gülüş Tasarımı Fiyatları Ne Kadar? (2026 TDB Gülüş Estetiği Ücreti)","price":"5.500 TL'den başlamaktadır."},{"name":"Zirkonyum Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Tavşan Diş Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Akıllı (Smile Design) Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Hollywood Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Özel Hastane Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Üniversite Hastanesinde Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Kompozit Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Lamine Gülüş Tasarımı Fiyatları","price":"6.000 TL'den başlamaktadır."},{"name":"İmplant Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"İnvisaling Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Çarpık Dişlere Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Porselen Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Pembe Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Ön Dişler İçin Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Ayrık Dişler İçin Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
  },
{
    slug: "sariyer-ortodonti-tedavisi-ve-fiyatlari",
    name: "Sarıyer Ortodonti Tedavisi ve Fiyatları",
    short: "2026 Sarıyer ortodonti tedavisi fiyatları. Diş teli ve Invisalign.",
    intro: "Ortodonti nedir? Ortodonti , diş-çene-yüz bölgesini ilgilendiren bozuklukların oluşmasını önlemek; mevcut bozuklukların ilerlemesini durdurmak ve tedavi etmek;bununla birlikte iyi ",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"7","price":"ORTODONTİ"},{"name":"7-1","price":"Lateral Sefalometrik Film Analizi"},{"name":"7-2","price":"Antero Posterior Sefalometrik Film Analizi (Frontal Film Analizi)"},{"name":"7-3","price":"Kemik Yaşı Tayini"},{"name":"7-4","price":"Ortodontik Fotoğraf"},{"name":"7-5","price":"Ortodontik Fotoğraf Tetkiki"},{"name":"7-6","price":"Ortodontik Model Yapımı"},{"name":"7-7","price":"Ortodontik Model Analizi"},{"name":"7-8","price":"Ara Dönem Sefalometrik Film Analizi"},{"name":"7-9","price":"Ara Dönem Model Yapımı"},{"name":"7-10","price":"Angle Sınıf I Anomalilerinin Ortodontik Tedavisi"},{"name":"7-11","price":"Angle Sınıf II Anomalilerinin Ortodontik Tedavisi"},{"name":"7-12","price":"Angle Sınıf III Anomalilerinin Ortodontik Tedavisi"},{"name":"7-13","price":"Sabit Kapanış Yükseltici Tatbiki (Kısa Süreli)"},{"name":"7-14","price":"Lingual Teknikle Angle Sınıf I Anomalilerinin Ortodontik Tedavisi"},{"name":"7-15","price":"Lingual Teknikle Angle Sınıf II Anomalilerinin Ortodontik Tedavisi"},{"name":"7-16","price":"Lingual Teknikle Angle Sınıf III Anomalilerinin Ortodontik Tedavisi"},{"name":"7-17","price":"Açık Kapanışın Ortodontik Tedavisi"},{"name":"7-18","price":"Önleyici Ortodontik Tedavi"},{"name":"7-19","price":"Kısa Süreli Ortodontik Tedavi"},{"name":"7-20","price":"Pekiştirme Tedavisi"},{"name":"7-21","price":"Pekiştirme Aygıtı (Hawley Aygıtı vb.)"}],
    category: "fiyat",
  },
{
    slug: "dis-agrisi-tedavisi-fiyatlari",
    name: "Diş Ağrısı Tedavisi Fiyatları",
    short: "2026 diş ağrısı tedavisi fiyatları. Acil diş ağrısı müdahalesi.",
    intro: "Diş Ağrısı Tedavisi Fiyatları Nasıl Belirlenir? Diş ağrısı tedavisi fiyatları, ağrının kaynağına, uygulanacak işleme, dişin durumuna ve tedavi sürecinin kapsamına göre değişiklik g",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
  },
{
    slug: "dis-eti-estetigi-fiyatlari",
    name: "Diş Eti Estetiği Fiyatları",
    short: "2026 diş eti estetiği fiyatları. Pembe estetik ve gingivektomi.",
    intro: "Diş Eti Estetiği Fiyatları Nasıl Belirlenir? Diş eti estetiği fiyatları, gülüş görünümünü etkileyen diş eti seviyesinin, dokuların sağlığının ve uygulanacak işlemin kapsamına göre ",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
  },
{
    slug: "lazerle-dis-beyazlatma-fiyatlari",
    name: "Lazerle Diş Beyazlatma Fiyatları",
    short: "2026 lazerle diş beyazlatma fiyatları. Ofis tipi lazer beyazlatma.",
    intro: "Lazerle Diş Beyazlatma Fiyatları Nasıl Belirlenir? Lazerle diş beyazlatma fiyatları, dişlerin mevcut rengine, renklenmenin nedenine, uygulanacak seans sayısına ve işlem öncesinde i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
  },
{
    slug: "istanbul-porselen-dis-kaplama-fiyatlari",
    name: "Istanbul Porselen Diş Kaplama Fiyatları",
    short: "Istanbul Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "İstanbul porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"İstanbul Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"İstanbul Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "sisli-porselen-dis-kaplama-fiyatlari",
    name: "Sisli Porselen Diş Kaplama Fiyatları",
    short: "Sisli Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 TDB ağız diş sağlığı ve muayene ücretleri yakın zamanda içeriğimize eklenecektir. Daha detaylı 2026 TDB fiyatları için https://www.tdb.org.tr/tdb/v2/ekler/2026_Yili_Rehber_Tar",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üst Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Alt Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tek Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İmplant Üstü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üç Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Dört Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tüm Diş Komple Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Arka Dişler İçin Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Porselen Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Metal Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Zirkonyum Altyapılı Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Yamuk Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Kırık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Çarpık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eksik Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ayrık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Azı Dişi Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Doğal Görünümlü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Şeffaf Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eğri Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "arnavutkoy-porselen-dis-kaplama-fiyatlari",
    name: "Arnavutkoy Porselen Diş Kaplama Fiyatları",
    short: "Arnavutkoy Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Arnavutköy porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Arnavutköy Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Arnavutköy Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "avcilar-porselen-dis-kaplama-fiyatlari",
    name: "Avcilar Porselen Diş Kaplama Fiyatları",
    short: "Avcilar Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Avcılar porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı it",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Avcılar Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Avcılar Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "bagcilar-porselen-dis-kaplama-fiyatlari",
    name: "Bagcilar Porselen Diş Kaplama Fiyatları",
    short: "Bagcilar Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Bağcılar porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Bağcılar Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bağcılar Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "bakirkoy-porselen-dis-kaplama-fiyatlari",
    name: "Bakirkoy Porselen Diş Kaplama Fiyatları",
    short: "Bakirkoy Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Bakırköy porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Bakırköy Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Bakırköy Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "basaksehir-porselen-dis-kaplama-fiyatlari",
    name: "Basaksehir Porselen Diş Kaplama Fiyatları",
    short: "Basaksehir Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Başakşehir porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Başakşehir Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Başakşehir Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "besiktas-porselen-dis-kaplama-fiyatlari",
    name: "Besiktas Porselen Diş Kaplama Fiyatları",
    short: "Besiktas Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Beşiktaş porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Beşiktaş Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beşiktaş Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "beylikduzu-porselen-dis-kaplama-fiyatlari",
    name: "Beylikduzu Porselen Diş Kaplama Fiyatları",
    short: "Beylikduzu Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Beylikdüzü porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Beylikdüzü Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beylikdüzü Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "beyoglu-porselen-dis-kaplama-fiyatlari",
    name: "Beyoglu Porselen Diş Kaplama Fiyatları",
    short: "Beyoglu Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Beyoğlu porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı it",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Beyoğlu Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Beyoğlu Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "buyukcekmece-porselen-dis-kaplama-fiyatlari",
    name: "Buyukcekmece Porselen Diş Kaplama Fiyatları",
    short: "Buyukcekmece Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Büyükçekmece porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Büyükçekmece Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Büyükçekmece Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "esenyurt-porselen-dis-kaplama-fiyatlari",
    name: "Esenyurt Porselen Diş Kaplama Fiyatları",
    short: "Esenyurt Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Esenyurt porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Esenyurt Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Esenyurt Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "eyupsultan-porselen-dis-kaplama-fiyatlari",
    name: "Eyupsultan Porselen Diş Kaplama Fiyatları",
    short: "Eyupsultan Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Eyüpsultan porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Eyüpsultan Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Eyüpsultan Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "fatih-porselen-dis-kaplama-fiyatlari",
    name: "Fatih Porselen Diş Kaplama Fiyatları",
    short: "Fatih Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Fatih porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı itib",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Fatih Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Fatih Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "gaziosmanpasa-porselen-dis-kaplama-fiyatlari",
    name: "Gaziosmanpasa Porselen Diş Kaplama Fiyatları",
    short: "Gaziosmanpasa Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Gaziosmanpaşa porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 y",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Gaziosmanpaşa Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Gaziosmanpaşa Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "gungoren-porselen-dis-kaplama-fiyatlari",
    name: "Gungoren Porselen Diş Kaplama Fiyatları",
    short: "Gungoren Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Güngören porselen diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi yöntemi ve kliniğin bulunduğu bölge gibi faktörlere bağlı olarak değişiklik göstermektedir. 2026 yılı i",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Güngören Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Ön Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Üst Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Alt Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Tek Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören İmplant Üstü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Üç Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Dört Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Tüm Diş Komple Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Ön İki Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Arka Dişler İçin Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Porselen Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Metal Destekli Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Zirkonyum Altyapılı Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Yamuk Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Kırık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Çarpık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Eksik Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Ayrık Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Azı Dişi Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Doğal Görünümlü Porselen Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Şeffaf Porselen Diş Kaplama","price":"5.500 TL'den başlamaktadır."},{"name":"Güngören Eğri Diş Porselen Kaplama","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "kucukcekmece-porselen-dis-kaplama-fiyatlari",
    name: "Kucukcekmece Porselen Diş Kaplama Fiyatları",
    short: "Kucukcekmece Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 TDB ağız diş sağlığı ve muayene ücretleri yakın zamanda içeriğimize eklenecektir. Daha detaylı 2026 TDB fiyatları için https://www.tdb.org.tr/tdb/v2/ekler/2026_Yili_Rehber_Tar",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üst Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Alt Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tek Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İmplant Üstü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üç Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Dört Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tüm Diş Komple Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Arka Dişler İçin Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Porselen Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Metal Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Zirkonyum Altyapılı Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Yamuk Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Kırık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Çarpık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eksik Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ayrık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Azı Dişi Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Doğal Görünümlü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Şeffaf Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eğri Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "silivri-porselen-dis-kaplama-fiyatlari",
    name: "Silivri Porselen Diş Kaplama Fiyatları",
    short: "Silivri Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 TDB ağız diş sağlığı ve muayene ücretleri yakın zamanda içeriğimize eklenecektir. Daha detaylı 2026 TDB fiyatları için https://www.tdb.org.tr/tdb/v2/ekler/2026_Yili_Rehber_Tar",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üst Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Alt Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tek Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İmplant Üstü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üç Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Dört Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tüm Diş Komple Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Arka Dişler İçin Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Porselen Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Metal Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Zirkonyum Altyapılı Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Yamuk Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Kırık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Çarpık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eksik Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ayrık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Azı Dişi Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Doğal Görünümlü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Şeffaf Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eğri Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "sultangazi-porselen-dis-kaplama-fiyatlari",
    name: "Sultangazi Porselen Diş Kaplama Fiyatları",
    short: "Sultangazi Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 TDB ağız diş sağlığı ve muayene ücretleri yakın zamanda içeriğimize eklenecektir. Daha detaylı 2026 TDB fiyatları için https://www.tdb.org.tr/tdb/v2/ekler/2026_Yili_Rehber_Tar",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üst Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Alt Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tek Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İmplant Üstü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üç Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Dört Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tüm Diş Komple Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Arka Dişler İçin Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Porselen Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Metal Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Zirkonyum Altyapılı Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Yamuk Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Kırık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Çarpık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eksik Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ayrık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Azı Dişi Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Doğal Görünümlü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Şeffaf Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eğri Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "zeytinburnu-porselen-dis-kaplama-fiyatlari",
    name: "Zeytinburnu Porselen Diş Kaplama Fiyatları",
    short: "Zeytinburnu Porselen Diş Kaplama Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 TDB ağız diş sağlığı ve muayene ücretleri yakın zamanda içeriğimize eklenecektir. Daha detaylı 2026 TDB fiyatları için https://www.tdb.org.tr/tdb/v2/ekler/2026_Yili_Rehber_Tar",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üst Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Alt Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tek Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İmplant Üstü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Üç Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Dört Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Tüm Diş Komple Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ön İki Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Arka Dişler İçin Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Porselen Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Metal Destekli Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Zirkonyum Altyapılı Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Yamuk Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Kırık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Çarpık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eksik Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Ayrık Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Azı Dişi Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Doğal Görünümlü Porselen Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Şeffaf Porselen Diş Kaplama","price":"3.600 TL'den başlamaktadır."},{"name":"Eğri Diş Porselen Kaplama","price":"3.600 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "istanbul-seffaf-plak-fiyatlari",
    name: "Istanbul Şeffaf Plak Fiyatları",
    short: "Istanbul Şeffaf Plak Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "İstanbul Şeffaf Plak Fiyatları Ne Kadar? (2026 İstanbul TDB Şeffaf Plak Ücreti) Şeffaf plak tedavisi, dişlerdeki çapraşıklıkları düzeltmek için kullanılan görünmez ve estetik bir o",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Şeffaf Plak Fiyatları Ne Kadar? (2026 TDB Şeffaf Plak Ücreti)","price":"80.000 TL'den başlamaktadır."},{"name":"Üst Çene Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Alt Çene Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"18 Yaş Altı Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Çocuk Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Çift Çene Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Aparey Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Clearcorrect Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Devlet Hastanesi Gülüş Tasarımı Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Özel Hastane Gülüş Tasarımı Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Üniversite Hastanesinde Gülüş Tasarımı Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Diş Teli Çıktıktan Sonra Takılan Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."},{"name":"Pekiştirme Tedavisi Şeffaf Plak Fiyatları","price":"80.000 TL'den başlamaktadır."}],
    category: "fiyat",
    menu: false,
  },
{
    slug: "nobel-biocare-implant-fiyati",
    name: "Nobel Biocare İmplant Fiyatları",
    short: "Nobel Biocare İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Nobel Biocare implant, yüksek kaliteli ve dünya çapında tanınan bir dental implant markasıdır. Dayanıklılığı ve estetik görünümü ile ön plana çıkar. Nobel Biocare implant fiyatları",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "astra-implant-fiyati",
    name: "Astra İmplant Fiyatları",
    short: "Astra İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Astra implantlar, yüksek kaliteli titanyum malzemeden üretilen ve dayanıklılığıyla bilinen bir implant markasıdır. Genellikle kemik uyumu yüksek ve uzun ömürlü olmasıyla öne çıkar.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "straumann-implant-fiyati",
    name: "Straumann İmplant Fiyatları",
    short: "Straumann İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Straumann implant, dünya genelinde tanınan ve yüksek kaliteli malzemelerle üretilen bir dental implant markasıdır. Dayanıklılığı, biyouyumluluğu ve uzun ömürlü yapısıyla dikkat çek",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "medentika-implant-fiyati",
    name: "Medentika İmplant Fiyatları",
    short: "Medentika İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Medentika implant fiyatları, genellikle 2026 yılı itibarıyla 17.500 TL'den başlamaktadır (KDV dahil değildir). Bu fiyatlandırma, yalnızca implant malzemesini kapsar ve cerrahi uygu",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "bego-implant-fiyati",
    name: "Bego İmplant Fiyatları",
    short: "Bego İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Bego implant fiyatları, 2026 yılı itibarıyla 19.000 TL'den başlamaktadır (KDV dahil değildir). Bego, implant teknolojisinde lider markalardan biri olup, kaliteli malzeme ve uzun öm",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "osstem-implant-fiyati",
    name: "Osstem İmplant Fiyatları",
    short: "Osstem İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Osstem İmplant, diş implantı alanında dünya çapında bilinen ve yaygın olarak tercih edilen bir markadır. Yüksek kalite standartları ve başarılı klinik sonuçları ile öne çıkar. 2026",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "nucleoss-implant-fiyati",
    name: "Nucleoss İmplant Fiyatları",
    short: "Nucleoss İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "2026 yılı itibarıyla Nucleoss İmplant Fiyatı 10.000 TL'den başlamaktadır. Bu fiyatlandırma KDV dahil değildir. Nucleoss implantlar, yerli üretim olup Türkiye merkezlidir. Kaliteli ",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  },
{
    slug: "medigma-implant-fiyati",
    name: "Medigma İmplant Fiyatları",
    short: "Medigma İmplant Fiyatları — 2026 güncel TDB tarifesi.",
    intro: "Medigma implant fiyatları, 2026 yılı itibarıyla 12.000 TL 'den başlamaktadır. Bu fiyatlandırma KDV dahil değildir ve kliniklere göre değişiklik gösterebilir. Tedavi süreci, kullanı",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "fiyat",
    menu: false,
  }
];



export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

// İstanbul ilçe adları (porselen semt sayfaları için)
const ISTANBUL_DISTRICTS = [
  "adalar", "arnavutkoy", "atasehir", "avcilar", "bagcilar", "bahcelievler",
  "bakirkoy", "basaksehir", "bayrampasa", "besiktas", "beykoz", "beylikduzu",
  "beyoglu", "buyukcekmece", "catalca", "cekmekoy", "esenler", "esenyurt",
  "eyupsultan", "fatih", "gaziosmanpasa", "gungoren", "kadikoy", "kagithane",
  "kartal", "kucukcekmece", "maltepe", "pendik", "sancaktepe", "sariyer",
  "sile", "silivri", "sisli", "sultanbeyli", "sultangazi", "tuzla",
  "umraniye", "uskudar", "zeytinburnu",
];

export type PriceGroup = "porselen-istanbul" | "porselen-il" | "seffaf" | "gulus" | "implant";

/** Slug'ın hangi fiyat grubuna ait olduğunu döndürür. */
export function getPriceGroup(slug: string): PriceGroup | null {
  if (!slug.includes("fiyat") && !slug.includes("fiyati")) return null;
  if (slug.includes("porselen-dis-kaplama-fiyatlari")) {
    const first = slug.split("-")[0];
    return ISTANBUL_DISTRICTS.includes(first) || first === "istanbul"
      ? "porselen-istanbul"
      : "porselen-il";
  }
  if (slug.includes("seffaf-plak-fiyatlari")) return "seffaf";
  if (slug.includes("gulus-tasarimi-fiyatlari")) return "gulus";
  if (slug.includes("implant-fiyati") || slug.includes("implant-fiyatlari")) return "implant";
  return null;
}

/** Aynı fiyat grubundaki diğer sayfaların slug'larını döndürür (kendisi hariç). */
export function getRelatedPriceSlugs(slug: string): string[] {
  const group = getPriceGroup(slug);
  if (!group) return [];

  const related = new Set<string>();

  services.forEach((s) => {
    if (s.slug === slug || s.category !== "fiyat") return;

    // Aynı gruptaki sayfalar
    if (getPriceGroup(s.slug) === group) {
      related.add(s.slug);
      return;
    }

    // İl porselen sayfaları, İstanbul porselen (ilçe hub'ı) ile de ilişkilidir.
    if (
      group === "porselen-il" &&
      s.slug === "istanbul-porselen-dis-kaplama-fiyatlari"
    ) {
      related.add(s.slug);
    }
  });

  return [...related];
}

export const serviceCategories: { key: Service["category"]; label: string }[] = [
  { key: "branc", label: "Branşlar" },
  { key: "cerrahi", label: "Cerrahi Tedaviler" },
  { key: "estetik", label: "Estetik Tedaviler" },
  { key: "gulus", label: "Gülüş Tasarımı" },
  { key: "implant", label: "İmplant" },
  { key: "kaplama", label: "Kaplamalar" },
  { key: "dolgu", label: "Dolgu & Kanal" },
  { key: "ortodonti", label: "Ortodonti" },
  { key: "cocuk", label: "Çocuk Diş" },
  { key: "acil", label: "Acil Diş" },
  { key: "fiyat", label: "Fiyatlar" },
];
