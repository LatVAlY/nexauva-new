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
      {/* Glow (bottom) - Enhanced to spread outward with larger gradient and smoother expansion */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -bottom-2 inset-x-4 h-12 rounded-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-60",
          "blur-[15px] bg-[radial-gradient(25%_50%_at_50%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]",
          "group-hover:inset-x-0 group-hover:-bottom-4 group-hover:h-20 group-hover:blur-[35px] group-hover:opacity-100",
          "group-hover:bg-[radial-gradient(120%_200%_at_50%_100%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]"
        )}
      />

      {/* Stroke highlight - Enhanced gradient spread for fuller coverage */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-lg transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-50",
          "bg-[radial-gradient(20.7%_50%_at_50%_100%,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0)_100%)]",
          "group-hover:opacity-100",
          "group-hover:bg-[radial-gradient(80%_150%_at_50%_100%,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0)_100%)]"
        )}
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