import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";

// Bilingual service content keyed by [slug]
const SERVICE_CONTENT: Record<string, Record<"es" | "en", {
  name: string;
  tagline: string;
  description: string;
  capabilities: string[];
  benefits: { title: string; body: string }[];
  tech: string[];
}>> = {
  "software-engineering": {
    es: {
      name: "Ingeniería de Software",
      tagline: "La plataforma sobre la que construyes el futuro de tu empresa.",
      description: "Diseñamos plataformas de datos modernas, escalables y gobernadas que permiten a tu organización explotar el valor de sus datos. Desde Data Lakes hasta arquitecturas Medallion y Data Mesh, construimos la fundación correcta para cada caso de negocio.",
      capabilities: ["Medallion Architecture (Bronze/Silver/Gold)", "Data Mesh & Lakehouse Design", "Azure Databricks + Microsoft Fabric", "Unity Catalog & Data Governance", "Evaluación y migración de data warehouses legacy", "Diseño de modelos dimensionales y semánticos"],
      benefits: [
        { title: "Escalabilidad garantizada", body: "Arquitecturas diseñadas para crecer con tu negocio, desde millones hasta billones de registros." },
        { title: "Governance desde el día uno", body: "Unity Catalog y políticas de acceso configuradas desde el inicio, no como afterthought." },
        { title: "Reducción de costos", body: "Optimización de compute y storage que reduce el costo total de operación hasta un 40%." },
        { title: "Time-to-insight acelerado", body: "Datos disponibles para análisis en minutos, no días. Pipeline que funciona cuando lo necesitas." },
      ],
      tech: ["Azure Databricks", "Microsoft Fabric", "Delta Lake", "Apache Spark", "Unity Catalog", "Azure Data Lake Storage"],
    },
    en: {
      name: "Software Engineering",
      tagline: "The platform on which you build the future of your company.",
      description: "We design modern, scalable, and governed data platforms that enable your organization to unlock the value of its data. From Data Lakes to Medallion and Data Mesh architectures, we build the right foundation for every business case.",
      capabilities: ["Medallion Architecture (Bronze/Silver/Gold)", "Data Mesh & Lakehouse Design", "Azure Databricks + Microsoft Fabric", "Unity Catalog & Data Governance", "Legacy data warehouse evaluation and migration", "Dimensional and semantic model design"],
      benefits: [
        { title: "Guaranteed scalability", body: "Architectures designed to grow with your business, from millions to billions of records." },
        { title: "Governance from day one", body: "Unity Catalog and access policies configured from the start, not as an afterthought." },
        { title: "Cost reduction", body: "Compute and storage optimization that reduces total cost of ownership by up to 40%." },
        { title: "Accelerated time-to-insight", body: "Data available for analysis in minutes, not days. Pipelines that work when you need them." },
      ],
      tech: ["Azure Databricks", "Microsoft Fabric", "Delta Lake", "Apache Spark", "Unity Catalog", "Azure Data Lake Storage"],
    },
  },
  "ai-ml": {
    es: {
          name: "AI & ML",
      tagline: "Datos listos, confiables y en tiempo real cuando los necesitas.",
      description: "Construimos los pipelines y procesos que mueven, transforman y entregan datos de alta calidad a través de toda tu organización. Trabajamos con las herramientas más modernas del ecosistema Azure y Databricks para garantizar confiabilidad, trazabilidad y eficiencia.",
      capabilities: ["Pipelines ETL/ELT con Databricks Lakeflow", "Azure Data Factory & Integration Runtimes", "Databricks Asset Bundles (DAB)", "Ingesta en tiempo real con Event Hubs y Kafka", "Orquestación con Databricks Workflows", "Data Quality & Testing con Great Expectations"],
      benefits: [
        { title: "Datos siempre disponibles", body: "Pipelines monitoreados y auto-recuperables que garantizan la disponibilidad de tus datos críticos." },
        { title: "Trazabilidad total", body: "Linaje de datos completo con Delta Lake y Unity Catalog. Siempre sabes de dónde vienen tus datos." },
        { title: "CI/CD para datos", body: "Despliegues automatizados con testing de calidad integrado. Cambios sin riesgo al pipeline productivo." },
        { title: "Ingesta multi-fuente", body: "Conectamos con cualquier fuente: APIs, bases de datos, archivos, streams en tiempo real y SaaS." },
      ],
      tech: ["Databricks Lakeflow", "Azure Data Factory", "Databricks Asset Bundles", "Apache Kafka", "Delta Live Tables", "Azure Event Hubs"],
    },
    en: {
        name: "AI & ML",
      tagline: "Ready, reliable, and real-time data when you need it.",
      description: "We build the pipelines and processes that move, transform, and deliver high-quality data throughout your organization. We work with the most modern tools in the Azure and Databricks ecosystem to guarantee reliability, traceability, and efficiency.",
      capabilities: ["ETL/ELT Pipelines with Databricks Lakeflow", "Azure Data Factory & Integration Runtimes", "Databricks Asset Bundles (DAB)", "Real-time ingestion with Event Hubs and Kafka", "Orchestration with Databricks Workflows", "Data Quality & Testing with Great Expectations"],
      benefits: [
        { title: "Always-available data", body: "Monitored, self-healing pipelines that guarantee the availability of your critical data." },
        { title: "Full traceability", body: "Complete data lineage with Delta Lake and Unity Catalog. Always know where your data comes from." },
        { title: "CI/CD for data", body: "Automated deployments with integrated quality testing. Risk-free changes to production pipelines." },
        { title: "Multi-source ingestion", body: "We connect to any source: APIs, databases, files, real-time streams, and SaaS applications." },
      ],
      tech: ["Databricks Lakeflow", "Azure Data Factory", "Databricks Asset Bundles", "Apache Kafka", "Delta Live Tables", "Azure Event Hubs"],
    },
  },
  "data-analytics": {
    es: {
          name: "Data & Analítica",
      tagline: "Decisiones más inteligentes, basadas en datos, tomadas más rápido.",
      description: "Transformamos datos en insights accionables mediante dashboards ejecutivos, modelos estadísticos y plataformas de BI que toda tu organización puede usar. Desde reportes operacionales hasta analítica predictiva, cubrimos todo el espectro analítico.",
      capabilities: ["Dashboards ejecutivos en Power BI", "Semantic models con Analysis Services", "Unity Catalog & data governance", "Reportes self-service para usuarios de negocio", "Analítica predictiva y estadística", "Real-time analytics con Microsoft Fabric"],
      benefits: [
        { title: "Decisiones en tiempo real", body: "Dashboards actualizados automáticamente que muestran el estado actual de tu negocio en cualquier momento." },
        { title: "Adopción organizacional", body: "Diseñamos experiencias analíticas intuitivas que los usuarios de negocio realmente usan y adoptan." },
        { title: "Una sola fuente de verdad", body: "Semantic models centralizados que garantizan que toda la organización trabaja con los mismos números." },
        { title: "Gobierno del dato", body: "Políticas de acceso, lineaje y calidad del dato documentadas y auditables en Unity Catalog." },
      ],
      tech: ["Power BI", "Microsoft Fabric", "Azure Analysis Services", "Unity Catalog", "DAX", "Power Query"],
    },
    en: {
        name: "Data & Analytics",
      tagline: "Smarter, data-driven decisions made faster.",
      description: "We transform data into actionable insights through executive dashboards, statistical models, and BI platforms that your entire organization can use. From operational reports to predictive analytics, we cover the full analytical spectrum.",
      capabilities: ["Executive dashboards in Power BI", "Semantic models with Analysis Services", "Unity Catalog & data governance", "Self-service analytics for business users", "Predictive and statistical analytics", "Real-time analytics with Microsoft Fabric"],
      benefits: [
        { title: "Real-time decisions", body: "Automatically updated dashboards showing the current state of your business at any time." },
        { title: "Organizational adoption", body: "We design intuitive analytical experiences that business users actually use and adopt." },
        { title: "Single source of truth", body: "Centralized semantic models that ensure the entire organization works with the same numbers." },
        { title: "Data governance", body: "Access policies, lineage, and data quality documented and auditable in Unity Catalog." },
      ],
      tech: ["Power BI", "Microsoft Fabric", "Azure Analysis Services", "Unity Catalog", "DAX", "Power Query"],
    },
  },
  "business-transformation": {
    es: {
          name: "Transformación Empresarial",
      tagline: "La IA más avanzada, integrada directamente en tus procesos de negocio.",
      description: "Diseñamos e implementamos soluciones de inteligencia artificial que generan valor real: desde agentes conversacionales hasta sistemas de recomendación y automatización de procesos. Usamos Azure AI Foundry, OpenAI y frameworks open-source para construir la solución correcta para cada caso.",
      capabilities: ["AI Agents y asistentes conversacionales", "RAG Pipelines sobre datos empresariales", "Azure AI Foundry & OpenAI Service", "MLOps y despliegue en producción", "Computer Vision e NLP aplicado", "Fine-tuning de modelos para dominios específicos"],
      benefits: [
        { title: "IA sobre tus propios datos", body: "RAG pipelines que permiten a los LLMs responder con información de tu empresa, no datos genéricos." },
        { title: "Despliegue en producción", body: "No solo prototipos. Implementamos con MLOps, monitoreo y pipelines de reentrenamiento automatizados." },
        { title: "Explicabilidad", body: "Modelos con capacidades de explicación que permiten auditar decisiones y cumplir requisitos regulatorios." },
        { title: "Integración nativa Azure", body: "Soluciones integradas con tu ecosistema Azure existente: Databricks, Fabric, DevOps y más." },
      ],
      tech: ["Azure AI Foundry", "OpenAI Service", "Azure Databricks", "MLflow", "LangChain", "Azure Machine Learning"],
    },
    en: {
        name: "Business Transformation",
      tagline: "The most advanced AI, integrated directly into your business processes.",
      description: "We design and implement AI solutions that generate real value: from conversational agents to recommendation systems and process automation. We use Azure AI Foundry, OpenAI, and open-source frameworks to build the right solution for each use case.",
      capabilities: ["AI Agents and conversational assistants", "RAG Pipelines on enterprise data", "Azure AI Foundry & OpenAI Service", "MLOps and production deployment", "Applied Computer Vision and NLP", "Model fine-tuning for specific domains"],
      benefits: [
        { title: "AI on your own data", body: "RAG pipelines that let LLMs answer with your company's information, not generic data." },
        { title: "Production deployment", body: "Not just prototypes. We implement with MLOps, monitoring, and automated retraining pipelines." },
        { title: "Explainability", body: "Models with explanation capabilities that allow decision auditing and meet regulatory requirements." },
        { title: "Native Azure integration", body: "Solutions integrated with your existing Azure ecosystem: Databricks, Fabric, DevOps, and more." },
      ],
      tech: ["Azure AI Foundry", "OpenAI Service", "Azure Databricks", "MLflow", "LangChain", "Azure Machine Learning"],
    },
  },
  "cloud-devops": {
    es: {
      name: "Cloud & DevOps de Datos",
      tagline: "Infraestructura de datos que no te frena. CI/CD para cada pipeline.",
      description: "Diseñamos la infraestructura, los procesos y las herramientas que permiten a los equipos de datos desplegar con confianza y velocidad. Desde terraform hasta Azure DevOps, construimos el andamiaje operacional que convierte los datos en un activo empresarial confiable.",
      capabilities: ["CI/CD pipelines para datos con Azure DevOps", "Databricks Asset Bundles (DAB)", "Microsoft Fabric Mirroring & deployment", "Infrastructure as Code con Terraform & Bicep", "Monitoreo y alertas con Azure Monitor", "Cost optimization y FinOps para datos"],
      benefits: [
        { title: "Despliegues sin miedo", body: "CI/CD con testing automatizado y rollback que permite desplegar cambios a producción con total confianza." },
        { title: "Infraestructura reproducible", body: "Todo el entorno definido como código: reproducible, versionado y auditable." },
        { title: "Visibilidad operacional", body: "Dashboards de monitoreo que muestran la salud, el costo y la performance de cada pipeline en tiempo real." },
        { title: "Optimización de costos", body: "Análisis FinOps y políticas de auto-scaling que reducen el gasto cloud sin afectar performance." },
      ],
      tech: ["Azure DevOps", "Terraform", "Databricks Asset Bundles", "Azure Monitor", "Microsoft Fabric", "Azure Bicep"],
    },
    en: {
      name: "Cloud & Data DevOps",
      tagline: "Data infrastructure that doesn't slow you down. CI/CD for every pipeline.",
      description: "We design the infrastructure, processes, and tools that enable data teams to deploy with confidence and speed. From Terraform to Azure DevOps, we build the operational scaffolding that turns data into a reliable business asset.",
      capabilities: ["CI/CD pipelines for data with Azure DevOps", "Databricks Asset Bundles (DAB)", "Microsoft Fabric Mirroring & deployment", "Infrastructure as Code with Terraform & Bicep", "Monitoring and alerts with Azure Monitor", "Cost optimization and FinOps for data"],
      benefits: [
        { title: "Deploy without fear", body: "CI/CD with automated testing and rollback that allows deploying production changes with full confidence." },
        { title: "Reproducible infrastructure", body: "The entire environment defined as code: reproducible, versioned, and auditable." },
        { title: "Operational visibility", body: "Monitoring dashboards showing the health, cost, and performance of every pipeline in real time." },
        { title: "Cost optimization", body: "FinOps analysis and auto-scaling policies that reduce cloud spend without affecting performance." },
      ],
      tech: ["Azure DevOps", "Terraform", "Databricks Asset Bundles", "Azure Monitor", "Microsoft Fabric", "Azure Bicep"],
    },
  },
  "academy": {
    es: {
      name: "ARKMAPIX Academy",
      tagline: "Forma el equipo de datos que tu empresa necesita para competir.",
      description: "Programas de formación técnica certificada diseñados para equipos de datos empresariales. Nuestros instructores son profesionales activos con experiencia en proyectos reales, lo que garantiza un aprendizaje práctico y directamente aplicable.",
      capabilities: ["Certificación Databricks Data Engineer Associate", "Microsoft Fabric Analytics Engineer", "Azure AI Engineer", "Talleres de Apache Spark avanzado", "Data governance con Unity Catalog", "Programas corporativos a medida"],
      benefits: [
        { title: "Instructores practitioners", body: "Todos nuestros instructores trabajan activamente en proyectos de datos y traen experiencia real al aula." },
        { title: "Enfoque hands-on", body: "Más del 60% del tiempo en laboratorios prácticos con datos reales y casos empresariales." },
        { title: "Preparación para certificación", body: "Programas diseñados específicamente para preparar y aprobar las certificaciones oficiales de Databricks y Microsoft." },
        { title: "Seguimiento post-formación", body: "Acceso a materiales actualizados y soporte de la comunidad ARKMAPIX por 6 meses después del curso." },
      ],
      tech: ["Azure Databricks", "Microsoft Fabric", "Apache Spark", "Delta Lake", "Power BI", "Azure AI Foundry"],
    },
    en: {
      name: "ARKMAPIX Academy",
      tagline: "Build the data team your company needs to compete.",
      description: "Certified technical training programs designed for enterprise data teams. Our instructors are active professionals with real-world project experience, ensuring practical, directly applicable learning.",
      capabilities: ["Databricks Data Engineer Associate Certification", "Microsoft Fabric Analytics Engineer", "Azure AI Engineer", "Advanced Apache Spark Workshops", "Data governance with Unity Catalog", "Custom corporate programs"],
      benefits: [
        { title: "Practitioner instructors", body: "All our instructors actively work on data projects and bring real-world experience to the classroom." },
        { title: "Hands-on focus", body: "More than 60% of time in practical labs with real data and business cases." },
        { title: "Certification preparation", body: "Programs specifically designed to prepare for and pass official Databricks and Microsoft certifications." },
        { title: "Post-training follow-up", body: "Access to updated materials and ARKMAPIX community support for 6 months after the course." },
      ],
      tech: ["Azure Databricks", "Microsoft Fabric", "Apache Spark", "Delta Lake", "Power BI", "Azure AI Foundry"],
    },
  },
};

