import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InteractiveProcessSection } from "@/components/interactive-process-section"
import { ProcessJourney } from "@/components/process-journey"
import { ArrowRight } from "lucide-react"

export default function ProcessPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <InteractiveProcessSection />

        {/* Process Journey */}
        <ProcessJourney />

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-4">Start your automation journey</h2>
            <p className="text-muted-foreground mb-8">
              Book a free consultation to discuss your needs and see how we can help
            </p>
            <Button size="lg" className="gap-2 bg-white text-background hover:bg-white/90" asChild>
              <a href="https://calendly.com/hello-nexauva/30min" target="_blank" rel="noopener noreferrer">
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
