import { GradientText } from "@/components/ui/GradientText";

export default function AcademiaPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          <GradientText>ARKMAPIX Academy</GradientText>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
          Formación técnica certificada en Azure Databricks, Microsoft Fabric y más.
          Cursos enterprise para equipos de datos.
        </p>
        <div className="mt-12 p-8 bg-bg-card border border-bg-border rounded-[20px] text-text-muted text-sm">
          Próximamente: catálogo completo de cursos y programas de certificación.
        </div>
      </div>
    </div>
  );
}
