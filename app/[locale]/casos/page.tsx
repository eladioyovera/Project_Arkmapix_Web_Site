import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { CaseStudiesGrid } from "@/components/sections/CaseStudiesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.cases" });
  return { title: t("title"), description: t("description") };
}

export default async function CasosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cases" });

  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }} className="pt-20">
      <div className="pt-12 pb-4 px-6 text-center">
        <h1
          className="font-bold mb-4"
          style={{
            fontSize: "clamp(32px, 4vw, 52px)",
            background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #7B2FF7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {t("headline")}
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: "#8090A8" }}>
          {t("subheadline")}
        </p>
      </div>
      <CaseStudiesGrid />
    </div>
  );
}
