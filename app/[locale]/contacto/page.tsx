"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import emailjs from "@emailjs/browser";

const COUNTRIES = [
    "Colombia", "México", "Argentina", "Chile", "Perú", "Ecuador",
    "Bolivia", "Venezuela", "Uruguay", "Paraguay", "Brasil",
    "Costa Rica", "Panamá", "Guatemala", "Honduras", "El Salvador",
    "Nicaragua", "República Dominicana", "Puerto Rico",
    "Estados Unidos", "España", "Otro"
];

const schema = z.object({
    name: z.string().min(2, "Nombre requerido (mínimo 2 caracteres)"),
    email: z.string().email("Email inválido"),
    company: z.string().min(1, "Empresa requerida"),
    country: z.string().min(1, "País requerido"),
    service: z.string().min(1, "Servicio requerido"),
    message: z.string().min(20, "Mensaje muy corto (mínimo 20 caracteres)"),
});

type FormData = z.infer<typeof schema>;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
    const t = useTranslations("contact");
    const nameService = useTranslations("services");
    const locale = useLocale();
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const SERVICES = [
        nameService("items.software_engineering.name"),
        nameService("items.ai_ml.name"),
        nameService("items.data_analytics.name"),
        nameService("items.business_transformation.name"),
        nameService("items.cloud_devops.name"),
        nameService("items.academy.name"),
        "General",
    ];


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("loading");

        const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error("EmailJS no está configurado");
            setStatus("error");
            return;
        }

        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                name: data.name,
                email: data.email,
                company: data.company,
                country: data.country,
                service: data.service,
                message: data.message,
                reply_to: data.email,
            }, PUBLIC_KEY);

            setStatus("success");
            reset();
        } catch (err) {
            console.error("Error al enviar con EmailJS:", err);
            setStatus("error");
        }
    };

    const inputClass = (hasError: boolean) =>
        `w-full bg-bg-card border rounded-btn px-4 py-3 text-text-primary placeholder-text-muted text-sm focus:outline-none focus:ring-1 transition-all duration-200 ${hasError
            ? "border-red-500/50 focus:ring-red-500/50"
            : "border-bg-border focus:border-cyan-DEFAULT focus:ring-cyan-DEFAULT/30"
        }`;

    const labelClass = "block text-text-secondary text-sm font-medium mb-2";

    return (
        <div style={{ background: "#0a0d14", minHeight: "100vh" }}>
            {/* Hero */}
            <div className="pt-28 pb-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1
                            className="font-bold text-text-primary mb-4"
                            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
                        >
                            <GradientText>{t("hero_title")}</GradientText>
                        </h1>
                        <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
                            {t("hero_subtitle")}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Main content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-start">
                    {/* Form — 3/5 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-1"
                    >
                        <div className="bg-bg-card border border-bg-border rounded-[20px] p-6 lg:p-8">
                            {status === "success" ? (
                                <div className="flex flex-col items-center justify-center py-16 text-center">
                                    <CheckCircle size={56} className="text-green-400 mb-4" />
                                    <h2 className="text-text-primary font-bold text-xl mb-2">
                                        {t("form.success")}
                                    </h2>
                                    <p className="text-text-secondary mb-6">
                                        {t("info.response_time")}
                                    </p>
                                    <Button variant="secondary" onClick={() => setStatus("idle")}>
                                        Enviar otro mensaje
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-5">
                                        {/* Name */}
                                        <div>
                                            <label htmlFor="name" className={labelClass}>
                                                {t("form.name")} *
                                            </label>
                                            <input
                                                id="name"
                                                {...register("name")}
                                                className={inputClass(!!errors.name)}
                                                placeholder="María García"
                                                autoComplete="name"
                                            />
                                            {errors.name && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
                                            )}
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label htmlFor="email" className={labelClass}>
                                                {t("form.email")} *
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                {...register("email")}
                                                className={inputClass(!!errors.email)}
                                                placeholder="maria@empresa.com"
                                                autoComplete="email"
                                            />
                                            {errors.email && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
                                            )}
                                        </div>

                                        {/* Company */}
                                        <div>
                                            <label htmlFor="company" className={labelClass}>
                                                {t("form.company")} *
                                            </label>
                                            <input
                                                id="company"
                                                {...register("company")}
                                                className={inputClass(!!errors.company)}
                                                placeholder="Mi Empresa S.A.S"
                                                autoComplete="organization"
                                            />
                                            {errors.company && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.company.message}</p>
                                            )}
                                        </div>

                                        {/* Country */}
                                        <div>
                                            <label htmlFor="country" className={labelClass}>
                                                {t("form.country")} *
                                            </label>
                                            <select
                                                id="country"
                                                {...register("country")}
                                                className={inputClass(!!errors.country)}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    {t("form.select_country")}
                                                </option>
                                                {COUNTRIES.map((c) => (
                                                    <option key={c} value={c}>
                                                        {c}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.country && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.country.message}</p>
                                            )}
                                        </div>

                                        {/* Service */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="service" className={labelClass}>
                                                {t("form.service")} *
                                            </label>
                                            <select
                                                id="service"
                                                {...register("service")}
                                                className={inputClass(!!errors.service)}
                                                defaultValue=""
                                            >
                                                <option value="" disabled>
                                                    {t("form.select_service")}
                                                </option>
                                                {SERVICES.map((s) => (
                                                    <option key={s} value={s}>
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.service && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
                                            )}
                                        </div>

                                        {/* Message */}
                                        <div className="sm:col-span-2">
                                            <label htmlFor="message" className={labelClass}>
                                                {t("form.message")} *
                                            </label>
                                            <textarea
                                                id="message"
                                                {...register("message")}
                                                rows={5}
                                                className={`${inputClass(!!errors.message)} resize-none`}
                                                placeholder="Cuéntanos sobre tu proyecto, tecnologías actuales, tamaño del equipo..."
                                            />
                                            {errors.message && (
                                                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
                                            )}
                                        </div>
                                    </div>

                                    {status === "error" && (
                                        <div className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-btn px-4 py-3">
                                            <AlertCircle size={16} />
                                            {t("form.error")}
                                        </div>
                                    )}

                                    <div className="mt-6">
                                        <Button
                                            type="submit"
                                            variant="outline"
                                            size="lg"
                                            className="w-full cursor-pointer"
                                            isLoading={status === "loading"}
                                            disabled={status === "loading"}
                                        >
                                            {status === "loading" ? t("form.sending") : t("form.submit")}
                                        </Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </motion.div>

                    {/* Info panel — 2/5 */}
                    {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
          
            <div className="bg-bg-card border border-bg-border rounded-[20px] p-6">
              <h2 className="text-text-primary font-semibold text-base mb-5">
                Información de contacto
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-cyan-DEFAULT mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="caption text-text-muted mb-1">{t("info.email_label")}</p>
                    <a
                      href={`mailto:${t("info.email_value")}`}
                      className="text-text-primary text-sm font-medium hover:text-cyan-DEFAULT transition-colors"
                    >
                      {t("info.email_value")}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-cyan-DEFAULT mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="caption text-text-muted mb-1">Tiempo de respuesta</p>
                    <p className="text-text-primary text-sm">{t("info.response_time")}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-cyan-DEFAULT mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="caption text-text-muted mb-1">{t("info.location_label")}</p>
                    <p className="text-text-primary text-sm">{t("info.location_value")} 🇨🇴</p>
                  </div>
                </li>
              </ul>
            </div>

          
            <div className="bg-bg-card border border-bg-border rounded-[20px] p-6">
              <h2 className="text-text-primary font-semibold text-base mb-2">
                {t("info.schedule_label")}
              </h2>
              <p className="text-text-muted text-sm mb-4">
                Prefiere hablar directamente con nuestro equipo técnico.
              </p>

              <a
                href="https://calendly.com/arkmapix"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 border border-cyan-DEFAULT/30 text-cyan-DEFAULT text-sm font-semibold rounded-btn hover:bg-cyan-DEFAULT/5 transition-all duration-200"
              >
                <LinkedinIcon size={16} />
                {t("info.schedule_cta")}
              </a>
            </div>


            <div className="bg-bg-card border border-bg-border rounded-[20px] p-6 overflow-hidden">
              <LatamMap />
            </div>
          </motion.div> */}
                </div>
            </div>
        </div>
    );
}

