"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { services, isServiceHidden, type Service } from "@/lib/services";
import { getServiceContent } from "@/lib/service-content";
import { ToothIcon } from "@/components/Header";

function serviceCardImage(s: Service): string {
  const c = getServiceContent(s.slug);
  if (c?.image) return c.image.replace("-hero.webp", "-card.webp");
  return "/images/servis/cekim-card.webp";
}

export default function ServiceSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.clientWidth ?? 300;
    el.scrollBy({ left: dir * cardWidth * 1.1, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.filter((s) => s.menu !== false && !isServiceHidden(s.slug)).map((s) => (
          <Link
            key={s.slug}
            href={`/${s.slug}`}
            className="group flex w-full min-w-[85%] snap-start flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl sm:min-w-[46%] lg:min-w-[31.5%]"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
              <Image
                src={serviceCardImage(s)}
                alt={s.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <ToothIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-slate-900">{s.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{s.short}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                Detaylı bilgi & fiyat
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Ok butonları */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={() => scroll(-1)}
          aria-label="Önceki tedaviler"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-brand-400 hover:text-brand-600"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="Sonraki tedaviler"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm transition-colors hover:bg-brand-700"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
