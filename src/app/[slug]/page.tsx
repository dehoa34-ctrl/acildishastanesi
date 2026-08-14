import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CONTACT } from "@/lib/site";
import { districts, getDistrict } from "@/lib/districts";
import { services, getService } from "@/lib/services";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import ServiceSidebar from "@/components/ServiceSidebar";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";
import { getServiceContent } from "@/lib/service-content";
import { faqs } from "@/lib/faqs";
import { getDistrictExtra } from "@/lib/district-extras";
import { districtIntroText, treatmentSections } from "@/lib/district-treatment";
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
      <PageHero
        image="/images/servis/kanal-hero.webp"
        title={`${district.name} Acil Diş Hastanesi`}
        subtitle={district.intro}
      >
        <nav className="text-sm text-white/90">
          <Link href="/" className="hover:text-white">Anasayfa</Link>
          <span className="mx-2">/</span>
          <span>{district.name} Acil Diş Hastanesi</span>
        </nav>
        <div className="mt-5 flex flex-wrap gap-2">
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
        <p className="mt-4 text-lg font-semibold text-white/90">
          Nöbetçi Diş Hekimi Telefonu: {CONTACT.phoneDisplay}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
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
      </PageHero>

      {/* Content */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="mx-auto w-full max-w-3xl lg:mx-0">
              <h2 className="text-2xl font-extrabold text-slate-900">
                {district.name}&apos;te 7/24 Açık Acil Diş Hastanesi
              </h2>
              {extra && (
                <p className="mt-4 leading-8 text-slate-600">{extra.featureContent}</p>
              )}
              <p className="mt-4 leading-8 text-slate-600">
                {district.name} ve çevresindeki mahallelerde ({district.neighborhoods.join(", ")}) ani başlayan
                diş ağrıları, kırılan dişler ve hafta sonu yaşanan diş travmaları için 7 gün 24 saat açık acil diş
                kliniğimizden yararlanabilirsiniz. Gece saatlerinde dahi nöbetçi diş hekimi ekibimiz hazırdır.
              </p>
              <p className="mt-4 leading-8 text-slate-600">{districtIntroText}</p>

              <div className="my-8 overflow-hidden rounded-3xl shadow-md">
                <Image
                  src="/images/servis/kanal-hero.webp"
                  alt={`${district.name} 7/24 açık nöbetçi diş kliniği`}
                  width={1600}
                  height={600}
                  className="aspect-[16/7] w-full object-cover"
                />
              </div>

              <h3 className="mt-8 text-xl font-extrabold text-slate-900">
                {district.name}&apos;te Gece Nöbetçi Diş Hekimi
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Diş ağrısı özellikle gece saatlerinde, yatar pozisyonda kan basıncının artmasıyla daha şiddetli
                hissedilir. {district.name}&apos;te gece yarısı başlayan zonklayıcı bir diş ağrısı, düşen bir
                dolgu veya kırılan bir diş için kliniğimiz 7/24 açıktır. Nöbetçi diş hekimimiz, acil durumunuzu
                bildirdiğiniz anda sizi bekletmeden muayene eder ve aynı gece müdahale eder.
              </p>

              <h3 className="mt-8 text-xl font-extrabold text-slate-900">
                Pazar ve Hafta Sonu Açık Diş Kliniği
              </h3>
              <p className="mt-3 leading-8 text-slate-600">
                Pek çok diş kliniği cumartesi, pazar ve resmî tatillerde kapalıdır. {district.name}&apos;te
                yaşayanlar için kliniğimiz hafta sonu ve bayram günlerinde de tam kapasite hizmet verir. Pazar
                günü acil dolgu, kanal tedavisi, diş çekimi, apse müdahalesi ve düşen kaplama/protez onarımı
                rahatlıkla yapılabilmektedir.
              </p>

              {extra && (
                <>
                  <h3 className="mt-8 text-xl font-extrabold text-slate-900">
                    {district.name}&apos;te Kamu Diş Sağlığı Desteği
                  </h3>
                  <p className="mt-3 leading-8 text-slate-600">{extra.publicDental}</p>
                </>
              )}

              <h3 className="mt-8 text-xl font-extrabold text-slate-900">
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

              <h3 className="mt-8 text-xl font-extrabold text-slate-900">
                Tedavi Süreciniz Nasıl İlerler?
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {[
                  { step: "1", title: "Muayene", text: "Ağız yapınız ve şikayetiniz değerlendirilir, gerekirse röntgen alınır." },
                  { step: "2", title: "Planlama", text: "Size özel tedavi planı ve net fiyat bilgisi sunulur." },
                  { step: "3", title: "Tedavi", text: "Acil müdahale aynı seansta, ağrısız ve güvenli şekilde tamamlanır." },
                ].map((s) => (
                  <div key={s.step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-extrabold text-white">
                      {s.step}
                    </span>
                    <p className="mt-3 font-bold text-slate-900">{s.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Avrupadis tedavi anlatım bölümleri */}
              <h2 className="mt-10 text-2xl font-extrabold text-slate-900">
                {district.name}&apos;te Diş Tedavileri
              </h2>
              {treatmentSections.map((section) => (
                <div key={section.title} className="mt-8">
                  <h3 className="text-xl font-extrabold text-slate-900">{section.title}</h3>
                  {section.blocks.map((block) => (
                    <div key={block.h} className="mt-5">
                      <p className="font-bold text-slate-800">{block.h}</p>
                      <p className="mt-2 leading-8 text-slate-600">{block.text}</p>
                    </div>
                  ))}
                </div>
              ))}

              {extra && (
                <>
                  <h3 className="mt-8 text-xl font-extrabold text-slate-900">
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

            {/* Sağ bilgi kartı */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Şu An Açık • 7/24
                </span>
                <p className="mt-4 font-extrabold text-slate-900">{district.name} Nöbetçi Dişçi</p>
                <p className="mt-1 text-sm text-slate-500">Nöbetçi Diş Hekimi Telefonu</p>
                <a
                  href={CONTACT.phoneHref}
                  className="mt-2 block text-2xl font-extrabold text-brand-700"
                >
                  {CONTACT.phoneDisplay}
                </a>
                <div className="mt-5 space-y-3">
                  <a
                    href={CONTACT.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white hover:bg-brand-700"
                  >
                    <PhoneIcon /> Hemen Ara
                  </a>
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-600"
                  >
                    <WhatsAppIcon /> WhatsApp&apos;tan Yaz
                  </a>
                </div>
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Çalışma Saatleri</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">Haftanın 7 günü, 24 saat</p>
                  <p className="mt-1 text-xs text-slate-500">Cumartesi, pazar ve bayramlar dahil açık</p>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-400">Hizmet Bölgesi</p>
                  <p className="mt-2 text-sm font-semibold text-slate-700">{district.district}</p>
                </div>
              </div>
            </aside>
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

function serviceImage(service: (typeof services)[number]): string {
  const map: Record<string, string> = {
    implant: "/images/servis/implant-hero.webp",
    estetik: "/images/servis/emax-hero.webp",
    kaplama: "/images/servis/emax-hero.webp",
    ortodonti: "/images/servis/ortodonti-hero.webp",
    cocuk: "/images/servis/pedodonti-hero.webp",
    cerrahi: "/images/servis/implant-hero.webp",
    dolgu: "/images/servis/kanal-hero.webp",
    acil: "/images/servis/kanal-hero.webp",
  };
  return map[service.category] || "/images/servis/kanal-hero.webp";
}

function ServicePage({ service }: { service: (typeof services)[number] }) {
  const content = getServiceContent(service.slug);
  const schema = serviceSchema(service);
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", url: "/" },
    { name: service.name, url: `/${service.slug}/` },
  ]);
  const faqData = content?.faq?.length
    ? content.faq
    : faqs.map((f) => ({ question: f.question, answer: f.answer }));
  const faq = faqSchema(faqData);
  const relatedServices = (content?.related ?? [])
    .map((slug) => getService(slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

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
      <PageHero
        image={content?.image || serviceImage(service)}
        title={service.name}
        subtitle={service.intro}
      >
        <nav className="text-sm text-white/90">
          <Link href="/" className="hover:text-white">Anasayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
          <span className="mx-2">/</span>
          <span>{service.name}</span>
        </nav>
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
      </PageHero>

      {/* Body content + sidebar */}
      {content?.body && content.body.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
              <div className="mx-auto w-full max-w-3xl lg:mx-0">
                {content.body.map((section, idx) => (
                  <section key={section.h2}>
                    <h2 className="text-2xl font-extrabold text-slate-900">{section.h2}</h2>
                    {section.paragraphs.map((para, i) => (
                      <p key={i} className="mt-4 leading-8 text-slate-600">
                        {para}
                      </p>
                    ))}
                    {idx === 0 && content.image && (
                      <div className="my-8 overflow-hidden rounded-3xl shadow-md">
                        <Image
                          src={content.image}
                          alt={service.name}
                          width={1600}
                          height={600}
                          className="aspect-[16/7] w-full object-cover"
                        />
                      </div>
                    )}
                  </section>
                ))}
              </div>
              <div className="hidden lg:block">
                <ServiceSidebar activeSlug={service.slug} />
              </div>
            </div>
          </div>
        </section>
      )}

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

          {relatedServices.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold text-slate-900">İlgili Tedaviler</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Mobilde sağ menü burada görünür */}
          <div className="mt-12 lg:hidden">
            <ServiceSidebar activeSlug={service.slug} />
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-extrabold text-slate-900">Sık Sorulan Sorular</h2>
            <div className="mt-6 space-y-4">
              {faqData.map((f) => (
                <div key={f.question} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-bold text-slate-900">{f.question}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price table (en altta) */}
      <section className="bg-white pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {service.priceRows && service.priceRows.length > 0 ? (
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
          ) : (
            <div className="rounded-3xl border border-brand-200 bg-brand-50 p-6 text-center">
              <h2 className="text-lg font-extrabold text-slate-900">{service.name} Hakkında</h2>
              <p className="mt-1 text-sm text-slate-600">
                Kişiye özel tedavi planlaması için ücretsiz muayene olun.
              </p>
            </div>
          )}

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

      <CtaBand />
    </>
  );
}
