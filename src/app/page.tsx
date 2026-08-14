import Link from "next/link";
import Image from "next/image";
import { SITE, CONTACT } from "@/lib/site";
import DistrictSearch from "@/components/DistrictSearch";
import { DistrictGrid } from "@/components/DistrictGrid";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";
import ServiceSlider from "@/components/ServiceSlider";
import { dentistSchema } from "@/lib/seo";

export default function HomePage() {
  const schema = dentistSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Banner (1920x600) */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/banner-hero.webp"
          alt="7/24 açık acil diş hastanesi İstanbul - nöbetçi diş hekimi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/60 via-brand-900/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-950/55 to-transparent" />
        <div className="relative mx-auto flex max-w-7xl min-h-[420px] items-center px-4 py-16 sm:px-6 md:min-h-[520px] lg:min-h-[600px] lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-5 flex flex-wrap gap-2">
              <Badge icon={<ClockIcon />} text="7/24 Açık" />
              <Badge icon={<MoonIcon />} text="Gece Nöbetçi" />
              <Badge icon={<CalendarIcon />} text="Pazar & Bayram Açık" />
            </div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-[3.4rem]">
              İstanbul <span className="text-brand-300">Ağız ve Diş Sağlığı Merkezi</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-brand-50/90">
              Gece yarısı başlayan diş ağrısı, pazar günü kırılan bir kaplama ya da bayramda acil kanal tedavisi…
              7/24 acil diş hekimi ekibimiz {SITE.openingHours} yanınızda. Beklemeden arayın, aynı gece müdahale edelim.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/25 transition-colors hover:bg-brand-700"
              >
                <PhoneIcon className="h-5 w-5" /> {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-emerald-600"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-brand-100">
              <CheckIcon />
              Randevusuz acil kabul • Cumartesi, pazar ve resmî tatillerde açık
            </div>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          <Stat value="7/24" label="Kesintisiz hizmet" />
          <Stat value="65+" label="İstanbul'da bölge" />
          <Stat value="0" label="Randevu bekleme" />
          <Stat value="100%" label="Hasta memnuniyeti" />
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Tedavilerimiz</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Diş Sağlığına Çözüm
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Acil müdahaleden estetik gülüş tasarımına, implanttan proteze tüm diş tedavilerinde 7/24 yanınızdayız.
            </p>
          </div>

          <div className="mt-12">
            <ServiceSlider />
          </div>

          {/* Tüm Tedaviler + Acil durum 2 kutu */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link
              href="/hizmetler"
              className="group flex items-center justify-between rounded-3xl border-2 border-dashed border-brand-300 bg-brand-50/50 p-7 transition-colors hover:bg-brand-50"
            >
              <div>
                <h3 className="text-xl font-extrabold text-brand-700">Tüm Tedaviler</h3>
                <p className="mt-1 text-sm text-slate-600">
                  İmplant, ortodonti, estetik, çocuk diş ve daha fazlası — 30&apos;un üzerinde tedavi.
                </p>
              </div>
              <span className="text-2xl text-brand-600 transition-transform group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/iletisim"
              className="group flex items-center justify-between rounded-3xl bg-gradient-to-br from-brand-600 to-brand-800 p-7 text-white shadow-lg shadow-brand-600/25"
            >
              <div>
                <h3 className="text-xl font-extrabold">Acil durum mu var?</h3>
                <p className="mt-1 text-sm text-brand-100">
                  Hemen arayın, nöbetçi diş hekimimiz size en kısa sürede yardımcı olsun.
                </p>
              </div>
              <span className="shrink-0 text-2xl text-white transition-transform group-hover:translate-x-1">
                {CONTACT.phoneDisplay}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımızda */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/servis/implant-hero.webp"
                alt="İstanbul Ağız ve Diş Sağlığı Merkezi - modern diş kliniği"
                width={1600}
                height={900}
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/95 px-6 py-4 shadow-lg backdrop-blur">
                <p className="text-2xl font-extrabold text-brand-700">25+</p>
                <p className="text-xs font-semibold text-slate-600">Yıllık Deneyim</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Hakkımızda</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Bir Kliniğin Ötesinde, Diş Sağlığında Güvenin Adı
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                İstanbul Ağız ve Diş Sağlığı Merkezi; 7 ağız ve diş sağlığı polikliniği, 5 ağız ve diş sağlığı merkezi ve 1
                laboratuvar olmak üzere toplamda 12 sağlık kuruluşundan oluşan geniş bir diş sağlığı ağıdır.
                Toplam 150 ünitede 370 kişilik uzman medikal kadromuzla hizmet vermekteyiz.
              </p>
              <p className="mt-4 leading-8 text-slate-600">
                25 yılı aşkın deneyimimiz, 850.000&apos;den fazla başarılı tedavi ve ISO 9001 belgeli dijital
                teknoloji altyapımızla İstanbul&apos;da en güvenilir diş sağlığı merkezlerinden biri olarak
                kendimizi kanıtladık.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                <MiniStat value="25+" label="Yıl Deneyim" />
                <MiniStat value="120+" label="Uzman Hekim" />
                <MiniStat value="250K+" label="Mutlu Hasta" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 font-bold text-white hover:bg-brand-700"
                >
                  Daha Fazla Bilgi
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/kliniklerimiz"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-7 py-3.5 font-bold text-brand-700 hover:bg-brand-50"
                >
                  Kliniklerimizi Görün
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Neden Biz?</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Gece de, Pazar da Açığız
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Diş ağrısı randevu beklemez. Biz de beklemiyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <WhyCard icon={<ClockIcon />} title="7 Gün 24 Saat" text="Gece, hafta sonu, cumartesi, pazar ve resmî tatiller dahil kesintisiz hizmet." />
            <WhyCard icon={<AmbulanceIcon />} title="Anında Acil Müdahale" text="Acil diş ağrısı, apse ve travmalarda beklemeden aynı gün müdahale ediyoruz." />
            <WhyCard icon={<ShieldIcon />} title="Son Teknoloji Cihazlar" text="Dijital röntgen ve modern ekipmanlarla güvenli, ağrısız tedavi." />
            <WhyCard icon={<MoneyIcon />} title="Net ve Şeffaf Fiyat" text="Muayene sonrası net fiyat bilgisi. Sürpriz maliyet yok." />
            <WhyCard icon={<SmileIcon />} title="Gülüş Tasarımı" text="Estetik diş hekimliği ile size özel, doğal görünümlü gülüş." />
            <WhyCard icon={<MapIcon />} title="Tüm İstanbul'da" text="Anadolu ve Avrupa yakasında 65'in üzerinde bölgeden ulaşılabilir." />
          </div>
        </div>
      </section>

      {/* District search */}
      <section className="bg-gradient-to-b from-brand-700 to-brand-900 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Size En Yakın</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Nöbetçi Dişçinizi Bulun
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-brand-100">
            İlçe veya semt adını yazın, en yakın acil diş hastanesi sayfasına ulaşın.
          </p>
          <div className="mt-8 flex justify-center">
            <DistrictSearch />
          </div>
        </div>
      </section>

      {/* District grid */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Bölgeler</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              İstanbul&apos;un Her Yerinde
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Semtinize özel nöbetçi dişçi sayfasına göz atın.
            </p>
          </div>
          <div className="mt-12">
            <DistrictGrid />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/semtler"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-7 py-3 font-bold text-brand-700 hover:bg-brand-50"
            >
              Tüm nöbetçi dişçileri gör → 
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">SSS</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Sık Sorulan Sorular
            </h2>
          </div>
          <div className="mt-12">
            <FaqAccordion />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
      {icon} {text}
    </span>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl font-extrabold text-brand-700 sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className="text-2xl font-extrabold text-brand-700">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

function WhyCard({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <h3 className="mt-4 text-lg font-extrabold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </div>
  );
}

function ClockIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}
function MoonIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.8A9 9 0 1111.2 3 7 7 0 0021 12.8z" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path strokeLinecap="round" d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function AmbulanceIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.5" />
      <circle cx="17" cy="18" r="1.5" />
      <path strokeLinecap="round" d="M9 18h6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}
function MoneyIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M8.5 9.5h4a1.5 1.5 0 010 3H11a1.5 1.5 0 000 3h4" />
    </svg>
  );
}
function SmileIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 14s1.5 2 4 2 4-2 4-2M9 10h.01M15 10h.01" />
    </svg>
  );
}
function MapIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14" />
    </svg>
  );
}
