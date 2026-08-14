import type { Metadata } from "next";
import Image from "next/image";
import { CONTACT } from "@/lib/site";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { PhoneIcon } from "@/components/Header";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "İstanbul Ağız ve Diş Sağlığı Merkezi; İstanbul'da 7/24 açık ağız ve diş sağlığı merkezleri ağı. 12 şube, modern teknoloji ve 25 yılı aşkın deneyim.",
  alternates: { canonical: "/hakkimizda/" },
};

export default function HakkimizdaPage() {
  return (
    <>
      <PageHero
        image="/images/servis/implant-hero.webp"
        kicker="Kurumsal"
        title="Hakkımızda"
        subtitle="Bir kliniğin ötesinde; Türkiye'nin en kapsamlı diş sağlığı ağı."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-8 text-slate-600">
            İstanbul Ağız ve Diş Sağlığı Merkezi; 7 ağız ve diş sağlığı polikliniği, 5 ağız ve diş sağlığı merkezi ve 1 laboratuvar
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
        </div>
      </section>

      {/* Misyon / Vizyon / Kalite */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <TargetIcon />
              </span>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">Misyonumuz</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Kurum içi eğitimlerle sürekli desteklenen, konularında uzman çalışanlarımızla hasta ve çalışan
                güvenliğini ön planda tutarak, hasta odaklı ve insan haklarına saygılı bir anlayışla; sağlık
                alanındaki bilimsel ve teknolojik gelişmeleri yakından izleyen, yenilikçi kimliğimizle tüm
                hastalarımıza en üst düzeyde kaliteli ve etkin sağlık hizmetleri sunmaktır.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <EyeIcon />
              </span>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">Vizyonumuz</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Ağız ve diş sağlığı tanı ve tedavilerinde ülkenin en iyi sağlık kuruluşlarından biri olmak için;
                dünyadaki gelişmeleri yakından takip eden, sürekli gelişen, hastalar tarafından tercih edilen ve
                uluslararası standartlarda marka olmuş bir sağlık kurumu olmaktır.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <ShieldIcon />
              </span>
              <h2 className="mt-5 text-xl font-extrabold text-slate-900">Kalite Politikamız</h2>
              <p className="mt-3 leading-7 text-slate-600">
                Uluslararası standartlarda hizmet kalitemiz, akreditasyonlarımız ve sertifikalarımızla
                tescillenmiştir. Kalite, güven ve uzmanlık ilkeleriyle her hastamıza en iyi tedaviyi sunmayı,
                toplumsal sorumluluğumuzun bilinciyle sürekli gelişmeyi ilke ediniyoruz.
              </p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Image
              src="/images/logo-1.webp"
              alt="ISO 9001 Sertifikası"
              width={140}
              height={90}
              className="h-16 w-auto opacity-80"
            />
            <Image
              src="/images/logo-2.webp"
              alt="JCI Akreditasyonu"
              width={140}
              height={90}
              className="h-16 w-auto opacity-80"
            />
            <Image
              src="/images/logo-3.webp"
              alt="Türk Diş Hekimleri Birliği"
              width={140}
              height={90}
              className="h-16 w-auto opacity-80"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-brand-50 p-6 text-center">
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

function TargetIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 3v6c0 4.5-3.4 7.8-8 9-4.6-1.2-8-4.5-8-9V6l8-3z" />
    </svg>
  );
}
