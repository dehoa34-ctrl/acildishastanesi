import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import { CONTACT, fmtYear } from "@/lib/site";
import { articleSchema, breadcrumbSchema, faqSchema, SEO_IMAGE } from "@/lib/seo";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { PhoneIcon } from "@/components/Header";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: fmtYear(post.title),
    description: fmtYear(post.description),
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: fmtYear(post.title),
      description: fmtYear(post.description),
      locale: "tr_TR",
      type: "article",
      publishedTime: post.date,
      images: [{ url: SEO_IMAGE, width: 1200, height: 900, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: fmtYear(post.title),
      description: fmtYear(post.description),
      images: [SEO_IMAGE],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = articleSchema({
    title: post.title,
    description: post.description,
    date: post.date,
    slug: `blog/${post.slug}`,
    category: post.category,
  });
  const crumbs = breadcrumbSchema([
    { name: "Anasayfa", url: "/" },
    { name: "Blog", url: "/blog/" },
    { name: post.title, url: `/blog/${post.slug}/` },
  ]);
  const faq = post.faq ? faqSchema(post.faq) : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />}

      {/* Header */}
      <PageHero
        image={post.image.replace("-card.webp", "-hero.webp")}
        title={post.title}
        subtitle={`${post.readMinutes} dk okuma süresi`}
      >
        <nav className="text-sm text-white/90">
          <Link href="/" className="hover:text-white">Anasayfa</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-white">Blog</Link>
        </nav>
        <span className="mt-5 inline-block rounded-full bg-white/15 px-3 py-1.5 text-xs font-bold">
          {post.category}
        </span>
      </PageHero>

      {/* Body */}
      <article className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-lg leading-8 text-slate-600">{fmtYear(post.description)}</p>

          {post.body.map((section, idx) => (
            <section key={section.h2}>
              <h2 className="mt-10 text-2xl font-extrabold text-slate-900">{fmtYear(section.h2)}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i} className="mt-4 leading-8 text-slate-600">
                  {fmtYear(para)}
                </p>
              ))}
              {idx === 0 && (
                <div className="my-8 overflow-hidden rounded-3xl shadow-md">
                  <Image
                    src={post.image.replace("-card.webp", "-hero.webp")}
                    alt={post.title}
                    width={1600}
                    height={600}
                    className="aspect-[16/7] w-full object-cover"
                  />
                </div>
              )}
            </section>
          ))}

          {post.faq && (
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold text-slate-900">Sık Sorulan Sorular</h2>
              <div className="mt-5 space-y-4">
                {post.faq.map((f) => (
                  <div key={f.question} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="font-bold text-slate-900">{fmtYear(f.question)}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{fmtYear(f.answer)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {post.relatedLinks && post.relatedLinks.length > 0 && (
            <section className="mt-12">
              <h2 className="text-xl font-extrabold text-slate-900">İlgili Hizmetlerimiz</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {post.relatedLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-700"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 rounded-3xl bg-brand-50 p-6 text-center">
            <p className="text-lg font-extrabold text-slate-900">Diş ağrınız mı var? Hemen arayın.</p>
            <p className="mt-1 text-sm text-slate-600">7/24 nöbetçi diş hekimimiz sizi bekliyor.</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-8 py-3.5 font-bold text-white hover:bg-brand-700"
            >
              <PhoneIcon /> {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </article>

      <CtaBand />
    </>
  );
}
