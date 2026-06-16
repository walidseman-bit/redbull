/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { LIFESTYLES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, ChevronLeft, ChevronRight, Compass } from "lucide-react";

export default function Lifestyle() {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % LIFESTYLES.length);
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + LIFESTYLES.length) % LIFESTYLES.length);
  };

  return (
    <section id="lifestyle" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative select-none overflow-hidden">
      {/* Absolute Noise pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_10px_20px,#ffffff08,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <Compass className="w-3.5 h-3.5 text-[#DB0A0A] fill-red-500/20" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-accent-red uppercase">
              THE ACTIVE CODE
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            WE SELL THE <span className="text-accent-red">FLYING IDENTITY</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-400 tracking-wide leading-relaxed">
            Apex isn&apos;t just fluid in an aluminum barrel. It is a commitment to a relentless 
            lifestyle of speed, focus, late nights, and high-altitude achievements. 
          </p>
        </div>

        {/* Large Editorial Card Slider */}
        <div className="relative rounded-3xl overflow-hidden glass shadow-2xl min-h-[500px] flex flex-col lg:flex-row border border-zinc-900/60">
          
          {/* Active Image Background with smooth visual transitions */}
          <div className="relative w-full lg:w-3/5 h-[300px] lg:h-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeTab}
                src={LIFESTYLES[activeTab].image}
                alt={LIFESTYLES[activeTab].title}
                referrerPolicy="no-referrer"
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1.02, opacity: 0.75 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.65, ease: "easeInOut" }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Visual Ambient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
            
            {/* Custom Category Tag - skewed */}
            <div className="absolute top-6 left-6 bg-[#DB0A0A] text-white font-mono text-[9px] font-black tracking-widest uppercase px-4 py-2 skew-box shadow-2xl z-15">
              <span className="unskew-box block">{LIFESTYLES[activeTab].category} CODE</span>
            </div>
          </div>

          {/* Text storytelling area */}
          <div className="w-full lg:w-2/5 p-8 sm:p-12 text-left flex flex-col justify-between relative z-10">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[10px] text-accent-red font-extrabold tracking-widest uppercase leading-none">
                LIFESTYLE MATRIX 0{activeTab + 1}
              </span>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col gap-3"
                >
                  <h3 className="font-display text-2xl sm:text-3.5xl text-white uppercase italic tracking-tight leading-none">
                    {LIFESTYLES[activeTab].title}
                  </h3>
                  <p className="text-zinc-300 font-medium text-xs sm:text-sm font-sans tracking-wide">
                    &ldquo;{LIFESTYLES[activeTab].tagline}&rdquo;
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-2 pr-2">
                    {LIFESTYLES[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls Slider Panel */}
            <div className="flex items-center justify-between mt-12 pt-6 border-t border-zinc-900/60">
              {/* Category Quick Selector indicators */}
              <div className="flex gap-2">
                {LIFESTYLES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeTab === i ? "w-8 bg-accent-red" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              {/* Slider Arrows */}
              <div className="flex gap-2.5">
                <button
                  onClick={handlePrev}
                  className="p-3 bg-zinc-900/80 hover:bg-zinc-850 text-zinc-300 hover:text-white rounded-xl border border-zinc-850/80 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4.5 h-4.5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 bg-[#DB0A0A] hover:bg-[#b00505] text-white rounded-xl shadow-lg shadow-red-650/10 transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
