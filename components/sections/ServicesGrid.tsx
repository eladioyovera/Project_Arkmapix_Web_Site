"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, SquareCode } from "lucide-react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { AiIcon, BusinessIcon, CloudIcon, DataIcon, SoftwareIcon } from "../icons/ServicesIcons";
import { AcademyIcon } from "../icons/TechIcons";

// Service bullets (what they include, not a paragraph description)
const SERVICE_DETAILS: Record<string, string[]> = {
    software_engineering: [
        "Arquitecturas empresariales",
        "Desarrollo de aplicaciones a gran escala",
        "Diseño y gestión de APIs"
    ],

    ai_ml: [
        "Modelos predictivos y machine learning",
        "Procesamiento de lenguaje natural (NLP)",
        "MLOps y despliegue de modelos en producción"
    ],

    data_analytics: [
        "Dashboards ejecutivos en Power BI",
        "Modelado de datos y métricas corporativas",
        "Analítica avanzada y reporting empresarial"
    ],

    business_transformation: [
        "Estrategia de transformación digital",
        "Optimización y automatización de procesos",
        "Integración de plataformas empresariales"
    ],

    cloud_devops: [
        "CI/CD pipelines empresariales",
        "Infrastructure as Code (Terraform, Bicep)",
        "Monitoreo, observabilidad y gestión cloud"
    ],

    academy: [
        "Programas de formación corporativa",
        "Upskilling y reskilling tecnológico",
        "Entrenamiento práctico basado en casos reales"
    ],
};

// Inline SVG service icons
function ServiceIcon({ type }: { type: string }) {
    const icons: Record<string, React.ReactNode> = {
        software_engineering: (
            <SoftwareIcon />
        ),
        ai_ml: (
            <AiIcon/>
        ),
        data_analytics: (
            <DataIcon/>
        ),
        business_transformation: (
            <BusinessIcon/>
        ),
        cloud_devops: (
            <CloudIcon/>
        ),
        academy: (
            <AcademyIcon/>
        ),
    };
    return <>{icons[type] || icons.software_engineering}</>;
}

const SERVICES = [
    { key: "software_engineering", slug: "software-engineering" },
    { key: "ai_ml", slug: "ai-ml" },
    { key: "data_analytics", slug: "data-analytics" },
    { key: "business_transformation", slug: "business-transformation" },
    { key: "cloud_devops", slug: "cloud-devops" },
    { key: "academy", slug: "academy" },
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
