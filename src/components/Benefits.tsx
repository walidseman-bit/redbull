/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BENEFITS } from "../data";
import { motion } from "motion/react";
import { Zap, Compass, Sparkles, Award, Cpu, Activity } from "lucide-react";

export default function Benefits() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-6 h-6 text-accent-red fill-accent-red/20" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-sky-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case "Award":
        return <Award className="w-6 h-6 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-emerald-400" />;
      case "Activity":
        return <Activity className="w-6 h-6 text-accent-blue" />;
      default:
        return <Zap className="w-6 h-6 text-accent-red" />;
    }
  };

  return (
    <section className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <span className="font-mono text-[9px] text-[#DB0A0A] font-extrabold tracking-widest uppercase mb-3">
              VALUED CONSTRUCTS
            </span>
            <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none">
              WHY AMBITIOUS MINDSET <br/>
              <span className="text-accent-red">RUNS ON APEX</span>
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-zinc-400 text-left leading-relaxed">
            Every molecule in an Apex Velocity can is placed with strict physiological intent. 
            From chemical-level nervous hydration to public aesthetic pride, we outwork alternatives.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group p-6 sm:p-8 rounded-2xl glass hover:border-accent-red hover:bg-white/8 transition-all duration-300 flex flex-col justify-between items-start text-left relative overflow-hidden shadow-xl"
            >
              {/* Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(219,10,10,0.03),transparent)] group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col items-start gap-4">
                {/* Icon Circle */}
                <div className="flex items-center justify-center p-3.5 bg-zinc-950/80 border border-white/10 rounded-xl group-hover:border-accent-red/20 transition-colors duration-300">
                  {getIcon(benefit.iconName)}
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-1.5 mt-2">
                  <h3 className="font-display tracking-tight text-white uppercase sm:text-xl text-lg leading-none">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">
                    {benefit.description}
                  </p>
                </div>
              </div>

              {/* Simple subtle speedline underline animation on hover */}
              <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-accent-red to-accent-blue transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
