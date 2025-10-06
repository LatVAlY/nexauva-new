import { HeroSection } from "@/components/sections/hero-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ConsultingSection } from "@/components/sections/consulting-section"
import { IntegrationsSection } from "@/components/sections/integrations-section"
import { InteractiveProcessSection } from "@/components/interactive-process-section"
import { ProjectsSection } from "@/components/sections/projects-section"
// import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { TeamSection } from "@/components/sections/team-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      <InteractiveProcessSection />
      <ConsultingSection />
      <ProjectsSection />
      {/* <AboutSection /> */}
      <TeamSection />
      <TestimonialsSection />
    </main>
  )
}