export default async function ServiceSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "service_detail" });

  const lang = (locale === "en" ? "en" : "es") as "es" | "en";
    const svc = SERVICE_CONTENT[slug]?.[lang] //?? SERVICE_CONTENT["software-engineering"][lang];

  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }}>
      {/* Back link */}
      <div className="pt-28 pb-0 px-6" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <Link
          href={`/${locale}/servicios`}
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: "#4A6080" }}
        >
          <ArrowLeft size={15} />
          {t("back")}
        </Link>
      </div>

      {/* Hero */}
      <div className="px-6 pt-10 pb-20" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h1
              className="font-bold mb-4 leading-tight"
              style={{
                fontSize: "clamp(32px, 4.5vw, 56px)",
                background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #7B2FF7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {svc?.name}
            </h1>
            <p className="text-xl font-medium mb-6" style={{ color: "#F0F4F8" }}>{svc?.tagline}</p>
            <p className="leading-relaxed mb-8" style={{ color: "#8090A8", fontSize: "17px" }}>{svc?.description}</p>
            <Link
              href={`/${locale}/contacto`}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold"
            >
              {t("cta_btn")} <ArrowRight size={16} />
            </Link>
          </div>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#0F1825", border: "1px solid #1A2840" }}
          >
            <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#00C6FF" }}>
              {t("capabilities_label")}
            </div>
            <ul className="space-y-3">
              {svc?.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3">
                  <CheckCircle size={16} style={{ color: "#00C6FF", flexShrink: 0, marginTop: "2px" }} />
                  <span className="text-sm" style={{ color: "#F0F4F8" }}>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="px-6 pb-24" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {svc?.benefits.map((b, i) => (
            <div
              key={b.title}
              className="rounded-xl p-6"
              style={{ background: "#0F1825", border: "1px solid #1A2840" }}
            >
              <div
                className="font-black text-2xl mb-3"
                style={{
                  background: "linear-gradient(135deg, #00C6FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#F0F4F8" }}>{b.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{b.body}</p>
            </div>
          ))}
        </div>

        {/* Tech stack */}
        <div
          className="rounded-2xl p-8 mb-20"
          style={{ background: "#0F1825", border: "1px solid #1A2840" }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#00C6FF" }}>
            {t("tech_label")}
          </div>
          <div className="flex flex-wrap gap-3">
            {svc?.tech.map((tech) => (
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
