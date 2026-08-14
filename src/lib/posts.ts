export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readMinutes: number;
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul 7/24 Acil Diş Hastanesi" },
      { href: "/kadikoy-24-saat-acik-disci/", label: "Kadıköy Nöbetçi Dişçi" },
      { href: "/iletisim/", label: "İletişim" },
    ],
    faq: [
      {
        question: "Diş ağrısı için evde ne yapabilirim?",
        answer: "Tuzlu su ile gargara, soğuk kompres ve karanfil yağı kısa süreli rahatlama sağlar. Ancak kalıcı çözüm için mutlaka diş hekimine görünmelisiniz.",
      },
      {
        question: "Gece diş ağrısı için nereyi aramalıyım?",
        answer: "7/24 açık nöbetçi diş kliniğimizi 0533 582 82 79 numarasından arayabilirsiniz.",
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
          "Kliniğimiz İstanbul'un merkezi noktalarına yakın konumuyla gece, pazar ve bayram dahil kesintisiz hizmet verir. 0533 582 82 79 numarasını aradığınızda size en yakın nöbetçi diş hekimine yönlendirme yapılır.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/anadolu-yakasi-24-saat-acik-disci/", label: "Anadolu Yakası Nöbetçi Dişçi" },
      { href: "/avrupa-yakasi-24-saat-acik-disci/", label: "Avrupa Yakası Nöbetçi Dişçi" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul Acil Diş" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "7/24 Acil Diş" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul Acil Diş Hastanesi" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul 7/24 Diş" },
      { href: "/kadikoy-24-saat-acik-disci/", label: "Kadıköy Nöbetçi Dişçi" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul Acil Diş" },
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
          "Kliniğimiz haftanın 7 günü açıktır. Pazar günü diş ağrınız için 0533 582 82 79 numarasını arayabilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/semtler/", label: "İstanbul Nöbetçi Dişçiler" },
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul 7/24 Diş" },
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
          "İstanbul'un herhangi bir semtinde bayramda diş ağrısı yaşarsanız 0533 582 82 79 numaralı hattımızı arayabilirsiniz.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul 7/24 Acil Diş" },
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
      { href: "/istanbul-24-saat-acik-disci/", label: "İstanbul 7/24 Acil Diş" },
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
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
