/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react";
import { Mail, Send, Activity, Globe, MessageCircle, Github, Instagram, Youtube, CheckCircle2, Flame, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isJoinedSpace, setIsJoinedSpace] = useState(false);

  const handleSubscribeNewsletter = (e: FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setIsJoinedSpace(true);
      setTimeout(() => {
        setIsJoinedSpace(false);
        setNewsletterEmail("");
      }, 3500);
    }
  };

  const footerLinks = [
    {
      title: "WING DISSECTIONS",
      links: [
        { label: "Original Formula", href: "#products" },
        { label: "Ice Sugar-Free", href: "#products" },
        { label: "Black Out Zero", href: "#products" },
        { label: "Tropical Edition", href: "#products" },
      ],
    },
    {
      title: "LIFESTYLE FLIGHTS",
      links: [
        { label: "Esports & Gaming", href: "#lifestyle" },
        { label: "High Altitude Climbers", href: "#lifestyle" },
        { label: "Metabolic Workouts", href: "#lifestyle" },
        { label: "Street Skateboards", href: "#athletes" },
      ],
    },
    {
      title: "CHAMPIONS CORNER",
      links: [
        { label: "F1 Racing Division", href: "#athletes" },
        { label: "Skate Ambassadors", href: "#athletes" },
        { label: "Supersonic High Jumps", href: "#events" },
        { label: "Abyss Fjord Divers", href: "#events" },
      ],
    },
    {
      title: "VELOCITY CODES",
      links: [
        { label: "Interactive FAQ", href: "#faq" },
        { label: "Recruitment Desk", href: "#contact" },
        { label: "Brand Coordinates", href: "#contact" },
        { label: "Portfolio Disclosures", href: "#faq" },
      ],
    },
  ];

  return (
    <footer className="bg-[#050505] border-t border-zinc-900/60 overflow-hidden select-none relative pt-20 pb-12 text-left">
      {/* Background Ambience Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(1.5px_1.5px_at_90px_90px,#ffffff03,transparent)] pointer-events-none" />
      <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-[#001838] via-[#DB0A0A] to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Segment: Newsletter Callout & Brand Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-900/60">
          {/* Logo brand */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4 text-left">
            <a href="#home" className="flex items-center gap-1.5 group select-none">
              <div className="relative flex items-center justify-center">
                <Flame className="w-8 h-8 text-accent-red fill-current group-hover:scale-110 transition-transform duration-300" />
                <Zap className="absolute w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <span className="font-display tracking-tight text-2xl text-white italic">
                APEX<span className="text-accent-red">VELOCITY</span>
              </span>
            </a>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed font-sans">
              Designed as a portfolio benchmark displaying world-class conversion layout, 
              interactive modular tabs, and high-fidelity 3D brand styles inspired by extreme sports.
            </p>
            {/* Social Grid */}
            <div className="flex gap-3.5 mt-2">
              <a href="#" className="p-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900/40 hover:border-zinc-800 text-zinc-500 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Github">
                <Github className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900/40 hover:border-zinc-800 text-zinc-500 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="p-2.5 bg-zinc-950 hover:bg-zinc-900 border border-zinc-900/40 hover:border-zinc-800 text-zinc-500 hover:text-white rounded-lg transition-colors cursor-pointer" aria-label="Youtube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* High conversions newsletter signup */}
          <div className="lg:col-span-7 flex flex-col gap-3 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest text-accent-red uppercase font-black">
              SECURE ADVANCED TELEMETRY
            </span>
            <h4 className="font-display text-white text-xl sm:text-2xl uppercase italic leading-none tracking-tight">
              SUBSCRIBE TO THE SPEEDSHEET
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-lg mb-2">
              No daily spam. Get instant notification on supersonic jump dates, esports qualifiers, 
              and new hyper-vitamin editions before they go public.
            </p>

            {isJoinedSpace ? (
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex items-center gap-2 text-emerald-400 p-4 bg-emerald-950/20 border border-emerald-900/40 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span className="text-xs font-bold uppercase tracking-widest">WINGS LOGGED! Welcome to the Velocity Alliance.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribeNewsletter} className="flex gap-2 w-full max-w-md">
                <input
                  type="email"
                  required
                  placeholder="Enter email coordinate"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-black/60 text-white text-xs border border-zinc-855/65 focus:border-accent-red focus:outline-none p-3.5 rounded-xl font-mono placeholder:text-zinc-700 focus:ring-1 focus:ring-accent-red"
                />
                <button
                  type="submit"
                  className="bg-[#DB0A0A] hover:bg-[#b00505] text-white font-bold text-xs uppercase tracking-widest px-5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer shrink-0 py-3 skew-box duration-200 shadow-md shadow-[#DB0A0A]/15"
                >
                  <span className="unskew-box block flex items-center gap-1.5">
                    JOIN FLYING
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Middle Segment: Comprehensive Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-zinc-900/60 text-left">
          {footerLinks.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h5 className="font-mono text-[9px] font-black tracking-widest text-zinc-500 uppercase leading-none border-b border-zinc-950 pb-2">
                {col.title}
              </h5>
              <div className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-xs text-zinc-400 hover:text-accent-red font-sans transition-colors duration-250"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Segment: Disclaimers & Copyright notes */}
        <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2.5 max-w-2xl text-left">
            <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase font-black leading-none">
              LEGAL DISCLOSURE &amp; COMPLIANCE
            </span>
            <p className="text-[10px] text-zinc-500 leading-relaxed font-sans font-medium">
              CRITICAL: This application is a conceptual brand landing showcase website inspired by Red Bull&apos;s extreme 
              sports layout and design identity for educational, portfolio, and training demonstration purposes only. 
              This is not the official Red Bull website and does not claim to hold trademarks, official brand assets, 
              or copyrights belonging to Red Bull GmbH. No sales or commercial transactions are fulfilled on this applet.
            </p>
            <p className="text-[10px] text-zinc-650 mt-1 font-mono tracking-tight leading-none uppercase">
              RE-ENGINEERED WITH COMPLIANT INDEPENDENT DESIGNS AND STUDIO 3D RENDERS.
            </p>
          </div>

          {/* Privacy & terms links mockup */}
          <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
            <div className="flex gap-4 text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-widest">
              <a href="#" className="hover:text-accent-red">Privacy Policy</a>
              <span className="text-zinc-800">•</span>
              <a href="#" className="hover:text-accent-red">Terms of Use</a>
            </div>
            <p className="text-[9px] font-mono font-medium text-zinc-500 uppercase mt-1">
              © 2026 APEX VELOCITY ENERGY. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
