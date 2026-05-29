"use client";

import { Gauge, Compass, Calendar, Flag, MessageSquare, ClipboardCheck } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const iconMap = {
  Gauge,
  Compass,
  Calendar,
  Flag,
  MessageSquare,
  ClipboardCheck,
} as const;

export type IconName = keyof typeof iconMap;

export function ServiceCard({
  num,
  title,
  iconName,
  delay = 0,
}: {
  num: number;
  title: string;
  iconName: IconName;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  const Icon = iconMap[iconName];
  
  return (
    <motion.div
      initial={reduced ? {} : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div className="group relative h-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-bg-elev)] p-7 lg:p-9 hover:border-[color:var(--color-accent)] hover:bg-white/5 transition-all duration-500 flex flex-col">
        <div className="flex items-center justify-between">
          <motion.span
            initial={reduced ? {} : { scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: delay / 1000 + 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex h-12 w-12 items-center justify-center bg-[color:var(--color-accent)] text-white"
            aria-hidden
          >
            <Icon size={22} strokeWidth={2.5} />
          </motion.span>
          <span className="mono text-[11px] tracking-[0.22em] text-[color:var(--color-fg-soft)] pt-1">
            /{String(num).padStart(2, "0")}
          </span>
        </div>
        <p className="h-display text-[19px] md:text-[22px] lg:text-[24px] leading-[1.12] tracking-tight mt-9 text-[color:var(--color-fg)]">
          {title}
        </p>
        <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[color:var(--color-accent)] group-hover:w-full transition-[width] duration-700 ease-out" />
      </div>
    </motion.div>
  );
}
