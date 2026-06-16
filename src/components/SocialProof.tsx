/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Users2, Award, Globe2, Activity, PlaySquare } from "lucide-react";

export default function SocialProof() {
  const stats = [
    {
      value: "11.5B+",
      label: "CANS FLOWN ANNUALLY",
      description: "Fueling human ambition across every continent.",
      icon: <Activity className="w-5 h-5 text-red-500" />,
    },
    {
      value: "175+",
      label: "COUNTRIES REACHED",
      description: "Distributed across physical and digital boundaries.",
      icon: <Globe2 className="w-5 h-5 text-blue-400" />,
    },
    {
      value: "850+",
      label: "ELITE ATHLETES SPONSORED",
      description: "Pushing physical benchmarks at the extreme line.",
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
    {
      value: "200M+",
      label: "COMMUNITY WARRIORS",
      description: "Sustaining active gaming rosters and racing hubs.",
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  const pressBrands = [
    { name: "KINETIC MAGAZINE", label: "STAMINA AWARD" },
    { name: "VELOCITY DAILY", label: "SPEED SPECIALS" },
    { name: "ESPORTS WEEKLY", label: "FOCUS METRIC #1" },
    { name: "ADRENALINE HUB", label: "BRAND OF DECADE" },
  ];

  return (
    <section className="bg-[#050505] border-y border-zinc-900/60 overflow-hidden py-14 relative select-none">
      <div className="absolute inset-0 bg-radial-gradient from-zinc-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-12 border-b border-zinc-900/60">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-start gap-4 p-5 rounded-2xl glass hover:border-accent-red/40 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-center p-2.5 bg-[#001838]/40 border border-white/10 rounded-xl">
                {stat.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-display text-4xl text-white tracking-tight italic">
                  {stat.value}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[#DB0A0A] font-extrabold uppercase">
                  {stat.label}
                </span>
                <span className="text-xs text-zinc-400 font-sans tracking-wide leading-relaxed">
                  {stat.description}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Press Labels Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-10">
          <p className="text-[10px] font-mono font-black text-zinc-500 uppercase tracking-widest">
            FEATURED TESTIMONY & MEDIA HONORS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {pressBrands.map((press) => (
              <div
                key={press.name}
                className="flex items-baseline gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300 pointer-events-default group select-none"
              >
                <span className="font-sans font-black text-xs tracking-widest text-zinc-200 uppercase italic">
                  {press.name}
                </span>
                <span className="text-[8px] font-mono font-medium text-white uppercase bg-[#DB0A0A] border border-[#DB0A0A] px-1 rounded-sm">
                  {press.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
