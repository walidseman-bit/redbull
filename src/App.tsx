/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import ProductSection from "./components/ProductSection";
import Benefits from "./components/Benefits";
import Lifestyle from "./components/Lifestyle";
import Athletes from "./components/Athletes";
import Events from "./components/Events";
import CommunityStories from "./components/CommunityStories";
import HowToEnjoy from "./components/HowToEnjoy";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EnergyMatchModal from "./components/EnergyMatchModal";

export default function App() {
  const [isMatchModalOpen, setIsMatchModalOpen] = useState(false);

  return (
    <div className="bg-[#050505] text-white min-h-screen font-sans selection:bg-accent-red selection:text-white overflow-x-hidden antialiased">
      {/* 1. Header Navigation */}
      <Navbar onOpenMatchModal={() => setIsMatchModalOpen(true)} />

      {/* 2. Hero cinematic section */}
      <Hero onOpenMatchModal={() => setIsMatchModalOpen(true)} />

      {/* 3. Global Social Proof Metrics */}
      <SocialProof />

      {/* 4. Products Grid Showcase */}
      <ProductSection onOpenMatchModal={() => setIsMatchModalOpen(true)} />

      {/* 5. Benefits indicators (Why choose us) */}
      <Benefits />

      {/* 6. Immersive horizontal slider experiences */}
      <Lifestyle />

      {/* 7. Featured Athletes & ambassadors */}
      <Athletes />

      {/* 8. Events schedule & map highlights */}
      <Events />

      {/* 9. Authentic customer stories */}
      <CommunityStories />

      {/* 10. Scenario recommendations (How to enjoy) */}
      <HowToEnjoy />

      {/* 11. Support accordions (FAQ) */}
      <FAQ />

      {/* Final Exit Intent Conversion Block */}
      <section className="bg-gradient-to-b from-[#050505] to-[#010915] py-24 select-none border-t border-zinc-900/60 text-center relative overflow-hidden">
        {/* Glow ambient bulb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-red/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-[10px] sm:text-xs font-mono font-black text-accent-red tracking-widest uppercase mb-4 block animate-pulse">
            THE FINAL ACCELERATION SPRINT
          </span>
          <h2 className="font-display text-4xl sm:text-7xl uppercase italic tracking-tighter text-white mb-6">
            READY TO UNLOCK YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-red-400 to-accent-blue">NEXT ADVENTURE?</span>
          </h2>
          <p className="max-w-xl text-zinc-400 text-xs sm:text-sm leading-relaxed mx-auto mb-10 pr-2">
            Do not stay stationary under standard energies. Select the physical and mental ignite formula 
            engineered specifically to give you absolute high-velocity wings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => {
                const el = document.querySelector("#products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full sm:w-auto bg-accent-red hover:bg-red-700 text-white font-bold uppercase text-xs tracking-widest py-4 px-8 skew-box transition-transform active:scale-95 cursor-pointer leading-none"
            >
              <span className="unskew-box block">Explore Products</span>
            </button>
            <button
              onClick={() => setIsMatchModalOpen(true)}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-bold uppercase text-xs tracking-widest py-4 px-8 skew-box transition-transform active:scale-95 cursor-pointer leading-none"
            >
              <span className="unskew-box block">Configure Mindset Match</span>
            </button>
          </div>
        </div>
      </section>

      {/* 12. Contact recruitment desk */}
      <Contact />

      {/* 13. Regulatory footer links */}
      <Footer />

      {/* Onboarding Interactive Matcher overlay */}
      <EnergyMatchModal
        isOpen={isMatchModalOpen}
        onClose={() => setIsMatchModalOpen(false)}
      />
    </div>
  );
}

