"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/layout/logo"
import { ThemeToggle } from "@/components/layout/theme-toggle"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Offers", href: "/#offers" },
  { label: "Health Card", href: "/#plans" },
  { label: "Doctors", href: "/#doctors" },
  { label: "Services", href: "/#services" },
  { label: "Partners", href: "/#partners" },
  { label: "Media", href: "/#media" },
]

export function SiteHeader() {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState("Home")
  const pathname = usePathname()

  const activeLabel = pathname === "/about" ? "About" : active

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-[#eef0f6] bg-white/95 text-[#0f1b3d] backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 w-full max-w-[1240px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-0">
        <Logo className="h-12" />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setActive(link.label)}
              className={cn(
                "relative py-1 text-[13px] font-medium transition-colors",
                activeLabel === link.label
                  ? "font-bold text-[#0f1b3d]"
                  : "text-[#3c4257] hover:text-[#0f1b3d]"
              )}
            >
              {activeLabel === link.label && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-x-0 -bottom-[15px] h-0.5 bg-[#2a5be0]"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <CallbackTrigger className="hidden rounded-lg bg-[#f1f3f9] px-[18px] py-2 text-[12.5px] font-semibold text-[#0f1b3d] shadow-none transition-colors hover:bg-[#e6eaf4] sm:inline-flex">
            Login
          </CallbackTrigger>
          <CallbackTrigger className="hidden rounded-lg bg-[#2a5be0] px-[18px] py-2 text-[12.5px] font-semibold text-white shadow-none transition-colors hover:bg-[#1c46c2] sm:inline-flex">
            Register
          </CallbackTrigger>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border bg-background lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 bg-background lg:hidden"
          >
            <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActive(link.label)
                    setOpen(false)
                  }}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground",
                    activeLabel === link.label
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <CallbackTrigger className="flex-1 rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-brand-foreground">
                  Login
                </CallbackTrigger>
                <CallbackTrigger className="flex-1 rounded-full bg-linear-to-r from-brand-purple to-brand px-5 py-2 text-center text-sm font-semibold text-white">
                  Register
                </CallbackTrigger>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
