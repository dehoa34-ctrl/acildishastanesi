import { CONTACT } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function CtaBand() {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center sm:px-6 lg:flex-row lg:justify-between lg:text-left lg:px-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Diş ağrınız mı var? Şimdi arayın.</h2>
          <p className="mt-2 text-brand-100">
            Gece, hafta sonu ve bayram fark etmez — nöbetçi diş hekimimiz 7/24 hazır.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-brand-700 shadow-sm hover:bg-brand-50"
          >
            <PhoneIcon /> {CONTACT.phoneDisplay}
          </a>
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-base font-bold text-white shadow-sm hover:bg-emerald-600"
          >
            <WhatsAppIcon /> WhatsApp&apos;tan Ulaş
          </a>
        </div>
      </div>
    </section>
  );
}
