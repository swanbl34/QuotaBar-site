"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import MenuBarMockup from "@/components/ui/MenuBarMockup";
import { staggerContainer, fadeUp } from "@/lib/variants";
import { DOWNLOAD_URL, APP_VERSION, MACOS_MIN } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Background radial orb — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(45,158,208,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* Content */}
      <motion.div
        className="flex flex-col items-center text-center max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.12, 0.1)}
      >
        {/* Eyebrow badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,158,208,0.1)",
              border: "1px solid rgba(45,158,208,0.2)",
              color: "var(--color-accent-light)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] animate-pulse" />
            macOS Menu Bar App · v{APP_VERSION}
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-[var(--color-text-primary)]">Your API quota,</span>
          <br />
          <span
            className="relative"
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-light) 0%, var(--color-accent) 50%, #1A7BA8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            always in sight.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-xl mb-10"
        >
          Monitor your OpenAI Codex API quota in real time, right from the macOS menu bar.
          Green, orange, red — know your usage health at a glance.
        </motion.p>

        {/* CTA row */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Button href={DOWNLOAD_URL} download variant="primary" size="lg">
            <Download size={16} />
            Download for macOS
          </Button>
          <span className="text-[var(--color-text-tertiary)] text-sm font-[var(--font-mono)]">
            Free · {MACOS_MIN} · No Dock icon
          </span>
        </motion.div>

        {/* Menu bar mockup */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <MenuBarMockup />
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-[var(--color-text-tertiary)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
