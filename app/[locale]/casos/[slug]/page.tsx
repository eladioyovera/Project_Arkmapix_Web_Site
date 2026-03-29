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
      title: "Plataforma de Datos Unificada para Retailer Multinacional",
      industry: "Retail",
      accent: "#00C6FF",
      result: "70% reducción en tiempo de procesamiento",
      challenge: "RetailCo operaba con 15 sistemas de datos aislados, un data warehouse legacy que tardaba 8 horas en actualizar reportes nocturnos y equipos de negocio que no podían acceder a datos en tiempo real. El costo de infraestructura crecía sin control y la calidad del dato era inconsistente entre áreas.",
      solution: "Diseñamos e implementamos una arquitectura Medallion sobre Azure Databricks, unificando las 15 fuentes de datos en un único Lakehouse gobernado. Implementamos pipelines ELT con Lakeflow, Unity Catalog para governance y dashboards en Power BI con actualizaciones cada 15 minutos.",
      results: [
        "70% de reducción en tiempo de procesamiento (de 8h a 2.4h)",
        "15 fuentes de datos unificadas en un único Lakehouse",
        "Datos disponibles para análisis en menos de 30 minutos",
        "35% de reducción en costos de infraestructura",
        "Adopción del 92% de la plataforma en equipos de negocio",
      ],
      tech: ["Azure Databricks", "Databricks Lakeflow", "Delta Lake", "Unity Catalog", "Power BI", "Azure Data Lake Storage"],
    },
    en: {
      title: "Unified Data Platform for Multinational Retailer",
      industry: "Retail",
      accent: "#00C6FF",
      result: "70% reduction in processing time",
      challenge: "RetailCo operated with 15 isolated data systems, a legacy data warehouse that took 8 hours to update nightly reports, and business teams unable to access real-time data. Infrastructure costs were growing out of control and data quality was inconsistent across departments.",
      solution: "We designed and implemented a Medallion architecture on Azure Databricks, unifying the 15 data sources into a single governed Lakehouse. We implemented ELT pipelines with Lakeflow, Unity Catalog for governance, and Power BI dashboards with 15-minute refresh cycles.",
      results: [
        "70% reduction in processing time (from 8h to 2.4h)",
        "15 data sources unified into a single Lakehouse",
        "Data available for analysis in under 30 minutes",
        "35% reduction in infrastructure costs",
        "92% platform adoption across business teams",
      ],
      tech: ["Azure Databricks", "Databricks Lakeflow", "Delta Lake", "Unity Catalog", "Power BI", "Azure Data Lake Storage"],
    },
  },
  "ai-supply-chain": {
    es: {
      title: "Agente IA para Optimización de Supply Chain",
      industry: "Manufactura",
      accent: "#7B2FF7",
      result: "$2M USD en ahorros anuales",
      challenge: "Una empresa manufacturera multinacional enfrentaba rupturas de stock frecuentes, pedidos de emergencia costosos y un equipo de planificación que pasaba el 70% del tiempo procesando datos manualmente en Excel. Los modelos predictivos existentes tenían un error del 35% en demanda.",
      solution: "Implementamos un agente LLM con RAG sobre el historial completo de pedidos, catálogo de proveedores y datos de demanda histórica. El agente permite consultas en lenguaje natural sobre inventario, genera recomendaciones de compra automáticas y predice rupturas con 21 días de anticipación.",
      results: [
        "$2M USD en ahorros anuales por reducción de pedidos de emergencia",
        "Reducción del 68% en rupturas de stock",
        "Precisión de predicción de demanda del 91% (desde 65%)",
        "80% menos tiempo del equipo de planificación en tareas manuales",
        "ROI del 340% en el primer año de operación",
      ],
      tech: ["Azure AI Foundry", "OpenAI Service", "Azure Databricks", "LangChain", "MLflow", "Azure Cognitive Search"],
    },
    en: {
      title: "AI Agent for Supply Chain Optimization",
      industry: "Manufacturing",
      accent: "#7B2FF7",
      result: "$2M USD in annual savings",
      challenge: "A multinational manufacturing company faced frequent stockouts, costly emergency orders, and a planning team spending 70% of their time manually processing data in Excel. Existing predictive models had a 35% error rate in demand forecasting.",
      solution: "We implemented an LLM agent with RAG over the complete order history, supplier catalog, and historical demand data. The agent allows natural language queries about inventory, generates automatic purchase recommendations, and predicts stockouts 21 days in advance.",
      results: [
        "$2M USD in annual savings from reduced emergency orders",
        "68% reduction in stockouts",
        "Demand forecast accuracy of 91% (up from 65%)",
        "80% less time for the planning team on manual tasks",
        "340% ROI in the first year of operation",
      ],
      tech: ["Azure AI Foundry", "OpenAI Service", "Azure Databricks", "LangChain", "MLflow", "Azure Cognitive Search"],
    },
  },
  "data-mesh-finanzas": {
    es: {
      title: "Data Mesh para Empresa de Servicios Financieros",
      industry: "Finanzas",
      accent: "#0072FF",
      result: "3x más velocidad en reportes regulatorios",
      challenge: "Un grupo financiero con 8 líneas de negocio independientes tenía datos completamente silados, sin gobierno centralizado y con pipelines duplicados en cada área. Los reportes regulatorios tardaban 5 días en generarse y la reconciliación entre áreas era un proceso manual de varios días.",
      solution: "Implementamos una arquitectura Data Mesh con dominios de datos independientes para cada línea de negocio, Unity Catalog como plano de control centralizado y un contrato de datos estandarizado entre dominios. Los reportes regulatorios se automatizaron completamente con Databricks Workflows.",
      results: [
        "3x más velocidad en reportes regulatorios (de 5 días a 40 horas)",
        "8 dominios de datos independientes con gobierno centralizado",
        "100% de automatización en reportes de cumplimiento",
        "60% reducción en pipelines duplicados entre áreas",
        "Tiempo de onboarding de nuevas fuentes reducido de 3 semanas a 4 días",
      ],
      tech: ["Azure Databricks", "Unity Catalog", "Delta Lake", "Databricks Workflows", "Azure DevOps", "Microsoft Fabric"],
    },
    en: {
      title: "Data Mesh for Financial Services Company",
      industry: "Finance",
      accent: "#0072FF",
      result: "3x faster regulatory reports",
      challenge: "A financial group with 8 independent business lines had completely siloed data, no centralized governance, and duplicate pipelines in each department. Regulatory reports took 5 days to generate and reconciliation between departments was a multi-day manual process.",
      solution: "We implemented a Data Mesh architecture with independent data domains for each business line, Unity Catalog as the centralized control plane, and standardized data contracts between domains. Regulatory reports were fully automated with Databricks Workflows.",
      results: [
        "3x faster regulatory reports (from 5 days to 40 hours)",
        "8 independent data domains with centralized governance",
        "100% automation of compliance reports",
        "60% reduction in duplicate pipelines across departments",
        "New source onboarding time reduced from 3 weeks to 4 days",
      ],
      tech: ["Azure Databricks", "Unity Catalog", "Delta Lake", "Databricks Workflows", "Azure DevOps", "Microsoft Fabric"],
    },
  },
  "analytics-salud": {
    es: {
      title: "Centro de Analítica para Sector Salud",
      industry: "Salud",
      accent: "#00FFD1",
      result: "98% disponibilidad de datos críticos",
      challenge: "Una red de clínicas y hospitales no tenía visibilidad en tiempo real de sus operaciones clínicas. Los médicos tardaban horas en acceder a historiales de pacientes y los directivos tomaban decisiones con datos de la semana anterior. La disponibilidad de datos críticos era del 72%.",
      solution: "Construimos una plataforma de analítica clínica en tiempo real usando Microsoft Fabric y Power BI Embedded. Integramos 12 sistemas hospitalarios (HIS, EHR, PACS), implementamos alertas automáticas para indicadores críticos y dashboards ejecutivos actualizados cada 5 minutos.",
      results: [
        "98% de disponibilidad de datos críticos (desde 72%)",
        "12 sistemas hospitalarios integrados en una plataforma unificada",
        "Datos clínicos disponibles en menos de 5 minutos",
        "45% reducción en tiempo de consulta de historiales de pacientes",
        "Alertas automáticas que detectaron 3 incidentes críticos en el primer mes",
      ],
      tech: ["Microsoft Fabric", "Power BI Embedded", "Azure Data Factory", "Azure Event Hubs", "Azure SQL", "Power BI"],
    },
    en: {
      title: "Analytics Center for Healthcare Sector",
      industry: "Healthcare",
      accent: "#00FFD1",
      result: "98% critical data availability",
      challenge: "A network of clinics and hospitals had no real-time visibility into clinical operations. Doctors took hours to access patient records and executives made decisions with week-old data. Critical data availability was 72%.",
      solution: "We built a real-time clinical analytics platform using Microsoft Fabric and Power BI Embedded. We integrated 12 hospital systems (HIS, EHR, PACS), implemented automatic alerts for critical indicators, and executive dashboards updated every 5 minutes.",
      results: [
        "98% critical data availability (up from 72%)",
        "12 hospital systems integrated into a unified platform",
        "Clinical data available in under 5 minutes",
        "45% reduction in patient record query time",
        "Automatic alerts that detected 3 critical incidents in the first month",
      ],
      tech: ["Microsoft Fabric", "Power BI Embedded", "Azure Data Factory", "Azure Event Hubs", "Azure SQL", "Power BI"],
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
