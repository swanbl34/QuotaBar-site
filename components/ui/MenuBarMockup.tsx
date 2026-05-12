"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type StatusState = "healthy" | "warning" | "critical";

const STATES: { status: StatusState; label: string; color: string; percent: number }[] = [
  { status: "healthy", label: "OAI 45%", color: "#22C55E", percent: 45 },
  { status: "warning", label: "OAI 78%", color: "#F97316", percent: 78 },
  { status: "critical", label: "OAI 95%", color: "#EF4444", percent: 95 },
];

export default function MenuBarMockup() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % STATES.length), 2800);
    return () => clearInterval(id);
  }, []);

  const current = STATES[idx];

  return (
    <div className="relative mx-auto max-w-2xl w-full select-none">
      {/* Glow behind */}
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-full"
        style={{
          background: `radial-gradient(ellipse at 50% 60%, ${current.color}, transparent 70%)`,
          transition: "background 0.8s ease",
        }}
      />

      {/* macOS window chrome */}
      <div
        className="rounded-2xl overflow-hidden border border-[var(--color-border)]"
        style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)" }}
      >
        {/* Title bar */}
        <div
          className="h-8 flex items-center px-4 gap-2"
          style={{ background: "rgba(22, 22, 28, 0.95)" }}
        >
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>

        {/* Menu bar strip */}
        <div
          className="h-8 flex items-center px-5 relative"
          style={{
            background: "rgba(14, 14, 20, 0.98)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Left side static items */}
          <div className="flex items-center gap-5">
            {/* Apple logo */}
            <svg width="13" height="13" viewBox="0 0 14 17" fill="rgba(255,255,255,0.6)">
              <path d="M13.15 12.05c-.27.62-.58 1.19-.94 1.71-.5.71-.91 1.2-1.22 1.47-.49.45-1.01.68-1.57.69-.4 0-.89-.11-1.45-.34-.57-.23-1.09-.34-1.56-.34-.49 0-1.03.11-1.6.34-.58.23-1.04.35-1.4.36-.53.02-1.07-.22-1.6-.72-.34-.29-.76-.8-1.28-1.53-.55-.78-1-1.68-1.35-2.71C.07 9.9 0 8.93 0 7.99c0-1.08.23-2.01.7-2.78.37-.62.85-1.11 1.47-1.47.61-.36 1.27-.55 1.98-.56.39 0 .91.12 1.55.36.64.24 1.05.36 1.23.36.13 0 .58-.14 1.33-.42.71-.26 1.31-.37 1.8-.33 1.33.11 2.33.63 3 1.59-.19.11-.5.32-.87.63-.49.42-.73.98-.73 1.69 0 .57.18 1.04.53 1.42.35.38.74.59 1.16.66-.02.09-.05.18-.08.27zM9.97.5c0 .44-.16.86-.48 1.24C9.1 2.23 8.58 2.5 8 2.49c-.01-.05-.01-.11-.01-.17 0-.43.18-.88.5-1.25.16-.19.37-.34.62-.47.25-.12.49-.19.71-.2.01.04.01.07.01.11z"/>
            </svg>
            <span className="text-[11px] text-white/50 font-medium">Finder</span>
            <span className="text-[11px] text-white/30">File</span>
            <span className="text-[11px] text-white/30">Edit</span>
            <span className="text-[11px] text-white/30">View</span>
          </div>

          {/* Right side — system items + QuotaBar */}
          <div className="ml-auto flex items-center gap-4">
            <span className="text-[11px] text-white/30 font-[var(--font-mono)]">10:42</span>
            <span className="text-[11px] text-white/30">⌘</span>
            <span className="text-[11px] text-white/30">Wifi</span>

            {/* QuotaBar item — the hero */}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 0 0px ${current.color}00`,
                  `0 0 0 3px ${current.color}30`,
                  `0 0 0 0px ${current.color}00`,
                ],
              }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeOut" }}
              className="relative flex items-center gap-1.5 px-2 py-0.5 rounded-md"
              style={{ background: "rgba(255,255,255,0.07)" }}
            >
              {/* Status dot */}
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                animate={{ backgroundColor: current.color }}
                transition={{ duration: 0.5 }}
              />

              {/* Label */}
              <div className="relative overflow-hidden h-4 w-14">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={current.label}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute inset-0 text-[11px] text-white font-[var(--font-mono)] font-medium leading-4"
                  >
                    {current.label}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop wallpaper */}
        <div
          className="h-48 relative overflow-hidden"
          style={{
            background:
              "linear-gradient(160deg, #0d1117 0%, #0a0f1a 40%, #070a12 100%)",
          }}
        >
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Ambient light from current status */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 blur-3xl"
            animate={{ backgroundColor: current.color }}
            transition={{ duration: 0.8 }}
            style={{ opacity: 0.07 }}
          />

          {/* Mini app icons in dock-like row at bottom */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-2 px-4 py-2 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.05)" }}>
            {["#3B82F6", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"].map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-xl"
                style={{ background: `linear-gradient(135deg, ${color}60, ${color}20)`, border: `1px solid ${color}30` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Status label below */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {STATES.map((s, i) => (
          <button
            key={s.status}
            onClick={() => setIdx(i)}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-200"
            style={{
              background: i === idx ? `${s.color}15` : "transparent",
              border: `1px solid ${i === idx ? `${s.color}40` : "rgba(255,255,255,0.08)"}`,
              color: i === idx ? s.color : "rgba(255,255,255,0.3)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full inline-block"
              style={{ background: s.color, opacity: i === idx ? 1 : 0.4 }}
            />
            {s.status.charAt(0).toUpperCase() + s.status.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
