"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export interface AccordionItemProps {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function AccordionItem({ id, question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white overflow-hidden shadow-xs transition-all hover:border-slate-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-button-${id}`}
        className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-2xl cursor-pointer"
      >
        <span className="pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-amber-600 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            role="region"
            aria-labelledby={`accordion-button-${id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
