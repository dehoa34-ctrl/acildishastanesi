import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import FloatingButtons from "@/components/FloatingButtons";
import Analytics from "@/components/Analytics";
import { SITE } from "@/lib/site";
import { SEO_IMAGE } from "@/lib/seo";

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
    default: "Acil Diş Hastanesi İstanbul | 7/24 Nöbetçi Dişçi 0533 582 82 79",
    template: "%s | Acil Diş Hastanesi İstanbul",
  },
  description:
    "İstanbul 7/24 açık acil diş hastanesi. Gece, pazar ve bayramda nöbetçi diş hekimi. Acil kanal tedavisi, dolgu, çekim. Hemen arayın: 0533 582 82 79.",
  keywords: [
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
    title: "Acil Diş Hastanesi İstanbul | 7/24 Nöbetçi Dişçi",
    description: "İstanbul'da 7/24 açık acil diş hastanesi. Gece, pazar ve bayramda nöbetçi diş hekimi.",
    url: SITE.domain,
    siteName: SITE.name,
    locale: "tr_TR",
    type: "website",
    images: [{ url: SEO_IMAGE, width: 1200, height: 900, alt: "Acil Diş Hastanesi İstanbul" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acil Diş Hastanesi İstanbul | 7/24 Nöbetçi Dişçi",
    description: "İstanbul'da 7/24 açık acil diş hastanesi. Hemen arayın: 0533 582 82 79.",
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
