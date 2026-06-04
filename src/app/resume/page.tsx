"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Download, Mail, Phone, Award, 
  BookOpen, Sparkles, Terminal, Code, Globe, Twitter
} from "lucide-react";

export default function ResumePage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  } as const;

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Top Toolbar */}
      <div className="max-w-4xl w-full flex items-center justify-between mb-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
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
        className="max-w-4xl w-full glass-panel p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden bg-black/40 backdrop-blur-md"
      >
        {/* Ambient background glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Resume Header */}
        <motion.div variants={itemVariants} className="border-b border-white/10 pb-8 mb-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
          <div>
            <h1 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-2">
              Uday Bansal
            </h1>
            <p className="font-sans text-lg font-medium text-emerald-400">
              AI/ML Engineer & Generative AI Developer
            </p>
            <p className="font-sans text-xs text-muted mt-1 uppercase tracking-wider">
              4th Year B.Tech CSE (AI/ML Major) · GPA 7.4 / 10
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-muted font-sans md:text-right">
            <a href="mailto:bansaluday.112@gmail.com" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
              bansaluday.112@gmail.com
              <Mail className="h-4 w-4" />
            </a>
            <a href="tel:9528968570" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
              +91 95289 68570
              <Phone className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/uday-bansal-13213a289/" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
              linkedin.com/in/uday-bansal-13213a289
              <Globe className="h-4 w-4" />
            </a>
            <a href="https://x.com/Uday_0412" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
              x.com/Uday_0412
              <Twitter className="h-4 w-4" />
            </a>
            <a href="https://github.com/UdayBansalG0423" target="_blank" rel="noopener noreferrer" className="flex items-center md:justify-end gap-2 hover:text-white transition-colors">
              github.com/UdayBansalG0423
              <Globe className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        {/* Summary */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-emerald-400" /> Executive Summary
          </h2>
          <p className="font-sans text-sm md:text-base text-muted leading-relaxed">
            Computer Science B.Tech student specializing in Artificial Intelligence and Machine Learning. 
            Hands-on experience building machine learning pipelines, implementing Retrieval-Augmented Generation (RAG) 
            workflows, and integrating Large Language Models. Focused on mastering production-grade AI systems, 
            scalable API backend architectures, and deploying end-to-end intelligent applications.
          </p>
        </motion.div>

        {/* Education & Experience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <motion.div variants={itemVariants}>
            <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-blue-400" /> Education
            </h2>
            <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/5">
              <span className="font-mono text-[10px] text-muted font-semibold block mb-1">2024 - 2027</span>
              <h3 className="font-sans text-base font-bold text-white leading-snug">Bachelor of Technology (B.Tech)</h3>
              <p className="font-sans text-xs text-emerald-400 font-semibold mt-1">Computer Science & Engineering (AI/ML)</p>
              <p className="font-sans text-xs text-muted mt-2">GLA University · GPA 7.4 / 10</p>
              
              <div className="mt-4 pt-4 border-t border-white/5">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wide block mb-2">Relevant Coursework</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Data Structures & Algorithms", "Machine Learning", "Deep Learning", 
                    "DBMS", "Operating Systems", "Computer Networks", "OOP", "Artificial Intelligence"
                  ].map((course, idx) => (
                    <span key={idx} className="font-sans text-[9px] font-semibold bg-white/5 border border-white/10 px-1.5 py-0.5 rounded text-muted">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project Experience */}
          <motion.div variants={itemVariants}>
            <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-purple-400" /> Projects Experience
            </h2>
            <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-white/5 h-full flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-muted font-semibold block mb-1">2024 - Present</span>
                <h3 className="font-sans text-base font-bold text-white leading-snug">AI & ML Projects Experience</h3>
                <p className="font-sans text-xs text-purple-400 font-semibold mt-1">Self-Driven Applied Research & Dev</p>
                <p className="font-sans text-xs text-muted leading-relaxed mt-3">
                  Applied Machine Learning and Generative AI concepts through self-driven projects focused on document intelligence, retrieval systems, and conversational AI applications.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-xs text-muted leading-relaxed">
                Built end-to-end AI applications involving data preprocessing, model integration, API development, vector databases, and deployment workflows.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technical Arsenal */}
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Terminal className="h-4 w-4 text-emerald-400" /> Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { cat: "Languages", skills: "Python, Java, JavaScript, SQL" },
              { cat: "Machine Learning", skills: "Supervised & Unsupervised Learning, Feature Engineering, Model Evaluation, Data Preprocessing, Scikit-Learn, Pandas, NumPy, Matplotlib" },
              { cat: "Deep Learning", skills: "Neural Networks, CNNs, RNNs, Transformers, PyTorch, TensorFlow, Keras" },
              { cat: "Generative AI", skills: "Large Language Models (LLMs), Prompt Engineering, RAG Pipelines, Embeddings, Vector Databases, Semantic Search, Document Processing, Agentic Workflows, LangChain" },
              { cat: "Backend & Databases", skills: "FastAPI, REST APIs, Authentication, Database Integration, API Development, Server Deployment, PostgreSQL, Supabase, SQLite" },
              { cat: "Tools", skills: "Git, GitHub, Docker, VS Code, Postman, Jupyter Notebook" }
            ].map((skill, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-white/5 bg-white/5">
                <span className="font-sans text-xs font-bold text-white uppercase tracking-wider block mb-2">{skill.cat}</span>
                <p className="font-sans text-xs text-muted leading-relaxed">{skill.skills}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Projects Detail Section */}
        <motion.div variants={itemVariants} className="mb-4">
          <h2 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
            <Code className="h-4 w-4 text-blue-400" /> Key Projects
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "NeuralDoc – AI-Powered Document Intelligence System",
                tech: "Python, FastAPI, LangChain, Supabase, Vector Search, LLM APIs",
                desc: "Built an intelligent document processing platform that enables users to upload documents and interact with them using natural language. Implemented a Retrieval-Augmented Generation (RAG) pipeline for semantic document search and context-aware question answering.",
                bullets: [
                  "Designed document parsing workflows supporting PDF and text formats.",
                  "Generated document segment vector embeddings.",
                  "Utilized vector databases for similarity retrieval matching.",
                  "Configured LLM interfaces returning context-supported responses."
                ]
              },
              {
                title: "RAG Chatbot",
                tech: "Python, LangChain, ChromaDB/FAISS, OpenAI/Gemini APIs",
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
                desc: "Built a machine learning solution for data-driven predictions using supervised learning techniques. Performed data cleaning, feature engineering, model training, hyperparameter tuning, and evaluation.",
                bullets: [
                  "Constructed feature preprocessing and cleansing filters.",
                  "Performed correlation reduction and feature selections.",
                  "Conducted cross-validation evaluations.",
                  "Analyzed accuracy and error margins."
                ]
              }
            ].map((proj, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-white/5 bg-white/5">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                  <h3 className="font-sans text-base font-bold text-white leading-snug">{proj.title}</h3>
                  <span className="font-mono text-[9px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full whitespace-nowrap">{proj.tech.split(",")[0]} & others</span>
                </div>
                <p className="font-sans text-xs text-muted leading-relaxed mb-4">{proj.desc}</p>
                <ul className="space-y-1.5">
                  {proj.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2 text-xs text-muted">
                      <span className="text-emerald-400 mt-0.5 font-bold">·</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
