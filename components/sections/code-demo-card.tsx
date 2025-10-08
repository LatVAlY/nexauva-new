"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export function CodeDemoCard() {
  const codeContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [delta, setDelta] = useState(0)

  useEffect(() => {
    const container = codeContainerRef.current
    if (!container) return

    const lines = Array.from(container.querySelectorAll<HTMLElement>(".code-line"))
    const timeouts: number[] = []

    // Disable any user input on scroll container (we're animating transform)
    container.style.pointerEvents = "none"
    container.style.overscrollBehavior = "none"
    container.style.scrollBehavior = "auto"

    // Reveal lines gradually (opacity/transform only)
    lines.forEach((line, index) => {
      line.style.willChange = "opacity, transform"
      const id = window.setTimeout(() => {
        line.classList.add("visible")
      }, 300 + index * 80)
      timeouts.push(id)
    })

    // Measure content and viewport to compute translate distance
    const measure = () => {
      const viewport = codeContainerRef.current
      const content = contentRef.current
      if (!viewport || !content) return
      const d = Math.max(0, content.scrollHeight - viewport.clientHeight)
      setDelta(d)
    }

    measure()

    // Observe resizes to keep animation smooth
    const ro = new ResizeObserver(() => measure())
    if (codeContainerRef.current) ro.observe(codeContainerRef.current)
    if (contentRef.current) ro.observe(contentRef.current)

    const onResize = () => measure()
    window.addEventListener("resize", onResize)

    return () => {
      timeouts.forEach((id) => window.clearTimeout(id))
      ro.disconnect()
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Speed in px/sec; duration derived from delta
  const SPEED = 45
  const duration = Math.max(6, delta / SPEED)

  return (
    <div className="relative border border-[#d8e7f2]/10 rounded-2xl p-6 md:p-8 shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.2)] overflow-hidden bg-gradient-to-b from-[#060910] to-[#04070d] h-full flex flex-col">
      <div className="grid grid-cols-1 gap-8 items-start">
        {/* Left: Code Editor */}
        <div className="bg-black rounded-xl relative max-h-[500px]">
          <div className="absolute inset-0 bg-[#10131c]/30 backdrop-blur-sm rounded-xl shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.15)]" />

          {/* Top Bar */}
          <div className="relative z-10 bg-gradient-to-b from-[#10131c] to-black shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] p-3 rounded-t-xl">
            <div className="flex gap-2 mb-3 opacity-30">
              <div className="w-4 h-4 bg-[#545b7d] rounded-full" />
              <div className="w-4 h-4 bg-[#555878] rounded-full" />
              <div className="w-4 h-4 bg-[#555878] rounded-full" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 bg-[#10131c] rounded-lg px-3 py-2 border border-[#d8e7f2]/7">
                <span className="text-sm font-medium text-gray-300 truncate">ai_agent.py</span>
              </div>
              <div className="flex items-center gap-1 bg-[#10131c] rounded-md px-2 py-1 border border-[#d8e7f2]/7">
                <span className="text-xs font-medium bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                  Code
                </span>
              </div>
            </div>
          </div>

          {/* Code Window */}
          <div className="relative z-10 flex h-[280px] overflow-hidden">
            <div className="flex-1 relative bg-gradient-to-b from-[#10131c] to-black p-4">
              <div
                ref={codeContainerRef}
                className="code-container font-mono text-xs leading-[1.4] relative pr-4"
                style={{
                  overflow: "hidden",
                  height: "240px",
                  maskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 40%)",
                }}
              >
                <motion.div
                  id="code-lines"
                  ref={contentRef}
                  className="space-y-0.5 will-change-transform"
                  animate={delta > 0 ? { y: [0, -delta] } : { y: 0 }}
                  transition={
                    delta > 0
                      ? { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" }
                      : { duration: 0 }
                  }
                >
                  {[
                    'class AutomationAgent:',
                    '    def __init__(self, activation_limit):',
                    '        self.activation_limit = activation_limit',
                    '        self.current_mode = "idle"',
                    '',
                    '    def evaluate_task(self, workload_value):',
                    '        if (workload_value > self.activation_limit):',
                    '            self.current_mode = "engaged"',
                    '            return "Agent activated!"',
                    '        else:',
                    '            return "Agent idle."',
                    '',
                    '    def get_current_mode(self):',
                    '        return f"Mode: {self.current_mode}"',
                    '',
                    '# --- Additional AI logic ---',
                    '    def plan(self, objectives):',
                    '        print("Planning objectives:", objectives)',
                    '        self.plan_steps = [f"Step {i}" for i, _ in enumerate(objectives)]',
                    '        return self.plan_steps',
                    '',
                    '    def execute(self):',
                    '        if self.current_mode != "engaged":',
                    '            return "Cannot execute: agent is idle"',
                    '        for step in getattr(self, "plan_steps", []):',
                    '            print("Executing", step)',
                    '        return "Execution complete"',
                    '',
                    '    def shutdown(self):',
                    '        self.current_mode = "shutdown"',
                    '        return "Agent safely powered off."',
                    '',
                    '# --- System Monitor ---',
                    'def system_monitor(agent):',
                    '    print("Monitoring agent state...")',
                    '    print(agent.get_current_mode())',
                    '    if agent.current_mode == "shutdown":',
                    '        print("System ready for restart.")',
                  ].map((line, i) => (
                    <div key={i} className="code-line text-gray-300 whitespace-pre">
                      {line}
                    </div>
                  ))}
                </motion.div>
                <div className="glow-shine" />
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#04070d] via-[#04070d]/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="flex flex-col justify-center space-y-6 relative">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold leading-tight">Custom AI & Software Development</h3>
            <p className="text-muted-foreground text-base leading-relaxed">
              We create software solutions designed to meet your specific business requirements, featuring modern architecture and scalable technology stacks.
            </p>
          </div>
        </div>
      </div>

      {/* Light effect */}
      <div className="absolute -top-4 -right-4 w-1/2 h-1/2 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,_rgba(184,199,217,0.3)_0%,_transparent_100%)] rounded-2xl light-pulse pointer-events-none" />

      <style jsx>{`
        .code-line {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .code-line.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .code-container::-webkit-scrollbar {
          display: none;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        .light-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .glow-shine {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
          animation: shine 3s infinite linear;
          pointer-events: none;
        }
      `}</style>
    </div>
  )
}
