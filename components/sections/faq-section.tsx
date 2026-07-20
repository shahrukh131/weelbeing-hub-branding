"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FadeIn } from "@/components/motion/fade-in"
import { SectionHeading } from "@/components/sections/section-heading"

const FAQS = [
  {
    q: "How do I book an appointment?",
    a: "Search for a hospital or specialist, pick a doctor, and choose from their available times. You will see the consultation fee before you confirm. Once payment is complete you receive a booking reference, and the appointment appears in your bookings.",
  },
  {
    q: "What is the difference between a package and a health card?",
    a: "A package is a bundle of tests and services put together by a specific hospital, bought once and valid for a set period. A health card is a membership tier that gives you benefits across the network, tracked as you use them. Packages vary between hospitals; health card tiers are the same everywhere.",
  },
  {
    q: "Can I consult a doctor by video?",
    a: "Yes, where the doctor and hospital offer it. You will see whether a consultation is online or in-person before you book, and you join the video session from your bookings at the appointed time.",
  },
  {
    q: "Who can see my health records?",
    a: "You can, always. A doctor can see your history only if they have personally consulted you - never otherwise, and never another doctor's notes. A hospital sees only the visits that took place with them. Agents cannot access clinical information of any kind.",
  },
  {
    q: "Do I need to complete my profile before booking?",
    a: "You can browse and explore straight after signing up. To book, pay or buy a health card you will need to complete a few more details, including identity verification. You can save your progress and finish later.",
  },
  {
    q: "How do I reschedule or cancel a booking?",
    a: "Open the booking in your bookings list and choose to reschedule or cancel. Whether a change is possible depends on how close you are to the appointment time and the provider's policy, which is shown to you before you confirm.",
  },
  {
    q: "How do refunds work?",
    a: "You can request a refund against a transaction from your payment history. Each request is reviewed before a decision is made, and you can follow the status from the same place.",
  },
  {
    q: "Is Wellbeing Hub available outside Dhaka?",
    a: "Coverage depends on which hospitals and doctors have joined in your area. Search by your location to see what is available near you, and request a callback if you cannot find what you need.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-[60px]">
      <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="mb-[34px]">
          <SectionHeading
            align="center"
            eyebrow="Questions & answers"
            title="Frequently asked questions"
          />
          <p className="mt-2 text-center text-[13px] text-[#6b7490]">
            Everything you need to know before you get started.
          </p>
        </FadeIn>

        <FadeIn>
          <Accordion multiple={false} className="grid gap-3">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={q}
                value={`faq-${i}`}
                className="rounded-2xl border border-[#e6eaf4] bg-white px-[22px]"
              >
                <AccordionTrigger className="py-[18px] text-left text-[13.5px] font-bold text-[#0f1b3d] hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-[18px] text-[12.5px] leading-[1.65] text-[#6b7490]">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}
