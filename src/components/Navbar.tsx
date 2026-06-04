"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { name: "Home", path: "#home" },
  { name: "Skills", path: "#skills" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple scrollspy logic
      const sections = NAV_ITEMS.map(item => item.path.replace('#', ''));
      let currentActive = "#home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentActive = `#${section}`;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(path);
  };

  return (
    <header className="fixed top-0 z-50 w-full flex justify-center pt-4 px-4">
      <div
        className={`mx-auto max-w-5xl w-full flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled
            ? "bg-black/85 backdrop-blur-md border border-white/15 py-3 px-6 shadow-2xl shadow-black/60"
            : "bg-black/40 backdrop-blur-sm border border-white/8 py-3 px-6 shadow-lg shadow-black/20"
        }`}
      >
        {/* Logo / Name */}
        <div className="flex items-center gap-4">
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="group flex items-center gap-2 cursor-pointer">
            <span className="font-sans text-base font-semibold tracking-tight text-text transition-colors group-hover:text-white">
              UDAY BANSAL
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  isActive ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavBackground"
                    className="absolute inset-0 rounded-full bg-white/10"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Button (Resume Download Link) */}
        <div className="hidden md:flex items-center gap-4">
          {/* Availability Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-muted">Available</span>
          </div>

          <Link
            href="/resume"
            className="flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold transition-all hover:scale-105 hover:bg-gray-100"
          >
            Resume
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-full text-muted hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute top-24 left-4 right-4 md:hidden border border-white/10 rounded-2xl bg-black/95 backdrop-blur-md p-4 shadow-2xl"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-muted hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <Link
              href="/resume"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-white text-black py-3 text-sm font-semibold transition-all hover:bg-gray-200"
            >
              View Resume
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
