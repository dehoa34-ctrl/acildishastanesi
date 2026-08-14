import type { Metadata } from "next";
import Link from "next/link";
import { dentists } from "@/lib/dentists";
import { clinics } from "@/lib/clinics";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Hekimlerimiz",
  description:
    "Acil Diş Hastanesi uzman diş hekimi kadrosu. 120+ uzman hekim, ortodontistler ve mesul müdürler.",
  alternates: { canonical: "/hekimlerimiz/" },
};

export default function HekimlerimizPage() {
  return (
    <>
      <PageHero
        image="/images/servis/kanal-hero.webp"
        kicker="Kurumsal"
        title="Hekimlerimiz"
        subtitle="Alanında uzman 120+ diş hekimi ile en iyi hizmeti sunuyoruz."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dentists.map((d) => (
              <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-extrabold text-slate-900">{d.name}</p>
                <p className="mt-1 text-sm font-semibold text-brand-600">{d.title}</p>
                <p className="mt-1 text-xs text-slate-500">AvrupaDİŞ {d.clinic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Şubelerimiz</h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {clinics.map((c) => (
              <Link
                key={c.slug}
                href={`/kliniklerimiz/${c.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700"
              >
                {c.name.split(" ").slice(-1)[0]} → 
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
