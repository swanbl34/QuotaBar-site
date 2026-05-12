"use client";

import FadeIn from "@/components/motion/FadeIn";
import { ContainerScroll } from "@/components/ui/ContainerScroll";
import DropdownMockup from "@/components/ui/DropdownMockup";

export default function Demo() {
  return (
    <section id="demo" className="relative overflow-hidden">
      <ContainerScroll
        titleComponent={
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-widest text-[var(--color-accent)] mb-3">
              Live preview
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              See it in action.
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-sm mx-auto leading-relaxed">
              This is the exact panel that opens when you click QuotaBar in your
              menu bar. Click the status badge to interact.
            </p>
          </FadeIn>
        }
      >
        {/* Desktop environment inside the screen */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Ambient glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(45,158,208,0.12) 0%, transparent 65%)",
            }}
          />

          {/* macOS menu bar strip at top */}
          <div
            className="absolute top-0 inset-x-0 h-7 flex items-center px-4 gap-4"
            style={{
              background: "rgba(10,10,16,0.95)",
              borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <svg width="11" height="13" viewBox="0 0 14 17" fill="rgba(255,255,255,0.5)">
              <path d="M13.15 12.05c-.27.62-.58 1.19-.94 1.71-.5.71-.91 1.2-1.22 1.47-.49.45-1.01.68-1.57.69-.4 0-.89-.11-1.45-.34-.57-.23-1.09-.34-1.56-.34-.49 0-1.03.11-1.6.34-.58.23-1.04.35-1.4.36-.53.02-1.07-.22-1.6-.72-.34-.29-.76-.8-1.28-1.53-.55-.78-1-1.68-1.35-2.71C.07 9.9 0 8.93 0 7.99c0-1.08.23-2.01.7-2.78.37-.62.85-1.11 1.47-1.47.61-.36 1.27-.55 1.98-.56.39 0 .91.12 1.55.36.64.24 1.05.36 1.23.36.13 0 .58-.14 1.33-.42.71-.26 1.31-.37 1.8-.33 1.33.11 2.33.63 3 1.59-.19.11-.5.32-.87.63-.49.42-.73.98-.73 1.69 0 .57.18 1.04.53 1.42.35.38.74.59 1.16.66-.02.09-.05.18-.08.27zM9.97.5c0 .44-.16.86-.48 1.24C9.1 2.23 8.58 2.5 8 2.49c-.01-.05-.01-.11-.01-.17 0-.43.18-.88.5-1.25.16-.19.37-.34.62-.47.25-.12.49-.19.71-.2.01.04.01.07.01.11z" />
            </svg>
            <span className="text-[10px] text-white/40">Finder</span>
            <span className="text-[10px] text-white/25">File</span>
            <span className="text-[10px] text-white/25">Edit</span>
            <div className="ml-auto flex items-center gap-3">
              <span className="text-[10px] text-white/30 font-[var(--font-mono)]">10:42</span>
              <span className="text-[10px] text-white/25">⌘</span>
              <span className="text-[10px] text-white/25">Wifi</span>
              <div
                className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                <span className="text-[10px] text-white font-[var(--font-mono)] font-medium">OAI 45%</span>
              </div>
            </div>
          </div>

          {/* Dropdown panel — floating from the menu bar */}
          <div className="relative z-10 mt-6">
            <DropdownMockup />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
