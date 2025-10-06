"use client"

import { useEffect, useMemo, useState } from "react"
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"

interface Datum { name: string; value: number }

const initialData: Datum[] = [
  { name: "Jan", value: 12 },
  { name: "Feb", value: 19 },
  { name: "Mar", value: 3 },
  { name: "Apr", value: 5 },
  { name: "May", value: 2 },
  { name: "Jun", value: 3 },
]

export function IntelligentAnalyticsCard() {
  const [data, setData] = useState<Datum[]>(initialData)

  // Gentle auto-variation similar to the provided snippet
  useEffect(() => {
    let ticks = 0
    const id = window.setInterval(() => {
      ticks += 1
      setData((prev) => prev.map((d) => ({ ...d, value: +(d.value + (Math.random() * 2 - 1)).toFixed(2) })))
      if (ticks >= 3) window.clearInterval(id)
    }, 3000)
    return () => window.clearInterval(id)
  }, [])

  const stroke = useMemo(() => "rgba(207, 231, 255, 0.3)", []) // indigo-500
  const gridColor = "rgba(216, 231, 242, 0.07)"
  const tickColor = "rgba(255, 255, 255, 0.6)"

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

            {/* Screen Element with Charts */}
            <div className="border border-[rgb(16,19,28)] bg-gradient-to-b from-[rgb(16,19,28)] to-black rounded-xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] relative overflow-hidden z-10 h-64 flex items-center justify-center">
              <div className="w-full h-full p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="analyticsFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={stroke} stopOpacity={0.35} />
                        <stop offset="100%" stopColor={stroke} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={gridColor} strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke={tickColor} tick={{ fill: tickColor, fontSize: 12 }} tickLine={false} axisLine={{ stroke: gridColor }} />
                    <YAxis stroke={tickColor} tick={{ fill: tickColor, fontSize: 12 }} tickLine={false} axisLine={{ stroke: gridColor }} />
                    <Tooltip
                      contentStyle={{ background: "#0a0f1a", border: `1px solid ${gridColor}`, borderRadius: 8 }}
                      labelStyle={{ color: "#cfd8e3" }}
                      itemStyle={{ color: stroke }}
                      cursor={false}
                    />
                    <Line type="monotone" dataKey="value" stroke={stroke} strokeWidth={2} dot={{ r: 3, fill: stroke, stroke: "#fff" }} isAnimationActive animationDuration={2000} fill="url(#analyticsFill)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center space-y-6 relative p-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold leading-tight">Intelligent Analytics</h3>
            <p className="text-muted-foreground text-base leading-relaxed">Advanced data processing platforms that convert raw data into actionable insights through machine learning and statistical analysis.</p>
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
