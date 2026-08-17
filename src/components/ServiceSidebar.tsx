import Link from "next/link";
import { services, serviceCategories } from "@/lib/services";

export default function ServiceSidebar({ activeSlug }: { activeSlug: string }) {
  return (
    <aside className="lg:sticky lg:top-24">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-extrabold text-slate-900">Tüm Tedaviler</h2>
        <div className="mt-4 space-y-5">
          {serviceCategories.map((cat) => {
            const items = services.filter((s) => s.category === cat.key && s.menu !== false);
            if (items.length === 0) return null;
            return (
              <div key={cat.key}>
                <p className="text-xs font-bold uppercase tracking-wide text-brand-600">{cat.label}</p>
                <ul className="mt-2 space-y-1">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/${s.slug}`}
                        className={`block rounded-lg px-3 py-1.5 text-sm transition-colors ${
                          s.slug === activeSlug
                            ? "bg-brand-600 font-bold text-white"
                            : "text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                        }`}
                      >
                        {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
