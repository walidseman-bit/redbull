/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="faq" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_40px_20px,#ffffff03,transparent)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-accent-red" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-[#DB0A0A] uppercase">
              RESOURCES &amp; SUPPORT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            KINETIC <span className="text-accent-red">INTEL ACCORDION</span>
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-zinc-400 tracking-wide text-center leading-relaxed">
            Got biological, retail, or sponsorship questions? Slide open the categories 
            below to unlock immediate clarity on everything Apex Velocity.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-305 ${
                  isOpen
                    ? "glass border-accent-red/60 shadow-xl shadow-accent-red/5 bg-zinc-950/30"
                    : "bg-transparent hover:bg-white/5 border-zinc-905/60"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-display text-base sm:text-lg text-white hover:text-accent-red tracking-tight uppercase transition-colors leading-tight">
                    {faq.question}
                  </span>
                  
                  <div className={`p-1.5 rounded-lg border shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? "bg-red-950/20 border-accent-red/30 text-accent-red rotate-180"
                      : "bg-zinc-900 border-zinc-805 text-zinc-400"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-7 pb-6 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-zinc-900/60 pt-4 text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
