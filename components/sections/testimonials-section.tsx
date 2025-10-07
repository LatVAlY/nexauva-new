"use client"

import { StackedTestimonialCarousel } from "@/components/stacked-testimonial-carousel"

export function TestimonialsSection() {
  return (
    <section id="testimonial" className="py-20 lg:py-20 relative scroll-mt-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">
            Hear from real users who achieved success with our automation
          </h2>
        </div>

        <StackedTestimonialCarousel />
      </div>
    </section>
  )
}
