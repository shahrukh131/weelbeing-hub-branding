import { CalendarCheck, HeartPulse, Search, Upload } from "lucide-react"

import { Stagger, StaggerItem } from "@/components/motion/stagger"

const ACTIONS = [
  { icon: CalendarCheck, label: "Book appointment", sub: "With leading experts" },
  { icon: Search, label: "Find a doctor", sub: "Search by specialty" },
  { icon: HeartPulse, label: "Health checkup", sub: "Packages from ৳990" },
  { icon: Upload, label: "Order medicine", sub: "Upload prescription" },
]

export function QuickActions() {
  return (
    <section className="relative z-10 -mt-8">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <Stagger className="grid gap-2 rounded-2xl border border-[#eef0f6] bg-white p-[18px_22px] shadow-[0_16px_40px_rgba(15,27,61,.08)] sm:grid-cols-2 lg:grid-cols-4">
          {ACTIONS.map(({ icon: Icon, label, sub }) => (
            <StaggerItem key={label}>
              <button
                type="button"
                className="flex w-full items-center gap-3 rounded-xl p-1.5 text-left transition-colors hover:bg-[#f6f8fd]"
              >
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-[11px] bg-[#e9f0ff] text-[#2a5be0]">
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-bold leading-tight text-[#0f1b3d]">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-[12px] leading-tight text-[#6b7490]">
                    {sub}
                  </span>
                </span>
              </button>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
