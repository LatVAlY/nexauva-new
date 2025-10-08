import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ConsultingSection } from "@/components/sections/consulting-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { InteractiveProcessSection } from "@/components/interactive-process-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TeamSection } from "@/components/sections/team-section"
import { ContactCTASection } from "@/components/sections/contact-cta-section"
import FAQSection from "@/components/faq-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <InteractiveProcessSection />
      <ConsultingSection />
      {/* <ProjectsSection /> */}
      <TeamSection />
      <TestimonialsSection />
       <FAQSection />
      <ContactCTASection />
    </main>
  )
}
