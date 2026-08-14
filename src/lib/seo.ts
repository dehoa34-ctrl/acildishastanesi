import { CONTACT, SITE } from "@/lib/site";
import type { District } from "@/lib/districts";
import type { Service } from "@/lib/services";

export const SEO_IMAGE = "/images/servis/implant-hero.webp";

/** Ortak Dentist / LocalBusiness şeması (ana sayfa). */
export function dentistSchema({
  name = SITE.name,
  locality = "İstanbul",
  latitude = 41.0082,
  longitude = 28.9784,
  areaServed = "İstanbul",
}: {
  name?: string;
  locality?: string;
  latitude?: number;
  longitude?: number;
  areaServed?: string;
} = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE.domain}/#dentist`,
    name,
    url: SITE.domain,
    image: `${SITE.domain}${SEO_IMAGE}`,
    telephone: CONTACT.phoneDisplay,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    geo: { "@type": "GeoCoordinates", latitude, longitude },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: { "@type": "City", name: areaServed },
    sameAs: [CONTACT.whatsappHref],
  };
}

/** Semt sayfası için yerel Dentist şeması. */
export function districtSchema(district: District) {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE.domain}/${district.slug}/#dentist`,
    name: `${district.name} İstanbul Ağız ve Diş Sağlığı Merkezi`,
    url: `${SITE.domain}/${district.slug}/`,
    image: `${SITE.domain}${SEO_IMAGE}`,
    description: district.description,
    telephone: CONTACT.phoneDisplay,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      addressLocality: district.district,
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    areaServed: { "@type": "City", name: district.district },
  };
}

/** Hizmet sayfası için MedicalProcedure + fiyat şeması. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.name,
    url: `${SITE.domain}/${service.slug}/`,
    description: service.intro,
    image: `${SITE.domain}${SEO_IMAGE}`,
    procedureType: service.name,
    provider: dentistSchema({ name: SITE.name }),
  };
}

/** BreadcrumbList şeması. */
export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.domain}${item.url}`,
    })),
  };
}

/** FAQPage şeması. */
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Article şeması (blog). */
export function articleSchema({
  title,
  description,
  date,
  slug,
  category,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    image: `${SITE.domain}${SEO_IMAGE}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.domain}/${slug}/` },
    author: { "@type": "Organization", name: SITE.name },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.domain}${SEO_IMAGE}` },
    },
    category,
  };
}

/** Organization şeması (marka / kurum). */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.domain}/#organization`,
    name: SITE.name,
    url: SITE.domain,
    logo: { "@type": "ImageObject", url: `${SITE.domain}${SEO_IMAGE}` },
    telephone: CONTACT.phoneDisplay,
    sameAs: [
      "https://www.facebook.com/avrupadis/",
      "https://www.instagram.com/avrupadis/",
      "https://x.com/AvrupaDis",
      "https://www.youtube.com/channel/UCIxjb6-MAfugkVjf27M3WJQ",
      "https://www.linkedin.com/company/avrupadis/",
      "https://www.tiktok.com/@avrupadis",
    ],
  };
}

/** WebSite + SearchAction şeması (sitelinks search box). */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.domain}/#website`,
    url: SITE.domain,
    name: SITE.name,
    description: "İstanbul'da 7/24 açık ağız ve diş sağlığı merkezi.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.domain}/semtler/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
