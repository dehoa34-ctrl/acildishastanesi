import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import { districts } from "@/lib/districts";
import { clinics } from "@/lib/clinics";
import { posts } from "@/lib/posts";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Site Haritası",
  description: "İstanbul Ağız ve Diş Sağlığı Merkezi web sitesinin tüm sayfaları. Hizmetler, nöbetçi dişçiler, klinikler, blog ve kurumsal sayfalar.",
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
        title="Tüm Sayfalar"
        subtitle="Sitemizdeki tüm sayfalara buradan ulaşabilirsiniz."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Group title="Ana Sayfalar">
              <Row href="/" label="Anasayfa" />
              <Row href="/hakkimizda/" label="Hakkımızda" />
              <Row href="/iletisim/" label="İletişim" />
              <Row href="/online-randevu/" label="Online Randevu" />
              <Row href="/sss/" label="Sık Sorulan Sorular" />
              <Row href="/blog/" label="Blog" />
              <Row href="/site-haritasi/" label="Site Haritası" />
            </Group>

            <Group title="Kurumsal">
              <Row href="/hakkimizda/" label="Hakkımızda" />
              <Row href="/kliniklerimiz/" label="Kliniklerimiz" />
              <Row href="/saglik-turizmi/" label="Sağlık Turizmi" />
              <Row href="/anlasmali-kurumlar/" label="Anlaşmalı Kurumlar" />
            </Group>

            <Group title="Klinikler">
              {clinics.map((c) => (
                <Row key={c.slug} href={`/kliniklerimiz/${c.slug}/`} label={c.name} />
              ))}
            </Group>

            <div className="space-y-10">
              <Group title="Tüm Tedaviler">
                {serviceCategories.map((cat) => {
                  const items = services.filter((s) => s.category === cat.key);
                  if (items.length === 0) return null;
                  return (
                    <div key={cat.key} className="mt-2">
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">{cat.label}</p>
                      <div className="mt-1">
                        {items.map((s) => (
                          <Row key={s.slug} href={`/${s.slug}/`} label={s.name} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </Group>
            </div>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            <Group title="İstanbul Geneli Nöbetçi Dişçiler">
              {merkez.map((d) => (
                <Row key={d.slug} href={`/${d.slug}/`} label={`${d.name} Acil Diş`} />
              ))}
            </Group>

            <Group title="Anadolu Yakası Nöbetçi Dişçiler">
              {anadolu.map((d) => (
                <Row key={d.slug} href={`/${d.slug}/`} label={`${d.name} Acil Diş`} />
              ))}
            </Group>

            <Group title="Avrupa Yakası Nöbetçi Dişçiler">
              {avrupa.map((d) => (
                <Row key={d.slug} href={`/${d.slug}/`} label={`${d.name} Acil Diş`} />
              ))}
            </Group>
          </div>

          <div className="mt-12">
            <Group title="Blog Yazıları">
              {posts.map((p) => (
                <Row key={p.slug} href={`/blog/${p.slug}/`} label={p.title} />
              ))}
            </Group>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-extrabold text-slate-900">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Row({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-2 py-1 text-sm font-medium text-slate-600 hover:text-brand-700"
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300 transition-colors group-hover:bg-brand-600" />
      {label}
    </Link>
  );
}
