"use client";

import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Header";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur sm:hidden">
      <div className="grid grid-cols-3 gap-1 p-2">
        <a
          href={CONTACT.phoneHref}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 py-3 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" /> Hemen Ara
        </a>
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-3 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
        <Link
          href="/semtler"
          className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 py-3 text-sm font-bold text-slate-700"
        >
          <LocationIcon /> Nöbetçi Dişçi
        </Link>
      </div>
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.7 9.4c0 4.3-5.7 9.6-5.7 9.6S6.3 13.7 6.3 9.4A5.7 5.7 0 0117.7 9.4z"
      />
      <circle cx="12" cy="9.4" r="2" />
    </svg>
  );
}
