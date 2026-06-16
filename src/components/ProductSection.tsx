/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Eye, ChevronRight, Activity, Percent, Compass, Info, MessageSquareCode } from "lucide-react";

interface ProductSectionProps {
  onOpenMatchModal: () => void;
}

export default function ProductSection({ onOpenMatchModal }: ProductSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "original" | "sugarfree" | "zero" | "editions">("all");
  const [activeProductDetail, setActiveProductDetail] = useState<Product | null>(null);

  const filteredProducts = PRODUCTS.filter(
    (p) => selectedCategory === "all" || p.category === selectedCategory
  );

  const categories = [
    { value: "all", label: "ALL FORMULAS" },
    { value: "original", label: "ORIGINAL ENERGY" },
    { value: "sugarfree", label: "SUGAR-FREE" },
    { value: "zero", label: "CARBON ZERO" },
    { value: "editions", label: "EDITIONS" },
  ] as const;

  return (
    <section id="products" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative">
      {/* Background Ambience Spotlights */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-blue/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center justify-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-[#DB0A0A] uppercase">
              ENERGY DISCOVERY HUB
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            CHOOSE YOUR <span className="text-accent-red">IGNITION ENGINE</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-400 tracking-wide">
            We operate in decimal places. Select the dynamic caffeine, taurine, and calorie 
            profile optimized specifically for your active speedrun or physical benchmark.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-200 relative select-none skew-box cursor-pointer ${
                selectedCategory === cat.value
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              <span className="relative z-10 unskew-box block">{cat.label}</span>
              {selectedCategory === cat.value && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-accent-red -z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, idx) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="relative rounded-2xl p-6 glass border-b-4 border-b-transparent hover:border-b-accent-red hover:bg-white border-zinc-900/80 hover:bg-white/8 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group cursor-pointer"
              >
                {/* Cold Frosty Droplets Background Pattern (Ambient Hover Effect) */}
                <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_20px_30px,#ffffff15,transparent)] opacity-50 pointer-events-none group-hover:opacity-100 transition-opacity duration-300" />

                {/* Categories Badge */}
                <div className="flex justify-between items-center z-10">
                  <span className={`text-[9px] font-mono font-black uppercase tracking-widest px-2 py-1 bg-black/60 rounded border border-zinc-800/40 ${p.textColor}`}>
                    {p.categoryLabel}
                  </span>
                  <div className="flex gap-1.5 font-mono text-[9px] text-zinc-400">
                    <span className="bg-black/40 px-1.5 py-0.5 rounded border border-zinc-800/30">
                      {p.nutrition.calories}
                    </span>
                  </div>
                </div>

                {/* 3D Can Product Image */}
                <div className="my-8 relative h-72 flex items-center justify-center select-none overflow-hidden rounded-xl">
                  {/* Neon Halo backlighting */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full m-auto blur-[50px] opacity-10 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  <motion.img
                    src={p.image}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transform group-hover:scale-108 transition-transform duration-500 cursor-pointer"
                    onClick={() => setActiveProductDetail(p)}
                  />
                </div>

                {/* Info block */}
                <div className="text-left z-10 flex flex-col gap-1">
                  <h3 className="font-display text-xl italic text-white uppercase tracking-wider leading-none">
                    {p.name}
                  </h3>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold drop-shadow">
                    FLAVOR: {p.flavor}
                  </p>
                  <p className="text-xs text-zinc-300 line-clamp-2 mt-2 leading-relaxed">
                    {p.tagline}
                  </p>
                </div>

                {/* Buttons Card Row */}
                <div className="flex gap-2 mt-6 z-10">
                  <button
                    onClick={() => setActiveProductDetail(p)}
                    className="flex-1 bg-black/60 border border-zinc-800/80 hover:bg-zinc-900 text-zinc-300 hover:text-white uppercase tracking-wider text-[10px] font-mono py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Details
                  </button>
                  <button
                    onClick={onOpenMatchModal}
                    className={`flex-1 text-[10px] uppercase font-bold tracking-wider py-2 px-3 transition-transform hover:scale-[1.02] flex items-center justify-center gap-1 skew-box cursor-pointer ${p.accentColor}`}
                  >
                    <span className="unskew-box block flex items-center gap-1">
                      Get Energy
                      <ChevronRight className="w-3 h-3" />
                    </span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Nutritional Highlight Panel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl glass relative overflow-hidden text-left"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(219,10,10,0.06),transparent_40%)]" />
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-mono text-[9px] text-accent-red font-extrabold tracking-widest uppercase">
                SCIENTIFIC FORMULATION
              </span>
              <h3 className="font-display text-2xl text-white uppercase tracking-tight italic">
                ACTIVE NUTRITION AND MICRO-INFUSED STAMINA
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                We respect your biology. Every can of Apex Velocity features a sterile 
                infusion of alpine-grade spring carbonation, pharmaceutical-grade Taurine (1000mg/can), 
                and essential metabolic B-complex vitamins (B3, B5, B6, B12). No chemical stabilizers, 
                no taurine synthesizers, only high-velocity physiological fuel.
              </p>
            </div>
            
            <button
              onClick={onOpenMatchModal}
              className="bg-accent-blue/60 hover:bg-accent-blue/80 border border-white/10 text-amber-400 font-mono text-[10px] font-black uppercase tracking-widest px-6 py-4 skew-box flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span className="unskew-box block flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                Interactive Dosage Analyzer
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Detail Overlay Drawer Modal */}
      <AnimatePresence>
        {activeProductDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 select-none"
          >
            {/* Modal Box */}
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="w-full max-w-3xl bg-zinc-950 border border-zinc-900 rounded-3xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row"
            >
              {/* Left Column: Big visual with colors */}
              <div className={`md:w-1/2 p-10 bg-gradient-to-t ${activeProductDetail.colorTheme} flex flex-col justify-between relative min-h-[350px] md:min-h-[auto]`}>
                <div className="absolute inset-0 bg-[#050505]/20 backdrop-blur-[1px]" />
                
                <button
                  onClick={() => setActiveProductDetail(null)}
                  className="md:hidden absolute top-4 left-4 z-20 bg-black/60 hover:bg-black/80 px-3 py-1.5 rounded-md font-mono text-[10px] text-zinc-300 cursor-pointer"
                >
                  Close
                </button>

                <div className="z-10 bg-black/80 backdrop-blur-sm self-start px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-white/10 rounded text-zinc-100">
                  {activeProductDetail.categoryLabel}
                </div>

                <div className="relative h-60 flex items-center justify-center my-6 z-10">
                  <img
                    src={activeProductDetail.image}
                    alt={activeProductDetail.name}
                    referrerPolicy="no-referrer"
                    className="h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)]"
                  />
                </div>

                <div className="text-left z-10">
                  <p className="text-[10px] text-white/75 font-mono uppercase tracking-wider font-bold">
                    Apex Dynamics Lab
                  </p>
                  <p className="text-2xl font-display text-white uppercase italic leading-none mt-1">
                    {activeProductDetail.name}
                  </p>
                </div>
              </div>

              {/* Right Column: Nutrition & usage stats */}
              <div className="md:w-1/2 p-8 text-left flex flex-col justify-between bg-[#050505]">
                <div>
                  <div className="flex md:justify-end justify-start mb-6">
                    <button
                      onClick={() => setActiveProductDetail(null)}
                      className="hidden md:flex bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white uppercase tracking-widest text-[10px] font-mono px-3.5 py-1.5 cursor-pointer skew-box"
                    >
                      <span className="unskew-box block">ESC CLOSE</span>
                    </button>
                  </div>

                  <span className="text-[9px] font-mono tracking-widest text-accent-red uppercase font-black">
                    FLAVOR ARCHITECTURE
                  </span>
                  <h4 className="font-display text-white uppercase text-xl mt-1 tracking-wide">
                    {activeProductDetail.flavor}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed font-sans">
                    {activeProductDetail.description}
                  </p>

                  {/* Core Benefits */}
                  <div className="mt-5 flex flex-col gap-2">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase font-bold">
                      PHYSIOLOGICAL BENCHMARKS
                    </span>
                    {activeProductDetail.benefits.map((bene) => (
                      <div key={bene} className="flex items-center gap-2 text-zinc-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-red shrink-0" />
                        <span className="text-xs tracking-medium font-sans">{bene}</span>
                      </div>
                    ))}
                  </div>

                  {/* Scientific Profile */}
                  <div className="grid grid-cols-4 gap-2.5 mt-6 border-t border-b border-zinc-900 py-4">
                    <div className="flex flex-col bg-zinc-900/40 p-2 rounded border border-zinc-900/80">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">CALORIES</span>
                      <span className="text-xs font-semibold text-white mt-1 uppercase">{activeProductDetail.nutrition.calories}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-900/40 p-2 rounded border border-zinc-900/80">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">CAFFEINE</span>
                      <span className="text-xs font-semibold text-amber-400 mt-1 uppercase">{activeProductDetail.nutrition.caffeine}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-900/40 p-2 rounded border border-zinc-900/80">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">TAURINE</span>
                      <span className="text-xs font-semibold text-blue-400 mt-1 uppercase">{activeProductDetail.nutrition.taurine}</span>
                    </div>
                    <div className="flex flex-col bg-zinc-900/40 p-2 rounded border border-zinc-900/80">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">VIT-B</span>
                      <span className="text-xs font-semibold text-emerald-400 mt-1 uppercase">{activeProductDetail.nutrition.b_vitamins}</span>
                    </div>
                  </div>

                  {/* Usage */}
                  <div className="mt-4 flex items-start gap-2 bg-red-950/20 border border-red-950/40 p-3 rounded-lg text-left">
                    <Info className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] font-mono font-bold text-accent-red uppercase tracking-widest leading-none">RECOMMENDED DOSAGE</p>
                      <p className="text-xs text-zinc-300 mt-1 pr-1 leading-relaxed font-sans">{activeProductDetail.bestUse}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                    onClick={() => setActiveProductDetail(null)}
                    className="flex-1 bg-zinc-900 border border-zinc-800 text-white font-mono text-xs uppercase tracking-widest py-3 cursor-pointer skew-box"
                  >
                    <span className="unskew-box block">Go Back</span>
                  </button>
                  <button
                    onClick={() => {
                      setActiveProductDetail(null);
                      onOpenMatchModal();
                    }}
                    className={`flex-1 font-black text-xs uppercase tracking-widest py-3 flex items-center justify-center gap-1 cursor-pointer skew-box ${activeProductDetail.accentColor}`}
                  >
                    <span className="unskew-box block flex items-center justify-center gap-1">
                      Locate Fuel Stock
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
