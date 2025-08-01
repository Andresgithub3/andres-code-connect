import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectSection from "@/components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ScrollProgressBar />
      
      <main className="relative">
        <section id="hero">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="project">
          <ProjectSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
      
      <footer className="bg-card/30 backdrop-blur-md border-t border-border/20 py-8 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-text-dimmed">
            © 2024 Andres Tenias. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
};

export default Index;
