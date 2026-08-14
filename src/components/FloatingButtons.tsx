"use client";

import { CONTACT } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-20 right-4 z-50 hidden flex-col gap-3 sm:flex lg:bottom-6">
      <a
        href={CONTACT.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile yaz"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <a
        href={CONTACT.phoneHref}
        aria-label="Hemen ara"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-transform hover:scale-110"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
