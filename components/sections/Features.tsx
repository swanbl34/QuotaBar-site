"use client";

import StaggerChildren from "@/components/motion/StaggerChildren";
import FadeIn from "@/components/motion/FadeIn";
import FeatureCard from "@/components/ui/FeatureCard";
import { FEATURES } from "@/lib/constants";

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Subtle green orb bottom left */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[400px] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Everything you need,
            <br />
            <span className="text-[var(--color-text-secondary)] font-normal">
              nothing you don&apos;t.
            </span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-md mx-auto leading-relaxed">
            QuotaBar is a menu bar extra — no Dock icon, no windows. Just your quota, always there.
          </p>
        </FadeIn>

        {/* Grid */}
        <StaggerChildren
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          stagger={0.08}
        >
          {FEATURES.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
