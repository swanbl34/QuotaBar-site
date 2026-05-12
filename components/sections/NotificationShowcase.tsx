"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";

type Phase = "critical" | "notif" | "reset";

function MenuBarStrip({ phase }: { phase: Phase }) {
  const isReset = phase === "reset";
  const color = isReset ? "#22C55E" : "#EF4444";
  const label = isReset ? "OAI 100%" : "OAI 6%";

  return (
    <div
      className="flex items-center gap-3 px-4 h-8 rounded-t-xl"
      style={{
        background: "rgba(10,10,16,0.95)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Apple + menus */}
      <svg width="10" height="12" viewBox="0 0 14 17" fill="rgba(255,255,255,0.4)">
        <path d="M13.15 12.05c-.27.62-.58 1.19-.94 1.71-.5.71-.91 1.2-1.22 1.47-.49.45-1.01.68-1.57.69-.4 0-.89-.11-1.45-.34-.57-.23-1.09-.34-1.56-.34-.49 0-1.03.11-1.6.34-.58.23-1.04.35-1.4.36-.53.02-1.07-.22-1.6-.72-.34-.29-.76-.8-1.28-1.53-.55-.78-1-1.68-1.35-2.71C.07 9.9 0 8.93 0 7.99c0-1.08.23-2.01.7-2.78.37-.62.85-1.11 1.47-1.47.61-.36 1.27-.55 1.98-.56.39 0 .91.12 1.55.36.64.24 1.05.36 1.23.36.13 0 .58-.14 1.33-.42.71-.26 1.31-.37 1.8-.33 1.33.11 2.33.63 3 1.59-.19.11-.5.32-.87.63-.49.42-.73.98-.73 1.69 0 .57.18 1.04.53 1.42.35.38.74.59 1.16.66-.02.09-.05.18-.08.27zM9.97.5c0 .44-.16.86-.48 1.24C9.1 2.23 8.58 2.5 8 2.49c-.01-.05-.01-.11-.01-.17 0-.43.18-.88.5-1.25.16-.19.37-.34.62-.47.25-.12.49-.19.71-.2.01.04.01.07.01.11z" />
      </svg>
      <span className="text-[10px] text-white/30">Finder</span>
      <span className="text-[10px] text-white/20">File</span>
      <span className="text-[10px] text-white/20">Edit</span>

      {/* Right side */}
      <div className="ml-auto flex items-center gap-3">
        <span className="text-[10px] text-white/25 font-[var(--font-mono)]">10:42</span>
        <motion.div
          className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
          animate={{ background: isReset ? "rgba(34,197,94,0.12)" : "rgba(239,68,68,0.12)" }}
          transition={{ duration: 0.4 }}
          style={{ background: "rgba(239,68,68,0.12)" }}
        >
          <motion.span
            className="w-1.5 h-1.5 rounded-full"
            animate={{ backgroundColor: color }}
            transition={{ duration: 0.4 }}
            style={{ backgroundColor: "#EF4444" }}
          />
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-[10px] font-[var(--font-mono)] font-medium"
            style={{ color }}
          >
            {label}
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}

function MacNotification({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: 80, opacity: 0, scale: 0.95 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: 80, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          className="absolute top-12 right-4 w-72 rounded-2xl overflow-hidden"
          style={{
            background: "rgba(28,28,32,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-start gap-3 p-3.5">
            {/* App icon */}
            <div
              className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-[11px] font-bold text-white"
              style={{ background: "var(--color-accent)" }}
            >
              QB
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-0.5">
                <span className="text-[12px] font-semibold text-white">QuotaBar</span>
                <span className="text-[10px] text-white/35">now</span>
              </div>
              <p className="text-[11px] text-white/60 leading-snug">
                Your OpenAI Codex quota just reset — back to 100%.
              </p>
            </div>
          </div>

          {/* Green accent line at bottom */}
          <motion.div
            className="h-0.5 w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background: "linear-gradient(90deg, #22C55E, transparent)",
              transformOrigin: "left",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NotificationShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-120px" });
  const [phase, setPhase] = useState<Phase>("critical");

  useEffect(() => {
    if (!inView || phase !== "critical") return;
    const t1 = setTimeout(() => setPhase("notif"), 1200);
    const t2 = setTimeout(() => setPhase("reset"), 1900);
    const t3 = setTimeout(() => setPhase("critical"), 5200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [inView, phase]);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(34,197,94,0.05), transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — text */}
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] mb-4">
              Reset notifications
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-5 leading-tight">
              Know the instant you&apos;re back at 100%.
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-md">
              When your OpenAI Codex quota resets, QuotaBar fires a native macOS
              notification. No polling, no refreshing — you&apos;ll know the second
              you can get back to full speed.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-3">
              {[
                "Native macOS notification",
                "Fires instantly on reset",
                "No battery drain",
              ].map((feat) => (
                <span
                  key={feat}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "var(--color-surface-2)",
                    border: "1px solid var(--color-border-bright)",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {feat}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Right — mockup */}
          <FadeIn delay={0.15}>
            <div ref={ref} className="relative">
              {/* Mac window frame */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(13,13,20,0.9)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 40px 80px rgba(0,0,0,0.4)",
                }}
              >
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5 px-4 pt-3 pb-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* Menu bar inside frame */}
                <MenuBarStrip phase={phase} />

                {/* Desktop area */}
                <div
                  className="relative h-48"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(45,158,208,0.04), transparent 70%), rgba(8,8,12,0.8)",
                  }}
                >
                  {/* Subtle grid */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  {/* Notification */}
                  <MacNotification visible={phase === "notif" || phase === "reset"} />

                  {/* Status label in center when reset */}
                  <AnimatePresence>
                    {phase === "reset" && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
                      >
                        <motion.span
                          className="w-2 h-2 rounded-full bg-[#22C55E]"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ repeat: Infinity, duration: 1.2 }}
                        />
                        <span className="text-[11px] font-[var(--font-mono)] text-[#22C55E]">
                          Quota reset — 100% available
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Glow under card */}
              <motion.div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl -z-10"
                animate={{
                  backgroundColor: phase === "reset" ? "rgba(34,197,94,0.2)" : "rgba(239,68,68,0.1)",
                }}
                transition={{ duration: 0.6 }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
