/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { PRODUCTS } from "../data";
import { Product } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { Zap, X, Brain, Trophy, Moon, Compass, CheckCircle2, RefreshCw } from "lucide-react";

interface EnergyMatchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnergyMatchModal({ isOpen, onClose }: EnergyMatchModalProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    pursuit: "",
    calories: "",
    acceleration: "",
  });
  const [matchedProduct, setMatchedProduct] = useState<Product | null>(null);

  const resetMatcher = () => {
    setStep(1);
    setAnswers({ pursuit: "", calories: "", acceleration: "" });
    setMatchedProduct(null);
  };

  const selectAnswer = (field: "pursuit" | "calories" | "acceleration", value: string) => {
    const updated = { ...answers, [field]: value };
    setAnswers(updated);
    
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Compute the product match based on answers
      calculateMatch(updated);
    }
  };

  const calculateMatch = (currentAnswers: typeof answers) => {
    // Basic heuristic matcher
    let finalPick: Product = PRODUCTS[0]; // Default: Original

    if (currentAnswers.calories === "zero-cal" && currentAnswers.pursuit === "esports") {
      finalPick = PRODUCTS[2]; // Black Out Zero
    } else if (currentAnswers.calories === "low-glycemic" || currentAnswers.pursuit === "study") {
      finalPick = PRODUCTS[1]; // Sugar-Free Ice
    } else if (currentAnswers.pursuit === "creativity" || currentAnswers.acceleration === "summer") {
      finalPick = PRODUCTS[3]; // Summer tropical edition
    } else if (currentAnswers.pursuit === "athletics" || currentAnswers.acceleration === "muscle") {
      finalPick = PRODUCTS[0]; // Original
    } else {
      // Fallback randomized or balanced matcher
      if (currentAnswers.calories === "none") {
        finalPick = PRODUCTS[2];
      } else if (currentAnswers.calories === "zero-sugar") {
        finalPick = PRODUCTS[1];
      }
    }
    
    setMatchedProduct(finalPick);
    setStep(4);
  };

  const questions = [
    {
      id: "pursuit",
      title: "WHAT IS YOUR ACTIVE PURSUIT?",
      subtitle: "Select the context requiring urgent neurological or metabolic ignition.",
      options: [
        { value: "athletics", label: "HIGH INTENSITY ATHLETICS", desc: "Crossfit, sprints, trail running, heavy lifting", icon: <Trophy className="w-5 h-5 text-red-500" /> },
        { value: "esports", label: "ELITE ESPORTS & CODING", desc: "Refinement of mouse-clicking and spatial coding tracking", icon: <Brain className="w-5 h-5 text-cyan-400" /> },
        { value: "creativity", label: "CREATIVE GRAFFITI / MUSIC", desc: "Beats recording, murals, nightlife till late morning", icon: <Moon className="w-5 h-5 text-purple-400" /> },
        { value: "travel", label: "HIGH ALTITUDE EXPLORING", desc: "Cross-country roads, long mountain summits", icon: <Compass className="w-5 h-5 text-amber-500" /> },
      ],
    },
    {
      id: "calories",
      title: "CHOOSE YOUR METABOLIC SHIELD",
      subtitle: "Determine your carbohydrate and calorie nutritional blueprint.",
      options: [
        { value: "sucrose-fuel", label: "DYNAMIC SUCROSE CORES", desc: "110 kcal. Rapid muscle glycogen recovery", icon: <Zap className="w-5 h-5 text-red-500" /> },
        { value: "low-glycemic", label: "ZERO COMPROMISE DIET", desc: "8 kcal. Alert state with zero glycemic indices", icon: <CheckCircle2 className="w-5 h-5 text-cyan-400" /> },
        { value: "zero-cal", label: "CARBON BLACK CALORIE FREE", desc: "0 kcal. Sterile hydration under night sprints", icon: <CheckCircle2 className="w-5 h-5 text-red-500" /> },
      ],
    },
    {
      id: "acceleration",
      title: "SELECT FOCUS ACCELERATING ACCENTS",
      subtitle: "What particular physiological acceleration factor do you prioritize?",
      options: [
        { value: "reaction", label: "SUB-MILLISECOND REACTION SPEED", desc: "Cerebral focus without jitters", icon: <Brain className="w-5 h-5 text-purple-400" /> },
        { value: "muscle", label: "EXPLOSIVE VO2 MAX STAMINA", desc: "Supports long endurance loops", icon: <Trophy className="w-5 h-5 text-red-550" /> },
        { value: "summer", label: "SUN-CHARGED EXOTIC REFRESH", desc: "Natural tropical mood fruit infusions", icon: <Zap className="w-5 h-5 text-amber-500" /> },
      ],
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-60 bg-black/90 backdrop-blur-2xl flex items-center justify-center p-4 select-none">
        {/* Backdrop Closing button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white rounded-full bg-zinc-900 border border-zinc-850 hover:border-zinc-700 cursor-pointer text-xs uppercase font-mono tracking-widest flex items-center gap-1.5 transition-colors"
        >
          <X className="w-4 h-4" />
          Esc Close
        </button>

        <div className="w-full max-w-2xl glass border border-white/10 rounded-3xl overflow-hidden relative shadow-2xl p-6 sm:p-10">
          
          {/* Progress Indicators */}
          {step <= 3 && (
            <div className="flex justify-between items-center mb-8 border-b border-zinc-900/60 pb-4">
              <span className="text-[9px] font-mono font-black text-accent-red tracking-widest uppercase">
                DOSE ASSESSMENT ENGINE
              </span>
              <div className="flex gap-2">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      step === s ? "w-8 bg-accent-red" : s < step ? "w-2 bg-emerald-400" : "w-1.5 bg-zinc-800"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Steps Display */}
          <AnimatePresence mode="wait">
            {step <= 3 && (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-left"
              >
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest font-black block mb-1">
                  STAGE 0{step} OF 03
                </span>
                <h3 className="font-display text-2xl sm:text-3.5xl text-white uppercase italic leading-none mb-1">
                  {questions[step - 1].title}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 mb-8">
                  {questions[step - 1].subtitle}
                </p>

                {/* Option list */}
                <div className="flex flex-col gap-3.5">
                  {questions[step - 1].options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => selectAnswer(questions[step - 1].id as any, opt.value)}
                      className="w-full text-left p-4 sm:p-5 rounded-2xl bg-zinc-900/10 hover:bg-white/5 border border-zinc-900/60 hover:border-accent-red/60 hover:shadow-lg transition-all duration-200 flex items-center justify-between group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl group-hover:bg-black transition-colors shrink-0">
                          {opt.icon}
                        </div>
                        <div>
                          <h4 className="font-display text-base text-zinc-100 group-hover:text-white uppercase tracking-wider">
                            {opt.label}
                          </h4>
                          <p className="text-[11px] text-zinc-400 mt-0.5 leading-none">
                            {opt.desc}
                          </p>
                        </div>
                      </div>
                      <div className="w-5 h-5 rounded-full border border-zinc-800 group-hover:border-accent-red group-hover:bg-accent-red/10 flex items-center justify-center shrink-0 transition-all">
                        <Zap className="w-2.5 h-2.5 text-zinc-800 group-hover:text-accent-red group-hover:fill-accent-red" />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Results matched Screen */}
            {step === 4 && matchedProduct && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center gap-1.5 bg-emerald-950/40 border border-emerald-900/40 px-3 py-1 bg-black/40 rounded-full mb-6 text-emerald-400 font-mono text-[9px] font-black tracking-widest uppercase">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-900/20" />
                  100% PHYSIOLOGICAL MATCH COMPUTED
                </div>

                <div className="flex flex-col md:flex-row gap-8 items-center text-left">
                  {/* Left Column can mock and splash */}
                  <div className={`w-full md:w-2/5 p-6 rounded-2.5xl bg-gradient-to-t ${matchedProduct.colorTheme} border border-white/5 relative min-h-[250px] flex items-center justify-center`}>
                    <img
                      src={matchedProduct.image}
                      alt={matchedProduct.name}
                      referrerPolicy="no-referrer"
                      className="h-56 object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    />
                  </div>

                  {/* Right Column match specs */}
                  <div className="w-full md:w-3/5">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest leading-none block">YOUR VELOCITY WEAPON</span>
                    <h3 className="font-display text-2.5xl text-white uppercase italic mt-1 leading-none tracking-tight">
                      {matchedProduct.name}
                    </h3>
                    <p className="text-[10px] text-accent-red uppercase font-mono tracking-widest font-black mt-2">
                      FLAVOR PROFILE: {matchedProduct.flavor}
                    </p>
                    
                    <p className="text-xs text-zinc-400 mt-3 leading-relaxed">
                      {matchedProduct.description}
                    </p>

                    {/* Quick benefit checkboxes */}
                    <div className="mt-5 flex flex-col gap-2 border-t border-zinc-900/60 pt-4">
                      {matchedProduct.benefits.slice(0, 2).map((b) => (
                        <div key={b} className="flex items-center gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    {/* Quick dosage quote instructions */}
                    <div className="mt-4 p-3 rounded-lg bg-zinc-900/30 border border-zinc-900/60 text-xs text-zinc-400 leading-relaxed font-sans italic">
                      &ldquo;{matchedProduct.bestUse}&rdquo;
                    </div>
                  </div>
                </div>

                {/* Footer buttons row */}
                <div className="flex flex-col sm:flex-row gap-2.5 mt-10 border-t border-zinc-900/60 pt-6">
                  <button
                    onClick={resetMatcher}
                    className="flex-1 bg-zinc-900 border border-zinc-850 hover:bg-zinc-805 text-zinc-300 hover:text-white font-mono text-[10px] font-black uppercase tracking-widest py-3 skew-box flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="unskew-box block flex items-center gap-1.5">
                      <RefreshCw className="w-3.5 h-3.5 text-zinc-500" />
                      Assess Biology Again
                    </span>
                  </button>
                  <button
                    onClick={onClose}
                    className={`flex-1 font-black text-xs uppercase tracking-widest py-3 rounded-xl skew-box flex items-center justify-center gap-2 cursor-pointer ${matchedProduct.accentColor}`}
                  >
                    <span className="unskew-box block">Claim Matched Dose Nearby</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </AnimatePresence>
  );
}
