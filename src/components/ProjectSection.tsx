import { Button } from "@/components/ui/button";
import {
  Database,
  Shield,
  Users,
  TrendingUp,
  Play,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import GitHubIcon from "@/assets/github.svg"; 

const ProjectSection = () => {
  const [activeDemo, setActiveDemo] = useState("dashboard");

  const demoScreenshots = {
    dashboard: "/screenshots/dashboard.png",
    candidates: "/screenshots/candidate.png",
    clients: "/screenshots/company.png",
  };

  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">
              Featured Project
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PLACED CRM
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-text-dimmed max-w-4xl mx-auto leading-relaxed">
            Full-stack recruitment platform that{" "}
            <strong className="text-primary">
              increased placement efficiency by 40%
            </strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Interactive Demo Section */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl md:text-2xl font-bold">Live Demo</h3>
              </div>

              {/* Demo Navigation */}
              <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                {[
                  { id: "dashboard", label: "Dashboard", icon: TrendingUp },
                  { id: "candidates", label: "Candidates", icon: Users },
                  { id: "clients", label: "Clients", icon: Shield },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDemo(tab.id)}
                    className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all whitespace-nowrap ${
                      activeDemo === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-text-dimmed hover:bg-secondary"
                    }`}
                  >
                    <tab.icon className="w-3 h-3 md:w-4 md:h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Screenshot/Demo Area */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-2 md:p-4 min-h-[250px] md:min-h-[300px] flex items-center justify-center">
                {demoScreenshots[activeDemo] ? (
                  <img
                    src={demoScreenshots[activeDemo]}
                    alt={`CRM ${activeDemo} view`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-white/70">
                    <Play className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-base md:text-lg font-medium">
                      Interactive {activeDemo} demo
                    </p>
                    <p className="text-xs md:text-sm">
                      Screenshots coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* Demo CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6">
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-sm md:text-base"
                  onClick={() => scrollToSection("contact")}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Contact me for a Live Demo
                </Button>
                <a
                  href="https://github.com/Andresgithub3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 text-sm md:text-base"
                  >
                    <img src={GitHubIcon} alt="GitHub" className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6 md:space-y-8">
            {/* Key Features */}
            <div className="bg-card/30 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2 md:mr-3" />
                Key Features
              </h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Real-time candidate pipeline management",
                  "AI-powered client-candidate matching",
                  "Automated workflow & notifications",
                  "Advanced analytics & reporting",
                  "Secure document management",
                  "Mobile-responsive design",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors hover:scale-105"
                  >
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-xs md:text-sm font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/30 backdrop-blur-md p-4 md:p-8 rounded-3xl border border-white/20">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center">
                <Database className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2 md:mr-3" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Frontend", tech: "React 19.1, Material UI v7" },
                  { label: "Backend", tech: "Supabase, PostgreSQL" },
                  { label: "Security", tech: "UUID-based RLS" },
                  { label: "Storage", tech: "Supabase Storage" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-secondary/30 rounded-lg text-center hover:bg-secondary/50 transition-colors"
                  >
                    <div className="font-semibold text-primary text-sm">
                      {item.label}
                    </div>
                    <div className="text-xs text-text-dimmed mt-1">
                      {item.tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center relative z-50">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity px-6 md:px-8"
                onClick={() => scrollToSection("contact")}
              >
                Let's build something
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;