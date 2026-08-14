export type DistrictExtra = {
  slug: string;
  /** Semte özgü 2-3 paragraflık benzersiz içerik (şablon tekrarını kırar). */
  featureContent: string;
  /** Semt/bölgedeki kamu veya üniversite diş sağlığı desteği bilgisi. */
  publicDental: string;
  /** Semt-spesifik sorular (FAQ schema'ya da eklenir). */
  localFaqs: { question: string; answer: string }[];
};

const e = (
  slug: string,
  featureContent: string,
  publicDental: string,
  localFaqs: DistrictExtra["localFaqs"]
): DistrictExtra => ({ slug, featureContent, publicDental, localFaqs });

export const districtExtras: Record<string, DistrictExtra> = {
  "istanbul-acil-dis-hastanesi": e(
    "istanbul-acil-dis-hastanesi",
    "İstanbul, Türkiye'nin en kalabalık ve en hareketli şehridir. Bu hareketlilik, diş hekimi ihtiyacının da her an ve her yerde ortaya çıkabileceği anlamına gelir. Sabah trafiğinde kırılan bir kaplama, iş çıkışı başlayan zonklama ya da gece yarısı uykudan uyandıran bir ağrı… Hepsi için 7/24 açık bir acil diş kliniği gereklidir.",
    "İstanbul genelinde devlet hastaneleri ve ağız ve diş sağlığı merkezlerinin acil diş nöbetleri bulunur; ancak gece geç saatlerde en hızlı çözüm özel nöbetçi diş klinikleridir.",
    [
      {
        question: "İstanbul'da gece diş ağrısı için nereyi aramalıyım?",
        answer: "7/24 açık acil diş kliniğimizi 0533 582 82 79 numarasından arayabilirsiniz. Nöbetçi diş hekimimiz, gece ve hafta sonu dahil her saat sizi kabul eder.",
      },
      {
        question: "İstanbul'da pazar günü diş kliniği açık mı?",
        answer: "Evet. Kliniğimiz pazar günleri de açıktır. Acil dolgu, kanal tedavisi, çekim ve protez onarımı pazar günü yapılabilir.",
      },
    ]
  ),
  "anadolu-yakasi-acil-dis-hastanesi": e(
    "anadolu-yakasi-acil-dis-hastanesi",
    "Anadolu Yakası; Kadıköy'ün tarihi sokaklarından Pendik ve Tuzla'nın sahil bölgelerine, Ataşehir'in modern konutlarından Üsküdar'ın boğaz manzarasına kadar çok geniş bir coğrafyaya yayılır. Bu genişlik, gece saatlerinde ulaşılabilir bir diş hekimi bulmayı zorlaştırabilir. Bu yüzden yakadaki tüm ilçelerden kolayca ulaşılabilecek merkez bir acil diş hizmeti büyük önem taşır.",
    "Anadolu Yakası'nda Göztepe'deki kamu ağız ve diş sağlığı merkezi, bölge halkının gündüz müracaat ettiği önemli kurumlardan biridir; gece ve pazar günleri için ise nöbetçi özel klinikler devreye girer.",
    [
      {
        question: "Anadolu Yakası'nda gece açık diş hastanesi var mı?",
        answer: "Evet. 0533 582 82 79 numaralı hattımız Anadolu Yakası'nın tüm ilçelerinden 7/24 açıktır. Size en yakın nöbetçi diş hekimine yönlendirme yapılır.",
      },
      {
        question: "Kadıköy'den Tuzla'ya kadar nöbetçi dişçi hizmeti veriliyor mu?",
        answer: "Evet. Anadolu Yakası'nın tüm bölgelerine hizmet veriyoruz; telefonla aradığınızda size en yakın kliniğe yönlendirilirsiniz.",
      },
    ]
  ),
  "avrupa-yakasi-acil-dis-hastanesi": e(
    "avrupa-yakasi-acil-dis-hastanesi",
    "Avrupa Yakası; Taksim, Beşiktaş ve Şişli'nin merkezi noktalarından Bakırköy ve Bahçelievler'in yoğun yerleşimlerine, Beylikdüzü ve Büyükçekmece'nin yeni yaşam alanlarına kadar uzanır. Yoğun trafik ve kalabalık, gece diş ağrısında hızlı hareket etmeyi gerektirir. Merkezi konumdaki 7/24 kliniğimize yakadan her noktadan ulaşmak mümkündür.",
    "Avrupa Yakası'ndaki devlet hastaneleri ve ağız ve diş sağlığı merkezleri gündüz saatlerinde hizmet verir; gece, hafta sonu ve bayramlarda en pratik çözüm nöbetçi özel diş kliniğidir.",
    [
      {
        question: "Avrupa Yakası'nda bayramda açık diş kliniği var mı?",
        answer: "Evet. Kliniğimiz bayram ve resmî tatillerde de açıktır. 0533 582 82 79 numarasından 7/24 ulaşabilirsiniz.",
      },
      {
        question: "Beylikdüzü veya Bakırköy'den gece gelmek zor olur mu?",
        answer: "Hayır. Avrupa Yakası'nın tüm ilçelerinden ulaşım kolaydır; aradığınızda size en uygun ve en yakın nöbetçi diş hekimine yönlendirilirsiniz.",
      },
    ]
  ),
  "kadikoy-acil-dis-hastanesi": e(
    "kadikoy-acil-dis-hastanesi",
    "Kadıköy, İstanbul'un en canlı ve en kalabalık semtlerinden biridir. Altıyol, Bahariye, Moda ve Bağdat Caddesi gibi noktalar hem gündüz hem gece yoğundur. Bu hareketli yaşam, geç saatlerde bile diş hekimi ihtiyacını beraberinde getirir. Özellikle akşam spor sonrası diş travması veya gece başlayan ağrılar için Kadıköy'de 7/24 ulaşılabilir bir klinik kritik önemdedir.",
    "Kadıköy'de kamu tarafında Göztepe Ağız ve Diş Sağlığı Merkezi bölge halkına gündüz hizmet verir; gece ve pazar günleri için nöbetçi özel klinikler öne çıkar.",
    [
      {
        question: "Kadıköy'de gece diş hekimi bulmak mümkün mü?",
        answer: "Evet. 0533 582 82 79 numaralı hattımız 7/24 açıktır. Kadıköy'den kliniğimize kısa sürede ulaşabilirsiniz.",
      },
      {
        question: "Kadıköy'de pazar günü açık diş kliniği var mı?",
        answer: "Evet. Kliniğimiz pazar günleri de acil dolgu, kanal tedavisi, çekim ve protez onarımı yapmaktadır.",
      },
    ]
  ),
  "uskudar-acil-dis-hastanesi": e(
    "uskudar-acil-dis-hastanesi",
    "Üsküdar, boğaz kıyısındaki tarihi dokusu ve merkezi konumuyla Anadolu Yakası'nın en önemli ilçelerindendir. Salacak, Kuzguncuk ve Çengelköy gibi semtlerden gelen hastalarımız, gece saatlerinde bile 7/24 açık kliniğimize kolayca ulaşabilir. Özellikle boğaz tarafından gelenler için merkezi konum büyük kolaylık sağlar.",
    "Üsküdar'daki devlet hastaneleri ve sağlık kuruluşları gündüz hizmet verir; gece ve hafta sonu acil diş ihtiyacı için nöbetçi özel klinikler en hızlı seçenektir.",
    [
      {
        question: "Üsküdar'dan gece kliniğe ulaşım kolay mı?",
        answer: "Evet. Üsküdar merkeze çok yakındır; boğaz köprüleri ve metrobüs bağlantılarıyla gece de kolayca ulaşabilirsiniz.",
      },
      {
        question: "Üsküdar'da çocuklar için gece diş tedavisi yapılıyor mu?",
        answer: "Evet. Çocuk diş travmaları ve gece başlayan ağrılar için nöbetçi diş hekimimiz her an hazırdır.",
      },
    ]
  ),
  "altunizade-acil-dis-hastanesi": e(
    "altunizade-acil-dis-hastanesi",
    "Altunizade, Üsküdar'ın hem konut hem ticaret yoğunluğu yüksek modern bölgelerinden biridir. İş çıkışı başlayan diş ağrıları veya hafta sonu yaşanan diş problemleri için bölge sakinleri 7/24 açık bir kliniğe ihtiyaç duyar. Altunizade'den kliniğimize ulaşım oldukça kolaydır.",
    "Altunizade ve çevresindeki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Altunizade'de gece diş ağrısına müdahale var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de acil müdahale yapar. 0533 582 82 79 ile ulaşın.",
      },
      {
        question: "Altunizade'den kliniğe ne kadar sürede ulaşılır?",
        answer: "Altunizade merkeze çok yakındır; araçla birkaç dakika içinde kliniğimize ulaşabilirsiniz.",
      },
    ]
  ),
  "alibeykoy-acil-dis-hastanesi": e(
    "alibeykoy-acil-dis-hastanesi",
    "Alibeyköy, Eyüpsultan ilçesine bağlı ve ulaşımı kolay bir semttir. Yoğun nüfusuyla gece ve hafta sonu diş hekimi ihtiyacı sık yaşanır. Bölge sakinleri, Alibeyköy'den kısa sürede ulaşabilecekleri 7/24 açık bir diş kliniğine güvenebilir.",
    "Alibeyköy ve Eyüpsultan'daki sağlık kuruluşları gündüz hizmet verir; gece, pazar ve bayramlarda nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Alibeyköy'de pazar günü diş kliniği açık mı?",
        answer: "Evet. Kliniğimiz pazar günleri açıktır; acil müdahale için arayabilirsiniz.",
      },
      {
        question: "Alibeyköy'den kliniğe ulaşım nasıl?",
        answer: "Alibeyköy'e yakın konumdayız; toplu taşıma ve araçla kolayca ulaşabilirsiniz.",
      },
    ]
  ),
  "acibadem-acil-dis-hastanesi": e(
    "acibadem-acil-dis-hastanesi",
    "Acıbadem, Kadıköy'ün nezih ve merkezi semtlerindendir. Hastane bölgesine yakınlığı nedeniyle çevrede sürekli sağlık hizmeti arayan insan bulunur. Gece başlayan diş ağrıları ve acil diş travmaları için Acıbadem'den 7/24 ulaşılabilecek bir klinik büyük kolaylık sağlar.",
    "Acıbadem ve çevresindeki hastaneler gündüz diş sağlığı hizmeti sunar; gece için nöbetçi diş kliniği en doğru adrestir.",
    [
      {
        question: "Acıbadem'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Acıbadem'den kısa sürede ulaşabilirsiniz.",
      },
      {
        question: "Acıbadem'deki hastanelere göre avantajınız nedir?",
        answer: "Hastanelerin diş birimleri genellikle gündüz çalışır. Biz gece, hafta sonu ve bayramlarda da kesintisiz acil diş hizmeti sunarız.",
      },
    ]
  ),
  "atakoy-acil-dis-hastanesi": e(
    "atakoy-acil-dis-hastanesi",
    "Ataköy, Bakırköy'ün planlı ve modern sahil semtlerindendir. Yeşillikler içindeki yaşam alanları ve marina bölgesiyle bilinir. Burada yaşayanlar, özellikle hafta sonu ve akşam saatlerinde diş problemi yaşadıklarında 7/24 açık bir kliniğe kolayca ulaşmak ister.",
    "Ataköy ve Bakırköy'deki devlet hastaneleri gündüz diş hizmeti verir; gece ve pazar günleri için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Ataköy'de pazar günü diş kliniği var mı?",
        answer: "Evet. Pazar günleri açığız; acil dolgu, kanal ve çekim işlemleri yapılır.",
      },
      {
        question: "Ataköy'den kliniğe ulaşım kolay mı?",
        answer: "Evet, Ataköy merkeze yakındır. Metrobüs ve E-5 bağlantısıyla rahatça ulaşabilirsiniz.",
      },
    ]
  ),
  "atasehir-acil-dis-hastanesi": e(
    "atasehir-acil-dis-hastanesi",
    "Ataşehir, İstanbul'un en modern ve hızla gelişen ilçelerinden biridir. Yoğun konut ve ofis bölgeleri, gece geç saatlerde bile diş hekimi ihtiyacını artırır. Ataşehir sakinleri, işten dönerken ya da gece başlayan ağrılarda 7/24 ulaşabilecekleri bir kliniğe ihtiyaç duyar.",
    "Ataşehir'deki özel ve devlet hastaneleri gündüz hizmet verir; gece ve hafta sonu için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Ataşehir'de gece diş hekimi bulabilir miyim?",
        answer: "Evet. 0533 582 82 79 hattımız 7/24 açıktır; Ataşehir'den kısa sürede ulaşabilirsiniz.",
      },
      {
        question: "Ataşehir'de acil kanal tedavisi yapılıyor mu?",
        answer: "Evet. Gece dahil acil kanal tedavisi, dolgu ve çekim işlemlerimiz mevcuttur.",
      },
    ]
  ),
  "avcilar-acil-dis-hastanesi": e(
    "avcilar-acil-dis-hastanesi",
    "Avcılar, öğrenci nüfusunun yoğun olduğu ve hareketli bir yaşamın sürdüğü bir ilçedir. Üniversite öğrencileri ve aileler, gece saatlerinde yaşanan diş ağrılarında 7/24 açık bir kliniğe başvurma ihtiyacı duyar. Avcılar'dan merkezi kliniğimize ulaşım oldukça kolaydır.",
    "Avcılar'daki sağlık kuruluşları ve hastaneler gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik seçenektir.",
    [
      {
        question: "Avcılar'da gece açık dişçi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir. Hemen arayın: 0533 582 82 79.",
      },
      {
        question: "Avcılar'dan kliniğe ulaşım nasıl?",
        answer: "Avcılar, E-5 üzerinde merkezi bir konumdadır; toplu taşıma ile kolayca ulaşılır.",
      },
    ]
  ),
  "bagcilar-acil-dis-hastanesi": e(
    "bagcilar-acil-dis-hastanesi",
    "Bağcılar, İstanbul'un en kalabalık ilçelerinden biridir ve neredeyse 24 saat hareketlilik yaşanır. Bu yoğunluk, gece ve hafta sonu diş hekimi ihtiyacını da beraberinde getirir. Bağcılar'dan 7/24 açık kliniğimize ulaşım son derece kolaydır.",
    "Bağcılar'da devlet hastaneleri gündüz diş hizmeti verir; gece ve bayramlarda nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Bağcılar'da bayramda diş kliniği açık mı?",
        answer: "Evet. Kliniğimiz bayramlarda da açıktır; acil diş işlemleri yapılmaktadır.",
      },
      {
        question: "Bağcılar'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Bağcılar merkeze yakındır; metrobüs ve E-5 bağlantılarıyla rahatça ulaşılır.",
      },
    ]
  ),
  "bahcelievler-acil-dis-hastanesi": e(
    "bahcelievler-acil-dis-hastanesi",
    "Bahçelievler, İstanbul'un merkezi ve ulaşımı kolay ilçelerinden biridir. Yoğun yerleşim ve ticaret alanları, gece dahil her an diş hekimi ihtiyacı doğurabilir. Bahçelievler sakinleri, pazar günü ve gece saatlerinde 7/24 açık kliniğimize güvenle başvurabilir.",
    "Bahçelievler'deki devlet hastaneleri gündüz hizmet verir; hafta sonu ve gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Bahçelievler'de pazar günü diş kliniği var mı?",
        answer: "Evet. Pazar günleri açığız; acil diş tedavileri yapılmaktadır.",
      },
      {
        question: "Bahçelievler'den kliniğe ulaşım nasıl?",
        answer: "Bahçelievler merkeze çok yakındır; E-5 ve metrobüs ile kolayca ulaşılır.",
      },
    ]
  ),
  "bahcesehir-acil-dis-hastanesi": e(
    "bahcesehir-acil-dis-hastanesi",
    "Bahçeşehir, Başakşehir ilçesinin planlı ve modern yerleşimlerindendir. Ailelerin yoğun yaşadığı bu bölgede, özellikle çocukların akşam yaşadığı diş travmaları ve gece ağrıları için 7/24 ulaşılabilir bir klinik büyük önem taşır.",
    "Bahçeşehir'deki sağlık kuruluşları gündüz hizmet verir; gece ve hafta sonu için nöbetçi diş kliniği en uygun seçenektir.",
    [
      {
        question: "Bahçeşehir'de gece çocuk diş travmasına müdahale var mı?",
        answer: "Evet. Çocuk diş travmalarına gece dahil 7/24 müdahale ediyoruz.",
      },
      {
        question: "Bahçeşehir'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Bahçeşehir merkeze yakın mesafededir; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "aksaray-acil-dis-hastanesi": e(
    "aksaray-acil-dis-hastanesi",
    "Aksaray, Fatih ilçesinin tarihi ve merkezi bölgelerindendir. Ulaşım ağlarının kesişim noktasında yer alması, gece dahil her saat diş hekimi ihtiyacını artırır. Aksaray'dan kliniğimize ulaşım son derece kolay ve hızlıdır.",
    "Aksaray ve Fatih'teki devlet hastaneleri ve diş hekimliği fakülteleri gündüz hizmet verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Aksaray'da gece diş hekimi bulunur mu?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Aksaray'dan çok kısa sürede ulaşılır.",
      },
      {
        question: "Aksaray'dan kliniğe ne kadar sürede gidilir?",
        answer: "Aksaray merkeze çok yakındır; araçla birkaç dakika içinde ulaşabilirsiniz.",
      },
    ]
  ),
  "bakirkoy-acil-dis-hastanesi": e(
    "bakirkoy-acil-dis-hastanesi",
    "Bakırköy, İstanbul'un köklü ve merkezi ilçelerinden biridir. Sahil hattı, meydanı ve yoğun yaşamıyla gece saatlerinde bile hareketlidir. Bakırköy sakinleri, hafta sonu ve gece yaşanan diş problemleri için 7/24 açık kliniğimize kolayca ulaşabilir.",
    "Bakırköy'deki devlet hastaneleri gündüz diş hizmeti sunar; gece ve pazar günleri için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Bakırköy'de gece açık dişçi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de acil müdahale yapar.",
      },
      {
        question: "Bakırköy'de pazar günü diş kliniği açık mı?",
        answer: "Evet. Pazar günleri açığız; acil diş işlemleri yapılmaktadır.",
      },
    ]
  ),
  "basaksehir-acil-dis-hastanesi": e(
    "basaksehir-acil-dis-hastanesi",
    "Başakşehir, İstanbul'un yeni ve modern yerleşimlerinden biridir. Geniş konut alanları ve aile yaşamı, özellikle gece saatlerinde diş hekimi ihtiyacını artırır. Başakşehir'den 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Başakşehir'deki hastaneler gündüz diş hizmeti verir; gece ve hafta sonu için nöbetçi diş kliniği en uygun seçenektir.",
    [
      {
        question: "Başakşehir'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Başakşehir'den kolayca ulaşılır.",
      },
      {
        question: "Başakşehir'de acil diş tedavisi yapılıyor mu?",
        answer: "Evet. Gece dahil acil dolgu, kanal tedavisi ve çekim yapılmaktadır.",
      },
    ]
  ),
  "bayrampasa-acil-dis-hastanesi": e(
    "bayrampasa-acil-dis-hastanesi",
    "Bayrampaşa, İstanbul'un merkezi ve sanayi yoğunluğu yüksek ilçelerindendir. Yoğun çalışma hayatı, akşam ve gece saatlerinde diş hekimi ihtiyacını artırır. Bayrampaşa'dan 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Bayrampaşa'daki sağlık kuruluşları gündüz hizmet verir; gece ve bayramlarda nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Bayrampaşa'da bayramda diş kliniği açık mı?",
        answer: "Evet. Kliniğimiz bayramlarda da açıktır; acil diş işlemleri yapılmaktadır.",
      },
      {
        question: "Bayrampaşa'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Bayrampaşa merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "besiktas-acil-dis-hastanesi": e(
    "besiktas-acil-dis-hastanesi",
    "Beşiktaş, boğaz kıyısındaki merkezi konumuyla İstanbul'un en hareketli ilçelerindendir. Akşam saatlerinde başlayan diş ağrıları, gece yarısı yaşanan travmalar için Beşiktaş sakinleri 7/24 açık bir kliniğe kolayca ulaşmak ister.",
    "Beşiktaş'taki devlet hastaneleri gündüz diş hizmeti verir; gece ve pazar günleri için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Beşiktaş'ta gece diş hekimi bulabilir miyim?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Beşiktaş'tan kısa sürede ulaşılır.",
      },
      {
        question: "Beşiktaş'tan kliniğe ulaşım nasıl?",
        answer: "Beşiktaş merkeze yakındır; sahil yolu ve metro ile kolayca ulaşılır.",
      },
    ]
  ),
  "beykoz-acil-dis-hastanesi": e(
    "beykoz-acil-dis-hastanesi",
    "Beykoz, İstanbul'un en yeşil ve en geniş ilçelerinden biridir. Ormanlık alanlar ve boğaz kıyısındaki semtler, gece saatlerinde diş hekimi bulmayı zorlaştırabilir. Beykoz'dan 7/24 açık kliniğimize ulaşmak bu açıdan büyük kolaylık sağlar.",
    "Beykoz'daki sağlık kuruluşları gündüz hizmet verir; gece ve hafta sonu için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Beykoz'dan gece kliniğe ulaşım kolay mı?",
        answer: "Evet. Beykoz'dan araçla kliniğimize ulaşabilirsiniz; aradığınızda yol tarifi verilir.",
      },
      {
        question: "Beykoz'da gece açık dişçi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
    ]
  ),
  "beylikduzu-acil-dis-hastanesi": e(
    "beylikduzu-acil-dis-hastanesi",
    "Beylikdüzü, Avrupa Yakası'nın hızla gelişen modern ilçelerindendir. Ailelerin yoğun yaşadığı bölgede, özellikle hafta sonu ve gece saatlerinde diş hekimi ihtiyacı sık yaşanır. Beylikdüzü'nden 7/24 açık kliniğimize ulaşım kolaydır.",
    "Beylikdüzü'ndeki hastaneler gündüz diş hizmeti verir; gece ve pazar günleri için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Beylikdüzü'nde pazar günü diş kliniği var mı?",
        answer: "Evet. Pazar günleri açığız; acil diş işlemleri yapılmaktadır.",
      },
      {
        question: "Beylikdüzü'nden kliniğe ulaşım kolay mı?",
        answer: "Evet. Beylikdüzü merkeze yakındır; E-5 ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "beyoglu-acil-dis-hastanesi": e(
    "beyoglu-acil-dis-hastanesi",
    "Beyoğlu, İstanbul'un hem turistik hem de gece hayatıyla ünlü merkezlerindendir. Taksim ve İstiklal Caddesi çevresinde gece geç saatlerde diş ağrısı yaşanması çok olasıdır. Beyoğlu'ndan 7/24 açık kliniğimize yürüme mesafesinde ulaşmak mümkündür.",
    "Beyoğlu'ndaki hastaneler gündüz diş hizmeti verir; gece ve hafta sonu için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Beyoğlu'nda gece diş hekimi bulabilir miyim?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Taksim'den kısa sürede ulaşılır.",
      },
      {
        question: "Taksim'den kliniğe yürüyerek gidilebilir mi?",
        answer: "Evet. Taksim ve İstiklal Caddesi'ne çok yakınız; yürüme mesafesindeyiz.",
      },
    ]
  ),
  "bostanci-acil-dis-hastanesi": e(
    "bostanci-acil-dis-hastanesi",
    "Bostancı, Kadıköy'ün sahil kesimindeki gözde semtlerindendir. Marina ve sahil yürüyüş yollarıyla bilinen bölgede, hafta sonu ve akşam saatlerinde diş hekimi ihtiyacı artar. Bostancı'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Bostancı ve Kadıköy'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Bostancı'da gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de acil müdahale yapar.",
      },
      {
        question: "Bostancı'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Bostancı merkeze yakındır; sahil yolu ile rahatça ulaşılır.",
      },
    ]
  ),
  "buyukcekmece-acil-dis-hastanesi": e(
    "buyukcekmece-acil-dis-hastanesi",
    "Büyükçekmece, Avrupa Yakası'nın göl ve deniz kıyısındaki şirin ilçelerindendir. Yaz aylarında yoğunlaşan nüfus ve hafta sonu ziyaretleri, diş hekimi ihtiyacını artırır. Büyükçekmece'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Büyükçekmece'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Büyükçekmece'de pazar günü diş kliniği var mı?",
        answer: "Evet. Pazar günleri açığız; acil diş işlemleri yapılmaktadır.",
      },
      {
        question: "Büyükçekmece'den kliniğe ulaşım nasıl?",
        answer: "Evet. E-5 üzerinden ve toplu taşıma ile kolayca ulaşılır.",
      },
    ]
  ),
  "caddebostan-acil-dis-hastanesi": e(
    "caddebostan-acil-dis-hastanesi",
    "Caddebostan, Kadıköy'ün en prestijli sahil semtlerindendir. Bağdat Caddesi'nin alışveriş yoğunluğu ve sahil yaşamı, akşam ve hafta sonu diş hekimi ihtiyacını artırır. Caddebostan'dan 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Caddebostan ve çevresindeki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Caddebostan'da gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Caddebostan'dan kısa sürede ulaşılır.",
      },
      {
        question: "Caddebostan'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Bağdat Caddesi ve sahil yolu ile rahatça ulaşılır.",
      },
    ]
  ),
  "caglayan-acil-dis-hastanesi": e(
    "caglayan-acil-dis-hastanesi",
    "Çağlayan, Kağıthane ilçesinin merkezi ve işlek semtlerindendir. Adliye bölgesine yakınlığı nedeniyle günün her saatinde hareketlidir. Çağlayan'dan 7/24 açık kliniğimize ulaşım son derece kolaydır.",
    "Çağlayan ve Kağıthane'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Çağlayan'da gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Çağlayan'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Çağlayan merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "camlica-acil-dis-hastanesi": e(
    "camlica-acil-dis-hastanesi",
    "Çamlıca, Üsküdar'ın en bilinen tepelerinden biridir. Çamlıca Tepesi ve çevresindeki yerleşimler, doğal güzelliğiyle dikkat çeker. Bu nezih bölgede gece başlayan diş ağrıları için 7/24 açık kliniğimize ulaşmak kolaydır.",
    "Çamlıca ve Üsküdar'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Çamlıca'dan gece kliniğe ulaşım kolay mı?",
        answer: "Evet. Çamlıca merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
      {
        question: "Çamlıca'da gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir.",
      },
    ]
  ),
  "catalca-acil-dis-hastanesi": e(
    "catalca-acil-dis-hastanesi",
    "Çatalca, İstanbul'un kırsal ve geniş yüzölçümlü ilçelerindendir. Şehir merkezine uzaklığı, gece saatlerinde diş hekimi bulmayı özellikle zorlaştırır. Bu yüzden Çatalca'dan gelecek hastalarımız için 7/24 açık kliniğimiz ve yol tarifi desteği her zaman hazırdır.",
    "Çatalca'daki sağlık kuruluşları gündüz hizmet verir; gece ve hafta sonu için nöbetçi diş kliniği en doğru adrestir.",
    [
      {
        question: "Çatalca'dan gece kliniğe nasıl ulaşırım?",
        answer: "Çatalca'dan araçla kliniğimize ulaşabilirsiniz. Aradığınızda size en kısa ve en güvenli yol tarifini veriyoruz.",
      },
      {
        question: "Çatalca'da gece diş kliniği var mı?",
        answer: "Bölgede gece açık özel diş kliniği azdır; bu yüzden merkezi 7/24 kliniğimizi aramanız en hızlı çözümdür.",
      },
    ]
  ),
  "cerrahpasa-acil-dis-hastanesi": e(
    "cerrahpasa-acil-dis-hastanesi",
    "Cerrahpaşa, Fatih'in üniversite hastaneleriyle bilinen tarihi bölgelerindendir. Tıp fakültesi çevresinde sürekli sağlık hizmeti arayan insan bulunur. Cerrahpaşa'dan 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Cerrahpaşa'daki üniversite hastaneleri gündüz diş hizmeti verir; gece ve pazar günleri için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Cerrahpaşa'da gece diş hekimi bulabilir miyim?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Cerrahpaşa'dan kısa sürede ulaşılır.",
      },
      {
        question: "Cerrahpaşa'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Cerrahpaşa merkeze yakındır; araçla birkaç dakika içinde ulaşılır.",
      },
    ]
  ),
  "esenler-acil-dis-hastanesi": e(
    "esenler-acil-dis-hastanesi",
    "Esenler, İstanbul'un merkezi ve yoğun nüfuslu ilçelerindendir. Otogara yakınlığı nedeniyle şehirlerarası yolculardan yerel sakinlere kadar geniş bir kitleye hizmet verilir. Esenler'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Esenler'deki sağlık kuruluşları gündüz hizmet verir; gece ve bayramlarda nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Esenler'de bayramda diş kliniği açık mı?",
        answer: "Evet. Kliniğimiz bayramlarda da açıktır; acil diş işlemleri yapılmaktadır.",
      },
      {
        question: "Esenler'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Esenler merkeze yakındır; otogar ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "etiler-acil-dis-hastanesi": e(
    "etiler-acil-dis-hastanesi",
    "Etiler, Beşiktaş'ın modern ve varlıklı semtlerindendir. Alışveriş merkezleri ve ofis bölgeleri, akşam saatlerinde diş hekimi ihtiyacını artırır. Etiler'den 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Etiler ve Beşiktaş'taki hastaneler gündüz diş hizmeti verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Etiler'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Etiler'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Etiler merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "eyup-acil-dis-hastanesi": e(
    "eyup-acil-dis-hastanesi",
    "Eyüp, tarihi ve dini dokusuyla İstanbul'un önemli ilçelerindendir. Eyüp Sultan bölgesi günün her saatinde ziyaretçi çeker. Gece başlayan diş ağrıları için Eyüp'ten 7/24 açık kliniğimize ulaşmak kolaydır.",
    "Eyüp'teki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Eyüp'te gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Eyüp'ten kolayca ulaşılır.",
      },
      {
        question: "Eyüp'ten kliniğe ulaşım nasıl?",
        answer: "Evet. Eyüp merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "fatih-acil-dis-hastanesi": e(
    "fatih-acil-dis-hastanesi",
    "Fatih, İstanbul'un tarihi yarımadasının kalbidir. Tarihi eserleri, üniversiteleri ve hastaneleriyle günün her saatinde yoğundur. Gece başlayan diş ağrıları için Fatih'ten 7/24 açık kliniğimize ulaşmak oldukça kolaydır.",
    "Fatih'teki diş hekimliği fakülteleri ve devlet hastaneleri gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Fatih'te gece diş hekimi bulabilir miyim?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Fatih'ten kısa sürede ulaşılır.",
      },
      {
        question: "Fatih'ten kliniğe ulaşım kolay mı?",
        answer: "Evet. Fatih merkeze çok yakındır; araçla birkaç dakika içinde ulaşılır.",
      },
    ]
  ),
  "gaziosmanpasa-acil-dis-hastanesi": e(
    "gaziosmanpasa-acil-dis-hastanesi",
    "Gaziosmanpaşa, Avrupa Yakası'nın yoğun nüfuslu ilçelerindendir. Çalışan ailelerin yaşadığı bölgede, akşam ve gece saatlerinde diş hekimi ihtiyacı sık yaşanır. Gaziosmanpaşa'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Gaziosmanpaşa'daki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Gaziosmanpaşa'da gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Gaziosmanpaşa'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Gaziosmanpaşa merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "gokturk-acil-dis-hastanesi": e(
    "gokturk-acil-dis-hastanesi",
    "Göktürk, Eyüpsultan'a bağlı ve hızla gelişen modern bir yerleşimdir. Yeşil alanları ve yeni konutlarıyla ailelerin tercih ettiği bölgede, gece ve hafta sonu diş hekimi ihtiyacı artar. Göktürk'ten 7/24 açık kliniğimize ulaşım kolaydır.",
    "Göktürk ve Eyüpsultan'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Göktürk'te gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Göktürk'ten kolayca ulaşılır.",
      },
      {
        question: "Göktürk'ten kliniğe ulaşım kolay mı?",
        answer: "Evet. Göktürk merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "goztepe-acil-dis-hastanesi": e(
    "goztepe-acil-dis-hastanesi",
    "Göztepe, Kadıköy'ün köklü ve merkezi semtlerindendir. Kamu ağız ve diş sağlığı merkezine yakınlığıyla bilinir. Gece başlayan diş ağrıları için Göztepe'den 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Göztepe'deki kamu ağız ve diş sağlığı merkezi gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Göztepe'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Göztepe'den kısa sürede ulaşılır.",
      },
      {
        question: "Göztepe'deki kamu diş merkezine mi geleyim?",
        answer: "Kamu diş merkezleri gündüz çalışır. Gece ve hafta sonu için 7/24 açık kliniğimiz daha hızlı çözümdür.",
      },
    ]
  ),
  "gultepe-acil-dis-hastanesi": e(
    "gultepe-acil-dis-hastanesi",
    "Gültepe, Kağıthane'nin yoğun yerleşim alanlarındandır. Çalışan nüfusun yoğun olduğu bölgede, akşam ve gece saatlerinde diş hekimi ihtiyacı sık yaşanır. Gültepe'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Gültepe ve Kağıthane'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Gültepe'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Gültepe'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Gültepe merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "gungoren-acil-dis-hastanesi": e(
    "gungoren-acil-dis-hastanesi",
    "Güngören, İstanbul'un merkezi ilçelerinden biridir. Yoğun yerleşim ve ticaret alanları, günün her saatinde diş hekimi ihtiyacı doğurabilir. Güngören'den 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Güngören'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Güngören'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Güngören'den kolayca ulaşılır.",
      },
      {
        question: "Güngören'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Güngören merkeze yakındır; metrobüs ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "icerenkoy-acil-dis-hastanesi": e(
    "icerenkoy-acil-dis-hastanesi",
    "İçerenköy, Ataşehir'in işlek ve gelişmiş bölgelerindendir. Ticaret merkezleri ve yoğun konut alanları, akşam ve gece saatlerinde diş hekimi ihtiyacını artırır. İçerenköy'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "İçerenköy ve Ataşehir'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "İçerenköy'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "İçerenköy'den kliniğe ulaşım kolay mı?",
        answer: "Evet. İçerenköy merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "istinye-acil-dis-hastanesi": e(
    "istinye-acil-dis-hastanesi",
    "İstinye, Sarıyer'in boğaz kıyısındaki seçkin semtlerindendir. Modern yaşam alanları ve alışveriş merkezleriyle bilinir. İstinye'den gece başlayan diş ağrıları için 7/24 açık kliniğimize ulaşım kolaydır.",
    "İstinye ve Sarıyer'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "İstinye'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; İstinye'den kısa sürede ulaşılır.",
      },
      {
        question: "İstinye'den kliniğe ulaşım kolay mı?",
        answer: "Evet. İstinye merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "kagithane-acil-dis-hastanesi": e(
    "kagithane-acil-dis-hastanesi",
    "Kağıthane, İstanbul'un merkezi ve hızla gelişen ilçelerindendir. Yoğun konut ve iş alanları, gece saatlerinde diş hekimi ihtiyacını artırır. Kağıthane'den 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Kağıthane'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Kağıthane'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Kağıthane'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Kağıthane merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "kalamis-acil-dis-hastanesi": e(
    "kalamis-acil-dis-hastanesi",
    "Kalamış, Kadıköy'ün marina ve sahil kısmındaki seçkin semtlerindendir. Deniz kenarındaki yaşam, hafta sonu ve akşam saatlerinde diş hekimi ihtiyacını artırır. Kalamış'tan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Kalamış ve Kadıköy'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Kalamış'ta gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Kalamış'tan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kalamış merkeze yakındır; sahil yolu ile rahatça ulaşılır.",
      },
    ]
  ),
  "kartal-acil-dis-hastanesi": e(
    "kartal-acil-dis-hastanesi",
    "Kartal, Anadolu Yakası'nın gelişmiş ve yoğun ilçelerindendir. Sahil hattı ve konut alanları, gece ve hafta sonu diş hekimi ihtiyacını artırır. Kartal'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Kartal'daki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Kartal'da gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Kartal'dan kolayca ulaşılır.",
      },
      {
        question: "Kartal'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kartal merkeze yakındır; sahil yolu ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "kasimpasa-acil-dis-hastanesi": e(
    "kasimpasa-acil-dis-hastanesi",
    "Kasımpaşa, Beyoğlu'nun tarihi ve yoğun semtlerindendir. Tersane bölgesine yakınlığı ve hareketli yaşamı, gece saatlerinde diş hekimi ihtiyacını artırır. Kasımpaşa'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Kasımpaşa ve Beyoğlu'ndaki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Kasımpaşa'da gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Kasımpaşa'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kasımpaşa merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "kavacik-acil-dis-hastanesi": e(
    "kavacik-acil-dis-hastanesi",
    "Kavacık, Beykoz'un boğaz köprüsüne yakın ve gelişmiş bölgelerindendir. Alışveriş merkezi ve ofis bölgeleri, akşam saatlerinde diş hekimi ihtiyacını artırır. Kavacık'tan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Kavacık ve Beykoz'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Kavacık'ta gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Kavacık'tan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kavacık merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "kemerburgaz-acil-dis-hastanesi": e(
    "kemerburgaz-acil-dis-hastanesi",
    "Kemerburgaz, Eyüpsultan'ın ormanlık ve doğayla iç içe bölgelerindendir. Şehir merkezine uzaklığı, gece saatlerinde diş hekimi bulmayı zorlaştırabilir. Kemerburgaz'dan 7/24 açık kliniğimize ulaşım için yol tarifi desteğimiz hazırdır.",
    "Kemerburgaz'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en doğru adrestir.",
    [
      {
        question: "Kemerburgaz'dan gece kliniğe nasıl ulaşırım?",
        answer: "Kemerburgaz'dan araçla ulaşabilirsiniz; aradığınızda size en kısa yol tarifini veriyoruz.",
      },
      {
        question: "Kemerburgaz'da gece diş kliniği var mı?",
        answer: "Bölgede gece açık klinik sayısı azdır; 7/24 kliniğimiz en güvenilir çözümdür.",
      },
    ]
  ),
  "kiziltoprak-acil-dis-hastanesi": e(
    "kiziltoprak-acil-dis-hastanesi",
    "Kızıltoprak, Kadıköy'ün merkezi ve ulaşımı kolay semtlerindendir. Yoğun yerleşim, gece ve hafta sonu diş hekimi ihtiyacını artırır. Kızıltoprak'tan 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Kızıltoprak ve Kadıköy'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Kızıltoprak'ta gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Kızıltoprak'tan kısa sürede ulaşılır.",
      },
      {
        question: "Kızıltoprak'tan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kızıltoprak merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "kozyatagi-acil-dis-hastanesi": e(
    "kozyatagi-acil-dis-hastanesi",
    "Kozyatağı, Kadıköy'ün modern ve gelişmiş semtlerindendir. Ofis bölgeleri ve alışveriş merkezleri, akşam saatlerinde diş hekimi ihtiyacını artırır. Kozyatağı'ndan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Kozyatağı ve Kadıköy'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Kozyatağı'nda gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Kozyatağı'ndan kliniğe ulaşım kolay mı?",
        answer: "Evet. Kozyatağı merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "kucukcekmece-acil-dis-hastanesi": e(
    "kucukcekmece-acil-dis-hastanesi",
    "Küçükçekmece, Avrupa Yakası'nın kalabalık ilçelerindendir. Göl kenarındaki yerleşimler ve yoğun nüfus, gece saatlerinde diş hekimi ihtiyacını artırır. Küçükçekmece'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Küçükçekmece'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Küçükçekmece'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Küçükçekmece'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Küçükçekmece merkeze yakındır; metrobüs ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "kucukkoy-acil-dis-hastanesi": e(
    "kucukkoy-acil-dis-hastanesi",
    "Küçükköy, Gaziosmanpaşa'nın yoğun yerleşim alanlarındandır. Çalışan ailelerin yaşadığı bölgede, akşam ve gece saatlerinde diş hekimi ihtiyacı sık yaşanır. Küçükköy'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Küçükköy ve Gaziosmanpaşa'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Küçükköy'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Küçükköy'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Küçükköy merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "maltepe-acil-dis-hastanesi": e(
    "maltepe-acil-dis-hastanesi",
    "Maltepe, Anadolu Yakası'nın sahil ilçelerindendir. Sahil hattı ve yoğun yerleşim, gece ve hafta sonu diş hekimi ihtiyacını artırır. Maltepe'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Maltepe'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Maltepe'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Maltepe'den kolayca ulaşılır.",
      },
      {
        question: "Maltepe'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Maltepe merkeze yakındır; sahil yolu ve metrobüs ile rahatça ulaşılır.",
      },
    ]
  ),
  "maslak-acil-dis-hastanesi": e(
    "maslak-acil-dis-hastanesi",
    "Maslak, İstanbul'un finans ve iş merkezlerindendir. Gökdelenlerde çalışan binlerce kişi, akşam ve gece saatlerinde diş hekimi ihtiyacı yaşayabilir. Maslak'tan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Maslak'taki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Maslak'ta gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Maslak'tan kliniğe ulaşım kolay mı?",
        answer: "Evet. Maslak merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "mecidiyekoy-acil-dis-hastanesi": e(
    "mecidiyekoy-acil-dis-hastanesi",
    "Mecidiyeköy, İstanbul'un en önemli ulaşım kavşaklarındandır. Metrobüs, metro ve otobüs hatlarının kesiştiği bölge, günün her saatinde hareketlidir. Mecidiyeköy'den 7/24 açık kliniğimize ulaşım son derece kolaydır.",
    "Mecidiyeköy ve Şişli'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Mecidiyeköy'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Mecidiyeköy'den çok kısa sürede ulaşılır.",
      },
      {
        question: "Mecidiyeköy'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Metrobüs ve metro ile rahatça ulaşılır; merkeze çok yakınız.",
      },
    ]
  ),
  "merter-acil-dis-hastanesi": e(
    "merter-acil-dis-hastanesi",
    "Merter, Güngören'in ticaret yoğunluğu yüksek bölgelerindendir. Tekstil ve iş merkezleri, gün içinde yoğun nüfus çeker. Akşam ve gece saatlerinde diş hekimi ihtiyacı için Merter'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Merter ve Güngören'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği öne çıkar.",
    [
      {
        question: "Merter'de gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Merter'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Merter merkeze yakındır; metrobüs ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "nisantasi-acil-dis-hastanesi": e(
    "nisantasi-acil-dis-hastanesi",
    "Nişantaşı, Şişli'nin prestijli ve şık semtlerindendir. Butikler, kafeler ve alışveriş merkezleriyle bilinen bölgede, akşam saatlerinde diş hekimi ihtiyacı artar. Nişantaşı'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Nişantaşı ve Şişli'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Nişantaşı'nda gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Nişantaşı'ndan kısa sürede ulaşılır.",
      },
      {
        question: "Nişantaşı'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Nişantaşı merkeze yakındır; araçla kısa sürede ulaşılır.",
      },
    ]
  ),
  "okmeydani-acil-dis-hastanesi": e(
    "okmeydani-acil-dis-hastanesi",
    "Okmeydanı, Şişli'nin yoğun ve hareketli semtlerindendir. Hastane bölgesine yakınlığı nedeniyle günün her saatinde sağlık hizmeti arayan insan bulunur. Okmeydanı'ndan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Okmeydanı ve Şişli'deki hastaneler gündüz diş hizmeti verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Okmeydanı'nda gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Okmeydanı'ndan kliniğe ulaşım kolay mı?",
        answer: "Evet. Okmeydanı merkeze yakındır; toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "pasabahce-acil-dis-hastanesi": e(
    "pasabahce-acil-dis-hastanesi",
    "Paşabahçe, Beykoz'un boğaz kıyısındaki şirin semtlerindendir. Doğayla iç içe yaşam, gece saatlerinde diş hekimi bulmayı zorlaştırabilir. Paşabahçe'den 7/24 açık kliniğimize ulaşım için yol tarifi desteğimiz hazırdır.",
    "Paşabahçe ve Beykoz'daki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en doğru adrestir.",
    [
      {
        question: "Paşabahçe'den gece kliniğe nasıl ulaşırım?",
        answer: "Paşabahçe'den araçla ulaşabilirsiniz; aradığınızda size en kısa yol tarifini veriyoruz.",
      },
      {
        question: "Paşabahçe'de gece diş kliniği var mı?",
        answer: "Bölgede gece açık klinik azdır; 7/24 kliniğimiz en güvenilir çözümdür.",
      },
    ]
  ),
  "pendik-acil-dis-hastanesi": e(
    "pendik-acil-dis-hastanesi",
    "Pendik, Anadolu Yakası'nın büyük ve gelişmiş ilçelerindendir. Sahil hattı, marina ve yoğun yerleşim, gece ve hafta sonu diş hekimi ihtiyacını artırır. Pendik'ten 7/24 açık kliniğimize ulaşım kolaydır.",
    "Pendik'teki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Pendik'te gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Pendik'ten kolayca ulaşılır.",
      },
      {
        question: "Pendik'ten kliniğe ulaşım kolay mı?",
        answer: "Evet. Pendik merkeze yakındır; sahil yolu ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "sariyer-acil-dis-hastanesi": e(
    "sariyer-acil-dis-hastanesi",
    "Sarıyer, İstanbul'un en geniş ve en yeşil ilçelerindendir. Boğaz kıyısındaki semtler ve ormanlık alanlar, gece saatlerinde diş hekimi bulmayı zorlaştırabilir. Sarıyer'den 7/24 açık kliniğimize ulaşım için yol tarifi desteğimiz hazırdır.",
    "Sarıyer'deki sağlık kuruluşları gündüz hizmet verir; gece ve hafta sonu için nöbetçi diş kliniği en doğru adrestir.",
    [
      {
        question: "Sarıyer'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Sarıyer'den ulaşılabilir.",
      },
      {
        question: "Sarıyer'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Sahil yolu ve toplu taşıma ile kliniğimize ulaşabilirsiniz.",
      },
    ]
  ),
  "silivri-acil-dis-hastanesi": e(
    "silivri-acil-dis-hastanesi",
    "Silivri, İstanbul'un batı ucundaki geniş ilçelerindendir. Şehir merkezine uzaklığı, gece saatlerinde diş hekimi bulmayı özellikle zorlaştırır. Bu yüzden Silivri'den gelecek hastalarımız için 7/24 açık kliniğimiz ve yol tarifi desteğimiz her zaman hazırdır.",
    "Silivri'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en güvenilir çözümdür.",
    [
      {
        question: "Silivri'den gece kliniğe nasıl ulaşırım?",
        answer: "Silivri'den araçla ulaşabilirsiniz; aradığınızda size en kısa ve güvenli yol tarifini veriyoruz.",
      },
      {
        question: "Silivri'de gece diş kliniği var mı?",
        answer: "Bölgede gece açık klinik çok azdır; 7/24 kliniğimiz en doğru çözümdür.",
      },
    ]
  ),
  "sisli-acil-dis-hastanesi": e(
    "sisli-acil-dis-hastanesi",
    "Şişli, İstanbul'un merkezi ve en hareketli ilçelerindendir. Alışveriş caddeleri, ofis bölgeleri ve hastaneleriyle günün her saatinde yoğundur. Şişli'den 7/24 açık kliniğimize ulaşım son derece kolaydır.",
    "Şişli'deki hastaneler gündüz diş hizmeti verir; gece ve pazar için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Şişli'de gece diş hekimi bulabilir miyim?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Şişli'den kısa sürede ulaşılır.",
      },
      {
        question: "Şişli'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Şişli merkeze çok yakındır; metro ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "taksim-acil-dis-hastanesi": e(
    "taksim-acil-dis-hastanesi",
    "Taksim, İstanbul'un turizm ve gece hayatının merkezidir. Meydan ve İstiklal Caddesi çevresinde günün her saati kalabalık. Gece geç saatlerde diş ağrısı yaşayanlar için Taksim'den 7/24 açık kliniğimize yürüme mesafesinde ulaşmak mümkündür.",
    "Taksim ve Beyoğlu'ndaki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en hızlı çözümdür.",
    [
      {
        question: "Taksim'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Taksim'e çok yakınız.",
      },
      {
        question: "Taksim'den kliniğe yürüyerek gidilebilir mi?",
        answer: "Evet. Taksim ve İstiklal Caddesi'ne yürüme mesafesindeyiz.",
      },
    ]
  ),
  "tarabya-acil-dis-hastanesi": e(
    "tarabya-acil-dis-hastanesi",
    "Tarabya, Sarıyer'in boğaz kıyısındaki seçkin semtlerindendir. Balıkçılar ve restoranlarıyla bilinen bölgede, akşam ve hafta sonu diş hekimi ihtiyacı artar. Tarabya'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Tarabya ve Sarıyer'deki sağlık kuruluşları gündüz hizmet verir; gece için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Tarabya'da gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Tarabya'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Tarabya merkeze yakındır; sahil yolu ile rahatça ulaşılır.",
      },
    ]
  ),
  "tuzla-acil-dis-hastanesi": e(
    "tuzla-acil-dis-hastanesi",
    "Tuzla, Anadolu Yakası'nın sahil ilçelerindendir. Sanayi bölgeleri ve sahil yerleşimleri, gece ve hafta sonu diş hekimi ihtiyacını artırır. Tuzla'dan 7/24 açık kliniğimize ulaşım kolaydır.",
    "Tuzla'daki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Tuzla'da gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Tuzla'dan kolayca ulaşılır.",
      },
      {
        question: "Tuzla'dan kliniğe ulaşım kolay mı?",
        answer: "Evet. Tuzla merkeze yakındır; sahil yolu ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "umraniye-acil-dis-hastanesi": e(
    "umraniye-acil-dis-hastanesi",
    "Ümraniye, Anadolu Yakası'nın hızla gelişen ilçelerindendir. Yoğun konut alanları ve iş merkezleri, gece saatlerinde diş hekimi ihtiyacını artırır. Ümraniye'den 7/24 açık kliniğimize ulaşım kolaydır.",
    "Ümraniye'deki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Ümraniye'de gece diş hekimi var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz 7/24 hizmet verir; Ümraniye'den kolayca ulaşılır.",
      },
      {
        question: "Ümraniye'den kliniğe ulaşım kolay mı?",
        answer: "Evet. Ümraniye merkeze yakındır; metrobüs ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
  "zeytinburnu-acil-dis-hastanesi": e(
    "zeytinburnu-acil-dis-hastanesi",
    "Zeytinburnu, Avrupa Yakası'nın merkezi ve yoğun ilçelerindendir. Sahil hattı ve sanayi bölgeleri, günün her saatinde hareketlidir. Zeytinburnu'ndan 7/24 açık kliniğimize ulaşım oldukça kolaydır.",
    "Zeytinburnu'ndaki sağlık kuruluşları gündüz hizmet verir; gece ve pazar için nöbetçi diş kliniği en pratik çözümdür.",
    [
      {
        question: "Zeytinburnu'nda gece diş kliniği var mı?",
        answer: "Evet. Nöbetçi diş hekimimiz gece saatlerinde de hizmet verir.",
      },
      {
        question: "Zeytinburnu'ndan kliniğe ulaşım kolay mı?",
        answer: "Evet. Zeytinburnu merkeze yakındır; metrobüs ve toplu taşıma ile rahatça ulaşılır.",
      },
    ]
  ),
};

export function getDistrictExtra(slug: string): DistrictExtra | undefined {
  return districtExtras[slug];
}
