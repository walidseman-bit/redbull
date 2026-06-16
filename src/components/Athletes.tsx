/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { ATHLETES } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { Trophy, Compass, ArrowUpRight, Award, Quote } from "lucide-react";

export default function Athletes() {
  const [selectedSport, setSelectedSport] = useState<"all" | "Racing" | "Cycling" | "Skateboarding" | "Esports">("all");

  const filteredAthletes = ATHLETES.filter(
    (ath) => selectedSport === "all" || ath.category === selectedSport
  );

  const categories = [
    { value: "all", label: "ALL SPONSORS" },
    { value: "Racing", label: "RACERS" },
    { value: "Cycling", label: "CYCLISTS" },
    { value: "Skateboarding", label: "BOARDERS" },
    { value: "Esports", label: "GAMERS" },
  ] as const;

  return (
    <section id="athletes" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative select-none">
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_20px_40px,#ffffff05,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <Trophy className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-accent-red uppercase">
              ELITE ATHLETE COHORT
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            THE FORCE BEHIND <span className="text-accent-red">PEAK HUMAN ACTION</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-400 tracking-wide leading-relaxed">
            Meet our global alliance of world-record holders, high-G-force racers, 
            street legends, and tactical esports champions who fuel their drive with Apex.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedSport(cat.value)}
              className={`px-4.5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-200 relative select-none skew-box cursor-pointer ${
                selectedSport === cat.value
                  ? "text-white"
                  : "text-zinc-500 hover:text-zinc-200"
              }`}
            >
              <span className="relative z-10 unskew-box block">{cat.label}</span>
              {selectedSport === cat.value && (
                <motion.div
                  layoutId="activeSportIndicator"
                  className="absolute inset-0 bg-accent-red -z-0"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Athletes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredAthletes.map((athlete, idx) => (
              <motion.div
                key={athlete.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative bg-[#050505] border border-zinc-900/60 hover:border-accent-red/40 rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between h-[450px] transition-all duration-300"
              >
                {/* Athlete Visual Backgound with parallax zoom hover */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover filter brightness-[0.34] group-hover:brightness-[0.42] group-hover:scale-108 transition-all duration-500 object-center"
                  />
                  {/* Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-red/5 to-transparent pointer-events-none" />
                </div>

                {/* Top badges */}
                <div className="p-5 flex justify-between items-start z-10">
                  <span className="text-[9px] font-mono font-black uppercase tracking-widest px-3 py-1.5 bg-[#DB0A0A] border border-white/10 rounded-sm skew-box text-zinc-100 shadow-lg">
                    <span className="unskew-box block">{athlete.category} PRO</span>
                  </span>
                  <Award className="w-5 h-5 text-amber-400 drop-shadow-lg" />
                </div>

                {/* Quote block that displays beautifully on hover */}
                <div className="p-6 text-left z-10 flex flex-col gap-3 relative bg-gradient-to-t from-black/85 via-black/40 to-transparent">
                  <Quote className="absolute top-1.5 -left-1 w-8 h-8 text-white/5 pointer-events-none" />
                  
                  {/* Achievement badge */}
                  <div className="inline-flex items-center gap-1.5 bg-black/80 border border-zinc-800 px-2.5 py-1 rounded self-start">
                    <Trophy className="w-3 h-3 text-amber-500 fill-amber-500/20" />
                    <span className="text-[9px] uppercase font-mono font-black tracking-wider text-zinc-200">
                      {athlete.achievement}
                    </span>
                  </div>

                  {/* Athlete Info */}
                  <div className="flex flex-col gap-1 mt-1">
                    <h3 className="font-display text-xl italic text-white uppercase tracking-tight leading-none">
                      {athlete.name}
                    </h3>
                    <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest font-semibold">
                      {athlete.sport}
                    </p>
                  </div>

                  {/* Quote sentence */}
                  <p className="text-[11px] text-zinc-300 italic h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 leading-relaxed pt-2 border-t border-zinc-805/60 overflow-hidden">
                    &ldquo;{athlete.quote}&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Global Sponsor Application Lead Generator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl glass flex flex-col sm:flex-row items-center justify-between gap-4 text-left border border-zinc-900/60"
        >
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center p-3 bg-red-950/40 border border-red-950 rounded-xl">
              <Compass className="w-5 h-5 text-accent-red" />
            </div>
            <div>
              <h4 className="font-display text-lg text-white uppercase tracking-wider italic">DO YOU REPRESENT SURGING ENERGY?</h4>
              <p className="text-xs text-zinc-400 mt-0.5">We sponsor local boarders, regional esports rosters, and extreme marathon runs globally.</p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-750 text-white font-mono text-[9px] font-black uppercase tracking-widest px-5 py-3 skew-box flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span className="unskew-box block flex items-center gap-1.5">
              Submit Athlete Portfolio
              <ArrowUpRight className="w-4 h-4 text-accent-red" />
            </span>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
