"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function BackToTop() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 400)
  })

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      window.scrollTo(0, 0)
    }
  }

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      initial={false}
      animate={visible ? "show" : "hide"}
      variants={{
        show: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" },
        hide: { opacity: 0, y: 12, scale: 0.95, pointerEvents: "none" },
      }}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Glow backdrop */}
      <motion.span
        aria-hidden
        className="absolute -inset-3 rounded-full opacity-0 blur-lg group-hover:opacity-70 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Button core */}
      <span
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors duration-300 ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] backdrop-blur"
      >
        {/* subtle inner glow */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(40% 60% at 50% 60%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)",
          }}
        />
        {/* Icon */}
        <svg
          className="relative z-10 h-5 w-5 text-white/90 group-hover:text-white transition-colors"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7-7 7 7" />
        </svg>
      </span>
    </motion.button>
  )
}
