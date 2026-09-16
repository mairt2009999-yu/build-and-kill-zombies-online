import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { websiteJsonLd, videoGameJsonLd } from "@/lib/jsonld";
import { siteConfig } from "@/content/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.seo.defaultTitle,
  description: siteConfig.seo.description,
  keywords: [...siteConfig.seo.keywords],
  robots: "index, follow",
  alternates: { canonical: siteConfig.url + "/" },
  openGraph: {
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
    url: siteConfig.url + "/",
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.description,
  },
  appleWebApp: { title: siteConfig.shortName },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ga = siteConfig.analytics.googleAnalyticsId;
  const adsense = siteConfig.ads.enabled ? siteConfig.ads.adsenseClientId : "";
  return (
    <html
      lang={siteConfig.locale}
      style={{ ["--accent" as string]: siteConfig.accentColor }}
    >
      <body className={`${inter.variable} font-sans antialiased`}>
        <JsonLd data={[websiteJsonLd(), videoGameJsonLd()]} />
        {ga && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga}');`}
            </Script>
          </>
        )}
        {adsense && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        <Header />
        {/* 不设 min-h-screen:短内容页让页脚自然上移,避免正文与页脚之间出现整屏空白 */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
