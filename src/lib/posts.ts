export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readMinutes: number;
  image: string;
  /** Blog gövdesi: başlık + paragraf bölümleri. */
  body: { h2: string; paragraphs: string[] }[];
  /** İlgili iç sayfalara linkler. */
  relatedLinks?: { href: string; label: string }[];
  faq?: { question: string; answer: string }[];
};

export const posts: BlogPost[] = [
  {
    slug: "dis-agrisi-neden-olur-evde-nasil-gecer",
    title: "Diş Ağrısı Neden Olur? Evde Nasıl Geçer?",
    description:
      "Diş ağrısının en yaygın nedenleri, evde geçici rahatlama yöntemleri ve ne zaman acil diş hekimine başvurmanız gerektiği hakkında kapsamlı rehber.",
    category: "Ağız Sağlığı",
    date: "2026-01-15",
    readMinutes: 6,
  image: "/images/servis/kanal-card.webp",
    body: [
      {
        h2: "Diş ağrısının en sık görülen nedenleri",
        paragraphs: [
          "Diş ağrısı, çürük, diş eti iltihabı, apse, diş kırığı veya diş sıkma (bruksizm) gibi pek çok farklı nedenden kaynaklanabilir. Çürük, diş minesinin zayıflamasıyla bakterilerin dentin ve pulpa tabakasına ulaşmasıyla oluşur ve en yaygın ağrı sebebidir.",
          "Diş eti çekilmesi ve iltihabı (periodontitis), diş kökünün açığa çıkmasına neden olarak soğuğa ve sıcağa karşı hassasiyet yaratır. 20 yaş dişlerinin gömülü kalması da özellikle genç yetişkinlerde şiddetli ağrıya yol açabilir.",
        ],
      },
      {
        h2: "Evde geçici rahatlama yöntemleri",
        paragraphs: [
          "Diş ağrısı başladığında tuzlu su ile gargara yapmak, iltihabı bir miktar azaltabilir. Soğuk kompres uygulamak şişliği ve ağrıyı hafifletir. Karanfil yağı gibi doğal ağrı kesiciler de kısa süreli rahatlama sağlar.",
          "Ancak bu yöntemler yalnızca geçicidir. Ağrının kaynağı olan çürük, iltihap veya kırık mutlaka bir diş hekimi tarafından tedavi edilmelidir. Ağrı kesiciler sadece belirtiyi maskeler.",
        ],
      },
      {
        h2: "Ne zaman acil diş hekimine başvurmalısınız?",
        paragraphs: [
          "Diş ağrınız gece başladıysa, yüzünüzde şişlik oluştuysa, ateşiniz yükseldiyse veya dişiniz kırıldıysa vakit kaybetmeden acil diş hekimine başvurmalısınız. Diş apsesi tedavi edilmediğinde enfeksiyon çevre dokulara yayılabilir.",
          "İstanbul'da gece ya da hafta sonu diş ağrınız olduğunda 7/24 açık nöbetçi diş kliniğimizi arayabilirsiniz. Beklemeden aynı gün müdahale ediyoruz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 İstanbul Ağız ve Diş Sağlığı Merkezi" },
      { href: "/kadikoy-acil-dis-hastanesi/", label: "Kadıköy Nöbetçi Dişçi" },
      { href: "/iletisim/", label: "İletişim" },
    ],
    faq: [
      {
        question: "Diş ağrısı için evde ne yapabilirim?",
        answer: "Tuzlu su ile gargara, soğuk kompres ve karanfil yağı kısa süreli rahatlama sağlar. Ancak kalıcı çözüm için mutlaka diş hekimine görünmelisiniz.",
      },
      {
        question: "Gece diş ağrısı için nereyi aramalıyım?",
        answer: "7/24 açık nöbetçi diş kliniğimizi 0532 438 13 03 numarasından arayabilirsiniz.",
      },
    ],
  },
  {
    slug: "gece-dis-agrisi-ne-yapmali",
    title: "Gece Diş Ağrısı İçin Ne Yapmalı? Nöbetçi Dişçi Rehberi",
    description:
      "Gece yarısı başlayan diş ağrısında yapılacaklar, İstanbul'da gece açık diş kliniği bulma yöntemleri ve nöbetçi dişçi hizmeti rehberi.",
    category: "Acil Diş",
    date: "2026-01-22",
    readMinutes: 5,
  image: "/images/servis/cekim-card.webp",
    body: [
      {
        h2: "Gece başlayan diş ağrısı neden daha şiddetli hissedilir?",
        paragraphs: [
          "Uyku sırasında vücut yatar pozisyonda olduğu için baş bölgesindeki kan basıncı artar. Bu durum, dişteki iltihaplı bölgeye giden kan akışını artırarak ağrının daha zonklayıcı hissedilmesine neden olur.",
          "Ayrıca gündüz yaşanan meşguliyet, ağrıyı bir miktar bastırırken gece sessizlikte dikkat tamamen ağrıya odaklanır. Bu yüzden gece diş ağrıları genellikle daha dayanılmazdır.",
        ],
      },
      {
        h2: "Gece diş ağrısında yapılacaklar",
        paragraphs: [
          "Öncelikle ağrılı bölgeye dışarıdan soğuk kompres uygulayın. Yastığınızı yükseltip yatarak başınızı dik tutmak ağrıyı hafifletebilir. Yemek artıkları ağrıyı artırabileceği için ağzınızı ılık tuzlu suyla çalkalayın.",
          "Ağrı kesici alabilirsiniz ancak bu yalnızca geçicidir. Diş ağrısının kaynağı müdahale gerektirir; en doğrusu gece de açık bir diş kliniğine başvurmaktır.",
        ],
      },
      {
        h2: "İstanbul'da gece açık nöbetçi dişçi nasıl bulunur?",
        paragraphs: [
          "İstanbul'un birçok ilçesinde diş klinikleri mesai saatleri dışında kapalıdır. Gece ve hafta sonu ihtiyaçlar için 7/24 çalışan nöbetçi diş klinikleri en güvenilir seçenektir.",
          "Kliniğimiz İstanbul'un merkezi noktalarına yakın konumuyla gece, pazar ve bayram dahil kesintisiz hizmet verir. 0532 438 13 03 numarasını aradığınızda size en yakın nöbetçi diş hekimine yönlendirme yapılır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/avrupa-yakasi-acil-dis-hastanesi/", label: "Avrupa Yakası Nöbetçi Dişçi" },
    ],
    faq: [
      {
        question: "Gece diş ağrısı için 112'yi aramalı mıyım?",
        answer: "Diş ağrısı acil sağlık durumu değildir; 112 yalnızca hayati tehlike için kullanılmalıdır. Diş ağrısında en doğru adres 7/24 açık nöbetçi diş kliniğidir.",
      },
      {
        question: "Nöbetçi dişçi pazar günü açık mı?",
        answer: "Evet. Kliniğimiz pazar günleri de acil diş hizmeti verir.",
      },
    ],
  },
  {
    slug: "20-yas-disi-agrisi-ve-cekimi",
    title: "20 Yaş Dişi Ağrısı ve Çekimi Hakkında Bilmeniz Gerekenler",
    description:
      "20 yaş dişi ağrısının nedenleri, gömülü 20 yaş dişi belirtileri, çekim süreci ve sonrası dikkat edilmesi gerekenler.",
    category: "Ağız Sağlığı",
    date: "2026-02-05",
    readMinutes: 7,
  image: "/images/servis/20lik-card.webp",
    body: [
      {
        h2: "20 yaş dişi neden ağrır?",
        paragraphs: [
          "20 yaş dişleri (yirmilik dişler), ağızda yer kalmadığında gömülü kalabilir veya yanlış açıyla çıkabilir. Bu durum diş etinde iltihaplanma, çevre dişlere baskı ve şiddetli ağrıya neden olur.",
          "Yarı gömülü 20 yaş dişleri, temizlenemediği için bakteri birikimine açıktır. Bu da tekrarlayan diş eti enfeksiyonlarına ve kötü ağız kokusuna yol açabilir.",
        ],
      },
      {
        h2: "20 yaş dişi çekimi ne zaman gerekir?",
        paragraphs: [
          "Ağrı, tekrarlayan iltihap, çene ağrısı veya çevre dişlere zarar verme riski varsa 20 yaş dişinin çekilmesi önerilir. Diş hekimi röntgen ile dişin konumunu değerlendirerek karar verir.",
          "Genç yaşta yapılan çekimlerde iyileşme daha hızlıdır. Bu yüzden 20 yaş civarında kontrol önerilir.",
        ],
      },
      {
        h2: "Çekim sonrası iyileşme süreci",
        paragraphs: [
          "20 yaş dişi çekimi sonrası ilk 24 saat kanama ve şişlik normaldir. Soğuk kompres, dinlenme ve hekimin önerdiği ilaçlar süreci rahatlatır. Sigara kullanımı ve sert yiyeceklerden kaçınılmalıdır.",
          "İyileşme genellikle 1-2 hafta içinde tamamlanır. Şiddetli ağrı, ateş veya uzamış kanama durumunda hekime başvurulmalıdır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "İmplant Diş Fiyatları" },
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul Acil Diş" },
    ],
    faq: [
      {
        question: "20 yaş dişi çekimi ağrılı mıdır?",
        answer: "Çekim lokal anestezi ile yapıldığı için işlem sırasında ağrı hissedilmez. Sonrasında hafif ağrı görülebilir ve ilaçla kontrol altına alınır.",
      },
      {
        question: "Gömülü 20 yaş dişi çekilmeli mi?",
        answer: "Gömülü diş sorun yaratmıyorsa takip edilebilir. Ağrı, iltihap veya çevre dişlere baskı yapıyorsa çekim önerilir.",
      },
    ],
  },
  {
    slug: "implant-fiyatlari-2026-rehberi",
    title: "İmplant Fiyatları 2026 Rehberi: Neye Göre Değişir?",
    description:
      "2026 yılı implant diş fiyatları, marka karşılaştırması (Alman, Kore, İsviçre, Straumann) ve fiyatı etkileyen faktörler hakkında güncel rehber.",
    category: "Fiyatlar",
    date: "2026-02-12",
    readMinutes: 8,
  image: "/images/servis/implant-card.webp",
    body: [
      {
        h2: "İmplant fiyatları neden bu kadar değişken?",
        paragraphs: [
          "İmplant fiyatları; kullanılan marka, implant sayısı, çene kemiği durumu, ek cerrahi işlemler ve üst yapı (kron) malzemesine göre büyük farklılıklar gösterir. Tek dişten tam çene implantlara kadar maliyet değişir.",
          "Kemik erimesi yaşayan hastalarda kemik grefti (bone graft) gerekebilir. Bu ek işlemler toplam maliyeti artırır ancak başarılı sonuç için kritik önemdedir.",
        ],
      },
      {
        h2: "2026 yılı marka bazlı ortalama fiyatlar",
        paragraphs: [
          "Piyasada en yaygın implant markaları Alman, Kore, İsviçre menşeli ve Straumann'dır. Alman malı implantlar uygun fiyat-performans dengesi sunarken, İsviçre ve Straumann üst segment kalite olarak öne çıkar.",
          "Ortalama olarak Kore malı implantlar daha ekonomik, Straumann ise en yüksek fiyat bandında yer alır. Fiyatların netleşmesi için muayene ve kişiye özel planlama şarttır.",
        ],
      },
      {
        h2: "Ucuz implant güvenilir mi?",
        paragraphs: [
          "İmplant seçerken sadece fiyata odaklanmak hata olur. Kalitesiz marka ve deneyimsiz hekim, implant başarısızlığına yol açabilir. Uygun fiyatlı ancak sertifikalı markalar ve uzman hekim tercih edilmelidir.",
          "İmplant, doğru uygulandığında 25-35 yıl kullanılabilen bir yatırımdır. Bu yüzden fiyat ile birlikte malzeme kalitesi ve hekim deneyimi birlikte değerlendirilmelidir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "Güncel İmplant Fiyatları" },
      { href: "/zirkonyum-kaplama-dis-fiyatlari/", label: "Zirkonyum Fiyatları" },
    ],
    faq: [
      {
        question: "2026'da implant fiyatları ne kadar?",
        answer: "İmplant fiyatları marka ve işleme göre 3.000-12.000 TL arasında değişir. Net fiyat için muayene gerekir.",
      },
      {
        question: "En iyi implant markası hangisi?",
        answer: "Alman, İsviçre ve Straumann markaları klinik olarak en çok tercih edilenlerdir. Seçim hekim önerisiyle yapılmalıdır.",
      },
    ],
  },
  {
    slug: "zirkonyum-vs-porselen-kapama",
    title: "Zirkonyum mu Porselen mi? Kaplama Seçim Rehberi",
    description:
      "Zirkonyum ve porselen kaplama arasındaki farklar, avantajlar, estetik ve dayanıklılık karşılaştırması ile hangi durumda hangisi tercih edilmeli.",
    category: "Estetik Diş",
    date: "2026-02-19",
    readMinutes: 6,
  image: "/images/servis/zirkonyum-card.webp",
    body: [
      {
        h2: "Zirkonyum kaplama nedir?",
        paragraphs: [
          "Zirkonyum, metal içermeyen ve vücutla tam uyumlu yüksek teknoloji bir kaplama malzemesidir. Işık geçirgenliği sayesinde doğal dişe en yakın görünümü sağlar ve alerjik reaksiyon riski yok denecek kadar azdır.",
          "Zirkonyum özellikle ön dişlerde estetik mükemmellik, arka dişlerde ise dayanıklılık sunar. Metal destekli kaplamaların diş etinde zamanla oluşturduğu koyu görünüm zirkonyumda görülmez.",
        ],
      },
      {
        h2: "Porselen kaplama nedir?",
        paragraphs: [
          "Porselen kaplamalar metal destekli veya tam porselen olarak uygulanabilir. Metal destekli porselen, uzun yıllardır kullanılan ekonomik ve dayanıklı bir seçenektir.",
          "Tam porselen (Emax) kaplamalar ise estetik açıdan zirkonyuma yakın sonuç verir ancak zirkonyum kadar dayanıklı olmayabilir.",
        ],
      },
      {
        h2: "Hangisini seçmeliyim?",
        paragraphs: [
          "Ön dişlerde estetik öncelikliyse zirkonyum veya Emax, arka dişlerde çiğneme kuvvetine dayanıklılık gerekiyorsa zirkonyum önerilir. Bütçe dostu bir çözüm aranıyorsa metal destekli porselen değerlendirilebilir.",
          "Kesin karar için diş hekimi muayenesi ve dijital planlama yapılmalıdır. Her hastanın ağız yapısı ve ihtiyacı farklıdır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/zirkonyum-kaplama-dis-fiyatlari/", label: "Zirkonyum Fiyatları" },
      { href: "/porselen-dis-kaplama-fiyatlari/", label: "Porselen Kaplama Fiyatları" },
      { href: "/lamine-emax-kaplama-dis-fiyatlari/", label: "Lamine & Emax" },
    ],
    faq: [
      {
        question: "Zirkonyum kaplama ömrü ne kadar?",
        answer: "Düzenli bakımla zirkonyum kaplamalar 10-15 yıl ve üzeri kullanılabilir.",
      },
      {
        question: "Zirkonyum mu daha estetik porselen mi?",
        answer: "Zirkonyum, metal içermemesi ve ışık geçirgenliği sayesinde estetik olarak daha avantajlıdır.",
      },
    ],
  },
  {
    slug: "kanal-tedavisi-ne-kadar-surer",
    title: "Kanal Tedavisi Ne Kadar Sürer? Süreç Nasıl İşler?",
    description:
      "Kanal tedavisinin (endodonti) süresi, seans sayısı, ağrılı olup olmadığı ve sonrasında dikkat edilmesi gerekenler hakkında detaylı rehber.",
    category: "Tedaviler",
    date: "2026-03-04",
    readMinutes: 6,
  image: "/images/servis/inlay-card.webp",
    body: [
      {
        h2: "Kanal tedavisi ne zaman gerekir?",
        paragraphs: [
          "Çürük veya travma dişin pulpa (sinir) dokusuna ulaştığında şiddetli ağrı ve iltihap oluşur. Bu durumda dişi kurtarmak için kanal tedavisi yapılır. Tedavi edilmezse apse ve diş kaybı kaçınılmaz olabilir.",
          "Gece başlayan zonklayıcı ağrı, sıcağa/soğuğa uzun süreli hassasiyet ve diş etinde şişlik kanal tedavisi ihtiyacının belirtileridir.",
        ],
      },
      {
        h2: "Kanal tedavisi kaç seansta biter?",
        paragraphs: [
          "Kanal tedavisi genellikle 1-3 seansta tamamlanır. Enfeksiyon durumuna göre seans sayısı değişir. Modern cihazlarla birçok kanal tedavisi tek seansta bitirilebilir.",
          "İlk seansta kanal temizlenir ve ilaç konur; son seansta dolgu yapılır. Tedavi sonrası dişe koruyucu kaplama önerilir.",
        ],
      },
      {
        h2: "Kanal tedavisi ağrılı mıdır?",
        paragraphs: [
          "Kanal tedavisi lokal anestezi ile yapıldığı için işlem sırasında ağrı hissedilmez. Tedavi sonrası birkaç gün hafif hassasiyet normaldir ve basit ağrı kesicilerle kontrol altına alınır.",
          "Gecikmiş her kanal tedavisi diş kaybı riskini artırır. İstanbul'da acil kanal tedavisi için gece de kliniğimize başvurabilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "7/24 Acil Diş" },
      { href: "/porselen-dis-kaplama-fiyatlari/", label: "Kaplama Fiyatları" },
    ],
    faq: [
      {
        question: "Kanal tedavisi tek seansta biter mi?",
        answer: "Modern yöntemlerle birçok vakada tek seans yeterlidir; enfeksiyonlu vakalarda 2-3 seans gerekebilir.",
      },
      {
        question: "Kanal tedavisi sonrası ağrı normal mi?",
        answer: "Birkaç gün süren hafif hassasiyet normaldir; ilaçla kontrol altına alınır. Şiddetli ağrıda hekime başvurulmalıdır.",
      },
    ],
  },
  {
    slug: "dis-apsesi-belirtileri-ve-mudahale",
    title: "Diş Apsesi Belirtileri ve Acil Müdahale",
    description:
      "Diş apsesi nedir, belirtileri nelerdir, evde ne yapılmalı ve hangi durumlarda acil diş müdahalesi gerekir?",
    category: "Acil Diş",
    date: "2026-03-11",
    readMinutes: 5,
  image: "/images/servis/cerrahi-card.webp",
    body: [
      {
        h2: "Diş apsesi nedir?",
        paragraphs: [
          "Diş apsesi, dişin içinde veya diş eti bölgesinde biriken irin (enfeksiyon) birikimidir. Genellikle tedavi edilmemiş çürük, kırık diş veya diş eti hastalığı sonucu oluşur.",
          "Apse ciddi bir enfeksiyondur ve yüz, çene ve boyuna yayılabilir. Bu yüzden belirtiler başlar başlamaz müdahale edilmelidir.",
        ],
      },
      {
        h2: "Belirtiler nelerdir?",
        paragraphs: [
          "Şiddetli ve sürekli diş ağrısı, diş etinde şişlik, yüzde asimetri, ateş, kötü tat ve koku, çiğneme güçlüğü apse belirtilerindendir. Apseli dişe dokunulduğunda zonklama hissedilir.",
          "Bu belirtileri fark ederseniz vakit kaybetmeden diş hekimine başvurmalısınız.",
        ],
      },
      {
        h2: "Evde ne yapılabilir, ne zaman acile gidilmeli?",
        paragraphs: [
          "Evde ılık tuzlu su ile gargara ve soğuk kompres geçici rahatlama sağlar. Ancak apse mutlaka profesyonel müdahale gerektirir; antibiyotik ve drenaj hekim tarafından uygulanmalıdır.",
          "Yüzde şişlik yayılıyorsa, ateş varsa veya yutma güçlüğü oluşuyorsa bu acil bir durumdur. 7/24 nöbetçi diş kliniğimiz bu tür acillerde her an hizmet verir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul İstanbul Ağız ve Diş Sağlığı Merkezi" },
      { href: "/dis-implant-fiyatlari/", label: "İmplant Fiyatları" },
    ],
    faq: [
      {
        question: "Diş apsesi kendiliğinden geçer mi?",
        answer: "Hayır. Apse profesyonel tedavi gerektirir; kendiliğinden geçmesi beklenmemelidir.",
      },
      {
        question: "Diş apsesi acil midir?",
        answer: "Evet. Yayılma riski taşıdığı için apse acil müdahale gerektirir.",
      },
    ],
  },
  {
    slug: "cocuklarda-dis-travmasi-acil-mudahale",
    title: "Çocuklarda Diş Travması ve Acil Müdahale",
    description:
      "Çocuklarda diş kırılması, düşmesi ve yerinden çıkması durumlarında ne yapılmalı? Acil müdahale rehberi ve çocuk diş hekimi önerileri.",
    category: "Çocuk Diş",
    date: "2026-03-18",
    readMinutes: 6,
  image: "/images/servis/pedodonti-card.webp",
    body: [
      {
        h2: "Çocuklarda diş travması neden önemlidir?",
        paragraphs: [
          "Çocuklar düşme ve çarpma sonucu diş travmalarıyla sık karşılaşır. Süt dişlerdeki travma, alttaki sürekli diş tomurcuklarına zarar verebilir; bu yüzden ciddiye alınmalıdır.",
          "Sürekli dişlerdeki travmada ise dişin kurtarılması için dakikalar kritik önemdedir.",
        ],
      },
      {
        h2: "Diş kırıldığında veya düştüğünde ne yapmalı?",
        paragraphs: [
          "Diş kırıldıysa kırık parçayı süt veya salin içinde saklayıp hekime götürün. Diş tamamen yerinden çıktıysa dişi kök kısmından tutarak süt, salin veya çocuğun kendi tükürüğünde saklayın; ovalamayın.",
          "Yerinden çıkan sürekli diş, en geç 60 dakika içinde yerine yerleştirilirse kurtulma şansı yüksektir. Bu yüzden acil diş hekimine hızla ulaşmak hayati önem taşır.",
        ],
      },
      {
        h2: "Ne zaman acil çocuk diş hekimine başvurulmalı?",
        paragraphs: [
          "Diş yerinden çıktıysa, diş eti kanaması durmuyorsa, yüzde şişlik oluştuysa veya dişte kırılma varsa hemen acil diş hekimine başvurulmalıdır.",
          "İstanbul'da çocuklar için gece ve hafta sonu dahil 7/24 acil diş hizmeti sunuyoruz. Çocuğunuzun diş sağlığı için bize ulaşın.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 Diş" },
      { href: "/kadikoy-acil-dis-hastanesi/", label: "Kadıköy Nöbetçi Dişçi" },
    ],
    faq: [
      {
        question: "Çocuğumun dişi kırıldı, ne yapmalıyım?",
        answer: "Kırık parçayı sütte saklayıp en kısa sürede çocuk diş hekimine başvurun.",
      },
      {
        question: "Yerinden çıkan diş tekrar takılır mı?",
        answer: "Sürekli diş 60 dakika içinde yerleştirilirse büyük oranda kurtulabilir.",
      },
    ],
  },
  {
    slug: "dis-eti-kanamasi-nedenleri-ve-cozumleri",
    title: "Diş Eti Kanaması Nedenleri ve Çözümleri",
    description:
      "Diş eti kanamasının nedenleri, diş eti iltihabı belirtileri, evde bakım önerileri ve profesyonel tedavi seçenekleri.",
    category: "Ağız Sağlığı",
    date: "2026-04-01",
    readMinutes: 5,
  image: "/images/servis/pembe-estetik-card.webp",
    body: [
      {
        h2: "Diş eti kanaması neden olur?",
        paragraphs: [
          "Diş eti kanamasının en yaygın nedeni plak birikimi ve diş eti iltihabıdır (gingivitis). Yetersiz fırçalama, diş ipi kullanmama ve düzenli diş hekimi kontrolünün ihmal edilmesi riski artırır.",
          "Hamilelik, bazı ilaçlar, vitamin eksiklikleri ve sert fırçalama da diş eti kanamasına katkıda bulunabilir.",
        ],
      },
      {
        h2: "Diş eti kanaması nasıl önlenir?",
        paragraphs: [
          "Günde iki kez doğru teknikle fırçalama, düzenli diş ipi kullanımı ve yılda en az bir kez profesyonel diş taşı temizliği diş eti sağlığının temelidir. Yumuşak kıllı fırça tercih edilmelidir.",
          "Kanama devam ediyorsa altta yatan neden araştırılmalıdır; diş eti çekilmesi ve kemik kaybı gibi ileri sorunlar tedavi edilmelidir.",
        ],
      },
      {
        h2: "Ne zaman diş hekimine görünmeli?",
        paragraphs: [
          "Diş eti kanamanız 1-2 hafta içinde geçmiyorsa, diş etleriniz kızarık ve şişse veya dişlerde sallanma varsa mutlaka diş hekimine başvurmalısınız. Erken müdahale diş kaybını önler.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul Acil Diş" },
      { href: "/protez-takma-dis-fiyatlari/", label: "Protez Diş Fiyatları" },
    ],
    faq: [
      {
        question: "Diş eti kanaması ciddi bir sorun mu?",
        answer: "Genellikle diş eti iltihabının belirtisidir; erken tedavi edilmezse kemik kaybına yol açabilir.",
      },
      {
        question: "Diş eti kanaması nasıl geçer?",
        answer: "Doğru fırçalama, diş ipi ve profesyonel temizlikle büyük oranda düzelir.",
      },
    ],
  },
  {
    slug: "pazar-gunu-acik-dis-klinigi-nasil-bulunur",
    title: "Pazar Günü Açık Diş Kliniği Nasıl Bulunur?",    description:
      "Hafta sonu diş ağrısı için pazar günü açık diş kliniği arama rehberi. İstanbul'da pazar günü nöbetçi dişçi bulma yöntemleri.",
    category: "Acil Diş",
    date: "2026-04-08",
    readMinutes: 5,
  image: "/images/servis/protetik-card.webp",
    body: [
      {
        h2: "Pazar günü diş hekimi bulmak neden zordur?",
        paragraphs: [
          "Çoğu diş kliniği hafta sonu kapalıdır. Pazar günü yaşanan diş ağrısı, kırık diş veya düşen dolgu gibi acillerde hızlı çözüm bulmak zorlaşır.",
          "İstanbul gibi büyük bir şehirde hafta sonu çalışan klinikleri önceden bilmek büyük kolaylık sağlar.",
        ],
      },
      {
        h2: "Pazar günü hangi işlemler yapılır?",
        paragraphs: [
          "Pazar günü açık kliniklerde acil dolgu, kanal tedavisi, diş çekimi, apse drenajı, düşen kaplama/protez yapıştırma ve çocuk diş travması müdahalesi yapılabilir.",
          "Kliniğimiz pazar günleri tam kapasite hizmet verir; randevu beklemeden acil hastaları kabul ederiz.",
        ],
      },
      {
        h2: "İstanbul'da pazar günü nöbetçi dişçi nasıl bulunur?",
        paragraphs: [
          "İnternette arama yaparken 'pazar günü açık dişçi', 'nöbetçi dişçi istanbul' gibi kelimelerle güncel sonuçları kontrol edebilirsiniz. En güvenilir yöntem, 7/24 hizmet verdiğini belirten klinikleri aramaktır.",
          "Kliniğimiz haftanın 7 günü açıktır. Pazar günü diş ağrınız için 0532 438 13 03 numarasını arayabilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/semtler/", label: "İstanbul Nöbetçi Dişçiler" },
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 Diş" },
    ],
    faq: [
      {
        question: "Pazar günü diş çekimi yapılır mı?",
        answer: "Evet. Acil durumlarda pazar günü diş çekimi yapılabilir.",
      },
      {
        question: "Pazar günü klinikler kaçta kapanıyor?",
        answer: "7/24 çalışan kliniğimiz pazar günü de gece yarısına kadar açıktır.",
      },
    ],
  },
  {
    slug: "gulus-tasarimi-emax-lamine-nedir",
    title: "Gülüş Tasarımı Nedir? Emax ve Lamine Diş ile Estetik Gülüş",
    description:
      "Dijital gülüş tasarımı nedir, lamine ve Emax yaprak porselen nasıl uygulanır, kimler için uygundur? Estetik diş rehberi.",
    category: "Estetik Diş",
    date: "2026-04-22",
    readMinutes: 7,
  image: "/images/servis/lamine-card.webp",
    body: [
      {
        h2: "Gülüş tasarımı nedir?",
        paragraphs: [
          "Gülüş tasarımı; dişlerin rengi, şekli, boyutu ve diş eti çizgisi bir bütün olarak değerlendirilerek kişiye özel estetik bir gülüş planlanmasıdır. Dijital planlama sayesinde hasta sonucu önceden görebilir.",
          "Amaç, yüz hatlarıyla uyumlu, doğal ve sağlıklı bir görünüm elde etmektir. Gülüş tasarımı genellikle lamine ve Emax kaplamalarla hayata geçirilir.",
        ],
      },
      {
        h2: "Lamine diş (yaprak porselen) nedir?",
        paragraphs: [
          "Lamine, dişin ön yüzeyine uygulanan çok ince bir porselen tabakadır. Minimal diş kesimi gerektirir ve doğal görünümüyle ön plana çıkar.",
          "Renklenmiş, hafif çapraşık veya aralıklı dişlerin düzeltilmesinde lamine oldukça başarılı sonuç verir.",
        ],
      },
      {
        h2: "Emax nedir, lamine'den farkı ne?",
        paragraphs: [
          "Emax, yüksek estetik değere sahip bir cam seramik malzemedir. Işık geçirgenliği sayesinde doğal dişe en yakın görünümü sağlar.",
          "Hem lamine hem kaplama formunda üretilebilen Emax, özellikle ön diş estetiğinde tercih edilir. Lamine, dişe yapıştırılan ince yaprak; kaplama ise dişi tamamen saran restorasyondur.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/lamine-emax-kaplama-dis-fiyatlari/", label: "Lamine & Emax Fiyatları" },
      { href: "/zirkonyum-kaplama-dis-fiyatlari/", label: "Zirkonyum Fiyatları" },
    ],
    faq: [
      {
        question: "Lamine diş ne kadar dayanır?",
        answer: "Doğru uygulama ve bakımla lamine dişler 10-15 yıl kullanılabilir.",
      },
      {
        question: "Gülüş tasarımı kimlere yapılır?",
        answer: "Renk, şekil ve dizilim sorunu yaşayan herkese uygulanabilir; kişiye özel planlama gerekir.",
      },
    ],
  },
  {
    slug: "protez-dis-mi-implant-mi",
    title: "Protez Diş mi, İmplant mı? Karşılaştırma Rehberi",
    description:
      "Tam ve kısmi protezler ile implant arasındaki farklar, avantajlar, maliyet ve hangi durumda hangi tedavinin uygun olduğu.",
    category: "Tedaviler",
    date: "2026-05-06",
    readMinutes: 7,
  image: "/images/servis/kron-card.webp",
    body: [
      {
        h2: "Protez diş nedir?",
        paragraphs: [
          "Protez diş, eksik dişlerin yerine takılan hareketli veya sabit yapılardır. Akrilik (takma diş), metal destekli ve implant üstü protezler en yaygın çeşitlerdir.",
          "Tam protezler tüm dişlerin eksik olduğu durumlarda, kısmi protezler ise birkaç dişin eksik olduğu durumlarda kullanılır.",
        ],
      },
      {
        h2: "İmplant nedir?",
        paragraphs: [
          "İmplant, çene kemiğine yerleştirilen titanyum vida üzerine yapılan kalıcı diş çözümüdür. Doğal diş kökü gibi çene kemiğine entegre olur ve 25-35 yıl kullanılabilir.",
          "İmplantlar hareketli protezlerin aksine sabittir; çiğneme fonksiyonu ve konfor açısından doğal dişe en yakın sonucu verir.",
        ],
      },
      {
        h2: "Hangi durumda hangisi tercih edilmeli?",
        paragraphs: [
          "Tek veya birkaç diş eksikliğinde implant en başarılı seçenektir. Tüm dişlerini kaybetmiş ve implant yaptıramayan hastalar için tam protezler (takma diş) alternatiftir.",
          "İmplant üstü protezler, hareketli protezlerin tutuculuk sorununu çözen ara bir çözümdür. Karar için diş hekimi muayenesi ve kemik durumu değerlendirmesi şarttır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "İmplant Fiyatları" },
      { href: "/protez-takma-dis-fiyatlari/", label: "Protez Diş Fiyatları" },
    ],
    faq: [
      {
        question: "İmplant mı daha iyi protez mi?",
        answer: "İmplant, sabit ve uzun ömürlü olmasıyla genellikle daha iyi bir çözümdür; ancak her hastaya uygun olmayabilir.",
      },
      {
        question: "Takma diş ile rahat yemek yenir mi?",
        answer: "İmplant üstü protezler daha konforludur; klasik takma dişlerde alışma süreci gerekir.",
      },
    ],
  },
  {
    slug: "bayramda-acik-dis-hekimi-bulma-rehberi",
    title: "Bayramda Açık Diş Hekimi Bulma Rehberi",
    description:
      "Bayram ve resmi tatillerde açık diş kliniği bulma yöntemleri. İstanbul'da bayramda nöbetçi dişçi hizmeti ve acil diş tedavisi.",
    category: "Acil Diş",
    date: "2026-05-13",
    readMinutes: 5,
  image: "/images/servis/seffaf-card.webp",
    body: [
      {
        h2: "Bayramda diş kliniği bulmak neden zor?",
        paragraphs: [
          "Resmi tatillerde diş kliniklerinin büyük çoğunluğu kapalıdır. Ancak diş ağrısı ve acil diş problemleri tatil demez; bu yüzden bayramda çalışan klinikleri bilmek önemlidir.",
          "Özellikle bayram ziyaretleri sırasında şehir dışından gelen misafirler için gece ve tatil günü açık klinikler kritik önem taşır.",
        ],
      },
      {
        h2: "Bayramda hangi işlemler yapılır?",
        paragraphs: [
          "Bayramda açık kliniklerde acil dolgu, kanal tedavisi, diş çekimi, apse müdahalesi ve protez onarımı yapılabilir. Rutin estetik işlemler için genellikle mesai günleri tercih edilir.",
          "Kliniğimiz bayram günlerinde de acil diş hizmeti sunar; 7/24 nöbetçi diş hekimimiz hazırdır.",
        ],
      },
      {
        h2: "Bayramda nöbetçi dişçi nasıl bulunur?",
        paragraphs: [
          "Bayram öncesi yakınınızdaki 7/24 çalışan kliniklerin telefonunu not etmek en pratik yöntemdir. Acil durumda internetten 'bayramda açık dişçi' araması da yapılabilir.",
          "İstanbul'un herhangi bir semtinde bayramda diş ağrısı yaşarsanız 0532 438 13 03 numaralı hattımızı arayabilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 Acil Diş" },
      { href: "/iletisim/", label: "İletişim" },
    ],
    faq: [
      {
        question: "Bayramda diş kliniği açık mı?",
        answer: "Çoğu klinik kapalıdır; ancak kliniğimiz bayram dahil 7/24 açıktır.",
      },
      {
        question: "Bayramda acil diş ağrısı için ne yapmalıyım?",
        answer: "7/24 açık kliniğimizi arayarak aynı gün müdahale alabilirsiniz.",
      },
    ],
  },
  {
    slug: "dis-implanti-kimler-icin-uygundur",
    title: "Diş İmplantı Kimler İçin Uygundur?",
    description:
      "Diş implantı kimlere uygulanır, kimlere uygulanmaz? İmplant için uygunluk kriterleri, kemik yapısı ve genel sağlık değerlendirmesi.",
    category: "İmplant",
    date: "2026-04-13",
    readMinutes: 6,
  image: "/images/servis/sinus-card.webp",
    body: [
      {
        h2: "İmplant için temel uygunluk kriterleri",
        paragraphs: [
          "Diş implantı, eksik dişlerin tamamlanmasında en sık tercih edilen tedavi yöntemlerinden biridir. İmplant uygulaması için hastanın genel sağlığının iyi olması ve çene kemiğinde yeterli hacim bulunması gerekir.",
          "Diş eti hastalığı kontrol altına alınmış, ağız hijyeni düzenli olan bireyler implant için ideal adaylardır. Ayrıca çene gelişimini tamamlamış olmak önemlidir.",
        ],
      },
      {
        h2: "Kimlere implant önerilmez?",
        paragraphs: [
          "Kontrol altına alınmamış diyabet, ciddi kalp rahatsızlıkları, kanama bozuklukları ve yoğun sigara kullanımı implant başarısını olumsuz etkileyebilir. Bu durumlarda hekim değerlendirmesi ile alternatif tedaviler planlanır.",
          "Kemik erimesi yaşayan ileri yaş hastaları için öncesinde kemik grefti gerekebilir. Uygunluk ancak muayene ve röntgen sonrası netleşir.",
        ],
      },
      {
        h2: "İmplant öncesi neler yapılmalı?",
        paragraphs: [
          "İmplant öncesi detaylı ağız muayenesi, panoramik röntgen ve gerekiyorsa 3D tomografi çekilir. Diş eti sağlığı değerlendirilir ve gerekli ön tedaviler planlanır.",
          "Kliniğimizde implant uygunluğunuz için ücretsiz muayene yapılır; size özel tedavi planı ve fiyat bilgisi sunulur.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "İmplant Diş Fiyatları" },
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 Acil Diş" },
    ],
    faq: [
      {
        question: "Herkese implant yapılabilir mi?",
        answer: "Hayır. Yeterli kemik hacmi ve genel sağlık uygunluğu gerekir; muayene sonrası netleşir.",
      },
      {
        question: "İmplant öncesi röntgen şart mı?",
        answer: "Evet. Panoramik röntgen ve gerektiğinde 3D tomografi ile planlama yapılır.",
      },
    ],
  },
  {
    slug: "dis-beyazlatma-islemi-kalici-midir",
    title: "Diş Beyazlatma İşlemi Kalıcı mıdır?",
    description:
      "Diş beyazlatma ne kadar kalıcıdır? Beyazlatma sonrası nelere dikkat edilmeli, sonuçlar nasıl korunur? Detaylı rehber.",
    category: "Estetik Diş",
    date: "2026-04-13",
    readMinutes: 5,
  image: "/images/servis/beyazlatma-card.webp",
    body: [
      {
        h2: "Diş beyazlatma kalıcı mıdır?",
        paragraphs: [
          "Diş beyazlatma işlemi kalıcı değildir ancak doğru bakımla uzun süre etkisini korur. Beyazlatma sonrası dişlerin rengi, yeme-içme alışkanlıklarına bağlı olarak zamanla koyulaşabilir.",
          "Ofis tipi beyazlatma genellikle 6 ay ile 2 yıl arasında etkisini sürdürür. Bu süre kişinin beslenme alışkanlıklarına ve ağız bakımına göre değişir.",
        ],
      },
      {
        h2: "Beyazlatma sonrası nelere dikkat edilmeli?",
        paragraphs: [
          "Beyazlatma sonrası ilk 48 saat boyunca kahve, çay, kırmızı şarap, sigara ve renklendirici gıdalardan kaçınılmalıdır. Düzenli fırçalama ve diş ipi kullanımı sonucu korur.",
          "Yılda bir kez yapılan bakım beyazlatmaları ile gülüşünüz uzun süre parlak kalabilir.",
        ],
      },
      {
        h2: "En etkili beyazlatma yöntemi hangisi?",
        paragraphs: [
          "Ofis tipi lazer beyazlatma, tek seansta en belirgin sonucu verir. Ev tipi şeffaf plaklı beyazlatma ise kademeli ve daha ekonomik bir alternatiftir.",
          "Kombinasyon tedavisi (ofis + ev tipi) en kalıcı sonucu sağlar. Kliniğimizde size en uygun yöntem hekim tarafından belirlenir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-beyazlatma/", label: "Diş Beyazlatma" },
      { href: "/gulus-tasarimi/", label: "Gülüş Tasarımı" },
    ],
    faq: [
      {
        question: "Diş beyazlatma dişlere zarar verir mi?",
        answer: "Uzman hekim kontrolünde yapıldığında diş minesine zarar vermez.",
      },
      {
        question: "Beyazlatma ne kadar sürede belli olur?",
        answer: "Ofis tipi beyazlatmada sonuç tek seansta görülür.",
      },
    ],
  },
  {
    slug: "implant-maliyeti-ne-kadar",
    title: "Diş İmplantlarının Maliyeti Ne Kadardır?",
    description:
      "Diş implantı fiyatlarını belirleyen faktörler, marka karşılaştırması ve 2026 yılı güncel implant maliyetleri.",
    category: "Fiyatlar",
    date: "2026-04-13",
    readMinutes: 6,
  image: "/images/servis/emax-card.webp",
    body: [
      {
        h2: "İmplant maliyetini ne belirler?",
        paragraphs: [
          "Diş implantlarının maliyeti; kullanılan marka, implant sayısı, çene kemiği durumu, ek cerrahi işlemler ve üst yapı malzemesine göre değişir. Tek dişten tam çene implantlara kadar fiyat farklıdır.",
          "Kemik grefti, sinus lifting gibi ön işlemler maliyeti artırabilir ancak başarılı sonuç için gereklidir.",
        ],
      },
      {
        h2: "Marka bazlı fiyat aralıkları",
        paragraphs: [
          "Alman, Kore, İsviçre menşeli ve Straumann implantlar en yaygın seçeneklerdir. Kore malı implantlar ekonomik, İsviçre ve Straumann üst segment kalite sunar.",
          "Net fiyat ancak muayene sonrası belirlenir. Kliniğimizde ücretsiz muayene ile size özel fiyat teklifi alabilirsiniz.",
        ],
      },
      {
        h2: "Ucuz implant riskli mi?",
        paragraphs: [
          "İmplant seçiminde yalnızca fiyata odaklanmak hata olabilir. Sertifikalı markalar ve deneyimli hekim tercih edilmelidir. Kaliteli implant doğru bakımla 25-35 yıl kullanılabilir.",
          "Bu yüzden fiyat, malzeme kalitesi ve hekim deneyimi birlikte değerlendirilmelidir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "Güncel İmplant Fiyatları" },
      { href: "/online-randevu/", label: "Online Randevu" },
    ],
    faq: [
      {
        question: "İmplant maliyeti 2026'da ne kadar?",
        answer: "Marka ve işleme göre 3.000-12.000 TL arasında değişir; muayene ile netleşir.",
      },
      {
        question: "İmplant taksitle yapılabilir mi?",
        answer: "Evet, peşin ve taksit seçenekleri mevcuttur.",
      },
    ],
  },
  {
    slug: "dis-minesi-nedir",
    title: "Diş Minesi Nedir? Diş Minesi Aşınması Nasıl Önlenir?",
    description:
      "Vücudumuzun en sert tabakası olan diş minesi hakkında bilmeniz gerekenler, aşınma nedenleri ve doğal koruma yöntemleri.",
    category: "Ağız Sağlığı",
    date: "2026-06-20",
    readMinutes: 5,
    image: "/images/servis/beyazlatma-card.webp",
    body: [
      {
        h2: "Diş minesi nedir?",
        paragraphs: [
          "Diş minesi, dişin dış yüzeyini kaplayan ve vücudumuzun en sert dokusu olan koruyucu tabakadır. Mineral bakımından zengin bu yapı, dişleri çürüklere ve aşınmalara karşı korur.",
          "Mine, kendini yenileyemeyen tek dokudur. Bu yüzden mine kaybı geri döndürülemez ve korunması büyük önem taşır.",
        ],
      },
      {
        h2: "Diş minesi neden aşınır?",
        paragraphs: [
          "Asitli içecekler, şekerli gıdalar, sert diş fırçalama ve diş sıkma mine aşınmasına yol açan başlıca nedenlerdir. Aşırı asit, minenin mineral yapısını çözerek zayıflatır.",
          "Mine aşınması ilerlediğinde diş hassasiyeti, sararma ve çürük riski artar. Erken fark edildiğinde önlenebilir.",
        ],
      },
      {
        h2: "Diş minesini koruma yöntemleri",
        paragraphs: [
          "Yumuşak kıllı diş fırçası kullanmak, asitli içecekleri azaltmak ve tükettikten sonra ağzı su ile çalkalamak minenizi korur. Florür içeren diş macunları minenin güçlenmesine yardımcı olur.",
          "Düzenli diş hekimi kontrolleri ile mine sağlığınız takip edilir ve erken aşınma durumunda koruyucu tedaviler uygulanır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-beyazlatma/", label: "Diş Beyazlatma" },
      { href: "/dis-dolgusu/", label: "Diş Dolgusu" },
      { href: "/istanbul-acil-dis-hastanesi/", label: "İstanbul 7/24 Diş" },
    ],
    faq: [
      { question: "Diş minesi kendini yeniler mi?", answer: "Hayır. Mine kendini yenileyemez; bu yüzden korunması önemlidir." },
      { question: "Mine aşınması nasıl anlaşılır?", answer: "Soğuğa/sıcağa hassasiyet ve sararma başlıca belirtilerdir." },
    ],
  },
  {
    slug: "dis-ipi-kullanimi",
    title: "Diş İpi Kullanımı: Doğru Teknikler ve Faydaları",
    description:
      "Diş ipi nasıl kullanılır? Doğru teknik, kullanım sıklığı, diş eti sağlığına katkıları ve sık yapılan hatalar.",
    category: "Ağız Sağlığı",
    date: "2026-06-18",
    readMinutes: 5,
    image: "/images/servis/periodont-card.webp",
    body: [
      {
        h2: "Diş ipi neden önemlidir?",
        paragraphs: [
          "Diş fırçası, dişlerin sadece yüzeylerini temizler. Dişler arasındaki dar boşluklarda biriken plaklar diş ipi ile temizlenir; aksi halde çürük ve diş eti hastalıklarına yol açar.",
          "Günde en az bir kez diş ipi kullanmak, diş eti sağlığını korumanın en etkili yollarından biridir.",
        ],
      },
      {
        h2: "Doğru diş ipi tekniği",
        paragraphs: [
          "Yaklaşık 40 cm diş ipi alın ve parmaklarınıza sarın. İpi dişler arasında nazikçe kaydırın, diş etine ulaştığında C şekli oluşturarak dişin yüzeyine sürtün. Her diş arası için temiz bir bölüm kullanın.",
          "Diş etine sert bastırmamak önemlidir; nazik hareketler kanamayı ve hassasiyeti önler.",
        ],
      },
      {
        h2: "Sık yapılan hatalar",
        paragraphs: [
          "Diş ipini sert ve hızlı kullanmak, aynı bölümü tekrar kullanmak ve yeterli uzunlukta ip almamak en sık yapılan hatalardır. İp kullanımında diş eti kanaması olursa, düzenli kullanımla geçebilir.",
          "Düzenli kullanımda kanama devam ediyorsa diş eti hastalığı belirtisi olabilir; diş hekiminize danışın.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/periodontoloji/", label: "Diş Eti Tedavisi" },
      { href: "/dis-eti-kanamasi-nedenleri-ve-cozumleri", label: "Diş Eti Kanaması" },
    ],
    faq: [
      { question: "Diş ipi günde kaç kez kullanılmalı?", answer: "Günde en az bir kez, tercihen akşam yatmadan önce." },
      { question: "Diş ipi diş etine zarar verir mi?", answer: "Doğru teknikle kullanıldığında zarar vermez; aksine diş etini korur." },
    ],
  },
  {
    slug: "dis-sizlamasi-nasil-gecer",
    title: "Diş Sızlaması Nasıl Geçer? Nedenleri ve Çözümleri",
    description:
      "Sıcak ve soğuk gıdalarda yaşanan diş hassasiyeti (sızlama) nedenleri, evde uygulanabilir çözümler ve klinik tedavi seçenekleri.",
    category: "Ağız Sağlığı",
    date: "2026-06-15",
    readMinutes: 6,
    image: "/images/servis/kanal-card.webp",
    body: [
      {
        h2: "Diş sızlaması neden olur?",
        paragraphs: [
          "Diş sızlaması (hassasiyet); mine aşınması, diş eti çekilmesi, çürük veya diş gıcırdatma nedeniyle dişin iç tabakasının açığa çıkmasıyla oluşur. Sıcak, soğuk ve tatlı gıdalar bu hassasiyeti tetikler.",
          "Diş sızlamasının altında yatan neden doğru teşhis edilmezse sorun ilerleyebilir.",
        ],
      },
      {
        h2: "Evde uygulanabilir çözümler",
        paragraphs: [
          "Hassasiyete özel diş macunları kullanmak, yumuşak fırça ile nazikçe fırçalamak ve asitli içeceklerden kaçınmak sızlamayı azaltabilir. Tuzlu su ile gargara da geçici rahatlama sağlar.",
          "Bu yöntemler belirtiyi hafifletir ancak altta yatan nedeni ortadan kaldırmaz; diş hekimi muayenesi şarttır.",
        ],
      },
      {
        h2: "Klinik tedavi seçenekleri",
        paragraphs: [
          "Flor uygulaması, hassasiyet giderici ajanlar ve gerektiğinde dolgu ile dişin korunması başlıca tedavilerdir. Diş eti çekilmesi varsa özel tedavi uygulanır.",
          "Sızlamanın nedeni çürükse dolgu; sinir iltihabıysa kanal tedavisi gerekebilir. Erken müdahale en iyi sonucu verir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-dolgusu/", label: "Diş Dolgusu" },
      { href: "/kanal-tedavisi/", label: "Kanal Tedavisi" },
    ],
    faq: [
      { question: "Diş sızlaması geçer mi?", answer: "Nedene bağlıdır; doğru tedaviyle büyük ölçüde giderilebilir." },
      { question: "Diş sızlamasına ne iyi gelir?", answer: "Hassasiyet diş macunu ve flor uygulaması en etkili çözümlerdendir." },
    ],
  },
  {
    slug: "dis-apsesi-agrisina-ne-iyi-gelir",
    title: "Diş Apsesi Ağrısına Ne İyi Gelir?",
    description:
      "Diş apsesi belirtileri, zonklayan ağrıyı hafifletmek için evde uygulanabilecek geçici yöntemler ve kalıcı klinik tedavi süreçleri.",
    category: "Acil Diş",
    date: "2026-06-12",
    readMinutes: 6,
    image: "/images/servis/cerrahi-card.webp",
    body: [
      {
        h2: "Diş apsesi nedir ve belirtileri nelerdir?",
        paragraphs: [
          "Diş apsesi, dişin içinde veya diş eti bölgesinde biriken enfeksiyondur. Şiddetli ve sürekli ağrı, diş etinde şişlik, yüzde asimetri, ateş ve kötü tat apse belirtilerindendir.",
          "Apse tedavi edilmezse enfeksiyon çevre dokulara yayılabilir; bu yüzden ciddiye alınmalıdır.",
        ],
      },
      {
        h2: "Evde geçici rahatlama yöntemleri",
        paragraphs: [
          "Ilık tuzlu su ile gargara yapmak, yüzün şiş olan bölgesine soğuk kompres uygulamak ve ağrı kesici kullanmak geçici rahatlama sağlar. Ancak bunlar apseyi tedavi etmez.",
          "Apse mutlaka profesyonel müdahale gerektirir; antibiyotik ve drenaj hekim tarafından uygulanmalıdır.",
        ],
      },
      {
        h2: "Acil müdahale ne zaman gerekir?",
        paragraphs: [
          "Yüzde şişlik yayılıyorsa, ateş varsa veya yutma güçlüğü oluşuyorsa bu acil bir durumdur. 7/24 nöbetçi diş kliniğimiz bu tür acillerde her an hizmet verir.",
          "Erken müdahale apsenin yayılmasını önler ve dişin kurtarılma şansını artırır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/acil-dis-tedavisi/", label: "Acil Diş Tedavisi" },
      { href: "/kanal-tedavisi/", label: "Kanal Tedavisi" },
      { href: "/istanbul-acil-dis-hastanesi/", label: "7/24 İstanbul Diş" },
    ],
    faq: [
      { question: "Diş apsesi evde geçer mi?", answer: "Hayır, apse profesyonel tedavi gerektirir." },
      { question: "Diş apsesi acil midir?", answer: "Yayılma riski taşıdığı için evet, acil müdahale gerekir." },
    ],
  },
  {
    slug: "disler-kac-yasindan-sonra-cikmaz",
    title: "Dişler Kaç Yaşından Sonra Çıkmaz?",
    description:
      "Yetişkinlikte yeni diş oluşur mu? Süt dişlerinden yirmilik akıl dişlerine kadar diş gelişim süreci ve yaş sınırları.",
    category: "Ağız Sağlığı",
    date: "2026-06-10",
    readMinutes: 5,
    image: "/images/servis/pedodonti-card.webp",
    body: [
      {
        h2: "Diş gelişimi hangi yaşlarda tamamlanır?",
        paragraphs: [
          "Süt dişleri 6-12 yaş arasında dökülerek kalıcı dişlere yer açar. Kalıcı dişler genellikle 6-13 yaş arasında çıkar; 20'lik (yirmilik) dişler ise 17-25 yaş arasında sürer.",
          "20'lik dişlerin tamamı çıktığında diş gelişimi tamamlanmış olur. Bazı kişilerde 20'lik dişler gömülü kalabilir.",
        ],
      },
      {
        h2: "Yetişkinlikte yeni diş oluşur mu?",
        paragraphs: [
          "Hayır. İnsanlarda iki nesil diş vardır: süt dişleri ve kalıcı dişler. Kalıcı dişlerin ardından doğal olarak yeni diş çıkmaz; kaybedilen dişlerin yerine implant veya protez gerekir.",
          "Diş kaybı sonrası boşluk bırakılırsa komşu dişler kayar ve çene kemiği erir. Bu yüzden eksik dişlerin en kısa sürede tamamlanması önerilir.",
        ],
      },
      {
        h2: "20'lik dişler ne zaman çekilmeli?",
        paragraphs: [
          "20'lik dişler ağrı, iltihap yapıyorsa veya çevre dişlere zarar veriyorsa çekim önerilir. Genç yaşta yapılan çekimlerde iyileşme daha hızlıdır.",
          "Düzenli kontroller ile 20'lik dişlerin durumu takip edilir ve gerektiğinde müdahale edilir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/20lik-dis-cekimi/", label: "20'lik Diş Çekimi" },
      { href: "/cocuk-dis/", label: "Çocuk Diş Hekimliği" },
    ],
    faq: [
      { question: "Son diş kaç yaşında çıkar?", answer: "20'lik dişler genellikle 17-25 yaş arasında çıkar." },
      { question: "Yetişkinde yeni diş çıkar mı?", answer: "Hayır, kalıcı dişlerin ardından doğal diş çıkmaz." },
    ],
  },
  {
    slug: "dis-teli-takilma-yasi",
    title: "Diş Teli Takılma Yaşı: En Uygun Zaman Ne Zaman?",
    description:
      "Ortodontik tedavilerde yaş sınırları; çocuklar, ergenler ve yetişkinler için en uygun diş teli takılma yaşı kriterleri.",
    category: "Tedaviler",
    date: "2026-06-08",
    readMinutes: 5,
    image: "/images/servis/ortodonti-card.webp",
    body: [
      {
        h2: "Çocuklarda ortodonti ne zaman başlamalı?",
        paragraphs: [
          "Ortodonti uzmanları, ilk değerlendirmenin 7 yaş civarında yapılmasını önerir. Bu yaşta çene gelişimi takip edilerek ileride oluşabilecek sorunlar önlenebilir.",
          "Erken müdahale, çene kemiği büyümesini yönlendirerek daha kısa ve etkili bir tedavi sağlar.",
        ],
      },
      {
        h2: "Ergenler için ideal yaş",
        paragraphs: [
          "12-14 yaş arası, diş tellerinin en sık uygulandığı dönemdir. Kalıcı dişlerin çoğu çıkmıştır ve çene büyümesi hâlâ devam ettiği için dişler kolayca hizalanabilir.",
          "Bu dönemde yapılan tedaviler genellikle en hızlı ve başarılı sonucu verir.",
        ],
      },
      {
        h2: "Yetişkinlere diş teli takılır mı?",
        paragraphs: [
          "Evet. Çene gelişimi tamamlanmış olsa bile dişler her yaşta düzeltilebilir. Görünmeyen şeffaf plaklar ve estetik seramik braketler yetişkinler için idealdir.",
          "Yetişkin ortodontisi genellikle daha uzun sürebilir ancak sonuçlar aynı derecede başarılıdır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/ortodonti/", label: "Ortodonti" },
      { href: "/dis-teli-tedavisi/", label: "Diş Teli Tedavisi" },
      { href: "/seffaf-plak/", label: "Şeffaf Plak" },
    ],
    faq: [
      { question: "Diş teli için en uygun yaş nedir?", answer: "12-14 yaş en ideal dönemdir; ancak her yaşta uygulanabilir." },
      { question: "Yetişkinlerde diş teli ne kadar sürer?", answer: "Genellikle 18-30 ay arasında, duruma göre değişir." },
    ],
  },
  {
    slug: "implant-duser-mi",
    title: "İmplant Düşer mi? İmplant Başarısını Etkileyen Faktörler",
    description:
      "Diş implantı düşer mi? İmplant başarısını etkileyen faktörler, bakım kuralları ve implant ömrünü uzatan yöntemler.",
    category: "İmplant",
    date: "2026-06-05",
    readMinutes: 6,
    image: "/images/servis/implant-card.webp",
    body: [
      {
        h2: "İmplant düşer mi?",
        paragraphs: [
          "İmplant düşebilir, ancak bu nadir bir durumdur ve genellikle önlenebilir. İmplantın çene kemiğine yeterince kaynaşmaması veya aşırı yüklenme başarısızlığa yol açabilir.",
          "Doğru planlama, kaliteli malzeme ve deneyimli hekim ile implant başarı oranı %95'in üzerindedir.",
        ],
      },
      {
        h2: "İmplant başarısını etkileyen faktörler",
        paragraphs: [
          "Sigara kullanımı, kontrol altında olmayan diyabet, yetersiz ağız hijyeni ve yetersiz kemik hacmi implant başarısını olumsuz etkiler. Kemik yetersizliğinde öncesinde kemik grefti uygulanır.",
          "Ayrıca implant sonrası aşırı sert gıdalar ve diş sıkma implant üzerindeki yükü artırabilir.",
        ],
      },
      {
        h2: "İmplant ömrü nasıl uzatılır?",
        paragraphs: [
          "Düzenli fırçalama, diş ipi kullanımı, yılda en az bir kez diş hekimi kontrolü ve koruyucu bakım implant ömrünü uzatır. Doğru bakımla implantlar 25-35 yıl kullanılabilir.",
          "Sigara bırakma, implant başarısını ve iyileşme sürecini önemli ölçüde olumlu etkiler.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/dis-implant-fiyatlari/", label: "İmplant Fiyatları" },
      { href: "/all-on-four-implant/", label: "All On Four" },
    ],
    faq: [
      { question: "İmplant ne kadar dayanır?", answer: "Doğru bakımla 25-35 yıl kullanılabilir." },
      { question: "İmplantın düşmemesi için ne yapmalı?", answer: "Düzenli ağız bakımı ve kontroller şarttır." },
    ],
  },
  {
    slug: "istanbul-nobetci-disci",
    title: "İstanbul Nöbetçi Dişçi: Gece ve Hafta Sonu Diş Hekimi",
    description:
      "İstanbul'da gece ve hafta sonu açık nöbetçi dişçi arıyorsanız doğru yerdesiniz. 7/24 acil diş hizmeti, gece açık klinikler ve hızlı randevu.",
    category: "Acil Diş",
    date: "2026-06-03",
    readMinutes: 5,
    image: "/images/servis/cekim-card.webp",
    body: [
      {
        h2: "İstanbul'da gece diş hekimi bulmak",
        paragraphs: [
          "İstanbul'un birçok ilçesinde diş klinikleri mesai saatleri dışında kapalıdır. Gece ve hafta sonu ihtiyaçlar için 7/24 çalışan nöbetçi diş klinikleri en güvenilir seçenektir.",
          "Diş ağrısı, kırılan diş, düşen dolgu ve apse gibi acillerde gece saatlerinde bile hızlı müdahale gerekir.",
        ],
      },
      {
        h2: "Nöbetçi dişçide hangi işlemler yapılır?",
        paragraphs: [
          "Acil dolgu, kanal tedavisi, diş çekimi, apse drenajı, düşen kaplama/protez yapıştırma ve çocuk diş travması müdahalesi gece ve hafta sonu yapılabilir.",
          "Kliniğimiz 7/24 hizmet verir; randevu beklemeden acil hastaları kabul ederiz.",
        ],
      },
      {
        h2: "Hızlı ulaşım ve randevu",
        paragraphs: [
          "İstanbul'un Avrupa yakasında merkezi konumlarımızdan kolayca ulaşabilirsiniz. Telefon ile aradığınızda size en yakın nöbetçi diş hekimine yönlendirme yapılır.",
          "Acil durumunuzda bekletilmeden muayene edilir ve aynı gece müdahale edilir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/semtler/", label: "Tüm Nöbetçi Dişçiler" },
      { href: "/acil-dis-tedavisi/", label: "Acil Diş Tedavisi" },
      { href: "/iletisim/", label: "İletişim" },
    ],
    faq: [
      { question: "İstanbul'da gece açık dişçi var mı?", answer: "Evet, kliniğimiz 7/24 açıktır." },
      { question: "Nöbetçi dişçi pazar günü çalışır mı?", answer: "Evet, pazar günleri de acil diş hizmeti veriyoruz." },
    ],
  },
  {
    slug: "istanbul-dis-klinigi",
    title: "İstanbul Diş Kliniği: Modern ve Güvenilir Diş Sağlığı",
    description:
      "İstanbul'da diş kliniği arayanlara modern, düzenli ve hasta odaklı bir deneyim sunuyoruz. Tüm diş tedavilerinde 7/24 hizmet.",
    category: "Ağız Sağlığı",
    date: "2026-06-01",
    readMinutes: 5,
    image: "/images/servis/emax-card.webp",
    body: [
      {
        h2: "Modern diş kliniği deneyimi",
        paragraphs: [
          "Kliniğimizde son teknoloji cihazlar, dijital röntgen ve modern tedavi yöntemleri kullanılır. Hasta konforu ve güvenliği her şeyin önündedir.",
          "Tüm branşlarda uzman hekim kadromuz ile geniş bir tedavi yelpazesi sunuyoruz.",
        ],
      },
      {
        h2: "Hangi tedaviler yapılır?",
        paragraphs: [
          "Acil diş müdahalesinden implant, kaplama, kanal tedavisi, ortodonti, çocuk diş ve estetik gülüş tasarımına kadar tüm tedaviler tek çatı altında yapılır.",
          "Klinik içi laboratuvarımız sayesinde kaplama ve protezler hızlı ve kaliteli üretilir.",
        ],
      },
      {
        h2: "Hasta odaklı yaklaşım",
        paragraphs: [
          "İlk muayenede ücretsiz değerlendirme yapılır, tedavi planı ve net fiyat bilgisi sunulur. Tedavi süresince her adımda yanınızdayız.",
          "Kliniğimiz gece, hafta sonu ve bayramlarda dahil 7/24 açıktır; acil durumlarınızda randevusuz kabul edilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/hizmetler/", label: "Tüm Tedaviler" },
      { href: "/online-randevu/", label: "Online Randevu" },
    ],
    faq: [
      { question: "İlk muayene ücretli mi?", answer: "Hayır, ilk muayenemiz ücretsizdir." },
      { question: "Kliniğiniz 7/24 açık mı?", answer: "Evet, gece ve hafta sonu dahil kesintisiz hizmet veriyoruz." },
    ],
  },
  {
    slug: "cocuklarda-dis-curugu",
    title: "Çocuklarda Diş Çürüğü: Nedenleri, Belirtileri ve Korunma",
    description:
      "Çocuklarda diş çürüğünün nedenleri, erken belirtileri, korunma yolları ve tedavi seçenekleri. Sağlıklı diş gelişimi için rehber.",
    category: "Çocuk Diş",
    date: "2026-05-28",
    readMinutes: 6,
    image: "/images/servis/pedodonti-card.webp",
    body: [
      {
        h2: "Çocuklarda diş çürüğü neden olur?",
        paragraphs: [
          "Çocuklarda diş çürüğünün başlıca nedeni şekerli gıdaların sık tüketimi ve yetersiz ağız bakımıdır. Özellikle yatmadan önce şekerli içecekler ve gıdalar çürük riskini artırır.",
          "Süt dişlerinin minesi kalıcı dişlere göre daha incedir, bu yüzden çürük daha hızlı ilerler.",
        ],
      },
      {
        h2: "Erken belirtiler nelerdir?",
        paragraphs: [
          "Dişlerde beyaz lekeler, yemek yerken ağrı, sıcağa/soğuğa hassasiyet ve kötü ağız kokusu çürüğün erken belirtileridir. Erken fark edilen çürükler basit dolgu ile tedavi edilebilir.",
          "Düzenli 6 aylık pedodonti kontrolleri çürüğün erken yakalanmasını sağlar.",
        ],
      },
      {
        h2: "Korunma ve tedavi",
        paragraphs: [
          "Günde iki kez fırçalama, diş ipi kullanımı, şekerli gıdaların azaltılması ve flor uygulaması çürüğü önler. Fissür örtücü ile azı dişlerinin çürüğe karşı korunması sağlanır.",
          "Çürük oluşmuşsa dolgu, ilerlemişse süt diş kanal tedavisi veya çekim uygulanabilir.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/cocuk-dis/", label: "Çocuk Diş Doktoru" },
      { href: "/sut-dis-cekimi/", label: "Süt Diş Çekimi" },
      { href: "/dis-dolgusu/", label: "Diş Dolgusu" },
    ],
    faq: [
      { question: "Çocuk ne zaman diş hekimine gitmeli?", answer: "İlk diş çıktığında veya 1 yaşında." },
      { question: "Süt dişi çürüğü tedavi edilmeli mi?", answer: "Evet, alttaki kalıcı dişi korumak için tedavi şarttır." },
    ],
  },
  {
    slug: "cristiano-ronaldo-dis-estetigi",
    title: "Cristiano Ronaldo Diş Estetiği",
    description: "Ronaldo'nun diş estetiği dönüşümü, gülüş tasarımı, gizli tel, lamine ve porselen kaplama uygulamaları hakkında detaylı rehber.",
    category: "Estetik Diş",
    date: "2026-05-10",
    readMinutes: 7,
  image: "/images/blog/cristiano-ronaldo-dis-estetigi.jpg",
    body: [
      {
            "h2": "Kariyerin İlk Yıllarından Bugüne: İmajdaki Büyük Değişim",
            "paragraphs": [
                  "İngiltere'ye transfer olduğu ilk dönemlerdeki fotoğraflarına dikkatle bakarsanız, yıldız futbolcunun diş diziliminde belirgin boşluklar, asimetrik bir yapı ve renk farklılıkları olduğunu hemen görebilirsiniz. O yıllarda üst çenesindeki dişlerden birinin eksikliği ve bazı dişlerin geride konumlanması, gülüşünün gölgeli ve orantısız görünmesine yol açıyordu. Sadece spor alanındaki yeteneğiyle değil, marka değeriyle de küresel bir figür haline gelmeye başladıkça, dış görünüşündeki bu detaylar revize edilmesi gereken bir öncelik halini aldı.",
                  "Gülüş tasarımı sadece estetik bir kaygıdan ibaret değildir; aynı zamanda kişinin dış dünyaya verdiği enerjiyi, güveni ve karizmayı doğrudan şekillendirir. Dünyanın dört bir yanındaki milyonlarca insanın takip ettiği bir figürün, kameralara her gülümsediğinde kusursuz görünmek istemesi son derece anlaşılır bir durum. Bu dönüşüm süreci tek bir seansta biten basit bir beyazlatma işleminden ziyade, dişlerin fonksiyonunu ve estetiğini baştan aşağı yeniden yapılandıran kapsamlı bir tedavi protokolüyle gerçekleşti."
            ]
      },
      {
            "h2": "Kusursuz Gülüşü Yaratan Temel Uygulamalar",
            "paragraphs": [
                  "Estetik diş hekimliği, kişiye özel bir sanat dalı gibi çalışır. Standart tek tip bir diş kalıbı yerine, kişinin yüz orantısı, dudak kalınlığı, ten rengi ve hatta gülümseme hattı dikkate alınarak özel bir mimari oluşturulur. Ekranlarda gördüğümüz o etkileyici değişimin arkasında, birbirini tamamlayan birkaç farklı diş hekimliği disiplininin kusursuz uyumu yatıyor."
            ]
      },
      {
            "h2": "Gizli Teller ve Ortodontik Düzenlemeler",
            "paragraphs": [
                  "Tedavinin en temel ve en önemli aşaması, temeldeki yapısal bozuklukları gidermekten geçiyordu. Dişlerin üzerine doğrudan bir kaplama yapmak yerine, öncelikle diş köklerinin ve dizilimin doğru açılara getirilmesi gerekiyordu. Bu noktada dışarıdan görünmeyen ve dişlerin arka yüzeyine yerleştirilen lingual ortodonti (gizli tel) teknikleri devreye girdi. Klasik metal tellerin yaratacağı estetik dezavantajları ortadan kaldıran bu yöntem sayesinde, kişi günlük hayatına ve profesyonel kariyerine hiçbir ödün vermeden devam edebilirken, arka planda dişler milimetrik olarak ideal konumlarına taşınır. Düzenli bir dizilim elde etmek, sonrasında yapılacak estetik uygulamaların kalıcılığını ve başarısını doğrudan etkiler."
            ]
      },
      {
            "h2": "Pembe Estetik ve Diş Eti Şekillendirme",
            "paragraphs": [
                  "Gülümseme esnasında sadece dişlerin şekli değil, diş etlerinin görünme miktarı ve seviyesi de estetiği belirler. Gülüş tasarımı sürecinde genellikle \"gummy smile\" olarak bilinen, diş etlerinin gereğinden fazla görünmesi sorunuyla sıkça karşılaşılır. Yıldız ismin gençlik yıllarındaki gülüşünde de diş etleri oldukça belirgindi ve bazı dişlerin boyu olduğundan çok daha kısa görünüyordu. Lazer teknolojileri kullanılarak yapılan gingivektomi (diş eti şekillendirme) işlemiyle, diş eti seviyeleri simetrik bir şekilde yukarı çekildi. Böylece dişlerin görünür boyu uzadı, diş ile diş eti arasındaki altın oran yakalandı. Çerçevesi düzgün olmayan bir tablonun güzel görünmesi nasıl mümkün değilse, diş eti konturları düzeltilmeden yapılan dişlerin de estetik durması beklenemez."
            ]
      },
      {
            "h2": "Porselen Lamina (Yaprak Porselen) Dokunuşu",
            "paragraphs": [
                  "Dizilim düzeltilip diş eti simetrisi sağlandıktan sonra, işin asıl vitrin kısmına geçilir. Doğal diş dokusuna en az müdahale ile en kalıcı ve estetik sonucu veren porselen laminalar, bu kusursuz görünümün başrol oyuncusudur. İncecik bir tırnak yapısında üretilen bu yaprak porselenler, dişlerin sadece ön yüzeylerine özel yapıştırıcılarla sabitlenir. Renkleşme, ufak çapraşıklıklar, kırıklar veya aralıklı diş formları laminalar sayesinde tamamen kamufle edilir. Işık geçirgenliği doğal diş minesiyle neredeyse birebir aynı olduğu için, yapay ve mat bir görünüm yerine son derece canlı, parlak ve doğal bir beyazlık sunar. Dişlerin yüzeyinden milimetrik seviyelerde pürüzlendirme yapıldığı için, dişin ana yapısı büyük ölçüde korunur."
            ]
      },
      {
            "h2": "Tamamlayıcı Diş Beyazlatma İşlemleri",
            "paragraphs": [
                  "Porselen laminalar uygulanmadan önce veya kaplama gerektirmeyen diğer dişler için profesyonel diş beyazlatma (bleaching) yöntemleri uygulanır. Zamanla tüketilen kahve, çay, renkli gıdalar veya yaş almaya bağlı olarak diş minesine işleyen lekeler, özel jeller ve ışık kaynakları kullanılarak birkaç ton açılır. Arka dişlerdeki renk bütünlüğünün ön bölgedeki laminalarla kusursuz şekilde eşleşmesi, gülüşün bir bütün olarak doğal durmasını sağlar."
            ]
      },
      {
            "h2": "Ağız ve Çene Yapısının Sportif Performansa Etkisi",
            "paragraphs": [
                  "Bu tarz geniş çaplı diş tedavilerini değerlendirirken konuyu sadece kozmetik bir değişim olarak görmek eksik bir yaklaşım olur. Doğru bir çene kapanışı ve sağlıklı bir diş dizilimi, vücudun genel postürünü, kas gerginliğini ve hatta nefes alışverişini doğrudan etkiler. Çene eklemindeki dengesizlikler, boyun ve sırt kaslarında ekstra bir efor ve gerginlik yaratır. Elit seviyedeki sporcular için vücuttaki kasların en verimli şekilde çalışması ve oksijen kapasitesinin maksimum düzeyde kullanılması hayati önem taşır.",
                  "Eksik dişlerin tamamlanması ve çene kapanışının (oklüzyon) ortodontik olarak düzeltilmesi, çiğneme kuvvetinin tüm çeneye eşit dağılmasını sağlar. Bu denge, uyku kalitesinden sindirime, antrenman sırasındaki nefes kontrolünden boyun kaslarının rahatlamasına kadar sayısız fizyolojik avantaj sunar. Dolayısıyla yapılan yatırımı, sadece kameralar karşısında güzel görünmek için değil, aynı zamanda vücut biyomekaniğini ideal seviyeye çekmek için atılmış profesyonel bir adım olarak okumak gerekir."
            ]
      },
      {
            "h2": "Kişiye Özel Gülüş Tasarımına Nasıl Sahip Olabilirsiniz?",
            "paragraphs": [
                  "Günümüz teknolojisinde artık tedavinin sonucunu henüz işlemlere başlamadan görebilmeniz mümkün. Dijital gülüş tasarımı sayesinde kliniğe geldiğiniz ilk gün yüzünüzün, dudak hareketlerinizin ve dişlerinizin yüksek çözünürlüklü fotoğraf ve videoları çekilir. Ağız içiniz, geleneksel ölçü maddeleri yerine üç boyutlu dijital tarayıcılarla saniyeler içinde bilgisayar ortamına aktarılır.",
                  "Hekiminiz bu veriler üzerinde çalışarak, yüz şeklinize, ten renginize ve hatta yaşınıza en uygun diş formlarını bilgisayar ortamında tasarlar. Geliştirilen bu tasarım, \"mock-up\" adı verilen geçici materyallerle ağzınıza uygulanır. Yani dişlerinizde henüz hiçbir aşındırma veya kalıcı işlem yapılmadan, yeni gülüşünüzün yüzünüzde nasıl duracağını aynaya bakarak deneyimleyebilirsiniz. Beğenmediğiniz noktaları hekiminizle anında paylaşabilir, dişlerin boyunu, köşelerinin ovalliğini veya rengini kendi zevkinize göre revize edebilirsiniz. Sürecin bu kadar şeffaf ve öngörülebilir olması, tedavi sonrasında yaşanabilecek hayal kırıklıklarını tamamen ortadan kaldırır."
            ]
      },
      {
            "h2": "Yaprak Porselen ve Kaplamaların Bakım Rutini",
            "paragraphs": [
                  "Yüksek teknolojiyle üretilen estetik diş uygulamaları oldukça dayanıklı materyallerden elde edilse de, uzun ömürlü olmaları tamamen sizin günlük bakım alışkanlıklarınıza bağlıdır. Doğal dişleriniz için uyguladığınız tüm hijyen kuralları, porselen laminalar ve kaplamalar için de geçerliliğini korur.",
                  "Öncelikle günde en az iki kere florürlü bir diş macunu ve yumuşak uçlu bir fırça ile dişlerinizi fırçalamayı ihmal etmemelisiniz. Sert fırçalama hareketleri, zamanla diş etlerinde çekilmeye sebep olabileceği için süpürme tarzı yumuşak hareketleri tercih etmelisiniz. Kaplamaların ara yüz temizliği son derece kritiktir; fırçanın ulaşamadığı bölgelerde biriken plakları uzaklaştırmak için mutlaka her gün diş ipi veya arayüz fırçası kullanmalısınız.",
                  "Porselen yüzeyler çay, kahve veya sigara gibi etkenlerle doğal dişler gibi renk değiştirmez. Üzerlerinde leke tutmayan pürüzsüz bir yapıları vardır. Ancak kabuklu yemişleri dişlerinizle kırmaktan, kalem ısırmak veya ambalajları dişlerinizle açmak gibi zararlı alışkanlıklardan kesinlikle uzak durmalısınız. Kaplamalarınızın bakımını desteklemek ve diş eti sağlığınızı güvence altına almak adına altı ayda bir düzenli hekim kontrolüne gitmeniz, estetik gülüşünüzü uzun yıllar sorunsuz bir şekilde taşımanızı sağlar."
            ]
      },
      {
            "h2": "Tüm dişleri tamamen yapay kaplamalarla mı değiştirildi?",
            "paragraphs": [
                  "Hayır, modern diş estetiğinde amaç her zaman kişinin sağlıklı diş dokusunu maksimum oranda korumaktır. Büyük ihtimalle sadece ön bölgedeki estetik hattı oluşturan dişlerin ön yüzeylerine porselen laminalar uygulandı. Arka bölgelerdeki dişler ise gerekli görüldüğünde beyazlatma veya fonksiyonel dolgularla desteklenir."
            ]
      },
      {
            "h2": "Gülüş tasarımı ve porselen lamina işlemleri ne kadar sürer?",
            "paragraphs": [
                  "Dijital planlama, ölçü alımı ve porselenlerin laboratuvarda hazırlanma süreçleri genellikle bir haftalık bir zaman dilimine yayılır. Ortalama 2 veya 3 seans sonunda yepyeni gülüşünüze kavuşabilirsiniz. Ancak öncesinde diş eti tedavisi veya ortodontik tel tedavisi gerekliyse, bu süre doğal olarak uzayacaktır."
            ]
      },
      {
            "h2": "Porselen diş kaplamalarının ve laminaların ömrü ne kadardır?",
            "paragraphs": [
                  "Kullanılan malzemenin kalitesine, hekimin tecrübesine ve sizin ağız hijyeninize ne kadar dikkat ettiğinize bağlı olarak laminaların ömrü ortalama 10 ila 15 yıl arasında değişiklik gösterir. İyi bir bakımla bu süreyi çok daha yukarılara taşıyabilirsiniz."
            ]
      },
      {
            "h2": "Kullanılan diş telleri neden dışarıdan hiç görünmüyordu?",
            "paragraphs": [
                  "Estetik kaygısı yüksek olan bireylerde veya ekran önündeki kişilerde \"lingual ortodonti\" adı verilen teknik kullanılır. Bu yöntemde braketler ve teller dişlerin dışarıdan görünen ön yüzeylerine değil, dil tarafına bakan arka yüzeylerine yapıştırılır. Böylece dışarıdan bakıldığında hiçbir tel görüntüsü oluşmaz."
            ]
      },
      {
            "h2": "Estetik diş işlemlerinde ağrı veya sızı hissedilir mi?",
            "paragraphs": [
                  "Günümüzde uygulanan lokal anestezi teknikleri sayesinde işlemler sırasında herhangi bir ağrı hissetmezsiniz. Dişlerin hazırlandığı seans sonrasında hafif sızlamalar yaşanabilse de, size takılacak geçici dişler sayesinde bu süreç oldukça konforlu ve günlük hayatınızı etkilemeden atlatılır."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
  {
    slug: "dis-agrisi-sebepleri-nelerdir",
    title: "Diş Ağrısı Sebepleri Nelerdir?",
    description: "Diş ağrısının başlıca sebepleri: çürük, diş eti hastalıkları, gömülü dişler ve ne zaman acil müdahale gerektiği.",
    category: "Ağız Sağlığı",
    date: "2026-04-05",
    readMinutes: 6,
  image: "/images/blog/dis-agrisi-sebepleri-nelerdir.webp",
    body: [
      {
            "h2": "Diş Ağrısı Sebepleri Nelerdir?",
            "paragraphs": [
                  "Diş ağrısı, günlük yaşamı kısa sürede etkileyebilen en rahatsız edici ağız sağlığı sorunlarından biridir. Bazen hafif bir sızlama şeklinde başlar, bazen de aniden şiddetlenerek yemek yemeyi, konuşmayı ve uyumayı zorlaştırır. Ağrının kaynağı her zaman ilk hissedilen diş olmayabilir. Çene, kulak, baş bölgesi ya da komşu dişlerden yansıyan ağrılar da benzer şekilde algılanabilir. Bu nedenle diş ağrısının nedenini doğru anlamak, uygulanacak tedavinin planlanması açısından önem taşır.",
                  "Diş ağrısı tek bir sebeple ortaya çıkmaz. Çürük, diş eti hastalıkları, diş sıkma, kırık diş, gömülü diş, eski dolgular, enfeksiyonlar veya hassasiyet gibi birçok durum ağrıya yol açabilir. Kimi zaman ağrı birkaç saniyelik sızlama şeklindedir. Kimi zaman ise zonklayıcı, yayılan ve gece artan bir karakter gösterir. Ağrının süresi, şiddeti, hangi durumlarda arttığı ve eşlik eden belirtiler sorunun kaynağı hakkında fikir verir.",
                  "Diş ağrısı sebepleri nelerdir sorusuna verilecek yanıt, kişinin ağız yapısına ve mevcut şikayetine göre değişebilir. Hafif görünen bir belirti bile ihmal edildiğinde daha kapsamlı tedavi ihtiyacı doğurabilir. Bu yüzden diş ağrısını yalnızca geçici bir rahatsızlık olarak görmemek gerekir. Ağrının nedenini anlamak, hem dişi korumak hem de ağız sağlığını dengede tutmak için ilk adımdır."
            ]
      },
      {
            "h2": "Diş Çürükleri",
            "paragraphs": [
                  "Diş ağrısının en yaygın nedenlerinden biri diş çürükleridir. Çürük, ağız içinde biriken bakteri plağının diş minesine zarar vermesiyle başlar. Şekerli ve nişastalı gıdaların sık tüketilmesi, yetersiz fırçalama, ara yüz temizliğinin ihmal edilmesi ve düzensiz kontroller çürük oluşumunu kolaylaştırabilir. İlk aşamada dişte küçük bir renk değişikliği ya da pürüzlü yüzey fark edilebilir.",
                  "Çürük mine tabakasında sınırlı kaldığında ağrı her zaman belirgin olmayabilir. Ancak daha derin dokulara ilerledikçe hassasiyet artar. Soğuk içecekler, sıcak yiyecekler, tatlı gıdalar veya çiğneme basıncı ağrıyı tetikleyebilir. Çürük dişin sinir dokusuna yaklaştığında ise ağrı daha uzun sürer ve kendiliğinden başlayabilir.",
                  "İhmal edilen çürüklerde dişin iç dokusu etkilenebilir. Bu durumda ağrı geceleri artabilir, zonklama hissi oluşabilir ve diş üzerine basmak zorlaşabilir. Erken dönemde fark edilen çürükler çoğu zaman daha koruyucu işlemlerle tedavi edilebilir. Gecikmiş vakalarda ise kanal tedavisi gibi daha kapsamlı uygulamalar gerekebilir."
            ]
      },
      {
            "h2": "Diş Eti Problemleri",
            "paragraphs": [
                  "Diş eti hastalıkları da diş ağrısı ve ağız içi rahatsızlığın önemli nedenleri arasındadır. Diş eti iltihabı başlangıçta kanama, kızarıklık ve hassasiyetle kendini gösterebilir. Özellikle fırçalama sırasında kanama fark ediliyorsa bu durum hafife alınmamalıdır. Sağlıklı diş etleri genellikle kolay kanamaz ve şiş görünmez.",
                  "Diş eti problemleri ilerlediğinde diş çevresindeki destek dokular etkilenebilir. Dişlerde sallanma, çekilme, ağız kokusu, diş aralarında açılma ve çiğnerken rahatsızlık oluşabilir. Ağrı bazen tek bir dişte hissedilir, ancak sorun aslında dişi çevreleyen dokulardan kaynaklanır. Bu nedenle dişin kendisi sağlam görünse bile diş eti değerlendirilmelidir.",
                  "Diş taşı ve plak birikimi, diş eti iltihabının en sık görülen nedenlerindendir. Bu birikimler temizlenmediğinde diş eti dokusu sürekli tahriş olur. Zaman içinde iltihap derinleşebilir. Diş eti kaynaklı ağrılarda ağız hijyeninin düzenlenmesi, diş taşı temizliği ve düzenli takip büyük önem taşır."
            ]
      },
      {
            "h2": "Derin Çürük Ve Diş Siniri Etkilenmesi",
            "paragraphs": [
                  "Dişin iç kısmında bulunan canlı doku, çürük derinleştiğinde etkilenebilir. Bu durum diş ağrısının daha şiddetli hale gelmesine neden olur. Başlangıçta sadece soğukla ortaya çıkan hassasiyet, zamanla sıcakla artan ağrıya dönüşebilir. Ağrı uyaran ortadan kalktıktan sonra da devam ediyorsa dişin iç dokusu etkilenmiş olabilir.",
                  "Diş siniri etkilendiğinde ağrı genellikle zonklayıcıdır. Gece daha belirgin hale gelebilir ve kişi ağrının tam yerini ayırt etmekte zorlanabilir. Bazen ağrı çeneye, kulağa veya başın aynı tarafına yayılabilir. Bu tür ağrılar ağrı kesiciyle geçici olarak hafiflese de temel sorun devam eder.",
                  "Bu aşamada yalnızca diş yüzeyini onarmak yeterli olmayabilir. Dişin iç dokusunun değerlendirilmesi ve uygun tedavinin planlanması gerekir. Erken müdahale, dişin ağızda korunma ihtimalini artırabilir. Ağrının kendiliğinden azalması ise her zaman iyileşme anlamına gelmez. Bazı durumlarda sinir dokusu canlılığını kaybedebilir ve enfeksiyon sessizce ilerleyebilir."
            ]
      },
      {
            "h2": "Diş Apsesi",
            "paragraphs": [
                  "Diş apsesi, diş kökü veya çevre dokularda enfeksiyon oluşmasıyla ortaya çıkan ciddi bir ağrı nedenidir. Apse durumunda diş etinde şişlik, yüzde dolgunluk hissi, zonklama, ağızda kötü tat, çiğneme sırasında baskı ağrısı ve bazen ateş benzeri genel rahatsızlık görülebilir. Ağrı çoğu zaman kendiliğinden şiddetlenir ve kişinin günlük yaşamını belirgin şekilde etkiler.",
                  "Apse, genellikle derin çürük, tedavi edilmemiş diş enfeksiyonu, diş eti hastalığı veya travma sonrası gelişebilir. Şişlik zaman zaman azalabilir ya da ağız içine boşalabilir. Bu durum kişinin rahatladığını düşündürebilir. Ancak enfeksiyon kaynağı ortadan kalkmadıkça sorun tekrar edebilir.",
                  "Diş apsesi ihmal edilmemesi gereken bir durumdur. Enfeksiyonun yayılma riski bulunduğu için profesyonel değerlendirme gerekir. Apse tedavisinde yalnızca ağrıyı bastırmak yeterli değildir. Enfeksiyonun kaynağı belirlenmeli ve dişin korunabilirliği değerlendirilmelidir."
            ]
      },
      {
            "h2": "Kırık Ve Çatlak Dişler",
            "paragraphs": [
                  "Kırık veya çatlak dişler, diş ağrısının sık görülen nedenlerinden biridir. Sert bir yiyecek ısırmak, diş sıkmak, darbe almak, eski büyük dolguların zayıflaması veya çürük nedeniyle diş dokusunun incelmesi kırığa yol açabilir. Kırık bazen gözle kolayca fark edilir. Bazen de yalnızca çiğneme sırasında oluşan keskin ağrı ile kendini belli eder.",
                  "Çatlak dişlerde ağrı genellikle ısırma ve bırakma sırasında hissedilir. Kişi hangi dişinin ağrıdığını net tarif edemeyebilir. Soğuk hassasiyeti, tatlı yiyeceklerle sızlama ve dişin belirli bir noktasında baskı ağrısı görülebilir. Çatlak derinleşirse dişin iç dokusu da etkilenebilir.",
                  "Küçük kırıklar estetik dolgu ya da yüzey düzenlemesiyle onarılabilir. Daha büyük kırıklarda dişi destekleyen restoratif çözümler gerekebilir. Kırık diş tedavisinin ertelenmesi, çatlağın ilerlemesine ve dişin korunmasının zorlaşmasına neden olabilir."
            ]
      },
      {
            "h2": "Diş Sıkma Ve Gıcırdatma",
            "paragraphs": [
                  "Diş sıkma ve gıcırdatma, birçok kişinin farkında olmadan yaşadığı bir problemdir. Özellikle gece uykuda ortaya çıkan bu alışkanlık, dişlere normalden fazla kuvvet uygulanmasına yol açar. Zamanla dişlerde aşınma, çatlak, hassasiyet, çene kaslarında yorgunluk ve sabah baş ağrısı görülebilir.",
                  "Diş sıkmaya bağlı ağrı genellikle tek bir dişten çok, birkaç dişte yaygın hassasiyet şeklinde hissedilir. Çiğneme kaslarında sertlik, çene ekleminde ses, ağız açarken zorlanma ve kulak çevresinde basınç hissi de eşlik edebilir. Kişi dişlerinin birbirine fazla bastığını gün içinde de fark edebilir.",
                  "Bu durum yalnızca ağrıya yol açmakla kalmaz, mevcut dolguların, kaplamaların ve doğal diş dokusunun da zarar görmesine neden olabilir. Diş sıkma alışkanlığı değerlendirilmeden yapılan restorasyonlar uzun vadede fazla yük altında kalabilir. Bu yüzden ağrının kaynağında sıkma alışkanlığı olup olmadığı araştırılmalıdır."
            ]
      },
      {
            "h2": "Diş Hassasiyeti",
            "paragraphs": [
                  "Diş hassasiyeti, sıcak, soğuk, tatlı veya ekşi gıdalarla ortaya çıkan kısa süreli sızlama şeklinde hissedilir. Genellikle diş eti çekilmesi, mine aşınması, sert fırçalama, asitli içecek tüketimi veya diş yüzeyindeki küçük çatlaklarla ilişkilidir. Hassasiyet ağrısı çoğu zaman keskin başlar ve uyaran ortadan kalkınca kısa sürede azalır.",
                  "Diş eti çekildiğinde kök yüzeyi açığa çıkabilir. Kök yüzeyi mine kadar koruyucu olmadığı için dış etkenlere karşı daha duyarlı hale gelir. Bu durumda soğuk su içmek, diş fırçalamak veya hava teması bile sızlamaya neden olabilir. Mine aşınmaları da benzer şekilde hassasiyet oluşturabilir.",
                  "Her hassasiyet basit bir sorun anlamına gelmez. Derin çürükler de başlangıçta hassasiyet gibi hissedilebilir. Bu nedenle uzun süren, giderek artan veya tek bir dişte yoğunlaşan hassasiyet değerlendirilmelidir. Doğru neden belirlendiğinde hassasiyet kontrol altına alınabilir."
            ]
      },
      {
            "h2": "Eski Dolgular Ve Restorasyon Sorunları",
            "paragraphs": [
                  "Eski dolgular zamanla aşınabilir, kırılabilir ya da kenar uyumunu kaybedebilir. Dolgu ile diş arasında küçük açıklıklar oluştuğunda bu bölgede bakteri birikimi artabilir. Kişi dolgu kenarında takılma, besin sıkışması, hassasiyet veya çiğnerken ağrı hissedebilir.",
                  "Dışarıdan sağlam görünen bir dolgunun altında çürük ilerleyebilir. Bu nedenle eski dolguların düzenli kontrol edilmesi gerekir. Özellikle büyük dolguların bulunduğu dişlerde kalan sağlam doku miktarı azalmış olabilir. Böyle bir diş, normal çiğneme kuvvetleriyle bile kırılmaya yatkın hale gelebilir.",
                  "Restorasyon yüksekliği de ağrıya neden olabilir. Yeni yapılan bir dolgu ya da kaplama diğer dişlerden önce temas ediyorsa çiğneme sırasında baskı oluşturur. Bu baskı zamanla dişte hassasiyet ve ağrıya yol açabilir. Basit bir kapanış düzenlemesiyle rahatlama sağlanabilir."
            ]
      },
      {
            "h2": "Gömülü Ve Yarı Gömülü Dişler",
            "paragraphs": [
                  "Gömülü ya da yarı gömülü dişler, özellikle arka bölgede ağrı ve şişlik nedeni olabilir. Diş tam olarak süremediğinde çevresinde temizlenmesi zor alanlar oluşur. Bu bölgelerde bakteri ve yiyecek artığı birikimi artabilir. Sonuç olarak diş eti çevresinde iltihaplanma, kötü tat, ağız kokusu ve çene açmada zorluk görülebilir.",
                  "Yarı gömülü dişlerde ağrı dönem dönem artabilir. Kişi birkaç gün rahatsızlık yaşar, sonra şikayet hafifler. Ancak temizlik zorluğu devam ettiği için sorun tekrar edebilir. Ağrı bazen kulağa, boğaza veya çene köşesine yayılabilir.",
                  "Gömülü dişlerin çevre dişlere baskı yapması da rahatsızlık oluşturabilir. Bu durum çiğneme konforunu etkileyebilir ve komşu dişlerde çürük riskini artırabilir. Ağrı tekrarlıyorsa detaylı değerlendirme yapılması gerekir."
            ]
      },
      {
            "h2": "Sinüzit Ve Yansıyan Ağrılar",
            "paragraphs": [
                  "Bazı durumlarda kişi diş ağrısı hissetse de ağrının kaynağı doğrudan diş olmayabilir. Özellikle üst arka dişler, sinüs boşluklarına yakın konumdadır. Sinüslerde dolgunluk veya iltihaplanma olduğunda üst dişlerde baskı, sızlama ve çiğneme sırasında rahatsızlık hissedilebilir.",
                  "Yansıyan ağrılar, diş ağrısının kaynağını karıştırabilir. Çene eklemi sorunları, kulak bölgesi rahatsızlıkları, kas gerginliği veya komşu dişlerden gelen ağrılar farklı bölgelerde hissedilebilir. Kişi ağrının tam olarak hangi dişten geldiğini ayırt edemeyebilir.",
                  "Bu nedenle diş ağrısı değerlendirilirken yalnızca ağrıyan bölgeye değil, çevre dokulara da bakılmalıdır. Ağrının ne zaman başladığı, hangi hareketlerle arttığı ve başka belirtilerle birlikte olup olmadığı önemlidir."
            ]
      },
      {
            "h2": "Diş Ağrısı Ne Zaman Ciddiye Alınmalı",
            "paragraphs": [
                  "Diş ağrısı kısa süreli ve hafif olsa bile tekrarlıyorsa dikkate alınmalıdır. Özellikle gece uykudan uyandıran ağrı, yüz veya diş etinde şişlik, ateş hissi, ağız açmada zorlanma, çiğneme sırasında keskin ağrı, kırık diş ya da travma sonrası oluşan hassasiyet geciktirilmemelidir.",
                  "Ağrı kesiciler geçici rahatlama sağlayabilir, ancak sorunun nedenini ortadan kaldırmaz. Ağrının azalması her zaman iyileşme anlamına gelmez. Bazı enfeksiyonlar dönem dönem sessizleşebilir ve daha sonra daha şiddetli şekilde tekrar edebilir.",
                  "Diş ağrısını erken dönemde değerlendirmek, tedavi seçeneklerini daha koruyucu hale getirebilir. Küçük bir çürük dolgu ile çözülebilirken, ilerleyen vakalarda kanal tedavisi veya diş çekimi gündeme gelebilir. Bu nedenle ağrıyı bastırmaya çalışmak yerine kaynağını belirlemek daha doğru bir yaklaşımdır."
            ]
      },
      {
            "h2": "Diş Ağrısında Evde Nelere Dikkat Edilmeli?",
            "paragraphs": [
                  "Diş ağrısı başladığında ağız içi nazikçe temizlenmelidir. Diş aralarında sıkışmış yiyecek artıkları ağrıyı artırabilir. Ilık suyla yapılan nazik çalkalama bazı durumlarda rahatlık sağlayabilir. Ağrıyan dişle sert yiyecekler çiğnememek de önemlidir.",
                  "Diş üzerine doğrudan aspirin, kolonya, alkol veya farklı maddeler koymak uygun değildir. Bu tür uygulamalar diş eti ve ağız içi dokularda tahrişe neden olabilir. Sıcak uygulama, özellikle şişlik bulunan durumlarda rahatsızlığı artırabilir. Şişlik varsa dışarıdan kısa süreli soğuk uygulama geçici rahatlama sağlayabilir, fakat tedavinin yerine geçmez.",
                  "Ağrı kesici kullanımı gerekiyorsa kişinin genel sağlık durumu ve kullandığı ilaçlar dikkate alınmalıdır. Ağrı birkaç saat içinde tekrar ediyorsa, giderek artıyorsa ya da şişlik eşlik ediyorsa profesyonel değerlendirme gerekir."
            ]
      },
      {
            "h2": "Diş Ağrısını Önlemek İçin Neler Yapılabilir?",
            "paragraphs": [
                  "Diş ağrısını önlemenin en etkili yolu düzenli ağız bakımını sürdürmektir. Dişler günde en az iki kez fırçalanmalı, ara yüz temizliği ihmal edilmemeli ve plak birikimini artıran alışkanlıklara dikkat edilmelidir. Yalnızca diş yüzeylerini fırçalamak yeterli olmayabilir. Diş araları da çürük ve diş eti sorunları açısından riskli bölgelerdir.",
                  "Beslenme alışkanlıkları da diş sağlığını etkiler. Şekerli ve asitli gıdaların sık tüketilmesi mine yapısını zayıflatabilir. Gün boyunca sürekli atıştırmak, ağız içindeki asit dengesini olumsuz etkileyebilir. Su tüketimi, ağız içinin temizlenmesine ve tükürük dengesinin korunmasına yardımcı olur.",
                  "Düzenli kontroller, henüz ağrı oluşturmayan sorunların erken fark edilmesini sağlar. Eski dolgular, diş eti dokuları, başlangıç çürükleri ve kapanış problemleri belirli aralıklarla değerlendirilmelidir. Böylece diş ağrısına yol açabilecek birçok durum büyümeden kontrol altına alınabilir."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
  {
    slug: "dis-sagligi-rehberi",
    title: "Diş Sağlığı Rehberi",
    description: "Günlük ağız bakımından düzenli kontrole kadar diş sağlığını korumak için kapsamlı rehber.",
    category: "Ağız Sağlığı",
    date: "2026-03-18",
    readMinutes: 8,
  image: "/images/blog/dis-sagligi-rehberi.webp",
    body: [
      {
            "h2": "Diş Sağlığı Rehberi Nedir?",
            "paragraphs": [
                  "Diş sağlığı rehberi; dişlerinizi, diş etlerinizi, dilinizi ve ağız içindeki diğer dokuları korumak için uygulayabileceğiniz temel bakım adımlarını bir araya getirir. Rehber yalnızca diş fırçalama tekniğini anlatmaz. Beslenme düzeninden diş ipi kullanımına, ağız kuruluğundan çocukların bakımına kadar geniş bir alanı kapsar.",
                  "Ağız bakımı konusunda en sık yapılan hata, sorun çıkmadığı sürece her şeyin yolunda olduğunu düşünmektir. Oysa diş çürükleri ve diş eti hastalıkları başlangıç döneminde belirgin ağrı oluşturmayabilir. Diş eti çizgisinde biriken plak, fark edilmeden dokuyu tahriş edebilir. Küçük bir çürük ise zamanla derinleşerek dişin sinir dokusuna yaklaşabilir.",
                  "Bu nedenle etkili bir ağız bakım düzeni, belirtileri beklemek yerine korumaya odaklanır. Günde iki kez fırçalama, diş aralarının düzenli temizliği, şekerli yiyeceklerin kontrollü tüketimi ve kişisel riskinize göre planlanan diş hekimi kontrolleri bu düzenin temelini oluşturur."
            ]
      },
      {
            "h2": "Dişler Nasıl Doğru Fırçalanır?",
            "paragraphs": [
                  "Dişlerinizi günde iki kez, yaklaşık iki dakika boyunca florürlü diş macunuyla fırçalamanız gerekir. Ancak süre kadar kullandığınız teknik de önem taşır. Fırçayı dişlerin üzerinde hızlı ve sert hareketlerle gezdirmek, bütün yüzeyleri temizlediğiniz anlamına gelmez.",
                  "Fırça kıllarını diş eti çizgisine nazikçe yönlendirerek küçük ve kontrollü hareketler yapabilirsiniz. Dişlerin dış yüzeylerini, iç yüzeylerini ve çiğneme alanlarını ayrı ayrı temizlemelisiniz. Ön dişlerin arka tarafında fırçayı dik konuma getirmeniz bu dar alanlara ulaşmanızı kolaylaştırır.",
                  "Daha sert bastırmak daha iyi temizlik sağlamaz. Aşırı kuvvet, zaman içinde diş eti çekilmesine ve diş yüzeyinde aşınmaya katkıda bulunabilir. Fırçanın kılları kısa sürede dışa doğru açılıyorsa gereğinden fazla baskı uyguluyor olabilirsiniz.",
                  "Fırçalamayı tamamladıktan sonra diş macununu tükürmeniz yeterlidir. Ağzınızı hemen ve uzun süre suyla çalkalamak, diş yüzeyinde kalması amaçlanan florür miktarını azaltabilir. Düzenli ve doğru fırçalama, plak kontrolünün temelini oluşturur."
            ]
      },
      {
            "h2": "Hangi Diş Fırçası ve Diş Macunu Kullanılmalıdır?",
            "paragraphs": [
                  "Diş fırçası seçerken büyük ve sert başlıklı modeller yerine ağız yapınıza rahatça ulaşan, yumuşak kıllı bir ürün tercih edebilirsiniz. Küçük veya orta büyüklükteki fırça başlığı, arka dişlere ve dar bölgelere daha kolay ulaşmanızı sağlar.",
                  "Manuel ve elektrikli diş fırçaları doğru kullanıldığında etkili temizlik sağlayabilir. El beceriniz sınırlıysa, fırçalama süresini ayarlamakta zorlanıyorsanız veya gereğinden fazla baskı uyguluyorsanız basınç sensörlü elektrikli modellerden yararlanabilirsiniz. Bununla birlikte cihazın gelişmiş olması, doğru yerleşim ve yeterli süre ihtiyacını ortadan kaldırmaz.",
                  "Diş macununda florür bulunması, çürüğe karşı günlük korumayı destekler. Hassasiyet, diş eti problemi veya yoğun çürük riski gibi özel bir durumunuz varsa diş hekiminiz size farklı içerikte bir ürün önerebilir. Beyazlatıcı özelliği öne çıkan aşındırıcı macunları kontrolsüz ve uzun süre kullanmak yerine ağız yapınıza uygun seçim yapmanız daha doğru olur."
            ]
      },
      {
            "h2": "Diş İpi Kullanımı Neden Gereklidir?",
            "paragraphs": [
                  "Diş fırçası, dişlerin birbirine temas ettiği dar alanlara her zaman yeterince ulaşamaz. Bu bölgelerde kalan plak ve yiyecek artıkları zamanla diş eti hassasiyetine, ağız kokusuna ve ara yüz çürüklerine zemin hazırlayabilir.",
                  "Diş ipini günde bir kez kullanarak fırçanın ulaşamadığı yüzeyleri temizleyebilirsiniz. İpi diş arasına sert biçimde bastırmamalısınız. Kontrollü hareketle temas noktasından geçirdikten sonra ipi bir dişin yüzeyine “C” şeklinde yaslayabilir, diş eti çizgisine nazikçe yaklaştırarak aşağı ve yukarı hareket ettirebilirsiniz. Aynı işlemi komşu dişin yüzeyinde de tekrarlamalısınız.",
                  "Geniş diş aralıklarınız, diş eti çekilmeniz, implantınız veya köprünüz bulunuyorsa ara yüz fırçası daha uygun olabilir. Ortodontik tel kullanan kişiler ise ip geçirici, özel ortodontik ip veya ağız duşundan destek alabilir. En doğru ürünü diş hekiminiz ağız yapınıza göre belirleyebilir."
            ]
      },
      {
            "h2": "Ağız Gargarası Diş Fırçalamanın Yerini Tutar mı?",
            "paragraphs": [
                  "Ağız gargarası, belirli durumlarda günlük bakım programını destekleyebilir. Ancak diş yüzeyine yapışan plağı mekanik olarak uzaklaştırmadığı için fırçalama ve diş arası temizliğinin yerini tutmaz.",
                  "Bazı gargaralar florür desteği sunarken bazı ürünler diş eti problemlerine yönelik özel içerikler taşır. Antiseptik etkili ürünleri gelişigüzel ve uzun süre kullanmamanız gerekir. İçerik seçimi, ağız yapınıza ve kullanım amacınıza göre değişir.",
                  "Gargarayı diş macunuyla fırçaladıktan hemen sonra kullanmak, macundaki florürün diş yüzeyinde kalma süresini azaltabilir. Ürünün kullanım talimatını takip edebilir veya diş hekiminizin önerdiği farklı bir zaman diliminde kullanabilirsiniz."
            ]
      },
      {
            "h2": "Diş Sağlığını Korumak İçin Nasıl Beslenmelisiniz?",
            "paragraphs": [
                  "Diş çürükleri açısından yalnızca tükettiğiniz şeker miktarı değil, şekere ne kadar sık maruz kaldığınız da önem taşır. Gün boyunca sık sık şekerli içecek yudumlamak veya küçük atıştırmalar yapmak, ağız içindeki asit saldırılarının tekrarlanmasına neden olabilir.",
                  "Şekerli ve yapışkan yiyecekleri mümkün olduğunca ana öğünlerle birlikte tüketmeniz, gün boyu süren atıştırmalara göre daha kontrollü bir düzen oluşturur. Su içmek ağız içindeki yiyecek kalıntılarının uzaklaşmasına yardımcı olur. Şekerli ve asitli içecekleri sık tüketmek ise hem çürük hem de diş aşınması riskini artırabilir.",
                  "Çok asitli bir yiyecek veya içecek tükettikten hemen sonra sertçe fırçalamak yerine ağzınızı suyla çalkalayıp bir süre bekleyebilirsiniz. Bu yaklaşım, geçici olarak yumuşayan diş yüzeyini aşındırma riskini azaltmaya yardımcı olur.",
                  "Dengeli beslenme, yalnızca dişleri değil diş etlerini ve ağız dokularını da destekler. Öğün düzeninizi oluştururken su tüketimini, sebze ve protein kaynaklarını ihmal etmemelisiniz."
            ]
      },
      {
            "h2": "Diş Eti Kanaması Neden Olur?",
            "paragraphs": [
                  "Diş eti kanaması çoğu zaman diş eti çizgisinde biriken plakla ilişkili gelişir. Kızarık, şiş ve kolay kanayan diş etleri, diş eti iltihabının erken belirtileri arasında yer alabilir. Yanlış fırçalama, diş ipini sert kullanma veya uygun olmayan protezler de kanamaya neden olabilir.",
                  "Kanama gördüğünüzde fırçalamayı tamamen bırakmak sorunu çözmez. Yumuşak kıllı bir fırçayla nazik ancak düzenli temizliğe devam etmelisiniz. Diş ipini de diş etine çarptırmadan kullanmalısınız.",
                  "Kanama birkaç gün içinde azalmıyorsa, kendiliğinden oluşuyorsa veya ağız kokusu, diş eti çekilmesi ve dişlerde hareketlilik gibi belirtiler eşlik ediyorsa diş hekimi muayenesi planlamalısınız. Tedavi edilmeyen diş eti hastalığı, dişi destekleyen dokulara ve kemiğe ilerleyebilir."
            ]
      },
      {
            "h2": "Diş Çürüğü Belirtileri Nelerdir?",
            "paragraphs": [
                  "Diş çürüğü başlangıçta hiçbir belirti vermeyebilir. Süreç ilerledikçe soğuk, sıcak veya tatlı yiyeceklere karşı hassasiyet gelişebilir. Diş yüzeyinde beyaz, kahverengi ya da koyu renkli alanlar fark edebilirsiniz.",
                  "Çiğneme sırasında ağrı, dişte belirgin oyuk veya gece başlayan zonklama, çürüğün daha derin dokulara ilerlediğini gösterebilir. Ağrı kesici kullanarak belirtileri geçici olarak bastırmak, sorunun kaynağını ortadan kaldırmaz.",
                  "Erken dönemde fark edilen çürükler daha sınırlı işlemlerle kontrol altına alınabilir. Derinleşen çürüklerde ise kanal tedavisi veya dişin çekilmesi gibi daha kapsamlı müdahaleler gerekebilir. Bu nedenle ağrı başlamasını beklemeden düzenli kontrol yaptırmak önem taşır."
            ]
      },
      {
            "h2": "Diş Hekimi Kontrolüne Ne Sıklıkta Gidilmelidir?",
            "paragraphs": [
                  "Herkes için değişmez tek bir kontrol aralığı bulunmaz. Çürük geçmişiniz, diş eti durumunuz, yaşınız, kullandığınız ilaçlar ve ağız bakım alışkanlıklarınız kontrol sıklığını belirler.",
                  "Düşük riskli bir yetişkin daha uzun aralıklarla takip edilebilirken aktif diş eti hastalığı, çok sayıda dolgu, implant veya yoğun çürük riski bulunan kişiler daha sık kontrole ihtiyaç duyabilir. Diş hekiminiz muayene sonrasında size uygun takip planını hazırlar.",
                  "Kontrol randevusu yalnızca çürük aramak için yapılmaz. Diş etleri, dolgular, protezler, kapanış düzeni ve ağız içindeki yumuşak dokular da incelenir. Gerekli durumlarda röntgen değerlendirmesi yapılabilir. Her kontrolde rutin olarak aynı görüntülemeyi istemek yerine, kişisel ihtiyaca göre hareket etmek gerekir."
            ]
      },
      {
            "h2": "Çocuklarda Diş Sağlığı Nasıl Korunur?",
            "paragraphs": [
                  "Çocuklarda ağız bakımı ilk diş çıktıktan sonra başlamalıdır. İlk dişleri, yaşa uygun yumuşak bir fırça ve çok az miktarda florürlü diş macunuyla temizleyebilirsiniz. Üç yaşından küçük çocuklarda ince bir sürüntü, üç ile altı yaş arasında ise bezelye büyüklüğünde macun kullanımı önerilir.",
                  "Küçük çocukların el becerisi, dişlerini tek başına etkili biçimde temizlemek için yeterli değildir. Bu nedenle fırçalamaya eşlik etmeli ve çocuğunuz güvenilir bir teknik geliştirene kadar kontrolü sürdürmelisiniz.",
                  "Biberonla uyuma, gün boyunca şekerli içecek tüketme ve sık atıştırma çürük riskini artırabilir. İlk diş hekimi ziyaretini yalnızca ağrı çıktığında planlamak yerine koruyucu bakımın bir parçası h&acirc;line getirmeniz daha doğru olur. Kalıcı azı dişlerine uygulanan koruyucu örtücüler de uygun çocuklarda çürük riskini azaltmaya yardımcı olabilir."
            ]
      },
      {
            "h2": "Ağız Kuruluğu Diş Sağlığını Etkiler mi?",
            "paragraphs": [
                  "Tükürük, ağız içini nemli tutar ve yiyecek kalıntılarının uzaklaşmasına yardımcı olur. Ağız kuruluğu geliştiğinde konuşma, yutma ve tat alma güçleşebilir. Çürük ve ağız içi enfeksiyon riski de artabilir.",
                  "Bazı ilaçlar, sistemik hastalıklar, yetersiz sıvı tüketimi ve ağızdan nefes alma kuruluğa katkıda bulunabilir. Gün boyunca su içmek ve şekersiz sakız çiğnemek bazı kişilerde geçici rahatlama sağlayabilir.",
                  "Kuruluk uzun süredir devam ediyorsa kullandığınız ilaçları kendi kararınızla bırakmamalısınız. Diş hekiminiz ve doktorunuz olası nedeni birlikte değerlendirebilir. Size özel nemlendirici ürünler veya daha yoğun florür desteği gerekebilir."
            ]
      },
      {
            "h2": "Hangi Diş Sorunlarında Beklemeden Hekime Başvurmalısınız?",
            "paragraphs": [
                  "Yüzde hızla artan şişlik, ateş, yutma veya nefes alma güçlüğü acil değerlendirme gerektirir. Travma sonucunda yerinden çıkan daimi bir diş, kontrol edilemeyen kanama ve şiddetli ağrı da ertelenmemelidir.",
                  "Ağrı birkaç gün sürüyorsa, diş etinde iltihaplı bir kabarıklık oluşmuşsa veya kötü tat ve akıntı fark ediyorsanız randevunuzu geciktirmemelisiniz. Enfeksiyonun kendiliğinden geçmesini beklemek, sorunun çevre dokulara ilerlemesine yol açabilir.",
                  "Dudak, dil, yanak içi veya damakta iki haftadan uzun süren yara ve renk değişiklikleri de değerlendirilmelidir. Ağız sağlığında erken müdahale, hem tedavi sürecini kolaylaştırır hem de doğal dişlerinizi koruma olasılığını artırır."
            ]
      },
      {
            "h2": "Dişler günde kaç kez fırçalanmalıdır?",
            "paragraphs": [
                  "Dişlerinizi florürlü diş macunuyla günde iki kez ve yaklaşık iki dakika boyunca fırçalamalısınız. Bütün yüzeylere ulaşmalı, diş eti çizgisini atlamamalısınız."
            ]
      },
      {
            "h2": "Diş fırçası ne zaman değiştirilmelidir?",
            "paragraphs": [
                  "Fırçanızın kılları eğildiğinde, açıldığında veya yıprandığında ürünü değiştirmelisiniz. Normal kullanımda birkaç ay içinde yenilemek gerekebilir. Yıpranmış kıllar etkili temizlik sağlamaz."
            ]
      },
      {
            "h2": "Diş taşı evde temizlenebilir mi?",
            "paragraphs": [
                  "Sertleşmiş diş taşını diş fırçası veya diş ipiyle güvenli biçimde çıkaramazsınız. Kesici aletlerle müdahale etmek diş minesine ve diş etine zarar verebilir. Profesyonel temizlik yaptırmalısınız."
            ]
      },
      {
            "h2": "Ağız kokusu yalnızca dişlerden mi kaynaklanır?",
            "paragraphs": [
                  "Hayır. Dil yüzeyindeki birikim, diş eti hastalığı, çürükler, ağız kuruluğu ve bazı sağlık sorunları ağız kokusuna neden olabilir. Düzenli bakıma rağmen devam eden kokuda muayene gerekir."
            ]
      },
      {
            "h2": "Diş beyazlatma dişlere zarar verir mi?",
            "paragraphs": [
                  "Hekim değerlendirmesiyle ve uygun ürünlerle gerçekleştirilen beyazlatma işlemleri kontrollü biçimde uygulanabilir. Gelişigüzel kullanılan aşındırıcı veya içeriği belirsiz ürünler hassasiyet ve yüzey hasarı oluşturabilir."
            ]
      },
      {
            "h2": "Diş ağrısı kendiliğinden geçerse tedavi gerekir mi?",
            "paragraphs": [
                  "Ağrının azalması sorunun tamamen ortadan kalktığını göstermez. Dişin sinir dokusundaki hasar ilerlediğinde ağrı geçici olarak durabilir. Nedenin belirlenmesi için diş hekimi kontrolü yaptırmalısınız."
            ]
      },
      {
            "h2": "Sağlıklı görünen dişler için kontrol gerekli midir?",
            "paragraphs": [
                  "Evet. Çürükler, diş eti hastalıkları ve dolgu problemleri erken dönemde belirti vermeyebilir. Düzenli muayene, sorunları büyümeden fark etmeye yardımcı olur."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
  {
    slug: "evde-dis-tasi-temizligi-mumkun-mu",
    title: "Evde Diş Taşı Temizliği Mümkün mü?",
    description: "Evde diş taşı temizliği neden tehlikelidir, diş taşı nasıl oluşur ve profesyonel temizlik neden gereklidir?",
    category: "Ağız Sağlığı",
    date: "2026-02-22",
    readMinutes: 5,
  image: "/images/blog/evde-dis-tasi-temizligi-mumkun-mu.webp",
    body: [
      {
            "h2": "Diş Taşı Nedir?",
            "paragraphs": [
                  "Diş taşı, dişlerin üzerinde biriken bakteri plağının zamanla sertleşmesiyle oluşur. Plak başlangıçta yumuşaktır. Dilinizle diş yüzeyine dokunduğunuzda kaygan veya pütürlü bir his verebilir. Bu aşamada düzenli fırçalama ve ara yüz temizliğiyle uzaklaştırılabilir.",
                  "Plak yeterince temizlenmediğinde tükürükteki minerallerle birleşir. Sonra dişe yapışan sert bir tabaka haline gelir. Bu tabaka sarı, kahverengi veya daha koyu renkte görünebilir. Diş eti kenarında sert bir kabuk gibi hissedilebilir.",
                  "Diş taşı yalnızca görünen bölgelerde oluşmaz. Diş eti çizgisinin altında da birikebilir. Bu alan evde görülemediği için daha yanıltıcıdır. Kişi dişlerinin temiz göründüğünü düşünebilir, fakat diş eti altında sorun devam edebilir."
            ]
      },
      {
            "h2": "Evde Diş Taşı Neden Çıkarılamaz?",
            "paragraphs": [
                  "Evde diş taşı çıkarılamaz, çünkü diş taşı artık yumuşak bir kir değildir. Diş yüzeyine sıkıca tutunmuş mineralize bir yapıdır. Fırça kılları bu sert tabakayı kırıp güvenli şekilde ayıramaz. Diş ipi de mevcut diş taşını temizlemek için yeterli değildir.",
                  "Evde yapılan bakımın hedefi plak kontrolüdür. Yani henüz sertleşmemiş bakteri tabakasını uzaklaştırmak gerekir. Bu düzenli yapılırsa diş taşı oluşumu yavaşlayabilir. Ancak oluşmuş diş taşının profesyonel temizlikle çıkarılması gerekir.",
                  "Burada ince bir ayrım var. Fırçaladıktan sonra dişler daha temiz hissedilebilir. Diş eti çevresindeki yumuşak plak azalabilir. Fakat sert diş taşı yerinde kalır. Bu yüzden kişi evde temizlik yaptığını sanabilir, ama asıl tabaka duruyor olabilir."
            ]
      },
      {
            "h2": "Evde Diş Taşı Kazımak Zararlı Mı?",
            "paragraphs": [
                  "Evde diş taşı kazımak zararlı olabilir. Diş yüzeyi dışarıdan sert görünse de yanlış baskıya karşı hassastır. Kontrolsüz kazıma, mine yüzeyinde çiziklere ve diş eti yaralanmalarına yol açabilir. Diş eti çizgisinin altına girilmeye çalışıldığında risk daha da artar.",
                  "Aynada görülen açı, ağız içindeki gerçek çalışma alanını tam göstermez. Arka dişlere ulaşmak zordur. Diş eti altındaki taşlar ise evde güvenli biçimde fark edilemez. Bu nedenle kişi fark etmeden diş etini kesebilir veya iltihaplı alanı daha fazla tahriş edebilir.",
                  "İnternette satılan kazıyıcılar da bu riski ortadan kaldırmaz. Aletin varlığı, işlemin güvenli yapılabileceği anlamına gelmez. Diş taşı temizliği yalnızca taşın koparılması değildir. Diş yüzeyinin düzgünleştirilmesi ve diş eti dokusunun korunması da gerekir."
            ]
      },
      {
            "h2": "Karbonat, Sirke Veya Limon Diş Taşını Temizler Mi?",
            "paragraphs": [
                  "Karbonat, sirke, limon veya tuz gibi yöntemler diş taşını güvenli şekilde temizlemez. Bazıları kısa süreli temizlik hissi verebilir. Ancak sertleşmiş diş taşını kökten çözmeleri beklenmez.",
                  "Asidik karışımlar diş minesini tahriş edebilir. Aşındırıcı malzemeler ise diş yüzeyini pürüzlendirebilir. Pürüzlü yüzeylerde plak daha kolay tutunabilir. Bu da uzun vadede yeni diş taşı oluşumunu artırabilir.",
                  "Dişleri daha beyaz göstermek için kullanılan sert karışımlar da dikkat gerektirir. Renklenme ile diş taşı aynı şey değildir. Renk lekesi yüzeysel olabilir, diş taşı ise sert ve yapışkan bir tabakadır. Yanlış yöntem, taşı temizlemeden hassasiyet oluşturabilir."
            ]
      },
      {
            "h2": "Diş Taşı Kendiliğinden Düşer Mi?",
            "paragraphs": [
                  "Diş taşının küçük parçalar halinde kırılıp ayrıldığı durumlar olabilir. Fakat bu güvenli bir temizlik anlamına gelmez. Taşın bir bölümü düşerken geride pürüzlü artıklar kalabilir. Diş eti altında kalan kısım fark edilmeden devam edebilir.",
                  "Kendiliğinden kopan sert parçalar, genellikle uzun süredir biriken taşları düşündürür. Bu durumda diş eti çevresinde plak tutulumunun fazla olması mümkündür. Kanama, kötü koku veya diş eti çekilmesi eşlik ediyorsa değerlendirme geciktirilmemelidir.",
                  "Diş taşının kendi kendine düşmesini beklemek doğru bir yaklaşım değildir. Çünkü bu süreçte diş eti dokusu tahriş olabilir. İltihap ilerlerse dişleri destekleyen dokular da etkilenebilir."
            ]
      },
      {
            "h2": "Diş Taşı Belirtileri Nelerdir?",
            "paragraphs": [
                  "Diş taşı her zaman ağrı yapmaz. Bu yüzden kişi uzun süre fark etmeyebilir. En sık görülen belirtilerden biri diş eti çizgisinde sert ve pütürlü bir tabaka hissidir. Dil özellikle alt ön dişlerin arkasında bu sertliği kolayca algılayabilir.",
                  "Diş taşı olan bölgede sarı veya kahverengi birikimler görülebilir. Ağız kokusu, kötü tat, diş eti kanaması ve kızarıklık da eşlik edebilir. Bazı kişiler fırçalama sırasında kanama fark eder. Bu durum çoğu zaman diş etinin tahriş olduğunu gösterir.",
                  "Diş eti çekilmesi de önemli bir işarettir. Dişler eskisinden daha uzun görünüyorsa diş eti desteği azalmış olabilir. Bu durumda yalnızca görünen taşlar değil, diş eti altındaki birikimler de değerlendirilmelidir."
            ]
      },
      {
            "h2": "Diş Taşı Temizliği Nasıl Yapılır?",
            "paragraphs": [
                  "Diş taşı temizliği profesyonel ağız ve diş temizliği sırasında yapılır. İşlemde diş yüzeyine tutunan sert birikimler uzaklaştırılır. Zor ulaşılan ara bölgeler ve diş eti kenarları da temizlenir. Temizlik sonrası yüzeyler parlatılabilir. Bu, plağın yeniden tutunmasını azaltmaya yardımcı olabilir.",
                  "Diş eti altında birikim varsa daha derin temizlik gerekebilir. Bu işlemde diş kökü çevresindeki plak, taş ve bakteri yükü azaltılır. Amaç, iltihaplı dokuların daha sağlıklı hale gelmesine destek olmaktır. Diş eti kanaması, şişlik veya ileri cep oluşumu varsa bu yaklaşım değerlendirilebilir.",
                  "Temizlik sonrası hafif hassasiyet yaşanabilir. Özellikle diş eti çekilmesi olan kişilerde sıcak ve soğuk hassasiyeti görülebilir. Genellikle geçicidir. Uzayan ağrı, durmayan kanama veya belirgin şişlik olduğunda kontrol gerekir."
            ]
      },
      {
            "h2": "Evde Yapılabilecek Güvenli Bakım Nedir?",
            "paragraphs": [
                  "Evde yapılabilecek en doğru şey, diş taşını kazımaya çalışmak değil, plak birikimini azaltmaktır. Bunun için düzenli ve doğru fırçalama önemlidir. Genel öneriler, dişlerin günde iki kez florürlü macunla iki dakika fırçalanmasını destekler.",
                  "Ara yüz temizliği de ihmal edilmemelidir. Çünkü fırça kılları dişlerin arasına tam ulaşamaz. Diş ipi, ara yüz fırçası veya uygun yardımcı ürünler plak kontrolüne destek olabilir. Hangi aracın daha uygun olduğu ağız yapısına göre değişir.",
                  "Fırçalama sırasında diş eti çizgisi nazikçe temizlenmelidir. Çok sert bastırmak daha iyi temizlik sağlamaz. Aksine diş eti çekilmesi ve hassasiyet riskini artırabilir. Orta yumuşaklıkta fırça ve kontrollü hareketler genellikle daha güvenlidir."
            ]
      },
      {
            "h2": "Diş Taşı Oluşumu Nasıl Azaltılır?",
            "paragraphs": [
                  "Diş taşı oluşumunu azaltmak için plak her gün düzenli temizlenmelidir. Özellikle alt ön dişlerin iç yüzeyi ve üst azı dişlerinin dış yüzeyi daha hızlı taşlanabilir. Çünkü tükürük bezlerine yakın alanlarda mineral birikimi daha yoğundur.",
                  "Şekerli ve yapışkan gıdaların sık tüketilmesi plak oluşumunu artırabilir. Öğün aralarında sürekli atıştırmak da ağız içindeki bakteri aktivitesini canlı tutar. Bol su içmek, ağız kuruluğunu azaltmaya destek olabilir. Ağız kuruluğu olan kişilerde plak daha kolay birikebilir.",
                  "Tütün kullanımı diş taşı ve renklenme riskini artırabilir. Ayrıca diş eti dokularının sağlığını olumsuz etkileyebilir. Bu nedenle diş taşı problemi sık tekrarlıyorsa günlük alışkanlıklar da gözden geçirilmelidir."
            ]
      },
      {
            "h2": "Diş Taşı Temizliği Dişlere Zarar Verir Mi?",
            "paragraphs": [
                  "Uygun şekilde yapılan diş taşı temizliği dişlere zarar vermez. Buradaki yaygın yanılgı, temizlikten sonra dişlerin arası açılmış gibi hissedilmesidir. Aslında uzun süredir orada duran sert birikim kaldırılmıştır. Dil yeni boşluğu fark eder ve kişi bunu diş kaybı gibi algılayabilir.",
                  "Temizlik sonrası diş eti daha sağlıklı hale geldikçe şişlik azalabilir. Bu durumda diş kökleri biraz daha görünür hale gelebilir. Bu, işlemin diş etini erittiği anlamına gelmez. Genellikle önceden var olan iltihap ve çekilme daha belirgin fark edilir.",
                  "Hassasiyet de sık sorulan bir konudur. Diş taşı kalkınca daha önce taşla örtülü alanlar dış uyaranlara açık hale gelebilir. Bu his çoğu kişide zamanla azalır. Uygun bakım ve hassasiyet giderici ürünler destek sağlayabilir."
            ]
      },
      {
            "h2": "Ne Zaman Profesyonel Temizlik Gerekir?",
            "paragraphs": [
                  "Diş eti kanaması, ağız kokusu, sert birikim ve diş eti çekilmesi varsa profesyonel temizlik gerekebilir. Diş taşı gözle görülüyorsa evde bekletmek doğru değildir. Özellikle diş eti altında birikim olduğundan şüpheleniliyorsa kontrol önemlidir.",
                  "Fırçalamanıza rağmen pütürlü his geçmiyorsa bu sertleşmiş taş olabilir. Alt ön dişlerin arkasında kabuk gibi bir tabaka varsa temizlik ihtiyacı artmış olabilir. Diş etlerinde şişlik, hassasiyet veya basınca kanama varsa durum daha ciddiye alınmalıdır.",
                  "Diş taşı temizliği sıklığı kişiye göre değişir. Bazı kişilerde altı ayda bir yeterli olabilir. Bazılarında daha sık takip gerekebilir. Diş eti hastalığı geçmişi, tütün kullanımı, ağız kuruluğu ve yoğun taş birikimi bu aralığı etkileyebilir."
            ]
      },
      {
            "h2": "Evde Diş Taşı Temizliği İçin En Güvenli Yaklaşım",
            "paragraphs": [
                  "Evde diş taşı temizliği denildiğinde hedef, sert taşı koparmak olmamalıdır. En güvenli yaklaşım, diş taşını oluşturan plağı düzenli uzaklaştırmaktır. Oluşmuş taş için ise profesyonel temizlik gerekir.",
                  "Metal aletlerle kazıma, limonlu karışımlar, sirke, tuz veya aşırı karbonat kullanımı güvenli çözüm değildir. Bu yöntemler diş etini tahriş edebilir ve mine yüzeyini yıpratabilir. Daha iyi görünen bir temizlik hissi, gerçek diş taşı temizliği anlamına gelmez.",
                  "Diş taşı fark edildiğinde yapılacak en doğru şey, bölgeyi kurcalamadan ağız bakımını düzenli sürdürmektir. Kanama, ağrı, kötü koku veya diş eti çekilmesi varsa değerlendirme alınmalıdır. Evde bakım koruyucudur, fakat sertleşmiş diş taşını güvenli şekilde temizleyen yöntem profesyonel temizliktir."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
  {
    slug: "hollywood-gulumsemesi-nasil-cikti",
    title: "Hollywood Gülümsemesi Nasıl Çıktı?",
    description: "Hollywood gülümsemesinin tarihi, ünlülerin gülüş dönüşümleri ve estetik diş hekimliğindeki yeri.",
    category: "Estetik Diş",
    date: "2026-02-08",
    readMinutes: 6,
  image: "/images/blog/hollywood-gulumsemesi-nasil-cikti.webp",
    body: [
      {
            "h2": "Hollywood Gülümsemesi İlk Olarak Nerede Ortaya Çıktı?",
            "paragraphs": [
                  "Hollywood gülümsemesi kavramı, adını Amerikan sinema endüstrisinin merkezi olan Hollywood'dan alır. Özellikle 20. yüzyılın ilk yarısında sinema oyuncularının ekranda kusursuz görünmesi bekleniyordu. Kamera ışıkları, siyah beyaz görüntü tekniği ve yakın plan sahneler, dişlerin yüz estetiğindeki rolünü belirginleştirdi.",
                  "O dönemde oyuncuların yüzleri sadece oyunculuklarıyla değil, görünümleriyle de hafızalara kazınıyordu. Geniş, temiz, parlak ve dengeli bir gülüş; ekran karizmasının önemli parçası haline geldi. Böylece estetik diş görünümü, sahne ve kamera önünde profesyonel imajın tamamlayıcı unsurlarından biri oldu."
            ]
      },
      {
            "h2": "Sinema Işıkları Diş Estetiğini Nasıl Etkiledi?",
            "paragraphs": [
                  "Eski film setlerinde kullanılan güçlü ışıklar, yüzdeki küçük detayları daha görünür hale getiriyordu. Dişlerdeki renk farklılıkları, çapraşıklıklar veya yüzey pürüzleri kamera önünde daha belirgin durabiliyordu. Bu nedenle oyuncular için daha düzgün ve parlak bir gülüş ihtiyacı doğdu.",
                  "Siyah beyaz filmlerde kontrast çok önemliydi. Açık renkli, düzgün sıralanmış dişler ekranda daha temiz ve etkileyici görünüyordu. Bu estetik beklenti zamanla yalnızca oyuncularla sınırlı kalmadı. Toplumda güzel gülüş algısı da bu görsel dilden etkilenmeye başladı."
            ]
      },
      {
            "h2": "İlk Hollywood Gülüşü Uygulamaları Nasıldı?",
            "paragraphs": [
                  "Hollywood gülüşünün ilk uygulamaları bugünkü kadar gelişmiş değildi. Erken dönemlerde oyuncuların dişlerini kamera önünde daha düzgün göstermek için geçici kaplamalar kullanılıyordu. Bu kaplamalar genellikle çekim süresince takılıyor, günlük yaşamda uzun süre kullanılmıyordu.",
                  "Zamanla malzemeler gelişti. Diş yüzeyine daha doğal görünen, daha kalıcı ve daha ince materyaller uygulanmaya başlandı. Bugünkü Hollywood smile tasarımlarında ise diş rengi, formu, boyu ve yüzle uyumu birlikte planlanır."
            ]
      },
      {
            "h2": "Hollywood Gülümsemesi Neden Popüler Oldu?",
            "paragraphs": [
                  "Hollywood gülümsemesinin popülerleşmesinde ünlü isimlerin etkisi büyüktür. Sinema, televizyon ve daha sonra sosyal medya, estetik gülüş algısını geniş kitlelere taşıdı. İnsanlar ekranda gördükleri simetrik ve parlak gülüşleri kendi görünümleriyle karşılaştırmaya başladı.",
                  "Bu süreçte beyaz dişler; bakım, gençlik, özgüven ve çekicilikle ilişkilendirildi. Elbette herkes için aynı diş formu uygun değildir. Buna rağmen Hollywood gülüşü, estetik diş uygulamaları içinde en bilinen kavramlardan biri haline geldi."
            ]
      },
      {
            "h2": "Hollywood Gülüşü Sadece Beyaz Diş Mi Demektir?",
            "paragraphs": [
                  "Hollywood gülüşü sadece çok beyaz dişler anlamına gelmez. Hatta fazla yapay beyazlık, yüzle uyumsuz olduğunda doğal görünümü bozabilir. Gerçekçi bir gülüş tasarımında dişlerin tonu, kişinin ten rengi ve dudak yapısıyla uyumlu olmalıdır.",
                  "Dişlerin eni, boyu, köşe yapısı ve dizilimi de önemlidir. Bazı yüzlerde daha yuvarlak hatlı dişler doğal durur. Bazı yüzlerde ise daha belirgin ve uzun formlar tercih edilebilir. Yani Hollywood gülümsemesi, standart bir kalıp değil, kişiye göre şekillenen estetik bir yaklaşımdır."
            ]
      },
      {
            "h2": "Günümüzde Hollywood Gülümsemesi Nasıl Uygulanır?",
            "paragraphs": [
                  "Günümüzde Hollywood gülümsemesi için farklı estetik diş uygulamaları kullanılabilir. Diş beyazlatma, porselen lamina, zirkonyum kaplama, diş eti düzenlemesi ve şeffaf plak tedavileri bu sürece dahil olabilir. Hangi yöntemin uygun olduğu, kişinin ağız yapısına göre değişir.",
                  "Bazı kişilerde yalnızca renk düzenlemesi yeterli olabilir. Bazılarında diş formu, dizilim veya diş eti görünümü de ele alınır. Bu yüzden Hollywood smile tasarımı, tek işlemden oluşan basit bir uygulama gibi düşünülmemelidir."
            ]
      },
      {
            "h2": "Hollywood Gülüşünün Temel Özellikleri Nelerdir?",
            "paragraphs": [
                  "Hollywood gülüşünde ilk dikkat çeken özellik dişlerin düzenli görünmesidir. Dişler arasında belirgin boşluklar, aşırı çapraşıklık veya uyumsuz boy farkları bulunmaz. Gülüş hattı genellikle dudak çizgisiyle dengeli ilerler.",
                  "Bir diğer önemli özellik diş rengidir. Parlak ama doğal duran bir beyazlık hedeflenir. Diş etlerinin fazla görünmemesi, dişlerin yüz oranlarıyla uyumlu olması ve gülüş sırasında simetrinin korunması da önem taşır."
            ]
      },
      {
            "h2": "Bu Gülüş Algısı Zamanla Nasıl Değişti?",
            "paragraphs": [
                  "Eskiden Hollywood gülüşü daha gösterişli ve parlak bir görünümle anılıyordu. Çok beyaz, çok düzgün ve fark edilir dişler popülerdi. Günümüzde ise daha doğal sonuçlar öne çıkıyor. İnsanlar estetik bir gülüş isterken yapay görünmekten kaçınmak istiyor.",
                  "Bu nedenle modern Hollywood gülümsemesi, doğallıkla estetik arasında denge kurmaya çalışır. Dişlerin güzel görünmesi kadar, kişinin yüz ifadesini değiştirmemesi de önemlidir. Çünkü başarılı bir gülüş tasarımı, yüzle bütünleştiğinde daha etkileyici durur."
            ]
      },
      {
            "h2": "Hollywood Gülümsemesi Kimler İçin Uygun Olabilir?",
            "paragraphs": [
                  "Diş renginden, diziliminden veya gülüş görünümünden memnun olmayan kişiler bu uygulamaları değerlendirebilir. Özellikle ön dişlerde şekil bozukluğu, renklenme, aşınma veya orantısızlık varsa estetik planlama yapılabilir. Ancak her ağız yapısı aynı yönteme uygun değildir.",
                  "Diş sıkma, diş eti sorunları veya çene kapanış problemleri varsa önce bu durumlar ele alınmalıdır. Aksi halde yalnızca dış görünümü değiştirmek uzun vadede yeterli olmayabilir. Sağlıklı bir temel olmadan yapılan estetik işlemler beklenen sonucu vermeyebilir."
            ]
      },
      {
            "h2": "Hollywood Gülüşü Neden Bu Kadar Akılda Kalıcıdır?",
            "paragraphs": [
                  "Gülümseme, insan yüzünde en hızlı fark edilen ifadelerden biridir. Bu yüzden düzenli ve canlı görünen dişler, ilk izlenimde etkili olabilir. Hollywood gülümsemesi de tam olarak bu algı üzerine kuruludur. Daha açık, enerjik ve bakımlı bir yüz ifadesi hedeflenir.",
                  "Sinema dünyasında başlayan bu estetik anlayış, zamanla günlük yaşama taşındı. Artık yalnızca kamera önündeki kişiler değil, birçok insan daha dengeli bir gülüşe sahip olmak istiyor. Bu nedenle Hollywood smile, estetik diş uygulamaları arasında güçlü bir yer edinmiştir."
            ]
      },
      {
            "h2": "Hollywood Gülümsemesinin Çıkış Noktası Nedir?",
            "paragraphs": [
                  "Hollywood gülümsemesinin çıkış noktası, kamera karşısında daha estetik ve etkileyici görünme ihtiyacıdır. Sinema oyuncularının kusursuz imajı, parlak ve düzenli diş görünümünü popüler hale getirdi. İlk başta geçici çözümlerle başlayan bu anlayış, zaman içinde gelişmiş estetik uygulamalara dönüştü.",
                  "Bugün Hollywood gülümsemesi, yalnızca ünlülerle ilişkilendirilen bir kavram değildir. Kişinin yüzüne yakışan, doğal ve dengeli bir gülüş tasarımı anlamında kullanılır. Asıl amaç, herkes için aynı beyazlığı oluşturmak değil, yüzle uyumlu bir gülüş elde etmektir."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
  {
    slug: "tatli-yerken-dis-agrisi-neden-olur",
    title: "Tatlı Yerken Diş Ağrısı Neden Olur?",
    description: "Tatlı yerken oluşan diş ağrısının nedenleri, hassasiyet mekanizması ve çözüm yöntemleri.",
    category: "Ağız Sağlığı",
    date: "2026-01-28",
    readMinutes: 5,
  image: "/images/blog/tatli-yerken-dis-agrisi-neden-olur.jpg",
    body: [
      {
            "h2": "Dişin Doğal Koruma Kalkanı: Mine Tabakası ve Dentin Kanalları",
            "paragraphs": [
                  "Dişlerimizin anatomik yapısını incelediğinizde, en dışta insan vücudunun en sert maddesi olan mine tabakasını görürsünüz. Mine tabakası, dişin iç kısmındaki hassas sinirleri ve damarları dış dünyadaki tüm fiziksel ve kimyasal etkenlerden koruyan kusursuz bir zırh görevi üstlenir. Ancak bu sert zırh, zaman içinde asitli içecekler, yanlış fırçalama teknikleri veya diş sıkma alışkanlıkları yüzünden aşınarak incelir. Mine tabakası inceldiğinde, hemen altında yer alan ve \"dentin\" adı verilen çok daha yumuşak, delikli bir yapıya sahip olan ikinci tabaka açığa çıkar.",
                  "Dentin tabakasının içi, doğrudan dişin merkezindeki sinir odasına (pulpa) uzanan binlerce mikroskobik kanalla doludur. Açığa çıkan bu kanallar, ağız içine giren her türlü uyarıcıyı doğrudan sinirlere iletir. Şekerli bir gıda tükettiğinizde, şekerin yoğun yapısı ağız içindeki sıvı dengesini aniden değiştirir. Ozmos adı verilen bu fiziksel süreç, dentin kanallarının içindeki sıvının hızla hareket etmesine yol açar. Kanal içindeki bu ani sıvı akışı, dişin merkezindeki sinir uçlarını tetikler ve siz bunu beyninizde elektrik çarpmasına benzer, kısa süreli ama son derece keskin bir sızı olarak hissedersiniz."
            ]
      },
      {
            "h2": "Şekerli Gıdaların Ağız İçi Bakterilerle Yıkıcı Etkileşimi",
            "paragraphs": [
                  "Ağız içiniz, milyonlarca faydalı ve zararlı bakterinin bir arada yaşadığı oldukça hareketli bir ekosistemdir. Siz karbonhidrat veya yoğun şeker içeren bir besin tükettiğinizde, sadece kendinizi değil, aynı zamanda ağzınızdaki zararlı bakterileri de beslemiş olursunuz. Diş yüzeylerine tutunan ve plak adı verilen yapışkan tabakayı oluşturan bu bakteriler, şekeri hızla sindirerek enerjiye çevirir. Bu sindirim sürecinin yan ürünü olarak da son derece güçlü laktik asitler üretirler.",
                  "Üretilen bu asitler, diş minesi üzerinde doğrudan yıkıcı bir etki yaratır. Minenin yapısında bulunan kalsiyum ve fosfat gibi hayati mineraller, asit saldırısı karşısında çözünerek diş yüzeyinden uzaklaşır. Demineralizasyon adı verilen bu mineral kaybı, minenin yüzeyinde gözle görülemeyen mikroskobik çukurlar ve delikler açar. Sürekli olarak şekerli gıdalar tükettiğinizde ve sonrasında ağız hijyenini sağlamadığınızda, bu asit saldırısı kesintisiz bir döngüye dönüşür. Diş minesi kendini onarmaya fırsat bulamadan sürekli erir ve zamanla dişin tüm savunma hattı çökerek o keskin acıyı kalıcı bir hale getirir."
            ]
      },
      {
            "h2": "Gözden Kaçan Çürükler, Çatlaklar ve Sızdıran Dolgular",
            "paragraphs": [
                  "Her zaman aynaya baktığınızda dişlerinizde siyah veya kahverengi bir leke görmek zorunda değilsiniz. Ağız içinde hissettiğiniz rahatsızlıkların çok büyük bir kısmı, gözle doğrudan fark edilemeyen yapısal bozukluklardan kaynaklanır. Özellikle iki dişin tam birleşim noktasında, yani ara yüzlerde başlayan çürükler, dışarıdan bakıldığında tamamen sağlıklı görünen bir dişin içten içe oyulmasına neden olur. Şekerli bir gıda bu gizli çürük boşluğuna sızdığında, hiçbir mine engeline takılmadan doğrudan sinir tabakasına ulaşarak şiddetli bir reaksiyon başlatır.",
                  "Bunun yanı sıra, yıllar önce yaptırdığınız dolguların zamanla mikroskobik düzeyde formunu kaybetmesi de çok yaygın bir sorundur. Çiğneme kuvvetlerine, sıcak-soğuk değişimlerine maruz kalan dolgu materyalleri ile diş dokusu arasındaki bağ zamanla zayıflar ve mikro sızıntı adı verilen ince boşluklar oluşur. Yapışkan kıvamlı bir karamel veya lokum yediğinizde, içindeki şeker bu kılcal boşluklardan sızarak dişin hassas iç dokularına nüfuz eder. Aynı durum, gece uyurken dişlerini sıkan kişilerin minelerinde oluşan mikro çatlaklar için de geçerlidir. Çatlaklardan sızan şekerli yapılar, doğrudan dişin merkezine inerek anlık sızlamaları kaçınılmaz hale getirir."
            ]
      },
      {
            "h2": "Ağrı Krizini Anında Bastırmak İçin Uygulayabileceğiniz Adımlar",
            "paragraphs": [
                  "Keyifli bir tatlı molasında aniden dişinize giren o keskin sızıyla karşılaştığınızda, durumu kontrol altına almak için hemen uygulayabileceğiniz bazı pratik adımlar bulunur. İlk ve en önemli kural, ağız içindeki şeker yoğunluğunu ve asit seviyesini hızla düşürmektir. Tatlı tüketimini derhal bırakmalı ve ağzınızı oda sıcaklığında bol su ile birkaç kez güçlü bir şekilde çalkalamalısınız. Su, diş yüzeyine yapışan şeker artıklarını fiziksel olarak uzaklaştırırken aynı zamanda asidik ortamı nötralize ederek pH dengesini normale döndürür.",
                  "Yapılan en büyük hatalardan biri, diş sızladığı anda koşarak diş fırçalamaya çalışmaktır. Şeker ve asit saldırısı altındaki diş minesi o an için geçici olarak yumuşamış durumdadır. Bu durumdayken sert bir fırçayla dişlere müdahale etmek, zımpara etkisi yaratarak minenin daha da fazla çizilmesine ve aşınmasına yol açar. Fırçalamak için en az 30-40 dakika beklemeli, tükürüğünüzün minesi yeniden sertleştirmesine izin vermelisiniz. Acıyı hafifletmek için bir bardak ılık suya yarım çay kaşığı tuz ekleyerek hazırlayacağınız karışımla gargara yapabilirsiniz. Tuzlu su, diş etlerindeki olası ödemi alarak rahatlatıcı bir etki yaratır ve ağız içindeki bakteri yükünü hızla azaltır."
            ]
      },
      {
            "h2": "Diş Hekimi Koltuğunda Sizi Bekleyen Kalıcı Çözümler",
            "paragraphs": [
                  "Evde uyguladığınız yöntemler anlık rahatlama sağlasa da, dişin yapısındaki fiziksel bir hasarı sizin kendi çabalarınızla onarmanız mümkün değildir. Hassasiyetin kök nedenini bulmak ve kalıcı bir bariyer oluşturmak için mutlaka profesyonel bir diş hekimi muayenesinden geçmelisiniz. Hekiminiz öncelikle detaylı bir klinik muayene ve radyografik görüntüleme yaparak sızlamanın sadece mine aşınmasından mı, yoksa derin bir çürükten mi kaynaklandığını tespit eder.",
                  "Eğer sorun sadece mine aşınması ve dentin kanallarının açığa çıkmasıysa, diş yüzeyine florür vernikleri veya özel hassasiyet giderici ajanlar uygulanır. Bu ajanlar, mikroskobik kanalların ağzını tıkayarak dış etkenlerin sinirlere ulaşmasını tamamen bloke eder. Gözle görülür bir madde kaybı, çatlak veya eski bir dolguda sızıntı varsa, o bölge özenle temizlenir ve dişe biyolojik olarak tam uyum sağlayan kompozit (ışınlı) dolgularla yeniden restore edilir. Eğer çürük çok derinlere inmiş ve dişin sinir dokusunda geri dönüşümsüz bir iltihaba yol açmışsa, dişi ağızda tutmak için kanal tedavisi işlemine başvurulur. Tedavi edilen diş eski fonksiyonuna ve gücüne kavuşurken, tatlı yediğinizde yaşadığınız o korkutucu ağrılar tamamen tarih olur."
            ]
      },
      {
            "h2": "Hassasiyet giderici diş macunları sızlamayı tamamen geçirir mi?",
            "paragraphs": [
                  "Hassasiyet giderici diş macunlarının formülünde bulunan potasyum nitrat gibi özel bileşenler, dentin kanallarını tıkayarak sinir uçlarını yatıştırır. Düzenli olarak sabah ve akşam kullandığınızda birkaç hafta içinde ağrılarda ciddi bir azalma hissedersiniz. Ancak bu macunlar derin bir çürüğü veya kırık bir dolguyu iyileştiremez, sadece yüzeysel mine aşınmalarında kalıcı rahatlama sunar."
            ]
      },
      {
            "h2": "Sadece çikolata veya şerbetli tatlı yediğimde ağrı olması çürük anlamına mı gelir?",
            "paragraphs": [
                  "Doğrudan çürük anlamına gelmese de, çürük oluşumunun çok güçlü bir sinyalidir. Şekerin osmotik basıncı yüksek olduğu için dişin içindeki savunmasız bölgeleri anında tespit eder ve sızlama yaratır. Herhangi bir oyuk veya leke görmeseniz bile, iki dişin arasında başlayan gizli bir çürük bu ağrının temel sorumlusu olabilir."
            ]
      },
      {
            "h2": "Diş ipi kullanımı tatlı yediğimde oluşan hassasiyeti önler mi?",
            "paragraphs": [
                  "Kesinlikle önler. Diş fırçası, dişlerin birbirine temas eden yan yüzeylerine asla ulaşamaz. Şekerli ve yapışkan gıdalar en çok bu dar aralıklarda birikir ve asit üretimine başlar. Düzenli diş ipi kullanımı, bu bölgelerdeki plak ve şeker birikimini sıfıra indirerek ara yüz çürüklerinin ve dolayısıyla hassasiyetin oluşmasını engeller."
            ]
      },
      {
            "h2": "Diş sızlaması için ne zaman mutlaka hekime başvurmalıyım?",
            "paragraphs": [
                  "Tatlı tükettikten sonra ağzınızı çalkaladığınız halde sızlama hemen geçmiyor ve dakikalarca zonklama şeklinde devam ediyorsa, gece uykunuzdan uyandıracak şiddete ulaşıyorsa enfeksiyon sinirlere inmiş demektir. Bu durumda vakit kaybetmeden, enfeksiyon çene kemiğine yayılmadan hekiminizden randevu almalısınız."
            ]
      }
],
    relatedLinks: [{"href":"/hizmetler/","label":"Tüm Tedavilerimiz"},{"href":"/iletisim/","label":"İletişim"}],
    faq: [{"question":"Bu konuda kliniğinize nasıl ulaşabilirim?","answer":"7/24 açık kliniğimizi 0532 438 13 03 numarasından arayabilir veya online randevu sayfamızdan randevu oluşturabilirsiniz."}],
  },
];

/** avrupadis.com'da olmayan, bizim özel blog yazılarımız. Sitemap ve dizinlerden gizlenir, doğrudan URL ile erişilebilir. */
export const HIDDEN_POST_SLUGS: ReadonlySet<string> = new Set([
  "20-yas-disi-agrisi-ve-cekimi",
  "bayramda-acik-dis-hekimi-bulma-rehberi",
  "cocuklarda-dis-travmasi-acil-mudahale",
  "dis-agrisi-neden-olur-evde-nasil-gecer",
  "dis-apsesi-belirtileri-ve-mudahale",
  "dis-beyazlatma-islemi-kalici-midir",
  "dis-eti-kanamasi-nedenleri-ve-cozumleri",
  "dis-implanti-kimler-icin-uygundur",
  "gece-dis-agrisi-ne-yapmali",
  "gulus-tasarimi-emax-lamine-nedir",
  "implant-fiyatlari-2026-rehberi",
  "implant-maliyeti-ne-kadar",
  "kanal-tedavisi-ne-kadar-surer",
  "pazar-gunu-acik-dis-klinigi-nasil-bulunur",
  "protez-dis-mi-implant-mi",
  "zirkonyum-vs-porselen-kapama",
]);

export const isPostHidden = (slug: string): boolean => HIDDEN_POST_SLUGS.has(slug);

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
