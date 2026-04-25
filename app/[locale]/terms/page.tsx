import LegalLayout from "@/components/layout/LegalLayout";
import type { Metadata } from "next";


// ── Static metadata (default ES — adjust per locale strategy) ─────────────────
export const metadata: Metadata = {
  title: "Términos y Condiciones — ARKMAPIX",
  description:
    "Lee los términos y condiciones que rigen el uso del sitio web de ARKMAPIX y el envío de información a través de nuestro formulario de contacto.",
  alternates: {
    languages: {
      "es-CO": "/terms",
      "en-US": "/terms",
    },
  },
  openGraph: {
    title: "Términos y Condiciones — ARKMAPIX",
    description:
      "Lee los términos que rigen el uso del sitio web de ARKMAPIX.",
    siteName: "ARKMAPIX",
    type: "website",
  },
};

// ── Page ──────────────────────────────────────────────────────────────────────
export default function TermsPage() {
  return <LegalLayout page="terms" />;
}
