"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Status = "healthy" | "warning" | "critical";

const STATUS_COLOR: Record<Status, string> = {
  healthy:  "#22C55E",
  warning:  "#F97316",
  critical: "#EF4444",
};

interface QuotaMeterProps {
  label: string;
  percent: number;
  status: Status;
  remaining: string;
  resetAt: string;
  animated?: boolean;
}

export default function QuotaMeter({
  label,
  percent,
  status,
  remaining,
  resetAt,
  animated = true,
}: QuotaMeterProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const color = STATUS_COLOR[status];
  const displayPercent = animated ? (inView ? percent : 0) : percent;

  return (
    <div ref={ref} className="w-full">
      {/* Header row */}
      <div className="flex items-center justify-between mb-1.5">
        <span
          className="text-xs font-medium font-[var(--font-mono)]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {label}
        </span>
        <span
          className="text-xs font-semibold font-[var(--font-mono)]"
          style={{ color }}
        >
          {percent}%
        </span>
      </div>

      {/* Bar */}
      <div
        className="relative h-1.5 w-full rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.06)" }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full"
          style={{ background: color }}
          animate={{ width: `${displayPercent}%` }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

      {/* Footer row */}
      <div className="flex items-center justify-between mt-1.5">
        <span className="text-[11px]" style={{ color: "var(--color-text-tertiary)" }}>
          {remaining} remaining
        </span>
        <span className="text-[11px]" style={{ color: "var(--color-text-tertiary)" }}>
          {resetAt}
        </span>
      </div>
    </div>
  );
}
