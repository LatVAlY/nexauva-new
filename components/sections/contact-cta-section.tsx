'use client'
import { Instrument_Serif } from "next/font/google"
import { GlowButton } from "../ui/glow-button"
import { ArrowRight } from "lucide-react"
import { LinkedInIcon, XIcon, CalendlyIcon } from "@/components/icons/social"
import { motion } from "framer-motion"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
})

export function ContactCTASection() {
  return (
    <section className="relative w-full p-12 flex items-center justify-center bg-black">
      <div className="w-full max-w-4xl flex flex-col items-center gap-8 relative z-10">
        {/* Tag */}
        <div className="flex items-center gap-2 px-4 py-1 bg-transparent rounded-full">
          <div className="w-2 h-1 tag-line"></div>
          <p className="text-sm italic text-gray-300 m-0">Reach out anytime</p>
          <div className="w-2 h-1 tag-line-reverse"></div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-medium leading-tight gradient-text">
          Ready to Automate Smarter? Let’s{" "}
          <span className={`${instrumentSerif.className} italic`}> Build Together</span>
        </h2>

        {/* Paragraph */}
        <p className="text-center text-gray-400 text-lg max-w-md">Schedule a Call and Begin Automating</p>

        {/* Button */}
        <div className="relative inline-block group">
          <div className="pointer-events-none absolute inset-0 btn-glow rounded-lg"></div>
          <div className="pointer-events-none absolute inset-0 btn-stroke rounded-lg"></div>
          <GlowButton
            href="https://calendly.com/hello-nexauva/30min"
            ariaLabel="Book a free call on Calendly"
            className="bg-white/5 rounded-lg"
          >
            <span>Book A Free Call</span>
            <ArrowRight className="w-4 h-4" />
          </GlowButton>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/nexauva/"
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
          <div className="w-px h-6 separation"></div>
          <a
            href="https://calendly.com/hello-nexauva/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full p-2"
            aria-label="Calendly"
          >
            <CalendlyIcon className="w-5 h-5 social-icon" />
          </a>
        </div>

        {/* Email / Contact note */}
        <p className="text-center text-gray-400 text-sm m-0">
          Prefer email?{" "}
          <motion.a
            href="/contact/#form"
            whileHover={{ x: 2, opacity: 1 }}
            whileTap={{ scale: 0.98 }}
            className="text-gray-300 underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
          >
            Reach us via the contact form
          </motion.a>
        </p>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bottom-border"></div>

      {/* BG Shape */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/4 bg-shape"></div>

      {/* Decorative Masked Area */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
      </div>

      <style jsx>{`
        .gradient-text {
          background-image: linear-gradient(161deg, rgb(213, 219, 230) 51.66%, rgb(4, 7, 13) 166%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tag-line {
          background: linear-gradient(90deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
          opacity: 0.5;
        }
        .tag-line-reverse {
          background: linear-gradient(270deg, rgb(0, 0, 0) 0%, rgb(255, 255, 255) 100%);
          opacity: 0.5;
        }
        .btn-glow {
          background: radial-gradient(25% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
          filter: blur(15px);
        }
        .btn-stroke {
          background: radial-gradient(20.7% 50% at 50% 100%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%);
        }
        .separation {
          background-color: rgba(255, 255, 255, 0.07);
        }
        .bottom-border {
          background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.07) 0%, rgb(0, 0, 0) 100%);
        }
        .bg-shape {
          background: radial-gradient(50% 50% at 50% 50%, rgba(213, 219, 230, 0.7) 0%, rgba(4, 7, 13, 0) 100%);
          border-radius: 10px;
          opacity: 0.1;
          transform: rotate(-13deg);
        }
        .social-icon {
          color: rgb(213, 219, 230);
          opacity: 0.5;
          transition: opacity 0.2s ease;
        }
        .social-icon:hover {
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
