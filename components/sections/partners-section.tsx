import { Stagger, StaggerItem } from "@/components/motion/stagger"

const PARTNERS = [
  "bKash",
  "Nagad",
  "Grameenphone",
  "BRAC Bank",
  "City Bank",
  "Pragati Life",
]

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="mx-auto w-full max-w-[1240px] px-4 pb-11 sm:px-6 lg:px-0"
    >
      <p className="mb-4 text-center text-[10.5px] font-extrabold tracking-[.14em] text-[#8b96b8] uppercase">
        Trusted by leading partners
      </p>
      <Stagger className="flex flex-wrap justify-center gap-3">
        {PARTNERS.map((p) => (
          <StaggerItem key={p}>
            <div className="flex items-center justify-center rounded-[9px] bg-[#f1f3f9] px-5 py-[9px] text-[12px] font-bold text-[#3c4257] transition-colors hover:bg-[#e6eaf4]">
              {p}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  )
}
