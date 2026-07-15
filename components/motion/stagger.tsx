"use client"

import * as React from "react"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"
import { staggerContainer, staggerItem } from "@/components/motion/fade-in"

type StaggerProps = React.ComponentProps<typeof motion.div>

/** Container that reveals its <StaggerItem> children one after another on scroll. */
export function Stagger({ className, children, ...props }: StaggerProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ className, children, ...props }: StaggerProps) {
  return (
    <motion.div variants={staggerItem} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
