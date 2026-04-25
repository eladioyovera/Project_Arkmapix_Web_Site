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
            tagline: "Plataformas digitales empresariales diseñadas para escalar y evolucionar.",
            description: "Diseñamos y desarrollamos soluciones de software empresariales alineadas con los objetivos estratégicos del negocio. Desde arquitecturas modernas hasta ecosistemas digitales completos, habilitamos capacidades tecnológicas que impulsan eficiencia operativa, innovación y crecimiento sostenible.",
            capabilities: [
                "Diseño de arquitecturas empresariales",
                "Desarrollo de plataformas web y móviles a escala",
                "Diseño y gestión de APIs (REST, GraphQL)",
                "Modernización de aplicaciones legacy",
                "Integración de sistemas empresariales",
                "Gobernanza de código, testing automatizado y calidad"
            ],
            benefits: [
                { title: "Escalabilidad organizacional", body: "Arquitecturas preparadas para soportar crecimiento empresarial y alta demanda." },
                { title: "Estandarización tecnológica", body: "Implementación de buenas prácticas que garantizan consistencia y mantenibilidad." },
                { title: "Aceleración del time-to-market", body: "Frameworks y metodologías que reducen los ciclos de desarrollo." },
                { title: "Gestión de riesgos", body: "Seguridad, resiliencia y cumplimiento integrados desde el diseño." },
            ],
            tech: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "Kubernetes"],
        },
        en: {
            name: "Software Engineering",
            tagline: "Enterprise digital platforms designed to scale and evolve.",
            description: "We design and build enterprise-grade software solutions aligned with business strategy. From modern architectures to full digital ecosystems, we enable capabilities that drive operational efficiency, innovation, and sustainable growth.",
            capabilities: [
                "Enterprise architecture design (microservices & event-driven)",
                "Web and mobile platforms at scale",
                "API design and management (REST, GraphQL)",
                "Legacy application modernization",
                "Enterprise systems integration",
                "Code governance, automated testing, and quality assurance"
            ],
            benefits: [
                { title: "Organizational scalability", body: "Architectures built to support enterprise growth and demand." },
                { title: "Technology standardization", body: "Best practices ensuring consistency and maintainability." },
                { title: "Faster time-to-market", body: "Frameworks that accelerate delivery cycles." },
                { title: "Risk management", body: "Security, resilience, and compliance by design." },
            ],
            tech: ["React", "Next.js", "Node.js", "TypeScript", "Docker", "Kubernetes"],
        },
    },

    "ai-ml": {
        es: {
            name: "AI & Machine Learning",
            tagline: "Inteligencia artificial empresarial para decisiones estratégicas.",
            description: "Implementamos soluciones avanzadas de inteligencia artificial que permiten a las organizaciones optimizar operaciones, anticipar escenarios y generar ventajas competitivas sostenibles. Integramos modelos de IA dentro de los procesos críticos del negocio con enfoque en gobernanza y escalabilidad.",
            capabilities: [
                "Desarrollo de modelos predictivos y analítica avanzada",
                "Procesamiento de lenguaje natural (NLP) empresarial",
                "Sistemas de recomendación a escala",
                "Computer Vision aplicado a negocio",
                "MLOps y gobierno de modelos",
                "Fine-tuning e implementación de modelos generativos"
            ],
            benefits: [
                { title: "Decisiones basadas en datos", body: "Modelos que soportan decisiones estratégicas con alta precisión." },
                { title: "Optimización operativa", body: "Automatización inteligente de procesos clave." },
                { title: "Gobernanza de IA", body: "Control, trazabilidad y cumplimiento en el ciclo de vida de modelos." },
                { title: "Ventaja competitiva sostenible", body: "Capacidades de IA alineadas con el negocio." },
            ],
            tech: ["Python", "Azure AI", "OpenAI", "MLflow", "TensorFlow", "PyTorch"],
        },
        en: {
            name: "AI & Machine Learning",
            tagline: "Enterprise AI for strategic decision-making.",
            description: "We implement advanced AI solutions that enable organizations to optimize operations, anticipate outcomes, and build sustainable competitive advantages. Our approach integrates AI into core business processes with a strong focus on governance and scalability.",
            capabilities: [
                "Predictive modeling and advanced analytics",
                "Enterprise NLP solutions",
                "Scalable recommendation systems",
                "Business-oriented computer vision",
                "MLOps and model governance",
                "Fine-tuning and deployment of generative models"
            ],
            benefits: [
                { title: "Data-driven decisions", body: "High-accuracy models supporting strategic decisions." },
                { title: "Operational efficiency", body: "Intelligent automation of key processes." },
                { title: "AI governance", body: "Full lifecycle control, traceability, and compliance." },
                { title: "Sustainable advantage", body: "AI capabilities aligned with business strategy." },
            ],
            tech: ["Python", "Azure AI", "OpenAI", "MLflow", "TensorFlow", "PyTorch"],
        },
    },

    "data-analytics": {
        es: {
            name: "Data & Analítica",
            tagline: "Estrategias de datos que impulsan decisiones empresariales.",
            description: "Diseñamos plataformas analíticas y soluciones de business intelligence que convierten datos en activos estratégicos. Facilitamos la toma de decisiones mediante modelos analíticos, visualización avanzada y gobierno del dato a nivel organizacional.",
            capabilities: [
                "Diseño de plataformas de BI empresariales",
                "Modelado de datos y métricas corporativas",
                "Dashboards ejecutivos y operacionales",
                "Self-service analytics gobernado",
                "Analítica avanzada y estadística",
                "Arquitecturas de data warehouse"
            ],
            benefits: [
                { title: "Visión unificada del negocio", body: "Una única fuente de verdad para toda la organización." },
                { title: "Decisiones en tiempo real", body: "Acceso inmediato a información crítica." },
                { title: "Adopción organizacional", body: "Experiencias diseñadas para usuarios de negocio." },
                { title: "Gobernanza del dato", body: "Control, calidad y trazabilidad de la información." },
            ],
            tech: ["Power BI", "Azure Synapse", "SQL", "Python", "DAX", "Power Query"],
        },
        en: {
            name: "Data & Analytics",
            tagline: "Data strategies that drive enterprise decisions.",
            description: "We design analytics platforms and BI solutions that transform data into strategic assets. Our approach enables decision-making through advanced modeling, visualization, and enterprise data governance.",
            capabilities: [
                "Enterprise BI platforms",
                "Corporate data modeling and metrics",
                "Executive and operational dashboards",
                "Governed self-service analytics",
                "Advanced and statistical analytics",
                "Data warehouse architectures"
            ],
            benefits: [
                { title: "Unified business view", body: "A single source of truth across the organization." },
                { title: "Real-time decisions", body: "Immediate access to critical insights." },
                { title: "User adoption", body: "Designed for business users at scale." },
                { title: "Data governance", body: "Control, quality, and traceability." },
            ],
            tech: ["Power BI", "Azure Synapse", "SQL", "Python", "DAX", "Power Query"],
        },
    },

    "business-transformation": {
        es: {
            name: "Transformación Empresarial",
            tagline: "Reinventamos el negocio a través de la tecnología.",
            description: "Acompañamos a las organizaciones en procesos de transformación digital integral, alineando estrategia, tecnología y operaciones. Diseñamos modelos operativos modernos que permiten adaptarse al cambio y capturar nuevas oportunidades de negocio.",
            capabilities: [
                "Estrategia de transformación digital",
                "Rediseño de procesos de negocio",
                "Automatización empresarial",
                "Integración de plataformas tecnológicas",
                "Consultoría tecnológica estratégica",
                "Gestión del cambio organizacional"
            ],
            benefits: [
                { title: "Eficiencia operativa", body: "Optimización de procesos críticos del negocio." },
                { title: "Alineación estratégica", body: "Tecnología conectada con objetivos empresariales." },
                { title: "Agilidad organizacional", body: "Capacidad de adaptación al cambio." },
                { title: "Crecimiento sostenible", body: "Transformación enfocada en resultados a largo plazo." },
            ],
            tech: ["Azure", "Power Platform", "Dynamics 365", "APIs", "Automation Tools"],
        },
        en: {
            name: "Business Transformation",
            tagline: "Reinventing business through technology.",
            description: "We support organizations in end-to-end digital transformation, aligning strategy, technology, and operations. We design modern operating models that enable adaptability and unlock new business opportunities.",
            capabilities: [
                "Digital transformation strategy",
                "Business process redesign",
                "Enterprise automation",
                "Technology platform integration",
                "Strategic technology consulting",
                "Organizational change management"
            ],
            benefits: [
                { title: "Operational efficiency", body: "Optimization of critical business processes." },
                { title: "Strategic alignment", body: "Technology aligned with business goals." },
                { title: "Organizational agility", body: "Ability to adapt to change." },
                { title: "Sustainable growth", body: "Transformation focused on long-term value." },
            ],
            tech: ["Azure", "Power Platform", "Dynamics 365", "APIs", "Automation Tools"],
        },
    },
    "cloud-devops": {
        es: {
            name: "Cloud & DevOps",
            tagline: "Operaciones tecnológicas eficientes, seguras y escalables.",
            description: "Diseñamos e implementamos capacidades cloud y prácticas DevOps que permiten a las organizaciones operar con agilidad, confiabilidad y control. Automatizamos el ciclo de vida del software y la infraestructura para acelerar la entrega de valor y garantizar estabilidad operativa a escala.",
            capabilities: [
                "Diseño e implementación de arquitecturas cloud (Azure, AWS, GCP)",
                "CI/CD pipelines empresariales",
                "Infrastructure as Code (Terraform, Bicep)",
                "Automatización de despliegues y entornos",
                "Monitoreo, observabilidad y alertas",
                "Gestión de costos y FinOps"
            ],
            benefits: [
                { title: "Velocidad de entrega", body: "Automatización que reduce significativamente los tiempos de despliegue." },
                { title: "Confiabilidad operativa", body: "Infraestructura resiliente con monitoreo continuo." },
                { title: "Eficiencia de costos", body: "Optimización del gasto cloud mediante prácticas FinOps." },
                { title: "Gobernanza y control", body: "Procesos estandarizados y auditables en todo el ciclo de vida." },
            ],
            tech: ["Azure", "AWS", "GCP", "Terraform", "Docker", "Kubernetes", "Azure DevOps"],
        },
        en: {
            name: "Cloud & DevOps",
            tagline: "Efficient, secure, and scalable technology operations.",
            description: "We design and implement cloud capabilities and DevOps practices that enable organizations to operate with agility, reliability, and control. We automate the software and infrastructure lifecycle to accelerate value delivery and ensure operational stability at scale.",
            capabilities: [
                "Cloud architecture design and implementation (Azure, AWS, GCP)",
                "Enterprise CI/CD pipelines",
                "Infrastructure as Code (Terraform, Bicep)",
                "Deployment and environment automation",
                "Monitoring, observability, and alerting",
                "Cost management and FinOps"
            ],
            benefits: [
                { title: "Faster delivery", body: "Automation significantly reduces deployment times." },
                { title: "Operational reliability", body: "Resilient infrastructure with continuous monitoring." },
                { title: "Cost efficiency", body: "Cloud spend optimization through FinOps practices." },
                { title: "Governance and control", body: "Standardized and auditable processes across the lifecycle." },
            ],
            tech: ["Azure", "AWS", "GCP", "Terraform", "Docker", "Kubernetes", "Azure DevOps"],
        },
    },

    "academy": {
        es: {
            name: "Academy Empresarial",
            tagline: "Desarrollamos el talento digital que impulsa tu organización.",
            description: "Diseñamos programas de formación corporativa orientados a fortalecer capacidades tecnológicas clave dentro de las organizaciones. Alineamos el desarrollo del talento con las necesidades estratégicas del negocio para acelerar la adopción tecnológica y maximizar el retorno de inversión en innovación.",
            capabilities: [
                "Programas de formación técnica corporativa",
                "Upskilling y reskilling de equipos",
                "Rutas de aprendizaje personalizadas",
                "Entrenamiento en tecnologías cloud, data y AI",
                "Preparación para certificaciones oficiales",
                "Workshops prácticos basados en casos reales"
            ],
            benefits: [
                { title: "Capacidades internas fortalecidas", body: "Equipos preparados para ejecutar iniciativas tecnológicas estratégicas." },
                { title: "Aceleración de adopción tecnológica", body: "Reducción de la curva de aprendizaje en nuevas herramientas." },
                { title: "Retención de talento", body: "Programas que impulsan el crecimiento profesional dentro de la organización." },
                { title: "Impacto directo en negocio", body: "Formación alineada con objetivos y casos reales empresariales." },
            ],
            tech: ["Azure", "Databricks", "Power BI", "Python", "AI Tools", "Cloud Platforms"],
        },
        en: {
            name: "Enterprise Academy",
            tagline: "Building the digital talent that drives your organization.",
            description: "We design corporate training programs aimed at strengthening key technological capabilities within organizations. We align talent development with business strategy to accelerate technology adoption and maximize ROI on innovation initiatives.",
            capabilities: [
                "Corporate technical training programs",
                "Upskilling and reskilling initiatives",
                "Customized learning paths",
                "Training in cloud, data, and AI technologies",
                "Official certification preparation",
                "Hands-on workshops based on real use cases"
            ],
            benefits: [
                { title: "Stronger internal capabilities", body: "Teams ready to execute strategic technology initiatives." },
                { title: "Faster technology adoption", body: "Reduced learning curve for new tools and platforms." },
                { title: "Talent retention", body: "Programs that foster professional growth within the organization." },
                { title: "Direct business impact", body: "Training aligned with real business objectives." },
            ],
            tech: ["Azure", "Databricks", "Power BI", "Python", "AI Tools", "Cloud Platforms"],
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
