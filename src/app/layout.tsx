import type { Metadata } from "next";
import {
  Bodoni_Moda,
  Shippori_Mincho,
  Zen_Kaku_Gothic_New,
  Inter,
} from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { site } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { ConceptBadgeFixed } from "@/components/ConceptBadge";

const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-heading-jp",
  display: "swap",
});

const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body-jp",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ui-en",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nameEn} | ${site.tagline}`,
    template: `%s | ${site.nameEn}`,
  },
  description: site.description,
  openGraph: {
    title: site.nameEn,
    description: site.description,
    url: site.url,
    siteName: site.nameEn,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.nameEn,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      data-scroll-behavior="smooth"
      className={`${bodoniModa.variable} ${shipporiMincho.variable} ${zenKakuGothicNew.variable} ${inter.variable}`}
    >
      <body>
        <MotionConfig reducedMotion="user">
          <Header />
          <main className="pb-[68px] pt-[68px] md:pt-[84px] lg:pb-0">{children}</main>
          <Footer />
          <MobileCTA />
          <ConceptBadgeFixed />
        </MotionConfig>
      </body>
    </html>
  );
}
