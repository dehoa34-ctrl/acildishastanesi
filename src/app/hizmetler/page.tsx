import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { services, serviceCategories, type Service } from "@/lib/services";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { ToothIcon } from "@/components/Header";
import { getServiceContent } from "@/lib/service-content";

function svcImg(s: Service): string {
  const c = getServiceContent(s.slug);
  if (c?.image) return c.image.replace("-hero.webp", "-card.webp");
  const map: Record<Service["category"], string> = {
    implant: "/images/servis/implant-card.webp",
    estetik: "/images/servis/lamine-card.webp",
    kaplama: "/images/servis/zirkonyum-card.webp",
    ortodonti: "/images/servis/ortodonti-card.webp",
    cocuk: "/images/servis/pedodonti-card.webp",
    cerrahi: "/images/servis/cekim-card.webp",
    dolgu: "/images/servis/kanal-card.webp",
    acil: "/images/servis/cekim-card.webp",
  };
  return map[s.category] || "/images/servis/cekim-card.webp";
}

export const metadata: Metadata = {
  title: "Tüm Diş Tedavileri",
  description:
    "İmplant, lamine, zirkonyum, porselen, protez, kanal tedavisi, ortodonti, çocuk diş, diş çekimi ve daha fazlası. Tüm diş tedavileri için 7/24 açık kliniğimiz.",
  alternates: { canonical: "/hizmetler/" },
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        image="/images/servis/emax-hero.webp"
        kicker="Tedavilerimiz"
        title="Tüm Diş Tedavileri"
        subtitle="Acil müdahaleden estetik gülüş tasarımına, implanttan ortodontiye kadar tüm diş tedavilerinde 7/24 yanınızdayız."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {serviceCategories.map((cat) => {
              const items = services.filter((s) => s.category === cat.key);
              if (items.length === 0) return null;
              return (
                <div key={cat.key}>
                  <h2 className="text-xl font-extrabold text-slate-900">{cat.label}</h2>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/${s.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lg"
                      >
                        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                          <Image
                            src={svcImg(s)}
                            alt={s.name}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                        <span className="flex flex-1 items-start gap-3 p-5">
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white">
                            <ToothIcon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block font-bold text-slate-900 group-hover:text-brand-700">{s.name}</span>
                            <span className="mt-1 block text-sm leading-5 text-slate-500">{s.short}</span>
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
