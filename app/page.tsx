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
import { DiscoverySection } from "@/components/sections/discovery-section";
import { BookingServicesSection } from "@/components/sections/booking-services-section";
import { HealthRecordsSection } from "@/components/sections/health-records-section";
import { TrustSection } from "@/components/sections/trust-section";
import { PartnerWithUsSection } from "@/components/sections/partner-with-us-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CoverageAppSection } from "@/components/sections/coverage-app-section";
import { HealthCardPromo } from "@/components/sections/health-card-promo";

export default function Home() {
  return (
    <CallbackProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        <AnnouncementBar />
        {/*
          Section order follows the patient journey: discover -> understand
          what is bookable -> understand the Health Card -> meet the doctors ->
          see how it works -> what else is offered -> what you keep -> why to
          trust it -> who else can join -> proof -> questions -> where/how.

          Backgrounds alternate white / #f6f8fd. If you reorder, re-check the
          `bg-` class on each section so the alternation still holds.
        */}
        <main className="flex-1">
          <HeroBanner />
          <OffersRail />
          <QuickActions />
          <StatsSection />
          <DiscoverySection />
          <BookingServicesSection />
          <HealthCardPromo />
          <PlansSection />
          <SpecialistsSection />
          <HowItWorksSection />
          <ServiceSection />
          {/* <HealthRecordsSection /> */}
          <TrustSection />
          <PartnerWithUsSection />
          <TestimonialsSection />
          <FaqSection />
          <CoverageAppSection />
          <PartnersSection />
          {/* <MediaSection /> */}
          <CallbackCtaSection />
        </main>
        <SiteFooter />
      </div>
    </CallbackProvider>
  );
}
