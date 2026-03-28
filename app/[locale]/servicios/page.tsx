import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";
import { ServicesGrid } from "@/components/sections/ServicesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.services" });
  return { title: t("title"), description: t("description") };
}

export default function ServiciosPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-20">
      <div className="pt-8 pb-4 px-4 text-center">
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          <GradientText>Nuestros Servicios</GradientText>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Soluciones de datos de alto impacto para empresas que escalan.
        </p>
      </div>
      <ServicesGrid />
    </div>
  );
}
