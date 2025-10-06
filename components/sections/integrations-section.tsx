"use client"

import { useEffect, useRef } from "react"
import {
  Github,
  Slack,
  Figma,
  FileText,
  CreditCard,
  Table,
  Zap,
  BoomBox as Dropbox,
  Cloud,
  Triangle,
  Layers,
  Circle,
} from "lucide-react"

const carouselConfigs = [
  {
    id: "carousel-1",
    direction: "left" as const,
    speed: 40,
    icons: [
      { Icon: Github, name: "GitHub" },
      { Icon: Slack, name: "Slack" },
      { Icon: Figma, name: "Figma" },
      { Icon: FileText, name: "Notion" },
    ],
  },
  {
    id: "carousel-2",
    direction: "right" as const,
    speed: 90,
    icons: [
      { Icon: CreditCard, name: "Stripe" },
      { Icon: Table, name: "Airtable" },
      { Icon: Zap, name: "Zapier" },
      { Icon: Dropbox, name: "Dropbox" },
    ],
  },
  {
    id: "carousel-3",
    direction: "left" as const,
    speed: 60,
    icons: [
      { Icon: Cloud, name: "AWS" },
      { Icon: Triangle, name: "Vercel" },
      { Icon: Layers, name: "Netlify" },
      { Icon: Circle, name: "Supabase" },
    ],
  },
]

function MarqueeCarousel({ config }: { config: (typeof carouselConfigs)[0] }) {
  const ulRef = useRef<HTMLUListElement>(null)
  const originalContentRef = useRef<string>("")

  useEffect(() => {
    const ul = ulRef.current
    if (!ul || ul.children.length === 0) return

    const container = ul.closest("section") || ul.parentElement
    if (!container) return

    // Store original content
    if (!originalContentRef.current) {
      originalContentRef.current = ul.innerHTML
    } else {
      ul.innerHTML = originalContentRef.current
    }

    const originalWidth = ul.scrollWidth

    // Duplicate content for seamless loop
    ul.innerHTML += originalContentRef.current

    // Ensure enough content for wide screens
    while (ul.scrollWidth < container.clientWidth * 2) {
      ul.innerHTML += originalContentRef.current
    }

    // Set CSS variables for animation
    ul.style.setProperty("--distance", `${originalWidth}px`)
    const duration = Math.max(1, originalWidth / config.speed)
    ul.style.animationName = config.direction === "left" ? "marquee-left" : "marquee-right"
    ul.style.animationDuration = `${duration}s`
    ul.style.animationTimingFunction = "linear"
    ul.style.animationIterationCount = "infinite"

    const handleResize = () => {
      if (ul && originalContentRef.current) {
        ul.innerHTML = originalContentRef.current
        const newOriginalWidth = ul.scrollWidth
        ul.innerHTML += originalContentRef.current
        while (ul.scrollWidth < (container?.clientWidth || 0) * 2) {
          ul.innerHTML += originalContentRef.current
        }
        ul.style.setProperty("--distance", `${newOriginalWidth}px`)
        const newDuration = Math.max(1, newOriginalWidth / config.speed)
        ul.style.animationDuration = `${newDuration}s`
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [config.speed, config.direction])

  return (
    <section className="mask-fade overflow-hidden relative h-[52px]">
      <ul
        ref={ulRef}
        className="flex list-none m-0 p-0 gap-[60px] absolute left-0 top-0 will-change-transform"
        style={{ height: "52px" }}
      >
        {config.icons.map((item, index) => (
          <li key={index} className="flex-shrink-0 w-[54px] h-[52px]">
            <div className="w-full h-full icon-bg flex items-center justify-center rounded-lg">
              <item.Icon className="w-6 h-6 icon-fill" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-20 relative">
      <div className="absolute inset-0 border border-border/50 pointer-events-none rounded-full" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-muted rounded-full -rotate-[13deg] opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full badge-bg mb-4 mx-auto max-w-fit">
            <svg className="w-4 h-4 mr-2 icon-fill" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" />
            </svg>
            <p className="text-xs font-medium uppercase tracking-widest">INTEGRATIONS</p>
          </div>

          <div>
            <h2 className="font-serif-italic text-center leading-tight mb-0 gradient-title">
              <span className="font-sans-medium not-italic">Seamless </span>Integrations
            </h2>
          </div>

          <div className="mt-4">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Interact with all your favorite software without unnecessary fuss
            </p>
          </div>
        </div>

        {/* Integrations Carousels */}
        <div className="space-y-8">
          {carouselConfigs.map((config) => (
            <MarqueeCarousel key={config.id} config={config} />
          ))}

          {/* Light decorative div */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full" />
        </div>

        {/* Quote */}
        <div className="text-center mt-16 opacity-70">
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "Our AI automation plugs into your stack to create a unified, intelligent workflow"
          </p>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%);
        }
        
        .gradient-title {
          background-image: linear-gradient(161deg, rgb(var(--foreground)) 51.66%, rgb(var(--background)) 166%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-size: 44px;
        }
        
        .badge-bg {
          background-color: rgb(var(--background));
          border: 1px solid rgba(216, 231, 242, 0.07);
        }
        
        .icon-bg {
          background-color: hsl(var(--muted));
          box-shadow: inset 0 1px 1px rgba(207, 231, 255, 0.2);
        }
        
        .icon-fill {
          color: rgb(var(--foreground));
        }
        
        .font-serif-italic {
          font-family: "Instrument Serif", serif;
          font-style: italic;
        }
        
        .font-sans-medium {
          font-family: "Inter", sans-serif;
          font-weight: 500;
          font-style: normal;
        }
        
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--distance))); }
        }
        
        @keyframes marquee-right {
          0% { transform: translateX(calc(-1 * var(--distance))); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  )
}
