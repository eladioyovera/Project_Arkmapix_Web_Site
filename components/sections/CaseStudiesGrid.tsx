"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";

const CASE_ITEMS = [
  { key: "case_1", slug: "retailco-data-platform", imgColor: "#0F2A3D" },
  { key: "case_2", slug: "ai-supply-chain", imgColor: "#1A0F3D" },
  { key: "case_3", slug: "data-mesh-finanzas", imgColor: "#0F1A3D" },
  { key: "case_4", slug: "analytics-salud", imgColor: "#0F3D1A" },
] as const;

const TECH_TAGS: Record<string, string[]> = {
  case_1: ["Databricks", "Medallion", "Azure"],
  case_2: ["Azure AI", "RAG", "LLM"],
  case_3: ["Data Mesh", "Unity Catalog", "Power BI"],
  case_4: ["Fabric", "Real-time", "Power BI"],
};

export function CaseStudiesGrid() {
  const t = useTranslations("cases");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-card)" }}
      aria-labelledby="cases-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center">{t("label")}</SectionLabel>
          <h2
            id="cases-heading"
            className="text-text-primary mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base">
            {t("subheadline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {CASE_ITEMS.map((item, i) => {
            const title = t(`items.${item.key}.title`);
            const industry = t(`items.${item.key}.industry`);
            const result = t(`items.${item.key}.result`);
            const description = t(`items.${item.key}.description`);
            const href = `/${locale}/casos/${item.slug}`;
            const tags = TECH_TAGS[item.key];

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={href}
                  className="block gradient-border glow-hover group transition-all duration-300 hover:-translate-y-1 rounded-card overflow-hidden focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:outline-none"
                  aria-label={`Caso de éxito: ${title}`}
                >
                  {/* Image placeholder */}
                  {/* Replace with: <Image src={`/images/cases/case-0${i+1}.jpg`} alt={title} width={800} height={500} className="w-full h-48 object-cover" /> */}
                  <div
                    className="relative w-full h-48 flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${item.imgColor} 0%, #0A0D14 100%)` }}
                    aria-hidden
                  >
                    <div className="absolute inset-0 opacity-10">
                      <svg viewBox="0 0 800 500" className="w-full h-full" aria-hidden>
                        {Array.from({ length: 12 }, (_, j) => (
                          <line
                            key={j}
                            x1={j * 70}
                            y1="0"
                            x2={j * 70 + 200}
                            y2="500"
                            stroke="#00C6FF"
                            strokeWidth="0.5"
                          />
                        ))}
                      </svg>
                    </div>
                    {/* Big result number */}
                    <div className="text-center z-10">
                      <div className="text-2xl font-black gradient-text">{result.split(" ").slice(0, 2).join(" ")}</div>
                      <div className="caption text-text-muted mt-1">{industry}</div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <Badge variant="outline">{industry}</Badge>
                    </div>
                    <h3 className="text-text-primary font-semibold text-lg mb-2 group-hover:gradient-text transition-all duration-300 line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                      {description}
                    </p>

                    {/* Result highlight */}
                    <div className="py-3 border-t border-b border-bg-border mb-4">
                      <span className="text-sm font-semibold gradient-text">{result}</span>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-pill border border-bg-border text-text-muted font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-text-muted text-sm font-medium group-hover:text-cyan-DEFAULT transition-colors">
                      {t("see_case")}
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
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
