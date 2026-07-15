import { FadeIn } from "@/components/motion/fade-in"
import { CallbackTrigger } from "@/components/callback/callback-trigger"

export function CallbackCtaSection() {
  return (
    <section className="bg-[linear-gradient(90deg,#1c3a8f,#2a5be0)] py-11 text-white">
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-0">
        <FadeIn className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <h2 className="text-[20px] font-extrabold">
              Not sure which plan fits you?
            </h2>
            <p className="mt-1.5 text-[13px] text-white/85">
              Request a callback - our team will guide you in minutes.
            </p>
          </div>
          <CallbackTrigger className="inline-flex items-center rounded-[10px] bg-white px-[26px] py-[13px] text-[13px] font-bold text-[#1c46c2] transition-colors hover:bg-[#f0f5ff]">
            Get a callback
          </CallbackTrigger>
        </FadeIn>
      </div>
    </section>
  )
}
