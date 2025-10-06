"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What types of processes can you automate?",
    answer:
      "We specialize in automating repetitive workflows across operations, marketing, sales, and customer support using AI and custom logic.",
  },
  {
    question: "Do I need technical knowledge to use your service?",
    answer:
      "Not at all. Our team handles the setup, integration, and optimization. You just focus on your goals — we'll automate the rest.",
  },
  {
    question: "Can you integrate with our existing tools?",
    answer:
      "Yes! We support integrations with CRMs, project management tools, communication apps, and more — tailored to your stack.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most clients see their first automation live within 1–2 weeks, depending on complexity and the number of workflows.",
  },
  {
    question: "Is your AI secure and compliant?",
    answer:
      "Absolutely. We use enterprise-grade security practices and ensure compliance with major data privacy standards like GDPR.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section>
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">FAQ'S</span>
        </div>
        <h2 className="text-4xl font-light mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground">Find quick answers to the most common support questions</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 mb-12">
        {faqs.map((faq, index) => (
          <Card key={index} className="bg-card/50 backdrop-blur-sm border-border overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <span className="font-medium pr-4">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0 text-muted-foreground" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border max-w-2xl mx-auto">
          <h3 className="text-xl font-medium mb-2">Still Have Questions?</h3>
          <p className="text-muted-foreground mb-6">Feel free to get in touch with us today!</p>
          <Button variant="outline" size="lg" className="bg-transparent">
            Ask A Question
          </Button>
        </Card>
      </div>
    </section>
  )
}
