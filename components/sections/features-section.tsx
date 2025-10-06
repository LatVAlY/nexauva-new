"use client"

import { Card } from "@/components/ui/card"
import { Bot, Building2, BarChart3, MessageSquare, Target, Zap } from "lucide-react"
import { useEffect } from "react"
import { motion, type Variants } from "framer-motion"
import { CodeDemoCard } from "./code-demo-card"
import { RealTimeIntelligenceCard } from "./real-time-intelligence-card"
import { IntelligentAnalyticsCard } from "./intelligent-analytics-card"
import { ProcessAutomationCard } from "./process-automation-card"
import { RepetitiveTasksCard } from "./repetitive-tasks-card"

const features = [
  {
    icon: Bot,
    title: "AI Product Development",
    description:
      "Custom AI solutions built from the ground up, including recommendation systems, predictive analytics, computer vision applications, and natural language processing tools.",
  },
  {
    icon: Building2,
    title: "Enterprise Software Digitalization",
    description:
      "Comprehensive digital transformation of legacy systems, workflow automation, and enterprise-wide software integration solutions.",
  },
  {
    icon: BarChart3,
    title: "Intelligent Analytics",
    description:
      "Advanced data processing platforms that convert raw data into actionable insights through machine learning and statistical analysis.",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI",
    description:
      "Sophisticated chatbots and virtual assistants that enhance customer service, streamline operations, and provide 24/7 support capabilities.",
  },
  {
    icon: Target,
    title: "Digital Strategy Consulting",
    description:
      "Strategic guidance on implementing AI technologies, digital transformation roadmaps, and innovation management frameworks.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Robotic Process Automation (RPA) and intelligent workflow solutions that reduce manual tasks and optimize business processes.",
  },
]

// Framer Motion variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
}

const containerStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

export function FeaturesSection() {
  useEffect(() => {
    const lines = document.querySelectorAll<HTMLElement>(".code-line")
    lines.forEach((line, index) => {
      setTimeout(() => {
        line.classList.add("visible")
      }, 500 + index * 100)
    })

    const codeContainer = document.querySelector<HTMLElement>(".code-container")
    let interval: number | undefined
    if (codeContainer) {
      let scrollPos = 0
      interval = window.setInterval(() => {
        scrollPos += 2
        codeContainer.scrollTop = scrollPos
        if (scrollPos >= 80) {
          window.clearInterval(interval)
        }
      }, 200)
    }

    return () => {
      if (interval) window.clearInterval(interval)
    }
  }, [])

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">Comprehensive AI & Software Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI product development to enterprise digitalization, we deliver end-to-end solutions that transform
            your business
          </p>
        </div>

        {/* Demo Cards Grid: row 1 (2 items), row 2 (3 items); mobile: 1 per row */}
        <div className="space-y-6 mb-12">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp}>
              <CodeDemoCard />
            </motion.div>
            <motion.div variants={fadeUp}>
              <RepetitiveTasksCard />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp}>
              <IntelligentAnalyticsCard />
            </motion.div>
            <motion.div variants={fadeUp}>
              <ProcessAutomationCard />
            </motion.div>
            <motion.div variants={fadeUp}>
              <RealTimeIntelligenceCard />
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-3 text-balance">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  )
}
