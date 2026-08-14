export type Service = {
  slug: string;
  name: string;
  short: string;
  intro: string;
  priceNote?: string;
  priceRows?: { name: string; price: string }[];
  features: string[];
  category: "acil" | "implant" | "estetik" | "kaplama" | "ortodonti" | "cocuk" | "cerrahi" | "dolgu" | "branc" | "gulus";
  image?: string;
  body?: { h2: string; paragraphs: string[] }[];
  faq?: { question: string; answer: string }[];
  related?: string[];
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
    intro: "Gece, pazar ve bayramda 7/24 acil diş müdahalesi. Beklemeden aynı gün çözüm. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
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
    intro: "Dijital smile design ile kişiye özel estetik gülüş planlaması. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
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
    intro: "Kompozit ve porselen dolgularla çürük dişlerin estetik onarımı. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
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
    intro: "Takma diş, akrilik protez ve implant üstü protez çözümleri. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
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
    intro: "Sedasyon ve modern anestezi ile tamamen konforlu diş tedavisi. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
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
    slug: "dis-tedavisi-fiyatlari",
    name: "Diş Tedavisi Fiyatları 2026",
    short: "Tüm diş tedavilerinin 2026 güncel fiyat rehberi.",
    intro: "Tüm diş tedavilerinin 2026 güncel fiyat rehberi. Detaylı bilgi için 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    category: "acil",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
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
];
