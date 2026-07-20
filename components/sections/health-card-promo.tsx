"use client"

import {
  ArrowRight,
  CreditCard,
  Percent,
  ShieldCheck,
  Smartphone,
  Wifi,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { FadeIn } from "@/components/motion/fade-in"
import { Stagger, StaggerItem } from "@/components/motion/stagger"

const BENEFITS = [
  {
    icon: Percent,
    title: "Partner discounts",
    body: "Enjoy savings on consultations, tests and services across our network.",
  },
  {
    icon: Smartphone,
    title: "Always with you",
    body: "Your card lives securely on your phone—no plastic to carry.",
  },
  {
    icon: ShieldCheck,
    title: "Verified in seconds",
    body: "Show your digital card at a partner hospital for instant verification.",
  },
  {
    icon: Wifi,
    title: "Care without limits",
    body: "Access your benefits whenever you need them, even on the go.",
  },
]

/** A concise introduction to the Health Card and its member benefits. */
export function HealthCardPromo() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="health-card" className="bg-white py-16">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(120deg,#17387e_0%,#2457cd_52%,#19b8a6_120%)] px-6 py-9 text-white shadow-[0_20px_48px_rgba(28,70,194,.2)] sm:px-10 sm:py-12 lg:px-[62px] lg:py-[58px]">
            <div className="pointer-events-none absolute -right-24 -top-24 size-[310px] rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 size-[290px] rounded-full bg-[#53d9cc]/25 blur-2xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:24px_24px]" />

            <div className="relative grid items-center gap-11 lg:grid-cols-[.9fr_1.1fr] lg:gap-[72px]">
              <FadeIn direction="right" className="mx-auto w-full max-w-[400px] lg:mx-0">
                <motion.div
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, -10, 0], rotate: [0, -0.7, 0] }
                  }
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                <div className="relative aspect-[1.6/1] rounded-[18px] border border-white/15 bg-[linear-gradient(135deg,#0d1f4b,#123c70_60%,#0d7180)] p-6 shadow-[0_22px_32px_rgba(5,16,48,.32)]">
                  <div className="absolute right-0 top-0 size-36 rounded-full bg-[#45d9ef]/20 blur-2xl" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-[10px] font-extrabold tracking-[.13em] text-[#72e2ef] uppercase">
                          Wellbeing Hub
                        </p>
                        <p className="mt-0.5 text-[15px] font-bold text-white">Health Card</p>
                      </div>
                      <CreditCard className="size-7 text-[#72e2ef]" />
                    </div>

                    <div>
                      <div className="mb-4 h-8 w-12 rounded-md bg-[linear-gradient(135deg,#ffd66b,#d59e2b)] [background-image:repeating-linear-gradient(45deg,transparent,transparent_3px,rgba(117,72,0,.13)_3px,rgba(117,72,0,.13)_5px)]" />
                      <p className="font-mono text-[14px] font-semibold tracking-[.16em] text-white">
                        8042 1923 4501
                      </p>
                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <p className="text-[8px] font-medium tracking-wide text-[#72e2ef] uppercase">
                            Cardholder
                          </p>
                          <p className="mt-0.5 text-[12px] font-semibold text-white">Your name here</p>
                        </div>
                        <div className="grid size-10 place-items-center rounded-md bg-white p-1">
                          <div className="size-full bg-[repeating-conic-gradient(#10244e_0deg_25%,white_0deg_50%)] [background-size:5px_5px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={shouldReduceMotion ? undefined : { scale: [1, 1.035, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -right-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 shadow-[0_12px_24px_rgba(5,16,48,.2)] sm:-right-5"
                >
                  <span className="grid size-8 place-items-center rounded-full bg-[#dff8f1] text-[#19a88f]">
                    <ShieldCheck className="size-4" />
                  </span>
                  <span>
                    <span className="block text-[10px] font-extrabold text-[#0f1b3d]">Ready to use</span>
                    <span className="block text-[9px] text-[#6b7490]">Digital card activated</span>
                  </span>
                </motion.div>
                </motion.div>
              </FadeIn>

              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10.5px] font-extrabold tracking-[.12em] text-[#d7f7ff] uppercase">
                  The Wellbeing Hub Health Card
                </span>
                <h2 className="mt-4 max-w-[550px] text-[30px] font-extrabold leading-[1.16] sm:text-[38px]">
                  One card. More ways to care for your health.
                </h2>
                <p className="mt-4 max-w-[580px] text-[13px] leading-[1.7] text-white/80 sm:text-[14px]">
                  Unlock trusted partner benefits, simpler bookings and a seamless care experience—all from one secure digital card.
                </p>

                <Stagger className="mt-7 grid gap-x-5 gap-y-5 sm:grid-cols-2">
                  {BENEFITS.map(({ icon: Icon, title, body }) => (
                    <StaggerItem key={title}>
                      <div className="flex gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-[10px] border border-white/15 bg-white/10 text-[#72e2ef]">
                          <Icon className="size-[17px]" />
                        </span>
                        <div>
                          <h3 className="text-[12.5px] font-bold text-white">{title}</h3>
                          <p className="mt-0.5 text-[11.5px] leading-[1.45] text-white/70">{body}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>

                <a
                  href="#plans"
                  className="mt-8 inline-flex items-center gap-2 rounded-[10px] bg-white px-5 py-3 text-[13px] font-bold text-[#1c46c2] shadow-[0_8px_18px_rgba(5,16,48,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#f0f5ff]"
                >
                  Explore Health Card plans
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
