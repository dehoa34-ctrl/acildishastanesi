import Link from "next/link";
import { CONTACT } from "@/lib/site";
import { PhoneIcon } from "@/components/Header";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white px-4 py-20 text-center">
      <div>
        <p className="text-6xl font-extrabold text-brand-200">404</p>
        <h1 className="mt-4 text-2xl font-extrabold text-slate-900">Sayfa bulunamadı</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
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
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-7 py-3.5 font-bold text-brand-700 hover:bg-brand-50"
          >
            <PhoneIcon /> {CONTACT.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
