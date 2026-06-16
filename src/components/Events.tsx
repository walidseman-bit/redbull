/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { EVENTS } from "../data";
import { motion } from "motion/react";
import { Calendar, MapPin, Sparkles, Send, CheckCircle2 } from "lucide-react";

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [emailInput, setEmailInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmitTicket = (e: FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmailInput("");
      }, 3500);
    }
  };

  return (
    <section id="events" className="py-24 bg-[#050505] border-b border-zinc-900/60 relative overflow-hidden select-none">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <div className="inline-flex items-center gap-1.5 bg-red-950/40 border border-red-950 px-3.5 py-1.5 rounded-full mb-4">
            <Calendar className="w-3.5 h-3.5 text-accent-red" />
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-widest text-[#DB0A0A] uppercase">
              HIGH OCTANE SPECTACLES
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl tracking-tighter text-white uppercase italic leading-none mb-4">
            GLOBAL EXPERIENCES <br className="sm:hidden" />
            <span className="text-accent-red">&amp; WORLD REVEALS</span>
          </h2>
          <p className="max-w-2xl text-xs sm:text-sm text-zinc-400 tracking-wide leading-relaxed">
            We don&apos;t just spectate; we manifest physics-breaking showcases. Stream absolute courage 
            or claim a physical viewing pass below.
          </p>
        </div>

        {/* Dynamic Split Layout: Active Event Selector & Highlights Detail Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Nav List (40% Column on desktop) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase text-left font-black mb-1">
              CHRONOS CALENDAR 2026
            </span>
            {EVENTS.map((event, idx) => (
              <button
                key={event.id}
                onClick={() => {
                  setActiveEvent(idx);
                }}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex gap-4 ${
                  activeEvent === idx
                    ? "glass border-accent-red/60 shadow-xl shadow-accent-red/5 bg-zinc-950/50"
                    : "bg-transparent hover:bg-white/5 border-zinc-900/60"
                }`}
              >
                {/* Date Side Badge */}
                <div className={`p-3 rounded-xl border flex flex-col items-center justify-center min-w-[70px] h-[70px] uppercase font-mono ${
                  activeEvent === idx
                    ? "bg-[#DB0A0A]/10 border-[#DB0A0A] text-white"
                    : "bg-zinc-900/40 border-zinc-800 text-zinc-400"
                }`}>
                  <span className="text-[11px] font-black leading-none text-[#DB0A0A]">2026</span>
                  <span className="text-lg font-black leading-none mt-1 tracking-tighter">
                    {event.date.split(" ")[0].substring(0, 3)}
                  </span>
                  <span className="text-xs font-bold leading-none mt-1">
                    {event.date.split(" ")[1].replace(",", "")}
                  </span>
                </div>

                <div className="flex flex-col justify-center text-left">
                  <h3 className="font-display text-lg text-white uppercase italic tracking-tight hover:text-accent-red transition-colors leading-none">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-zinc-400 mt-2 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: Immersive visual detail view panel (70% Columns) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative rounded-3xl overflow-hidden glass shadow-2xl flex flex-col min-h-[500px]">
              
              {/* Event Cover Image */}
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={EVENTS[activeEvent].image}
                  alt={EVENTS[activeEvent].title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-[0.41] object-center scale-102 hover:scale-105 transition-transform duration-505"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                
                {/* Micro Highlight Pill */}
                <div className="absolute top-4 left-4 bg-zinc-950/90 border border-white/10 px-3 py-1 bg-black/60 rounded inline-flex items-center gap-1 text-[9px] font-mono font-black text-amber-500 uppercase tracking-widest shadow-md backdrop-blur-sm">
                  <Sparkles className="w-3 h-3 text-amber-500 fill-amber-500/20" />
                  Live Stream Coverage
                </div>
              </div>

              {/* Event Details Content */}
              <div className="p-8 text-left flex flex-col justify-between flex-1">
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-2.5xl sm:text-3xl text-white uppercase italic tracking-tight leading-none">
                    {EVENTS[activeEvent].title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-b border-zinc-900/60 pb-4">
                    <span className="flex items-center gap-1 text-accent-red font-bold">
                      <Calendar className="w-3.5 h-3.5" />
                      {EVENTS[activeEvent].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      {EVENTS[activeEvent].location}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-1">
                    {EVENTS[activeEvent].description}
                  </p>
                </div>

                {/* Sub-Highlight Segment box */}
                <div className="mt-6 p-4 rounded-xl bg-zinc-900/30 border border-zinc-900/60 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-3 text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                    CORE RECORD ATTEMPTED:
                  </div>
                  <div className="sm:col-span-9 font-sans font-bold text-xs text-white uppercase italic tracking-wide">
                    &ldquo;{EVENTS[activeEvent].highlight}&rdquo;
                  </div>
                </div>

              </div>
            </div>

            {/* HIGH-CONVERTING "JOIN THE ENERGY" TICKETS PANEL */}
            <div className="rounded-2xl p-6 sm:p-8 glass border border-accent-blue/30 flex flex-col md:flex-row items-center justify-between gap-6 text-left overflow-hidden">
              <div className="flex flex-col gap-1 max-w-md">
                <span className="text-[9px] font-mono font-black text-accent-red uppercase tracking-widest">VIP EXPERIENCES</span>
                <h4 className="font-display text-xl text-white uppercase tracking-tight italic leading-tight">JOIN THE ENERGY GALAXY</h4>
                <p className="text-xs text-zinc-400 pr-1 leading-relaxed">
                  Enter your email to participate in exclusive spectator ticket lotteries, customized physical event code drops, and VIP paddock entries.
                </p>
              </div>

              {/* Action Form */}
              <div className="w-full md:w-auto min-w-[280px]">
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center gap-2 text-emerald-400 p-4 bg-emerald-950/20 border border-emerald-900/50 rounded-xl"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">Pass Request Logged! Check Inbox.</span>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmitTicket} className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Enter dynamic email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="flex-1 bg-black/60 text-white text-xs border border-zinc-800/80 focus:border-accent-red focus:outline-none p-3.5 rounded-lg font-mono placeholder:text-zinc-650 focus:ring-1 focus:ring-accent-red"
                    />
                    <button
                      type="submit"
                      className="bg-[#DB0A0A] hover:bg-[#b00505] text-white font-bold text-xs uppercase tracking-widest p-3.5 skew-box flex items-center justify-center gap-2 transition-colors cursor-pointer shrink-0 leading-none"
                    >
                      <span className="unskew-box block flex items-center gap-2">
                        REQUEST PASS
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
