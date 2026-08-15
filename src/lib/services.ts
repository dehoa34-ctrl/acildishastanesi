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
    slug: "afyonkarahisar-dis-rontgeni-fiyatlari",
    name: "Afyonkarahisar Diş Röntgeni Fiyatları",
    short: "2026 Afyonkarahisar diş röntgeni (periapikal) fiyatları. TDB güncel tarifesi.",
    intro: "Diş röntgeni (periapikal) işlemi, diş kökü, çevresindeki kemik dokusu ve dişin genel sağlığı hakkında detaylı bilgi sunar. Özellikle çürük, enfeksiyon, kist veya travma gibi duruml",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Diş Röntgeni Fiyatları","price":"KDV HARİÇ"},{"name":"Diş Röntgeni (Periapikal) Fiyatları Ne Kadar? (2026 TDB Diş Röntgeni Ücreti)","price":"Ücretsiz"},{"name":"Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıksız Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıklı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Panoramik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çocuk Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Apsesi İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Enfeksiyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"20'lik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Süt Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Normal Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Lezyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Bebek Diş Röntgeni Fiyatları","price":"5 Yaş Altı Yok"},{"name":"Düzgün Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Gömülü Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavili Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"3 Boyutlu 3D Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Gerektiren Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Dolgulu Diş Röntgeni Fiyatları","price":"Ücretsiz"}],
    category: "fiyat",
  },
  {
    slug: "ardahan-dis-rontgeni-fiyatlari",
    name: "Ardahan Diş Röntgeni Fiyatları",
    short: "2026 Ardahan diş röntgeni (periapikal) fiyatları. TDB güncel tarifesi.",
    intro: "Diş röntgeni (periapikal) işlemi, diş kökü, çevresindeki kemik dokusu ve dişin genel sağlığı hakkında detaylı bilgi sunar. Özellikle çürük, enfeksiyon, kist veya travma gibi duruml",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Diş Röntgeni Fiyatları","price":"KDV HARİÇ"},{"name":"Diş Röntgeni (Periapikal) Fiyatları Ne Kadar? (2026 TDB Diş Röntgeni Ücreti)","price":"Ücretsiz"},{"name":"Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıksız Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıklı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Panoramik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çocuk Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Apsesi İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Enfeksiyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"20'lik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Süt Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Normal Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Lezyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Bebek Diş Röntgeni Fiyatları","price":"5 Yaş Altı Yok"},{"name":"Düzgün Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Gömülü Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavili Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"3 Boyutlu 3D Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Gerektiren Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Dolgulu Diş Röntgeni Fiyatları","price":"Ücretsiz"}],
    category: "fiyat",
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
    slug: "eskisehir-dis-dolgu-fiyatlari",
    name: "Eskişehir Diş Dolgu Fiyatları",
    short: "2026 Eskişehir diş dolgu fiyatları. Kompozit ve porselen dolgu tarifesi.",
    intro: "Eskişehir diş dolgu fiyatları, kullanılan malzeme türü ve dolgunun kapsamına göre değişiklik göstermektedir. 2026 yılı itibariyle, Eskişehir diş dolgusu fiyatları 1.454 TL'den başl",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Eskişehir Diş Dolgu Fiyatları","price":"KDV HARİÇ"},{"name":"Eskişehir Diş Dolgu Tedavisi","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Estetik Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Kompozit Dolgu (Tek Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Kompozit Dolgu (İki Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Kompozit Dolgu (Üç Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Ön Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Arka Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Kırık Ön Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Bir Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Amalgam Dolgu (Tek Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Amalgam Dolgu (İki Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Amalgam Dolgu (Üç Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Çocuk Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir İnley Dolgu (Bir Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir İnley Dolgu (İki Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir İnley Dolgu (Üç Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Seramik İnley Dolgu (Bir Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Seramik İnley Dolgu (İki Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Seramik İnley Dolgu (Üç Yüzlü)","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Porselen Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Işıklı Kompozit Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Beyaz Diş Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Azı Dişi Dolgu","price":"1.454 TL'den başlamaktadır."},{"name":"Eskişehir Vidalı Dolgu","price":"1.454 TL'den başlamaktadır."}],
    category: "fiyat",
  },
  {
    slug: "giresun-dis-rontgeni-fiyatlari",
    name: "Giresun Diş Röntgeni Fiyatları",
    short: "2026 Giresun diş röntgeni (periapikal) fiyatları. TDB güncel tarifesi.",
    intro: "Diş röntgeni (periapikal) işlemi, diş kökü, çevresindeki kemik dokusu ve dişin genel sağlığı hakkında detaylı bilgi sunar. Özellikle çürük, enfeksiyon, kist veya travma gibi duruml",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Diş Röntgeni Fiyatları","price":"KDV HARİÇ"},{"name":"Diş Röntgeni (Periapikal) Fiyatları Ne Kadar? (2026 TDB Diş Röntgeni Ücreti)","price":"Ücretsiz"},{"name":"Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıksız Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Sağlıklı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Panoramik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çocuk Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Apsesi İltihaplı Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Enfeksiyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"20'lik Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Süt Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Normal Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Lezyonlu Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Bebek Diş Röntgeni Fiyatları","price":"5 Yaş Altı Yok"},{"name":"Düzgün Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Gömülü Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavili Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Çürük Apseli Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"3 Boyutlu 3D Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Gerektiren Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Kanal Tedavisi Diş Röntgeni Fiyatları","price":"Ücretsiz"},{"name":"Dolgulu Diş Röntgeni Fiyatları","price":"Ücretsiz"}],
    category: "fiyat",
  },
  {
    slug: "isparta-zirkonyum-dis-kaplama-fiyatlari",
    name: "Isparta Zirkonyum Diş Kaplama Fiyatları",
    short: "2026 Isparta zirkonyum diş kaplama fiyatları. TDB güncel tarifesi.",
    intro: "Isparta zirkonyum diş kaplama fiyatları, kullanılan malzeme kalitesi, tedavi süreci ve kliniğe göre değişiklik gösterebilir. 2026 yılı itibariyle, Isparta zirkonyum diş kaplama fiy",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Isparta Zirkonyum Diş Kaplama Fiyatları","price":"KDV HARİÇ"},{"name":"Isparta Zirkonyum Diş Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Ön Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Üst Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Alt Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Tek Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta İmplant Üstü Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta İki Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Üç Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Dört Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Tüm Diş Komple Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Ön İki Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Arka Dişler İçin Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Porselen Destekli Zirkonyum Diş Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Monolitik Zirkonyum Diş Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Yamuk Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Kırık Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Çarpık Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Eksik Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Ayrık Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Azı Dişi Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Doğal Görünümlü Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Şeffaf Zirkonyum Diş Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Eğri Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."},{"name":"Isparta Seyrek Diş Zirkonyum Kaplama","price":"7.000 TL'den başlamaktadır."}],
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
    slug: "tekirdag-gulus-tasarimi-fiyatlari",
    name: "Tekirdağ Gülüş Tasarımı Fiyatları",
    short: "2026 Tekirdağ gülüş tasarımı fiyatları. Dijital smile design.",
    intro: "Tekirdağ Gülüş Tasarımı Fiyatları Ne Kadar? (2026 TDB Gülüş Estetiği Ücreti) Tekirdağ gülüş tasarımı fiyatları, uygulanacak işlemlerin kapsamına, hastanın diş yapısına ve kullanıla",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Tekirdağ Gülüş Tasarımı Fiyatları","price":"KDV HARİÇ"},{"name":"Gülüş Tasarımı Fiyatları Ne Kadar? (2026 TDB Gülüş Estetiği Ücreti)","price":"5.500 TL'den başlamaktadır."},{"name":"Zirkonyum Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Tavşan Diş Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Akıllı (Smile Design) Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Hollywood Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Özel Hastane Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Üniversite Hastanesinde Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Kompozit Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Lamine Gülüş Tasarımı Fiyatları","price":"6.000 TL'den başlamaktadır."},{"name":"İmplant Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"İnvisaling Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Çarpık Dişlere Gülü�� Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Porselen Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Pembe Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Ön Dişler İçin Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Ayrık Dişler İçin Gülüş Tasarımı Fiyatları","price":"5.500 TL'den başlamaktadır."}],
    category: "fiyat",
  },
  {
    slug: "canakkale-protez-dis-fiyatlari",
    name: "Çanakkale Protez Diş Fiyatları",
    short: "2026 Çanakkale protez diş fiyatları. Takma diş ve protez tarifesi.",
    intro: "Çanakkale Protez Diş Fiyatları Ne Kadar? (2026 Çanakkale TDB Protez Diş Ücreti) Protez diş tedavileri, eksik dişlerin yerini doldurmak ve hem estetik hem fonksiyonel açıdan ağız sa",
    features: [
      "7/24 açık klinik",
      "Uzman hekim kadrosu",
      "Son teknoloji cihazlar",
      "Net ve şeffaf fiyat",
      "Cumartesi, pazar ve bayramlarda açık"
    ],
    priceNote: "2026 güncel tarife (KDV hariç). Kesin fiyat muayene sonrası netleştirilir.",
    priceRows: [{"name":"Çanakkale Protez Diş Fiyatları","price":"KDV HARİÇ"},{"name":"Protez Diş Fiyatları Ne Kadar? (2026 TDB Protez Diş Ücreti)","price":"6.000 TL'den başlamaktadır."},{"name":"Alt Üst Protez Diş Fiyatları","price":"15.000 TL'den başlamaktadır."},{"name":"SGK Protez Diş Fiyatları","price":"15.000 TL'den başlamaktadır."},{"name":"Özel Hastane Protez Diş Fiyatları","price":"15.000 TL'den başlamaktadır."},{"name":"Sabit Protez Diş Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Geçici Protez Diş Fiyatları","price":"7.500 TL'den başlamaktadır."},{"name":"Ankerli (Çıtçıtlı) Protez Diş Fiyatlar��","price":"7.500 TL'den başlamaktadır."},{"name":"Hareketli Protez Diş Fiyatları","price":"6.800 TL'den başlamaktadır."},{"name":"Tek Diş Protez Diş Fiyatları","price":"250 TL'den başlamaktadır."},{"name":"Tam Damak (Komple) Protez Diş Fiyatları","price":"17.000 TL'den başlamaktadır."},{"name":"Deflex Protez Diş Fiyatları","price":"7.000 TL'den başlamaktadır."},{"name":"Hazır Protez Diş Fiyatları","price":"7.400 TL'den başlamaktadır."},{"name":"Akrilik Protez Diş Fiyatları","price":"6.200 TL'den başlamaktadır."},{"name":"Şeffaf Akrilik Protez Diş Fiyatları","price":"7.500 TL'den başlamaktadır."},{"name":"Alt Çene Protez Diş Fiyatları","price":"7.500 TL'den başlamaktadır."},{"name":"Üst Çene Protez Diş Fiyatları","price":"7.500 TL'den başlamaktadır."},{"name":"Zirkonyum Protez Diş Fiyatları","price":"7.000 TL'den başlamaktadır."},{"name":"Porselen Protez Diş Fiyatları","price":"5.500 TL'den başlamaktadır."},{"name":"Mikro Protez Diş Fiyatları","price":"7.000 TL'den başlamaktadır."},{"name":"Esnek Protez Diş Fiyatları","price":"7.600 TL'den başlamaktadır."},{"name":"Köprü Protez Diş Fiyatları","price":"6.800 TL'den başlamaktadır."},{"name":"Yarım Damak Protez Diş Fiyatları","price":"6.000 TL'den başlamaktadır."},{"name":"Ön Diş Protez Diş Fiyatları","price":"6.000 TL'den başlamaktadır."},{"name":"Vakumlu Protez Diş Fiyatları","price":"8.000 TL'den başlamaktadır."}],
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
  { key: "fiyat", label: "Fiyatlar" },
];
