/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, MessageSquare, Send, CheckCircle2, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "sponsorship",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: "", email: "", subject: "sponsorship", message: "" });
      }, 3500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_10px_30px,#ffffff03,transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full">
            <Mail className="w-3.5 h-3.5 text-accent-red" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-[#DB0A0A] uppercase">
              RECRUITMENT &amp; INTEL FEED
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none">
            TRANSMIT YOUR <span className="text-accent-red">KINETIC SIGNAL</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed pr-2">
            Are you a fast F1 driver, high-altitude boarder, esports coach, or regional retail store lead? 
            Select your corridor and message our headquarters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="font-display text-xl text-white uppercase italic tracking-tight leading-none">
                APEX COMMAND POSTS
              </h3>
              
              <div className="flex flex-col gap-5">
                {/* Location */}
                <div className="flex gap-4 items-start bg-zinc-900/10 hover:bg-white/5 p-4 rounded-xl border border-zinc-900/65 shadow-md">
                  <div className="p-2.5 bg-black/60 border border-zinc-850 rounded-lg text-accent-red shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] font-black tracking-widest text-zinc-500 uppercase leading-none mb-1">HEADQUARTERS</h5>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      77 Velocity Speedway Dr,<br/>
                      Sparks, Nevada, USA
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start bg-zinc-900/10 hover:bg-white/5 p-4 rounded-xl border border-zinc-900/65 shadow-md">
                  <div className="p-2.5 bg-black/60 border border-zinc-850 rounded-lg text-accent-blue shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] font-black tracking-widest text-zinc-500 uppercase leading-none mb-1">RECRUITMENT CORRIDOR</h5>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      talent@apex-velocity.com
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start bg-zinc-900/10 hover:bg-white/5 p-4 rounded-xl border border-zinc-900/65 shadow-md">
                  <div className="p-2.5 bg-black/60 border border-zinc-850 rounded-lg text-amber-500 shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="font-mono text-[9px] font-black tracking-widest text-zinc-500 uppercase leading-none mb-1">KINETIC SPECS LINE</h5>
                    <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                      +1 (800) 999-APEX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Brand statement */}
            <div className="hidden lg:block p-4 border border-zinc-900/60 rounded-xl bg-black/40 text-left">
              <span className="font-mono text-[8px] font-bold text-zinc-500 uppercase tracking-widest block mb-1">PROUD EDUCATIONAL INSTANCE</span>
              <p className="text-[10px] text-zinc-400 leading-relaxed font-sans font-medium">
                This is an elite conceptual website for educational and portfolio demonstration only. 
                We operate to showcase state-of-the-art marketing, interactive UI, and visual excellence.
              </p>
            </div>
          </div>

          {/* Right Column: Form (80% Grid width) */}
          <div className="lg:col-span-8 glass rounded-3xl border border-white/10 p-6 sm:p-8 shadow-2xl relative">
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 bg-[#050505] rounded-3xl z-20 flex flex-col items-center justify-center text-center p-8"
              >
                <div className="w-16 h-16 bg-emerald-950/40 border border-emerald-900/40 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl text-white uppercase italic tracking-wider leading-none">
                  SIGNAL DISPATCHED SUCCESSFULLY!
                </h3>
                <p className="text-xs text-zinc-400 mt-3 max-w-sm leading-relaxed">
                  We have logged your telemetric signature. An Apex Brand Specialist of the chosen 
                  corridor will evaluate your stats and follow up in due course.
                </p>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-mono font-bold text-zinc-550 uppercase tracking-widest pl-1">
                    YOUR NAME or TEAM TAG
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Max Verstappen/Team Solo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-black/60 text-white text-xs border border-zinc-805/60 focus:border-accent-red focus:outline-none p-3.5 rounded-xl font-mono placeholder:text-zinc-700 focus:ring-1 focus:ring-accent-red"
                  />
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-[10px] font-mono font-bold text-zinc-550 uppercase tracking-widest pl-1">
                    EMAIL COORDINATES
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. pilot@speedway.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-black/60 text-white text-xs border border-zinc-805/60 focus:border-accent-red focus:outline-none p-3.5 rounded-xl font-mono placeholder:text-zinc-700 focus:ring-1 focus:ring-accent-red"
                  />
                </div>
              </div>

              {/* Subject Dropdown Selector */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-mono font-bold text-zinc-550 uppercase tracking-widest pl-1">
                  COMMUNICATION CORRIDOR
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="bg-black/60 text-white text-xs border border-zinc-805/60 focus:border-accent-red focus:outline-none p-3.5 rounded-xl font-mono cursor-pointer focus:ring-1 focus:ring-accent-red"
                >
                  <option value="sponsorship">Extreme Athlete / Esports Roster Sponsorship</option>
                  <option value="distributors">B2B Distributor / Retail Hub Franchise</option>
                  <option value="media">Media &amp; Public Relations Coordinates</option>
                  <option value="feedback">Product Design Feedback &amp; Brand Love</option>
                </select>
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-1.5 text-left">
                <label className="text-[10px] font-mono font-bold text-zinc-550 uppercase tracking-widest pl-1">
                  KINETIC TRANSMISSION (MESSAGE)
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your achievements, championship stats, or store distribution plans..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-black/60 text-white text-xs border border-zinc-805/60 focus:border-accent-red focus:outline-none p-3.5 rounded-xl font-sans placeholder:text-zinc-700 focus:ring-1 focus:ring-accent-red resize-none leading-relaxed"
                />
              </div>

              {/* Submission button */}
              <button
                type="submit"
                className="bg-[#DB0A0A] hover:bg-[#b00505] text-white font-bold text-xs uppercase tracking-widest py-4 px-6 skew-box flex items-center justify-center gap-2 mt-2 cursor-pointer shadow-lg shadow-[#DB0A0A]/10 transition-colors duration-200 leading-none self-start"
              >
                <span className="unskew-box block flex items-center gap-2">
                  Transmit Kinetic Signal
                  <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
