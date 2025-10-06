"use client"

import { Card } from "@/components/ui/card"
import { Check, X } from "lucide-react"

const comparisons = [
  {
    feature: "Fast setup with ready AI workflows",
    us: true,
    them: false,
  },
  {
    feature: "Built to grow and adapt with you",
    us: true,
    them: false,
  },
  {
    feature: "Real-time, AI-powered analytics",
    us: true,
    them: false,
  },
  {
    feature: "Automates tasks, reducing overhead",
    us: true,
    them: false,
  },
  {
    feature: "Expert support + AI guidance",
    us: true,
    them: false,
  },
]

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light mb-4 text-balance">
            Everything you need to collaborate, create, and scale, all in one place.
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-white/5">
              <div className="text-sm font-medium">Feature</div>
              <div className="text-sm font-medium text-center">With AI Automation</div>
              <div className="text-sm font-medium text-center">Traditional Methods</div>
            </div>
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 border-b border-border last:border-b-0 hover:bg-white/5 transition-colors"
              >
                <div className="text-sm text-muted-foreground">{comparison.feature}</div>
                <div className="flex justify-center">
                  {comparison.us ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
                <div className="flex justify-center">
                  {comparison.them ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </section>
  )
}
