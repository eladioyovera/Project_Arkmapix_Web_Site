import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";


// ── Static metadata (default ES — adjust per locale strategy) ─────────────────
export const metadata: Metadata = {
  title: "Política de Privacidad — ARKMAPIX",
  description:
    "Conoce cómo ARKMAPIX recopila, usa y protege tu información personal cuando usas nuestro sitio web y formulario de contacto.",
  alternates: {
    languages: {
      "es-CO": "/privacy",
      "en-US": "/privacy",
    },
  },
  openGraph: {
    title: "Política de Privacidad — ARKMAPIX",
    description:
      "Conoce cómo ARKMAPIX recopila, usa y protege tu información personal.",
    siteName: "ARKMAPIX",
    type: "website",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function PrivacyPage() {
  return <LegalLayout page="privacy"/>;
}
