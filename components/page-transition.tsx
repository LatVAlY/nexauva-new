"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {/* Content transition */}
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: -28, filter: "blur(8px)", scale: 0.995 }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
          exit={{
            opacity: 0,
            y: 28,
            filter: "blur(8px)",
            scale: 0.995,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          transition={{ duration: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>

        {/* Bright white metallic matte wipe */}
        <motion.div
          key={`wipe-${pathname}`}
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[60]"
          initial={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0.0,
          }}
          animate={{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
            opacity: 0.0,
          }}
          exit={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            opacity: 1,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: `
              linear-gradient(
                120deg,
                rgba(255,255,255,0.95) 0%,
                rgba(255,255,255,0.9) 20%,
                rgba(255,255,255,0.85) 40%,
                rgba(255,255,255,0.9) 60%,
                rgba(255,255,255,0.95) 80%,
                rgba(255,255,255,1) 100%
              )
            `,
            WebkitMaskImage:
              "linear-gradient(300deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)",
            maskImage:
              "linear-gradient(300deg, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 90%)",
            mixBlendMode: "screen",
            filter: "contrast(1.3) brightness(1.25)",
            backdropFilter: "blur(10px)",
          }}
        />
      </AnimatePresence>
    </div>
  )
}
