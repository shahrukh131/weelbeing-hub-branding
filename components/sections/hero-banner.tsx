import { FadeIn } from "@/components/motion/fade-in"
import { CallbackTrigger } from "@/components/callback/callback-trigger"
import { FeaturedPromo } from "@/components/sections/featured-promo"

export function HeroBanner() {
  return (
    <section id="home" className="bg-[linear-gradient(180deg,#f6f8fd,#fff)]">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:px-0">
        <FadeIn direction="right">
          <span className="mb-2 block text-[10.5px] font-extrabold tracking-[.14em] text-[#2a5be0] uppercase">
            Solutions for better health
          </span>
          <h1 className="text-[36px] font-extrabold leading-[1.12] text-[#0f1b3d] sm:text-[44px]">
            Your health comes first, every time.
          </h1>
          <p className="mt-[18px] max-w-[420px] text-[14.5px] leading-[1.65] text-[#5b6478]">
            Wellbeing Hub connects Bangladeshi families with trusted doctors,
            discounted hospitals, and medicine at your doorstep - all in one
            place.
          </p>
          <div className="mt-[26px] flex flex-wrap gap-3">
            <CallbackTrigger className="inline-flex items-center rounded-[10px] bg-[#2a5be0] px-6 py-[13px] text-[13px] font-bold text-white transition-colors hover:bg-[#1c46c2]">
              Book appointment
            </CallbackTrigger>
            <CallbackTrigger className="inline-flex items-center rounded-[10px] border-[1.5px] border-[#c9d4ef] bg-white px-6 py-[13px] text-[13px] font-bold text-[#2a5be0] transition-colors hover:border-[#2a5be0] hover:bg-[#f0f5ff]">
              Get a callback
            </CallbackTrigger>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={0.1}>
          <FeaturedPromo />
        </FadeIn>
      </div>
    </section>
  )
}
