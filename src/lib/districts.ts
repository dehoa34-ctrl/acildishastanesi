export type District = {
  slug: string;
  name: string;
  district: string;
  area: "avrupa" | "merkez";
  description: string;
  intro: string;
  neighborhoods: string[];
};

const d = (
  slug: string,
  name: string,
  district: string,
  area: District["area"],
  description: string,
  intro: string,
  neighborhoods: string[] = []
): District => ({ slug, name, district, area, description, intro, neighborhoods });

export const districts: District[] = [

  d(
    "istanbul-acil-dis-hastanesi",
    "İstanbul",
    "İstanbul",
    "merkez",
    "İstanbul'da 7/24 açık acil diş hastanesi. Gece, pazar ve bayramda nöbetçi dişçi. Hemen arayın: 0533 582 82 79.",
    "İstanbul'un hangi yakasında olursanız olun, ani bir diş ağrısıyla karşılaştığınızda 7 gün 24 saat ulaşabileceğiniz tek telefon bizde: 0533 582 82 79. Gece yarısı başlayan ağrılar, pazar günü kırılan bir kaplama veya bayram tatilinde acil kanal tedavisi ihtiyacı… Hepsi için nöbetçi diş hekimi ekibimiz hazır bekliyor."
  ),
  d(
    "avrupa-yakasi-acil-dis-hastanesi",
    "Avrupa Yakası",
    "İstanbul (Avrupa Yakası)",
    "avrupa",
    "Avrupa Yakası'nda 7/24 açık acil diş hastanesi. Bakırköy, Beşiktaş, Şişli ve çevresinde gece nöbetçi dişçi.",
    "Avrupa Yakası'nda gece geç saatlerde diş ağrısı mı başladı? Pazar günü diş hekimi bulmakta zorlanmayın. Beşiktaş, Şişli, Bakırköy ve tüm Avrupa yakasında 7/24 hizmet veren kliniğimiz, acil durumlarda telefonla bile yol gösterir. Nöbetçi diş hekimimiz için arayın: 0533 582 82 79.",
    ["Beşiktaş", "Şişli", "Bakırköy", "Fatih"]
  ),
  d(
    "alibeykoy-acil-dis-hastanesi",
    "Alibeyköy",
    "Eyüpsultan",
    "avrupa",
    "Alibeyköy'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi, hafta sonu açık klinik. 0533 582 82 79.",
    "Alibeyköy'de pazar günü diş hekimi aramak zorunda kalmayın. Eyüpsultan'ın bu yoğun semtinde 7/24 hizmet veren kliniğimiz, gece saatlerinde bile diş ağrınızı dindirecek nöbetçi diş hekimi kadrosuna sahiptir. Hemen arayın: 0533 582 82 79.",
    ["Göktürk", "Yeşilpınar", "Rami", "Cebeci"]
  ),
  d(
    "atakoy-acil-dis-hastanesi",
    "Ataköy",
    "Bakırköy",
    "avrupa",
    "Ataköy'de 7/24 acil diş hastanesi. Gece ve pazar nöbetçi dişçi, acil tedavi. 0533 582 82 79.",
    "Ataköy'de hafta sonu diş ağrısı mı yaşıyorsunuz? Bakırköy'ün bu modern sahil semtinde 7/24 hizmet veren kliniğimiz, gece ve pazar günleri de nöbetçi diş hekimiyle hizmetinizdedir. Acil diş müdahalesi için 0533 582 82 79 numarasını arayabilirsiniz.",
    ["Atakent", "Yeşilköy", "Florya", "Şenlikköy"]
  ),
  d(
    "avcilar-acil-dis-hastanesi",
    "Avcılar",
    "Avcılar",
    "avrupa",
    "Avcılar'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi, pazar açık diş kliniği. 0533 582 82 79.",
    "Avcılar'da gece başlayan diş ağrıları için artık randevu beklemenize gerek yok. Üniversite öğrencilerinin yoğun yaşadığı bu semtte 7/24 hizmet veren kliniğimiz, nöbetçi diş hekimiyle hafta sonu dahil tüm acil işlemleri yapar. Telefon: 0533 582 82 79.",
    ["Cihangir", "Denizköşkler", "Ambarlı", "Yeşilkent"]
  ),
  d(
    "bagcilar-acil-dis-hastanesi",
    "Bağcılar",
    "Bağcılar",
    "avrupa",
    "Bağcılar'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi, bayramda açık klinik. 0533 582 82 79.",
    "Bağcılar'da ani diş problemlerinde 7/24 açık kliniğimize güvenebilirsiniz. İstanbul'un en kalabalık ilçelerinden birinde gece nöbetçi diş hekimi hizmeti veriyoruz; dolgu, kanal tedavisi, çekim ve protez onarımı için bize 0533 582 82 79'dan ulaşın.",
    ["Bağcılar Merkez", "Evren Mahallesi", "Kirazlı", "Yıldıztepe"]
  ),
  d(
    "bahcelievler-acil-dis-hastanesi",
    "Bahçelievler",
    "Bahçelievler",
    "avrupa",
    "Bahçelievler'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Bahçelievler'de pazar günü diş ağrısı çekenler için kliniğimiz kapılarını her zaman açar. Avrupa Yakası'nın merkezi ilçelerinden biri olan Bahçelievler'de 7/24 hizmet veriyor; acil diş tedavilerinizi gece ve hafta sonu dahil güvenle tamamlıyoruz.",
    ["Siyavuşpaşa", "Çobançeşme", "Zafer", "Bahçelievler Merkez"]
  ),
  d(
    "bahcesehir-acil-dis-hastanesi",
    "Bahçeşehir",
    "Başakşehir",
    "avrupa",
    "Bahçeşehir'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Bahçeşehir'de yaşayanlar için gece diş ağrısı çözümsüz değil. Başakşehir'in bu planlı ve modern yerleşiminde 7/24 açık kliniğimiz, nöbetçi diş hekimi kadrosuyla hafta sonu ve bayramlarda da hizmet verir. Acil durumunuzda 0533 582 82 79'u arayın.",
    ["Başakşehir Merkez", "Kayabaşı", "Altınşehir", "İkitelli"]
  ),
  d(
    "aksaray-acil-dis-hastanesi",
    "Aksaray",
    "Fatih",
    "avrupa",
    "Aksaray'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi, merkezi konumda klinik. 0533 582 82 79.",
    "Aksaray, İstanbul'un ulaşımı en kolay merkezlerinden biridir. Bu yüzden gece diş ağrınız olduğunda Fatih'in kalbinde 7/24 açık kliniğimize kolayca ulaşabilirsiniz. Nöbetçi diş hekimimiz, ağrı dindirme ve acil tedavi için her an hazırdır.",
    ["Yenikapı", "Kocamustafapaşa", "Cerrahpaşa", "Laleli"]
  ),
  d(
    "bakirkoy-acil-dis-hastanesi",
    "Bakırköy",
    "Bakırköy",
    "avrupa",
    "Bakırköy'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi, pazar açık diş kliniği. 0533 582 82 79.",
    "Bakırköy'de gece ya da hafta sonu diş hekimi bulmak zor olabilir; ama biz her zaman açığız. Sahil kenarındaki merkez konumumuz sayesinde Bakırköy ve çevresinden kolayca ulaşabilir, nöbetçi diş hekimimizden acil müdahale alabilirsiniz. Hemen arayın: 0533 582 82 79.",
    ["Cevizlik", "Zuhuratbaba", "Yeşilköy", "Florya"]
  ),
  d(
    "basaksehir-acil-dis-hastanesi",
    "Başakşehir",
    "Başakşehir",
    "avrupa",
    "Başakşehir'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Başakşehir'de yaşıyorsanız gece diş ağrısı çekmek artık tarihe karıştı. Şehrin en yeni ve modern yerleşimlerinden birinde 7/24 hizmet veren kliniğimiz, hafta sonu ve bayram günlerinde de nöbetçi diş hekimiyle yanınızda. Telefon: 0533 582 82 79.",
    ["Bahçeşehir", "Kayabaşı", "İkitelli", "Altınşehir"]
  ),
  d(
    "bayrampasa-acil-dis-hastanesi",
    "Bayrampaşa",
    "Bayrampaşa",
    "avrupa",
    "Bayrampaşa'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve bayramda açık klinik. 0533 582 82 79.",
    "Bayrampaşa'da ani başlayan diş ağrıları için 7/24 açık kliniğimiz her zaman hizmetinizdedir. İstanbul'un merkezi ilçelerinden biri olan Bayrampaşa'da nöbetçi diş hekimi bulmak için 0533 582 82 79'u aramanız yeterlidir.",
    ["İsmetpaşa", "Kartaltepe", "Terazidere", "Muratpaşa"]
  ),
  d(
    "besiktas-acil-dis-hastanesi",
    "Beşiktaş",
    "Beşiktaş",
    "avrupa",
    "Beşiktaş'ta 7/24 acil diş hastanesi. Gece nöbetçi dişçi, pazar açık klinik. 0533 582 82 79.",
    "Beşiktaş'ta gece geç saatlerde diş ağrısı mı yaşıyorsunuz? Boğaz'ın bu merkezi ilçesinde 7/24 açık kliniğimiz, hafta sonu ve bayram dahil her an nöbetçi diş hekimi bulundurur. Levent, Etiler ve Zincirlikuyu'dan kısa sürede ulaşabilirsiniz.",
    ["Levent", "Etiler", "Zincirlikuyu", "Ortaköy", "Bebek"]
  ),
  d(
    "beylikduzu-acil-dis-hastanesi",
    "Beylikdüzü",
    "Beylikdüzü",
    "avrupa",
    "Beylikdüzü'nde 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Beylikdüzü'nde gece ya da pazar günü diş ağrısı çekmek zorunda değilsiniz. Avrupa Yakası'nın bu genç ve modern ilçesinde 7/24 hizmet veren kliniğimiz, nöbetçi diş hekimiyle tüm acil işlemleri gerçekleştirir. Hemen arayın: 0533 582 82 79.",
    ["Gürpınar", "Mimarsinan", "Kavaklı", "Barış Mahallesi"]
  ),
  d(
    "beyoglu-acil-dis-hastanesi",
    "Beyoğlu",
    "Beyoğlu",
    "avrupa",
    "Beyoğlu'nda 7/24 acil diş hastanesi. Gece nöbetçi dişçi, merkezi konumda klinik. 0533 582 82 79.",
    "Beyoğlu'nda gece hayatının kalbinde diş ağrısı mı yaşandı? İstiklal Caddesi'ne yürüme mesafesindeki 7/24 açık kliniğimiz, gece saatlerinde bile nöbetçi diş hekimiyle hizmet verir. Acil durumlarda 0533 582 82 79 numarasını arayabilirsiniz.",
    ["İstiklal", "Taksim", "Galata", "Cihangir", "Şişhane"]
  ),
  d(
    "buyukcekmece-acil-dis-hastanesi",
    "Büyükçekmece",
    "Büyükçekmece",
    "avrupa",
    "Büyükçekmece'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Büyükçekmece'de hafta sonu diş ağrısı çekiyorsanız yalnız değilsiniz; kliniğimiz 7/24 açıktır. Göl kenarındaki bu şirin ilçede nöbetçi diş hekimi bulmak için 0533 582 82 79'u arayabilir, acil dolgu ve kanal tedavinizi hemen yaptırabilirsiniz.",
    ["Mimarsinan", "Kumburgaz", "Celaliye", "Tepecik"]
  ),
  d(
    "caglayan-acil-dis-hastanesi",
    "Çağlayan",
    "Kağıthane",
    "avrupa",
    "Çağlayan'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Çağlayan'da gece başlayan diş ağrılarında kliniğimiz her an hizmetinizdedir. Kağıthane'nin bu hareketli semtinde 7/24 açık olan kliniğimiz, nöbetçi diş hekimiyle acil kanal tedavisi, dolgu ve çekim işlemlerini gece saatlerinde bile yapar.",
    ["Kağıthane Merkez", "Şişli", "Mecidiyeköy", "Hamidiye"]
  ),
  d(
    "catalca-acil-dis-hastanesi",
    "Çatalca",
    "Çatalca",
    "avrupa",
    "Çatalca'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Çatalca gibi şehre uzak ilçelerde gece diş hekimi bulmak özellikle zordur. Bu yüzden Çatalca'dan gelecek acil hastalarımız için 7/24 açık kliniğimiz ve nöbetçi diş hekimi kadromuz her zaman hazırdır. Arayın: 0533 582 82 79.",
    ["Çatalca Merkez", "Karacaköy", "Binkılıç", "Yalıköy"]
  ),
  d(
    "cerrahpasa-acil-dis-hastanesi",
    "Cerrahpaşa",
    "Fatih",
    "avrupa",
    "Cerrahpaşa'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Cerrahpaşa'nın tarihi sokaklarında gece diş ağrısı çekenler için kliniğimiz 7/24 açıktır. Fatih'in bu meşhur semtinde nöbetçi diş hekimi hizmeti veriyor; üniversite ve hastane bölgesinde acil müdahale için her an yanınızdayız.",
    ["Aksaray", "Kocamustafapaşa", "Haseki", "Yenikapı"]
  ),
  d(
    "esenler-acil-dis-hastanesi",
    "Esenler",
    "Esenler",
    "avrupa",
    "Esenler'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve bayramda açık klinik. 0533 582 82 79.",
    "Esenler'de gece ya da bayramda diş ağrısı yaşayanlar için kliniğimiz her zaman açık. İstanbul'un merkezi ilçelerinden Esenler'de nöbetçi diş hekimi hizmeti sunuyor; acil dolgu, çekim ve kanal tedavisini aynı gün tamamlıyoruz.",
    ["Esenler Merkez", "Kemer", "Tuna", "Oruçreis"]
  ),
  d(
    "etiler-acil-dis-hastanesi",
    "Etiler",
    "Beşiktaş",
    "avrupa",
    "Etiler'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık diş hekimi. 0533 582 82 79.",
    "Etiler'de gece geç saatlerde diş ağrısı mı başladı? Beşiktaş'ın bu modern semtinde 7/24 açık kliniğimiz, nöbetçi diş hekimiyle hafta sonu dahil tüm acil işlemleri gerçekleştirir. Levent ve Akmerkez çevresinden kolayca ulaşabilirsiniz.",
    ["Levent", "Akmerkez", "Ulus", "Gayrettepe"]
  ),
  d(
    "eyup-acil-dis-hastanesi",
    "Eyüp",
    "Eyüpsultan",
    "avrupa",
    "Eyüp'te 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Eyüp'te gece başlayan diş ağrıları için 7/24 açık kliniğimiz hizmetinizdedir. Eyüpsultan'ın tarihi merkezinde nöbetçi diş hekimi bulmak için 0533 582 82 79'u arayabilir, acil müdahalenizi hemen gerçekleştirebilirsiniz.",
    ["Eyüp Merkez", "Alibeyköy", "Silahtarağa", "Göktürk"]
  ),
  d(
    "fatih-acil-dis-hastanesi",
    "Fatih",
    "Fatih",
    "avrupa",
    "Fatih'te 7/24 acil diş hastanesi. Gece nöbetçi dişçi, merkezi konumda klinik. 0533 582 82 79.",
    "Fatih'in tarihi yarımadasında gece diş ağrısı yaşayanlar için kliniğimiz 7/24 açıktır. Topkapı, Aksaray ve Cerrahpaşa bölgesine yakın konumumuz sayesinde nöbetçi diş hekimimize kolayca ulaşabilir, acil tedavinizi aynı gece tamamlatabilirsiniz.",
    ["Aksaray", "Cerrahpaşa", "Topkapı", "Vatan Caddesi"]
  ),
  d(
    "gaziosmanpasa-acil-dis-hastanesi",
    "Gaziosmanpaşa",
    "Gaziosmanpaşa",
    "avrupa",
    "Gaziosmanpaşa'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Gaziosmanpaşa'da ani diş problemlerinde 7/24 açık kliniğimize güvenebilirsiniz. Avrupa Yakası'nın merkezi ilçelerinden birinde gece nöbetçi diş hekimi hizmeti veriyor; acil dolgu, kanal ve çekim işlemlerini hafta sonu dahil yapıyoruz.",
    ["Karadeniz Mahallesi", "Yeni Mahalle", "Küçükköy", "Sarıgöl"]
  ),
  d(
    "gokturk-acil-dis-hastanesi",
    "Göktürk",
    "Eyüpsultan",
    "avrupa",
    "Göktürk'te 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Göktürk'te yaşayanlar için gece diş ağrısı artık sorun değil. Eyüpsultan'ın bu gelişkin semtinde 7/24 hizmet veren kliniğimiz, nöbetçi diş hekimi kadrosuyla hafta sonu ve bayram günlerinde de yanınızda. Hemen arayın: 0533 582 82 79.",
    ["Kemerburgaz", "Alibeyköy", "Göktürk Merkez", "Çiftalan"]
  ),
  d(
    "gultepe-acil-dis-hastanesi",
    "Gültepe",
    "Kağıthane",
    "avrupa",
    "Gültepe'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Gültepe'de gece diş ağrısı çekenler için 7/24 açık kliniğimiz hazır. Kağıthane'nin bu yoğun semtinde nöbetçi diş hekimi bulmak için 0533 582 82 79'u arayabilir, acil tedavinizi hemen yaptırabilirsiniz.",
    ["Çağlayan", "Kağıthane Merkez", "Hamidiye", "Seyrantepe"]
  ),
  d(
    "gungoren-acil-dis-hastanesi",
    "Güngören",
    "Güngören",
    "avrupa",
    "Güngören'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Güngören'de gece ya da hafta sonu diş ağrısı yaşıyorsanız kliniğimiz her zaman açıktır. Avrupa Yakası'nın merkezi ilçelerinden Güngören'de nöbetçi diş hekimi hizmeti sunuyor; acil müdahale için 0533 582 82 79'u arayabilirsiniz.",
    ["Merkez Mahallesi", "Haznedar", "Gençosman", "Abdurrahman Nafiz"]
  ),
  d(
    "istinye-acil-dis-hastanesi",
    "İstinye",
    "Sarıyer",
    "avrupa",
    "İstinye'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "İstinye'nin boğaz kıyısındaki lüks semtlerinde gece diş ağrısı yaşayanlar için kliniğimiz 7/24 açıktır. Sarıyer'in bu gözde bölgesinde nöbetçi diş hekimi hizmeti veriyor; acil müdahale ve estetik tedaviler için bize ulaşın.",
    ["Sarıyer Merkez", "Emirgan", "Yeniköy", "Tarabya"]
  ),
  d(
    "kagithane-acil-dis-hastanesi",
    "Kağıthane",
    "Kağıthane",
    "avrupa",
    "Kağıthane'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Kağıthane'de gece geç saatlerde diş ağrısı mı yaşıyorsunuz? Avrupa Yakası'nın merkezi ilçelerinden Kağıthane'de 7/24 hizmet veren kliniğimiz, nöbetçi diş hekimiyle hafta sonu ve bayram dahil tüm acil işlemleri yapar. Hemen arayın: 0533 582 82 79.",
    ["Çağlayan", "Gültepe", "Hamidiye", "Mecidiyeköy"]
  ),
  d(
    "kasimpasa-acil-dis-hastanesi",
    "Kasımpaşa",
    "Beyoğlu",
    "avrupa",
    "Kasımpaşa'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Kasımpaşa'da gece diş ağrısı yaşayanlar için kliniğimiz her an açıktır. Beyoğlu'nun bu tarihi semtinde nöbetçi diş hekimi hizmeti veriyor; acil müdahale için 0533 582 82 79'u arayabilirsiniz.",
    ["Camiikebir", "Hacıahmet", "Piyalepaşa", "Okmeydanı"]
  ),
  d(
    "kemerburgaz-acil-dis-hastanesi",
    "Kemerburgaz",
    "Eyüpsultan",
    "avrupa",
    "Kemerburgaz'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Kemerburgaz'da orman kenarında gece diş ağrısı çekenler için kliniğimiz 7/24 açıktır. Eyüpsultan'ın bu yeşil bölgesinde nöbetçi diş hekimi hizmeti sunuyor; acil tedavilerinizi hafta sonu ve bayramlarda dahi tamamlıyoruz.",
    ["Göktürk", "Çiftalan", "Kemerburgaz Merkez", "Alibeyköy"]
  ),
  d(
    "kucukcekmece-acil-dis-hastanesi",
    "Küçükçekmece",
    "Küçükçekmece",
    "avrupa",
    "Küçükçekmece'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Küçükçekmece'de gece ya da hafta sonu diş ağrısı yaşayanlar için kliniğimiz her zaman açıktır. Avrupa Yakası'nın kalabalık ilçelerinden biri olan Küçükçekmece'de nöbetçi diş hekimi hizmeti sunuyor; 0533 582 82 79 ile hemen ulaşın.",
    ["Halkalı", "Sefaköy", "Florya", "Atakent"]
  ),
  d(
    "kucukkoy-acil-dis-hastanesi",
    "Küçükköy",
    "Gaziosmanpaşa",
    "avrupa",
    "Küçükköy'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Küçükköy'de gece başlayan diş ağrıları için 7/24 açık kliniğimiz hizmetinizdedir. Gaziosmanpaşa'nın bu yoğun semtinde nöbetçi diş hekimi bulmak için 0533 582 82 79'u arayabilirsiniz.",
    ["Gaziosmanpaşa", "Sarıgöl", "Karadeniz", "Yeni Mahalle"]
  ),
  d(
    "maslak-acil-dis-hastanesi",
    "Maslak",
    "Sarıyer",
    "avrupa",
    "Maslak'ta 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Maslak'ın iş merkezlerinde gece geç saatlerde diş ağrısı mı başladı? Sarıyer'in bu finans bölgesinde 7/24 açık kliniğimiz, nöbetçi diş hekimiyle hafta sonu dahil tüm acil işlemleri gerçekleştirir. Hemen arayın: 0533 582 82 79.",
    ["Darüşşafaka", "İTÜ Ayazağa", "Huzur Mahallesi", "Ayazağa"]
  ),
  d(
    "mecidiyekoy-acil-dis-hastanesi",
    "Mecidiyeköy",
    "Şişli",
    "avrupa",
    "Mecidiyeköy'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Mecidiyeköy'de gece diş ağrısı çekenler için kliniğimiz her an açıktır. İstanbul'un ulaşım merkezlerinden biri olan Mecidiyeköy'de 7/24 hizmet veren kliniğimiz, nöbetçi diş hekimiyle acil müdahale için hemen yanınızda.",
    ["Şişli", "Fulya", "Gayrettepe", "Çağlayan"]
  ),
  d(
    "merter-acil-dis-hastanesi",
    "Merter",
    "Güngören",
    "avrupa",
    "Merter'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Merter'de gece başlayan diş ağrıları için 7/24 açık kliniğimiz hizmetinizdedir. Güngören'in bu işlek bölgesinde nöbetçi diş hekimi bulmak için 0533 582 82 79'u arayabilirsiniz.",
    ["Güngören", "Haznedar", "Bahçelievler", "Zeytinburnu"]
  ),
  d(
    "nisantasi-acil-dis-hastanesi",
    "Nişantaşı",
    "Şişli",
    "avrupa",
    "Nişantaşı'nda 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık diş hekimi. 0533 582 82 79.",
    "Nişantaşı'nda gece diş ağrısı yaşayanlar için kliniğimiz 7/24 açıktır. Şişli'nin bu prestijli semtinde nöbetçi diş hekimi hizmeti veriyor; estetik diş tedavileri ve acil müdahale için bize ulaşın.",
    ["Teşvikiye", "Harbiye", "Osmanbey", "Mecidiyeköy"]
  ),
  d(
    "okmeydani-acil-dis-hastanesi",
    "Okmeydanı",
    "Şişli",
    "avrupa",
    "Okmeydanı'nda 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Okmeydanı'nda gece geç saatlerde diş ağrısı mı başladı? Şişli'nin bu yoğun semtinde 7/24 açık kliniğimiz, nöbetçi diş hekimiyle hafta sonu dahil tüm acil işlemleri gerçekleştirir. Hemen arayın: 0533 582 82 79.",
    ["Küçükköy", "Çağlayan", "Kasımpaşa", "Şişli Merkez"]
  ),
  d(
    "sariyer-acil-dis-hastanesi",
    "Sarıyer",
    "Sarıyer",
    "avrupa",
    "Sarıyer'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık diş kliniği. 0533 582 82 79.",
    "Sarıyer'de gece diş ağrısı yaşayanlar için kliniğimiz 7/24 açıktır. Boğaz'ın kuzey ucundaki bu geniş ilçede nöbetçi diş hekimi hizmeti veriyor; acil dolgu, kanal ve çekim işlemlerini gece saatlerinde bile yapıyoruz.",
    ["İstinye", "Emirgan", "Tarabya", "Maslak", "Yeniköy"]
  ),
  d(
    "silivri-acil-dis-hastanesi",
    "Silivri",
    "Silivri",
    "avrupa",
    "Silivri'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Silivri'de gece diş hekimi bulmak özellikle zordur. Bu yüzden Silivri'den gelecek acil hastalarımız için 7/24 açık kliniğimiz ve nöbetçi diş hekimi kadromuz her zaman hazırdır. Arayın: 0533 582 82 79.",
    ["Silivri Merkez", "Selimpaşa", "Değirmenköy", "Gümüşyaka"]
  ),
  d(
    "sisli-acil-dis-hastanesi",
    "Şişli",
    "Şişli",
    "avrupa",
    "Şişli'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık diş kliniği. 0533 582 82 79.",
    "Şişli'nin kalbinde gece diş ağrısı yaşayanlar için kliniğimiz 7/24 açıktır. İstanbul'un merkezi ilçelerinden Şişli'de nöbetçi diş hekimi hizmeti veriyor; acil tedavilerinizi gece ve hafta sonu dahil tamamlıyoruz.",
    ["Nişantaşı", "Mecidiyeköy", "Bomonti", "Halaskargazi"]
  ),
  d(
    "taksim-acil-dis-hastanesi",
    "Taksim",
    "Beyoğlu",
    "avrupa",
    "Taksim'de 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Taksim Meydanı'na birkaç dakika mesafedeki 7/24 açık kliniğimiz, gece saatlerinde diş ağrısı çeken herkes için ideal adrestir. Beyoğlu'nun kalbinde nöbetçi diş hekimi hizmeti veriyor; 0533 582 82 79 ile hemen ulaşın.",
    ["İstiklal", "Gümüşsuyu", "Harbiye", "Cihangir"]
  ),
  d(
    "tarabya-acil-dis-hastanesi",
    "Tarabya",
    "Sarıyer",
    "avrupa",
    "Tarabya'da 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Tarabya'nın boğaz kıyısındaki konaklarında gece diş ağrısı çekenler için kliniğimiz 7/24 açıktır. Sarıyer'in bu şık sahil semtinde nöbetçi diş hekimi hizmeti sunuyor; acil müdahale için 0533 582 82 79'u arayın.",
    ["Yeniköy", "İstinye", "Sarıyer Merkez", "Emirgan"]
  ),
  d(
    "zeytinburnu-acil-dis-hastanesi",
    "Zeytinburnu",
    "Zeytinburnu",
    "avrupa",
    "Zeytinburnu'nda 7/24 acil diş hastanesi. Gece nöbetçi dişçi ve pazar açık klinik. 0533 582 82 79.",
    "Zeytinburnu'nda gece diş ağrısı çekenler için kliniğimiz her an açıktır. Avrupa Yakası'nın merkezi ilçelerinden Zeytinburnu'nda nöbetçi diş hekimi hizmeti veriyor; acil tedavilerinizi gece ve hafta sonu dahil tamamlıyoruz.",
    ["Maltepe Mahallesi", "Sümer", "Çırpıcı", "Kazlıçeşme"]
  ),
];

export function getDistrict(slug: string) {
  return districts.find((x) => x.slug === slug);
}