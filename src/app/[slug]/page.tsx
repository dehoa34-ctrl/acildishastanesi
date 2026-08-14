import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT } from "@/lib/site";
import { districts, getDistrict } from "@/lib/districts";
import { services, getService } from "@/lib/services";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";
import { faqs } from "@/lib/faqs";
import { getDistrictExtra } from "@/lib/district-extras";
import { SEO_IMAGE } from "@/lib/seo";
import {
  districtSchema,
  serviceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/seo";

export function generateStaticParams() {
  return [
    ...districts.map((d) => ({ slug: d.slug })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrict(slug);
  const service = getService(slug);

  if (district) {
    return {
      title: `${district.name} Acil Diş Hastanesi 7/24 Açık Nöbetçi Dişçi`,
      description: district.description,
      alternates: { canonical: `/${district.slug}/` },
      openGraph: {
        title: `${district.name} Acil Diş Hastanesi | 7/24 Nöbetçi Dişçi`,
        description: district.description,
        locale: "tr_TR",
        type: "website",
        images: [{ url: SEO_IMAGE, width: 1200, height: 900, alt: `${district.name} Acil Diş Hastanesi` }],
      },
    };
  }

  if (service) {
    return {
      title: `${service.name} 2026 İstanbul Güncel Fiyatları`,
      description: service.intro.slice(0, 160),
      alternates: { canonical: `/${service.slug}/` },
      openGraph: {
        title: `${service.name} 2026`,
        description: service.intro.slice(0, 160),
        locale: "tr_TR",
        type: "website",
        images: [{ url: SEO_IMAGE, width: 1200, height: 900, alt: service.name }],
      },
    };
  }

  return {};
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const district = getDistrict(slug);
  const service = getService(slug);

  if (district) {
    return <DistrictPage district={district} />;
  }
  if (service) {
    return <ServicePage service={service} />;
  }
  notFound();
}

/* ---------------- District ---------------- */

function DistrictPage({ district }: { district: (typeof districts)[number] }) {
  const extra = getDistrictExtra(district.slug);
  const related = districts
    .filter((x) => x.area === district.area && x.slug !== district.slug)
    .slice(0, 10);

  const schema = districtSchema(district);
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", url: "/" },
    { name: `${district.name} Acil Diş Hastanesi`, url: `/${district.slug}/` },
  ]);
  const localFaq = extra ? faqSchema(extra.localFaqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      {localFaq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localFaq) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="text-sm text-brand-200">
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-2">/</span>
            <span>{district.name} Acil Diş Hastanesi</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                  7/24 Açık
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                  Gece Nöbetçi
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
                  Pazar & Bayram Açık
                </span>
              </div>
              <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                {district.name} Acil Diş Hastanesi
              </h1>
              <p className="mt-3 text-lg font-semibold text-brand-200">
                Nöbetçi Diş Hekimi Telefonu: {CONTACT.phoneDisplay}
              </p>
              <p className="mt-4 leading-7 text-brand-100">{district.intro}</p>
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
                  <WhatsAppIcon /> WhatsApp
                </a>
              </div>
            </div>
            <div className="hidden overflow-hidden rounded-3xl lg:block">
              <Image
                src="/images/klinik-gece.webp"
                alt={`${district.name} gece açık nöbetçi diş kliniği`}
                width={800}
                height={600}
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {district.name}&apos;te 7/24 Açık Acil Diş Hastanesi
          </h2>
          {extra && (
            <p className="mt-4 leading-7 text-slate-600">{extra.featureContent}</p>
          )}
          <p className="mt-4 leading-7 text-slate-600">
            {district.name} ve çevresindeki mahallelerde ({district.neighborhoods.join(", ")}) ani başlayan
            diş ağrıları, kırılan dişler ve hafta sonu yaşanan diş travmaları için 7 gün 24 saat açık acil diş
            kliniğimizden yararlanabilirsiniz. Gece saatlerinde dahi nöbetçi diş hekimi ekibimiz hazırdır.
          </p>

          {extra && (
            <>
              <h3 className="mt-10 text-xl font-extrabold text-slate-900">
                {district.name}&apos;te Kamu Diş Sağlığı Desteği
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{extra.publicDental}</p>
            </>
          )}

          <h3 className="mt-10 text-xl font-extrabold text-slate-900">
            {district.name} Nöbetçi Dişçide Yapılan Acil İşlemler
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Acil kanal tedavisi",
              "Ağrısız diş çekimi",
              "Dolgu ve diş onarımı",
              "Apse ve şişlik müdahalesi",
              "Düşen kaplama / protez tamiri",
              "Gece ve pazar diş hekimi muayenesi",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <span className="mt-0.5 text-brand-600">✓</span> {item}
              </li>
            ))}
          </ul>

          {extra && (
            <>
              <h3 className="mt-10 text-xl font-extrabold text-slate-900">
                {district.name}&apos;te Diş Ağrısı Hakkında Sık Sorulanlar
              </h3>
              <div className="mt-4 space-y-4">
                {extra.localFaqs.map((f) => (
                  <div key={f.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-bold text-slate-900">{f.question}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{f.answer}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="mt-10 rounded-3xl bg-brand-50 p-6 text-center">
            <p className="text-lg font-extrabold text-slate-900">
              Diş ağrınız mı var? {district.name}&apos;teki nöbetçi dişçimiz hemen yanınızda.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              <PhoneIcon /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">
            {district.area === "anadolu" ? "Anadolu Yakası" : district.area === "avrupa" ? "Avrupa Yakası" : "İstanbul"}{" "}
            Diğer Nöbetçi Dişçiler
          </h2>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {related.map((x) => (
              <Link
                key={x.slug}
                href={`/${x.slug}`}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700"
              >
                {x.name} Acil Diş
              </Link>
            ))}
            <Link
              href="/semtler"
              className="rounded-full bg-brand-600 px-4 py-2 text-sm font-bold text-white hover:bg-brand-700"
            >
              Tümü → 
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

/* ---------------- Service ---------------- */

function ServicePage({ service }: { service: (typeof services)[number] }) {
  const schema = serviceSchema(service);
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", url: "/" },
    { name: service.name, url: `/${service.slug}/` },
  ]);
  const faqData = faqs.map((f) => ({
    question: f.question,
    answer: f.answer,
  }));
  const faq = faqSchema(faqData);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <nav className="text-sm text-brand-200">
            <Link href="/" className="hover:text-white">Anasayfa</Link>
            <span className="mx-2">/</span>
            <span>{service.name}</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl">{service.name}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-100">{service.intro}</p>
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
              <WhatsAppIcon /> Fiyat Al
            </a>
          </div>
        </div>
      </section>

      {/* Price table */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
              <h2 className="text-lg font-extrabold text-slate-900">2026 Güncel Fiyat Listesi</h2>
              <p className="mt-0.5 text-xs text-slate-500">{service.priceNote}</p>
            </div>
            <ul className="divide-y divide-slate-100">
              {service.priceRows.map((row) => (
                <li key={row.name} className="flex items-center justify-between gap-4 px-6 py-4">
                  <span className="font-semibold text-slate-700">{row.name}</span>
                  <span className="shrink-0 font-extrabold text-brand-700">{row.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-3xl bg-brand-50 p-6 text-center">
            <p className="text-lg font-extrabold text-slate-900">
              Net fiyat için ücretsiz muayene olun.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Fiyatlar kişiye göre değişebilir. Hemen arayın, aynı gün muayene randevunuzu alalım.
            </p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              <PhoneIcon /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">{service.name} Avantajları</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">{f}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900">Sık Sorulan Sorular</h2>
            <div className="mt-6">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
