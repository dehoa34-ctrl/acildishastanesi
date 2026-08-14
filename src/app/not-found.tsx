import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import { PhoneIcon } from "@/components/Header";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-4 py-20 text-center">
      <Image
        src="/images/servis/cekim-hero.webp"
        alt="İstanbul Ağız ve Diş Sağlığı Merkezi - sayfa bulunamadı"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brand-950/80" />
      <div className="relative">
        <p className="text-6xl font-extrabold text-brand-300">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-white">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-3 max-w-md text-brand-100">
          Aradığınız sayfa taşınmış ya da kaldırılmış olabilir. Semt aramanızı kullanarak en yakın nöbetçi dişçiye ulaşın.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-brand-600 px-7 py-3.5 font-bold text-white hover:bg-brand-700"
          >
            Anasayfaya dön
          </Link>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-7 py-3.5 font-bold text-white hover:bg-white/10"
          >
            <PhoneIcon /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
