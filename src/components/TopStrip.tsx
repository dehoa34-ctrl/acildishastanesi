import { CONTACT } from "@/lib/site";

export default function TopStrip() {
  return (
    <a
      href={CONTACT.phoneHref}
      className="group block w-full"
      aria-label="7/24 nöbetçi diş hekimi için hemen arayın"
    >
      <div
        className="relative flex h-10 w-full items-center justify-center overflow-hidden bg-brand-800"
        style={{ backgroundImage: "url(/images/banner-strip.webp)", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-brand-900/70" />
        <div className="relative flex items-center gap-2 text-xs font-bold text-white sm:text-sm">
          <span className="hidden rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-extrabold uppercase sm:inline">
            7/24 Açık
          </span>
          <span>Gece • Pazar • Bayram Nöbetçi Diş Hekimi</span>
          <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-extrabold text-brand-800 sm:text-xs">
            {CONTACT.phoneDisplay}
          </span>
          <span className="hidden text-brand-200 sm:inline">Hemen Ara →</span>
        </div>
      </div>
    </a>
  );
}
