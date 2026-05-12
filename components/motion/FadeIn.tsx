"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/variants";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  once = true,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...(variants.visible as object),
          transition: {
            ...((variants.visible as { transition?: object })?.transition ?? {}),
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
