"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { 
  ArrowLeft, Download, Mail, Phone, Award, 
  BookOpen, Sparkles, Terminal, Code, Globe,
  Check, ChevronDown, ChevronUp
} from "lucide-react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "@/components/Typewriter";
import MagneticCard from "@/components/MagneticCard";
import ScrambleText from "@/components/ScrambleText";

export default function ResumePage() {
  const [copiedState, setCopiedState] = useState<string | null>(null);
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleCopy = (text: string, type: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedState(type);
    setTimeout(() => setCopiedState(null), 2000);
  };

  const toggleProject = (title: string) => {
    setExpandedProjects(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  } as const;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center print:bg-white print:py-0 print:px-0">
      
      {/* Top Reading Progress Bar (Hidden on print) */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-50 print:hidden shadow-[0_0_10px_rgba(16,185,129,0.8)]"
        style={{ scaleX }}
      />

      {/* Top Toolbar (Hidden on print) */}
      <div className="max-w-4xl w-full flex items-center justify-between mb-8 print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Portfolio
        </Link>

        <a
          href="/resume/Uday_Bansal_Resume.pdf"
          download="Uday_Bansal_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 hover:bg-gray-100 shadow-lg shadow-white/5 cursor-pointer"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </a>
      </div>

      {/* Main Resume Sheet */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative overflow-hidden bg-[#080808] print:shadow-none print:border-none print:bg-white print:text-black print:overflow-visible print:p-0"
      >
        {/* Ambient background glow (Hidden on print) */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none print:hidden" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none print:hidden" />

        {/* Resume Header */}
        <motion.div variants={itemVariants} className="border-b border-white/10 pb-8 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6 relative print:border-black/20">
          <div className="relative z-10 flex-1">
            <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight mb-2 print:text-black print:bg-none liquid-gradient-text bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 hover:from-purple-400 hover:via-emerald-400 hover:to-blue-400 transition-all duration-1000">
              <ScrambleText text="Uday Bansal" />
            </h1>
            <p className="font-sans text-lg font-medium text-emerald-400 mb-2 print:text-black print:font-bold">
              AI/ML Engineer & Generative AI Developer
            </p>
            <div className="font-sans text-xs text-muted uppercase tracking-wider font-semibold flex flex-wrap justify-center md:justify-start items-center gap-2 print:text-gray-800">
              <span>4th Year B.Tech CSE (AI/ML Major)</span>
              <span className="text-emerald-500/50 hidden sm:inline print:text-gray-500">|</span>
              <span>GPA 7.4 / 10</span>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 relative z-10 print:hidden">
            <button onClick={(e) => handleCopy("bansaluday.112@gmail.com", "email", e)} className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer" title="Copy Email">
              <div className="absolute -top-8 px-2 py-1 bg-[#222] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity font-sans text-white pointer-events-none whitespace-nowrap">
                {copiedState === 'email' ? 'Copied!' : 'bansaluday.112@gmail.com'}
              </div>
              {copiedState === 'email' ? <Check className="h-4 w-4 text-emerald-400" /> : <Mail className="h-4 w-4 text-muted group-hover:text-emerald-400 group-hover:scale-110 transition-transform" />}
            </button>
            <button onClick={(e) => handleCopy("+919528968570", "phone", e)} className="group relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all cursor-pointer" title="Copy Phone">
               <div className="absolute -top-8 px-2 py-1 bg-[#222] text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity font-sans text-white pointer-events-none whitespace-nowrap">
                {copiedState === 'phone' ? 'Copied!' : '+91 95289 68570'}
              </div>
              {copiedState === 'phone' ? <Check className="h-4 w-4 text-emerald-400" /> : <Phone className="h-4 w-4 text-muted group-hover:text-emerald-400 group-hover:scale-110 transition-transform" />}
            </button>
            <a href="https://www.linkedin.com/in/uday-bansal-13213a289/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all" title="LinkedIn">
              <FaLinkedin className="h-4 w-4 text-muted group-hover:text-blue-400 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://github.com/UdayBansalG0423" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-gray-500/10 hover:border-gray-500/30 transition-all" title="GitHub">
              <FaGithub className="h-4 w-4 text-muted group-hover:text-gray-300 group-hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Print-only Contact Info */}
          <div className="hidden print:block text-right text-xs space-y-1">
            <p>bansaluday.112@gmail.com</p>
            <p>+91 95289 68570</p>
            <p>linkedin.com/in/uday-bansal-13213a289</p>
            <p>github.com/UdayBansalG0423</p>
          </div>
        </motion.div>

        {/* Executive Summary */}
        <motion.div variants={itemVariants} className="mb-10 relative group">
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl print:hidden" />
          <div className="relative">
            <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2 print:text-black">
              <Sparkles className="h-4 w-4 text-emerald-400 print:hidden" /> <ScrambleText text="Executive Summary" />
            </h2>
            <div className="font-sans text-sm md:text-base text-muted leading-relaxed print:text-black">
              <span className="text-gray-200 font-medium print:text-black">
                <span className="print:hidden">
                  <Typewriter words={["Computer Science B.Tech student specializing in Artificial Intelligence and Machine Learning."]} />
                </span>
                <span className="hidden print:inline">
                  Computer Science B.Tech student specializing in Artificial Intelligence and Machine Learning.
                </span>
              </span>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="mt-2 print:opacity-100">
                Hands-on experience building machine learning pipelines, implementing Retrieval-Augmented Generation (RAG) 
                workflows, and integrating Large Language Models. Focused on mastering production-grade AI systems, 
                scalable API backend architectures, and deploying end-to-end intelligent applications.
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Education */}
          <motion.div variants={itemVariants} className="relative">
            <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10 print:text-black">
              <BookOpen className="h-4 w-4 text-blue-400 print:hidden" /> <ScrambleText text="Education" />
            </h2>
            <div className="relative pl-6 print:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 to-transparent z-0 print:hidden" />
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-400 z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)] print:hidden" />
              
              <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/5 relative group hover-glow-blue overflow-hidden transition-all duration-300 hover:border-white/20 print:bg-transparent print:border-none print:p-0 print:overflow-visible">
                <div className="card-glow-overlay pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 print:hidden" />
                <div className="relative z-10">
                  <span className="font-mono text-[10px] text-blue-400 font-bold tracking-widest block mb-1 uppercase print:text-gray-600">2024 - 2027</span>
                  <h3 className="font-sans text-base font-bold text-white leading-snug print:text-black">Bachelor of Technology (B.Tech)</h3>
                  <p className="font-sans text-xs text-gray-300 font-medium mt-1 print:text-gray-800">Computer Science & Engineering (AI/ML)</p>
                  <p className="font-sans text-xs text-muted mt-2 print:text-gray-600">GLA University · GPA 7.4 / 10</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/5 print:border-gray-200">
                    <span className="font-sans text-[10px] font-bold text-muted uppercase tracking-wider block mb-2 print:text-black">Relevant Coursework</span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "DSA", "Machine Learning", "Deep Learning", 
                        "DBMS", "Operating Systems", "Computer Networks", "OOP", "Artificial Intelligence"
                      ].map((course, idx) => (
                        <span key={idx} className="font-sans text-[9px] font-semibold bg-[#0a0a0a] border border-white/10 px-2 py-1 rounded text-gray-300 hover:text-white hover:border-white/30 transition-all cursor-default print:bg-transparent print:border-none print:text-black print:px-0 print:py-0 print:after:content-[','] last:print:after:content-none">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Experience */}
          <motion.div variants={itemVariants} className="relative">
            <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 relative z-10 print:text-black">
              <Award className="h-4 w-4 text-purple-400 print:hidden" /> <ScrambleText text="Experience" />
            </h2>
            <div className="relative pl-6 h-full flex flex-col print:pl-0">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-purple-500/50 to-transparent z-0 print:hidden" />
              {/* Timeline Dot */}
              <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-purple-500/20 border-2 border-purple-400 z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)] animate-pulse print:hidden" />
              
              <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/5 h-full flex flex-col justify-between relative group hover-glow-purple overflow-hidden transition-all duration-300 hover:border-white/20 print:bg-transparent print:border-none print:p-0 print:overflow-visible">
                <div className="card-glow-overlay pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 print:hidden" />
                <div className="relative z-10">
                  <span className="font-mono text-[10px] text-purple-400 font-bold tracking-widest block mb-1 uppercase print:text-gray-600">2024 - Present</span>
                  <h3 className="font-sans text-base font-bold text-white leading-snug print:text-black">AI & ML Projects Experience</h3>
                  <p className="font-sans text-xs text-purple-300 font-medium mt-1 print:text-gray-800">Self-Driven Applied Research & Dev</p>
                  <p className="font-sans text-xs text-muted leading-relaxed mt-3 print:text-black">
                    Applied Machine Learning and Generative AI concepts through self-driven projects focused on document intelligence, retrieval systems, and conversational AI applications.
                  </p>
                </div>
                <div className="relative z-10 mt-4 pt-4 border-t border-white/5 text-xs text-muted leading-relaxed print:text-black print:border-gray-200">
                  Built end-to-end AI applications involving data preprocessing, model integration, API development, vector databases, and deployment workflows.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Arsenal (Visual Pills) */}
        <motion.div variants={itemVariants} className="mb-10">
          <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 print:text-black">
            <Terminal className="h-4 w-4 text-emerald-400 print:hidden" /> <ScrambleText text="Technical Skills" />
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { cat: "Generative AI", color: "emerald", skills: ["LLMs", "Prompt Engineering", "RAG Pipelines", "Embeddings", "Vector DBs", "Semantic Search", "LangChain"] },
              { cat: "Machine Learning & Deep Learning", color: "blue", skills: ["Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Neural Networks", "CNNs", "RNNs", "PyTorch", "TensorFlow", "Keras"] },
              { cat: "Backend & Databases", color: "purple", skills: ["FastAPI", "REST APIs", "Auth", "PostgreSQL", "Supabase", "SQLite"] },
              { cat: "Languages & Tools", color: "amber", skills: ["Python", "Java", "JavaScript", "SQL", "Git", "Docker", "VS Code", "Postman", "Jupyter"] }
            ].map((group, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/5 relative group hover-glow-white overflow-hidden transition-all duration-300 hover:border-white/10 print:bg-transparent print:border-none print:p-0 print:mb-2">
                <div className="card-glow-overlay pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 print:hidden" />
                <div className="relative z-10">
                  <span className={`font-sans text-[10px] font-bold text-${group.color}-400 uppercase tracking-widest block mb-3 print:text-black`}>{group.cat}</span>
                  <div className="flex flex-wrap gap-2 print:gap-1">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="font-sans text-[11px] font-semibold bg-[#0a0a0a] border border-white/10 px-3 py-1.5 rounded-full text-gray-300 transition-all hover:text-white hover:border-white/30 hover:-translate-y-0.5 cursor-default shadow-sm hover:shadow-md print:bg-transparent print:text-black print:px-0 print:py-0 print:border-none print:shadow-none print:after:content-[','] last:print:after:content-none">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Detail Section */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-6 flex items-center gap-2 print:text-black">
            <Code className="h-4 w-4 text-blue-400 print:hidden" /> <ScrambleText text="Key Projects" />
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "NeuralDoc – AI-Powered Document Intelligence",
                tech: "Python, FastAPI, LangChain, Supabase, Vector Search, LLMs",
                color: "blue",
                desc: "Built an intelligent document processing platform that enables users to upload documents and interact with them using natural language. Implemented a Retrieval-Augmented Generation (RAG) pipeline for semantic document search.",
                bullets: [
                  "Designed document parsing workflows supporting PDF and text formats.",
                  "Generated document segment vector embeddings.",
                  "Utilized vector databases for similarity retrieval matching.",
                  "Configured LLM interfaces returning context-supported responses."
                ]
              },
              {
                title: "RAG Chatbot",
                tech: "Python, LangChain, ChromaDB/FAISS, OpenAI/Gemini",
                color: "emerald",
                desc: "Developed a Retrieval-Augmented Generation chatbot capable of answering questions from custom document collections using conversational history.",
                bullets: [
                  "Configured custom document partitioning strategies.",
                  "Engineered vector space index maps.",
                  "Managed semantic search queries.",
                  "Maintained chat history buffers."
                ]
              },
              {
                title: "Predictive Analytics System",
                tech: "Python, Scikit-Learn, Pandas, NumPy, Matplotlib",
                color: "purple",
                desc: "Built a machine learning solution for data-driven predictions using supervised learning techniques. Performed data cleaning, feature engineering, model training, hyperparameter tuning, and evaluation.",
                bullets: [
                  "Constructed feature preprocessing and cleansing filters.",
                  "Performed correlation reduction and feature selections.",
                  "Conducted cross-validation evaluations.",
                  "Analyzed accuracy and error margins."
                ]
              }
            ].map((proj, idx) => {
              const isExpanded = expandedProjects[proj.title] || false;
              
              return (
                <MagneticCard key={idx} className="w-full">
                  <div className={`glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-white/5 relative group hover-glow-${proj.color} overflow-hidden transition-all duration-300 hover:border-white/20 h-full print:bg-transparent print:border-none print:p-0 print:mb-4`}>
                    <div className="card-glow-overlay pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 print:hidden" />
                    <div className="relative z-10">
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 border-b border-white/5 pb-4 print:border-gray-200">
                        <h3 className="font-sans text-lg md:text-xl font-bold text-white leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all print:text-black print:bg-none">
                          {proj.title}
                        </h3>
                        <div className="flex flex-wrap gap-1.5 max-w-[50%] sm:justify-end">
                          {proj.tech.split(", ").slice(0, 3).map((t, tidx) => (
                            <span key={tidx} className={`font-mono text-[9px] font-bold text-${proj.color}-400 bg-${proj.color}-500/10 border border-${proj.color}-500/20 px-2 py-0.5 rounded-full whitespace-nowrap print:bg-transparent print:border-none print:text-gray-600 print:px-0 print:py-0 print:after:content-[','] last:print:after:content-none`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <p className="font-sans text-sm text-gray-300 leading-relaxed mb-5 print:text-black">{proj.desc}</p>
                      
                      {/* Expandable Drawers Toggle */}
                      <button 
                        onClick={() => toggleProject(proj.title)}
                        className="flex items-center gap-2 font-sans text-xs font-semibold text-white/70 hover:text-white transition-colors mb-4 print:hidden"
                      >
                        {isExpanded ? (
                          <><ChevronUp className="h-3 w-3" /> Hide Architecture Details</>
                        ) : (
                          <><ChevronDown className="h-3 w-3" /> Show Architecture Details</>
                        )}
                      </button>

                      {/* Expandable Content */}
                      <AnimatePresence>
                        {(isExpanded || typeof window === 'undefined') && (
                          <motion.ul 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-2 overflow-hidden print:!h-auto print:!opacity-100"
                          >
                            {proj.bullets.map((bullet, bidx) => (
                              <li key={bidx} className="flex items-start gap-3 text-xs md:text-sm text-muted group/bullet print:text-black">
                                <span className={`text-${proj.color}-400 mt-[3px] font-bold opacity-70 group-hover/bullet:opacity-100 group-hover/bullet:scale-125 transition-all print:text-black`}>▹</span>
                                <span className="leading-relaxed group-hover/bullet:text-gray-300 transition-colors print:text-black">{bullet}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </MagneticCard>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
