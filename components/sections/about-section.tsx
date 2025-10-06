"use client"

import { Card } from "@/components/ui/card"
import { Brain, Code, Palette } from "lucide-react"

const teamHighlights = [
  {
    icon: Brain,
    title: "AI Research & Development",
    description:
      "Our AI researchers hold advanced degrees and have published work in leading conferences. They specialize in cutting-edge machine learning, deep learning, and natural language processing.",
  },
  {
    icon: Code,
    title: "Software Engineering Excellence",
    description:
      "Our engineering team brings decades of combined experience from leading technology companies, delivering scalable, production-ready solutions with best-in-class code quality.",
  },
  {
    icon: Palette,
    title: "Creative Design & UX",
    description:
      "Our designers craft intuitive, beautiful interfaces that make complex AI systems accessible and delightful to use, ensuring exceptional user experiences.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">About Nexauva</h2>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nexauva has quickly established itself as a pioneer in AI-driven enterprise solutions. Our team of AI
            researchers, software engineers, and creative designers work in harmony to push the boundaries of what's
            possible in digital transformation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With our headquarters in Germany, we've assembled a world-class team of engineers and AI specialists who
            bring decades of combined experience from leading technology companies. Our commitment to excellence and
            innovation has enabled us to deliver transformative solutions across industries, from automotive to
            enterprise software.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that the future belongs to organizations that can harness the power of artificial intelligence to
            solve complex problems, streamline operations, and create unprecedented value for their customers. That's
            why we're dedicated to making AI accessible, practical, and transformative for businesses of all sizes.
          </p>
        </div>

        {/* Team Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamHighlights.map((highlight, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                <highlight.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
