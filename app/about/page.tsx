import { AboutSection } from "@/components/sections/about-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-6xl font-light mb-12">About Us</h1>
      </div>
      <AboutSection />
      <TestimonialsSection />
    </main>
  )
}
