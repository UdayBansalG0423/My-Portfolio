"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const SOCIAL_LINKS = [
  { name: "GitHub", href: "https://github.com/UdayBansalG0423", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/uday-bansal", icon: FaLinkedin },
  { name: "Twitter", href: "https://twitter.com/", icon: FaTwitter },
];

const WORDS = ["amazing", "creative", "impactful", "intelligent"];

export default function Footer() {
  const [time, setTime] = useState<string>("");
  const [wordIndex, setWordIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    // Word cycler
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);

    // Time updater
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }) + " IST"
      );
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(timeInterval);
    };
  }, []);

  if (pathname === "/resume") {
    return null;
  }

  return (
    <footer className="w-full bg-black border-t border-white/5 py-10 mt-16 relative z-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left: Creative Status & Animated Text */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-3">
            
            {/* Hoverable Status Pill */}
            <div className="group relative flex items-center gap-2 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full overflow-hidden transition-colors hover:bg-white/10 hover:border-white/20 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400/90 uppercase tracking-widest mt-[1px]">Available</span>
            </div>
            
            <span className="text-white/20 text-xs hidden sm:block">•</span>
            
            {/* Animated Word Cycler */}
            <div className="text-sm font-medium text-white/70 tracking-tight flex items-center gap-1.5 h-6">
              Let&apos;s build something 
              <div className="relative inline-flex justify-start items-center w-20 h-full overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={WORDS[wordIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute font-semibold text-white/95"
                  >
                    {WORDS[wordIndex]}.
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
            
          </div>
        </div>

        {/* Right: Socials & Time/Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <div className="flex items-center gap-5">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/40 hover:text-white transition-all hover:-translate-y-0.5"
                aria-label={link.name}
              >
                <link.icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-white/40 uppercase tracking-wider">
            <span>{time || "Loading..."}</span>
            <span className="text-white/20">•</span>
            <span>© {new Date().getFullYear()} UDAY BANSAL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
