"use client";

import { Check, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export function PointCard({
  num,
  text,
  variant = "fit",
  tone = "paper",
  delay = 0,
}: {
  num: number;
  text: string;
  variant?: "fit" | "unfit";
  tone?: "paper" | "dark";
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const isPaper = tone === "paper";
  const isFit = variant === "fit";
  const Icon = isFit ? Check : X;

  const cardCls = isPaper
    ? "border-black/10 bg-white/95 backdrop-blur-sm hover:border-[color:var(--color-accent)] hover:bg-white"
    : "border-white/10 bg-white/5 backdrop-blur-md hover:border-[color:var(--color-accent)] hover:bg-white/10";

  const badgeCls = isFit
    ? "bg-[color:var(--color-accent)] text-white"
    : isPaper
      ? "bg-black text-[color:var(--color-paper)]"
      : "bg-white/10 text-white/80 border border-white/20";

  const numCls = isPaper ? "text-black/40" : "text-white/50";
  const textCls = isPaper ? "text-black/90" : "text-white";

  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        className={`group relative h-full border ${cardCls} p-7 lg:p-9 transition-all duration-500 flex flex-col`}
      >
        <div className="flex items-start justify-between gap-4">
          <motion.span
            initial={reduced ? {} : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay / 1000 + 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={`inline-flex h-11 w-11 items-center justify-center ${badgeCls}`}
            aria-hidden
          >
            <Icon size={22} strokeWidth={2.5} />
          </motion.span>
          <span
            className={`mono text-[11px] tracking-[0.22em] ${numCls} pt-1`}
          >
            {String(num).padStart(2, "0")}
          </span>
        </div>
        <p
          className={`h-display text-[19px] md:text-[22px] lg:text-[24px] leading-[1.12] tracking-tight mt-8 ${textCls}`}
        >
          {text}
        </p>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[color:var(--color-accent)] group-hover:w-full transition-[width] duration-700 ease-out" />
      </div>
    </motion.div>
  );
}
