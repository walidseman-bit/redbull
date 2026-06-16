/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareCode, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function CommunityStories() {
  const [activeStory, setActiveStory] = useState(0);

  const handleNext = () => {
    setActiveStory((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveStory((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_20px_40px,#ffffff03,transparent)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <MessageSquareCode className="w-3.5 h-3.5 text-accent-red" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-accent-red uppercase">
              AUTHENTIC ECHOES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            THE APEX <span className="text-accent-red">COMMUNITY CHRONICLES</span>
          </h2>
          <p className="max-w-xl text-xs sm:text-sm text-zinc-400 tracking-wide text-center leading-relaxed">
            Hear from physical innovators, blockchain developers, and coastal marathon navigators 
            who run their daily operations on premium kinetic power.
          </p>
        </div>

        {/* Carousel Visual Box */}
        <div className="relative rounded-3xl glass border border-white/10 overflow-hidden p-8 sm:p-12 shadow-2xl">
          
          {/* Big floating Quote badge */}
          <div className="absolute top-8 right-8 text-zinc-900 pointer-events-none">
            <Quote className="w-24 h-24 stroke-[5px]" />
          </div>

          <div className="flex flex-col gap-6 text-left relative z-10">
            {/* Star Icons */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Testimonial Active Story Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeStory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-base sm:text-lg text-zinc-300 leading-relaxed font-sans italic pr-4"
              >
                &ldquo;{TESTIMONIALS[activeStory].story}&rdquo;
              </motion.p>
            </AnimatePresence>

            {/* User credentials split indicator */}
            <div className="flex items-center justify-between mt-6 pt-6 border-t border-zinc-900/60">
              <div className="flex flex-col">
                <span className="font-display text-white uppercase tracking-wider italic text-sm sm:text-base leading-none">
                  {TESTIMONIALS[activeStory].user}
                </span>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest leading-none mt-2">
                  {TESTIMONIALS[activeStory].role}
                </span>
              </div>

              {/* Arrow controls button segment */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-zinc-900/80 hover:bg-zinc-850 text-zinc-400 hover:text-white rounded-xl border border-zinc-805 transition-colors cursor-pointer"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-[#DB0A0A] hover:bg-[#b00505] text-white rounded-xl shadow-lg transition-colors cursor-pointer"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
