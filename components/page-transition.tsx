"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

/**
 * PageTransition
 * Wraps route children and animates between pathnames using AnimatePresence.
 * Combines a subtle content transform with a glossy wipe overlay for a premium feel.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {/* Content transition */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 28, filter: "blur(8px)", scale: 0.995 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{ opacity: 0, y: -28, filter: "blur(8px)", scale: 0.995, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          transition={{ duration: 0.100, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>

        {/* Glossy diagonal wipe accent on route change */}
        <motion.div
          key={`wipe-${pathname}`}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60]"
          initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", opacity: 0.0 }}
          animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", opacity: 0.0 }}
          exit={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background:
              "conic-gradient(from 210deg at 10% 0%, rgba(99,102,241,0.18), rgba(236,72,153,0.18), rgba(14,165,233,0.18))",
            WebkitMaskImage:
              "linear-gradient(120deg, rgba(0,0,0,0) 15%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 85%)",
            maskImage:
              "linear-gradient(120deg, rgba(0,0,0,0) 15%, rgba(0,0,0,0.9) 40%, rgba(0,0,0,0.9) 60%, rgba(0,0,0,0) 85%)",
            mixBlendMode: "screen",
          }}
        />
      </AnimatePresence>
    </div>
  )
}
