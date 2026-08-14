import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { posts } from "@/lib/posts";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";

function postImage(category: string): string {
  const map: Record<string, string> = {
    "Acil Diş": "/images/servis/cekim-card.webp",
    "Ağız Sağlığı": "/images/servis/emax-card.webp",
    "İmplant": "/images/servis/implant-card.webp",
    "Fiyatlar": "/images/servis/protetik-card.webp",
    "Estetik Diş": "/images/servis/emax-card.webp",
    "Tedaviler": "/images/servis/kanal-card.webp",
    "Çocuk Diş": "/images/servis/pedodonti-card.webp",
  };
  return map[category] || "/images/servis/cekim-card.webp";
}

export const metadata: Metadata = {
  title: "Diş Sağlığı Rehberi & Blog",
  description:
    "Diş ağrısı, implant, kanal tedavisi, gülüş tasarımı, çocuk diş sağlığı ve daha fazlası hakkında uzman bilgiler. İstanbul nöbetçi dişçi rehberi.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <>
      <PageHero
        image="/images/servis/kanal-hero.webp"
        kicker="Diş Sağlığı Rehberi"
        title="Blog & Bilgilendirme"
        subtitle="Diş sağlığı hakkında merak ettikleriniz, acil diş rehberleri ve tedavi bilgileri."
      />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold text-brand-700">
                {c}
              </span>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-300 hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={postImage(p.category)}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-xs font-bold uppercase tracking-wide text-brand-600">{p.category}</span>
                  <h2 className="mt-3 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-brand-700">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{p.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    {p.readMinutes} dk okuma
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
