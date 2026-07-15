import { Stagger, StaggerItem } from "@/components/motion/stagger"

const STATS = [
  { value: "1 Cr+", label: "Patients served" },
  { value: "500+", label: "Partner hospitals" },
  { value: "16 L+", label: "Consultations done" },
  { value: "64", label: "Districts covered" },
]

/** Trust stats band, presented as a contained panel. */
export function StatsSection() {
  return (
    <section className="mx-auto w-full max-w-[1000px] px-4 py-14 sm:px-6 lg:px-0">
      <Stagger className="grid grid-cols-2 gap-5 text-center sm:grid-cols-4">
        {STATS.map(({ value, label }) => (
          <StaggerItem
            key={label}
            className="flex flex-col items-center text-center"
          >
            <div className="text-[30px] font-extrabold tracking-tight text-[#2a5be0]">
              {value}
            </div>
            <div className="mt-1 text-[12px] text-[#6b7490]">{label}</div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
