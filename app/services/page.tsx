import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Zap, Brain, Workflow, BarChart, Shield, Headphones, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Zap,
    title: "AI Workflow Automation",
    description:
      "Streamline your operations with intelligent automation that handles repetitive tasks, freeing your team to focus on high-value work.",
    features: ["Custom workflow design", "Multi-platform integration", "Real-time monitoring", "Scalable solutions"],
  },
  {
    icon: Brain,
    title: "Intelligent Process Optimization",
    description:
      "Leverage AI to analyze and optimize your business processes, identifying bottlenecks and opportunities for improvement.",
    features: ["Process analysis", "Performance metrics", "Continuous optimization", "Data-driven insights"],
  },
  {
    icon: Workflow,
    title: "Custom Integration Solutions",
    description:
      "Connect all your tools and platforms into a unified, intelligent ecosystem that works seamlessly together.",
    features: ["API integrations", "Custom connectors", "Data synchronization", "Legacy system support"],
  },
  {
    icon: BarChart,
    title: "AI-Powered Analytics",
    description:
      "Transform your data into actionable insights with advanced AI analytics that predict trends and inform decisions.",
    features: ["Predictive analytics", "Custom dashboards", "Real-time reporting", "Trend analysis"],
  },
  {
    icon: Shield,
    title: "Enterprise Security & Compliance",
    description:
      "Ensure your automation meets the highest security standards with enterprise-grade protection and compliance.",
    features: ["Data encryption", "GDPR compliance", "Access controls", "Audit trails"],
  },
  {
    icon: Headphones,
    title: "Dedicated Support & Training",
    description:
      "Get expert guidance every step of the way with our dedicated support team and comprehensive training programs.",
    features: ["24/7 support", "Onboarding training", "Documentation", "Regular check-ins"],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-balance">
            Our <span className="font-serif italic text-muted-foreground">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI automation solutions designed to transform your business operations and drive growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>
              <h3 className="text-2xl font-medium mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our AI automation solutions can transform your business
            </p>
            <Button size="lg" className="gap-2 bg-white text-background hover:bg-white/90">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
