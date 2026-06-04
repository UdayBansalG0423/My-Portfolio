"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ParticleNetwork from "./ParticleNetwork";

export default function GlobalEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const xText1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xText2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <>
      {/* Background Parallax Typography */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 flex flex-col justify-between py-[20vh] opacity-20">
        <motion.div 
          style={{ 
            x: xText1, 
            WebkitTextStroke: '1px rgba(255, 255, 255, 0.1)', 
            color: 'transparent' 
          }} 
          className="whitespace-nowrap text-[15vw] font-black font-sans leading-none tracking-tighter"
        >
          GENERATIVE AI • MACHINE LEARNING • DATA SCIENCE
        </motion.div>
        <motion.div 
          style={{ 
            x: xText2, 
            WebkitTextStroke: '1px rgba(16, 185, 129, 0.15)', 
            color: 'transparent' 
          }} 
          className="whitespace-nowrap text-[15vw] font-black font-sans leading-none tracking-tighter"
        >
          BACKEND SYSTEMS • RAG PIPELINES • FASTAPI
        </motion.div>
      </div>

      {/* Background Neural Particles */}
      <ParticleNetwork />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />
    </>
  );
}
