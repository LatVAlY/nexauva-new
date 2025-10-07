"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Testimonial {
  name: string
  title: string
  description: string
  image: string
  stats: Array<{
    value: string
    label: string
  }>
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "Max",
    title: "Max's SaaS Revolution",
    description:
      "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
    image: "https://framerusercontent.com/images/46yWpjkwWiKJojGTr2NKnNPtJ1c.jpg",
    stats: [
      { value: "60%", label: "increase in ROI" },
      { value: "45%", label: "boost in revenue" },
    ],
    quote:
      "Transformed our operations with seamless AI integration. Costs slashed, productivity soared—pure revolution!",
  },
  {
    name: "Emily",
    title: "Emily's E-commerce Success",
    description:
      "Emily, the CEO of BloomTech, transformed their marketing efforts using AI-powered tools. This shift resulted in a 60% increase in ROI and a 45% improvement in customer personalization, leading to a surge in brand loyalty",
    image: "https://framerusercontent.com/images/GuFZFCQnRSOpKJkAPlCkaRUGIjc.png",
    stats: [
      { value: "70%", label: "growth in sales" },
      { value: "50%", label: "rise in engagement" },
    ],
    quote:
      "They grasped our pain points, knew exactly who we needed to reach, and helped us stand out. Their solutions delivered real, <span class='font-serif italic tracking-wide text-[rgb(213,219,230)]'>impactful</span> results!",
  },
  {
    name: "Sophia",
    title: "Sophia's Retail Breakthrough",
    description:
      "Sophia, the marketing lead at Trendify, used AI-driven analytics to dive deep into customer behavior. The insights led to a 40% increase in engagement and a 30% rise in repeat purchases, creating long-term customer relationships.",
    image: "https://framerusercontent.com/images/TXdiLXbrEnofSFENzswfxpdKpc.png",
    stats: [
      { value: "40%", label: "gain in retention" },
      { value: "50%", label: "surge in profits" },
    ],
    quote:
      "They listened to our needs, focused on our audience, and gave our brand a competitive edge. Their approach was strategic and highly effective!",
  },
]

export function StackedTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + 3) % 3
    const isHovered = hoveredIndex === index

    const baseStyles = {
      0: { scale: 1, translateY: 0, blur: 0, opacity: 1, z: 30 },
      1: { scale: 0.95, translateY: -60, blur: 1, opacity: 1, z: 20 },
      2: { scale: 0.9, translateY: -110, blur: 1, opacity: 1, z: 10 },
    }

    const style = baseStyles[diff as keyof typeof baseStyles]

    if (isHovered && diff !== 0) {
      return {
        transform: `scale(${style.scale}) translateY(${style.translateY - 20}px)`,
        filter: `blur(${style.blur}px)`,
        opacity: style.opacity,
        zIndex: style.z + 5,
      }
    }

    return {
      transform: `scale(${style.scale}) translateY(${style.translateY}px)`,
      filter: `blur(${style.blur}px)`,
      opacity: style.opacity,
      zIndex: style.z,
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto py-12">
      {/* Stacked Cards */}
      <div className="relative h-[500px] flex items-end justify-center mb-12" style={{ perspective: "1000px" }}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="absolute bottom-0 cursor-pointer transition-all duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={getCardStyle(index)}
            onClick={() => setCurrentIndex(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative p-6 w-full h-[400px] flex flex-col overflow-hidden rounded-xl bg-[rgb(4,7,13)] border-2 border-white/[0.07] shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.2)]">
              {/* Avatar Icon & Dots */}
              <div className="flex items-center mb-4 relative z-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  className="w-8 h-8 text-gray-400 mr-2 flex-shrink-0"
                  fill="currentColor"
                >
                  <g>
                    <path d="M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z" opacity="0.2"></path>
                    <path d="M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </g>
                </svg>
                <div className="flex space-x-1 ml-auto">
                  <div className="w-2 h-2 bg-white rounded-full opacity-10"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-10"></div>
                  <div className="w-2 h-2 bg-white rounded-full opacity-10"></div>
                </div>
              </div>

              {/* Body: content left, image right */}
              <div className="flex-1 flex items-stretch gap-6 relative z-10">
                <div className="flex-1 flex flex-col">
                  <div className="p-4 rounded-xl shadow-[inset_0_-1px_1px_0_rgba(207,231,255,0.1)]">
                    <h3 className="text-xl font-semibold mb-2 text-white">{testimonial.title}</h3>
                    <p className="text-sm text-gray-300 opacity-60 leading-relaxed">{testimonial.description}</p>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    {testimonial.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-gray-900 rounded-lg p-3 flex-1 text-center border border-white/[0.07] shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.2)] transition-all duration-300"
                      >
                        <div className="flex justify-center items-baseline mb-1">
                          <span className="text-2xl font-bold text-white">{stat.value.replace("%", "")}</span>
                          <span className="text-white font-semibold ml-1 text-lg">%</span>
                        </div>
                        <p className="text-xs text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image on the right */}
                <div className="relative w-2/5 min-w-[120px] h-full overflow-hidden rounded-xl">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="text-center">
        <div className="mx-auto max-w-4xl mb-8">
          <h3
            className="text-[32px] leading-[1.4em] tracking-[-0.03em] text-center text-[rgba(184,199,217,0.5)]"
            dangerouslySetInnerHTML={{ __html: testimonials[currentIndex].quote }}
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mb-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-white rounded-full transition-all duration-300"
              style={{ opacity: index === currentIndex ? 1 : 0.1 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
