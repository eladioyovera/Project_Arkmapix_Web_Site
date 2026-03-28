import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { GradientText } from "@/components/ui/GradientText";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return { title: t("title"), description: t("description") };
}

export default function NosotrosPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          <GradientText>Sobre ARKMAPIX</GradientText>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          Construidos en la cima. Diseñados para el futuro. Somos una consultora latinoamericana
          de datos e inteligencia artificial con base en Medellín, Colombia.
        </p>
        <div className="mt-12 p-8 bg-bg-card border border-bg-border rounded-[20px] text-text-muted text-sm">
          Página completa en construcción. Contenido definitivo próximamente.
        </div>
      </div>
    </div>
  );
}
