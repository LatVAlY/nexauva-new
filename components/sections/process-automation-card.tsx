"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

interface Row { name: string; manual: number; automated: number }

const initialData: Row[] = [
  { name: "Data Entry", manual: 40, automated: 5 },
  { name: "Invoice Processing", manual: 25, automated: 3 },
  { name: "Report Generation", manual: 15, automated: 2 },
  { name: "Customer Onboarding", manual: 30, automated: 4 },
]

export function ProcessAutomationCard() {
  const [data, setData] = useState<Row[]>(initialData)
  const [glow, setGlow] = useState(false)

  // Simulate bar animation completion glow
  useEffect(() => {
    const glowOn = window.setTimeout(() => {
      setGlow(true)
      const glowOff = window.setTimeout(() => setGlow(false), 1000)
      return () => window.clearTimeout(glowOff)
    }, 2500)
    return () => window.clearTimeout(glowOn)
  }, [])

  // Simulate real-time automation progress (shrink manual, grow automated)
  useEffect(() => {
    let ticks = 0
    const id = window.setInterval(() => {
      ticks += 1
      setData((prev) =>
        prev.map((r) => ({
          ...r,
          manual: Math.max(0, +(r.manual - 1).toFixed(2)),
          automated: +(r.automated + 0.5).toFixed(2),
        }))
      )
      if (ticks >= 3) window.clearInterval(id)
    }, 2000)
    return () => window.clearInterval(id)
  }, [])

  const manualFill = useMemo(() => "rgba(207, 231, 255, 0.3)", [])
  const manualStroke = useMemo(() => "rgba(207, 231, 255, 0.6)", [])
  const autoFill = useMemo(() => "rgba(216, 231, 242, 0.2)", [])
  const autoStroke = useMemo(() => "rgba(216, 231, 242, 0.4)", [])
  const gridColor = "rgba(216, 231, 242, 0.07)"
  const tickColor = "hsla(0, 0.00%, 100.00%, 0.60)"

  return (
    <div className="relative border border-[rgba(216,231,242,0.07)] rounded-2xl p-6 md:p-8 shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] overflow-hidden mb-16 bg-gradient-to-b from-[#060910] to-[#04070d]">
      {/* Main Container */}
      <div className="relative bg-[rgb(4,7,13)] border border-[rgba(216,231,242,0.07)] rounded-2xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)]">
        {/* Scaled Graphic */}
        <div className="will-change-transform opacity-100 scale-90 origin-center md:scale-100">
          <div className="relative">
            {/* Blur Overlays */}
            <div className="absolute inset-0 bg-[rgb(16,19,28)] backdrop-blur-[1px] rounded-xl shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.15)] opacity-100" />
            <div className="absolute inset-0 bg-[rgb(13,15,23)] rounded-xl shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.15)] opacity-100" />
            <div className="absolute inset-0 bg-[rgb(20,20,20)] rounded-xl shadow-[0_-0.796192px_0.796192px_-0.9375px_rgba(0,0,0,0.15),0_-2.41451px_2.41451px_-1.875px_rgba(0,0,0,0.14),0_-6.38265px_6.38265px_-2.8125px_rgba(0,0,0,0.12),0_-20px_20px_-3.75px_rgba(0,0,0,0.05)] opacity-100" />

            {/* Screen Element with Animated Bar Chart */}
            <div className="border border-[rgb(16,19,28)] bg-gradient-to-b from-[rgb(16,19,28)] to-black rounded-xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] relative overflow-hidden z-10 h-64 flex items-center justify-center p-4">
              <div
                className="w-full h-full transition-[filter] duration-500"
                style={glow ? { filter: "drop-shadow(0 0 10px rgba(207,231,255,0.3))" } : undefined}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={0} tick={{ fill: tickColor, fontSize: 10 }} tickLine={false} axisLine={{ stroke: gridColor }} />
                    <YAxis domain={[0, 45]} tick={{ fill: tickColor, fontSize: 10 }} tickLine={false} axisLine={{ stroke: gridColor }} />
                    <Tooltip
                      contentStyle={{ background: "#0a0f1a", border: `1px solid ${gridColor}`, borderRadius: 8 }}
                      labelStyle={{ color: "#cfd8e3" }}
                      itemStyle={{ color: "#cfd8e3" }}
                      cursor={false}
                    />
                    <Bar dataKey="manual" name="Manual Time (hours)" fill={manualFill} stroke={manualStroke} radius={[4,4,0,0]} isAnimationActive animationDuration={2500} animationEasing="ease-out" />
                    <Bar dataKey="automated" name="Automated Time (hours)" fill={autoFill} stroke={autoStroke} radius={[4,4,0,0]} isAnimationActive animationDuration={2500} animationEasing="ease-out" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center space-y-6 relative p-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold leading-tight">Process Automation</h3>
            <p className="text-muted-foreground text-base leading-relaxed">Robotic Process Automation (RPA) and intelligent workflow solutions that reduce manual tasks and optimize business processes.</p>
          </div>
          {/* Bottom Overlay Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#04070d] to-transparent" />
        </div>

        {/* Light Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,transparent_100%)] opacity-10 rounded-2xl pointer-events-none" />
      </div>
    </div>
  )
}
