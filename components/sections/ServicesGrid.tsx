"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

// Service bullets (what they include, not a paragraph description)
const SERVICE_DETAILS: Record<string, string[]> = {
  data_architecture:    ["Medallion Architecture", "Data Mesh & Lakehouse", "Azure Databricks, Microsoft Fabric"],
  data_engineering:     ["ETL/ELT Pipelines", "Azure Data Factory", "Databricks Asset Bundles"],
  advanced_analytics:   ["Power BI Dashboards", "Unity Catalog & Governance", "Executive reporting"],
  artificial_intelligence: ["AI Agents & LLMs", "RAG Pipelines", "Azure AI Foundry, MLOps"],
  cloud_devops:         ["CI/CD for Data", "Azure DevOps & DAB", "Microsoft Fabric Mirroring"],
  academy:              ["Databricks Certification", "Azure Data Engineer", "Enterprise team training"],
};

// Inline SVG service icons
function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    data_architecture: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="url(#svc-g)" strokeWidth="1.5" fill="url(#svc-g)" fillOpacity="0.1"/>
        <rect x="10" y="2" width="8" height="8" rx="2" stroke="url(#svc-g)" strokeWidth="1.5" fill="url(#svc-g)" fillOpacity="0.1"/>
        <rect x="18" y="2" width="8" height="8" rx="2" stroke="url(#svc-g)" strokeWidth="1.5" fill="url(#svc-g)" fillOpacity="0.1"/>
        <rect x="6" y="18" width="16" height="8" rx="2" stroke="url(#svc-g)" strokeWidth="1.5" fill="url(#svc-g)" fillOpacity="0.2"/>
        <path d="M6 10v5h16v-5" stroke="url(#svc-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 15v3" stroke="url(#svc-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs><linearGradient id="svc-g" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#0072FF"/></linearGradient></defs>
      </svg>
    ),
    data_engineering: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="6" cy="14" r="3.5" stroke="url(#de-g)" strokeWidth="1.5" fill="url(#de-g)" fillOpacity="0.1"/>
        <circle cx="22" cy="14" r="3.5" stroke="url(#de-g)" strokeWidth="1.5" fill="url(#de-g)" fillOpacity="0.1"/>
        <path d="M9.5 14H13M15 14H18.5" stroke="url(#de-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="13" y="10" width="2" height="8" rx="1" fill="url(#de-g)" fillOpacity="0.5"/>
        <defs><linearGradient id="de-g" x1="2" y1="2" x2="26" y2="26" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    advanced_analytics: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M4 22L10 14L15 18L21 10L25 13" stroke="url(#an-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="10" cy="14" r="2" fill="#00C6FF"/>
        <circle cx="15" cy="18" r="2" fill="#0072FF"/>
        <circle cx="21" cy="10" r="2" fill="#7B2FF7"/>
        <defs><linearGradient id="an-g" x1="4" y1="22" x2="25" y2="10" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    artificial_intelligence: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="5" stroke="url(#ai-g)" strokeWidth="1.5" fill="url(#ai-g)" fillOpacity="0.1"/>
        <circle cx="14" cy="5" r="2" fill="url(#ai-g)"/>
        <circle cx="14" cy="23" r="2" fill="url(#ai-g)"/>
        <circle cx="5" cy="14" r="2" fill="url(#ai-g)"/>
        <circle cx="23" cy="14" r="2" fill="url(#ai-g)"/>
        <path d="M14 9v5M14 14h5" stroke="url(#ai-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs><linearGradient id="ai-g" x1="5" y1="5" x2="23" y2="23" gradientUnits="userSpaceOnUse"><stop stopColor="#00FFD1"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    cloud_devops: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M8 20C5.5 20 3 18 3 15.5C3 13 5 11.5 7 11.5C7.5 9.5 9.5 8 12 8C15 8 17 10 17.5 12.5H18C20.5 12.5 23 14.5 23 17C23 19.5 20.5 21 18 21H8" stroke="url(#cd-g)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M14 24v-6M12 21l2 3 2-3" stroke="url(#cd-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="cd-g" x1="3" y1="8" x2="23" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#7B2FF7"/></linearGradient></defs>
      </svg>
    ),
    academy: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M14 4L26 10L14 16L2 10L14 4Z" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#ac-g)" fillOpacity="0.08"/>
        <path d="M6 13v8C6 21 9.5 24 14 24C18.5 24 22 21 22 21v-8" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M26 10v6" stroke="url(#ac-g)" strokeWidth="1.5" strokeLinecap="round"/>
        <defs><linearGradient id="ac-g" x1="2" y1="4" x2="26" y2="24" gradientUnits="userSpaceOnUse"><stop stopColor="#00C6FF"/><stop offset="1" stopColor="#C026B0"/></linearGradient></defs>
      </svg>
    ),
  };
  return <>{icons[type] || icons.data_architecture}</>;
}

const SERVICES = [
  { key: "data_architecture",       slug: "arquitectura-datos" },
  { key: "data_engineering",        slug: "data-engineering" },
  { key: "advanced_analytics",      slug: "analitica-avanzada" },
  { key: "artificial_intelligence", slug: "inteligencia-artificial" },
  { key: "cloud_devops",            slug: "cloud-devops" },
  { key: "academy",                 slug: "academy" },
] as const;

export function ServicesGrid() {
  const t = useTranslations("services");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 lg:py-32" style={{ background: "#0F1825" }} aria-labelledby="services-heading">
      <div className="mx-auto px-6" style={{ maxWidth: "1280px" }}>
        {/* Header */}
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
          <h2 id="services-heading" className="font-bold mb-4" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", color: "#F0F4F8" }}>
            {t("headline")}
          </h2>
          <p style={{ color: "#8090A8", maxWidth: "520px", margin: "0 auto" }}>{t("subheadline")}</p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => {
            const name = t(`items.${svc.key}.name`);
            const bullets = SERVICE_DETAILS[svc.key];
            const href = `/${locale}/servicios/${svc.slug}`;
            return (
              <motion.div
                key={svc.key}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={href}
                  className="block h-full group"
                  style={{ background: "#0A0D14", border: "1px solid #1A2840", borderRadius: "12px", padding: "28px" }}
                  aria-label={name}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 border transition-colors duration-300"
                    style={{ background: "rgba(0,198,255,0.06)", borderColor: "rgba(0,198,255,0.15)" }}
                  >
                    <ServiceIcon type={svc.key} />
                  </div>

                  {/* Name */}
                  <h3 className="font-semibold text-lg mb-4 transition-colors duration-200" style={{ color: "#F0F4F8" }}>
                    {name}
                  </h3>

                  {/* Bullet list */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm" style={{ color: "#8090A8" }}>
                        <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#00C6FF" }} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="flex items-center gap-1.5 text-sm font-medium transition-colors duration-200" style={{ color: "#4A6080" }}>
                    <span>{t("see_more")}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" style={{ color: "#00C6FF" }} />
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
