import { ContactForm } from "@/components/contact-form"
import { FAQSection } from "@/components/faq-section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Calendar } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">Contact</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light mb-6 text-balance">
            Reach Us <span className="font-serif italic text-muted-foreground">Anytime</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions or need help? We're here for you
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Mail className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Facing technical challenges or product concerns? We're here to assist
            </p>
            <a
              href="mailto:landio@support.com"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              landio@support.com
            </a>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:bg-card/80 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-foreground" />
            </div>
            <h3 className="text-xl font-medium mb-2">Contact Sales</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Let's collaborate on custom solutions or discuss product insights
            </p>
            <Button variant="outline" size="sm" className="bg-transparent">
              Book a call
            </Button>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">We'd love to help! Let us know how</h2>
          </div>
          <ContactForm />
        </div>

        {/* FAQ Section */}
        <FAQSection />
      </div>
    </main>
  )
}
