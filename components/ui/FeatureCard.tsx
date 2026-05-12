"use client";

import { motion } from "framer-motion";
import {
  Activity,
  CircleDot,
  RefreshCw,
  Bell,
  KeyRound,
  Minimize2,
} from "lucide-react";
import { fadeUp } from "@/lib/variants";

const ICON_MAP = {
  Activity,
  CircleDot,
  RefreshCw,
  Bell,
  KeyRound,
  Minimize2,
} as const;

type IconName = keyof typeof ICON_MAP;

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  const Icon = ICON_MAP[icon as IconName] ?? Activity;

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative p-6 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-1)] transition-colors duration-200 hover:border-[var(--color-border-bright)] hover:bg-[var(--color-surface-2)] cursor-default"
    >
      {/* Icon */}
      <div
        className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
        style={{ background: "var(--color-accent-glow)" }}
      >
        <Icon size={18} style={{ color: "var(--color-accent)" }} />
      </div>

      {/* Text */}
      <h3 className="font-semibold text-[var(--color-text-primary)] mb-2 text-base">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
        {description}
      </p>

      {/* Hover glow edge */}
      <div
        className="absolute inset-0 rounded-[var(--radius-card)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(45,158,208,0.04) 0%, transparent 60%)",
        }}
      />
    </motion.div>
  );
}
