import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anlaşmalı Kurumlar",
  description:
    "İstanbul Ağız ve Diş Sağlığı Merkezi'nin anlaşmalı olduğu sigorta ve kurumlar. Kurumsal diş sağlığı anlaşmaları.",
  alternates: { canonical: "/anlasmali-kurumlar/" },
};

const partners = [
  "Özel Sağlık Sigortaları",
  "Tamamlayıcı Sağlık Sigortası",
  "Kurumsal Firmalar",
  "Şirket Çalışanları Programları",
  "Aile Hekimliği Anlaşmaları",
  "Uluslararası Sigorta Firmaları",
];

export default function AnlasmaliKurumlarPage() {
  return (
    <>
      <PageHero
        image="/images/servis/implant-hero.webp"
        kicker="Kurumsal"
        title="Anlaşmalı Kurumlar"
        subtitle="Kurum ve sigorta anlaşmalarımız hakkında bilgi alın."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {partners.map((p) => (
              <div key={p} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <span className="text-brand-600">✓</span>
                <p className="mt-2 font-bold text-slate-900">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="text-lg font-extrabold text-slate-900">Kurumunuzla anlaşalım</p>
            <p className="mt-1 text-sm text-slate-600">
              Kurumsal anlaşma için {CONTACT.phoneDisplay} numaralı hattımızdan bize ulaşın.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
