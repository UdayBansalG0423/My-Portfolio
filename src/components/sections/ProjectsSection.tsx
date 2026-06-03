"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  MessageSquare,
  BarChart2,
  ExternalLink,
  X,
  Star,
  LucideIcon,
} from "lucide-react";
import { Github } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";

interface Project {
  id: number;
  title: string;
  tag: string;
  category: "ai-ml" | "web" | "all";
  isFeatured: boolean;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  icon: LucideIcon;
  tech: string[];
  highlight: string;
  description: string;
  details: string[];
  github: string;
  demo: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "NeuralDoc",
    tag: "RAG · Document Intelligence",
    category: "web",
    isFeatured: true,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-500/10",
    borderClass: "border-blue-500/20",
    icon: FileText,
    tech: ["Python", "FastAPI", "LangChain", "Supabase", "Vector Search", "LLM APIs"],
    highlight: "AI-Powered Document Intelligence System",
    description:
      "Built an intelligent document processing platform that enables users to upload documents and interact with them using natural language. Implemented a Retrieval-Augmented Generation (RAG) pipeline for semantic document search and context-aware question answering.",
    details: [
      "PDF and document ingestion with splitters to divide text into semantically cohesive chunks.",
      "Embedding generation utilizing pre-trained dense retrieval representation models.",
      "Semantic vector retrieval utilizing Supabase pgvector for sub-second similarity matching.",
      "Context-aware LLM answers integrating prompt templates, system instructions, and citation tracking.",
      "User authentication, session states, and secure document access scopes.",
      "Fast, asynchronous backend API layer built with FastAPI to support conversational streaming."
    ],
    github: "https://github.com/UdayBansalG0423",
    demo: "https://github.com/UdayBansalG0423",
  },
  {
    id: 2,
    title: "RAG Chatbot",
    tag: "Generative AI · NLP",
    category: "ai-ml",
    isFeatured: true,
    colorClass: "text-emerald-400",
    bgClass: "bg-emerald-500/10",
    borderClass: "border-emerald-500/20",
    icon: MessageSquare,
    tech: ["Python", "LangChain", "ChromaDB", "FAISS", "OpenAI/Gemini APIs"],
    highlight: "Conversational QA over custom collections",
    description:
      "Developed a Retrieval-Augmented Generation chatbot capable of answering questions from custom document collections with context extraction and conversational history tracking.",
    details: [
      "Configured smart document chunking algorithms to preserve lexical context.",
      "Generated vector embeddings from text chunks to build local document indexes.",
      "Configured FAISS and ChromaDB vector databases for local similarity indexing.",
      "Implemented semantic search queries to pull the most relevant context blocks.",
      "Engineered chat memory buffers to support multi-turn conversational dialogs without loss of context."
    ],
    github: "https://github.com/UdayBansalG0423",
    demo: "https://github.com/UdayBansalG0423",
  },
  {
    id: 3,
    title: "Predictive Analytics System",
    tag: "Machine Learning",
    category: "ai-ml",
    isFeatured: false,
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/10",
    borderClass: "border-purple-500/20",
    icon: BarChart2,
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    highlight: "Supervised ML Predictive Solution",
    description:
      "Built a machine learning solution for data-driven predictions using supervised learning techniques. Performed data cleaning, feature engineering, model training, hyperparameter tuning, and evaluation.",
    details: [
      "Designed data cleaning pipelines resolving outlier bounds and filling null vectors.",
      "Executed feature engineering including scaling, encoding, and correlation reduction.",
      "Trained supervised estimators (Random Forests, Gradient Boosting) on classification tasks.",
      "Conducted K-fold cross-validation and hyperparameter search grids.",
      "Evaluated models via precision-recall curves, confusion matrices, and ROC-AUC metrics."
    ],
    github: "https://github.com/UdayBansalG0423",
    demo: "https://github.com/UdayBansalG0423",
  },
];

type CategoryFilter = "all" | "featured" | "ai-ml" | "web";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") return p.isFeatured;
    return p.category === filter;
  });

  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div>
          <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 p-1 bg-white/5 rounded-xl border border-white/10">
          {(["all", "featured", "ai-ml", "web"] as CategoryFilter[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all relative cursor-pointer ${
                  filter === category
                    ? "text-black"
                    : "text-muted hover:text-white"
                }`}
              >
                {filter === category && (
                  <motion.div
                    layoutId="activeFilterTab"
                    className="absolute inset-0 bg-white rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 capitalize">
                  {category === "ai-ml" ? "AI & ML" : category.replace("-", " ")}
                </span>
              </button>
            )
          )}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                transition={{ duration: 0.4 }}
                style={{ perspective: 1000 }}
              >
                <MagneticCard className="h-full">
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="group glass-panel h-full cursor-pointer p-6 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="font-sans text-[11px] font-semibold tracking-wider text-muted uppercase">
                          {project.tag}
                        </span>

                        {project.isFeatured && (
                          <span className="flex items-center gap-1 font-sans font-semibold text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            <Star className="h-3 w-3 fill-amber-400" /> Featured
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 rounded-xl ${project.bgClass} ${project.colorClass} transition-colors group-hover:bg-white/10`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <h3 className="font-sans text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className={`font-sans text-xs md:text-sm font-medium ${project.colorClass} mb-3`}>
                        {project.highlight}
                      </p>

                      <p className="font-sans text-sm text-muted leading-relaxed line-clamp-3 mb-6">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {project.tech.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            className="font-sans text-[10px] font-medium bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-muted group-hover:bg-white/10 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="font-sans text-[10px] font-medium text-muted px-1 py-1">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Project Expansion Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl p-6 md:p-10 overflow-y-auto max-h-[90vh] z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 text-muted hover:text-white rounded-full hover:bg-white/10 transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="mb-8 mt-2">
                <span className="font-sans text-[11px] font-bold text-muted uppercase tracking-widest block mb-2">
                  {selectedProject.tag}
                </span>
                <h3 className="font-sans text-3xl font-bold text-white pr-8">
                  {selectedProject.title}
                </h3>
              </div>

              <div
                className={`p-4 rounded-xl border border-white/5 mb-8 ${selectedProject.bgClass}`}
              >
                <p className={`font-sans text-sm font-semibold ${selectedProject.colorClass}`}>
                  Highlight: {selectedProject.highlight}
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <h4 className="font-sans text-sm font-bold text-white mb-2">Overview</h4>
                  <p className="font-sans text-sm text-muted leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-sans text-sm font-bold text-white mb-3">Key Features</h4>
                  <ul className="space-y-3">
                    {selectedProject.details.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                        <div className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${selectedProject.bgClass.replace('/10', '')} bg-opacity-100`} />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-10">
                <h4 className="font-sans text-sm font-bold text-white mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="font-sans text-[11px] font-medium bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 font-sans font-semibold text-sm text-white transition-all hover:bg-white/10"
                >
                  <Github className="h-4 w-4" />
                  View Source
                </a>

                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white text-black px-4 py-3 font-sans font-semibold text-sm transition-all hover:bg-gray-200"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
