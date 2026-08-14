import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site";
import { WhatsAppIcon, PhoneIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Sağlık Turizmi",
  description:
    "Türkiye'de diş tedavisi. Yurt dışından gelen hastalar için transfer, konaklama ve tedavi paketleri. İmplant, gülüş tasarımı, zirkonyum.",
  alternates: { canonical: "/saglik-turizmi/" },
};

export default function SaglikTurizmiPage() {
  return (
    <>
      <PageHero
        image="/images/ph-reception-hero.webp"
        kicker="Kurumsal"
        title="Sağlık Turizmi"
        subtitle="Yurt dışından gelen hastalarımız için transfer, konaklama ve tedaviyi tek pakette planlıyoruz."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Paketimiz Neleri Kapsar?</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Havalimanı – klinik transfer",
              "Otel / konaklama desteği",
              "Tedavi planlama ve koordinasyon",
              "İngilizce ve Almanca danışmanlık",
              "Tedavi sonrası online kontrol",
              "Kişiye özel tedavi paketleri",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
                <span className="mt-0.5 text-brand-600">✓</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-2xl font-extrabold text-slate-900">Neden Türkiye&apos;de Diş Tedavisi?</h2>
          <p className="mt-4 leading-8 text-slate-600">
            Türkiye, uluslararası standartlarda diş hekimliği hizmetlerini uygun fiyatlarla sunar. Kliniğimiz;
            ISO 9001 belgeli dijital altyapısı, uzman hekim kadrosu ve 850.000&apos;in üzerinde başarılı tedavisiyle
            sağlık turistleri için güvenilir bir adrestir.
          </p>

          <div className="mt-10 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-extrabold text-slate-900">Tedavi planınızı oluşturalım</p>
            <p className="mt-1 text-sm text-slate-600">
              Fotoğraf ve röntgeninizi gönderin, uzaktan fiyat ve tedavi planı alın.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-3.5 font-bold text-white hover:bg-emerald-600"
              >
                <WhatsAppIcon /> WhatsApp&apos;tan Yazın
              </a>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
              >
                <PhoneIcon /> {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
