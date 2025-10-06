"use client"

import { useState, useEffect } from "react"

const steps = [
  {
    number: "01",
    title: "Discover & Analyze",
    description:
      "We audit your existing workflows, tools, and customer data to uncover inefficiencies and automation opportunities. Every system is mapped for clarity.",
    image: "https://framerusercontent.com/images/LMV9IYKI2TkgMh5KmQhbeIV2A.png",
  },
  {
    number: "02",
    title: "Design & Implement",
    description:
      "We collaborate closely to design bespoke AI solutions tailored to your unique needs, building prototypes and iterating based on real-time feedback for seamless integration.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    number: "03",
    title: "Integrate & Optimize",
    description:
      "We deploy the solutions into your operations with minimal disruption, continuously monitoring and optimizing performance to drive sustained growth and efficiency.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
]

export function InteractiveProcessSection() {
  const [currentStep, setCurrentStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 3)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-card border border-border rounded-full px-4 py-2 mb-8">
            <svg className="w-4 h-4 text-muted-foreground mr-2" fill="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">PROCESS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-medium text-center mb-4">
            <span className="text-foreground">Our Simple & </span>
            <span className="font-serif italic text-muted-foreground">Smart Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to collaborate, create, and scale, all in one place.
          </p>
        </div>

        {/* Step Card */}
        <div className="step-card mx-auto max-w-4xl relative">
          {/* Step Pills */}
          <div className="loader-wrapper relative p-6 mb-4">
            <div className="step-loader flex justify-center gap-1">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`
                    step-pill transition-all duration-200 ease-out
                    w-[134px] h-[44px] rounded-lg
                    flex items-center justify-center gap-2.5 px-3
                    cursor-pointer relative overflow-hidden
                    ${
                      currentStep === index
                        ? "bg-[rgb(16,19,28)] shadow-[rgba(207,231,255,0.28)_0px_1px_1px_0px_inset,0_0_0_1px_rgba(148,163,184,0.2)_inset]"
                        : "bg-[rgb(16,19,28)] shadow-[rgba(207,231,255,0.2)_0px_1px_1px_0px_inset]"
                    }
                    hover:scale-105
                  `}
                >
                  <span
                    className={`text-xs uppercase font-medium transition-colors ${
                      currentStep === index ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    STEP {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className="card-inner relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`content-change flex transition-opacity duration-500 ${
                  currentStep === index ? "opacity-100" : "opacity-0 absolute inset-0 pointer-events-none"
                }`}
              >
                <div
                  className="w-96 h-96 md:h-96 relative overflow-hidden rounded-l-xl bg-cover bg-center"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
                <div className="text-section flex-1 p-6 flex flex-col">
                  <div className="number text-3xl font-medium text-blue-400 mb-4">{step.number}</div>
                  <div className="sub-container flex-1 p-4 mb-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Border */}
        <div className="border mx-auto my-12 w-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  )
}
