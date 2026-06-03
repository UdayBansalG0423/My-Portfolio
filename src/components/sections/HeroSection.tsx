"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import Typewriter from "@/components/Typewriter";
import { ArrowRight, Database, Award, Briefcase, GraduationCap } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section id="home" className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 pt-16 pb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-4xl w-full text-center flex flex-col items-center justify-center z-10 py-12 md:py-20"
      >
        {/* Sleek intro label */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-muted mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for Internships & Roles
        </motion.div>

        {/* Big display name */}
        <motion.h1
          variants={itemVariants}
          className="font-sans text-5xl md:text-8xl font-bold tracking-tight text-white mb-2 leading-tight"
        >
          Uday Bansal
        </motion.h1>

        {/* Headline */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg md:text-xl font-semibold text-emerald-400 mb-6 tracking-wide"
        >
          AI/ML Engineer | Generative AI Developer | Building Intelligent Systems
        </motion.p>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="font-sans text-xl md:text-2xl font-medium text-muted mb-8 min-h-[40px] flex items-center justify-center"
        >
          <span className="mr-2">Specializing in</span>
          <span className="text-white">
            <Typewriter
              words={["Generative AI.", "ML Engineering.", "RAG Pipelines.", "Backend Systems."]}
            />
          </span>
        </motion.div>

        {/* Quick bio summary */}
        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-sm md:text-base text-muted font-sans leading-relaxed mb-12 text-center"
        >
          Hi, I&apos;m Uday Bansal, a Computer Science student specializing in Artificial Intelligence and Machine Learning. 
          I build machine learning models, Generative AI applications, and intelligent systems that solve real-world problems. 
          My interests include Machine Learning, Deep Learning, Large Language Models, Retrieval-Augmented Generation (RAG), 
          Backend Development, and AI-powered products. Currently, I am focused on mastering production-grade AI systems, 
          scalable backend architectures, and deploying end-to-end AI applications.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20"
        >
          <Link
            href="#projects"
            className="group w-full sm:w-auto px-8 h-12 bg-white text-black font-semibold text-sm rounded-full flex items-center justify-center gap-2 transition-all hover:scale-105 hover:bg-gray-100 shadow-lg shadow-white/10"
          >
            Explore Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 h-12 border border-white/10 bg-white/5 text-white hover:bg-white/10 font-medium text-sm rounded-full flex items-center justify-center gap-2 transition-all hover:border-white/20"
          >
            Get In Touch
          </Link>
        </motion.div>

        {/* Stats Pill Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 md:gap-8 w-full max-w-3xl glass-panel p-4 md:p-6 hover:border-white/10 transition-colors"
        >
          {[
            { label: "Core Projects", value: "3+", icon: Database },
            { label: "Current Focus", value: "GenAI & RAG", icon: Award },
            { label: "B.Tech Year", value: "4th Year", icon: GraduationCap },
            { label: "Academic GPA", value: "7.4/10", icon: Briefcase },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-2 md:gap-4 px-2 md:px-4 border-r border-white/5 last:border-r-0"
              >
                <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/5 text-muted">
                  <Icon className="h-4 w-4 md:h-5 md:w-5" />
                </div>
                <div className="flex flex-col items-start">
                  <span className="font-sans text-sm md:text-lg font-bold text-white leading-none mb-1">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[10px] md:text-xs font-medium text-muted">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 flex flex-col items-center gap-3 pointer-events-none"
      >
        <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-muted/60 uppercase">
          Scroll to explore
        </span>
        <div className="w-[1px] h-8 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
