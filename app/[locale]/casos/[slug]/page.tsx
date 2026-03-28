import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

export default async function CaseSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          href={`/${locale}/casos`}
          className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-cyan-DEFAULT transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Volver a Casos
        </Link>
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)" }}>
          <GradientText>{slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}</GradientText>
        </h1>
        <div className="mt-8 p-8 bg-bg-card border border-bg-border rounded-[20px] text-text-muted text-sm">
          Caso de éxito completo en construcción. Contenido definitivo próximamente.
        </div>
      </div>
    </div>
  );
}
