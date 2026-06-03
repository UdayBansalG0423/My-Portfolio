"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  SiPython, SiJavascript, SiPytorch, SiTensorflow, SiFastapi, 
  SiDocker, SiPostgresql, SiSupabase, SiSqlite, SiGit, 
  SiGithub, SiPostman, SiJupyter, SiKeras 
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { 
  Brain, Cpu, Database, Search, Sparkles, Terminal, 
  Waypoints, Code, Binary, Network
} from "lucide-react";

interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  colorClass: string;
}

interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ml",
    name: "Machine Learning",
    skills: [
      { name: "Supervised Learning", icon: Brain, colorClass: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5" },
      { name: "Unsupervised Learning", icon: Network, colorClass: "hover:text-indigo-400 hover:border-indigo-400/30 hover:bg-indigo-400/5" },
      { name: "Feature Engineering", icon: Waypoints, colorClass: "hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-400/5" },
      { name: "Model Evaluation", icon: Cpu, colorClass: "hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/5" },
      { name: "Data Preprocessing", icon: Binary, colorClass: "hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/5" },
      { name: "Scikit-Learn", icon: Cpu, colorClass: "hover:text-[#F7931E] hover:border-[#F7931E]/30 hover:bg-[#F7931E]/5" },
      { name: "Pandas", icon: Database, colorClass: "hover:text-[#150458] hover:border-[#150458]/30 hover:bg-[#150458]/5" },
      { name: "NumPy", icon: Binary, colorClass: "hover:text-[#013243] hover:border-[#013243]/30 hover:bg-[#013243]/5" },
      { name: "Matplotlib", icon: Cpu, colorClass: "hover:text-[#38BDF8] hover:border-[#38BDF8]/30 hover:bg-[#38BDF8]/5" },
    ],
  },
  {
    id: "deep-genai",
    name: "DL & Generative AI",
    skills: [
      { name: "Large Language Models", icon: Brain, colorClass: "hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5" },
      { name: "Prompt Engineering", icon: Terminal, colorClass: "hover:text-teal-400 hover:border-teal-400/30 hover:bg-teal-400/5" },
      { name: "RAG Pipelines", icon: Search, colorClass: "hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/5" },
      { name: "Embeddings", icon: Waypoints, colorClass: "hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5" },
      { name: "Vector Databases", icon: Database, colorClass: "hover:text-sky-400 hover:border-sky-400/30 hover:bg-sky-400/5" },
      { name: "Semantic Search", icon: Search, colorClass: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5" },
      { name: "Document Processing", icon: Binary, colorClass: "hover:text-pink-400 hover:border-pink-400/30 hover:bg-pink-400/5" },
      { name: "Agentic AI Workflows", icon: Network, colorClass: "hover:text-violet-400 hover:border-violet-400/30 hover:bg-violet-400/5" },
      { name: "LangChain", icon: Sparkles, colorClass: "hover:text-yellow-400 hover:border-yellow-400/30 hover:bg-yellow-400/5" },
      { name: "PyTorch", icon: SiPytorch, colorClass: "hover:text-[#EE4C2C] hover:border-[#EE4C2C]/30 hover:bg-[#EE4C2C]/5" },
      { name: "TensorFlow", icon: SiTensorflow, colorClass: "hover:text-[#FF6F00] hover:border-[#FF6F00]/30 hover:bg-[#FF6F00]/5" },
      { name: "Keras", icon: SiKeras, colorClass: "hover:text-[#D00000] hover:border-[#D00000]/30 hover:bg-[#D00000]/5" },
      { name: "Neural Networks", icon: Brain, colorClass: "hover:text-purple-400 hover:border-purple-400/30 hover:bg-purple-400/5" },
      { name: "CNNs & RNNs", icon: Brain, colorClass: "hover:text-violet-400 hover:border-violet-400/30 hover:bg-violet-400/5" },
      { name: "Transformers", icon: Sparkles, colorClass: "hover:text-indigo-400 hover:border-indigo-400/30 hover:bg-indigo-400/5" },
    ],
  },
  {
    id: "backend-db",
    name: "Backend & Databases",
    skills: [
      { name: "FastAPI", icon: SiFastapi, colorClass: "hover:text-[#009688] hover:border-[#009688]/30 hover:bg-[#009688]/5" },
      { name: "REST APIs", icon: Terminal, colorClass: "hover:text-[#61DAFB] hover:border-[#61DAFB]/30 hover:bg-[#61DAFB]/5" },
      { name: "Authentication", icon: Terminal, colorClass: "hover:text-rose-400 hover:border-rose-400/30 hover:bg-rose-400/5" },
      { name: "Database Integration", icon: Database, colorClass: "hover:text-emerald-400 hover:border-emerald-400/30 hover:bg-emerald-400/5" },
      { name: "API Development", icon: Code, colorClass: "hover:text-amber-400 hover:border-amber-400/30 hover:bg-amber-400/5" },
      { name: "Server Deployment", icon: Cpu, colorClass: "hover:text-blue-400 hover:border-blue-400/30 hover:bg-blue-400/5" },
      { name: "PostgreSQL", icon: SiPostgresql, colorClass: "hover:text-[#4169E1] hover:border-[#4169E1]/30 hover:bg-[#4169E1]/5" },
      { name: "Supabase", icon: SiSupabase, colorClass: "hover:text-[#3ECF8E] hover:border-[#3ECF8E]/30 hover:bg-[#3ECF8E]/5" },
      { name: "SQLite", icon: SiSqlite, colorClass: "hover:text-[#003B57] hover:border-[#003B57]/30 hover:bg-[#003B57]/5" },
    ],
  },
  {
    id: "languages-tools",
    name: "Languages & Tools",
    skills: [
      { name: "Python", icon: SiPython, colorClass: "hover:text-[#3776AB] hover:border-[#3776AB]/30 hover:bg-[#3776AB]/5" },
      { name: "Java", icon: FaJava, colorClass: "hover:text-[#5382a1] hover:border-[#5382a1]/30 hover:bg-[#5382a1]/5" },
      { name: "JavaScript", icon: SiJavascript, colorClass: "hover:text-[#F7DF1E] hover:border-[#F7DF1E]/30 hover:bg-[#F7DF1E]/5" },
      { name: "SQL", icon: Database, colorClass: "hover:text-indigo-400 hover:border-indigo-400/30 hover:bg-indigo-400/5" },
      { name: "Git", icon: SiGit, colorClass: "hover:text-[#F05032] hover:border-[#F05032]/30 hover:bg-[#F05032]/5" },
      { name: "GitHub", icon: SiGithub, colorClass: "hover:text-white hover:border-white/30 hover:bg-white/5" },
      { name: "Docker", icon: SiDocker, colorClass: "hover:text-[#2496ED] hover:border-[#2496ED]/30 hover:bg-[#2496ED]/5" },
      { name: "VS Code", icon: Code, colorClass: "hover:text-[#007ACC] hover:border-[#007ACC]/30 hover:bg-[#007ACC]/5" },
      { name: "Postman", icon: SiPostman, colorClass: "hover:text-[#FF6C37] hover:border-[#FF6C37]/30 hover:bg-[#FF6C37]/5" },
      { name: "Jupyter Notebook", icon: SiJupyter, colorClass: "hover:text-[#F37626] hover:border-[#F37626]/30 hover:bg-[#F37626]/5" },
    ],
  },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("ml");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.05 },
    },
  };

  const pillVariants: Variants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const activeCategory = SKILL_CATEGORIES.find((cat) => cat.id === activeTab) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 pt-8 pb-20 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 text-center flex flex-col items-center"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
          Technical Arsenal
        </h2>
        <p className="max-w-2xl text-muted font-sans text-sm md:text-base leading-relaxed">
          A focused, organized developer toolkit spanning machine learning models, Generative AI integration, scalable backend APIs, and modern development systems.
        </p>
      </motion.div>

      {/* Tabs Selector */}
      <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-white/5 rounded-xl border border-white/10 max-w-3xl mx-auto">
        {SKILL_CATEGORIES.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`px-4 py-2.5 text-xs md:text-sm font-semibold rounded-lg transition-all relative cursor-pointer ${
              activeTab === category.id
                ? "text-black"
                : "text-muted hover:text-white"
            }`}
          >
            {activeTab === category.id && (
              <motion.div
                layoutId="activeSkillsTab"
                className="absolute inset-0 bg-white rounded-lg shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {activeCategory.skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  variants={pillVariants}
                  key={idx}
                  whileHover={{ 
                    scale: 1.03,
                    y: -2,
                    transition: { type: "spring", stiffness: 300, damping: 15 }
                  }}
                  className={`group relative flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 cursor-pointer overflow-hidden transition-all duration-300 shadow-lg ${skill.colorClass}`}
                >
                  {/* Subtle hover background sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                  
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-inherit transition-colors duration-300 relative z-10" />
                  <span className="font-sans text-xs md:text-sm font-semibold text-gray-200 group-hover:text-inherit transition-colors duration-300 relative z-10 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
