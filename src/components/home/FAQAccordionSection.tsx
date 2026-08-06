"use client";

import { faqsData } from "@/config/faqs";
import { AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FAQAccordionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-sky-50/30 to-white relative border-b border-slate-200/60" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="gold" className="px-3.5 py-1">Clear Answers</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about rooftop solar installation, KSEB net metering, EV charging docks, and equipment warranties.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden shadow-xs border border-white/90"
            >
              <AccordionItem
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={idx === 0}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional help footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 p-8 rounded-3xl glass-card border border-white/90 text-center space-y-3 shadow-lg"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 border border-amber-500/20 mb-1">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 font-heading">Have a Specific Feasibility Question?</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Our local engineering team in Thiruvambady is available to evaluate your electrical connection, roof tilt, and shading factors.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

