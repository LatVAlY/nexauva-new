import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InteractiveProcessSection } from "@/components/interactive-process-section"
import { MessageSquare, Search, Wrench, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description:
      "We start by understanding your business, challenges, and goals. Our team conducts a thorough analysis of your current workflows and identifies automation opportunities.",
    duration: "1-2 weeks",
  },
  {
    number: "02",
    icon: Search,
    title: "Strategy & Planning",
    description:
      "Based on our findings, we create a customized automation strategy. We map out workflows, select the right tools, and design a roadmap for implementation.",
    duration: "1 week",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Implementation & Integration",
    description:
      "Our team builds and deploys your automation solutions. We integrate with your existing tools, test thoroughly, and ensure everything works seamlessly.",
    duration: "2-4 weeks",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimization",
    description:
      "We launch your automation and monitor performance closely. Our team provides training, gathers feedback, and continuously optimizes for better results.",
    duration: "Ongoing",
  },
]

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <InteractiveProcessSection />

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto space-y-8 mb-20 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              Detailed <span className="font-serif italic text-muted-foreground">Timeline</span>
            </h2>
            <p className="text-muted-foreground">A breakdown of our process with estimated timelines</p>
          </div>
          {steps.map((step, index) => (
            <Card
              key={index}
              className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                {/* Number & Icon */}
                <div className="flex items-center gap-6">
                  <div className="text-6xl font-light text-muted-foreground/30">{step.number}</div>
                  <div className="w-16 h-16 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <step.icon className="w-8 h-8 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-medium">{step.title}</h3>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{step.duration}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-4">Start your automation journey</h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation to discuss your needs and see how we can help
            </p>
            <Button size="lg" className="gap-2 bg-white text-background hover:bg-white/90">
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
