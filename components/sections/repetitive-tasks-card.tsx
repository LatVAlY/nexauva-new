"use client"

import { useEffect, useRef } from "react"

export function RepetitiveTasksCard() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  // Refs to manage animation state without rerenders
  const currentIndexRef = useRef(1)
  const directionRef = useRef(1)
  const isTransitioningRef = useRef(false)
  const autoScrollTimeoutRef = useRef<number | null>(null)

  const itemHeight = 80 // h-16 (64px) + gap-4 (16px)
  const transitionDuration = 600
  const pauseDuration = 1500

  useEffect(() => {
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const items = Array.from(track.querySelectorAll<HTMLElement>(".carousel-item"))

    const clearAuto = () => {
      if (autoScrollTimeoutRef.current) {
        window.clearTimeout(autoScrollTimeoutRef.current)
        autoScrollTimeoutRef.current = null
      }
    }

    const scheduleNextAutoScroll = () => {
      clearAuto()
      autoScrollTimeoutRef.current = window.setTimeout(() => {
        if (!isTransitioningRef.current) {
          advanceAuto()
        } else {
          window.setTimeout(scheduleNextAutoScroll, 100)
        }
      }, pauseDuration)
    }

    const updateCarousel = () => {
      isTransitioningRef.current = true
      const y = -currentIndexRef.current * itemHeight
      track.style.transform = `translateY(${y}px)`

      // Update class intensity based on distance to center
      items.forEach((el, idx) => {
        const distance = Math.abs(idx - currentIndexRef.current)
        el.classList.remove("active", "near", "far")
        if (distance === 0) el.classList.add("active")
        else if (distance === 1) el.classList.add("near")
        else el.classList.add("far")
      })

      window.setTimeout(() => {
        isTransitioningRef.current = false
      }, transitionDuration)
    }

    const advanceAuto = () => {
      if (isTransitioningRef.current) return
      let nextIndex = currentIndexRef.current + directionRef.current
      if (nextIndex >= items.length) {
        nextIndex = items.length - 2
        directionRef.current = -1
      } else if (nextIndex < 0) {
        nextIndex = 1
        directionRef.current = 1
      }
      currentIndexRef.current = nextIndex
      updateCarousel()
      scheduleNextAutoScroll()
    }

    // Initialize and start
    updateCarousel()
    const start = window.setTimeout(advanceAuto, 1500)

    return () => {
      clearAuto()
      window.clearTimeout(start)
    }
  }, [])

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

            {/* Screen Element with Vertical Auto-Scroll Carousel */}
            <div className="border border-[rgb(16,19,28)] bg-gradient-to-b from-[rgb(16,19,28)] to-black rounded-xl shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.15)] relative overflow-hidden z-10 flex items-center justify-center p-4">
              <div ref={containerRef} className="carousel-container relative w-48 h-80 mx-auto">
                <div ref={trackRef} className="carousel-track flex flex-col gap-4">
                  {/* Task Items */}
                  <div className="carousel-item flex items-center bg-[#0a0f1a] rounded-lg p-3 h-16">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                    </svg>
                    <p className="text-sm font-medium text-gray-300 ml-3 flex-1 truncate">Social media post</p>
                  </div>
                  <div className="carousel-item flex items-center bg-[#0a0f1a] rounded-lg p-3 h-16">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                    <p className="text-sm font-medium text-gray-300 ml-3 flex-1 truncate">Employee Tracking</p>
                  </div>
                  <div className="carousel-item flex items-center bg-[#0a0f1a] rounded-lg p-3 h-16">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <p className="text-sm font-medium text-gray-300 ml-3 flex-1 truncate">Payment reminder</p>
                  </div>
                  <div className="carousel-item flex items-center bg-[#0a0f1a] rounded-lg p-3 h-16">
                    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                    <p className="text-sm font-medium text-gray-300 ml-3 flex-1 truncate">Cost Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col justify-center space-y-6 relative p-6">
          <div className="space-y-4">
            <h3 className="text-3xl font-semibold leading-tight">Automate repetitive tasks</h3>
            <p className="text-muted-foreground text-base leading-relaxed">We help you streamline internal operations by automating manual workflows</p>
          </div>
          {/* Bottom Overlay Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#04070d] to-transparent" />
        </div>

        {/* Light Gradient */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(50%_50%_at_93.7%_8.1%,rgba(184,199,217,0.5)_0%,transparent_100%)] opacity-10 rounded-2xl pointer-events-none" />
      </div>

      {/* Scoped styles for the carousel */}
      <style jsx>{`
        .carousel-item {
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          perspective: 1200px;
          transform-style: preserve-3d;
          transform-origin: center;
          width: 100%;
          box-shadow: inset 0 1px 1px 0 rgba(207, 231, 255, 0.2);
        }
        .carousel-item.active {
          transform: scale(1.2, 1.4);
          filter: blur(0px);
          z-index: 10;
          border-left-color: rgba(216, 231, 242, 0.4);
          border-right-color: rgba(216, 231, 242, 0.4);
          border-top-color: rgba(216, 231, 242, 0.4);
          border-bottom-color: rgba(216, 231, 242, 0.4);
        }
        .carousel-item.near {
          transform: scale(1.04, 1.08);
          filter: blur(0.5px);
          z-index: 5;
        }
        .carousel-item.far {
          transform: scale(1);
          filter: blur(1.5px);
          z-index: 1;
        }
        .carousel-container {
        //   overflow-y: hidden;
          overflow-x: visible;
          perspective: 1200px;
        }
        .carousel-track {
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>
    </div>
  )
}
