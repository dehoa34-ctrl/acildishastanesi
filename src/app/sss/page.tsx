import type { Metadata } from "next";
import { faqs } from "@/lib/faqs";
import { CONTACT } from "@/lib/site";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description:
    "7/24 açık diş kliniği hakkında sık sorulan sorular. Gece, pazar ve bayramda nöbetçi dişçi hizmetleri hakkında cevaplar.",
  alternates: { canonical: "/sss/" },
};

export default function SssPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">Sık Sorulan Sorular</h1>
          <p className="mt-3 max-w-xl text-lg text-brand-100">
            Acil diş hastanesi ve nöbetçi dişçi hizmetlerimiz hakkında merak ettikleriniz.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion />
          <div className="mt-10 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-extrabold text-slate-900">Aklınıza takılan başka soru mu var?</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              {CONTACT.phoneDisplay} numaralı hattı arayın
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
