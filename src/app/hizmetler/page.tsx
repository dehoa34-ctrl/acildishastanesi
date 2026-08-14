import type { Metadata } from "next";
import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";
import CtaBand from "@/components/CtaBand";
import { ToothIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Tüm Diş Tedavileri",
  description:
    "İmplant, lamine, zirkonyum, porselen, protez, kanal tedavisi, ortodonti, çocuk diş, diş çekimi ve daha fazlası. Tüm diş tedavileri için 7/24 açık kliniğimiz.",
  alternates: { canonical: "/hizmetler/" },
};

export default function HizmetlerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Tedavilerimiz</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Tüm Diş Tedavileri</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-100">
            Acil müdahaleden estetik gülüş tasarımına, implanttan ortodontiye kadar tüm diş tedavilerinde 7/24 yanınızdayız.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {serviceCategories.map((cat) => {
              const items = services.filter((s) => s.category === cat.key);
              if (items.length === 0) return null;
              return (
                <div key={cat.key}>
                  <h2 className="text-xl font-extrabold text-slate-900">{cat.label}</h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                          <ToothIcon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-bold text-slate-900 group-hover:text-brand-700">{s.name}</span>
                          <span className="mt-1 block text-sm leading-5 text-slate-500">{s.short}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
