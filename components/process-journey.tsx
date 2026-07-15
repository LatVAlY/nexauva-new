"use client"

import { useEffect, useRef, useCallback } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Map, Rocket, TrendingUp, type LucideIcon } from "lucide-react"

type JourneyStep = {
  number: string
  title: string
  description: string
  duration: string
  icon?: LucideIcon
}

const steps: JourneyStep[] = [
  {
    number: "01",
    title: "Kickoff Call & Project Discovery",
    description:
      "We start with a call to understand your business, goals, and challenges — then dive deep into your workflows to uncover the opportunities with the highest impact.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "We turn findings into a tailored roadmap: solution design, tool selection, and a concrete plan you can hold us accountable to.",
    duration: "1 week",
    icon: Map,
  },
  {
    number: "03",
    title: "Implementation & Integration",
    description:
      "Our team builds your solution and integrates it with your existing tools, testing thoroughly at every step so everything works seamlessly.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We go live with close monitoring, train your team, and make sure everything runs smoothly from day one.",
    duration: "Launch week",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Optimization & Ongoing Support",
    description:
      "After launch we keep measuring, improving, and supporting — so the results compound over time instead of standing still.",
    duration: "Ongoing",
    icon: TrendingUp,
  },
]

// SVG coordinate system: 100 units wide, ROW_H units per step.
// The path zigzags between a left bend and a right bend, one per step.
const VIEW_W = 100
const ROW_H = 200
const VIEW_H = steps.length * ROW_H
const LEFT_X = 10
const RIGHT_X = 90

function buildPath() {
  const bends = steps.map((_, i) => ({
    x: i % 2 === 0 ? LEFT_X : RIGHT_X,
    y: i * ROW_H + ROW_H / 2,
  }))
  let d = `M ${bends[0].x} ${bends[0].y}`
  for (let i = 1; i < bends.length; i++) {
    const prev = bends[i - 1]
    const cur = bends[i]
    const midY = (prev.y + cur.y) / 2
    d += ` C ${prev.x} ${midY}, ${cur.x} ${midY}, ${cur.x} ${cur.y}`
  }
  return d
}

const PATH_D = buildPath()

export function ProcessJourney() {
  const containerRef = useRef<HTMLDivElement>(null)
  const progressPathRef = useRef<SVGPathElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.65", "end 0.65"],
  })

  const update = useCallback((v: number) => {
    const path = progressPathRef.current
    const dot = dotRef.current
    if (!path || !dot) return
    const total = path.getTotalLength()
    const len = Math.max(0.001, Math.min(v, 1) * total)
    path.style.strokeDasharray = `${total}`
    path.style.strokeDashoffset = `${total - len}`
    const pt = path.getPointAtLength(len)
    dot.style.left = `${(pt.x / VIEW_W) * 100}%`
    dot.style.top = `${(pt.y / VIEW_H) * 100}%`
  }, [])

  useEffect(() => {
    update(scrollYProgress.get())
  }, [scrollYProgress, update])

  useMotionValueEvent(scrollYProgress, "change", update)

  return (
    <div className="max-w-5xl mx-auto mb-20 mt-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-light mb-4">
          The <span className="font-serif italic text-muted-foreground">Journey</span>
        </h2>
        <p className="text-muted-foreground">Follow the path from first call to launch — and beyond</p>
      </div>

      <div ref={containerRef} className="relative">
        {/* Zigzag path (desktop) */}
        <svg
          className="absolute inset-0 w-full h-full hidden md:block pointer-events-none"
          viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d={PATH_D}
            fill="none"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1.5"
            strokeDasharray="3 6"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
          <path
            ref={progressPathRef}
            d={PATH_D}
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Traveling dot (desktop) */}
        <div
          ref={dotRef}
          className="absolute z-10 hidden md:block w-3 h-3 rounded-full bg-white shadow-[0_0_14px_5px_rgba(255,255,255,0.45)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{ left: `${LEFT_X}%`, top: `${ROW_H / 2 / VIEW_H * 100}%` }}
        />

        {/* Steps — alternating sides, one row per bend */}
        <div className="border-l border-dashed border-border ml-2 pl-8 md:border-l-0 md:ml-0 md:pl-0">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0
            return (
              <div
                key={step.number}
                className="relative grid md:grid-cols-2 items-center py-10 md:py-0 md:min-h-[400px]"
              >
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative z-10 ${isLeft ? "md:col-start-1" : "md:col-start-2"} md:px-12 lg:px-16`}
                >
                  <div className="flex items-center gap-5 mb-4">
                    <span className="text-6xl font-light text-muted-foreground/30 leading-none">{step.number}</span>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">{step.duration}</span>
                  </div>
                  <h3 className="text-2xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>

                  {step.icon && (
                    <div className="relative mt-8 h-36 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
                      <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_70%_15%,rgba(184,199,217,0.14)_0%,transparent_100%)] pointer-events-none" />
                      <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-foreground" />
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
