import type { Metadata } from "next";
import Link from "next/link";
import { dentists } from "@/lib/dentists";
import { clinics } from "@/lib/clinics";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Hekimlerimiz",
  description:
    "Acil Diş Hastanesi uzman diş hekimi kadrosu. 120+ uzman hekim, ortodontistler ve mesul müdürler.",
  alternates: { canonical: "/hekimlerimiz/" },
};

export default function HekimlerimizPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Kurumsal</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Hekimlerimiz</h1>
          <p className="mt-3 max-w-xl text-lg text-brand-100">
            Alanında uzman 120+ diş hekimi ile en iyi hizmeti sunuyoruz.
          </p>
        </div>
      </section>

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
