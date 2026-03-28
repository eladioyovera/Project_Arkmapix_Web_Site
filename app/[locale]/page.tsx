import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsMarquee } from "@/components/sections/ClientsMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ProcessStepper } from "@/components/sections/ProcessStepper";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";
import { TechStack } from "@/components/sections/TechStack";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { BlogPreview } from "@/components/sections/BlogPreview";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function HomePage() {
  return (
    <>
      {/* 01 — HERO */}
      <HeroSection />

      {/* 02 — CLIENTS MARQUEE */}
      <ClientsMarquee />

      {/* 03 — ABOUT */}
      <AboutSection />

      {/* 04 — SERVICES */}
      <ServicesGrid />

      {/* 05 — PROCESS */}
      <ProcessStepper />

      {/* 06 — CASE STUDIES */}
      <CaseStudiesGrid />

      {/* 07 — TECH STACK */}
      <TechStack />

      {/* 08 — TESTIMONIALS */}
      <TestimonialsCarousel />

      {/* 09 — CTA BANNER */}
      <CtaBanner />

      {/* 10 — BLOG PREVIEW */}
      <BlogPreview />
    </>
  );
}
