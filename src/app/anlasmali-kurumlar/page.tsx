import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Anlaşmalı Kurumlar",
  description:
    "Acil Diş Hastanesi'nin anlaşmalı olduğu sigorta ve kurumlar. Kurumsal diş sağlığı anlaşmaları.",
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
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Kurumsal</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Anlaşmalı Kurumlar</h1>
          <p className="mt-3 max-w-xl text-lg text-brand-100">
            Kurum ve sigorta anlaşmalarımız hakkında bilgi alın.
          </p>
        </div>
      </section>

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
