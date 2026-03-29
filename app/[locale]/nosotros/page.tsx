import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.about" });
  return { title: t("title"), description: t("description") };
}

export default async function NosotrosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  const tp = await getTranslations({ locale, namespace: "about_page" });

  const stats = [
    { num: t("stat_projects_num"), label: t("stat_projects") },
    { num: t("stat_countries_num"), label: t("stat_countries") },
    { num: t("stat_years_num"), label: t("stat_years") },
  ];

  const values = [
    { title: tp("v1_title"), body: tp("v1_body") },
    { title: tp("v2_title"), body: tp("v2_body") },
    { title: tp("v3_title"), body: tp("v3_body") },
    { title: tp("v4_title"), body: tp("v4_body") },
  ];

  return (
    <div style={{ background: "#0A0D14", minHeight: "100vh" }}>
      {/* Hero */}
      <div className="pt-32 pb-20 px-6 text-center" style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8" style={{ background: "linear-gradient(90deg, transparent, #00C6FF)" }} />
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
            {t("label")}
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
          {tp("page_title")}
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: "#8090A8", maxWidth: "640px", margin: "0 auto" }}>
          {t("body")}
        </p>
      </div>

      {/* Stats */}
      <div className="px-6 pb-20" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          className="grid grid-cols-3 gap-8 py-10 border-t border-b"
          style={{ borderColor: "#1A2840" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-black leading-none mb-2"
                style={{
                  fontSize: "clamp(36px, 4vw, 56px)",
                  background: "linear-gradient(135deg, #00C6FF, #0072FF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.num}
              </div>
              <div className="text-xs font-medium uppercase tracking-widest" style={{ color: "#4A6080" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="px-6 pb-24" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {[
            { label: tp("mission_label"), body: tp("mission_body"), accent: "#00C6FF" },
            { label: tp("vision_label"),  body: tp("vision_body"),  accent: "#7B2FF7" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-8"
              style={{ background: "#0F1825", border: "1px solid #1A2840" }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: item.accent }}
              >
                {item.label}
              </div>
              <p className="leading-relaxed text-base" style={{ color: "#F0F4F8" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
              {tp("values_label")}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="rounded-xl p-6 border"
                style={{ background: "#0F1825", borderColor: "#1A2840" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mb-4 font-black text-sm"
                  style={{ background: "rgba(0,198,255,0.1)", color: "#00C6FF" }}
                >
                  {String(i + 1).padStart(2, "00")}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#F0F4F8" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A6080" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div
          className="rounded-2xl p-10 mb-24"
          style={{ background: "#0F1825", border: "1px solid #1A2840" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: "linear-gradient(90deg, #00C6FF, transparent)" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#00C6FF" }}>
              {tp("team_label")}
            </span>
          </div>
          <p className="text-base leading-relaxed mb-8" style={{ color: "#8090A8", maxWidth: "720px" }}>
            {tp("team_body")}
          </p>
          <div className="flex flex-wrap gap-3">
            {["Azure Databricks", "Microsoft Fabric", "Azure AI Foundry", "Delta Lake", "Apache Spark", "Power BI"].map((badge) => (
              <span
                key={badge}
                className="text-xs font-mono px-3 py-1.5 rounded-full"
                style={{ background: "rgba(0,198,255,0.08)", color: "#00C6FF", border: "1px solid rgba(0,198,255,0.2)" }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ background: "linear-gradient(135deg, #0072FF 0%, #7B2FF7 55%, #C026B0 100%)" }}
        >
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "#fff" }}>
            {tp("cta_headline")}
          </h2>
          <Link
            href={`/${locale}/contacto`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-base"
            style={{ background: "#fff", color: "#0A0D14" }}
          >
            {tp("cta_btn")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
}
