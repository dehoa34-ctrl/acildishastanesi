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
    short: "Ã‡ene cerrahisi baÅŸta aÄŸÄ±z ve diÅŸlere baÄŸlÄ± kistler tÃ¼mÃ¶rler gibi patolojilerin yanÄ± sÄ±ra diÅŸ ve Ã§ene kÄ±rÄ±klarÄ±...",
    intro: "Ã‡ene cerrahisi baÅŸta aÄŸÄ±z ve diÅŸlere baÄŸlÄ± kistler tÃ¼mÃ¶rler gibi patolojilerin yanÄ± sÄ±ra diÅŸ ve Ã§ene kÄ±rÄ±klarÄ± Ã§ene kemiÄŸi iÃ§inde gÃ¶mÃ¼k kalmÄ±ÅŸ diÅŸlerin Ã§Ä±kartÄ±lmasÄ± veya sÃ¼rdÃ¼rÃ¼lmesi, protez yapÄ±mÄ±na yardÄ±mcÄ± olmak iÃ§in aÄŸzÄ±n sert ve yumuÅŸak dokularÄ±nda yapÄ±lan dÃ¼zeltmeleri iÃ§ermektedir. Ã‡ene-yÃ¼z bÃ¶lgesi aÄŸrÄ±larÄ±, alt Ã§ene eklemi hastalÄ±klarÄ± tÃ¼kÃ¼rÃ¼k bezi rahatsÄ±zlÄ±klarÄ± da Ã§ene cerrahisinin Ã§alÄ±ÅŸma alanÄ± iÃ§indedir. AynÄ± zamanda bazÄ± sistemik hastalÄ±klarÄ±n aÄŸÄ±z iÃ§erisindeki belirtilerinin saptanmasÄ± ve tedavisi de Ã§alÄ±ÅŸma alanÄ±na girer.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "dijital-dis-hekimligi",
    name: "Dijital DiÅŸ HekimliÄŸi",
    short: "DiÅŸ estetiÄŸi ve tedavisinde Ã§Ã¶zÃ¼me hemen ulaÅŸmak iÃ§in, dijital diÅŸ hekimliÄŸinin hÄ±zlÄ± ve etkili Ã§Ã¶zÃ¼mlerinden ...",
    intro: "DiÅŸ estetiÄŸi ve tedavisinde Ã§Ã¶zÃ¼me hemen ulaÅŸmak iÃ§in, dijital diÅŸ hekimliÄŸinin hÄ±zlÄ± ve etkili Ã§Ã¶zÃ¼mlerinden yararlanÄ±n. Cad-cam hassas gÃ¶rÃ¼ntÃ¼leme sistemleri ve bilgisayar programlarÄ± ile diÅŸlerinize tam uyum saÄŸlayan tedavileri doktorunuz ile birlikte tasarlayÄ±n ve sonucu aynÄ± gÃ¼n iÃ§erisinde alÄ±n!",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "kanal-tedavisi-nedir-kanal-tedavisi-neden-yapilir",
    name: "Kanal Tedavisi Nedir?",
    short: "Kanal tedavisi, diÅŸin iÃ§indeki enfekte sinir ve dokularÄ±n temizlenip doldurulmasÄ±yla diÅŸi kurtarmaya yÃ¶nelik b...",
    intro: "Kanal tedavisi, diÅŸin iÃ§indeki enfekte sinir ve dokularÄ±n temizlenip doldurulmasÄ±yla diÅŸi kurtarmaya yÃ¶nelik bir tedavi yÃ¶ntemidir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "protetik-dis-tedavisi-nedir-protetik-dis-tedavisi-nasil-yapilir",
    name: "Protetik DiÅŸ Tedavisi Nedir?",
    short: "Protetik diÅŸ tedavisi, hastanÄ±n eksik diÅŸlerinin yerine fonksiyonel ve estetik Ã§Ã¶zÃ¼mler getiren bir dizi adÄ±m ...",
    intro: "Protetik diÅŸ tedavisi, hastanÄ±n eksik diÅŸlerinin yerine fonksiyonel ve estetik Ã§Ã¶zÃ¼mler getiren bir dizi adÄ±m iÃ§erir. Ä°lk olarak, hastanÄ±n aÄŸÄ±z yapÄ±sÄ± incelenir ve diÅŸ Ã¶lÃ§Ã¼leri alÄ±nÄ±r. Bu sÃ¼reÃ§te diÅŸ hekimi, hastanÄ±n ihtiyaÃ§larÄ±na ve aÄŸÄ±z yapÄ±sÄ±na gÃ¶re bir tedavi planÄ± oluÅŸturur. Protez diÅŸlerin veya kaplamalarÄ±n doÄŸru bir ÅŸekilde yerleÅŸtirilebilmesi iÃ§in diÅŸlerin ya da Ã§ene yapÄ±sÄ±nÄ±n durumuna gÃ¶re iÅŸlem yapÄ±lÄ±r. ArdÄ±ndan, alÄ±nan Ã¶lÃ§Ã¼ler doÄŸrultusunda protezler laboratuvarda Ã¶zel olarak hazÄ±rlanÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "kirik-dis-tedavisi",
    name: "KÄ±rÄ±k DiÅŸ Tedavisi",
    short: "KÄ±rÄ±k diÅŸ tedavisi, Ã§atlamÄ±ÅŸ veya kÄ±rÄ±lmÄ±ÅŸ diÅŸin yapÄ±sÄ±nÄ± ve iÅŸlevini onarmak iÃ§in uygulanan diÅŸ hekimliÄŸi yÃ¶n...",
    intro: "KÄ±rÄ±k diÅŸ tedavisi, Ã§atlamÄ±ÅŸ veya kÄ±rÄ±lmÄ±ÅŸ diÅŸin yapÄ±sÄ±nÄ± ve iÅŸlevini onarmak iÃ§in uygulanan diÅŸ hekimliÄŸi yÃ¶ntemidir. Tedavi yÃ¶ntemi, kÄ±rÄ±ÄŸÄ±n boyutu ve konumuna gÃ¶re deÄŸiÅŸiklik gÃ¶sterir. KÃ¼Ã§Ã¼k kÄ±rÄ±klar genellikle dolgu veya bonding ile onarÄ±lÄ±rken, daha bÃ¼yÃ¼k hasarlarda kanal tedavisi ve kaplama gerekebilir. DiÅŸ kÃ¶kÃ¼ne kadar inen ciddi kÄ±rÄ±klarda ise diÅŸ Ã§ekimi ve implant tedavisi tercih edilebilir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "pedodonti-cocuk-dis-hekimligi",
    name: "Pedodonti (Ã‡ocuk DiÅŸ HekimliÄŸi)",
    short: "Pedodonti, Ã§ocuklarÄ±n aÄŸÄ±z ve diÅŸ saÄŸlÄ±ÄŸÄ±yla ilgilenen diÅŸ hekimliÄŸi dalÄ±dÄ±r. 0-13 yaÅŸ arasÄ± Ã§ocuklarÄ±n sÃ¼t di...",
    intro: "Pedodonti, Ã§ocuklarÄ±n aÄŸÄ±z ve diÅŸ saÄŸlÄ±ÄŸÄ±yla ilgilenen diÅŸ hekimliÄŸi dalÄ±dÄ±r. 0-13 yaÅŸ arasÄ± Ã§ocuklarÄ±n sÃ¼t diÅŸleri ve daimi diÅŸlerinin saÄŸlÄ±klÄ± geliÅŸimi  pedodonti  uzmanlarÄ±nÄ±n sorumluluÄŸundadÄ±r. Bu alanda Ã§Ã¼rÃ¼k tedavisi, diÅŸ Ã§ekimi, fissÃ¼r Ã¶rtÃ¼cÃ¼ uygulamalarÄ± ve travma tedavileri yapÄ±lÄ±r. AyrÄ±ca Ã§ocuklara diÅŸ fÄ±rÃ§alama alÄ±ÅŸkanlÄ±ÄŸÄ± kazandÄ±rmak ve diÅŸ hekimi korkusunu yenmek iÃ§in Ã¶zel iletiÅŸim yÃ¶ntemleri kullanÄ±lÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "ortodonti-nedir-ortodonti-tedavisi-ne-demek",
    name: "Ortodonti Nedir?",
    short: "DiÅŸ teli tedavisi, diÅŸ hekimliÄŸinin bir uzmanlÄ±k alanÄ± olan ortodonti bÃ¶lÃ¼mÃ¼ tarafÄ±ndan gerÃ§ekleÅŸtirilir. Orto...",
    intro: "DiÅŸ teli tedavisi, diÅŸ hekimliÄŸinin bir uzmanlÄ±k alanÄ± olan ortodonti bÃ¶lÃ¼mÃ¼ tarafÄ±ndan gerÃ§ekleÅŸtirilir. Ortodonti uzmanlarÄ±, diÅŸlerdeki ve Ã§enedeki hizalama sorunlarÄ±nÄ± dÃ¼zeltmek iÃ§in diÅŸ teli gibi tedavi yÃ¶ntemlerini uygularlar. DiÅŸ teli tedavisi, diÅŸlerin doÄŸru pozisyona getirilmesi amacÄ±yla kullanÄ±lan en yaygÄ±n yÃ¶ntemlerden biridir. DiÅŸler arasÄ±ndaki boÅŸluklarÄ± kapatmak, Ã§apraÅŸÄ±k diÅŸleri dÃ¼zeltmek ve Ã§ene bozukluklarÄ±nÄ± tedavi etmek iÃ§in diÅŸ teli kullanÄ±lÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "periodontoloji",
    name: "Periodontoloji",
    short: "Periodontoloji, diÅŸleri Ã§evreleyen yumuÅŸak dokularÄ±n (diÅŸ eti) ve diÅŸleri Ã§ene kemiÄŸine baÄŸlayan sert dokularÄ±...",
    intro: "Periodontoloji, diÅŸleri Ã§evreleyen yumuÅŸak dokularÄ±n (diÅŸ eti) ve diÅŸleri Ã§ene kemiÄŸine baÄŸlayan sert dokularÄ±n saÄŸlÄ±ÄŸÄ±yla ilgilenen diÅŸ hekimliÄŸi uzmanlÄ±k dalÄ±dÄ±r. Halk arasÄ±nda â€œdiÅŸ eti hastalÄ±klarÄ± bÃ¶lÃ¼mÃ¼â€ olarak bilinse de, Ã§alÄ±ÅŸma alanÄ± sadece iltihap tedavisiyle sÄ±nÄ±rlÄ± deÄŸildir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "branc",
  },
  {
    slug: "implant-nedir-implant-tedavisi-nasil-yapilir",
    name: "Ä°mplant Nedir? Ä°mplant Tedavisi NasÄ±l YapÄ±lÄ±r?",
    short: "Komple implant, aÄŸÄ±zdaki tÃ¼m diÅŸlerin eksik olduÄŸu durumlarda tÃ¼m aÄŸÄ±z iÃ§in uygulanan bir tedavi yÃ¶ntemidir. B...",
    intro: "Komple implant, aÄŸÄ±zdaki tÃ¼m diÅŸlerin eksik olduÄŸu durumlarda tÃ¼m aÄŸÄ±z iÃ§in uygulanan bir tedavi yÃ¶ntemidir. Bu tedavide alt ve Ã¼st Ã§ene iÃ§in belirli sayÄ±da implant yerleÅŸtirilir ve Ã¼zerine sabit veya hareketli protez diÅŸler takÄ±lÄ±r. Ä°lk aÅŸamada Ã§ene yapÄ±sÄ± incelenir ve gerekli gÃ¶rÃ¼len implant sayÄ±sÄ± belirlenir. Cerrahi iÅŸlemle Ã§ene kemiÄŸine implantlar yerleÅŸtirilir ve iyileÅŸme sÃ¼reci baÅŸlar. ",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "all-on-four-implant",
    name: "All On Four Ä°mplant",
    short: "All On Four implant konsepti, adÄ±ndan da anlaÅŸÄ±lacaÄŸÄ± Ã¼zere, tam diÅŸsiz bir Ã§ene kemiÄŸine yerleÅŸtirilen dÃ¶rt a...",
    intro: "All On Four implant konsepti, adÄ±ndan da anlaÅŸÄ±lacaÄŸÄ± Ã¼zere, tam diÅŸsiz bir Ã§ene kemiÄŸine yerleÅŸtirilen dÃ¶rt adet dental implant Ã¼zerine sabit bir protezin vidalanmasÄ± esasÄ±na dayanÄ±r. Bu teknik, geleneksel implant uygulamalarÄ±ndan biyomekanik prensipleriyle ayrÄ±lÄ±r. Standart uygulamalarda Ã§ene kemiÄŸine dikey olarak 6 veya 8 implant yerleÅŸtirmek gerekirken, All On Four tekniÄŸinde Ã¶n bÃ¶lgeye iki adet implant dikey, arka bÃ¶lgeye ise iki adet implant 30 ila 45 derecelik aÃ§Ä±larla yerleÅŸtirilir. Bu aÃ§Ä±lÄ± yerleÅŸim, anatomik engellerden (sinÃ¼s boÅŸluklarÄ± ve sinir kanallarÄ±) kaÃ§Ä±nmamÄ±zÄ± saÄŸlarken, implantlarÄ±n daha kaliteli kemik dokusuna tutunmasÄ±na olanak tanÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "bir-gunde-implant",
    name: "Bir GÃ¼nde Ä°mplant",
    short: "Bir gÃ¼nde implant, diÅŸ Ã§ekimi ile implant vidasÄ±nÄ±n aynÄ± seansta yerleÅŸtirildiÄŸi ve Ã¼zerine geÃ§ici diÅŸin takÄ±l...",
    intro: "Bir gÃ¼nde implant, diÅŸ Ã§ekimi ile implant vidasÄ±nÄ±n aynÄ± seansta yerleÅŸtirildiÄŸi ve Ã¼zerine geÃ§ici diÅŸin takÄ±ldÄ±ÄŸÄ± hÄ±zlÄ± bir tedavi yÃ¶ntemidir. Klasik implant tedavisindeki aylarca bekleme sÃ¼resini ortadan kaldÄ±rdÄ±ÄŸÄ± iÃ§in tÄ±p literatÃ¼rÃ¼nde â€œImmediate YÃ¼klemeâ€ olarak da bilinir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "sinus-lifting-sinus-kaldirma-nedir-sinus-sarkmasi-belirtileri-nelerdir",
    name: "Sinus Lifting (SinÃ¼s KaldÄ±rma)",
    short: "Sinus lifting, Ã¼st Ã§ene arka bÃ¶lgesine implant yerleÅŸtirmek iÃ§in sinÃ¼s boÅŸluÄŸunu yÃ¼kselterek kemik hacmini art...",
    intro: "Sinus lifting, Ã¼st Ã§ene arka bÃ¶lgesine implant yerleÅŸtirmek iÃ§in sinÃ¼s boÅŸluÄŸunu yÃ¼kselterek kemik hacmini artÄ±ran cerrahi bir iÅŸlemdir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "dis-cekimi-nedir-dis-nasil-cekilir-dis-cekimi-ne-kadar-surer",
    name: "DiÅŸ Ã‡ekimi Nedir? DiÅŸ NasÄ±l Ã‡ekilir?",
    short: "DiÅŸ Ã§ekiminin sÃ¼resi, diÅŸin durumu ve Ã§ekilecek diÅŸin tÃ¼rÃ¼ne gÃ¶re deÄŸiÅŸiklik gÃ¶sterebilir. Basit bir diÅŸ Ã§ekim...",
    intro: "DiÅŸ Ã§ekiminin sÃ¼resi, diÅŸin durumu ve Ã§ekilecek diÅŸin tÃ¼rÃ¼ne gÃ¶re deÄŸiÅŸiklik gÃ¶sterebilir. Basit bir diÅŸ Ã§ekimi genellikle 20 ila 30 dakika arasÄ±nda tamamlanÄ±r. Ancak, gÃ¶mÃ¼lÃ¼ veya karmaÅŸÄ±k bir diÅŸ Ã§ekimi iÅŸlemi bu sÃ¼reyi uzatabilir ve yaklaÅŸÄ±k 45 dakikaya kadar sÃ¼rebilir. Ã–zellikle azÄ± diÅŸi Ã§ekimi ya da 20â€™lik diÅŸ Ã§ekimi gibi daha zorlu vakalarda iÅŸlem daha uzun sÃ¼rebilir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "20lik-dis-nedir-20lik-dis-ne-ise-yarar-20lik-dis-cekimi",
    name: "20'lik DiÅŸ Nedir? 20'lik DiÅŸ Ã‡ekimi",
    short: "20â€™lik diÅŸ belirtileri genellikle diÅŸlerin Ã§Ä±kma sÃ¼reciyle ortaya Ã§Ä±kar. Bu diÅŸlerin Ã§Ä±karken neden olduÄŸu en ...",
    intro: "20â€™lik diÅŸ belirtileri genellikle diÅŸlerin Ã§Ä±kma sÃ¼reciyle ortaya Ã§Ä±kar. Bu diÅŸlerin Ã§Ä±karken neden olduÄŸu en yaygÄ±n belirtiler arasÄ±nda arka diÅŸ etlerinde aÄŸrÄ±, ÅŸiÅŸlik, kÄ±zarÄ±klÄ±k ve hassasiyet yer alÄ±r. AyrÄ±ca Ã§iÄŸneme sÄ±rasÄ±nda yaÅŸanan zorluklar ve aÄŸÄ±z aÃ§mada gÃ¼Ã§lÃ¼k gibi semptomlar da yaygÄ±ndÄ±r. Bu diÅŸlerin Ã§Ä±kma sÃ¼recinde, bÃ¶lgedeki diÅŸ etinde iltihaplanma da gÃ¶rÃ¼lebilir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "gomulu-20lik-dis-nedir-gomulu-20lik-dis-cekimi",
    name: "GÃ¶mÃ¼lÃ¼ 20'lik DiÅŸ Nedir? GÃ¶mÃ¼lÃ¼ 20'lik DiÅŸ Ã‡ekimi",
    short: "GÃ¶mÃ¼lÃ¼ 20â€™lik diÅŸ Ã§ekimi sonrasÄ± aÄŸrÄ±, genellikle iÅŸlemden sonraki ilk 24 ila 48 saat iÃ§inde en yoÄŸun seviyede...",
    intro: "GÃ¶mÃ¼lÃ¼ 20â€™lik diÅŸ Ã§ekimi sonrasÄ± aÄŸrÄ±, genellikle iÅŸlemden sonraki ilk 24 ila 48 saat iÃ§inde en yoÄŸun seviyede olur ve daha sonra kademeli olarak azalÄ±r. AÄŸrÄ±nÄ±n ÅŸiddeti, diÅŸin ne kadar derin gÃ¶mÃ¼lÃ¼ olduÄŸuna ve Ã§ekim iÅŸleminin zorluÄŸuna baÄŸlÄ± olarak deÄŸiÅŸir. Basit bir Ã§ekimde aÄŸrÄ± birkaÃ§ gÃ¼n iÃ§inde hafiflerken, daha karmaÅŸÄ±k cerrahi iÅŸlemlerde bu sÃ¼re bir hafta ya da daha fazla sÃ¼rebilir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "komplikasyonlu-dis-cekimi-nedir-komplikasyonlu-dis-cekimi-nasil-yapilir",
    name: "Komplikasyonlu DiÅŸ Ã‡ekimi Nedir?",
    short: "Komplikasyonlu diÅŸ Ã§ekimi, diÅŸin Ã§Ä±karÄ±lmasÄ±nÄ±n zor olduÄŸu durumlarda cerrahi tekniklerle yapÄ±lÄ±r. Ä°lk adÄ±mda ...",
    intro: "Komplikasyonlu diÅŸ Ã§ekimi, diÅŸin Ã§Ä±karÄ±lmasÄ±nÄ±n zor olduÄŸu durumlarda cerrahi tekniklerle yapÄ±lÄ±r. Ä°lk adÄ±mda diÅŸ hekimi, diÅŸin tam pozisyonunu ve kÃ¶klerinin durumunu belirlemek iÃ§in rÃ¶ntgen Ã§eker. DiÅŸin gÃ¶mÃ¼lÃ¼ olmasÄ±, kÃ¶klerinin eÄŸri ya da yayÄ±lmÄ±ÅŸ olmasÄ± gibi durumlar Ã§ekimi zorlaÅŸtÄ±ran faktÃ¶rlerdir. Ã‡ekim sÃ¼recinde lokal anestezi kullanÄ±lÄ±r ve diÅŸ Ã§evresindeki diÅŸ eti dokularÄ± dikkatlice aÃ§Ä±larak diÅŸ kÃ¶kÃ¼ne ulaÅŸÄ±lÄ±r. Gerekirse diÅŸ parÃ§alara ayrÄ±larak Ã§Ä±karÄ±lÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "sut-dis-cekimi",
    name: "SÃ¼t DiÅŸ Ã‡ekimi",
    short: "SÃ¼t diÅŸ Ã§ekimi, sallanarak kendiliÄŸinden dÃ¼ÅŸmeyen veya derin Ã§Ã¼rÃ¼k nedeniyle kurtarÄ±lamayan geÃ§ici diÅŸlerin he...",
    intro: "SÃ¼t diÅŸ Ã§ekimi, sallanarak kendiliÄŸinden dÃ¼ÅŸmeyen veya derin Ã§Ã¼rÃ¼k nedeniyle kurtarÄ±lamayan geÃ§ici diÅŸlerin hekim tarafÄ±ndan alÄ±nmasÄ± iÅŸlemidir. Genellikle diÅŸ kÃ¶kÃ¼nde oluÅŸan inatÃ§Ä± enfeksiyonlar veya alttan gelen daimi diÅŸe yer aÃ§mak iÃ§in bu yÃ¶nteme baÅŸvurulur.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "cerrahi",
  },
  {
    slug: "dental-bonding",
    name: "Dental Bonding",
    short: "Dental bonding, diÅŸin doÄŸal rengine uygun kompozit reÃ§ine malzemesinin diÅŸe yapÄ±ÅŸtÄ±rÄ±larak ÅŸekil verilmesi iÅŸl...",
    intro: "Dental bonding, diÅŸin doÄŸal rengine uygun kompozit reÃ§ine malzemesinin diÅŸe yapÄ±ÅŸtÄ±rÄ±larak ÅŸekil verilmesi iÅŸlemidir. Hekimler bu yÃ¶ntemi genellikle kÄ±rÄ±k, Ã§atlak diÅŸleri onarmak veya diÅŸler arasÄ±ndaki ayrÄ±k boÅŸluklarÄ± (diastema) kapatmak iÃ§in kullanÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "dis-beyazlatma-bleaching-nedir-en-etkili-dis-beyazlatma-yontemleri-nelerdir",
    name: "DiÅŸ Beyazlatma (Bleaching) Nedir?",
    short: "DiÅŸ beyazlatma fiyatlarÄ± , tercih edilen yÃ¶ntem ve klinik koÅŸullarÄ±na baÄŸlÄ± olarak farklÄ±lÄ±k gÃ¶sterebilir. Pro...",
    intro: "DiÅŸ beyazlatma fiyatlarÄ± , tercih edilen yÃ¶ntem ve klinik koÅŸullarÄ±na baÄŸlÄ± olarak farklÄ±lÄ±k gÃ¶sterebilir. Profesyonel diÅŸ beyazlatma iÅŸlemleri, genellikle diÅŸ kliniÄŸinde yapÄ±lan lazerle beyazlatma ya da ev tipi beyazlatma kitleri gibi seÃ§enekler arasÄ±nda deÄŸiÅŸiklik gÃ¶sterir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "inlay-onlay-overlay-dolgular",
    name: "Inlay Onlay Overlay Dolgular",
    short: "DiÅŸle aynÄ± sertlikte olan bu porselen dolgu, Ä±sÄ±rma kuvvetlerinden oluÅŸan kÄ±rÄ±lmalarÄ± Ã¶nler ve diÅŸin eskisi ka...",
    intro: "DiÅŸle aynÄ± sertlikte olan bu porselen dolgu, Ä±sÄ±rma kuvvetlerinden oluÅŸan kÄ±rÄ±lmalarÄ± Ã¶nler ve diÅŸin eskisi kadar saÄŸlÄ±klÄ± olmasÄ±nÄ± saÄŸlar.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "seffaf-plak-nedir-seffaf-dis-plagi-ne-ise-yarar",
    name: "Åeffaf Plak Nedir? Åeffaf DiÅŸ PlaÄŸÄ± Ne Ä°ÅŸe Yarar?",
    short: "Åeffaf plak tedavisi, diÅŸlerin detaylÄ± bir analizinin yapÄ±lmasÄ± ile baÅŸlar. DiÅŸ hekiminiz, plaklarÄ±n ne kadar ...",
    intro: "Åeffaf plak tedavisi, diÅŸlerin detaylÄ± bir analizinin yapÄ±lmasÄ± ile baÅŸlar. DiÅŸ hekiminiz, plaklarÄ±n ne kadar sÃ¼reyle ve hangi sÄ±rayla kullanÄ±lacaÄŸÄ±nÄ± belirlemek iÃ§in diÅŸ yapÄ±nÄ±zÄ± inceler ve dijital taramalar ya da Ã¶lÃ§Ã¼ler alÄ±r. Åeffaf plak tedavisi sÄ±rasÄ±nda, her plak seti genellikle 1-2 hafta boyunca kullanÄ±lÄ±r ve sonra bir sonraki aÅŸamaya geÃ§ilir. Plaklar her aÅŸamada diÅŸleri biraz daha dÃ¼zeltir ve nihai pozisyona ulaÅŸana kadar kullanÄ±lÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "lamine-dis-kaplama-nedir-yaprak-dis-kaplama-nasil-yapilir",
    name: "Lamine DiÅŸ Kaplama Nedir? Yaprak DiÅŸ Kaplama NasÄ±l YapÄ±lÄ±r?",
    short: "Lamine diÅŸ kaplama iÅŸlemi, diÅŸ hekiminin diÅŸleri deÄŸerlendirmesi ve uygun Ã¶lÃ§Ã¼leri almasÄ±yla baÅŸlar. Ã–ncelikle...",
    intro: "Lamine diÅŸ kaplama iÅŸlemi, diÅŸ hekiminin diÅŸleri deÄŸerlendirmesi ve uygun Ã¶lÃ§Ã¼leri almasÄ±yla baÅŸlar. Ã–ncelikle diÅŸlerin yÃ¼zeyi hafifÃ§e inceltilir ve ardÄ±ndan hastanÄ±n diÅŸ yapÄ±sÄ±na uygun lamine kaplamalar Ã¶zel olarak hazÄ±rlanÄ±r. Bu iÅŸlem sÄ±rasÄ±nda diÅŸlerin rengi, ÅŸekli ve kaplama kalÄ±nlÄ±ÄŸÄ± detaylÄ± olarak planlanÄ±r. DiÅŸler Ã¶lÃ§Ã¼ye gÃ¶re hazÄ±rlandÄ±ÄŸÄ±nda, geÃ§ici kaplamalar yerleÅŸtirilir ve hasta kalÄ±cÄ± kaplamalar iÃ§in birkaÃ§ gÃ¼n bekler. Bu sÃ¼reÃ§te geÃ§ici lamine diÅŸ kaplamalarÄ± hastaya uygulanarak kaplamanÄ±n son gÃ¶rÃ¼nÃ¼mÃ¼ deÄŸerlendirilir ve hasta memnuniyeti saÄŸlanÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "dis-teli-tedavisi-nedir-dis-teli-ne-ise-yarar",
    name: "DiÅŸ Teli Tedavisi Nedir? DiÅŸ Teli Ne Ä°ÅŸe Yarar?",
    short: "DiÅŸ teli tedavisine baÅŸlamadan Ã¶nce, aÄŸÄ±z saÄŸlÄ±ÄŸÄ±nÄ±n uygun durumda olduÄŸundan emin olunmalÄ±dÄ±r. DiÅŸ teli takÄ±l...",
    intro: "DiÅŸ teli tedavisine baÅŸlamadan Ã¶nce, aÄŸÄ±z saÄŸlÄ±ÄŸÄ±nÄ±n uygun durumda olduÄŸundan emin olunmalÄ±dÄ±r. DiÅŸ teli takÄ±lmadan Ã¶nce diÅŸ Ã§Ã¼rÃ¼kleri tedavi edilmeli, diÅŸ eti hastalÄ±klarÄ± kontrol altÄ±na alÄ±nmalÄ± ve diÅŸler detaylÄ± bir ÅŸekilde temizlenmelidir. DiÅŸ hekimi, aÄŸÄ±z yapÄ±nÄ±zÄ± inceleyerek tedavi planÄ± hazÄ±rlar ve diÅŸ teli tedavisine baÅŸlamadan Ã¶nce diÅŸlerdeki gerekli tedavileri tamamlar. EÄŸer diÅŸlerde eksiklik veya tedavi edilmesi gereken baÅŸka sorunlar varsa, bunlar diÅŸ teli takÄ±lmadan Ã¶nce giderilmelidir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "pembe-estetik-estetik-dis-eti-tedavisi",
    name: "Pembe Estetik (Estetik DiÅŸ Eti Tedavisi)",
    short: "Pembe estetik, diÅŸ etlerinin saÄŸlÄ±klÄ±, simetrik ve estetik bir gÃ¶rÃ¼nÃ¼me kavuÅŸturulmasÄ± iÃ§in yapÄ±lan tedavilerd...",
    intro: "Pembe estetik, diÅŸ etlerinin saÄŸlÄ±klÄ±, simetrik ve estetik bir gÃ¶rÃ¼nÃ¼me kavuÅŸturulmasÄ± iÃ§in yapÄ±lan tedavilerdir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "zirkonyum-dis-nedir-zirkonyum-dis-kaplama-nedir",
    name: "Zirkonyum DiÅŸ Nedir? Zirkonyum DiÅŸ Kaplama",
    short: "Zirkonyum diÅŸ kaplama, doÄŸal diÅŸ gÃ¶rÃ¼nÃ¼mÃ¼ne en yakÄ±n estetik sonucu saÄŸlayan beyaz renkli porselen destekli ka...",
    intro: "Zirkonyum diÅŸ kaplama, doÄŸal diÅŸ gÃ¶rÃ¼nÃ¼mÃ¼ne en yakÄ±n estetik sonucu saÄŸlayan beyaz renkli porselen destekli kaplamadÄ±r. Bu kaplamalar dayanÄ±klÄ± yapÄ±sÄ±yla hem Ã¶n hem arka diÅŸlerde gÃ¼venle kullanÄ±labilir. IÅŸÄ±k geÃ§irgenliÄŸi sayesinde doÄŸal diÅŸe Ã§ok benzer ve metal iÃ§ermez. Alerji riski dÃ¼ÅŸÃ¼k olduÄŸu iÃ§in hassas bÃ¼nyelerde de tercih edilir. DiÅŸ eti uyumu yÃ¼ksektir ve zamanla renk deÄŸiÅŸtirmez. Genellikle Ã§Ã¼rÃ¼k, kÄ±rÄ±k veya estetik sorunlu diÅŸlerde uygulanÄ±r. Uzun Ã¶mÃ¼rlÃ¼ sonuÃ§lar sunar ve iyi bir aÄŸÄ±z bakÄ±mÄ± ile yÄ±llarca sorunsuz kullanÄ±labilir. Tedavi sÃ¼resi genellikle birkaÃ§ seansta tamamlanÄ±r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "porselen-dis-kaplama-nedir-porselen-dis-kaplama-nasil-yapilir",
    name: "Porselen DiÅŸ Kaplama Nedir?",
    short: "Porselen diÅŸ kaplama, estetik ve fonksiyonel amaÃ§larla diÅŸlerin Ã¶n yÃ¼zeyine uygulanan dayanÄ±klÄ±, doÄŸal gÃ¶rÃ¼nÃ¼m...",
    intro: "Porselen diÅŸ kaplama, estetik ve fonksiyonel amaÃ§larla diÅŸlerin Ã¶n yÃ¼zeyine uygulanan dayanÄ±klÄ±, doÄŸal gÃ¶rÃ¼nÃ¼mlÃ¼ seramik kaplama iÅŸlemidir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "gulus",
  },
  {
    slug: "emax-dis-kaplama",
    name: "Emax DiÅŸ Kaplama",
    short: "Emax diÅŸ kaplama, dayanÄ±klÄ± ve estetik gÃ¶rÃ¼nÃ¼mlÃ¼ lityum disilikat porselenden Ã¼retilen tam seramik bir kaplama...",
    intro: "Emax diÅŸ kaplama, dayanÄ±klÄ± ve estetik gÃ¶rÃ¼nÃ¼mlÃ¼ lityum disilikat porselenden Ã¼retilen tam seramik bir kaplama tÃ¼rÃ¼dÃ¼r. DoÄŸal diÅŸ yapÄ±sÄ±na Ã§ok benzeyen Ä±ÅŸÄ±k geÃ§irgenliÄŸi sayesinde  Emax diÅŸ kaplama , Ã¶zellikle Ã¶n diÅŸ estetiÄŸinde sÄ±kÃ§a tercih edilir. Metal iÃ§ermediÄŸi iÃ§in diÅŸ eti uyumu yÃ¼ksektir ve alerji riski dÃ¼ÅŸÃ¼ktÃ¼r.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "gulus",
  },
  {
    slug: "metal-dis-kaplama-nedir-metal-destekli-porselen-dis-kaplama-nasil-yapilir",
    name: "Metal DiÅŸ Kaplama Nedir?",
    short: "Metal diÅŸ kaplama sÃ¼reci, diÅŸin kaplama iÃ§in hazÄ±rlanmasÄ±yla baÅŸlar. Ä°lk adÄ±m olarak, diÅŸin yÃ¼zeyi inceltilere...",
    intro: "Metal diÅŸ kaplama sÃ¼reci, diÅŸin kaplama iÃ§in hazÄ±rlanmasÄ±yla baÅŸlar. Ä°lk adÄ±m olarak, diÅŸin yÃ¼zeyi inceltilerek metal ve porselen kaplamanÄ±n yerleÅŸtirilmesi iÃ§in uygun bir alan oluÅŸturulur. ArdÄ±ndan, diÅŸin Ã¶lÃ§Ã¼sÃ¼ alÄ±narak hastaya uygun bir kaplama hazÄ±rlanÄ±r. Metal destekli porselen kaplama iÃ§in laboratuvar ortamÄ±nda, alÄ±nan Ã¶lÃ§Ã¼lere gÃ¶re diÅŸin metal altyapÄ±sÄ± oluÅŸturulur. Bu metal yapÄ± Ã¼zerine doÄŸal gÃ¶rÃ¼nÃ¼mlÃ¼ porselen kaplama yapÄ±lÄ±r ve diÅŸ Ã¼zerine yerleÅŸtirilerek sabitlenir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "gulus",
  },
  {
    slug: "kron-dis-kaplama-nedir-kron-dis-kaplama-nasil-yapilir",
    name: "Kron DiÅŸ Kaplama Nedir?",
    short: "Kron diÅŸ kaplama, hasar gÃ¶rmÃ¼ÅŸ veya zayÄ±flamÄ±ÅŸ diÅŸin tamamÄ±nÄ± sararak koruyan ve gÃ¼Ã§lendiren sabit bir restora...",
    intro: "Kron diÅŸ kaplama, hasar gÃ¶rmÃ¼ÅŸ veya zayÄ±flamÄ±ÅŸ diÅŸin tamamÄ±nÄ± sararak koruyan ve gÃ¼Ã§lendiren sabit bir restorasyondur.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "gulus",
  },
  {
    slug: "acil-dis-tedavisi",
    name: "Acil DiÅŸ Tedavisi",
    short: "Gece, pazar ve bayramda 7/24 acil diÅŸ mÃ¼dahalesi. Beklemeden aynÄ± gÃ¼n Ã§Ã¶zÃ¼m.",
    intro: "DiÅŸ aÄŸrÄ±sÄ± randevu beklemez. Gece yarÄ±sÄ± baÅŸlayan zonklama, kÄ±rÄ±lan diÅŸ, dÃ¼ÅŸen dolgu veya ÅŸiÅŸlik yapan apse iÃ§in 7/24 aÃ§Ä±k kliniÄŸimizde acil diÅŸ hekimi hazÄ±rdÄ±r. Beklemeden arayÄ±n, aynÄ± gece mÃ¼dahale edelim.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "acil",
  },
  {
    slug: "gulus-tasarimi",
    name: "GÃ¼lÃ¼ÅŸ TasarÄ±mÄ±",
    short: "Dijital smile design ile kiÅŸiye Ã¶zel estetik gÃ¼lÃ¼ÅŸ planlamasÄ±.",
    intro: "GÃ¼lÃ¼ÅŸ tasarÄ±mÄ±; diÅŸlerin rengi, ÅŸekli, boyutu ve diÅŸ eti Ã§izgisi bÃ¼tÃ¼n olarak deÄŸerlendirilerek kiÅŸiye Ã¶zel estetik bir gÃ¼lÃ¼ÅŸ planlanmasÄ±dÄ±r. Dijital planlama sayesinde sonucu Ã¶nceden gÃ¶rebilirsiniz.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "dis-dolgusu",
    name: "DiÅŸ Dolgusu",
    short: "Kompozit ve porselen dolgularla Ã§Ã¼rÃ¼k diÅŸlerin estetik onarÄ±mÄ±.",
    intro: "DiÅŸ dolgusu; Ã§Ã¼rÃ¼k nedeniyle hasar gÃ¶ren diÅŸ dokusunun temizlenip Ã¶zel dolgu malzemesiyle onarÄ±lmasÄ±dÄ±r. Estetik kompozit dolgular doÄŸal diÅŸ rengindedir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "dolgu",
  },
  {
    slug: "protez-takma-dis-fiyatlari",
    name: "Protez DiÅŸ FiyatlarÄ±",
    short: "Takma diÅŸ, akrilik protez ve implant Ã¼stÃ¼ protez Ã§Ã¶zÃ¼mleri.",
    intro: "DiÅŸ eksikliÄŸi Ã§iÄŸneme, konuÅŸma ve Ã¶zgÃ¼veni doÄŸrudan etkiler. Tam veya kÄ±smi protez, akrilik ya da implant Ã¼stÃ¼ protez seÃ§enekleriyle her hastaya uygun Ã§Ã¶zÃ¼mler sunuyoruz.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "estetik",
  },
  {
    slug: "agrisiz-dis-tedavisi",
    name: "AÄŸrÄ±sÄ±z DiÅŸ Tedavisi",
    short: "Sedasyon ve modern anestezi ile tamamen konforlu diÅŸ tedavisi.",
    intro: "DiÅŸ hekimi fobisi olan hastalar iÃ§in aÄŸrÄ±sÄ±z diÅŸ tedavisi Ã¶zel Ã¶nem taÅŸÄ±r. Modern anestezi teknikleri ve sedasyon ile tedavi tamamen konforlu hale getirilir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
    ],
    category: "acil",
  },
  {
    slug: "dis-tedavisi-fiyatlari",
    name: "DiÅŸ Tedavisi FiyatlarÄ± 2026",
    short: "TÃ¼m diÅŸ tedavilerinin 2026 gÃ¼ncel fiyat rehberi.",
    intro: "DiÅŸ tedavileri; dolgu, kanal, Ã§ekim, kaplama, implant ve protez gibi uygulamalardan oluÅŸur. Fiyatlar iÅŸlemin tÃ¼rÃ¼ne, diÅŸ sayÄ±sÄ±na ve kullanÄ±lan malzemeye gÃ¶re deÄŸiÅŸir.",
    features: [
     "7/24 aÃ§Ä±k klinik",
     "Uzman hekim kadrosu",
     "Son teknoloji cihazlar",
     "Net ve ÅŸeffaf fiyat",
     "Cumartesi, pazar ve bayramlarda aÃ§Ä±k"
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
