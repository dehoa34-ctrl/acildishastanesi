import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Before / After",
  description:
    "Gülüş tasarımı, implant, lamine ve zirkonyum tedavilerinin öncesi-sonrası sonuçları. Gerçek hasta dönüşümleri.",
  alternates: { canonical: "/before-after/" },
};

const cases = [
  { title: "Gülüş Tasarımı", desc: "Hollywood smile ile estetik gülüş dönüşümü", img: "/images/ph-beforeafter-card.webp" },
  { title: "İmplant Tedavisi", desc: "Eksik dişlerin implant ile tamamlanması", img: "/images/ph-implant-card.webp" },
  { title: "Lamine Kaplama", desc: "Yaprak porselen ile doğal gülüş", img: "/images/ph-smile-card.webp" },
  { title: "Zirkonyum Kaplama", desc: "Metal içermeyen estetik kaplamalar", img: "/images/ph-uniite-card.webp" },
  { title: "Diş Beyazlatma", desc: "Birkaç ton aydınlanan gülüş", img: "/images/ph-beyazlatma-card.webp" },
  { title: "Ortodonti", desc: "Çapraşık dişlerin düzeltilmesi", img: "/images/ph-ortodonti-card.webp" },
];

export default function BeforeAfterPage() {
  return (
    <>
      <PageHero
        image="/images/ph-beforeafter-hero.webp"
        kicker="Galeri"
        title="Before / After"
        subtitle="Gerçek insanlar, gerçek gülümsemeler. Hastalarımızın dönüşüm hikayelerini keşfedin."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cases.map((c) => (
              <div key={c.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="relative aspect-[16/10] bg-slate-100">
                  <Image
                    src={c.img}
                    alt={`${c.title} before after`}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-slate-900/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Öncesi
                  </span>
                  <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                    Sonrası
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-extrabold text-slate-900">{c.title}</h2>
                  <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-extrabold text-slate-900">Siz de dönüşüme hazır mısınız?</p>
            <p className="mt-1 text-sm text-slate-600">
              Ücretsiz muayene ile size özel tedavi planı çıkaralım.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
