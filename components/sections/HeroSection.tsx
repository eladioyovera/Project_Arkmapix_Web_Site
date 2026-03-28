"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Zap } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

export function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationId: number;
    let nodes: Node[] = [];

    type Node = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
    };

    const colors = ["#00C6FF", "#0072FF", "#7B2FF7", "#00FFD1"];

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes();
    }

    function initNodes() {
      if (!canvas) return;
      const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 60);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const opacity = (1 - dist / 120) * 0.4;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(0, 198, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationId = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);

    if (!prefersReducedMotion) {
      draw();
    } else {
      // Static render for reduced motion
      initNodes();
      if (ctx && canvas) {
        nodes.forEach((node) => {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
          ctx.fillStyle = node.color;
          ctx.globalAlpha = 0.6;
          ctx.fill();
        });
      }
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
    }),
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
      aria-label="Hero section"
    >
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern" aria-hidden />

      {/* Gradient blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: "var(--color-cyan)" }} aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "var(--color-violet)" }} aria-hidden />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: copy */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <Badge variant="gradient" className="mb-8 inline-flex items-center gap-2">
                <Zap size={10} className="text-cyan-DEFAULT" />
                {t("badge")}
              </Badge>
            </motion.div>

            <motion.h1
              className="font-black leading-tight mb-6"
              style={{ fontSize: "clamp(40px, 5.5vw, 72px)", letterSpacing: "-2px" }}
              aria-label={`${t("headline_1")} ${t("headline_2")}`}
            >
              <motion.span
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="block gradient-text"
              >
                {t("headline_1")}
              </motion.span>
              <motion.span
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="block text-text-primary"
              >
                {t("headline_2")}
              </motion.span>
            </motion.h1>

            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-text-secondary text-lg leading-relaxed mb-10 max-w-xl"
            >
              {t("subheadline")}
            </motion.p>

            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.location.href = `/${locale}/servicios`}
              >
                {t("cta_primary")}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = `/${locale}/nosotros`}
              >
                {t("cta_secondary")}
              </Button>
            </motion.div>
          </div>

          {/* Right: particle canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="relative hidden lg:block"
            style={{ height: "480px" }}
            aria-hidden
          >
            <div className="absolute inset-0 rounded-[24px] overflow-hidden border border-bg-border bg-bg-card/30">
              <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ display: "block" }}
              />
              {/* Overlay decorations */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 left-6 right-6 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                      <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                    ))}
                  </div>
                  <div className="flex-1 h-px bg-bg-border" />
                  <span className="text-text-muted font-mono text-xs">data.pipeline.live</span>
                </div>

                {/* Floating stats */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 left-8 bg-bg-card/90 backdrop-blur border border-bg-border rounded-card p-3"
                >
                  <div className="text-xs text-text-muted mb-1 font-mono">records/sec</div>
                  <div className="text-2xl font-black gradient-text">2.4M</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-16 right-8 bg-bg-card/90 backdrop-blur border border-bg-border rounded-card p-3"
                >
                  <div className="text-xs text-text-muted mb-1 font-mono">latency</div>
                  <div className="text-2xl font-black gradient-text">12ms</div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-1/2 right-8 -translate-y-1/2 bg-bg-card/90 backdrop-blur border border-cyan-DEFAULT/20 rounded-card p-3"
                >
                  <div className="text-xs text-cyan-DEFAULT mb-1 font-mono">status</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-sm font-semibold text-text-primary">LIVE</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label={t("scroll_hint")}
      >
        <span className="text-text-muted text-xs caption">{t("scroll_hint")}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
