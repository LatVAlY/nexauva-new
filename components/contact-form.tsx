"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    )
  }

  const createToastContainer = () => {
    let container = document.getElementById("toast-container")
    if (!container) {
      container = document.createElement("div")
      container.id = "toast-container"
      container.style.position = "fixed"
      container.style.top = "20px"
      container.style.right = "20px"
      container.style.zIndex = "10000"
      container.style.display = "flex"
      container.style.flexDirection = "column"
      container.style.gap = "8px"
      document.body.appendChild(container)
    }
    return container
  }

  const showToast = (options: { title: string; description?: string; status?: "success" | "error" | "info"; duration?: number }) => {
    const container = createToastContainer()
    const toast = document.createElement("div")
    toast.style.padding = "12px 14px"
    toast.style.borderRadius = "8px"
    toast.style.color = options.status === "error" ? "#fff" : "#0f172a"
    toast.style.background =
      options.status === "success" ? "#86efac" : options.status === "error" ? "#ef4444" : "#e2e8f0"
    toast.style.boxShadow = "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"
    toast.style.transform = "translateY(-8px)"
    toast.style.opacity = "0"
    toast.style.transition = "all 200ms ease"

    const strong = document.createElement("strong")
    strong.textContent = options.title
    strong.style.display = "block"
    strong.style.fontWeight = "600"

    const para = document.createElement("p")
    para.textContent = options.description || ""
    para.style.marginTop = "4px"

    toast.appendChild(strong)
    if (options.description) toast.appendChild(para)
    container.appendChild(toast)

    requestAnimationFrame(() => {
      toast.style.transform = "translateY(0)"
      toast.style.opacity = "1"
    })

    const duration = options.duration ?? 3000
    setTimeout(() => {
      toast.style.transform = "translateY(-8px)"
      toast.style.opacity = "0"
      setTimeout(() => toast.remove(), 200)
    }, duration)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return

    if (!isFormValid()) return

    setIsSubmitting(true)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_mxqq0wn"
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_tyv0izk"
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "fvumGOVXqlFoUhXyL"

    const template_params = {
      from_name: formData.fullName,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    }

    try {
      const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params,
        }),
      })

      if (!res.ok) {
        const text = await res.text()
        throw new Error(text || "Failed to send message")
      }

      showToast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
        status: "success",
        duration: 5000,
      })
      setFormData({ fullName: "", email: "", subject: "", message: "" })
    } catch (error: any) {
      showToast({
        title: "An error occurred.",
        description: `Unable to send message. Please try again. Details: ${error?.message || String(error)}`,
        status: "error",
        duration: 7000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <Card className="p-8 lg:p-12 bg-card/50 backdrop-blur-sm border-border">
      <form onSubmit={handleSubmit} className="space-y-6 contact-form">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium mb-2">
            Full Name
          </label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            className="bg-white/5 border-white/10"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-white/5 border-white/10"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject Of Interest
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            className="bg-white/5 border-white/10"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            How may we assist you?
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="bg-white/5 border-white/10 min-h-32"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full gap-2 bg-white text-background hover:bg-white/90 submit-btn"
          disabled={isSubmitting || !isFormValid()}
          aria-disabled={isSubmitting || !isFormValid()}
        >
          {isSubmitting ? "Sending..." : "Send Your Message"}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </form>
    </Card>
  )
}
