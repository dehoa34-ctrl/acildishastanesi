import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";
import { dentists } from "@/lib/dentists";
import CtaBand from "@/components/CtaBand";
import { PhoneIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "Acil Diş Hastanesi; İstanbul'da 7/24 açık ağız ve diş sağlığı merkezleri ağı. 120+ uzman hekim, 12 şube, modern teknoloji ve 25 yılı aşkın deneyim.",
  alternates: { canonical: "/hakkimizda/" },
};

export default function HakkimizdaPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-700 to-brand-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-brand-300">Kurumsal</p>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">Hakkımızda</h1>
          <p className="mt-3 max-w-2xl text-lg text-brand-100">
            Bir kliniğin ötesinde; Türkiye&apos;nin en kapsamlı diş sağlığı ağı.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-slate-600">
            Acil Diş Hastanesi; 7 ağız ve diş sağlığı polikliniği, 5 ağız ve diş sağlığı merkezi ve 1 laboratuvar
            olmak üzere toplamda 12 sağlık kuruluşundan oluşan geniş bir diş sağlığı ağıdır.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Toplam 150 ünitede 370 kişilik uzman medikal kadromuzla hizmet vermekteyiz. 25 yılı aşkın deneyimimiz,
            850.000&apos;den fazla başarılı tedavi ve ISO 9001 belgeli dijital teknoloji altyapımızla İstanbul&apos;da en
            güvenilir diş sağlığı merkezlerinden biri olarak kendimizi kanıtladık.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Tüm branşlarda uzman hekim kadromuz, ileri teknoloji altyapımız ve klinik içi laboratuvar desteğimizle;
            acil diş tedavilerinden estetik gülüş tasarımına, implanttan ortodontiye kadar geniş bir yelpazede
            hizmet sunuyoruz. Kliniğimiz gece, hafta sonu, cumartesi-pazar ve bayramlar dahil 7/24 açıktır.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            <Stat value="25+" label="Yıl Deneyim" />
            <Stat value="12" label="Şube" />
            <Stat value="120+" label="Uzman Hekim" />
            <Stat value="250K+" label="Mutlu Hasta" />
          </div>

          <div className="mt-10 rounded-3xl bg-brand-50 p-6 text-center">
            <p className="text-lg font-extrabold text-slate-900">Hemen randevu alın</p>
            <p className="mt-1 text-sm text-slate-600">7/24 nöbetçi diş hekimimiz hazır.</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              <PhoneIcon /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900">Uzman Hekim Kadromuz</h2>
          <p className="mt-2 text-slate-600">Deneyimli ve uzman kadromuzla en iyi hizmeti sunuyoruz.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {dentists.map((d) => (
              <div key={d.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-extrabold text-slate-900">{d.name}</p>
                <p className="mt-1 text-sm font-semibold text-brand-600">{d.title}</p>
                <p className="mt-1 text-xs text-slate-500">AvrupaDİŞ {d.clinic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
      <p className="text-2xl font-extrabold text-brand-700">{value}</p>
      <p className="mt-1 text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}
