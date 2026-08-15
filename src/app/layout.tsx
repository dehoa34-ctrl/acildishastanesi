import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TopStrip from "@/components/TopStrip";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";
import { SEO_IMAGE, organizationSchema, websiteSchema } from "@/lib/seo";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: "İstanbul Ağız ve Diş Sağlığı Merkezi | 7/24 Acil Diş 0532 438 13 03",
    template: "%s | İstanbul Ağız ve Diş Sağlığı Merkezi",
  },
  description:
    "İstanbul 7/24 açık ağız ve diş sağlığı merkezi. Gece, pazar ve bayramda nöbetçi diş hekimi. Acil kanal tedavisi, dolgu, çekim, implant. Hemen arayın: 0532 438 13 03.",
  keywords: [
    "istanbul ağız ve diş sağlığı merkezi",
    "acil diş",
    "acil diş hastanesi",
    "nöbetçi dişçi",
    "7/24 diş",
    "gece açık dişçi",
    "pazar açık dişçi",
    "istanbul nöbetçi dişçi",
    "diş ağrısı",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "İstanbul Ağız ve Diş Sağlığı Merkezi | 7/24 Acil Diş",
    description: "İstanbul'da 7/24 açık ağız ve diş sağlığı merkezi. Gece, pazar ve bayramda nöbetçi diş hekimi.",
    url: SITE.domain,
    siteName: SITE.name,
    locale: "tr_TR",
    type: "website",
    images: [{ url: SEO_IMAGE, width: 1200, height: 900, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul Ağız ve Diş Sağlığı Merkezi | 7/24 Acil Diş",
    description: "İstanbul'da 7/24 açık ağız ve diş sağlığı merkezi. Hemen arayın: 0532 438 13 03.",
    images: [SEO_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0284c7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-16 font-sans sm:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
        <TopStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
        <MobileBar />
        <Analytics />
      </body>
    </html>
  );
}
