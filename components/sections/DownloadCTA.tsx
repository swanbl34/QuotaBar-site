"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Button from "@/components/ui/Button";
import { DOWNLOAD_URL, GITHUB_URL, APP_VERSION, MACOS_MIN } from "@/lib/constants";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}
import { staggerContainer, fadeUp } from "@/lib/variants";

export default function DownloadCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Strong accent orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(45,158,208,0.14) 0%, transparent 60%)",
        }}
      />

      {/* Top border gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(45,158,208,0.5), transparent)",
        }}
      />

      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerContainer(0.12, 0)}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeUp}
          className="text-xs font-medium uppercase tracking-widest mb-5"
          style={{ color: "var(--color-accent)", opacity: 0.8 }}
        >
          Free · {MACOS_MIN} · No Dock icon
        </motion.p>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold text-[var(--color-text-primary)] leading-tight mb-5"
        >
          Start monitoring
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--color-accent-light), var(--color-accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            in 30 seconds.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="text-[var(--color-text-secondary)] text-lg mb-10 leading-relaxed"
        >
          Download QuotaBar, open it, paste your API key.
          <br />
          That&apos;s it — your quota is now in your menu bar.
        </motion.p>

        {/* CTA */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href={DOWNLOAD_URL} variant="primary" size="lg">
            <Download size={16} />
            Download QuotaBar
          </Button>
          <Button href={GITHUB_URL} variant="outline" size="lg">
            <GitHubIcon size={16} />
            View on GitHub
          </Button>
        </motion.div>

        {/* Fine print */}
        <motion.p
          variants={fadeUp}
          className="mt-6 text-xs font-[var(--font-mono)]"
          style={{ color: "var(--color-text-tertiary)" }}
        >
          v{APP_VERSION} · macOS 13 Ventura or later required ·{" "}
          <span className="opacity-70">
            If blocked by Gatekeeper, right-click the app and choose Open.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
