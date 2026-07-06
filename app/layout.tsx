import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),

  title: siteConfig.seo.title,

  description: siteConfig.seo.description,

  keywords: siteConfig.seo.keywords,

  icons: {
    icon: siteConfig.theme.favicon,
    shortcut: siteConfig.theme.favicon,
    apple: siteConfig.theme.favicon,
  },

  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    url: "http://localhost:3000",
    siteName: siteConfig.ministry.name,
    locale: "en_KE",
    type: "website",
    images: [
      {
        url: siteConfig.theme.heroImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ministry.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.theme.heroImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
