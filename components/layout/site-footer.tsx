import { Mail, MapPin, Phone } from "lucide-react"

import { Logo } from "@/components/layout/logo"

const COLUMNS = [
  {
    title: "Links",
    items: ["About Us", "Doctors", "B2B Hospital", "Services", "Media"],
  },
  {
    title: "Services",
    items: [
      "Patient Resources",
      "Payment Options",
      "Telemedicine",
      "Insurance",
      "Appointment Booking",
    ],
  },
]

const CONTACTS = [
  { icon: MapPin, value: "Dhaka, Bangladesh" },
  { icon: Phone, value: "09610 000 000" },
  { icon: Mail, value: "hello@wellbeinghub.com" },
]

const PAYMENTS = ["bKash", "Nagad", "Rocket", "VISA", "Mastercard"]

export function SiteFooter() {
  return (
    <footer className="bg-[#0b1226] text-[#aab3cc]">
      <div className="mx-auto w-full max-w-[1240px] px-4 pt-14 sm:px-6 lg:px-0">
        <div className="grid gap-10 pb-11 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-11">
          <div className="max-w-[260px]">
            <Logo white />
            <p className="mt-4 text-[12px] leading-[1.7] text-[#aab3cc]">
              A healthcare service dedicated to quality medical care and health
              services for Bangladeshi families and expatriates worldwide.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-bold text-white">{col.title}</h3>
              <ul className="mt-3 flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[12.5px] text-[#aab3cc] transition-colors hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[13px] font-bold text-white">Contact</h3>
            <ul className="mt-3 flex flex-col gap-2.5">
              {CONTACTS.map(({ icon: Icon, value }) => (
                <li key={value} className="flex items-center gap-2.5">
                  <Icon className="size-4 shrink-0 text-[#19b8a6]" />
                  <span className="text-[12.5px] text-[#aab3cc]">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-[18px] sm:flex-row">
          <p className="text-[11.5px] text-[#aab3cc]">
            © 2026 Wellbeing Hub. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {PAYMENTS.map((m) => (
              <span
                key={m}
                className="rounded-md bg-white/10 px-2.5 py-1 text-[10.5px] font-bold text-[#dfe4f2]"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
