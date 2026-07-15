import type { Metadata } from "next"

import { CallbackProvider } from "@/components/callback/callback-provider"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { AboutPageSection } from "@/components/sections/about-page-section"

export const metadata: Metadata = {
  title: "About Us - Wellbeing Hub",
  description:
    "Learn how Wellbeing Hub connects Bangladeshi families and expatriates with trusted doctors, hospitals, telemedicine, and healthcare support.",
}

export default function AboutPage() {
  return (
    <CallbackProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <AboutPageSection />
        <SiteFooter />
      </div>
    </CallbackProvider>
  )
}
