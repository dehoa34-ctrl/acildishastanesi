import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { districts, isDistrictHidden } from "@/lib/districts";
import { services, isServiceHidden } from "@/lib/services";
import { posts, isPostHidden } from "@/lib/posts";
import { getServiceContent } from "@/lib/service-content";

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
    { url: `${SITE.domain}/saglik-turizmi/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE.domain}/online-randevu/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE.domain}/anlasmali-kurumlar/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE.domain}/sss/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE.domain}/iletisim/`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const districtPages: MetadataRoute.Sitemap = districts
    .filter((x) => !isDistrictHidden(x.slug))
    .map((x) => ({
      url: `${SITE.domain}/${x.slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));

  const servicePages: MetadataRoute.Sitemap = services
    .filter((x) => !isServiceHidden(x.slug))
    .map((x) => ({
      url: `${SITE.domain}/${x.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [getServiceContent(x.slug)?.image ?? "/images/servis/cekim-hero.webp"].map(
        (img) => `${SITE.domain}${img}`
      ),
    }));

  const blogPages: MetadataRoute.Sitemap = posts
    .filter((x) => !isPostHidden(x.slug))
    .map((x) => ({
      url: `${SITE.domain}/blog/${x.slug}/`,
      lastModified: new Date(x.date),
      changeFrequency: "monthly",
      priority: 0.6,
      images: [`${SITE.domain}${x.image}`],
    }));

  return [...staticPages, ...districtPages, ...servicePages, ...blogPages];
}
