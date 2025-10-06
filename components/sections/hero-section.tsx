"use client"

import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import HeroBackground from "@/components/sections/hero-background"
import { GlowButton } from "@/components/ui/glow-button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background animation scoped to hero only */}
      <HeroBackground />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-balance font-bold">Nexauva</span>
            <br />
            <span className="font-serif italic text-muted-foreground text-5xl sm:text-6xl">
              Where Ideas Meet Intelligence
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Unlock the full potential of Artificial Intelligence with expert guidance in infrastructure, integration,
            and scalable system design
          </p>

          {/* CTA Button - Framer-like Glow */}
          <div
            className={`flex items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <GlowButton
              href="https://calendly.com/hello-nexauva/30min"
              ariaLabel="Book a free call on Calendly"
              className="bg-white/5 rounded-lg"
            >
              <span>Book A Free Call</span>
              <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
