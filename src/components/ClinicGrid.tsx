"use client";

import { useState } from "react";
import { clinics } from "@/lib/clinics";
import ClinicMapModal from "@/components/ClinicMapModal";

export default function ClinicGrid() {
  const [selected, setSelected] = useState<(typeof clinics)[number] | null>(null);
  const nine = clinics.slice(0, 9);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {nine.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSelected(c)}
            className="group flex flex-col items-start gap-3 rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <MapPinIcon />
            </span>
            <span className="text-lg font-extrabold leading-snug text-slate-900 group-hover:text-brand-700">
              {c.name}
            </span>
            <span className="text-sm leading-6 text-slate-500">{c.address}</span>
            <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-brand-600">
              Haritada Gör
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <ClinicMapModal clinic={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function MapPinIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.7 9.4c0 4.3-5.7 9.6-5.7 9.6S6.3 13.7 6.3 9.4A5.7 5.7 0 0117.7 9.4z"
      />
      <circle cx="12" cy="9.4" r="2" />
    </svg>
  );
}
