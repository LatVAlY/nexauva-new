import { HeroSection } from "@/components/sections/hero-section"
import HeroBackground from "@/components/sections/hero-background"
import { FeaturesSection } from "@/components/sections/features-section"
import { ConsultingSection } from "@/components/sections/consulting-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { ProcessJourney } from "@/components/process-journey"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TeamSection } from "@/components/sections/team-section"
import { ContactCTASection } from "@/components/sections/contact-cta-section"
import FAQSection from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen relative">
      {/* Full-page 3D background — sticky viewport layer, the ships cruise behind every section */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <HeroBackground />
      </div>
      <div className="relative z-10 -mt-[100vh]">
        <HeroSection />
        <FeaturesSection />
        <IntegrationsSection />
        <section id="process" className="py-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <ProcessJourney />
          </div>
        </section>
        <ConsultingSection />
        {/* <ProjectsSection /> */}
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactCTASection />
      </div>
    </main>
  )
}
