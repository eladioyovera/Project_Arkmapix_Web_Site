import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });

  return {
    title: {
      default: t("title"),
      template: `%s | ARKMAPIX`,
    },
    description: t("description"),
    metadataBase: new URL("https://arkmapix.com"),
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      url: "https://arkmapix.com",
      siteName: "ARKMAPIX",
      title: t("title"),
      description: t("description"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: "/favicon.ico",
      // When /public/brand/logo-icon.svg is available, add:
      // shortcut: "/brand/logo-icon.svg",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!routing.locales.includes(locale as "es" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
      <html lang={locale} className={inter.variable} suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* JSON-LD: Organization schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ARKMAPIX",
              url: "https://arkmapix.com",
              logo: "https://arkmapix.com/brand/logo-dark.svg",
              description:
                "Consultora latinoamericana de datos, analítica e inteligencia artificial con base en Colombia.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Medellín",
                addressCountry: "CO",
              },
              sameAs: [
                "https://linkedin.com/company/arkmapix",
                "https://github.com/arkmapix",
              ],
            }),
          }}
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
