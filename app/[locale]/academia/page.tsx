import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export default async function AcademiaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "academy_page" });

  const programs = [
    { badge: t("p1_badge"), title: t("p1_title"), body: t("p1_body"), duration: t("p1_duration"), accent: "#00C6FF" },
    { badge: t("p2_badge"), title: t("p2_title"), body: t("p2_body"), duration: t("p2_duration"), accent: "#0072FF" },
    { badge: t("p3_badge"), title: t("p3_title"), body: t("p3_body"), duration: t("p3_duration"), accent: "#7B2FF7" },
  ];

  const whys = [
    { title: t("w1_title"), body: t("w1_body") },
    { title: t("w2_title"), body: t("w2_body") },
    { title: t("w3_title"), body: t("w3_body") },
  ];

  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 text-center" style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #00C6FF)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
            ARKMAPIX Academy
          </span>
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
        </div>
        <h1
          className="font-bold mb-6"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            background: "linear-gradient(135deg, #00C6FF 0%, #0072FF 50%, #7B2FF7 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ARKMAPIX Academy
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "#8090A8", maxWidth: "600px", margin: "0 auto" }}>
          {t("subtitle")}
        </p>
      </div>

      <div className="px-6 pb-24" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Programs */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
            {t("programs_label")}
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl p-7"
              style={{ background: "#0F1825", border: "1px solid #1A2840" }}
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ background: `${p.accent}18`, color: p.accent, border: `1px solid ${p.accent}30` }}
              >
                {p.badge}
              </span>
              <h3 className="font-bold text-lg mb-3" style={{ color: "#F0F4F8" }}>{p.title}</h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#8090A8" }}>{p.body}</p>
              <div className="flex items-center gap-2" style={{ color: "#4A6080" }}>
                <Clock size={14} />
                <span className="text-xs font-medium">{p.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
            {t("why_label")}
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {whys.map((w, i) => (
            <div
              key={w.title}
              className="rounded-xl p-6"
              style={{ background: "#0F1825", border: "1px solid #1A2840" }}
            >
              <div
                className="font-black text-3xl mb-4"
                style={{
                  background: "linear-gradient(135deg, #00C6FF, #7B2FF7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold mb-2" style={{ color: "#F0F4F8" }}>{w.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{w.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, #0072FF 0%, #7B2FF7 55%, #C026B0 100%)" }}
        >
          <h2 className="font-bold mb-3" style={{ fontSize: "clamp(22px, 3vw, 36px)", color: "#fff" }}>
            {t("cta_headline")}
          </h2>
          <p className="mb-8 text-lg" style={{ color: "rgba(255,255,255,0.85)", maxWidth: "500px", margin: "0 auto 32px" }}>
            {t("cta_body")}
          </p>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base"
            style={{ background: "#fff", color: "#0A0D14" }}
          >
            {t("cta_btn")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
