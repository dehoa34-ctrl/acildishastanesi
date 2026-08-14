import type { Service } from "@/lib/services";

/**
 * Hizmetlere özgün görsel + detaylı içerik + özgün SSS + ilgili hizmetler.
 * Her hizmetin kendine ait benzersiz, özgün Türkçe içerik metinleri.
 */
export const serviceContent: Record<string, {
  image: string;
  body: Service["body"];
  faq: Service["faq"];
  related: Service["related"];
}> = {
  "acil-dis-tedavisi": {
    image: "/images/servis/cekim-hero.webp",
    body: [
      {
        h2: "Gece Diş Ağrısında Ne Yapılmalı?",
        paragraphs: [
          "Diş ağrısı, çürük, diş eti iltihabı, apse veya diş travması gibi pek çok nedenden kaynaklanabilir. Özellikle gece saatlerinde ağrının şiddetlenmesi, yatar pozisyonda baş bölgesindeki kan basıncının artmasından kaynaklanır. Bu durum, zonklayıcı ağrının daha dayanılmaz hissedilmesine yol açar.",
          "Ağrı başladığında bölgeye dışarıdan soğuk kompres uygulayabilir, ılık tuzlu su ile gargara yapabilirsiniz. Ancak bu yöntemler yalnızca geçicidir. Ağrının kaynağı olan çürük veya iltihap mutlaka profesyonel müdahale gerektirir.",
        ],
      },
      {
        h2: "Acil Diş Müdahalesi Nasıl Yapılır?",
        paragraphs: [
          "Kliniğimize geldiğinizde öncelikle ağrılı bölge muayene edilir ve gerekirse röntgen alınır. Acil dolgu, kanal tedavisi, çekim veya apse drenajı aynı seansta uygulanabilir. Amacımız ağrınızı dindirip dişinizi mümkün olduğunca korumaktır.",
          "Gece, pazar ve bayram dahil 7/24 açık olan kliniğimizde randevu beklemeden acil kabul yapılır. Nöbetçi diş hekimimiz her an hazırdır.",
        ],
      },
      {
        h2: "Diş Ağrısı Ne Zaman Ciddiye Alınmalı?",
        paragraphs: [
          "Yüzde şişlik, ateş, yutma güçlüğü veya diş etinden iltihap akması gibi belirtiler apse habercisi olabilir ve acil müdahale gerektirir. Bu belirtileri fark ettiğinizde vakit kaybetmeden bize ulaşın.",
          "Ağrınız ne olursa olsun, erken müdahale her zaman daha basit ve ekonomik bir tedavi anlamına gelir. Diş ağrısını bekletmek diş kaybına kadar gidebilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Acil diş muayenesi randevusuz yapılır mı?",
        answer: "Evet. Acil durumlarda randevu şartı aranmaz, 7/24 açık kliniğimize bekletmeden kabul edilirsiniz.",
      },
      {
        question: "Gece diş ağrısı için ne zaman aramalıyım?",
        answer: "Ağrı şiddetliyse, şişlik oluştuysa veya dişiniz kırıldıysa hemen arayın. Nöbetçi diş hekimimiz aynı gece müdahale eder.",
      },
    ],
    related: ["kanal-tedavisi", "dis-cekimi", "dis-dolgusu"],
  },
  "dis-cekimi": {
    image: "/images/servis/cekim-hero.webp",
    body: [
      {
        h2: "Diş Çekimi Hangi Durumlarda Gerekir?",
        paragraphs: [
          "Diş çekimi; kurtarılamayacak kadar hasar görmüş çürük dişler, ilerlemiş diş eti hastalığı, kırık dişler ve çene yapısına zarar veren gömülü dişlerde uygulanır. Amaç her zaman önce dişi kurtarmaktır; çekim son çaredir.",
          "Modern diş hekimliğinde diş çekimi lokal anestezi ile tamamen ağrısız bir işlemdir. İşlem süresi genellikle 15-30 dakika arasındadır.",
        ],
      },
      {
        h2: "Çekim Sonrası İyileşme Süreci",
        paragraphs: [
          "Çekim sonrası ilk 24 saat kanama ve hafif şişlik normaldir. Bölgeye soğuk kompres uygulamak, dinlenmek ve hekimin önerdiği ilaçları kullanmak iyileşmeyi hızlandırır.",
          "İlk gün sıcak yiyecek ve içeceklerden, sigaradan ve sert gıdalardan kaçınılmalıdır. Kanama uzun süre devam ederse veya şiddetli ağrı olursa hekime başvurulmalıdır.",
        ],
      },
      {
        h2: "Çekilen Dişin Yerine Ne Yapılmalı?",
        paragraphs: [
          "Çekilen dişin yerinin boş bırakılması, komşu dişlerin kaymasına ve çene kemiğinin erimesine yol açabilir. Bu yüzden implant veya protez ile eksiklik en kısa sürede giderilmelidir.",
          "Kliniğimizde çekim sonrası implant ve protez seçenekleri hakkında size özel planlama yapılır.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş çekimi ağrılı mıdır?",
        answer: "Hayır. Lokal anestezi ile işlem sırasında ağrı hissedilmez; sonrasında hafif ağrı ilaçla kontrol altına alınır.",
      },
      {
        question: "Diş çekimi ne kadar sürer?",
        answer: "Basit çekimler 15-30 dakika, cerrahi çekimler ise 30-60 dakika sürer.",
      },
    ],
    related: ["dis-implant-fiyatlari", "20lik-dis-cekimi", "acil-dis-tedavisi"],
  },
  "20lik-dis-cekimi": {
    image: "/images/servis/20lik-hero.webp",
    body: [
      {
        h2: "20 Yaş Dişi Neden Ağrır?",
        paragraphs: [
          "20 yaş dişleri ağızda yer kalmadığında gömülü kalabilir veya yanlış açıyla çıkabilir. Bu durum diş etinde iltihaplanma, çevre dişlere baskı ve şiddetli ağrıya neden olur.",
          "Yarı gömülü 20 yaş dişleri temizlenemediği için bakteri birikimine açıktır; tekrarlayan enfeksiyonlar ve kötü ağız kokusu yapabilir.",
        ],
      },
      {
        h2: "20'lik Diş Çekimi Nasıl Yapılır?",
        paragraphs: [
          "Muayene ve röntgen sonrası dişin konumu değerlendirilir. Basit 20'lik dişler lokal anestezi ile kolayca çekilir; gömülü dişlerde cerrahi müdahale gerekebilir.",
          "Genç yaşta yapılan çekimlerde iyileşme daha hızlıdır. Bu yüzden 20 yaş civarında kontrol önerilir.",
        ],
      },
      {
        h2: "Çekim Sonrası Dikkat Edilmesi Gerekenler",
        paragraphs: [
          "İlk 24 saat kanama ve şişlik normaldir. Soğuk kompres, dinlenme ve önerilen ilaçlar süreci rahatlatır. Sigara ve sert yiyeceklerden kaçınılmalıdır.",
          "İyileşme genellikle 1-2 hafta içinde tamamlanır. Şiddetli ağrı, ateş veya uzamış kanama durumunda hekime başvurulmalıdır.",
        ],
      },
    ],
    faq: [
      {
        question: "20'lik diş çekimi ne kadar sürer?",
        answer: "Basit çekimler 20-30 dakika, gömülü dişlerde 45-60 dakika sürebilir.",
      },
      {
        question: "20'lik diş çekilmeli mi?",
        answer: "Ağrı, iltihap veya çevre dişlere zarar riski varsa çekim önerilir.",
      },
    ],
    related: ["gomulu-20lik-dis-cekimi", "komplikasyonlu-dis-cekimi", "dis-cekimi"],
  },
  "gomulu-20lik-dis-cekimi": {
    image: "/images/servis/gomulu-hero.webp",
    body: [
      {
        h2: "Gömülü 20'lik Diş Nedir?",
        paragraphs: [
          "Gömülü 20'lik diş, diş eti veya çene kemiği içinde tamamen kalmış diştir. Ağrı yapmayabilir ancak kist oluşumu, çevre dişlerde çürüme ve iltihap riski taşır.",
          "Röntgen ile tespit edilen gömülü dişler, koruyucu amaçla çekim gerektirebilir.",
        ],
      },
      {
        h2: "Cerrahi Çekim Nasıl Yapılır?",
        paragraphs: [
          "Gömülü diş çekimi, diş etinin açılıp dişin parçalara ayrılarak çıkarıldığı cerrahi bir işlemdir. Lokal anestezi yeterlidir; gereken durumlarda sedasyon uygulanabilir.",
          "3D röntgen ile dişin sinire ve komşu dişlere yakınlığı önceden planlanır, böylece risk en aza indirilir.",
        ],
      },
      {
        h2: "Sonrası Nasıl Geçer?",
        paragraphs: [
          "İlk 24-48 saat şişlik ve hafif ağrı normaldir. Soğuk kompres ve önerilen ilaçlar yeterlidir. Dikişler genellikle 1 hafta sonra alınır.",
          "Tam iyileşme 2 haftayı bulur. Bu süreçte ağız hijyenine dikkat edilmelidir.",
        ],
      },
    ],
    faq: [
      {
        question: "Gömülü 20'lik diş çekimi acıtır mı?",
        answer: "Lokal anestezi ile işlem sırasında ağrı hissedilmez; sonrası ilaçla rahat geçer.",
      },
      {
        question: "Gömülü diş çekilmek zorunda mı?",
        answer: "Kist, ağrı veya çevre dişlere zarar riski varsa çekim önerilir.",
      },
    ],
    related: ["20lik-dis-cekimi", "cerrahi-uygulamalar", "sinus-lifting"],
  },
  "komplikasyonlu-dis-cekimi": {
    image: "/images/servis/komplikasyon-hero.webp",
    body: [
      {
        h2: "Komplikasyonlu Diş Çekimi Nedir?",
        paragraphs: [
          "Bazı dişlerin kökleri eğri, kırık veya çevre dokulara yapışık olabilir. Standart çekim yöntemiyle çıkarılamayan bu dişler için cerrahi müdahale gerekir.",
          "Kök ucu kırılan dişler, aşırı kavisli kökler ve yoğun kalsifikasyon gösteren kanallar komplikasyonlu çekim gerektiren durumlardır.",
        ],
      },
      {
        h2: "İşlem Nasıl Uygulanır?",
        paragraphs: [
          "Öncelikle röntgen ile dişin ve köklerin durumu incelenir. Diş eti açılarak diş, gerekirse parçalara ayrılarak dikkatli bir şekilde çıkarılır.",
          "Deneyimli cerrah kadromuz, komplikasyonlu vakalarda komşu dokulara zarar vermeden güvenli müdahale eder.",
        ],
      },
      {
        h2: "İyileşme Süreci",
        paragraphs: [
          "Cerrahi çekim sonrası şişlik ve ağrı normaldir; önerilen ilaçlarla kontrol altına alınır. İlk gün soğuk kompres uygulanmalıdır.",
          "Dikişler 1 hafta sonra alınır, tam iyileşme 1-2 hafta sürer.",
        ],
      },
    ],
    faq: [
      {
        question: "Komplikasyonlu çekim daha mı riskli?",
        answer: "Uzman cerrah ve röntgen planlamasıyla risk minimuma indirilir.",
      },
      {
        question: "Kök kırığı durumunda diş çıkarılır mı?",
        answer: "Evet, kırık kökler cerrahi yöntemle güvenle çıkarılır.",
      },
    ],
    related: ["dis-cekimi", "gomulu-20lik-dis-cekimi", "cerrahi-uygulamalar"],
  },
  "sut-dis-cekimi": {
    image: "/images/servis/sut-dis-hero.webp",
    body: [
      {
        h2: "Süt Dişi Çekimi Ne Zaman Gerekir?",
        paragraphs: [
          "Süt dişleri kendiliğinden düşmez veya derin çürük nedeniyle kurtarılamazsa çekim gerekebilir. Ayrıca kalıcı dişin önünü tıkayan sallanan süt dişleri de çekilebilir.",
          "Süt dişi çekimi, çocuğun konforunu ön planda tutan özel bir yaklaşım gerektirir.",
        ],
      },
      {
        h2: "Çocuk Dostu Yaklaşım",
        paragraphs: [
          "Pedodonti uzmanlarımız, çocuklara yönelik yumuşak ve sabırlı bir iletişim kurar. İşlem öncesi her aşama çocuğun anlayacağı dille anlatılır, böylece korku ve kaygı en aza indirilir.",
          "Gerekmedikçe süt dişi çekimi yapılmaz; koruyucu tedavilerle dişin doğal düşme zamanına kadar korunması hedeflenir.",
        ],
      },
      {
        h2: "Sonrası Bakım",
        paragraphs: [
          "Çekim sonrası çocuğun 2 saat bir şey yememesi ve ilk gün sıcak gıdalardan kaçınması önerilir. Kanama durumunda steril gazlı bezle hafif bastırılarak durdurulur.",
          "Kalıcı diş sağlığı için düzenli pedodonti kontrolleri önemlidir.",
        ],
      },
    ],
    faq: [
      {
        question: "Süt dişi çekimi çocuğa zarar verir mi?",
        answer: "Hayır. Deneyimli pedodonti hekimi ile çocuk dostu ve güvenli bir işlemdir.",
      },
      {
        question: "Süt dişi çürüğü beklenmeli mi?",
        answer: "Hayır. Erken müdahale, alttaki kalıcı dişin sağlığını korur.",
      },
    ],
    related: ["cocuk-dis", "dis-dolgusu", "dis-cekimi"],
  },
  "dis-implant-fiyatlari": {
    image: "/images/servis/implant-hero.webp",
    body: [
      {
        h2: "İmplant Fiyatını Belirleyen Faktörler",
        paragraphs: [
          "İmplant fiyatları; kullanılan marka, implant sayısı, çene kemiği durumu, ek cerrahi işlemler ve üst yapı (kron) malzemesine göre değişir. Tek dişten tam çene implantlara kadar maliyet farklıdır.",
          "Kemik erimesi yaşayan hastalarda kemik grefti veya sinus lifting gerekebilir. Bu ek işlemler toplam maliyeti etkiler ancak başarılı sonuç için kritik önemdedir.",
        ],
      },
      {
        h2: "Marka Seçenekleri ve Kalite",
        paragraphs: [
          "Alman, Kore, İsviçre menşeli ve Straumann implantlar en yaygın seçeneklerdir. Kore malı implantlar ekonomik, İsviçre ve Straumann üst segment kalite sunar.",
          "İmplant seçerken sadece fiyata odaklanmak hata olur; sertifikalı marka ve deneyimli hekim birlikte değerlendirilmelidir.",
        ],
      },
      {
        h2: "İmplant Ne Kadar Dayanır?",
        paragraphs: [
          "Doğru uygulandığında ve düzenli bakım yapıldığında implantlar 25-35 yıl kullanılabilir. Sigara ve kötü ağız hijyeni ömrü kısaltabilir.",
          "İmplant, uzun vadede en ekonomik ve doğal diş çözümüdür.",
        ],
      },
    ],
    faq: [
      {
        question: "2026'da implant fiyatları ne kadar?",
        answer: "Marka ve işleme göre 3.000-12.000 TL arasında değişir; muayene ile netleşir.",
      },
      {
        question: "En iyi implant markası hangisi?",
        answer: "Alman, İsviçre ve Straumann markaları klinik olarak en çok tercih edilenlerdir.",
      },
    ],
    related: ["all-on-four-implant", "bir-gunde-implant", "sinus-lifting"],
  },
  "all-on-four-implant": {
    image: "/images/servis/implant-hero.webp",
    body: [
      {
        h2: "All On Four Nedir?",
        paragraphs: [
          "All On Four, dişsiz bir çeneye yerleştirilen dört implant üzerine sabit bir protezin vidalanması esasına dayanır. Hareketli protez derdi olmadan sabit ve konforlu bir gülüş sağlar.",
          "Özellikle tam dişsizlik yaşayan hastalar için geleneksel tam protezlere üstün bir alternatiftir.",
        ],
      },
      {
        h2: "Kimler İçin Uygundur?",
        paragraphs: [
          "Tüm dişlerini kaybetmiş veya mevcut dişleri çekilecek hastalar için uygundur. Kemik erimesi olan hastalarda bile özel açılı implantlar sayesinde çoğu zaman kemik grefti gerekmeden uygulanabilir.",
          "Hasta değerlendirmesi röntgen ve muayene ile yapılır.",
        ],
      },
      {
        h2: "Tedavi Süreci",
        paragraphs: [
          "İmplantlar yerleştirildikten sonra aynı seansta geçici sabit dişler takılabilir. İyileşme dönemi sonrası kalıcı sabit protez ile tedavi tamamlanır.",
          "Sonuç, doğal görünümlü ve uzun ömürlü sabit bir gülüştür.",
        ],
      },
    ],
    faq: [
      {
        question: "All On Four kimlere yapılır?",
        answer: "Tam dişsizlik yaşayan hastalara; kemik erimesi olsa bile çoğu zaman uygulanabilir.",
      },
      {
        question: "All On Four tek seansta biter mi?",
        answer: "İmplantlar tek seansta yerleştirilir, geçici dişler aynı gün takılır.",
      },
    ],
    related: ["dis-implant-fiyatlari", "bir-gunde-implant", "protez-takma-dis-fiyatlari"],
  },
  "bir-gunde-implant": {
    image: "/images/servis/implant-hero.webp",
    body: [
      {
        h2: "Bir Günde İmplant Nedir?",
        paragraphs: [
          "Bir günde implant; diş çekimi, implant vidasının yerleştirilmesi ve geçici dişlerin takılmasının aynı seansta yapıldığı hızlı bir tedavidir.",
          "Böylece estetik kaygı yaşamadan kısa sürede sabit dişlere kavuşursunuz.",
        ],
      },
      {
        h2: "Nasıl Uygulanır?",
        paragraphs: [
          "3D dijital planlama ile implantın ideal konumu belirlenir. Çürük dişler aynı seansta çekilir, implant yerleştirilir ve üzerine geçici dişler takılır.",
          "İyileşme süreci sonrası kalıcı kronlarla tedavi tamamlanır.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Aynı gün dişsiz kalmazsınız, estetik bekleme dönemi olmaz. İmplant sayısı ve üst yapıya göre kişiye özel planlama yapılır.",
          "Hızlı sonuç ve yüksek hasta memnuniyeti sağlar.",
        ],
      },
    ],
    faq: [
      {
        question: "Bir günde implant gerçekten aynı gün mü?",
        answer: "Evet, çekim + implant + geçici diş aynı seansta yapılır.",
      },
      {
        question: "Herkese bir günde implant yapılır mı?",
        answer: "Uygunluk muayene ve röntgen ile belirlenir; çoğu hastada uygulanabilir.",
      },
    ],
    related: ["dis-implant-fiyatlari", "all-on-four-implant", "dis-cekimi"],
  },
  "sinus-lifting": {
    image: "/images/servis/sinus-hero.webp",
    body: [
      {
        h2: "Sinus Lifting Nedir?",
        paragraphs: [
          "Sinus lifting, üst çene arka bölgesine implant yerleştirmek için sinüs boşluğunu yükselterek kemik hacmini artıran bir işlemdir.",
          "Kemik yetersizliği olan hastalarda implant tedavisinin ön koşuludur.",
        ],
      },
      {
        h2: "Nasıl Uygulanır?",
        paragraphs: [
          "Açık ve kapalı (kapalı sinüs kaldırma) teknik olmak üzere iki yöntemle uygulanır. Sinüs tabanı yükseltilerek boşluğa kemik grefti yerleştirilir.",
          "3D röntgen ile planlama yapılır; işlem lokal anestezi ile konforlu şekilde tamamlanır.",
        ],
      },
      {
        h2: "İyileşme Süreci",
        paragraphs: [
          "İşlem sonrası birkaç gün hafif şişlik ve burun tıkanıklığı olabilir. Kemik kaynaması için 4-6 ay beklenir, ardından implant yerleştirilir.",
          "Uzman cerrah kadromuz tüm süreci yakından takip eder.",
        ],
      },
    ],
    faq: [
      {
        question: "Sinus lifting ağrılı mıdır?",
        answer: "Lokal anestezi ile yapılır; sonrası hafif şişlik ilaçla kontrol edilir.",
      },
      {
        question: "Sinus lifting sonrası ne zaman implant yapılır?",
        answer: "Kemik kaynaması için genellikle 4-6 ay beklenir.",
      },
    ],
    related: ["dis-implant-fiyatlari", "cerrahi-uygulamalar", "gomulu-20lik-dis-cekimi"],
  },
  "gulus-tasarimi": {
    image: "/images/servis/lamine-hero.webp",
    body: [
      {
        h2: "Gülüş Tasarımı Nedir?",
        paragraphs: [
          "Gülüş tasarımı; dişlerin rengi, şekli, boyutu ve diş eti çizgisi bütün olarak değerlendirilerek kişiye özel estetik bir gülüş planlanmasıdır.",
          "Dijital smile design sayesinde sonucu önceden görebilir, ön izleme ile karar verebilirsiniz.",
        ],
      },
      {
        h2: "Nasıl Uygulanır?",
        paragraphs: [
          "Önce yüz ve gülüş analizi yapılır, dijital planlama oluşturulur. Lamine, Emax veya zirkonyum gibi malzemelerle planlanan tasarım uygulanır.",
          "Süreç genellikle 3 gün içinde tamamlanabilir.",
        ],
      },
      {
        h2: "Kimler İçin Uygundur?",
        paragraphs: [
          "Dişlerinde renk, şekil, boyut veya dizilim sorunu olan herkese uygulanabilir. Gülüşünden memnun olmayan ve estetik beklentisi olan hastalar için idealdir.",
          "Amaç, yüz hatlarıyla uyumlu doğal ve sağlıklı bir görünümdür.",
        ],
      },
    ],
    faq: [
      {
        question: "Gülüş tasarımı ne kadar sürer?",
        answer: "Genellikle 3 gün içinde tamamlanır; diş sayısına göre değişir.",
      },
      {
        question: "Gülüş tasarımı kimlere yapılır?",
        answer: "Renk, şekil ve dizilim sorunu yaşayan herkese kişiye özel uygulanır.",
      },
    ],
    related: ["lamine-emax-kaplama-dis-fiyatlari", "emax-dis-kaplama", "dis-beyazlatma"],
  },
  "dis-beyazlatma": {
    image: "/images/servis/beyazlatma-hero.webp",
    body: [
      {
        h2: "Diş Beyazlatma Nedir?",
        paragraphs: [
          "Diş beyazlatma; kahve, çay, sigara ve yaşlanma kaynaklı renklenmelerin giderilmesini sağlar. Ofis tipi lazer beyazlatma tek seansta birkaç ton aydınlatır.",
          "Ev tipi şeffaf plaklı beyazlatma ise kademeli ve ekonomik bir alternatiftir.",
        ],
      },
      {
        h2: "Kalıcı mıdır?",
        paragraphs: [
          "Diş beyazlatma kalıcı değildir ancak doğru bakımla 6 ay ile 2 yıl arasında etkisini korur. Kahve, çay ve sigara tüketimi süreyi kısaltabilir.",
          "Yılda bir yapılan bakım beyazlatmalarıyla gülüşünüz uzun süre parlak kalabilir.",
        ],
      },
      {
        h2: "Dişlere Zarar Verir mi?",
        paragraphs: [
          "Uzman hekim kontrolünde yapıldığında diş minesine zarar vermez. Ofis tipi uygulamada diş eti koruyucu jel ile kaplanarak güvenli uygulanır.",
          "İşlem sonrası birkaç gün geçici hassasiyet normaldir.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş beyazlatma ne kadar sürede belli olur?",
        answer: "Ofis tipi beyazlatmada sonuç tek seansta görülür.",
      },
      {
        question: "Diş beyazlatma dişlere zarar verir mi?",
        answer: "Uzman kontrolünde yapıldığında diş minesine zarar vermez.",
      },
    ],
    related: ["gulus-tasarimi", "dental-bonding", "dis-tedavisi-fiyatlari"],
  },
  "dental-bonding": {
    image: "/images/servis/bonding-hero.webp",
    body: [
      {
        h2: "Dental Bonding Nedir?",
        paragraphs: [
          "Dental bonding; kırık, çatlak, renklenmiş veya aralıklı dişlerin kompozit reçine ile tek seansta estetik şekilde onarılmasıdır.",
          "Diş kesimi gerektirmeyen, ekonomik ve hızlı bir estetik çözümdür.",
        ],
      },
      {
        h2: "Nasıl Uygulanır?",
        paragraphs: [
          "Diş yüzeyine pürüzlendirme yapılır, kompozit reçine tabaka tabaka uygulanarak şekillendirilir ve özel ışıkla sertleştirilir. Son adımda parlatma ile doğal görünüm kazandırılır.",
          "Tüm işlem tek seansta, genellikle 30-60 dakikada tamamlanır.",
        ],
      },
      {
        h2: "Ne Kadar Dayanır?",
        paragraphs: [
          "Dental bonding 3-10 yıl arasında dayanabilir; süre ağız alışkanlıklarına ve bakıma bağlıdır. Renklenme veya kırılma durumunda kolayca yenilenebilir.",
          "Ön dişlerde küçük kusurların düzeltilmesinde en pratik yöntemdir.",
        ],
      },
    ],
    faq: [
      {
        question: "Bonding diş kesimi gerektirir mi?",
        answer: "Hayır, bonding diş kesmeden uygulanır.",
      },
      {
        question: "Dental bonding ne kadar dayanır?",
        answer: "Doğru bakımla 3-10 yıl arasında dayanır.",
      },
    ],
    related: ["dis-dolgusu", "gulus-tasarimi", "kirik-dis-tedavisi"],
  },
  "dis-eti-estetigi": {
    image: "/images/servis/pembe-estetik-hero.webp",
    body: [
      {
        h2: "Pembe Estetik Nedir?",
        paragraphs: [
          "Pembe estetik; diş etlerinin sağlıklı, simetrik ve estetik bir görünüme kavuşturulması için yapılan tedavilerdir. Gülümserken fazla görünen diş eti bu alanda düzeltilir.",
          "Diş eti şekillendirme, gülüş hattı düzenleme ve diş eti büyümesi tedavileri bu kapsamdadır.",
        ],
      },
      {
        h2: "Nasıl Uygulanır?",
        paragraphs: [
          "Lazer destekli diş eti şekillendirme ile ağrısız ve kanamasız müdahale yapılır. Diş eti fazlalığı cerrahi veya lazerle düzeltilir.",
          "İşlem sonrası iyileşme hızlıdır; gülüş hattındaki denge geri kazanılır.",
        ],
      },
      {
        h2: "Kimler İçin Uygundur?",
        paragraphs: [
          "Gülümserken aşırı diş eti görünen, diş eti büyümesi olan veya asimetrik gülüş hattından şikayet eden hastalar için uygundur.",
          "Gülüş tasarımıyla birlikte uygulanarak en iyi estetik sonuç elde edilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş eti estetiği ağrılı mıdır?",
        answer: "Lazer uygulamada ağrı ve kanama minimumdur; iyileşme hızlıdır.",
      },
      {
        question: "Diş eti estetiği kimlere uygulanır?",
        answer: "Gülüş hattı bozuk olan ve diş eti fazlalığı yaşayan hastalara uygulanır.",
      },
    ],
    related: ["gulus-tasarimi", "periodontoloji", "lamine-emax-kaplama-dis-fiyatlari"],
  },
  "inlay-onlay-overlay-dolgular": {
    image: "/images/servis/inlay-hero.webp",
    body: [
      {
        h2: "Inlay / Onlay Nedir?",
        paragraphs: [
          "Inlay, onlay ve overlay dolgular; büyük çürüklerin laboratuvarda hazırlanan porselen veya kompozit parçalarla onarıldığı modern restorasyonlardır.",
          "Dişin sağlıklı dokusu korunur ve doğal görünümlü, dayanıklı bir sonuç elde edilir.",
        ],
      },
      {
        h2: "Normal Dolgudan Farkı",
        paragraphs: [
          "Inlay/onlay dolgular dişe yapıştırılarak uygulanır ve büyük çürüklerde klasik dolgudan daha dayanıklıdır. Ayrıca dişin tamamını kaplayan kaplamaya gerek kalmadan diş korunur.",
          "Laboratuvar ortamında hassas üretim sayesinde mükemmel uyum sağlar.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Diş dokusunu korur, estetik görünüm sağlar ve uzun ömürlüdür. Porselen seçeneği doğal diş rengine birebir uyum gösterir.",
          "İki seansta tamamlanır; ölçü alınır, laboratuvarda hazırlanır ve ikinci seansta yapıştırılır.",
        ],
      },
    ],
    faq: [
      {
        question: "Inlay dolgu kaç seansta biter?",
        answer: "Genellikle 2 seansta tamamlanır.",
      },
      {
        question: "Inlay mı dolgu mu daha dayanıklı?",
        answer: "Büyük çürüklerde inlay/onlay dolgular daha dayanıklıdır.",
      },
    ],
    related: ["dis-dolgusu", "kron-dis-kaplama", "lamine-emax-kaplama-dis-fiyatlari"],
  },
  "lamine-emax-kaplama-dis-fiyatlari": {
    image: "/images/servis/lamine-hero.webp",
    body: [
      {
        h2: "Lamine Diş Nedir?",
        paragraphs: [
          "Lamine, dişin ön yüzeyine uygulanan çok ince bir yaprak porselendir. Minene minimal müdahale ile diş şekli, rengi ve boyutu düzeltilir.",
          "Emax malzeme, ışık geçirgenliği sayesinde gerçek dişten ayırt edilemeyen sonuçlar sunar.",
        ],
      },
      {
        h2: "Fiyatı Belirleyen Faktörler",
        paragraphs: [
          "Lamine ve Emax fiyatları; diş sayısına, malzeme kalitesine ve gülüş tasarımına göre değişir. Dijital planlama ile net fiyat muayene sonrası belirlenir.",
          "Ön diş estetiğinde en çok tercih edilen çözümlerden biridir.",
        ],
      },
      {
        h2: "Ne Kadar Dayanır?",
        paragraphs: [
          "Doğru uygulama ve bakımla lamine dişler 10-15 yıl kullanılabilir. Diş sıkma ve sert cisim ısırma lamineye zarar verebilir.",
          "Düzenli kontrollerle ömrü uzatılabilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Lamine diş ne kadar dayanır?",
        answer: "Doğru bakımla 10-15 yıl kullanılabilir.",
      },
      {
        question: "Lamine diş ağrılı mıdır?",
        answer: "Hayır, minimal diş kesimi ile konforlu bir işlemdir.",
      },
    ],
    related: ["gulus-tasarimi", "emax-dis-kaplama", "dis-beyazlatma"],
  },
  "emax-dis-kaplama": {
    image: "/images/servis/emax-hero.webp",
    body: [
      {
        h2: "Emax Kaplama Nedir?",
        paragraphs: [
          "Emax, lityum disilikat porselenden üretilen yüksek estetik değere sahip bir kaplama malzemesidir. Işık geçirgenliği sayesinde doğal dişe en yakın görünümü sağlar.",
          "Özellikle ön diş estetiğinde tercih edilir; metal içermez.",
        ],
      },
      {
        h2: "Neden Emax Tercih Edilir?",
        paragraphs: [
          "Doğal ışık geçirgenliği, metal içermeyen biyouyumlu yapısı ve mükemmel estetik sonucu ile öne çıkar. Diş eti uyumu da üst düzeydedir.",
          "Hem kaplama hem lamine formunda üretilebilir.",
        ],
      },
      {
        h2: "Ne Kadar Dayanır?",
        paragraphs: [
          "Düzenli bakımla Emax kaplamalar 10-15 yıl kullanılabilir. Dayanıklılığı ve estetiği bir arada sunar.",
          "Ön dişlerde ve tek diş restorasyonlarında idealdir.",
        ],
      },
    ],
    faq: [
      {
        question: "Emax mı zirkonyum mu?",
        answer: "Estetikte Emax öne çıkar; dayanıklılıkta zirkonyum. Hekim önerisiyle seçilir.",
      },
      {
        question: "Emax kaplama ömrü ne kadar?",
        answer: "Doğru bakımla 10-15 yıl kullanılabilir.",
      },
    ],
    related: ["lamine-emax-kaplama-dis-fiyatlari", "zirkonyum-kaplama-dis-fiyatlari", "kron-dis-kaplama"],
  },
  "porselen-dis-kaplama-fiyatlari": {
    image: "/images/servis/lamine-hero.webp",
    body: [
      {
        h2: "Porselen Kaplama Nedir?",
        paragraphs: [
          "Porselen kaplama; hasarlı veya estetik olarak yetersiz dişlerin üzerine uygulanan dayanıklı ve doğal görünümlü restorasyondur.",
          "Metal destekli veya tam porselen seçenekleriyle hem ön hem arka dişlerde kullanılır.",
        ],
      },
      {
        h2: "Fiyatı Etkileyen Faktörler",
        paragraphs: [
          "Kaplama tipi, kullanılan malzeme ve diş sayısı fiyatı belirler. Metal destekli porselen ekonomik, zirkonyum ve Emax daha yüksek fiyatlıdır.",
          "Muayene sonrası net fiyat teklifi verilir.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Dayanıklı, doğal görünümlü ve dişe tam uyumlu sonuç verir. Kırık, renklenmiş ve çürük dişlerde güvenle uygulanır.",
          "7/24 acil kaplama onarımı da kliniğimizde yapılmaktadır.",
        ],
      },
    ],
    faq: [
      {
        question: "Porselen kaplama ne kadar dayanır?",
        answer: "Doğru bakımla 10-15 yıl kullanılabilir.",
      },
      {
        question: "Porselen mi zirkonyum mu?",
        answer: "Estetik ve dayanıklılık beklentisine göre hekim önerisiyle seçilir.",
      },
    ],
    related: ["zirkonyum-kaplama-dis-fiyatlari", "emax-dis-kaplama", "kron-dis-kaplama"],
  },
  "zirkonyum-kaplama-dis-fiyatlari": {
    image: "/images/servis/zirkonyum-hero.webp",
    body: [
      {
        h2: "Zirkonyum Kaplama Nedir?",
        paragraphs: [
          "Zirkonyum, metal içermeyen ve vücutla tam uyumlu yüksek teknoloji bir kaplama malzemesidir. Işık geçirgenliği ve doğal rengi sayesinde gülüş estetiğinde en çok tercih edilenlerdendir.",
          "Alerjik reaksiyon riski yok denecek kadar azdır.",
        ],
      },
      {
        h2: "Fiyatı Belirleyen Faktörler",
        paragraphs: [
          "Zirkonyum fiyatları; marka, katman sayısı ve diş sayısına göre değişir. CAD/CAM teknolojisi ile hassas üretim yapılır.",
          "İmplant üstü zirkonyum kronlar da uygulanmaktadır.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "%100 metal içermeyen biyouyumlu yapı, doğal ışık geçirgenliği ve üstün diş eti uyumu sağlar. Dayanıklılığı ile arka dişlerde de güvenle kullanılır.",
          "Uzun ömürlü ve estetik bir yatırımdır.",
        ],
      },
    ],
    faq: [
      {
        question: "Zirkonyum kaplama ömrü ne kadar?",
        answer: "Düzenli bakımla 10-15 yıl ve üzeri kullanılabilir.",
      },
      {
        question: "Zirkonyum mu daha estetik porselen mi?",
        answer: "Zirkonyum, metal içermemesi ve ışık geçirgenliğiyle daha avantajlıdır.",
      },
    ],
    related: ["porselen-dis-kaplama-fiyatlari", "emax-dis-kaplama", "dis-implant-fiyatlari"],
  },
  "metal-dis-kaplama": {
    image: "/images/servis/kron-hero.webp",
    body: [
      {
        h2: "Metal Destekli Porselen Nedir?",
        paragraphs: [
          "Metal destekli porselen; metal altyapı üzerine porselen uygulanan, dayanıklılığı ve ekonomikliği ile bilinen klasik kaplama yöntemidir.",
          "Özellikle arka dişlerde çiğneme kuvvetlerine dayanıklı sonuç verir.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Uzun yıllık klinik geçmişi, ekonomik maliyeti ve yüksek dayanıklılığı ile öne çıkar. Köprülerde de güvenle kullanılır.",
          "Kısa üretim süresi sayesinde hızlı sonuç alınır.",
        ],
      },
      {
        h2: "Estetik Değerlendirme",
        paragraphs: [
          "Metal destekli kaplamalar diş eti hizasında ince koyu bir çizgi oluşturabilir; bu durum ön dişlerde estetik kaygı yaratabilir. Bu yüzden ön dişlerde zirkonyum veya Emax önerilir.",
          "Arka dişler için ekonomik ve dayanıklı bir tercihtir.",
        ],
      },
    ],
    faq: [
      {
        question: "Metal destekli porselen dayanıklı mı?",
        answer: "Evet, arka dişlerde yüksek dayanıklılık sunar.",
      },
      {
        question: "Metal destekli kaplama estetik mi?",
        answer: "Arka dişlerde uygundur; ön dişlerde zirkonyum/Emax önerilir.",
      },
    ],
    related: ["kron-dis-kaplama", "zirkonyum-kaplama-dis-fiyatlari", "protetik-dis-tedavisi"],
  },
  "kron-dis-kaplama": {
    image: "/images/servis/kron-hero.webp",
    body: [
      {
        h2: "Kron Kaplama Nedir?",
        paragraphs: [
          "Kron, hasar görmüş veya zayıflamış bir dişin tamamını sararak koruyan ve güçlendiren sabit bir restorasyondur.",
          "Kanal tedavisi görmüş dişlerde ve büyük çürüklerde dişin ömrünü uzatmak için uygulanır.",
        ],
      },
      {
        h2: "Hangi Durumlarda Gerekir?",
        paragraphs: [
          "Kanal tedavili dişlerde, büyük dolgu sonrası zayıflamış dişlerde, kırık dişlerde ve estetik nedenlerle uygulanır.",
          "Zirkonyum, Emax ve porselen seçenekleri ile dişe tam uyum sağlar.",
        ],
      },
      {
        h2: "Tedavi Süreci",
        paragraphs: [
          "Diş ölçüsü alınır, laboratuvarda hazırlanan kron ikinci seansta yapıştırılır. CAD/CAM ile aynı gün kaplama da mümkündür.",
          "Doğal renk ve form ile uzun ömürlü koruma sağlar.",
        ],
      },
    ],
    faq: [
      {
        question: "Kron kaplama ne kadar sürer?",
        answer: "Genellikle 2 seans; CAD/CAM ile aynı gün de mümkündür.",
      },
      {
        question: "Kron mu dolgu mu?",
        answer: "Dişin büyük bölümü kaybolmuşsa kron, küçük hasarda dolgu uygundur.",
      },
    ],
    related: ["metal-dis-kaplama", "zirkonyum-kaplama-dis-fiyatlari", "dis-dolgusu"],
  },
  "dis-dolgusu": {
    image: "/images/servis/kanal-hero.webp",
    body: [
      {
        h2: "Diş Dolgusu Nedir?",
        paragraphs: [
          "Diş dolgusu; çürük nedeniyle hasar gören diş dokusunun temizlenip özel dolgu malzemesiyle onarılmasıdır. Estetik kompozit dolgular doğal diş rengindedir.",
          "Tek seansta tamamlanan ağrısız bir işlemdir.",
        ],
      },
      {
        h2: "Dolgu Çeşitleri",
        paragraphs: [
          "Kompozit dolgular estetik ve ekonomiktir; porselen (inlay) dolgular daha dayanıklıdır. Ön dişlerde estetik kompozit, arka dişlerde dayanıklı kompozit önerilir.",
          "Malzeme seçimi çürüğün büyüklüğüne ve dişin konumuna göre yapılır.",
        ],
      },
      {
        h2: "Dolgu Ne Kadar Dayanır?",
        paragraphs: [
          "Kompozit dolgular doğru bakımla 5-10 yıl dayanır. Düzenli kontrol ile dolgunun ömrü uzatılır.",
          "Ağız hijyeni ve diş sıkma alışkanlığı dolgu ömrünü etkiler.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş dolgusu ağrılı mıdır?",
        answer: "Lokal anestezi ile ağrısız uygulanır.",
      },
      {
        question: "Dolgu ne kadar dayanır?",
        answer: "Doğru bakımla kompozit dolgular 5-10 yıl dayanır.",
      },
    ],
    related: ["kanal-tedavisi", "inlay-onlay-overlay-dolgular", "dis-cekimi"],
  },
  "kanal-tedavisi": {
    image: "/images/servis/kanal-hero.webp",
    body: [
      {
        h2: "Kanal Tedavisi Nedir?",
        paragraphs: [
          "Kanal tedavisi; derin çürük veya travma nedeniyle iltihaplanan diş sinirinin temizlenip doldurulmasıyla dişin kurtarılmasıdır.",
          "Modern anestezi ve cihazlarla ağrısız yapılır ve diş kaybını önler.",
        ],
      },
      {
        h2: "Ne Zaman Gerekir?",
        paragraphs: [
          "Gece başlayan zonklayıcı ağrı, sıcağa/soğuğa uzun süreli hassasiyet ve diş etinde şişlik kanal tedavisi ihtiyacının belirtileridir. Tedavi edilmezse apse ve diş kaybı kaçınılmaz olabilir.",
          "Erken müdahale dişi kurtarır.",
        ],
      },
      {
        h2: "Kaç Seans Sürer?",
        paragraphs: [
          "Kanal tedavisi genellikle 1-3 seansta tamamlanır. Modern cihazlarla birçok kanal tedavisi tek seansta bitirilebilir.",
          "Tedavi sonrası dişe koruyucu kaplama önerilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Kanal tedavisi ağrılı mıdır?",
        answer: "Lokal anestezi ile işlem sırasında ağrı hissedilmez.",
      },
      {
        question: "Kanal tedavisi tek seansta biter mi?",
        answer: "Modern yöntemlerle birçok vakada evet; enfeksiyonlu vakalarda 2-3 seans gerekebilir.",
      },
    ],
    related: ["dis-dolgusu", "acil-dis-tedavisi", "kron-dis-kaplama"],
  },
  "ortodonti": {
    image: "/images/servis/ortodonti-hero.webp",
    body: [
      {
        h2: "Ortodonti Nedir?",
        paragraphs: [
          "Ortodonti; çapraşık, aralıklı ve kapanış bozukluğu olan dişlerin düzeltilmesini sağlayan diş hekimliği dalıdır.",
          "Metal, seramik ve şeffaf plak seçenekleriyle her yaştan hastaya uygun tedavi planlanır.",
        ],
      },
      {
        h2: "Tedavi Ne Kadar Sürer?",
        paragraphs: [
          "Ortodontik tedavi genellikle 12-24 ay sürer; süre çapraşıklığın derecesine bağlıdır. Tedavi sonrası pekiştirme (retainer) dönemi önemlidir.",
          "Düzenli kontrol randevuları ile süreç takip edilir.",
        ],
      },
      {
        h2: "Yetişkinlerde Uygulanır mı?",
        paragraphs: [
          "Evet. Görünmeyen şeffaf plaklar ve estetik seramik braketler sayesinde yetişkinler de konforlu ortodonti yaptırabilir.",
          "Çene gelişimi tamamlanmış olsa bile dişler her yaşta düzeltilebilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Ortodonti ne kadar sürer?",
        answer: "Genellikle 12-24 ay; duruma göre değişir.",
      },
      {
        question: "Yetişkinlere diş teli takılır mı?",
        answer: "Evet, şeffaf plak ve estetik braket seçenekleriyle uygulanır.",
      },
    ],
    related: ["dis-teli-tedavisi", "seffaf-plak", "gulus-tasarimi"],
  },
  "dis-teli-tedavisi": {
    image: "/images/servis/dis-teli-hero.webp",
    body: [
      {
        h2: "Diş Teli Tedavisi Nedir?",
        paragraphs: [
          "Diş teli tedavisi; çapraşık ve hizalı olmayan dişlerin braket ve ark telleri yardımıyla düzeltilmesidir.",
          "Metal braketler ekonomik, seramik braketler estetik açıdan avantajlıdır.",
        ],
      },
      {
        h2: "Tedavi Süreci",
        paragraphs: [
          "Braketler dişlere yapıştırılır, ark teli ile düzenli kuvvet uygulanarak dişler yavaşça hizalanır. Aylık kontrol randevuları ile tedavi ilerler.",
          "Tedavi sonrası pekiştirme apareyi ile sonuç korunur.",
        ],
      },
      {
        h2: "Ağrı ve Konfor",
        paragraphs: [
          "İlk hafta ve her tel sıkılaştırmada hafif bir baskı hissi normaldir; birkaç gün içinde geçer. Günümüz teknolojisi ile tedavi oldukça konforludur.",
          "Metal veya şeffaf braket seçimi hasta tercihine göre yapılır.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş teli takmak ağrılı mıdır?",
        answer: "İlk günler hafif baskı hissedilir; kısa sürede geçer.",
      },
      {
        question: "Diş teli ne kadar süre kalır?",
        answer: "Genellikle 12-24 ay arasında değişir.",
      },
    ],
    related: ["ortodonti", "seffaf-plak", "gulus-tasarimi"],
  },
  "seffaf-plak": {
    image: "/images/servis/seffaf-hero.webp",
    body: [
      {
        h2: "Şeffaf Plak Tedavisi Nedir?",
        paragraphs: [
          "Şeffaf plak (telsiz ortodonti), dişleri yavaşça hizalayan şeffaf ve çıkarılabilir plaklarla yapılan estetik bir tedavidir.",
          "Diş tellerinin görünümünden çekinen yetişkinler için ideal bir seçenektir.",
        ],
      },
      {
        h2: "Nasıl Çalışır?",
        paragraphs: [
          "Dijital ölçü ile dişlerinizi sanal olarak planlanır; her 1-2 haftada bir yeni bir plak seti ile dişler hedef konuma taşınır.",
          "Plaklar yemek ve fırçalama sırasında çıkarılabilir, bu da ağız hijyenini kolaylaştırır.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Görünmez, çıkarılabilir ve konforludur. Tedavi süresi hafif çapraşıklıklarda 6-12 ay arasındadır.",
          "Günlük yaşamı etkilemeden estetik diş düzeltme imkânı sunar.",
        ],
      },
    ],
    faq: [
      {
        question: "Şeffaf plak tedavisi ne kadar sürer?",
        answer: "Hafif vakalarda 6-12 ay; duruma göre değişir.",
      },
      {
        question: "Şeffaf plak mı diş teli mi?",
        answer: "Estetik ve konfor için şeffaf plak; ağır vakalarda diş teli önerilir.",
      },
    ],
    related: ["ortodonti", "dis-teli-tedavisi", "dijital-dis-hekimligi"],
  },
  "cocuk-dis": {
    image: "/images/servis/pedodonti-hero.webp",
    body: [
      {
        h2: "Çocuk Diş Hekimliği (Pedodonti) Nedir?",
        paragraphs: [
          "Pedodonti, 0-13 yaş arası çocukların ağız ve diş sağlığıyla ilgilenen uzmanlık dalıdır.",
          "Çocuk dostu yaklaşımımızla süt diş dolgusu, flor uygulaması, fissür örtücü ve diş travmalarına müdahale konforlu şekilde yapılır.",
        ],
      },
      {
        h2: "Neden Pedodonti Uzmanı?",
        paragraphs: [
          "Çocukların diş hekiminden korkmaması için özel iletişim teknikleri kullanılır. Süt dişleri tedavi edilirken alttaki kalıcı dişlerin sağlığı da korunur.",
          "Koruyucu uygulamalar ile çocuklukta diş çürüğü büyük ölçüde önlenebilir.",
        ],
      },
      {
        h2: "Koruyucu Tedaviler",
        paragraphs: [
          "Flor verniği ve fissür örtücü uygulamaları çürüğe karşı koruma sağlar. Düzenli 6 aylık kontrollerle çocuğunuzun diş gelişimi takip edilir.",
          "Diş travmalarında hızlı müdahale kalıcı dişlerin kurtarılması için kritiktir.",
        ],
      },
    ],
    faq: [
      {
        question: "Çocuk ne zaman diş hekimine gitmeli?",
        answer: "İlk diş çıktığında veya 1 yaşında ilk muayene önerilir.",
      },
      {
        question: "Çocuk diş kliniği gece açık mı?",
        answer: "Evet, çocuk diş travmalarında gece dahil 7/24 hizmet veriyoruz.",
      },
    ],
    related: ["sut-dis-cekimi", "dis-dolgusu", "kirik-dis-tedavisi"],
  },
  "protez-takma-dis-fiyatlari": {
    image: "/images/servis/protetik-hero.webp",
    body: [
      {
        h2: "Protez Diş Nedir?",
        paragraphs: [
          "Protez diş; eksik dişlerin yerine takılan hareketli veya sabit yapılardır. Akrilik (takma diş), metal destekli ve implant üstü protezler en yaygın çeşitlerdir.",
          "Tam protezler tüm dişlerin eksik olduğu durumlarda kullanılır.",
        ],
      },
      {
        h2: "Fiyatı Belirleyen Faktörler",
        paragraphs: [
          "Protez fiyatları; protez tipi, çene durumu ve malzeme kalitesine göre değişir. Akrilik tam protezler en ekonomik seçenektir.",
          "İmplant üstü protezler daha yüksek maliyetli ancak çok daha konforludur.",
        ],
      },
      {
        h2: "Konfor ve Uyum",
        paragraphs: [
          "İlk kullanımda alışma süreci gerekir; birkaç hafta içinde çoğu hasta tam uyum sağlar. Gerekirse hassas tutucularla tutuculuk artırılır.",
          "Düzenli kontrol ile protezlerin ömrü ve konforu korunur.",
        ],
      },
    ],
    faq: [
      {
        question: "Takma diş ile rahat yemek yenir mi?",
        answer: "İmplant üstü protezler daha konforludur; klasik takma dişlerde alışma süreci gerekir.",
      },
      {
        question: "Protez diş ne kadar dayanır?",
        answer: "Düzenli bakımla 5-10 yıl kullanılabilir.",
      },
    ],
    related: ["protetik-dis-tedavisi", "dis-implant-fiyatlari", "all-on-four-implant"],
  },
  "protetik-dis-tedavisi": {
    image: "/images/servis/protetik-hero.webp",
    body: [
      {
        h2: "Protetik Diş Tedavisi Nedir?",
        paragraphs: [
          "Protetik diş tedavisi; eksik dişlerin protezlerle, hasarlı dişlerin ise kron ve köprülerle restore edilmesidir.",
          "Sabit ve hareketli protez seçenekleri hastanın ihtiyacına göre planlanır.",
        ],
      },
      {
        h2: "Tedavi Planlaması",
        paragraphs: [
          "Ağız muayenesi ve ölçü sonrası en uygun protetik çözüm belirlenir. Laboratuvar destekli üretim ile dişe tam uyum sağlanır.",
          "Estetik ve fonksiyonel ihtiyaçlar birlikte değerlendirilir.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "Çiğneme fonksiyonunu geri kazandırır, konuşmayı düzeltir ve özgüveni artırır. Modern malzemelerle doğal görünüm elde edilir.",
          "İmplant destekli protetik çözümler hareketli protez sorununu ortadan kaldırır.",
        ],
      },
    ],
    faq: [
      {
        question: "Protetik tedavi ne kadar sürer?",
        answer: "Protez tipine göre 2-4 seans arasında değişir.",
      },
      {
        question: "Sabit mi hareketli mi protez?",
        answer: "Diş sayısı ve kemik durumuna göre hekim önerisiyle belirlenir.",
      },
    ],
    related: ["protez-takma-dis-fiyatlari", "kron-dis-kaplama", "dis-implant-fiyatlari"],
  },
  "cerrahi-uygulamalar": {
    image: "/images/servis/cerrahi-hero.webp",
    body: [
      {
        h2: "Ağız, Diş ve Çene Cerrahisi Nedir?",
        paragraphs: [
          "Ağız, diş ve çene cerrahisi; gömülü dişlerin çekimi, kist ve tümörlerin çıkarılması, diş ve çene kırıkları, implant cerrahisi gibi işlemleri kapsar.",
          "Uzman cerrah kadromuz modern tekniklerle güvenli müdahale eder.",
        ],
      },
      {
        h2: "Hangi İşlemler Yapılır?",
        paragraphs: [
          "Gömülü 20'lik diş çekimi, kemik grefti, sinus lifting, apse drenajı, kist çıkarılması ve implant cerrahisi başlıca uygulamalardır.",
          "Cerrahi öncesi 3D röntgen ile detaylı planlama yapılır.",
        ],
      },
      {
        h2: "Konfor ve Güvenlik",
        paragraphs: [
          "Lokal anestezi, gerektiğinde sedasyon seçenekleriyle işlemler konforlu geçer. Ameliyat sonrası detaylı bakım talimatı verilir.",
          "Deneyimli ekip ve steril koşullar güveni garanti eder.",
        ],
      },
    ],
    faq: [
      {
        question: "Çene cerrahisi kimlere uygulanır?",
        answer: "Gömülü diş, kist, çene kırığı ve implant ihtiyacı olan hastalara uygulanır.",
      },
      {
        question: "Cerrahi işlemler ağrılı mıdır?",
        answer: "Anestezi altında yapılır; sonrası ilaçla rahat geçer.",
      },
    ],
    related: ["gomulu-20lik-dis-cekimi", "sinus-lifting", "dis-implant-fiyatlari"],
  },
  "kirik-dis-tedavisi": {
    image: "/images/servis/bonding-hero.webp",
    body: [
      {
        h2: "Kırık Diş Tedavisi Nedir?",
        paragraphs: [
          "Kırık diş tedavisi; çatlamış veya kırılmış dişin yapısını ve işlevini onarmak için uygulanan diş hekimliği yöntemidir.",
          "Bonding, dolgu veya kaplama ile dişin doğal görünümü ve fonksiyonu geri kazandırılır.",
        ],
      },
      {
        h2: "Hangi Yöntem Uygulanır?",
        paragraphs: [
          "Küçük kırıklarda bonding veya dolgu; büyük kırıklarda kaplama; kök kırıklarında ise kanal tedavisi sonrası kron uygulanır.",
          "Hasarın boyutuna göre en uygun tedavi hekim tarafından belirlenir.",
        ],
      },
      {
        h2: "Acil Kırık Diş",
        paragraphs: [
          "Kırık parçayı süt veya salin içinde saklayarak hızla kliniğe gelin. Özellikle çocuklarda ve ön dişlerde hızlı müdahale kritik önem taşır.",
          "Gece ve hafta sonu dahil acil kırık diş müdahalesi yapıyoruz.",
        ],
      },
    ],
    faq: [
      {
        question: "Kırık diş onarılabilir mi?",
        answer: "Evet, kırığın boyutuna göre bonding, dolgu veya kaplama ile onarılır.",
      },
      {
        question: "Diş kırılınca ne yapmalıyım?",
        answer: "Kırık parçayı saklayıp en kısa sürede diş hekimine başvurun.",
      },
    ],
    related: ["dental-bonding", "dis-dolgusu", "kron-dis-kaplama"],
  },
  "periodontoloji": {
    image: "/images/servis/pembe-estetik-hero.webp",
    body: [
      {
        h2: "Periodontoloji (Diş Eti Tedavisi) Nedir?",
        paragraphs: [
          "Periodontoloji, dişleri çevreleyen diş eti ve destek dokuların sağlığıyla ilgilenen uzmanlık dalıdır.",
          "Diş eti kanaması, iltihap, çekilme ve kötü ağız kokusu tedavi edilmezse diş kaybına yol açabilir.",
        ],
      },
      {
        h2: "Diş Eti Hastalığının Belirtileri",
        paragraphs: [
          "Fırçalama sırasında kanama, kızarık ve şiş diş etleri, ağız kokusu, diş eti çekilmesi ve dişlerde sallanma başlıca belirtilerdir.",
          "Erken evrede basit temizlikle tedavi mümkündür; ileri evrede cerrahi gerekebilir.",
        ],
      },
      {
        h2: "Tedavi Yöntemleri",
        paragraphs: [
          "Diş taşı temizliği, kök yüzeyi düzeltme, lazer destekli tedavi ve gerektiğinde cerrahi uygulamalar yapılır. Düzenli bakım ile diş eti sağlığı korunur.",
          "Sigara bırakma ve doğru fırçalama tedavinin başarısında kritiktir.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş eti kanaması normal mi?",
        answer: "Hayır, diş eti iltihabının belirtisidir ve tedavi gerektirir.",
      },
      {
        question: "Diş eti tedavisi ne kadar sürer?",
        answer: "Duruma göre 1-3 seans arasında değişir.",
      },
    ],
    related: ["dis-eti-estetigi", "acil-dis-tedavisi"],
  },
  "dijital-dis-hekimligi": {
    image: "/images/servis/dijital-hero.webp",
    body: [
      {
        h2: "Dijital Diş Hekimliği Nedir?",
        paragraphs: [
          "Dijital diş hekimliği; CAD/CAM teknolojisi, 3D röntgen ve dijital gülüş tasarımı ile tedavileri daha hızlı, hassas ve konforlu hale getirir.",
          "Dijital ölçü alma sayesinde geleneksel ölçü macunlarına gerek kalmaz.",
        ],
      },
      {
        h2: "Avantajları",
        paragraphs: [
          "CAD/CAM ile aynı gün kaplama üretimi, 3D tomografi ile hassas implant planlaması ve dijital gülüş tasarımı ile ön izleme imkânı sunar.",
          "Tedavi süreleri kısalır, konfor ve hassasiyet artar.",
        ],
      },
      {
        h2: "Hangi Alanlarda Kullanılır?",
        paragraphs: [
          "Kaplama ve kron üretimi, implant planlaması, ortodontik planlama (şeffaf plak) ve gülüş tasarımında yoğun olarak kullanılır.",
          "Modern altyapımız sayesinde birçok tedavi tek seansta tamamlanabilir.",
        ],
      },
    ],
    faq: [
      {
        question: "Dijital ölçü nasıl alınır?",
        answer: "Ağız içi tarayıcı ile saniyeler içinde, konforlu şekilde alınır.",
      },
      {
        question: "CAD/CAM ne işe yarar?",
        answer: "Kaplama ve kronları aynı gün üreterek bekleme süresini kaldırır.",
      },
    ],
    related: ["seffaf-plak", "gulus-tasarimi", "zirkonyum-kaplama-dis-fiyatlari"],
  },
  "agrisiz-dis-tedavisi": {
    image: "/images/servis/kanal-hero.webp",
    body: [
      {
        h2: "Ağrısız Diş Tedavisi Nedir?",
        paragraphs: [
          "Diş hekimi fobisi olan hastalar için ağrısız diş tedavisi özel önem taşır. Modern anestezi teknikleri ve yumuşak lazerler ile tedavi tamamen konforlu hale getirilir.",
          "Gerektiğinde sedasyon desteği ile kaygı tamamen ortadan kaldırılır.",
        ],
      },
      {
        h2: "Hangi Yöntemler Kullanılır?",
        paragraphs: [
          "Bilgisayarlı lokal anestezi, lazer destekli işlemler ve sedasyon seçenekleri ile ağrısız ve stressiz tedavi sağlanır.",
          "Özellikle çocuklar ve diş hekiminden korkan yetişkinler için idealdir.",
        ],
      },
      {
        h2: "Kimler İçin Uygundur?",
        paragraphs: [
          "Diş hekimi fobisi olanlar, hassas ağız yapısına sahip hastalar ve uzun tedavi gerektiren işlemlerde tüm hastalar için uygundur.",
          "Tedavi öncesi görüşme ile sizin için en uygun yöntem belirlenir.",
        ],
      },
    ],
    faq: [
      {
        question: "Sedasyonlu tedavi güvenli mi?",
        answer: "Evet, uzman anestezi kontrolünde güvenle uygulanır.",
      },
      {
        question: "Ağrısız tedavi kimlere uygulanır?",
        answer: "Diş hekimi fobisi olan her hastaya uygulanabilir.",
      },
    ],
    related: ["acil-dis-tedavisi", "kanal-tedavisi", "dis-cekimi"],
  },
  "dis-tedavisi-fiyatlari": {
    image: "/images/servis/cekim-hero.webp",
    body: [
      {
        h2: "Diş Tedavisi Fiyatları Neye Göre Belirlenir?",
        paragraphs: [
          "Diş tedavileri; dolgu, kanal, çekim, kaplama, implant ve protez gibi uygulamalardan oluşur. Fiyatlar işlemin türüne, diş sayısına ve kullanılan malzemeye göre değişir.",
          "Her hasta için tedavi planı kişiye özel yapılır; bu yüzden net fiyat muayene sonrası belirlenir.",
        ],
      },
      {
        h2: "Ücretsiz Muayene Avantajı",
        paragraphs: [
          "Kliniğimizde ilk muayene ücretsizdir. Muayene ve röntgen sonrası size net fiyat teklifi ve tedavi planı sunulur; sürpriz maliyet yoktur.",
          "Tüm tedaviler için peşin ve taksit seçenekleri mevcuttur.",
        ],
      },
      {
        h2: "7/24 Fiyat Bilgisi",
        paragraphs: [
          "Acil durumlarınızda ve fiyat bilgisi almak için 7/24 ulaşabilirsiniz. Nöbetçi ekibimiz gece ve hafta sonu da hizmetinizdedir.",
          "Tedavi öncesi ve sonrası tüm süreçte yanınızdayız.",
        ],
      },
    ],
    faq: [
      {
        question: "Diş tedavisi fiyatları ne kadar?",
        answer: "İşlemin türüne göre değişir; ücretsiz muayene sonrası net fiyat verilir.",
      },
      {
        question: "İlk muayene ücretli mi?",
        answer: "Hayır, ilk muayenemiz ücretsizdir.",
      },
    ],
    related: ["dis-implant-fiyatlari", "zirkonyum-kaplama-dis-fiyatlari", "kanal-tedavisi"],
  },
};

export function getServiceContent(slug: string) {
  return serviceContent[slug];
}
