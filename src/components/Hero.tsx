/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Play, ArrowRight, Zap, Target, Flame, Volume2, VolumeX, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onOpenMatchModal: () => void;
}

export default function Hero({ onOpenMatchModal }: HeroProps) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isVideoMuted, setIsVideoMuted] = useState(true);

  const handleScrollToProducts = () => {
    const element = document.querySelector("#products");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const heroBg = "/src/assets/images/hero_bg_extreme_1781610267586.jpg";

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] select-none">
      {/* Background Image / Ambient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Extreme sports action background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover scale-105 filter brightness-[0.22] contrast-125 saturate-100 object-center"
        />
        <div className="absolute inset-0 energy-gradient opacity-65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-[#050505]/95" />
      </div>

      {/* Hero Content Containers */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-16">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-black/80 border border-white/10 px-4 py-2 md:py-1.5 backdrop-blur-md mb-8 skew-box shadow-xl"
        >
          <div className="unskew-box flex items-center gap-2">
            <div className="flex items-center gap-1 text-accent-red">
              <Flame className="w-4.5 h-4.5 fill-accent-red" />
              <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400 -ml-1 animate-pulse" />
            </div>
            <span className="text-[10px] font-mono tracking-widest text-zinc-100 uppercase font-black">
              RE-ENGINEERED ENERGY FOR THE BOLD
            </span>
          </div>
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display uppercase italic leading-none mb-6 tracking-tighter"
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[110px] text-white">FUEL WHAT</span>
          <span className="inline-block bg-accent-red text-white px-5 py-2.5 text-5xl sm:text-7xl md:text-8xl lg:text-[110px] select-none mt-2 shadow-[0_10px_40px_rgba(219,10,10,0.5)]">
            DRIVES YOU.
          </span>
        </motion.h1>

        {/* Supporting Persuasive Copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-base sm:text-lg md:text-xl text-zinc-300 font-sans tracking-wide leading-relaxed mb-10 font-light"
        >
          Unlock absolute adrenaline, extreme grit, and deep neurological flow. 
          We build formulas that fuel physical force and trigger supreme mental stamina. 
          Step into active velocity.
        </motion.p>

        {/* Action Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto"
        >
          <button
            id="hero-explore-products-btn"
            onClick={handleScrollToProducts}
            className="w-full sm:w-auto bg-accent-red hover:brightness-110 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all duration-150 flex items-center justify-center gap-2 group skew-box shadow-[0_4px_25px_rgba(219,10,10,0.45)] cursor-pointer"
          >
            <span className="unskew-box block flex items-center gap-2">
              Explore Products
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </span>
          </button>

          <button
            id="hero-watch-experience-btn"
            onClick={() => setIsPlayingVideo(true)}
            className="w-full sm:w-auto glass hover:bg-white/10 text-white text-sm font-bold uppercase tracking-widest px-8 py-4 transition-all duration-150 flex items-center justify-center gap-2 group skew-box cursor-pointer"
          >
            <span className="unskew-box block flex items-center gap-2">
              <Play className="w-4 h-4 text-accent-red fill-accent-red group-hover:scale-110 transition-transform duration-200" />
              Watch Experience
            </span>
          </button>
        </motion.div>
      </div>

      {/* Floating Indicators / UI Elements */}
      <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-3 select-none">
        <div className="flex -space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">OR</div>
          <div className="w-8 h-8 rounded-full border-2 border-black bg-sky-400 flex items-center justify-center text-[10px] font-black text-black">SF</div>
          <div className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800 flex items-center justify-center text-[10px] font-black text-white">ZR</div>
          <div className="w-8 h-8 rounded-full border-2 border-black bg-amber-500 flex items-center justify-center text-[10px] font-black text-black">ED</div>
        </div>
        <p className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
          FOUR PREMIUM BLENDS AVAILABLE
        </p>
      </div>

      <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-1.5 font-mono text-xs text-zinc-400 select-none bg-black/40 px-3 py-1.5 rounded-md border border-zinc-900/50 backdrop-blur-sm">
        <Target className="w-4 h-4 text-accent-red animate-pulse" />
        <span className="text-zinc-500">CRAFT STATUS:</span>
        <span className="text-emerald-400 uppercase font-bold tracking-wider">LIVE SHOWCASE</span>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-70">
        <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">SCROLL ENGINE</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-1.5 h-6 bg-gradient-to-b from-accent-red to-transparent rounded-full"
        />
      </div>

      {/* Immersive Video Player Overlay (Action Loop Simulator) */}
      <AnimatePresence>
        {isPlayingVideo && (
          <motion.div
            id="video-player-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-55 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setIsPlayingVideo(false)}
              className="absolute top-6 right-6 p-3 text-zinc-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-7 h-7" />
            </button>

            <div className="w-full max-w-5xl aspect-video bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative flex flex-col justify-end">
              {/* Actual Video loop from Pexels, high-energy extreme biking/surfing footage */}
              <video
                src="https://assets.mixkit.co/videos/preview/mixkit-extreme-sport-biker-jumping-high-on-a-dirt-ramp-40992-large.mp4"
                autoPlay
                loop
                playsInline
                muted={isVideoMuted}
                className="w-full h-full object-cover"
              />

              {/* Dynamic Video Stats Controls Overlay to look incredibly tech-premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6 pointer-events-none">
                <div className="flex justify-between items-start">
                  <div className="bg-red-600/90 text-white font-mono text-[9px] px-2 py-1 rounded tracking-widest uppercase">
                    KINETIC FEED
                  </div>
                  <div className="bg-black/70 border border-zinc-800 text-[10px] font-mono text-zinc-400 px-3 py-1 rounded backdrop-blur">
                    BUFFER STATUS: EXTREME
                  </div>
                </div>

                <div className="flex justify-between items-end pointer-events-auto">
                  <div className="flex flex-col gap-1 text-left">
                    <p className="text-xs uppercase font-mono tracking-widest text-zinc-400">APEX VELOCITY SERIES</p>
                    <p className="text-lg sm:text-2xl font-black text-white italic uppercase tracking-wider">BREATHING THE RED LINE</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="p-3 bg-black/75 hover:bg-black/90 border border-zinc-800 rounded-lg text-white pointer-events-auto transition-colors"
                      title={isVideoMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isVideoMuted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-amber-400" />}
                    </button>
                    <button
                      onClick={() => setIsPlayingVideo(false)}
                      className="px-5 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-black uppercase tracking-widest pointer-events-auto transition-colors"
                    >
                      Exit Flight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
