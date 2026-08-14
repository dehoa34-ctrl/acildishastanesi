import type { Metadata } from "next";
import { districts } from "@/lib/districts";
import DistrictSearch from "@/components/DistrictSearch";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nöbetçi Dişçi İstanbul | Tüm İlçe ve Semtler",
  description:
    "İstanbul'un tüm ilçe ve semtlerinde 7/24 açık nöbetçi dişçi listesi. Semtinizi seçin, en yakın acil diş hastanesine ulaşın.",
  alternates: { canonical: "/semtler/" },
};

export default function SemtlerPage() {
  const anadolu = districts.filter((x) => x.area === "anadolu");
  const avrupa = districts.filter((x) => x.area === "avrupa");
  const merkez = districts.filter((x) => x.area === "merkez");

  return (
    <>
      <PageHero
        image="/images/ph-reception-hero.webp"
        kicker="Nöbetçi Dişçi Rehberi"
        title="İstanbul Nöbetçi Dişçiler"
        subtitle="İlçe veya semt adını yazın, 7/24 açık acil diş hastanesi sayfasına hemen ulaşın."
      >
        <div className="mt-8 flex justify-center">
          <DistrictSearch limit={20} />
        </div>
      </PageHero>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10">
            {merkez.length > 0 && (
              <SectionBlock title="İstanbul Geneli" items={merkez} />
            )}
            <SectionBlock title="Anadolu Yakası" items={anadolu} />
            <SectionBlock title="Avrupa Yakası" items={avrupa} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function SectionBlock({ title, items }: { title: string; items: typeof districts }) {
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((x) => (
          <Link
            key={x.slug}
            href={`/${x.slug}`}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
          >
            {x.name} Nöbetçi Dişçi
          </Link>
        ))}
      </div>
    </div>
  );
}
