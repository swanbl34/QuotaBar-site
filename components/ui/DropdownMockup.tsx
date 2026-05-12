"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, Settings, Stethoscope } from "lucide-react";
import Image from "next/image";
import StatusBadge from "@/components/ui/StatusBadge";
import QuotaMeter from "@/components/ui/QuotaMeter";

type Status = "healthy" | "warning" | "critical";

const STATES: Record<Status, { percent: number; remaining: string }> = {
  healthy:  { percent: 45, remaining: "55%" },
  warning:  { percent: 78, remaining: "22%" },
  critical: { percent: 95, remaining: "5%" },
};

const STATUS_CYCLE: Status[] = ["healthy", "warning", "critical"];

export default function DropdownMockup() {
  const [status, setStatus] = useState<Status>("healthy");
  const state = STATES[status];

  const cycleStatus = () => {
    setStatus((s) => {
      const i = STATUS_CYCLE.indexOf(s);
      return STATUS_CYCLE[(i + 1) % STATUS_CYCLE.length];
    });
  };

  return (
    <div className="relative mx-auto" style={{ width: 340 }}>
      {/* macOS traffic lights bar */}
      <div
        className="flex items-center gap-2 px-4 h-8 rounded-t-2xl"
        style={{
          background: "rgba(22,22,30,0.95)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>

      {/* Dropdown panel */}
      <div
        className="relative rounded-b-2xl overflow-hidden"
        style={{
          background: "rgba(14,14,20,0.97)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderTop: "none",
          boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2">
            <Image src="/app-icon.png" alt="QuotaBar" width={20} height={20} className="rounded-md" />
            <span className="text-xs font-semibold text-[var(--color-text-primary)] font-[var(--font-mono)]">
              QuotaBar
            </span>
          </div>
          <span className="text-[10px] text-[var(--color-text-tertiary)] font-[var(--font-mono)]">
            Updated just now
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1 px-3 py-2 border-b border-[rgba(255,255,255,0.04)]">
          {[
            { label: "Refresh", icon: RefreshCw },
            { label: "Diagnostics", icon: Stethoscope },
            { label: "Settings", icon: Settings },
          ].map(({ label, icon: Icon }) => (
            <button
              key={label}
              className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[10px] font-medium transition-colors"
              style={{
                color: "var(--color-text-secondary)",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "var(--color-text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-text-secondary)";
              }}
            >
              <Icon size={11} />
              {label}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mx-3 my-1" style={{ background: "rgba(255,255,255,0.04)" }} />

        {/* Provider card */}
        <div className="px-3 py-3">
          <div
            className="rounded-xl p-3.5"
            style={{
              background: "var(--color-surface-2)",
              border: "1px solid var(--color-border)",
            }}
          >
            {/* Provider header */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-xs font-semibold text-[var(--color-text-primary)]">
                  OpenAI Codex
                </p>
                <p className="text-[10px] text-[var(--color-text-tertiary)] font-[var(--font-mono)]">
                  Free tier
                </p>
              </div>
              <div onClick={cycleStatus} title="Click to cycle status">
                <StatusBadge status={status} onClick={cycleStatus} />
              </div>
            </div>

            {/* Quota meters */}
            <AnimatePresence mode="wait">
              <motion.div
                key={status}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <QuotaMeter
                  label="Requests / 5h"
                  percent={state.percent}
                  status={status}
                  remaining={state.remaining}
                  resetAt="Reset 18:00"
                  animated={false}
                />
                <QuotaMeter
                  label="Tokens / 5h"
                  percent={Math.min(100, state.percent + 8)}
                  status={status}
                  remaining={`${Math.max(0, 100 - state.percent - 8)}%`}
                  resetAt="Reset 18:00"
                  animated={false}
                />
              </motion.div>
            </AnimatePresence>

            {/* Footer */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-[rgba(255,255,255,0.05)]">
              <span className="text-[10px] font-[var(--font-mono)]" style={{ color: "var(--color-text-tertiary)" }}>
                Official API
              </span>
              <span className="text-[10px] font-[var(--font-mono)]" style={{ color: "#22C55E" }}>
                ● Connected
              </span>
            </div>
          </div>
        </div>

        {/* Hint */}
        <p className="text-center text-[10px] pb-3" style={{ color: "var(--color-text-tertiary)" }}>
          Click the status badge to cycle states
        </p>
      </div>
    </div>
  );
}
