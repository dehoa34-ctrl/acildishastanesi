import Link from "next/link";
import { CONTACT, SITE } from "@/lib/site";
import { services } from "@/lib/services";
import { districts } from "@/lib/districts";
import { ToothIcon } from "@/components/Header";

const socials = [
  { name: "Facebook", href: "https://www.facebook.com/avrupadis/" },
  { name: "Instagram", href: "https://www.instagram.com/avrupadis/" },
  { name: "X (Twitter)", href: "https://x.com/AvrupaDis" },
  { name: "YouTube", href: "https://www.youtube.com/channel/UCIxjb6-MAfugkVjf27M3WJQ" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/avrupadis/" },
  { name: "TikTok", href: "https://www.tiktok.com/@avrupadis" },
];

export default function Footer() {
  const anadolu = districts.filter((x) => x.area === "anadolu").slice(0, 8);
  const avrupa = districts.filter((x) => x.area === "avrupa").slice(0, 8);

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white">
                <ToothIcon />
              </span>
              <span className="text-base font-extrabold text-white">{SITE.name}</span>
            </div>
            <p className="mt-4 text-sm leading-6">
              İstanbul&apos;da 7/24 açık acil diş hastanesi. Gece, hafta sonu ve bayramlarda nöbetçi diş hekimi
              ile kesintisiz hizmet.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a
                href={CONTACT.phoneHref}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-brand-500"
              >
                {CONTACT.phoneDisplay}
              </a>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
              >
                WhatsApp&apos;tan yazın
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-300 hover:text-brand-200"
              >
                {CONTACT.email}
              </a>
            </div>
            <div className="mt-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Bizi Takip Edin</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-slate-700 px-3 py-1.5 text-xs font-semibold text-slate-300 hover:border-brand-400 hover:text-brand-300"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Tedaviler</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 9).map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/hizmetler" className="font-bold text-brand-400 hover:text-brand-300">
                  Tüm Tedaviler →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Kurumsal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/hakkimizda" className="hover:text-white">Hakkımızda</Link></li>
              <li><Link href="/saglik-turizmi" className="hover:text-white">Sağlık Turizmi</Link></li>
              <li><Link href="/online-randevu" className="hover:text-white">Online Randevu</Link></li>
              <li><Link href="/anlasmali-kurumlar" className="hover:text-white">Anlaşmalı Kurumlar</Link></li>
              <li><Link href="/site-haritasi" className="font-bold text-brand-400 hover:text-brand-300">Site Haritası →</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Nöbetçi Dişçiler</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {anadolu.map((x) => (
                <li key={x.slug}>
                  <Link href={`/${x.slug}`} className="hover:text-white">{x.name}</Link>
                </li>
              ))}
              {avrupa.map((x) => (
                <li key={x.slug}>
                  <Link href={`/${x.slug}`} className="hover:text-white">{x.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name} | {CONTACT.phoneDisplay}. Tüm hakları saklıdır.
          </p>
          <nav className="flex gap-5">
            <Link href="/blog" className="hover:text-slate-300">Blog</Link>
            <Link href="/sss" className="hover:text-slate-300">SSS</Link>
            <Link href="/iletisim" className="hover:text-slate-300">İletişim</Link>
            <Link href="/site-haritasi" className="hover:text-slate-300">Site Haritası</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
