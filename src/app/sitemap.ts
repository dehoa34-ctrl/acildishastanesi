import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { districts } from "@/lib/districts";
import { services } from "@/lib/services";
import { posts } from "@/lib/posts";
import { clinics } from "@/lib/clinics";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${SITE.domain}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.domain}/semtler/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.domain}/hizmetler/`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.domain}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.domain}/site-haritasi/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.domain}/hakkimizda/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.domain}/kliniklerimiz/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.domain}/saglik-turizmi/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.domain}/online-randevu/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.domain}/anlasmali-kurumlar/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.domain}/sss/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.domain}/iletisim/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const districtPages: MetadataRoute.Sitemap = districts.map((x) => ({
    url: `${SITE.domain}/${x.slug}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((x) => ({
    url: `${SITE.domain}/${x.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const clinicPages: MetadataRoute.Sitemap = clinics.map((x) => ({
    url: `${SITE.domain}/kliniklerimiz/${x.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((x) => ({
    url: `${SITE.domain}/blog/${x.slug}/`,
    lastModified: new Date(x.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...districtPages, ...servicePages, ...clinicPages, ...blogPages];
}
