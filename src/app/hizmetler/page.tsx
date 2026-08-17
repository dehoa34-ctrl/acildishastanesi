import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, type Service } from "@/lib/services";
import { CONTACT, CURRENT_YEAR } from "@/lib/site";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { PhoneIcon, WhatsAppIcon, ToothIcon } from "@/components/Header";
import { getServiceContent } from "@/lib/service-content";

function svcImg(s: Service): string {
  const c = getServiceContent(s.slug);
  if (c?.image) return c.image.replace("-hero.webp", "-card.webp");
  const map: Record<Service["category"], string> = {
    implant: "/images/servis/implant-card.webp",
    estetik: "/images/servis/lamine-card.webp",
    kaplama: "/images/servis/zirkonyum-card.webp",
    ortodonti: "/images/servis/ortodonti-card.webp",
    cocuk: "/images/servis/pedodonti-card.webp",
    cerrahi: "/images/servis/cekim-card.webp",
    dolgu: "/images/servis/kanal-card.webp",
    acil: "/images/servis/cekim-card.webp",
    branc: "/images/servis/cerrahi-uygulamalar-card.webp",
    gulus: "/images/servis/emax-dis-kaplama-card.webp",
    fiyat: "/images/servis/dis-tedavisi-fiyatlari-card.webp",
  };
  return map[s.category] || "/images/servis/cekim-card.webp";
}

export const metadata: Metadata = {
  title: "Tedavilerimiz",
  description:
    "Ağız ve diş sağlığında tüm tedaviler. İmplant, kanal tedavisi, diş çekimi, ortodonti, lamine, zirkonyum, estetik gülüş tasarımı ve daha fazlası.",
  alternates: { canonical: "/hizmetler/" },
};

// Avrupadis kategori grupları: bizim kategorileri 4 ana gruba toplar
const groups = [
  {
    title: "Branşlar",
    desc: "Temel ağız ve diş sağlığı branşları",
    cats: ["branc", "dolgu", "cocuk"],
  },
  {
    title: "Cerrahi Tedaviler",
    desc: "İmplant ve cerrahi uygulamalar",
    cats: ["cerrahi", "implant"],
  },
  {
    title: "Estetik Tedaviler",
    desc: "Estetik ve ortodontik tedaviler",
    cats: ["estetik", "ortodonti", "acil"],
  },
  {
    title: "Gülüş Tasarımı",
    desc: "Kaplama ve gülüş tasarımı çözümleri",
    cats: ["gulus", "kaplama"],
  },
  {
    title: "Fiyatlar",
    desc: `${CURRENT_YEAR} güncel diş tedavisi fiyat rehberleri`,
    cats: ["fiyat"],
  },
];

export default function HizmetlerPage() {
  const stats = [
    { value: "25+", label: "Yıllık Deneyim" },
    { value: "50+", label: "Tedavi Çeşidi" },
    { value: "100K+", label: "Mutlu Hasta" },
    { value: "12", label: "Şube" },
  ];

  const featured = services.filter((s) => s.menu !== false).slice(0, 8);

  return (
    <>
      <PageHero
        image="/images/servis/emax-hero.webp"
        kicker="Tedavilerimiz"
        title="Ağız ve Diş Sağlığında Tüm Tedaviler"
        subtitle="Cerrahiden estetik uygulamalara kadar tüm diş tedavilerinde 7/24 yanınızdayız. Modern ekipmanlarımız ve uzman kadromuzla sağlıklı gülüşler için buradayız."
      >
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-bold text-brand-700 hover:bg-brand-50"
          >
            <PhoneIcon /> {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-bold text-white hover:bg-emerald-600"
          >
            <WhatsAppIcon /> Online Randevu
          </a>
        </div>
      </PageHero>

      {/* İstatistikler */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 text-center sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-brand-700 sm:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-slate-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kategori kartları */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((g) => (
              <a
                key={g.title}
                href={`#${g.title.replace(/\s/g, "-")}`}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                    <ToothIcon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">{g.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{g.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                    Detayları Gör <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </a>
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Tedaviler */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Öne Çıkan Tedavilerimiz</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              En Popüler Tedavi Çözümlerimiz
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={svcImg(s)}
                    alt={s.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-extrabold text-slate-900 group-hover:text-brand-700">{s.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm leading-6 text-slate-500">{s.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Detaylı Tedavi Seçenekleri */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Tüm Tedaviler</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Detaylı Tedavi Seçeneklerimiz
            </h2>
            <p className="mt-3 text-lg text-slate-600">
              Uzman kadromuz ve ileri teknoloji ile her türlü diş sağlığı ihtiyacınıza çözüm sunuyoruz.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {groups.map((g) => {
              const items = services.filter((s) => g.cats.includes(s.category) && s.menu !== false);
              return (
                <div
                  key={g.title}
                  id={g.title.replace(/\s/g, "-")}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-extrabold text-slate-900">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {items.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/${s.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-brand-50"
                        >
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-xs font-extrabold text-brand-700">
                            {items.indexOf(s) + 1}
                          </span>
                          <span>
                            <span className="block font-bold text-slate-900 group-hover:text-brand-700">{s.name}</span>
                            <span className="mt-0.5 block text-sm leading-5 text-slate-500">{s.short}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tedavi Süreci */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-brand-600">Tedavi Süreciniz</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Tedavinizin Her Aşamasında Yanınızdayız
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { step: "1", title: "Muayene", text: "Ağız yapınız detaylı şekilde incelenir, röntgen ve gerekli tetkikler yapılır." },
              { step: "2", title: "Planlama", text: "Size özel tedavi planı ve net fiyat bilgisi sunulur; tüm aşamalar paylaşılır." },
              { step: "3", title: "Tedavi", text: "Planlanan tedaviler kontrollü, güvenli ve ağrısız şekilde uygulanır." },
            ].map((s) => (
              <div key={s.step} className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-extrabold text-white">
                  {s.step}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-extrabold text-slate-900">Hemen randevu oluşturun</p>
            <p className="mt-1 text-sm text-slate-600">Uzman kadromuzla sizi gülümsetmek için buradayız.</p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
              >
                <PhoneIcon /> {CONTACT.phoneDisplay}
              </a>
              <Link
                href="/online-randevu"
                className="inline-flex items-center justify-center rounded-full border-2 border-brand-600 px-8 py-3.5 font-bold text-brand-700 hover:bg-brand-50"
              >
                Online Randevu
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
