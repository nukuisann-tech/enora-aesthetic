"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

// A slower, quieter curve than a typical marketing-site ease-out —
// motion here should read as considered, not eager.
const ease: Transition["ease"] = [0.19, 1, 0.22, 1];

export function Reveal({
  children,
  delay = 0,
  className,
  y = 14,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.1, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Pure opacity fade, no translate — for large typography where a vertical
 * shift competes with the letterforms themselves. */
export function FadeText({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.4, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Left-to-right clip reveal, like a curtain drawing open — ties back to
 * the brand's recurring curtain/veil motif (brief §13), and reads as a
 * distinct gesture from a simple vertical wipe. */
export function ImageReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 0 100%)", opacity: 0.6 }}
      whileInView={{ clipPath: "inset(0 0 0 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 1.2, ease, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
