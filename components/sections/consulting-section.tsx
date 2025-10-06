"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

// Align data structures and content with PricingPage style
const plans = [
  {
    name: "Hourly Consulting",
    price: "€200",
    period: "per hour",
    description: "Standard hourly rate for AI & software engineering consulting",
    features: [
      "AI Infrastructure & Integration guidance",
      "Data Strategy consulting",
      "Workflow & AI Adoption support",
      "Software Architecture review",
      "Cloud Engineering optimization",
      "Best practices implementation",
    ],
    cta: "Book Now",
    ctaHref: "https://buy.stripe.com/bJeeVec1V8BA2kG1lu5Vu01",
    popular: false,
  },
  {
    name: "5-Hour Package",
    price: "€160",
    period: "per hour",
    description: "Best value for comprehensive consulting engagement",
    features: [
      "All hourly consulting features",
      "Save €200 with package deal",
      "5 hours of expert consultation",
      "Flexible scheduling",
      "Follow-up documentation",
      "Implementation roadmap",
      "Priority booking",
    ],
    cta: "Book Package",
    ctaHref: "https://buy.stripe.com/eVqdRa4ztdVU4sOd4c5Vu00",
    popular: true,
    savings: "Total: €800 (Save €200)",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact us",
    description: "Comprehensive solutions for large organizations with complex needs",
    features: [
      "Custom engagement models",
      "Dedicated team allocation",
      "Long-term partnership options",
      "On-site consulting available",
      "24/7 support options",
      "SLA guarantees",
      "Ongoing optimization",
      "Training & knowledge transfer",
    ],
    cta: "Contact Sales",
    ctaHref: "/contact",
    popular: false,
  },
]

const expertiseAreas = [
  {
    title: "AI Infrastructure & Integration",
    description:
      "Design and implement robust AI infrastructure that supports experimentation, deployment, and scaling of AI/ML models",
  },
  {
    title: "Data Strategy",
    description: "Build scalable Data Mesh architectures, modern data warehouses, and centralized data solutions",
  },
  {
    title: "Workflow & AI Adoption",
    description: "Integrate AI into existing workflows and automate key processes using AI/ML technologies",
  },
  {
    title: "Software Architecture & Cloud Engineering",
    description: "Modernize system architecture with scalable, cloud-optimized solutions",
  },
]

export function ConsultingSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header (aligned with PricingPage tone) */}
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-light mb-6 text-balance">
            Consulting <span className="font-serif italic text-muted-foreground">Rates</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert AI & software engineering consulting tailored to your needs. Choose the engagement model that works
            best for your organization.
          </p>
        </div>

        {/* Pricing Cards (identical style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {plans.map((plan, index) => {
            const isExternal = plan.ctaHref.startsWith("http");
            return (
              <Card
                key={index}
                className={`p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 relative ${
                  plan.popular ? "lg:scale-105 border-white/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-white text-background px-4 py-1 rounded-full text-xs font-medium">
                      Best Value
                    </span>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-medium mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-5xl font-light">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                  </div>
                  {plan.savings && <p className="text-green-400 text-sm mb-2">{plan.savings}</p>}
                  <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  asChild
                  className={`w-full gap-2 ${
                    plan.popular ? "bg-white text-background hover:bg-white/90" : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {isExternal ? (
                    <a href={plan.ctaHref} target="_blank" rel="noopener noreferrer">
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  ) : (
                    <a href={plan.ctaHref}>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  )
}
