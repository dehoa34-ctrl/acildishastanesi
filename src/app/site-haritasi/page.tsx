import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import { districts } from "@/lib/districts";
import { posts } from "@/lib/posts";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site Haritası",
  description:
    "İstanbul Ağız ve Diş Sağlığı Merkezi site haritası. Tüm tedaviler, nöbetçi dişçiler, blog yazıları ve kurumsal sayfalara hızlı erişim.",
  alternates: { canonical: "/site-haritasi/" },
};

export default function SiteHaritasiPage() {
  const anadolu = districts.filter((d) => d.area === "anadolu");
  const avrupa = districts.filter((d) => d.area === "avrupa");
  const merkez = districts.filter((d) => d.area === "merkez");

  return (
    <>
      <PageHero
        image="/images/servis/kanal-hero.webp"
        kicker="Site Haritası"
        title="Sitemizin Haritası"
        subtitle="İstediğiniz sayfaya tek tıkla ulaşın. Tedaviler, nöbetçi dişçiler ve daha fazlası."
      />

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hızlı erişim kartları */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <QuickCard
              icon={<HomeIcon />}
              title="Ana Sayfalar"
              items={[
                { href: "/", label: "Anasayfa" },
                { href: "/hakkimizda/", label: "Hakkımızda" },
                { href: "/iletisim/", label: "İletişim" },
                { href: "/online-randevu/", label: "Online Randevu" },
                { href: "/sss/", label: "Sık Sorulan Sorular" },
              ]}
            />
            <QuickCard
              icon={<BuildingIcon />}
              title="Kurumsal"
              items={[
                { href: "/hakkimizda/", label: "Hakkımızda" },
                { href: "/saglik-turizmi/", label: "Sağlık Turizmi" },
                { href: "/anlasmali-kurumlar/", label: "Anlaşmalı Kurumlar" },
                { href: "/blog/", label: "Blog & Rehber" },
                { href: "/site-haritasi/", label: "Site Haritası" },
              ]}
            />
            <QuickCard
              icon={<ToothIcon />}
              title="Tüm Tedaviler"
              items={[
                { href: "/hizmetler/", label: "Tüm Tedavileri Gör" },
                { href: "/acil-dis-tedavisi/", label: "Acil Diş Tedavisi" },
                { href: "/dis-implant-fiyatlari/", label: "İmplant" },
                { href: "/ortodonti/", label: "Ortodonti" },
                { href: "/cocuk-dis/", label: "Çocuk Diş" },
              ]}
            />
            <QuickCard
              icon={<PhoneIcon />}
              title="Bize Ulaşın"
              items={[
                { href: "/iletisim/", label: "İletişim Formu" },
                { href: "/online-randevu/", label: "Online Randevu" },
                { href: CONTACT.phoneHref, label: `${CONTACT.phoneDisplay} (Ara)` },
                { href: CONTACT.whatsappHref, label: "WhatsApp" },
              ]}
            />
          </div>

          {/* Tedaviler kategoriler */}
          <div className="mt-12">
            <SectionTitle icon={<ToothIcon />} title="Tüm Tedaviler" subtitle="Kategorilere göre tüm diş tedavilerimiz" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceCategories.map((cat) => {
                const items = services.filter((s) => s.category === cat.key);
                if (items.length === 0) return null;
                return (
                  <div
                    key={cat.key}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{cat.label}</p>
                    <ul className="mt-3 space-y-1">
                      {items.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/${s.slug}`}
                            className="flex items-center gap-2 py-1 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
                          >
                            <Chevron />
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Nöbetçi dişçiler */}
          <div className="mt-12">
            <SectionTitle
              icon={<MapPinIcon />}
              title="Nöbetçi Dişçiler"
              subtitle="İstanbul'un tüm ilçelerinde 7/24 açık diş hekimleri"
            />
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <DistrictCard title="İstanbul Geneli" accent="brand" items={merkez} />
              <DistrictCard title="Anadolu Yakası" accent="sky" items={anadolu} />
              <DistrictCard title="Avrupa Yakası" accent="teal" items={avrupa} />
            </div>
          </div>

          {/* Blog */}
          <div className="mt-12">
            <SectionTitle icon={<BookIcon />} title="Blog Yazıları" subtitle="Diş sağlığı rehberi ve bilgilendirici yazılar" />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}/`}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
                >
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{p.category}</span>
                  <h3 className="mt-1.5 font-bold leading-snug text-slate-900 group-hover:text-brand-700">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SectionTitle({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <div>
        <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
}

function QuickCard({ icon, title, items }: { icon: React.ReactNode; title: string; items: { href: string; label: string }[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        {icon}
      </span>
      <h3 className="mt-3 font-extrabold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
            >
              <Chevron />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function DistrictCard({ title, accent, items }: { title: string; accent: "brand" | "sky" | "teal"; items: typeof districts }) {
  const accents = {
    brand: "bg-brand-50 text-brand-700 border-brand-200",
    sky: "bg-sky-50 text-sky-700 border-sky-200",
    teal: "bg-teal-50 text-teal-700 border-teal-200",
  };
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${accents[accent]}`}>
        {title} • {items.length} bölge
      </span>
      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1">
        {items.map((d) => (
          <li key={d.slug}>
            <Link
              href={`/${d.slug}`}
              className="flex items-center gap-1.5 py-1 text-sm font-medium text-slate-600 transition-colors hover:text-brand-700"
            >
              <span className="h-1 w-1 shrink-0 rounded-full bg-brand-300" />
              {d.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Chevron() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-brand-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}
function HomeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1v-9z" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 21V5a1 1 0 011-1h9a1 1 0 011 1v16M15 9h4a1 1 0 011 1v11M2 21h20M8 7h2M8 11h2M8 15h2" />
    </svg>
  );
}
function ToothIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 5.5c-1.6-1.7-3.6-2.5-5.5-2.5C4 3 2.5 5 2.5 8c0 4 1.5 6.5 2.5 8.5S7 21 8 21c1.2 0 1.4-1.5 2.4-2 .8-.4 1.6-.6 1.6-.6s.8.2 1.6.6c1 .5 1.2 2 2.4 2 1 0 1.5-2 2.5-4.5s2.5-4.5 2.5-8.5C21.5 5 20 3 17.5 3c-1.9 0-3.9.8-5.5 2.5z"
      />
    </svg>
  );
}
function MapPinIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.7 9.4c0 4.3-5.7 9.6-5.7 9.6S6.3 13.7 6.3 9.4A5.7 5.7 0 0117.7 9.4z"
      />
      <circle cx="12" cy="9.4" r="2" />
    </svg>
  );
}
function BookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a2 2 0 012-2h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5zM8 7h8M8 11h8M8 15h5" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
    </svg>
  );
}
