"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  download?: boolean | string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, download, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer select-none active:scale-[0.97] whitespace-nowrap";

    const variants = {
      primary:
        "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] shadow-lg shadow-[var(--color-accent-glow)] hover:shadow-[rgba(45,158,208,0.35)]",
      ghost:
        "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-2)]",
      outline:
        "border border-[var(--color-border-bright)] text-[var(--color-text-primary)] hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface-2)]",
    };

    const sizes = {
      sm: "px-3.5 py-1.5 text-xs",
      md: "px-5 py-2.5 text-sm",
      lg: "px-7 py-3.5 text-base",
    };

    const classes = cn(base, variants[variant], sizes[size], className);

    if (href) {
      return (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
