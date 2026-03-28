import { GradientText } from "@/components/ui/GradientText";
import { BlogPreview } from "@/components/sections/BlogPreview";

export default function BlogPage() {
  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }} className="pt-20">
      <div className="pt-8 pb-4 px-4 text-center">
        <h1 className="font-bold text-text-primary mb-4" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
          <GradientText>Blog & Insights</GradientText>
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Análisis técnico, guías y tendencias en datos e inteligencia artificial.
        </p>
      </div>
      <BlogPreview />
    </div>
  );
}
