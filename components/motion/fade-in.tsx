"use client"

import * as React from "react"
import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

type Direction = "up" | "down" | "left" | "right" | "none"

const offset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 28 },
  down: { x: 0, y: -28 },
  left: { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none: { x: 0, y: 0 },
}

type FadeInProps = React.ComponentProps<typeof motion.div> & {
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
}

/**
 * Scroll-reveal wrapper: fades + eases the element in when it enters the
 * viewport. Shared transition so every section animates consistently.
 */
export function FadeIn({
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  className,
  children,
  ...props
}: FadeInProps) {
  const { x, y } = offset[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

/** Container + item variants for staggered lists. */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}
