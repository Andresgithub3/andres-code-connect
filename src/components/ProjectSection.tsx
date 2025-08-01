import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Database,
  Shield,
  Users,
  TrendingUp,
  Play,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";

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
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">
              🏆 Featured Project
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PLACED CRM
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-text-dimmed max-w-4xl mx-auto leading-relaxed">
            Full-stack recruitment platform that{" "}
            <strong className="text-primary">
              increased placement efficiency by 40%
            </strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Interactive Demo Section */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Live Demo</h3>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-600 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  Live Preview
                </div>
              </div>

              {/* Demo Navigation */}
              <div className="flex gap-2 mb-6 overflow-x-auto">
                {[
                  { id: "dashboard", label: "Dashboard", icon: TrendingUp },
                  { id: "candidates", label: "Candidates", icon: Users },
                  { id: "clients", label: "Clients", icon: Shield },
                  // { id: "analytics", label: "Analytics", icon: Database }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveDemo(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      activeDemo === tab.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 text-text-dimmed hover:bg-secondary"
                    }`}
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Screenshot/Demo Area */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-4 min-h-[300px] flex items-center justify-center">
                {demoScreenshots[activeDemo] ? (
                  <img
                    src={demoScreenshots[activeDemo]}
                    alt={`CRM ${activeDemo} view`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="text-center text-white/70">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">
                      Interactive {activeDemo} demo
                    </p>
                    <p className="text-sm">Screenshots coming soon</p>
                  </div>
                )}
              </div>

              {/* Demo CTAs */}
              <div className="flex gap-4 mt-6">
                <Button
                  className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                  onClick={() => scrollToSection("contact")}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Request Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-primary/50 hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Button>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-8">
            {/* Key Features */}
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-primary mr-3" />
                Key Features
              </h3>
              <div className="space-y-4">
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
                    className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Database className="w-6 h-6 text-primary mr-3" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Frontend", tech: "React 19.1, Material UI v7" },
                  { label: "Backend", tech: "Supabase, PostgreSQL" },
                  { label: "Security", tech: "UUID-based RLS" },
                  { label: "Storage", tech: "Supabase Storage" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-secondary/30 rounded-lg text-center hover:bg-secondary/50 transition-colors"
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
            <div className="text-center">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
                onClick={() => scrollToSection("contact")}
              >
                Let's build something
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
