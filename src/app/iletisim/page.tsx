import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Acil Diş Hastanesi iletişim bilgileri. 7/24 nöbetçi diş hekimi için hemen arayın: 0533 582 82 79.",
  alternates: { canonical: "/iletisim/" },
};

export default function IletisimPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Acil Diş Hastanesi",
    telephone: CONTACT.phoneDisplay,
    openingHours: "Mo-Su 00:00-24:00",
    areaServed: "İstanbul",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl">İletişim</h1>
          <p className="mt-3 max-w-xl text-lg text-brand-100">
            7/24 açık acil diş hastanesi. Gece, hafta sonu ve bayram fark etmeksizin arayın.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <a
              href={CONTACT.phoneHref}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <PhoneIcon className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-lg font-extrabold text-slate-900">Telefon</h2>
              <p className="mt-1 text-2xl font-extrabold text-brand-700">{CONTACT.phoneDisplay}</p>
              <p className="mt-2 text-sm text-slate-500">7/24 nöbetçi diş hekimi</p>
            </a>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-500 group-hover:text-white">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-lg font-extrabold text-slate-900">WhatsApp</h2>
              <p className="mt-1 text-2xl font-extrabold text-emerald-600">{CONTACT.phoneDisplay}</p>
              <p className="mt-2 text-sm text-slate-500">Mesaj ile hızlı bilgi alın</p>
            </a>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <ClockIcon />
              </span>
              <h2 className="mt-5 text-lg font-extrabold text-slate-900">Çalışma Saatleri</h2>
              <p className="mt-1 text-xl font-extrabold text-brand-700">7 Gün / 24 Saat</p>
              <p className="mt-2 text-sm text-slate-500">
                Cumartesi, pazar ve resmî tatiller dahil açık
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ClockIcon() {
  return (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 3" />
    </svg>
  );
}
