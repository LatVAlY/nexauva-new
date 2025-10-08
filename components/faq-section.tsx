"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, HelpCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      id="fq"
      className="relative py-24 px-4 bg-[#04070d] overflow-hidden"
    >
      {/* Background gradient shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.08] pointer-events-none"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(213, 219, 230, 0.7) 0%, rgba(4, 7, 13, 0) 100%)",
          borderRadius: "10px",
          transform: "translate(-50%, -50%) rotate(-13deg)",
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
            style={{
              background: "rgb(4, 7, 13)",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle
              className="w-4 h-4"
              style={{ color: "rgb(213, 219, 230)", strokeWidth: 1.5 }}
            />
            <span
              className="text-xs uppercase tracking-wider font-medium"
              style={{ color: "rgb(213, 219, 230)" }}
            >
              FAQ'S
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              style={{
                background:
                  "linear-gradient(161deg, rgb(213, 219, 230) 51.66%, rgb(4, 7, 13) 166%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Frequently Asked{" "}
            </span>
            <span
              className="font-serif italic"
              style={{ color: "rgb(228, 233, 242)" }}
            >
              Questions
            </span>
          </motion.h2>

          <motion.p
            className="text-lg opacity-60"
            style={{ color: "rgb(213, 219, 230)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find quick answers to the most common support questions
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[400px_1fr] gap-6 items-start">
          {/* Still Have Questions Card - LEFT SIDE */}
          <motion.div
            className="relative rounded-2xl overflow-hidden p-10 text-center order-2 lg:order-1 lg:sticky lg:top-8"
            style={{
              background: "rgb(4, 7, 13)",
              border: "1px solid rgba(216, 231, 242, 0.07)",
              boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset",
            }}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Gradient light effect */}
            <div
              className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(50% 50% at 93.7% 8.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)",
              }}
            />

            <div className="relative z-10">
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgb(4, 7, 13)",
                  boxShadow: "rgba(207, 231, 255, 0.2) 0px 1px 1px 0px inset",
                }}
              >
                <HelpCircle
                  className="w-7 h-7"
                  style={{ color: "rgb(213, 219, 230)", strokeWidth: 1.5 }}
                />
              </div>

              <h3
                className="text-2xl font-medium mb-3"
                style={{ color: "rgb(213, 219, 230)" }}
              >
                Still Have Questions?
              </h3>
              <p
                className="text-base mb-8 opacity-60 leading-relaxed"
                style={{ color: "rgb(213, 219, 230)" }}
              >
                Still have questions? Feel free to get in touch with us today!
              </p>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(180deg, rgb(20, 20, 20) 0%, rgba(255, 255, 255, 0.07) 100%)",
                  backdropFilter: "blur(5px)",
                  border: "1px solid rgba(216, 231, 242, 0.07)",
                  boxShadow:
                    "rgba(0, 0, 0, 0.68) 0px -0.48px 0.48px -1.25px inset, rgba(0, 0, 0, 0.6) 0px -1.83px 1.83px -2.5px inset, rgba(0, 0, 0, 0.24) 0px -8px 8px -3.75px inset",
                }}
              >
                <ArrowUpRight
                  className="w-4 h-4 opacity-80"
                  style={{ color: "rgb(255, 255, 255)", strokeWidth: 1.5 }}
                />
                <span
                  className="text-sm font-medium opacity-80"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  Ask A Question
                </span>
              </Link>
            </div>
          </motion.div>

          {/* FAQ Items - RIGHT SIDE */}
          <motion.div
            className="space-y-4 order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="relative rounded-xl overflow-hidden"
                style={{
                  background: "rgb(4, 7, 13)",
                  border: "1px solid rgba(216, 231, 242, 0.07)",
                  boxShadow: "rgba(207, 231, 255, 0.2) 0px 2px 1px 0px inset",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Gradient light effect */}
                <div
                  className="absolute top-0 left-0 w-48 h-48 opacity-10 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 7.2% 6.1%, rgba(184, 199, 217, 0.5) 0%, rgba(4, 7, 13, 0) 100%)",
                  }}
                />

                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 flex items-start justify-between text-left transition-all hover:bg-white/[0.02]"
                >
                  <span
                    className="font-normal pr-6 text-base leading-relaxed"
                    style={{ color: "rgb(213, 219, 230)" }}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? -180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="w-6 h-6"
                      style={{ fill: "rgb(213, 219, 230)" }}
                    >
                      <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 0.6 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p
                          className="text-base leading-relaxed"
                          style={{ color: "rgb(213, 219, 230)" }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
