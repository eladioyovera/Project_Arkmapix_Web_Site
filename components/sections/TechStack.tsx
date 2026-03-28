"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  DatabricksIcon,
  MicrosoftFabricIcon,
  AzureIcon,
  UnityCatalogIcon,
  PowerBIIcon,
  AzureDevOpsIcon,
  SparkIcon,
  PythonIcon,
  DbtIcon,
  DeltaLakeIcon,
  AzureAIIcon,
  OpenAIIcon,
  LangChainIcon,
  MLflowIcon,
} from "@/components/icons/TechIcons";

const TECHS = [
  { name: "Azure Databricks", icon: DatabricksIcon },
  { name: "Microsoft Fabric", icon: MicrosoftFabricIcon },
  { name: "Azure Data Factory", icon: AzureIcon },
  { name: "Unity Catalog", icon: UnityCatalogIcon },
  { name: "Power BI", icon: PowerBIIcon },
  { name: "Azure DevOps", icon: AzureDevOpsIcon },
  { name: "Apache Spark", icon: SparkIcon },
  { name: "Python", icon: PythonIcon },
  { name: "dbt", icon: DbtIcon },
  { name: "Delta Lake", icon: DeltaLakeIcon },
  { name: "Azure AI Foundry", icon: AzureAIIcon },
  { name: "OpenAI", icon: OpenAIIcon },
  { name: "LangChain", icon: LangChainIcon },
  { name: "MLflow", icon: MLflowIcon },
] as const;

export function TechStack() {
  const t = useTranslations("tech");
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-primary)" }}
      aria-labelledby="tech-heading"
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
            id="tech-heading"
            className="text-text-primary mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto text-base">
            {t("subheadline")}
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
          {TECHS.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.04, duration: 0.4, ease: "easeOut" }}
              >
                <div className="flex flex-col items-center gap-2 p-4 bg-bg-card border border-bg-border rounded-card hover:border-cyan-DEFAULT/30 hover:bg-bg-card/80 transition-all duration-300 group glow-hover cursor-default">
                  <Icon size={32} className="transition-transform group-hover:scale-110 duration-300" />
                  <span className="text-text-muted text-xs text-center leading-tight group-hover:text-text-secondary transition-colors font-medium">
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
