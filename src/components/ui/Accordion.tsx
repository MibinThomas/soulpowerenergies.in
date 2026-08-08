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
    <div className="border border-[#EADBC8]/15 rounded-2xl nestive-card overflow-hidden shadow-xl transition-all hover:border-[#E5BA73]/40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        id={`accordion-button-${id}`}
        className="w-full flex items-center justify-between p-5 text-left font-medium text-[#F5EFE6] text-base sm:text-lg focus:outline-none rounded-2xl cursor-pointer hover:text-[#E5BA73] transition-colors group"
      >
        <span className="pr-4 font-heading">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#E5BA73] shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#F0C987]" : ""
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
            <div className="px-5 pb-5 pt-3 text-[#EADBC8]/90 text-sm sm:text-base leading-relaxed border-t border-[#EADBC8]/15">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
