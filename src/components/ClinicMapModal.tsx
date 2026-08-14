"use client";

import { useEffect } from "react";
import type { Clinic } from "@/lib/clinics";
import { PhoneIcon } from "@/components/Header";
import { CONTACT } from "@/lib/site";

export default function ClinicMapModal({
  clinic,
  onClose,
}: {
  clinic: Clinic;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    clinic.address
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${clinic.name} haritası`}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-4">
          <div>
            <h3 className="text-lg font-extrabold text-slate-900">{clinic.name}</h3>
            <p className="mt-1 text-xs leading-5 text-slate-500">{clinic.address}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <iframe
          src={mapSrc}
          title={`${clinic.name} - Google Harita`}
          className="h-80 w-full border-0"
          loading="lazy"
          allowFullScreen
        />

        <div className="flex flex-col gap-3 px-6 py-5 sm:flex-row">
          <a
            href={clinic.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-brand-600 px-6 py-3 text-center text-sm font-bold text-white hover:bg-brand-700"
          >
            Yol Tarifi Al
          </a>
          <a
            href={CONTACT.phoneHref}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-brand-600 px-6 py-3 text-sm font-bold text-brand-700 hover:bg-brand-50"
          >
            <PhoneIcon /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
