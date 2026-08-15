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
