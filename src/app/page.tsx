"use client";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />

      <SkillsSection />
      
      <div className="w-full flex justify-center py-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <AboutSection />
      
      <div className="w-full flex justify-center py-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <ProjectsSection />
      
      <div className="w-full flex justify-center py-4">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      </div>

      <ContactSection />
    </div>
  );
}
