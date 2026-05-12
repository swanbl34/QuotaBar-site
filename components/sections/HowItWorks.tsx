"use client";

import { motion } from "framer-motion";
import { KeyRound, BarChart2, Bell } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import StaggerChildren from "@/components/motion/StaggerChildren";
import { fadeUp } from "@/lib/variants";
import { HOW_IT_WORKS } from "@/lib/constants";

const ICONS = { KeyRound, BarChart2, Bell } as const;

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Up and running in 30 seconds.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-sm mx-auto">
            Three steps. No configuration files, no browser extensions.
          </p>
        </FadeIn>

        {/* Steps */}
        <StaggerChildren
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          stagger={0.15}
          delay={0.1}
        >
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = ICONS[step.icon as keyof typeof ICONS] ?? KeyRound;
            return (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="relative flex flex-col items-center text-center md:items-start md:text-left"
              >
                {/* Connecting line (desktop only) */}
                {i < HOW_IT_WORKS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-10 left-[calc(100%-1rem)] w-full h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(45,158,208,0.3) 0%, transparent 100%)",
                      borderTop: "1px dashed rgba(45,158,208,0.2)",
                    }}
                  />
                )}

                {/* Step number — large faded */}
                <div
                  className="absolute -top-6 left-0 hidden md:block text-7xl font-bold select-none pointer-events-none"
                  style={{
                    color: "rgba(255,255,255,0.02)",
                    fontVariantNumeric: "tabular-nums",
                    lineHeight: 1,
                  }}
                >
                  {step.step}
                </div>

                {/* Icon circle */}
                <div
                  className="relative z-10 mb-5 w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border-bright)",
                    boxShadow: "0 0 0 4px rgba(45,158,208,0.06)",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--color-accent)" }} />
                </div>

                {/* Step label */}
                <span
                  className="text-xs font-medium uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-accent)", opacity: 0.7 }}
                >
                  Step {step.step}
                </span>

                <h3 className="font-semibold text-[var(--color-text-primary)] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
