"use client";

import { ArrowRight } from "lucide-react";
import HeroBackground from "@/components/sections/hero-background";
import { GlowButton } from "@/components/ui/glow-button";
import { LinkedInIcon, XIcon } from "../icons/social";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-15">
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
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light leading-tight mb-6"
          >
            <span className="text-balance font-bold">Nexauva</span>
            <br />
            <span className="font-serif italic text-muted-foreground text-5xl sm:text-6xl">
              Where Ideas Meet Intelligence
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Unlock the full potential of Artificial Intelligence with expert
            guidance in infrastructure, integration, and scalable system design
          </motion.p>

          {/* CTA Button - Framer-like Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <GlowButton
              href="https://calendly.com/hello-nexauva/30min"
              ariaLabel="Book a free call on Calendly"
              className="bg-white/5 rounded-lg"
            >
              <span>Book A Free Call</span>
              <ArrowRight className="w-4 h-4" />
            </GlowButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            className="flex items-center gap-4 justify-center"
          >
            <a
              href="https://www.linkedin.com/in/abdelfettah-latrache/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full p-2"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5 social-icon" />
            </a>
            <div className="w-px h-6 separation"></div>
            <a
              href="https://x.com/AbdelVA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full p-2"
              aria-label="X"
            >
              <XIcon className="w-5 h-5 social-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#features"
        aria-label="Scroll to features"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce group focus:outline-none focus:ring-2 focus:ring-white/20 rounded-full"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2 group-hover:border-white/40">
          <div className="w-1 h-2 bg-white/40 rounded-full group-hover:bg-white/60" />
        </div>
      </a>
    </section>
  );
}
