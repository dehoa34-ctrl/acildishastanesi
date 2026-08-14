"use client";

import { useState } from "react";
import { faqs } from "@/lib/faqs";

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.question}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen ? "border-brand-300 bg-brand-50/50" : "border-slate-200 bg-white"
            }`}
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-base font-bold text-slate-900">{f.question}</span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform ${
                  isOpen ? "rotate-180 bg-brand-600 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-6 text-slate-600">{f.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
