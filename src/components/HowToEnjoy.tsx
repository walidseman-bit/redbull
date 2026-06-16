/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Zap, Brain, Moon, Car, Paintbrush, Flame, Timer, Activity } from "lucide-react";

export default function HowToEnjoy() {
  const scenarios = [
    {
      id: "pre-workout",
      title: "Pre-Workout Catalyst",
      icon: <Activity className="w-5 h-5 text-red-500" />,
      situation: "30 minutes before stepping into intensive metabolic training or crossfit intervals.",
      recommendation: "Apex Velocity Original or Black Out Zero Sugar.",
      guide: "Increases muscular aerobic capacity. Drink chilled for instant performance stimulation.",
      metric: "ELECTROLYTE LEVEL: CRITICAL",
    },
    {
      id: "midnight-codes",
      title: "Midnight Coding / Gaming",
      icon: <Brain className="w-5 h-5 text-cyan-400" />,
      situation: "Pushing through multi-file repository audits or tactical champion esports leagues.",
      recommendation: "Apex Ice Sugar-Free.",
      guide: "Zero calorie/carbohydrate footprint protects you from glucose crash-slumps, maintaining micro-stamina.",
      metric: "COGNITIVE STRENGTH: MAX",
    },
    {
      id: "road-trips",
      title: "High-Altitude Roadtrips",
      icon: <Car className="w-5 h-5 text-amber-500" />,
      situation: "Maintaining extreme visual tracking across highway lanes or wilderness coordinates.",
      recommendation: "Apex Original or Tropical Edition.",
      guide: "Supplies crucial B-group vitamins to reduce bodily reaction lag during physical static states.",
      metric: "HYDRATION CHECK: PASS",
    },
    {
      id: "creative-flow",
      title: "Creative Painting / Mixing",
      icon: <Paintbrush className="w-5 h-5 text-purple-400" />,
      situation: "When late-night graphics sets or electronic visual synthesis demand infinite art focus.",
      recommendation: "Apex Tropical Edition.",
      guide: "Sun-drenched passion fruit extracts offer an absolute sensory boost and mood elevation.",
      metric: "INSPIRATION BIAS: ELEVATED",
    },
  ];

  return (
    <section className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_30px_30px,#ffffff03,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full">
            <Timer className="w-3.5 h-3.5 text-accent-red" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-accent-red uppercase">
              STRATEGIC RECOMMENDATION
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none">
            ENGINEERED FOR <span className="text-accent-red">SPECIFIC SPRINT STATES</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pr-2">
            Apex isn&apos;t a random soda. It is active kinetic technology. We map the biological 
            needs of each state so that your focus converges perfectly on the task ahead.
          </p>
        </div>

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {scenarios.map((sc, index) => (
            <motion.div
              key={sc.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="p-6 sm:p-8 rounded-3xl glass border border-zinc-900/60 hover:border-accent-red/40 hover:bg-zinc-950/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header segment */}
                <div className="flex items-center justify-between border-b border-zinc-900/60 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-zinc-950 border border-zinc-850 rounded-xl group-hover:border-zinc-750 transition-colors">
                      {sc.icon}
                    </div>
                    <h3 className="font-display text-lg sm:text-xl text-white uppercase tracking-tight italic leading-none">
                      {sc.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[8px] bg-red-950/20 border border-accent-red/20 px-2 py-1 rounded text-accent-red font-bold tracking-widest uppercase">
                    {sc.metric}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest">SITUATION IN PLAY</span>
                    <p className="text-xs text-zinc-300 leading-relaxed mt-1 font-sans">{sc.situation}</p>
                  </div>

                  <div className="flex flex-col text-left mt-1">
                    <span className="text-[9px] font-mono font-bold text-amber-500 uppercase tracking-widest">RECOMMENDED FORMULA</span>
                    <p className="text-xs text-zinc-200 mt-1 font-semibold italic">{sc.recommendation}</p>
                  </div>
                </div>
              </div>

              {/* Biological Guide block */}
              <div className="mt-6 p-4 rounded-xl bg-black/60 border border-zinc-900/60 text-left">
                <span className="text-[8px] font-mono font-bold text-zinc-500 uppercase tracking-widest leading-none block">BIOMECHANICAL OUTCOME</span>
                <p className="text-xs text-zinc-400 mt-1.5 leading-relaxed">{sc.guide}</p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
