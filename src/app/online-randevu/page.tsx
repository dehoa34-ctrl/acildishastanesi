import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { CONTACT } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Online Randevu",
  description:
    "7/24 online diş hekimi randevusu. Gece, pazar ve bayram dahil istediğiniz saatte randevu alın.",
  alternates: { canonical: "/online-randevu/" },
};

export default function OnlineRandevuPage() {
  return (
    <>
      <PageHero
        image="/images/servis/kanal-hero.webp"
        kicker="Randevu"
        title="Online Randevu"
        subtitle="Gece, hafta sonu ve bayram fark etmez. İstediğiniz saatte randevunuzu alın."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-slate-900">Randevu Oluşturun</h2>
            <p className="mt-2 text-sm text-slate-600">
              En hızlı randevu için bizi arayın veya WhatsApp&apos;tan yazın. Nöbetçi diş hekimimiz sizi
              bilgilendirecektir.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={CONTACT.phoneHref}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-brand-50 p-6 text-center transition-colors hover:bg-brand-100"
              >
                <PhoneIcon className="h-7 w-7 text-brand-600" />
                <span className="text-lg font-extrabold text-brand-700">{CONTACT.phoneDisplay}</span>
                <span className="text-xs text-slate-500">Hemen arayın</span>
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 rounded-2xl bg-emerald-50 p-6 text-center transition-colors hover:bg-emerald-100"
              >
                <WhatsAppIcon className="h-7 w-7 text-emerald-600" />
                <span className="text-lg font-extrabold text-emerald-700">WhatsApp Randevu</span>
                <span className="text-xs text-slate-500">Mesaj atın, dönüş yapalım</span>
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-brand-50 p-8 text-center">
            <p className="font-bold text-slate-900">Acil durumda randevu şartı aranmaz</p>
            <p className="mt-1 text-sm text-slate-600">
              7/24 açık kliniğimizde gece, pazar ve bayram dahil acil kabul yapılır.
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
