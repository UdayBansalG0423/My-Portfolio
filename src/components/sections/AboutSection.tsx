"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, User, Hourglass } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "projects" | "academic";
  color: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2024 - Present",
    title: "AI & ML Projects Experience",
    subtitle: "Self-Driven Research & Application Development",
    description:
      "Applied Machine Learning and Generative AI concepts through self-driven projects focused on document intelligence, retrieval systems, and conversational AI applications. Built end-to-end AI applications involving data preprocessing, model integration, API development, vector databases, and deployment workflows.",
    type: "projects",
    color: "blue",
  },
  {
    year: "2024 - 2027",
    title: "Bachelor of Technology (B.Tech)",
    subtitle: "Computer Science Engineering (Artificial Intelligence & Machine Learning)",
    description:
      "Fourth Year. Maintaining a strong academic track record with a focus on advanced mathematical modeling, deep learning architectures, and software engineering principles. GPA: 7.4 / 10. Relevant Coursework: Data Structures & Algorithms, Machine Learning, Deep Learning, Database Management Systems, Operating Systems, Computer Networks, Object-Oriented Programming, Artificial Intelligence.",
    type: "academic",
    color: "emerald",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  } as const;

  const getTimelineMarker = (type: TimelineItem["type"]) => {
    switch (type) {
      case "projects":
        return <Briefcase className="h-4 w-4" />;
      case "academic":
        return <GraduationCap className="h-4 w-4" />;
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-500/30 bg-blue-500/10 text-blue-400";
      case "emerald":
        return "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";
      default:
        return "border-white/20 bg-white/5 text-white";
    }
  };

  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-12 md:py-20 sm:px-6 lg:px-8">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16 text-center flex flex-col items-center"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Left Column: Biography Details */}
        <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-300 h-full">
              <h3 className="font-sans text-2xl font-semibold text-white mb-4">Uday Bansal</h3>
              <p className="text-sm md:text-base text-muted font-sans leading-relaxed mb-6">
                I am a fourth-year B.Tech Computer Science student specializing in Artificial Intelligence and Machine Learning. 
                My primary interests lie in Machine Learning, Deep Learning, Generative AI, Retrieval-Augmented Generation (RAG), and Backend Development. 
                I enjoy transforming complex AI concepts into practical applications that can be used in real-world environments.
              </p>
              <p className="text-sm md:text-base text-muted font-sans leading-relaxed">
                Over the past few years, I have developed hands-on experience building machine learning models, implementing RAG pipelines, 
                working with Large Language Models, and creating AI-powered applications. I am passionate about understanding not only how AI 
                models work but also how to deploy, scale, and integrate them into production systems.
              </p>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-4 md:p-5 rounded-xl border-t border-white/5 hover:bg-white/5 transition-all">
              <span className="font-sans text-[11px] font-medium text-muted tracking-wider uppercase block mb-2">
                Degree
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold text-white">
                B.Tech CS (AI/ML)
              </span>
            </div>

            <div className="glass-panel p-4 md:p-5 rounded-xl border-t border-white/5 hover:bg-white/5 transition-all">
              <span className="font-sans text-[11px] font-medium text-muted tracking-wider uppercase block mb-2">
                Age
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold text-white flex items-center gap-1.5">
                <User className="h-4 w-4 text-muted" /> 21 Years
              </span>
            </div>

            <div className="glass-panel p-4 md:p-5 rounded-xl border-t border-emerald-500/20 hover:bg-emerald-500/5 transition-all">
              <span className="font-sans text-[11px] font-medium text-muted tracking-wider uppercase block mb-2">
                Availability
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold text-white flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Roles & Internships
              </span>
            </div>

            <div className="glass-panel p-4 md:p-5 rounded-xl border-t border-white/5 hover:bg-amber-400/5 transition-all">
              <span className="font-sans text-[11px] font-medium text-muted tracking-wider uppercase block mb-2">
                Current GPA
              </span>
              <span className="font-sans text-xs md:text-sm font-semibold text-white flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-amber-400" /> 7.4 / 10
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline */}
        <motion.div variants={itemVariants} className="lg:col-span-7">
          <h3 className="font-sans text-xl font-semibold text-white mb-8">
            Experience & Education
          </h3>

          <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-10">
            {TIMELINE_DATA.map((event, index) => {
              const colorClasses = getColorClasses(event.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Bullet */}
                  <div
                    className={`absolute -left-[38px] md:-left-[46px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border bg-black ${colorClasses} transition-transform group-hover:scale-110`}
                  >
                    {getTimelineMarker(event.type)}
                  </div>

                  {/* Year Tag */}
                  <span className={`font-mono text-xs font-semibold text-muted mb-2 block`}>
                    {event.year}
                  </span>

                  {/* Event Details Card */}
                  <div className="glass-panel p-5 md:p-6 rounded-2xl transition-all duration-300 hover:border-white/20 hover:bg-white/5">
                    <h4 className="font-sans text-lg font-semibold text-white mb-1">
                      {event.title}
                    </h4>
                    <h5 className="font-sans text-sm font-medium text-muted/85 mb-4">
                      {event.subtitle}
                    </h5>
                    
                    {event.type === "academic" ? (
                      <div className="space-y-4">
                        <p className="font-sans text-sm text-muted leading-relaxed">
                          {event.description.split("Relevant Coursework:")[0]}
                        </p>
                        {event.description.includes("Relevant Coursework:") && (
                          <div>
                            <span className="font-sans text-xs font-bold text-white uppercase tracking-wider block mb-2">
                              Relevant Coursework
                            </span>
                            <div className="flex flex-wrap gap-1.5">
                              {event.description
                                .split("Relevant Coursework:")[1]
                                .split(",")
                                .map((course, idx) => (
                                  <span
                                    key={idx}
                                    className="font-sans text-[10px] font-semibold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-muted hover:text-white hover:border-white/20 transition-all duration-300"
                                  >
                                    {course.trim()}
                                  </span>
                                ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="font-sans text-sm text-muted leading-relaxed">
                        {event.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* What Makes Me Different & Current Focus Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mt-16 pt-16 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
      >
        {/* What Makes Me Different */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-400" /> What Makes Me Different
          </h3>
          <ul className="space-y-4">
            {[
              "Strong foundation in Machine Learning and model pipeline optimization",
              "Practical experience with Generative AI applications and custom RAG structures",
              "Actively learning Backend Engineering to deploy production-ready AI models",
              "Consistent focus on core Data Structures, Algorithms, and System Design",
              "Passion for engineering end-to-end intelligent systems from inception to launch",
              "Continuous learner focused on keeping pace with modern AI and developer stacks"
            ].map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-muted">
                <span className="text-emerald-400 font-bold">✓</span>
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Current Focus / Learning */}
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h3 className="font-sans text-lg md:text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Hourglass className="h-5 w-5 text-emerald-400" /> Current Focus & Learning
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Advanced Deep Learning",
              "Production GenAI Systems",
              "Scalable Backend Dev",
              "Core System Design",
              "Agentic AI Workflows",
              "MLOps Pipelines",
              "Scalable AI Architectures",
              "Advanced Algorithms"
            ].map((focus, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/15 transition-all duration-300"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="font-sans text-[11px] font-semibold text-gray-200">
                  {focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
