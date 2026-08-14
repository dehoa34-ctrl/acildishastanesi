import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { clinics, getClinic } from "@/lib/clinics";
import { CONTACT } from "@/lib/site";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export function generateStaticParams() {
  return clinics.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic) return {};
  return {
    title: `${clinic.name}`,
    description: clinic.description,
    alternates: { canonical: `/kliniklerimiz/${clinic.slug}/` },
  };
}

export default async function ClinicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const clinic = getClinic(slug);
  if (!clinic) notFound();

  const related = clinics.filter((c) => c.area === clinic.area && c.slug !== clinic.slug).slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    description: clinic.description,
    telephone: CONTACT.phoneDisplay,
    openingHours: "Mo-Su 00:00-24:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.area,
      addressCountry: "TR",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageHero
        image="/images/ph-reception-hero.webp"
        kicker="Kliniklerimiz"
        title={clinic.name}
        subtitle={clinic.description}
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
            <WhatsAppIcon /> WhatsApp Randevu
          </a>
        </div>
      </PageHero>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 p-6 shadow-sm">
            <h2 className="text-lg font-extrabold text-slate-900">Adres & Ulaşım</h2>
            <p className="mt-3 leading-7 text-slate-600">{clinic.address}</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href={clinic.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700"
              >
                Google Haritalar&apos;da Yol Tarifi
              </a>
              <a
                href={CONTACT.phoneHref}
                className="rounded-full border-2 border-brand-600 px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50"
              >
                <PhoneIcon className="inline h-4 w-4" /> Ara
              </a>
            </div>
            <div className="mt-6 rounded-2xl bg-brand-50 p-5">
              <p className="font-bold text-slate-900">Çalışma Saatleri</p>
              <p className="mt-1 text-sm text-slate-600">Haftanın 7 günü, 24 saat açık (gece ve hafta sonu dahil)</p>            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-extrabold text-slate-900">Diğer Şubelerimiz</h2>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {related.map((c) => (
                <Link
                  key={c.slug}
                  href={`/kliniklerimiz/${c.slug}`}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
