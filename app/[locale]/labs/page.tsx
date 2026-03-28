import { GradientText } from "@/components/ui/GradientText";
import { FlaskConical } from "lucide-react";

export default function LabsPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-28 pb-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-bg-card border border-bg-border rounded-full">
            <FlaskConical size={40} className="text-cyan-DEFAULT" />
          </div>
        </div>
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          <GradientText>ARKMAPIX Labs</GradientText>
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Investigación aplicada en inteligencia artificial, arquitecturas de datos experimentales
          y prototipos de productos de datos.
        </p>
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-card border border-bg-border rounded-pill">
          <div className="w-2 h-2 rounded-full bg-cyan-DEFAULT animate-pulse" />
          <span className="text-text-secondary text-sm font-medium">Próximamente</span>
        </div>
      </div>
    </div>
  );
}
