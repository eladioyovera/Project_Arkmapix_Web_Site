"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const CASES = [
  { key: "case_1", slug: "retailco-data-platform",  industry: "Retail",        accent: "#00C6FF", bg: "#0F2040", tags: ["Databricks", "Medallion", "Azure"] },
  { key: "case_2", slug: "ai-supply-chain",          industry: "Manufacturing", accent: "#7B2FF7", bg: "#1A0F3D", tags: ["Azure AI", "RAG", "LLM"] },
  { key: "case_3", slug: "data-mesh-finanzas",       industry: "Finance",       accent: "#0072FF", bg: "#0F1A3D", tags: ["Data Mesh", "Unity Catalog"] },
  { key: "case_4", slug: "analytics-salud",          industry: "Healthcare",    accent: "#00FFD1", bg: "#0F3D2A", tags: ["Fabric", "Real-time", "Power BI"] },
] as const;

export function CaseStudiesGrid() {
  const t = useTranslations("cases");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "#0F1825" }} aria-labelledby="cases-heading">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #00C6FF)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>{t("label")}</span>
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
          </div>
          <h2 id="cases-heading" className="font-bold mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F0F4F8" }}>
            {t("headline")}
          </h2>
          <p style={{ color: "#8090A8", maxWidth: "520px", margin: "0 auto" }}>{t("subheadline")}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASES.map((c, i) => {
            const title = t(`items.${c.key}.title`);
            const result = t(`items.${c.key}.result`);
            const description = t(`items.${c.key}.description`);
            const href = `/${locale}/casos/${c.slug}`;
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  href={href}
                  className="block group card-hover gradient-border"
                  style={{ background: "#0A0D14", border: "1px solid #1A2840", borderRadius: "12px", overflow: "hidden" }}
                  aria-label={title}
                >
                  {/* Image placeholder — replace with <Image> from /public/images/cases/ */}
                  <div
                    className="relative h-44 flex items-end p-5"
                    style={{ background: `linear-gradient(135deg, ${c.bg} 0%, #0A0D14 100%)` }}
                  >
                    <div
                      className="absolute top-0 left-0 right-0 bottom-0 opacity-15"
                      style={{ background: `radial-gradient(circle at 30% 50%, ${c.accent}, transparent 60%)` }}
                      aria-hidden
                    />
                    {/* Industry badge */}
                    <span
                      className="relative text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ background: `${c.accent}20`, color: c.accent, border: `1px solid ${c.accent}40` }}
                    >
                      {c.industry}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 leading-snug group-hover:text-cyan transition-colors" style={{ color: "#F0F4F8" }}>
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#8090A8" }}>{description}</p>

                    {/* Result */}
                    <div
                      className="text-sm font-bold mb-4 pb-4 border-b"
                      style={{
                        borderBottomColor: "#1A2840",
                        background: "linear-gradient(135deg, #00C6FF, #0072FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {result}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-2.5 py-1 rounded-full"
                          style={{ background: "#0F1825", color: "#4A6080", border: "1px solid #1A2840" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#4A6080" }}>
                      <span className="group-hover:text-cyan transition-colors">{t("see_case")}</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: "#00C6FF" }} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
