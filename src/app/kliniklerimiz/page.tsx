import type { Metadata } from "next";
import Link from "next/link";
import { clinics } from "@/lib/clinics";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Kliniklerimiz",
  description:
    "Acil Diş Hastanesi'nin İstanbul Avrupa, Anadolu Yakası ve Antalya'daki tüm şubeleri. Size en yakın diş kliniğini bulun.",
  alternates: { canonical: "/kliniklerimiz/" },
};

export default function KliniklerimizPage() {
  const avrupa = clinics.filter((c) => c.area === "İstanbul Avrupa");
  const anadolu = clinics.filter((c) => c.area === "İstanbul Anadolu");
  const diger = clinics.filter((c) => c.area !== "İstanbul Avrupa" && c.area !== "İstanbul Anadolu");

  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Kurumsal</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Kliniklerimiz</h1>
          <p className="mt-3 max-w-xl text-lg text-brand-100">
            Türkiye genelinde 12 ağız ve diş sağlığı merkezi. Size en yakın şubeden randevu alın.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ClinicGroup title="İstanbul Avrupa" items={avrupa} />
          <div className="mt-12">
            <ClinicGroup title="İstanbul Anadolu" items={anadolu} />
          </div>
          <div className="mt-12">
            <ClinicGroup title="Diğer Şehirler" items={diger} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function ClinicGroup({ title, items }: { title: string; items: typeof clinics }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h2 className="text-xl font-extrabold text-slate-900">{title}</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <div key={c.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-extrabold text-slate-900">{c.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{c.description}</p>
            <p className="mt-3 text-xs leading-5 text-slate-500">{c.address}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={c.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-brand-600 px-4 py-2 text-xs font-bold text-brand-700 hover:bg-brand-50"
              >
                Yol Tarifi
              </a>
              <Link
                href={`/kliniklerimiz/${c.slug}`}
                className="rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white hover:bg-brand-700"
              >
                Detay
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
