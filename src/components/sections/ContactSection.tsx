"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Send, CheckCircle, MessageSquare, Phone, Sparkles, Twitter } from "lucide-react";
import { Github, Linkedin } from "@/components/Icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleReset = () => {
    setIsSubmitted(false);
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/UdayBansalG0423",
      label: "github.com/UdayBansalG0423",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/uday-bansal-13213a289/",
      label: "linkedin.com/in/uday-bansal-13213a289",
      icon: Linkedin,
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/Uday_0412",
      label: "x.com/Uday_0412",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:bansaluday.112@gmail.com",
      label: "bansaluday.112@gmail.com",
      icon: Mail,
    },
    {
      name: "Phone",
      url: "tel:9528968570",
      label: "+91 95289 68570",
      icon: Phone,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-12 md:py-20 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <h2 className="font-sans text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-16 h-1 bg-white/20 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Availability & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="lg:col-span-5 space-y-8"
        >
          {/* Availability Card */}
          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all shadow-lg hover:shadow-white/5">
            <div className="flex items-center gap-3 mb-5">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="font-sans text-sm font-semibold text-emerald-400 uppercase tracking-wider">
                Available
              </span>
            </div>
            <h3 className="font-sans text-2xl font-semibold text-white mb-3">
              Open to Opportunities
            </h3>
            <p className="font-sans text-base text-muted leading-relaxed">
              I am actively seeking Software Engineering Internships, Machine Learning Engineering
              roles, and Generative AI collaborations. If you have an opening or a project to discuss,
              please reach out!
            </p>
          </div>

          {/* Social Links Cards */}
          <div className="space-y-4">
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl flex items-center gap-5 transition-all duration-300 hover:bg-white/5 hover:border-white/20 group"
                >
                  <div className="p-3 bg-white/5 rounded-xl group-hover:scale-105 group-hover:bg-white/10 transition-all">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="font-sans text-xs text-muted block uppercase tracking-wider font-semibold mb-0.5">
                      {link.name}
                    </span>
                    <span className="font-sans text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Right Column: Contact Form / Success state */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="glass-panel p-6 md:p-10 rounded-2xl relative min-h-[500px] flex flex-col justify-center shadow-lg hover:border-white/20 transition-colors duration-300">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/5">
                    <div className="p-2.5 rounded-xl bg-white/5">
                      <MessageSquare className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-sans text-lg font-semibold text-white">
                      Send a Message
                    </span>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3.5 text-sm font-sans text-white outline-none transition-all placeholder:text-muted/50"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3.5 text-sm font-sans text-white outline-none transition-all placeholder:text-muted/50"
                    />
                  </div>

                  {/* Subject field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Collaboration inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3.5 text-sm font-sans text-white outline-none transition-all placeholder:text-muted/50"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs font-semibold text-muted uppercase tracking-wider">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-white focus:ring-1 focus:ring-white rounded-xl px-4 py-3.5 text-sm font-sans text-white outline-none transition-all resize-none placeholder:text-muted/50"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full h-12 flex items-center justify-center gap-2 rounded-xl transition-all shadow-lg font-sans font-semibold text-sm ${
                      isSubmitting
                        ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 cursor-not-allowed"
                        : "bg-white hover:bg-gray-200 text-black hover:shadow-xl cursor-pointer"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Sparkles className="h-4 w-4 animate-pulse" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center space-y-6 py-12"
                >
                  <div className="flex justify-center text-emerald-400">
                    <CheckCircle className="h-16 w-16 stroke-[1.5]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl font-bold text-white">
                      Message Sent
                    </h3>
                  </div>
                  <p className="max-w-md mx-auto font-sans text-base text-muted leading-relaxed">
                    Thank you for reaching out. Your message has been successfully sent. I will get back to you as soon as possible.
                  </p>
                  <div className="pt-6">
                    <button
                      onClick={handleReset}
                      className="font-sans font-medium text-sm text-white hover:text-gray-200 border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 px-6 py-3 rounded-xl transition-all"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
