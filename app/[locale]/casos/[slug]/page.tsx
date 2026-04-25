import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const CASE_CONTENT: Record<string, Record<"es" | "en", {
    title: string;
    industry: string;
    accent: string;
    result: string;
    challenge: string;
    solution: string;
    results: string[];
    tech: string[];
}>> = {
    "retailco-data-platform": {
        es: {
            title: "Plataforma de Datos Unificada para Constructora",
            industry: "Real estate",
            accent: "#00C6FF",
            result: "70% reducción en tiempo de procesamiento",
            challenge:
                "La empresa operaba con múltiples sistemas de datos desconectados, procesos manuales y un data warehouse legacy que generaba reportes con alta latencia. Esto impedía tomar decisiones con periodicidad diaria, como consecuencia elevaba los costos operativos.",
            solution:
                "Se migró a una arquitectura Medallion en Azure Databricks, consolidando 15 fuentes de datos en un Lakehouse centralizado. Se implementaron pipelines ELT automatizados y dashboards con periodicidad diaria para todas las áreas de negocio.",
            results: [
                "70% de reducción en tiempos de procesamiento",
                "15 fuentes de datos unificadas",
                "Disponibilidad de datos en menos de 30 minutos",
                "Mejora significativa en toma de decisiones",
                "Reducción de costos operativos",
            ],
            tech: ["Azure Databricks", "Delta Lake", "Medallion Architecture", "Power BI", "Azure Data Lake"],
        },
        en: {
            title: "Unified Data Platform for Construction Companies",
            industry: "Real estate",
            accent: "#00C6FF",
            result: "70% reduction in processing time",
            challenge:
                "The company was operating with multiple disconnected data systems, manual processes, and a legacy data warehouse that generated reports with high latency. This prevented the company from making decisions on a daily basis, which in turn drove up operating costs.",
            solution:
                "The system was migrated to a Medallion architecture on Azure Databricks, consolidating 15 data sources into a centralized Lakehouse. Automated ELT pipelines and dashboards were implemented on a daily basis for all business units.",
            results: [
                "70% reduction in processing time",
                "15 data sources unified",
                "Data availability in under 30 minutes",
                "Improved decision-making",
                "Reduced operational costs",
            ],
            tech: ["Azure Databricks", "Delta Lake", "Medallion Architecture", "Power BI", "Azure Data Lake"],
        },
    },

    "ai-supply-chain": {
        es: {
            title: "Agente IA para Procesos de Despliegue CI/CD",
            industry: "Real estate",
            accent: "#7B2FF7",
            result: "Reducción del 80% en tiempo de despliegue",
            challenge:
                "Los equipos de desarrollo enfrentaban procesos manuales y lentos en revisiones de código, generando cuellos de botella en los despliegues y errores frecuentes en producción.",
            solution:
                "Se implementó un agente basado en LLM que analiza código estático, automatiza revisiones y entrega resultados rápidos de aprobación o rechazo, integrándose en pipelines CI/CD.",
            results: [
                "80% de reducción en tiempo de despliegue",
                "Automatización de revisiones de código",
                "Menor tasa de errores en producción",
                "Mayor velocidad en entregas",
                "Mejora en productividad del equipo",
            ],
            tech: ["Azure AI", "OpenAI", "LLM", "CI/CD Pipelines", "RAG"],
        },
        en: {
            title: "AI Agent for CI/CD Deployment Processes",
            industry: "Real estate",
            accent: "#7B2FF7",
            result: "80% reduction in deployment time",
            challenge:
                "Development teams faced slow and manual code review processes, creating bottlenecks in deployments and increasing production errors.",
            solution:
                "An LLM-based agent was implemented to analyze static code, automate reviews, and deliver fast pass/fail results integrated into CI/CD pipelines.",
            results: [
                "80% reduction in deployment time",
                "Automated code reviews",
                "Lower production error rate",
                "Faster delivery cycles",
                "Improved team productivity",
            ],
            tech: ["Azure AI", "OpenAI", "LLM", "CI/CD Pipelines", "RAG"],
        },
    },
};

export default async function CaseSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "case_detail" });

  const lang = (locale === "en" ? "en" : "es") as "es" | "en";
  const cs = CASE_CONTENT[slug]?.[lang] ?? CASE_CONTENT["retailco-data-platform"][lang];

  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }}>
      <div className="pt-28 pb-0 px-6" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Link
          href={`/${locale}/casos`}
          className="inline-flex items-center gap-2 text-sm"
          style={{ color: "#4A6080" }}
        >
          <ArrowLeft size={15} />
          {t("back")}
        </Link>
      </div>

      {/* Hero */}
      <div className="px-6 pt-8 pb-16" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ background: `${cs.accent}20`, color: cs.accent, border: `1px solid ${cs.accent}40` }}
        >
          {cs.industry}
        </span>
        <h1
          className="font-bold mb-4 leading-tight"
          style={{
            fontSize: "clamp(28px, 4vw, 52px)",
            background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #7B2FF7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            maxWidth: "800px",
          }}
        >
          {cs.title}
        </h1>
        <div
          className="inline-block text-lg font-bold mb-8"
          style={{
            background: "linear-gradient(135deg, #00C6FF, #0072FF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {cs.result}
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="rounded-2xl p-8" style={{ background: "#0F1825", border: "1px solid #1A2840" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#00C6FF" }}>
              {t("challenge")}
            </div>
            <p className="leading-relaxed" style={{ color: "#8090A8" }}>{cs.challenge}</p>
          </div>
          <div className="rounded-2xl p-8" style={{ background: "#0F1825", border: "1px solid #1A2840" }}>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#7B2FF7" }}>
              {t("solution")}
            </div>
            <p className="leading-relaxed" style={{ color: "#8090A8" }}>{cs.solution}</p>
          </div>
        </div>

        {/* Results */}
        <div className="rounded-2xl p-8 mb-12" style={{ background: "#0F1825", border: "1px solid #1A2840" }}>
          <div className="text-xs font-semibold uppercase tracking-widest mb-6" style={{ color: "#00FFD1" }}>
            {t("results")}
          </div>
          <ul className="space-y-3">
            {cs.results.map((r) => (
              <li key={r} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: "#00C6FF" }} />
                <span style={{ color: "#F0F4F8" }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech */}
        <div className="rounded-2xl p-8 mb-16" style={{ background: "#0F1825", border: "1px solid #1A2840" }}>
          <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#00C6FF" }}>
            {t("technologies")}
          </div>
          <div className="flex flex-wrap gap-3">
            {cs.tech.map((tech) => (
              <span
                key={tech}
                className="text-sm font-mono px-4 py-2 rounded-lg"
                style={{ background: "rgba(0,198,255,0.08)", color: "#F0F4F8", border: "1px solid rgba(0,198,255,0.2)" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, #0072FF 0%, #7B2FF7 55%, #C026B0 100%)" }}
        >
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(22px, 3vw, 32px)", color: "#fff" }}>
            {t("cta_headline")}
          </h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>{t("cta_body")}</p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold"
            style={{ background: "#fff", color: "#0A0D14" }}
          >
            {t("cta_btn")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
