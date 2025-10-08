"use client"

import { useState } from "react"

export function RealTimeIntelligenceCard() {
  const [loading, setLoading] = useState(false)

  const handleResearch = () => {
    if (loading) return
    setLoading(true)
    window.setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="relative border border-[rgba(216,231,242,0.07)] rounded-2xl p-6 md:p-8 shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] overflow-hidden bg-gradient-to-b from-[#060910] to-[#04070d] h-full flex flex-col">
      {/* Main Container */}
      <div className="relative bg-[rgb(4,7,13)] border border-[rgba(216,231,242,0.07)] rounded-2xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] flex-1 flex flex-col">
        {/* Scaled Graphic */}
        <div className="will-change-transform opacity-100 scale-90 origin-center md:scale-100">
          <div className="relative">
            {/* Blur Overlays (underneath) */}
            <div className="absolute inset-0 bg-[rgb(16,19,28)] backdrop-blur-[1px] rounded-xl shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.15)] opacity-100" />
            <div className="absolute inset-0 bg-[rgb(13,15,23)] rounded-xl shadow-[inset_0_1px_1px_0_rgba(207,231,255,0.15)] opacity-100" />
            <div className="absolute inset-0 bg-[rgb(20,20,20)] rounded-xl shadow-[0_-0.796192px_0.796192px_-0.9375px_rgba(0,0,0,0.15),0_-2.41451px_2.41451px_-1.875px_rgba(0,0,0,0.14),0_-6.38265px_6.38265px_-2.8125px_rgba(0,0,0,0.12),0_-20px_20px_-3.75px_rgba(0,0,0,0.05)] opacity-100" />

            {/* Screen Element */}
            <div className="border border-[rgb(16,19,28)] bg-gradient-to-b from-[rgb(16,19,28)] to-black rounded-xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] relative overflow-hidden z-10">
              {/* Search Bar */}
              <div className="m-4 border border-[rgba(216,231,242,0.07)] backdrop-blur-[1px] bg-[rgb(4,7,13)] rounded-[32px] shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] p-4 flex flex-col">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <p className="text-white text-sm font-medium flex-1">Research anything...</p>
                </div>
                <div className="h-px bg-gray-600 rounded-full" />
                {/* Research Button */}
                <button
                  type="button"
                  onClick={handleResearch}
                  className="mt-3 bg-gradient-to-r from-gray-300 to-[rgba(213,219,230,0.7)] rounded-[30px] p-2 focus:outline-none"
                  aria-live="polite"
                >
                  <span className="text-gray-800 text-xs font-medium text-center block">
                    {loading ? "Searching..." : "Research"}
                  </span>
                </button>
              </div>

              {/* Suggestions */}
              <div className="p-4 space-y-2">
                {/* Suggestion 1 */}
                <div className="border border-[rgba(216,231,242,0.07)] bg-[rgb(4,7,13)] rounded-lg shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] -translate-x-1/2 flex items-center gap-2 p-2 transition-transform duration-200 hover:scale-105">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <p className="text-white text-xs flex-1">Software & App Industry</p>
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.214 4.5H17.357V9.643H12.214V4.5ZM17.357 4.5L10.093 11.764C9.973 11.882 9.811 11.948 9.643 11.948C9.475 11.948 9.313 11.882 9.193 11.764L6.236 8.807C6.116 8.689 5.954 8.623 5.786 8.623C5.618 8.623 5.456 8.689 5.336 8.807L0.643 13.5H17.357V4.5Z" fill="transparent" stroke="rgb(194, 194, 194)" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Suggestion 2 */}
                <div className="border border-[rgba(216,231,242,0.07)] bg-[rgb(4,7,13)] rounded-lg shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] flex items-center gap-2 p-2 transition-transform duration-200 hover:scale-105">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <p className="text-white text-xs flex-1">UX & UI Design Industry</p>
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.214 4.5H17.357V9.643H12.214V4.5ZM17.357 4.5L10.093 11.764C9.973 11.882 9.811 11.948 9.643 11.948C9.475 11.948 9.313 11.882 9.193 11.764L6.236 8.807C6.116 8.689 5.954 8.623 5.786 8.623C5.618 8.623 5.456 8.689 5.336 8.807L0.643 13.5H17.357V4.5Z" fill="transparent" stroke="rgb(194, 194, 194)" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {/* Suggestion 3 */}
                <div className="border border-[rgba(216,231,242,0.07)] bg-[rgb(4,7,13)] rounded-lg shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] -translate-x-1/2 flex items-center gap-2 p-2 transition-transform duration-200 hover:scale-105">
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                  <p className="text-white text-xs flex-1">High Converting Customer</p>
                  <svg className="w-4 h-4 text-gray-500 flex-shrink-0" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.214 4.5H17.357V9.643H12.214V4.5ZM17.357 4.5L10.093 11.764C9.973 11.882 9.811 11.948 9.643 11.948C9.475 11.948 9.313 11.882 9.193 11.764L6.236 8.807C6.116 8.689 5.954 8.623 5.786 8.623C5.618 8.623 5.456 8.689 5.336 8.807L0.643 13.5H17.357V4.5Z" fill="transparent" stroke="rgb(194, 194, 194)" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text Container */}
          <div className="flex flex-col justify-center space-y-6 relative p-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold leading-tight">Real-Time Intelligence</h3>
              <p className="text-muted-foreground text-base leading-relaxed">Make smarter decisions with live data insights. Tap into real-time data</p>
            </div>
            {/* Bottom Overlay Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#04070d] to-transparent" />
          </div>

          {/* Light Gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,transparent_100%)] opacity-10 rounded-2xl pointer-events-none" />
        </div>
      </div>
    </div>
  )
}