/**
 * Decorative simplified Latin America SVG map with Medellín pin.
 * No external map API required.
 */
function LatamMap() {
    return (
        <div className="relative">
            <p className="caption text-text-muted mb-3">Basados en Medellín, Colombia</p>
            <svg
                viewBox="0 0 200 300"
                className="w-full max-h-48 opacity-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Mapa simplificado de América Latina con pin en Medellín"
                role="img"
            >
                {/* Simplified continent outline */}
                <path
                    d="M80 20 C65 18, 50 25, 45 35 C40 45, 42 55, 38 65 C34 75, 28 80, 30 95 C32 110, 45 115, 48 125 C51 135, 46 145, 44 155 C42 165, 38 175, 40 185 C42 195, 48 200, 50 210 C52 220, 50 230, 55 240 C60 250, 70 255, 75 265 C80 275, 78 285, 82 290 C86 295, 95 293, 100 288 C105 283, 105 275, 108 268 C111 261, 118 258, 120 250 C122 242, 118 233, 120 225 C122 217, 130 212, 132 203 C134 194, 130 184, 132 175 C134 166, 140 160, 140 150 C140 140, 135 132, 133 122 C131 112, 128 105, 125 95 C122 85, 118 78, 115 68 C112 58, 110 50, 105 42 C100 34, 95 22, 80 20Z"
                    stroke="#1A2840"
                    strokeWidth="1"
                    fill="#0F1825"
                />
                {/* Medellín pin - approx at 6.2°N, 75.5°W */}
                <circle cx="78" cy="95" r="5" fill="url(#map-grad)" />
                <circle cx="78" cy="95" r="10" stroke="#00C6FF" strokeWidth="1" opacity="0.4" />
                <circle cx="78" cy="95" r="16" stroke="#00C6FF" strokeWidth="0.5" opacity="0.2" />
                <defs>
                    <linearGradient id="map-grad" x1="73" y1="90" x2="83" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#00C6FF" />
                        <stop offset="1" stopColor="#0072FF" />
                    </linearGradient>
                </defs>
            </svg>
            <div className="absolute top-8 left-[39%] -translate-x-1/2">
                <div className="bg-bg-primary border border-cyan-DEFAULT/30 rounded-pill px-2 py-0.5 whitespace-nowrap">
                    <span className="text-cyan-DEFAULT text-xs font-semibold">Medellín 🇨🇴</span>
                </div>
            </div>
        </div>
    );
}
