"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  DataArchitectureIcon,
  DataEngineeringIcon,
  AnalyticsIcon,
  AIIcon,
  CloudDevOpsIcon,
  AcademyIcon,
} from "@/components/icons/TechIcons";

const SERVICE_ITEMS = [
  {
    key: "data_architecture",
    slug: "arquitectura-datos",
    icon: DataArchitectureIcon,
    gradient: "from-cyan-DEFAULT to-blue-brand",
  },
  {
    key: "data_engineering",
    slug: "data-engineering",
    icon: DataEngineeringIcon,
    gradient: "from-blue-brand to-violet-brand",
  },
  {
    key: "advanced_analytics",
    slug: "analitica-avanzada",
    icon: AnalyticsIcon,
    gradient: "from-cyan-DEFAULT to-violet-brand",
  },
  {
    key: "artificial_intelligence",
    slug: "inteligencia-artificial",
    icon: AIIcon,
    gradient: "from-aurora to-cyan-DEFAULT",
  },
  {
    key: "cloud_devops",
    slug: "cloud-devops",
    icon: CloudDevOpsIcon,
    gradient: "from-blue-brand to-magenta-brand",
  },
  {
    key: "academy",
    slug: "academy",
    icon: AcademyIcon,
    gradient: "from-violet-brand to-magenta-brand",
  },
] as const;

export function ServicesGrid() {
  const t = useTranslations("services");
  const locale = useLocale();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-32"
      style={{ background: "var(--bg-card)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <SectionLabel className="justify-center">{t("label")}</SectionLabel>
          <h2
            id="services-heading"
            className="text-text-primary mb-4"
            style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 700 }}
          >
            {t("headline")}
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-base leading-relaxed">
            {t("subheadline")}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_ITEMS.map((service, i) => {
            const Icon = service.icon;
            const name = t(`items.${service.key}.name`);
            const description = t(`items.${service.key}.description`);
            const href = `/${locale}/servicios/${service.slug}`;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              >
                <Link
                  href={href}
                  className="block h-full gradient-border glow-hover group transition-all duration-300 hover:-translate-y-1 rounded-card focus-visible:ring-2 focus-visible:ring-cyan-DEFAULT focus-visible:outline-none"
                  aria-label={`Servicio: ${name}`}
                >
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-5 w-12 h-12 rounded-btn flex items-center justify-center bg-bg-primary/50 border border-bg-border group-hover:border-cyan-DEFAULT/30 transition-colors">
                      <Icon size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-text-primary font-semibold text-lg mb-3 group-hover:gradient-text transition-all duration-300">
                      {name}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed flex-1">
                      {description}
                    </p>

                    {/* Link */}
                    <div className="mt-6 flex items-center gap-2 text-text-muted text-sm font-medium group-hover:text-cyan-DEFAULT transition-colors">
                      {t("see_more")}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
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
