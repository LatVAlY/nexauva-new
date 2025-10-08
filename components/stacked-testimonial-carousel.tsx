"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  image: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Jules",
    title: "Jules's AI Success",
    description:
      "Jules, the CEO of Dogy AI, transformed their social app efforts using AI-powered tools. This shift resulted in 45% improvement in users personalization, leading to a surge in brand loyalty",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQETo2XOHePOJg/profile-displayphoto-shrink_400_400/B56ZYzk6LNHEAk-/0/1744622036337?e=1762992000&v=beta&t=bm-IMizRZSCaQQWY6UMVyVC_wABYoxO67sCbdfjkgBQ",
    stats: [
      { value: "70%", label: "growth in marketing" },
      { value: "50%", label: "rise in engagement" },
    ],
    quote:
      "They grasped our pain points, knew exactly who we needed to reach, and helped us stand out. Their solutions delivered real, <span class='font-serif italic tracking-wide text-[rgb(213,219,230)]'>impactful</span> results!",
  },
  {
    name: "Max",
    title: "Max's SaaS Revolution",
    description:
      "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
    image:
      "https://framerusercontent.com/images/46yWpjkwWiKJojGTr2NKnNPtJ1c.jpg",
    stats: [
      { value: "60%", label: "increase in ROI" },
      { value: "45%", label: "boost in revenue" },
    ],
    quote:
      "Transformed our operations with seamless AI integration. Costs slashed, productivity soared—pure revolution!",
  },
  // {
  //   name: "Ibrohim Abdivokhidov",
  //   title: "AI Solutions & Software Builder",
  //   description:
  //     "Ibrohim develops intelligent AI systems and custom software that help businesses automate processes, make smarter decisions, and scale efficiently. His innovative solutions turn complex challenges into seamless, data-driven workflows.",
  //   image:
  //     "https://media.licdn.com/dms/image/v2/D4D03AQHSfm4JYxQLGw/profile-displayphoto-scale_400_400/B4DZkLviEhGsAg-/0/1756838634684?e=1762992000&v=beta&t=jfx4YhsaavuzNi0LhgAHpBHLwoYM-G8Ap_7m7RHgYWM",
  //   stats: [
  //     { value: "40%", label: "boost in efficiency" },
  //     { value: "50%", label: "growth in automation" },
  //   ],
  //   quote:
  //     "Ibrohim transformed our operations with intelligent automation and reliable AI tools. His work didn’t just improve performance — it redefined how we innovate.",
  // },
];

export function StackedTestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Measure and lock the tallest quote height to prevent layout shift
  const [maxQuoteHeight, setMaxQuoteHeight] = useState<number>(0);
  const quoteRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const measure = () => {
      const heights = quoteRefs.current.map((el) => el?.clientHeight ?? 0);
      const max = Math.max(0, ...heights);
      setMaxQuoteHeight(max);
    };

    // Initial measure and on resize (for responsive reflow)
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + 3) % 3;
    const isHovered = hoveredIndex === index;

    const baseStyles = {
      0: { scale: 1, translateY: 0, blur: 0, opacity: 1, z: 30 },
      1: { scale: 0.95, translateY: -60, blur: 1, opacity: 1, z: 20 },
      2: { scale: 0.9, translateY: -110, blur: 1, opacity: 1, z: 10 },
    } as const;

    const style = baseStyles[diff as keyof typeof baseStyles];

    if (isHovered && diff !== 0) {
      return {
        transform: `scale(${style.scale}) translateY(${style.translateY - 20}px)`,
        filter: `blur(${style.blur}px)`,
        opacity: style.opacity,
        zIndex: style.z + 5,
      } as const;
    }

    return {
      transform: `scale(${style.scale}) translateY(${style.translateY}px)`,
      filter: `blur(${style.blur}px)`,
      opacity: style.opacity,
      zIndex: style.z,
    } as const;
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-12 relative">
      {/* Stacked Cards */}
      <div
        className="relative h-[500px] flex items-end justify-center mb-12"
        style={{ perspective: "1000px" }}
      >
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
                    <path
                      d="M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z"
                      opacity="0.2"
                    ></path>
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
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {testimonial.title}
                    </h3>
                    <p className="text-sm text-gray-300 opacity-60 leading-relaxed">
                      {testimonial.description}
                    </p>
                  </div>
                  <div className="flex space-x-4 mt-4">
                    {testimonial.stats.map((stat, statIndex) => (
                      <div
                        key={statIndex}
                        className="bg-gray-900 rounded-lg p-3 flex-1 text-center border border-white/[0.07] shadow-[inset_0_2px_1px_0_rgba(207,231,255,0.2)] transition-all duration-300"
                      >
                        <div className="flex justify-center items-baseline mb-1">
                          <span className="text-2xl font-bold text-white">
                            {stat.value.replace("%", "")}
                          </span>
                          <span className="text-white font-semibold ml-1 text-lg">
                            %
                          </span>
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
                    sizes="(max-width: 1024px) 40vw, 400px"
                    className="object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hidden quote measurer to lock height */}
      <div className="absolute opacity-0 pointer-events-none -z-50 w-full">
        {testimonials.map((t, i) => (
          <div
            key={i}
            ref={(el) => {
              quoteRefs.current[i] = el;
            }}
            className="mx-auto max-w-4xl mb-8"
          >
            <h3
              className="text-[32px] leading-[1.4em] tracking-[-0.03em] text-center text-[rgba(184,199,217,0.5)]"
              dangerouslySetInnerHTML={{ __html: t.quote }}
            />
          </div>
        ))}
      </div>

      {/* Bottom Quote */}
      <div className="text-center">
        <div
          className="mx-auto max-w-4xl mb-8"
          style={{ minHeight: maxQuoteHeight || undefined }}
        >
          <h3
            className="text-[32px] leading-[1.4em] tracking-[-0.03em] text-center text-[rgba(184,199,217,0.5)]"
            dangerouslySetInnerHTML={{
              __html: testimonials[currentIndex].quote,
            }}
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
  );
}
