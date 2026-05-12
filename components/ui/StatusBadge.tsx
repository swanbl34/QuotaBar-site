"use client";

import { motion } from "framer-motion";

type Status = "healthy" | "warning" | "critical" | "refreshing";

const CONFIG: Record<Status, { label: string; color: string; bg: string }> = {
  healthy:   { label: "Healthy",    color: "#22C55E", bg: "rgba(34,197,94,0.12)" },
  warning:   { label: "Warning",    color: "#F97316", bg: "rgba(249,115,22,0.12)" },
  critical:  { label: "Critical",   color: "#EF4444", bg: "rgba(239,68,68,0.12)" },
  refreshing:{ label: "Refreshing", color: "#2D9ED0", bg: "rgba(45,158,208,0.12)" },
};

interface StatusBadgeProps {
  status: Status;
  onClick?: () => void;
}

export default function StatusBadge({ status, onClick }: StatusBadgeProps) {
  const { label, color, bg } = CONFIG[status];

  return (
    <motion.button
      layout
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide cursor-pointer select-none"
      style={{ background: bg, color }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      transition={{ duration: 0.15 }}
    >
      <motion.span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: color }}
        animate={status === "refreshing" ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      {label}
    </motion.button>
  );
}
