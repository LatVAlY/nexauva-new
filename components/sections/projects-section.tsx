"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Aitenxer",
    subtitle: "Ship AI Products 10x Faster",
    description:
      "Aitenxer provides ready-to-use AI agents pre-configured with hundreds of hours of expert work. These production-ready templates help individuals and teams ship AI-powered products faster—the same frameworks used by top companies to bring AI features to market with speed and scale.",
    badge: "AI Platform",
  },
  {
    title: "Souk",
    subtitle: "AI-Enhanced Second-Hand Marketplace",
    description:
      "Souk is an innovative e-commerce platform that leverages AI to streamline the buying and selling of second-hand items. Features include geo-based search for local deals, AI-generated product descriptions, and real-time alerts for new listings.",
    badge: "E-Commerce",
  },
  {
    title: "CDOC",
    subtitle: "AI Agentic Document Management",
    description:
      "Developed a comprehensive AI agentic template filing and document management system that revolutionizes how organizations handle their document workflows and automate filing processes.",
    badge: "Enterprise",
  },
  {
    title: "SpecWise",
    subtitle: "ERP Integration & Document Processing",
    description:
      "Implemented ERP integration and document processing for a leading automotive company, enhancing data accuracy and operational efficiency through intelligent automation and streamlined workflows.",
    badge: "Automotive",
  },
  {
    title: "Retail Personalization Engine",
    subtitle: "AI-Driven E-Commerce Optimization",
    description:
      "Developed an AI-driven personalization system that increased e-commerce conversion rates by 45% through intelligent product recommendations, dynamic pricing, and behavioral analytics.",
    badge: "Retail",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformative AI solutions delivered across industries, from enterprise software to e-commerce platforms
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="bg-white/10">
                  {project.badge}
                </Badge>
                <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-medium mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
