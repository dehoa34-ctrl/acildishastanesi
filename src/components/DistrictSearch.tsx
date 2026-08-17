"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { districts, isDistrictHidden } from "@/lib/districts";

export default function DistrictSearch({ limit = 12 }: { limit?: number }) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLocaleLowerCase("tr");
    if (!q) return [];
    return districts
      .filter((x) => !isDistrictHidden(x.slug))
      .filter(
        (x) =>
          x.name.toLocaleLowerCase("tr").includes(q) ||
          x.district.toLocaleLowerCase("tr").includes(q) ||
          x.neighborhoods.some((n) => n.toLocaleLowerCase("tr").includes(q))
      )
      .slice(0, limit);
  }, [query, limit]);

  return (
    <div className="w-full max-w-xl">
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="İlçe veya semt adı yazın… (ör. Kadıköy)"
          className="w-full rounded-full border border-slate-200 bg-white py-4 pl-12 pr-4 text-base text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
        />
      </div>
      {results.length > 0 && (
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
          <p className="border-b border-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wide text-slate-500">
            Size en yakın nöbetçi dişçi
          </p>
          <ul className="max-h-80 overflow-y-auto">
            {results.map((x) => (
              <li key={x.slug}>
                <Link
                  href={`/${x.slug}`}
                  className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  <span>
                    {x.name} <span className="font-normal text-slate-400">• {x.district}</span>
                  </span>
                  <span className="text-brand-500">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
    </svg>
  );
}
