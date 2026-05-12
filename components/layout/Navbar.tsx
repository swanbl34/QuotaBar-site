"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { DOWNLOAD_URL } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled ? "rgba(7, 7, 10, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/app-icon.png"
              alt="QuotaBar"
              width={28}
              height={28}
              className="rounded-lg"
            />
            <span className="font-semibold text-[var(--color-text-primary)] text-sm tracking-tight">
              QuotaBar
            </span>
          </div>

          {/* CTA */}
          <Button href={DOWNLOAD_URL} download variant="primary" size="sm">
            <Download size={13} />
            Download Free
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
