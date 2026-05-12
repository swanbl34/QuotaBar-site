"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/variants";

interface StaggerChildrenProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  once?: boolean;
}

export default function StaggerChildren({
  children,
  className,
  stagger = 0.1,
  delay = 0,
  once = true,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={staggerContainer(stagger, delay)}
    >
      {children}
    </motion.div>
  );
}
