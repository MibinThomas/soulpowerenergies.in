import { faqsData } from "@/config/faqs";
import { AccordionItem } from "@/components/ui/Accordion";
import { Badge } from "@/components/ui/Badge";
import { HelpCircle } from "lucide-react";

export function FAQAccordionSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="gold">Got Questions?</Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about rooftop solar installation, EV charger setups, equipment brands, and after-sales support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => (
            <AccordionItem
              key={faq.id}
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={idx === 0}
            />
          ))}
        </div>

        {/* Additional help footer */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-2 shadow-xs">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mb-2">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900 font-heading">Have a Specific Technical Question?</h3>
          <p className="text-xs text-slate-600">
            Our local technical team in Thiruvambady is ready to review your property conditions.
          </p>
        </div>
      </div>
    </section>
  );
}
