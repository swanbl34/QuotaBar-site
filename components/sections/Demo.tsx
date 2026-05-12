"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/motion/FadeIn";
import DropdownMockup from "@/components/ui/DropdownMockup";
import { scaleIn } from "@/lib/variants";

export default function Demo() {
  return (
    <section id="demo" className="py-24 px-6 relative">
      {/* Accent orb behind mockup */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(45,158,208,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn className="text-center mb-14">
          <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">
            Live preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            See it in action.
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-sm mx-auto">
            This is the exact panel that opens when you click QuotaBar in your menu bar. Interact with it — click the status badge.
          </p>
        </FadeIn>

        {/* Centered mockup */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={scaleIn}
          className="flex justify-center"
        >
          <DropdownMockup />
        </motion.div>
      </div>
    </section>
  );
}
