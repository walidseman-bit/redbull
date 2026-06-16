/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { Zap, Menu, X, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onOpenMatchModal: () => void;
}

export default function Navbar({ onOpenMatchModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Products", href: "#products" },
    { label: "Lifestyle", href: "#lifestyle" },
    { label: "Athletes", href: "#athletes" },
    { label: "Events", href: "#events" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleScrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        id="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md border-b border-zinc-900/50 py-3 shadow-lg"
            : "bg-gradient-to-b from-black/80 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("#home");
              }}
              className="flex items-center gap-1.5 group select-none"
            >
              <div className="relative flex items-center justify-center">
                <Flame className="w-8 h-8 text-accent-red fill-accent-red group-hover:scale-110 transition-transform duration-300" />
                <Zap className="absolute w-4 h-4 text-amber-400 fill-amber-400" />
              </div>
              <span className="font-display tracking-tight text-2xl text-white italic">
                APEX<span className="text-accent-red">VELOCITY</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo(item.href);
                  }}
                  className="relative text-xs font-bold text-zinc-300 hover:text-white uppercase tracking-widest transition-colors duration-200 group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                id="navbar-cta-btn"
                onClick={onOpenMatchModal}
                className="px-6 py-2.5 bg-accent-red hover:bg-red-700 text-white uppercase text-xs font-bold tracking-widest transition-all skew-box shadow-[0_4px_20px_rgba(219,10,10,0.3)] cursor-pointer"
              >
                <span className="unskew-box block flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  Find Your Energy
                </span>
              </button>
            </div>

            {/* Mobile Hamburguer */}
            <div className="lg:hidden">
              <button
                id="navbar-mobile-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[60px] z-45 bg-black/98 backdrop-blur-lg flex flex-col justify-between p-6 lg:hidden"
          >
            <div className="flex flex-col gap-5 pt-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleScrollTo(item.href)}
                  className="text-left text-xl font-bold text-white hover:text-accent-red uppercase tracking-widest py-2 border-b border-zinc-900"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="pb-12 flex flex-col items-center gap-4">
              <p className="text-xs text-zinc-500 text-center uppercase tracking-widest font-mono">
                Fuel What Drives You • Apex Velocity
              </p>
              <button
                id="navbar-mobile-cta"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenMatchModal();
                }}
                className="w-full bg-accent-red hover:bg-red-700 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-6 skew-box flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(219,10,10,0.3)]"
              >
                <div className="unskew-box flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                  Find Your Energy Match
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
