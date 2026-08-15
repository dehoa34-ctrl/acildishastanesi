import Link from "next/link";
import { districts } from "@/lib/districts";

export function DistrictGrid() {
  const avrupa = districts.filter((x) => x.area === "avrupa");

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <DistrictColumn title="Avrupa Yakası" items={avrupa} />
    </div>
  );
}

function DistrictColumn({ title, items }: { title: string; items: typeof districts }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-extrabold text-slate-900">{title}</h3>
      <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-3">
        {items.map((x) => (
          <li key={x.slug}>
            <Link
              href={`/${x.slug}`}
              className="group flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-brand-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300 transition-colors group-hover:bg-brand-600" />
              {x.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
