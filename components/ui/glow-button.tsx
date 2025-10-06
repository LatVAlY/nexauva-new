"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { type ReactNode } from "react"

interface GlowButtonProps {
  href: string
  children: ReactNode
  className?: string
  target?: string
  rel?: string
  ariaLabel?: string
}

export function GlowButton({ href, children, className, target = "_blank", rel = "noopener noreferrer", ariaLabel }: GlowButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={cn(
        // Container styles (match Framer: bg-white/5, radius 8px)
        "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg px-6 py-3",
        "bg-white/5 hover:bg-white/10 transition-colors duration-300",
        // Typography
        "text-sm sm:text-base font-medium text-white",
        className,
      )}
    >
      {/* Glow (bottom) */}
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-2 inset-x-4 h-12 rounded-lg blur-[15px] transition-all duration-500 ease-out group-hover:inset-x-0 group-hover:h-16 group-hover:blur-[25px] group-hover:opacity-100"
        style={{
          background: "radial-gradient(25% 50% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)",
          opacity: 0.8,
        }}
      />

      {/* Stroke highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-500 ease-out opacity-60 group-hover:opacity-100"
        style={{
          background: "radial-gradient(20.7% 50% at 50% 100%, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0) 100%)",
        }}
      />

      {/* Subtle outline */}
      <span aria-hidden className="absolute inset-0 rounded-lg ring-1 ring-white/10" />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Link>
  )
}
