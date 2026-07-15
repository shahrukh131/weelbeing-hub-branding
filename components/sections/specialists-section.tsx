"use client"

import { ChevronRight } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { FadeIn } from "@/components/motion/fade-in"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

const SPECIALTIES = [
  "Cardiology",
  "Gynecology",
  "Medicine",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
]

export function SpecialistsSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section id="doctors" className="bg-[#eef3fd] px-4 py-16 sm:px-6 lg:px-0">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-[60px]">
        <FadeIn>
          <span className="mb-[10px] block text-[10.5px] font-extrabold tracking-[.14em] text-[#2a5be0] uppercase">
            Our specialists
          </span>
          <h2 className="max-w-[380px] text-[28px] font-extrabold leading-[1.2] text-[#0f1b3d]">
            Expert doctors for your better health
          </h2>
          <p className="mt-[14px] max-w-[380px] text-[13px] leading-[1.6] text-[#5b6478]">
            Connect with certified doctors for trusted consultations and
            compassionate care, whenever you need it.
          </p>

          <div className="mt-[22px] flex max-w-[420px] flex-wrap gap-2.5">
            {SPECIALTIES.map((specialty) => (
              <button
                key={specialty}
                type="button"
                className="inline-flex items-center rounded-full border border-[#dbe3f5] bg-white px-4 py-2 text-[12px] font-semibold text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f5f8ff]"
              >
                <ChevronRight className="mr-0.5 size-3 stroke-[2.5]" />
                {specialty}
              </button>
            ))}
          </div>

          <CallbackTrigger className="mt-6 inline-flex rounded-[10px] bg-[#2a5be0] px-[22px] py-3 text-[13px] font-bold text-white shadow-sm transition-colors hover:bg-[#1c46c2]">
            Book appointment
          </CallbackTrigger>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <motion.aside
            whileHover={{
              boxShadow: "0 20px 44px rgba(15,27,61,.11)",
            }}
            animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
            transition={{
              y: {
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              },
              boxShadow: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
            }}
            className="rounded-[18px] bg-white p-[26px] shadow-[0_14px_36px_rgba(15,27,61,.08)]"
          >
            <h3 className="text-[15px] font-bold text-[#0f1b3d]">
              Trusted doctors, ready to care
            </h3>
            <p className="mt-1.5 text-[12px] leading-relaxed text-[#6b7490]">
              Our specialists deliver quality care with trust and compassion.
            </p>

            <div className="mt-5 space-y-[18px]">
              <CareMetric
                label="Video consultation"
                value="95%"
                gradient="bg-[linear-gradient(90deg,#2a5be0,#19b8a6)]"
                width="95%"
                delay={0.24}
              />
              <CareMetric
                label="Follow-up care"
                value="91%"
                gradient="bg-[linear-gradient(90deg,#2a5be0,#5b6fe8)]"
                width="91%"
                delay={0.38}
              />
            </div>
          </motion.aside>
        </FadeIn>
      </div>
    </section>
  )
}

function CareMetric({
  label,
  value,
  gradient,
  width,
  delay,
}: {
  label: string
  value: string
  gradient: string
  width: string
  delay: number
}) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[12px] font-semibold text-[#0f1b3d]">
        <span>{label}</span>
        <span className="text-[#2a5be0]">{value}</span>
      </div>
      <div className="h-[7px] overflow-hidden rounded-full bg-[#eef0f6]">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full ${gradient}`}
        />
      </div>
    </div>
  )
}
