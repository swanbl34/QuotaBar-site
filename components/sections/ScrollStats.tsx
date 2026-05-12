"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const STAGES = [
  {
    percent: 88,
    status: "healthy" as const,
    statusLabel: "Healthy",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    title: "You start fresh.",
    subtitle: "Quota just reset. Full capacity, green light.",
  },
  {
    percent: 52,
    status: "healthy" as const,
    statusLabel: "Healthy",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    title: "Work in progress.",
    subtitle: "Half-way through. Still in the green — no surprises.",
  },
  {
    percent: 26,
    status: "warning" as const,
    statusLabel: "Warning",
    color: "#F97316",
    bg: "rgba(249,115,22,0.1)",
    title: "Getting close.",
    subtitle: "QuotaBar turns orange. Time to keep an eye on it.",
  },
  {
    percent: 7,
    status: "critical" as const,
    statusLabel: "Critical",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.1)",
    title: "Running out.",
    subtitle: "Red. You know before you hit a wall — not after.",
  },
  {
    percent: 100,
    status: "healthy" as const,
    statusLabel: "Reset",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.1)",
    title: "Quota reset.",
    subtitle: "macOS notifies you instantly. Back to full speed.",
    isReset: true,
  },
];

function CircularProgress({
  percent,
  color,
}: {
  percent: number;
  color: string;
}) {
  const r = 88;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="220" height="220" className="-rotate-90">
      {/* Track */}
      <circle
        cx="110"
        cy="110"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="10"
      />
      {/* Progress */}
      <motion.circle
        cx="110"
        cy="110"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        animate={{ strokeDashoffset: offset }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{ filter: `drop-shadow(0 0 8px ${color}60)` }}
      />
    </svg>
  );
}

export default function ScrollStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageIdx, setStageIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(
      STAGES.length - 1,
      Math.floor(v * STAGES.length)
    );
    setStageIdx(idx);
  });

  const stage = STAGES[stageIdx];

  return (
    <section ref={containerRef} style={{ height: "500vh" }} className="relative">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background glow — changes color with status */}
        <motion.div
          className="absolute inset-0 -z-10 pointer-events-none"
          animate={{
            background: `radial-gradient(ellipse 60% 50% at 50% 50%, ${stage.color}10, transparent 70%)`,
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Section label */}
        <p
          className="text-xs font-medium uppercase tracking-widest mb-10"
          style={{ color: "var(--color-accent)", opacity: 0.7 }}
        >
          Always in the know
        </p>

        {/* Main card */}
        <div className="w-full max-w-lg">
          <motion.div
            className="rounded-2xl border p-8"
            animate={{
              borderColor: `${stage.color}25`,
              background: "rgba(15,15,20,0.8)",
              boxShadow: `0 0 60px ${stage.color}10`,
            }}
            transition={{ duration: 0.5 }}
            style={{ backdropFilter: "blur(12px)" }}
          >
            {/* Top row — app label + status badge */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-bold text-white font-[var(--font-mono)]"
                  style={{ background: "var(--color-accent)" }}
                >
                  QB
                </div>
                <span className="text-xs font-medium text-[var(--color-text-secondary)] font-[var(--font-mono)]">
                  OpenAI Codex
                </span>
              </div>

              <motion.span
                key={stage.statusLabel}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide"
                style={{ background: stage.bg, color: stage.color }}
              >
                <motion.span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: stage.color }}
                  animate={stage.isReset ? { scale: [1, 1.6, 1] } : {}}
                  transition={{ repeat: stage.isReset ? Infinity : 0, duration: 0.8 }}
                />
                {stage.statusLabel}
              </motion.span>
            </div>

            {/* Circular progress + number */}
            <div className="flex items-center justify-center mb-8 relative">
              <CircularProgress percent={stage.percent} color={stage.color} />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  key={stage.percent}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-5xl font-bold tabular-nums"
                  style={{ color: stage.color, fontFamily: "var(--font-mono)" }}
                >
                  {stage.percent}%
                </motion.span>
                <span className="text-xs text-[var(--color-text-tertiary)] mt-1">
                  left
                </span>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-4 mb-8">
              {[
                { label: "Requests / 5h", value: stage.percent },
                { label: "Tokens / 5h", value: Math.min(100, stage.percent + 5) },
              ].map(({ label, value }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs text-[var(--color-text-secondary)] font-[var(--font-mono)]">
                      {label}
                    </span>
                    <span
                      className="text-xs font-semibold font-[var(--font-mono)]"
                      style={{ color: stage.color }}
                    >
                      {value}%
                    </span>
                  </div>
                  <div
                    className="h-1.5 rounded-full overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <motion.div
                      className="h-full rounded-full"
                      animate={{ width: `${value}%`, backgroundColor: stage.color }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,255,255,0.05)]">
              <span className="text-[11px] text-[var(--color-text-tertiary)] font-[var(--font-mono)]">
                Reset 18:00
              </span>
              <span className="text-[11px] font-[var(--font-mono)]" style={{ color: "#22C55E" }}>
                ● Connected
              </span>
            </div>
          </motion.div>

          {/* Contextual text below card */}
          <motion.div
            key={stageIdx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mt-8"
          >
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-2">
              {stage.title}
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              {stage.subtitle}
            </p>
          </motion.div>

          {/* Stage dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {STAGES.map((s, i) => (
              <motion.div
                key={i}
                className="rounded-full"
                animate={{
                  width: i === stageIdx ? 20 : 6,
                  height: 6,
                  backgroundColor: i === stageIdx ? s.color : "rgba(255,255,255,0.15)",
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
