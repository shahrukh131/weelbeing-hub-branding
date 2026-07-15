import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CallbackProvider } from "@/components/callback/callback-provider";
import { HeroBanner } from "@/components/sections/hero-banner";
import { QuickActions } from "@/components/sections/quick-actions";
import { StatsSection } from "@/components/sections/stats-section";
import { PlansSection } from "@/components/sections/plans-section";
import { SpecialistsSection } from "@/components/sections/specialists-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ServiceSection } from "@/components/sections/service-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { PartnersSection } from "@/components/sections/partners-section";
import { MediaSection } from "@/components/sections/media-section";
import { CallbackCtaSection } from "@/components/sections/callback-cta-section";
import { AnnouncementBar } from "@/components/sections/announcement-bar";
import { OffersRail } from "@/components/sections/offers-rail";

export default function Home() {
  return (
    <CallbackProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <AnnouncementBar />
        <main className="flex-1">
          <HeroBanner />
          <OffersRail />
          <QuickActions />
          <StatsSection />
          <PlansSection />
          <SpecialistsSection />
          <HowItWorksSection />
          <ServiceSection />
          <TestimonialsSection />
          <PartnersSection />
          <MediaSection />
          <CallbackCtaSection />
        </main>
        <SiteFooter />
      </div>
    </CallbackProvider>
  );
}
