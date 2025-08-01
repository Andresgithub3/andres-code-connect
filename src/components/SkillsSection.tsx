import { Code, Database, Settings, Users, Zap, Brain } from "lucide-react";
import { useState } from "react";
import React from "react";

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      icon: Code,
      title: "Frontend Mastery",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 95, description: "Advanced hooks, context, performance" },
        { name: "TypeScript", level: 90, description: "Type-safe applications" },
        { name: "Tailwind CSS", level: 88, description: "Responsive, modern design" },
        { name: "JavaScript ES6+", level: 92, description: "Modern JS patterns" }
      ]
    },
    backend: {
      icon: Database,
      title: "Backend Power",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85, description: "Scalable server applications" },
        { name: "PostgreSQL", level: 80, description: "Complex queries & optimization" },
        { name: "Supabase", level: 90, description: "Real-time, auth, storage" },
        { name: "REST APIs", level: 88, description: "Well-structured endpoints" }
      ]
    },
    tools: {
      icon: Settings,
      title: "Dev Tools",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git/GitHub", level: 92, description: "Version control, collaboration" },
        { name: "Docker", level: 75, description: "Containerization basics" },
        { name: "Postman", level: 85, description: "API testing & documentation" },
        { name: "VS Code", level: 95, description: "Productivity extensions" }
      ]
    },
    business: {
      icon: Users,
      title: "Business Edge",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Stakeholder Management", level: 95, description: "7+ years consulting experience" },
        { name: "Requirements Analysis", level: 90, description: "Business to technical translation" },
        { name: "Project Leadership", level: 88, description: "Cross-functional team leadership" },
        { name: "Client Communication", level: 92, description: "Technical concepts simplified" }
      ]
    }
  };

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Brain className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">Skills & Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Technical Skills With{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Business Context</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-3xl mx-auto">
            My technical toolkit is enhanced by 7+ years of business experience
          </p>
        </div>

        {/* Interactive Categories */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                selectedCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                  : "bg-card/50 backdrop-blur-sm hover:bg-card/80 border border-border/50"
              }`}
            >
              {React.createElement(category.icon, { className: "w-5 h-5" })}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
          <div className={`bg-gradient-to-r ${skillCategories[selectedCategory].color} p-1 rounded-2xl mb-8`}>
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-2">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[selectedCategory].color}`}>
                  {React.createElement(skillCategories[selectedCategory].icon, { className: "w-6 h-6 text-white" })}
                </div>
                <h3 className="text-2xl font-bold">{skillCategories[selectedCategory].title}</h3>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[selectedCategory].skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-card/50 rounded-2xl border border-border/50 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-lg">{skill.name}</span>
                  <span className="text-sm font-bold text-primary">{skill.level}%</span>
                </div>
                
                {/* Animated Progress Bar */}
                <div className="w-full bg-secondary/50 rounded-full h-3 mb-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
                
                <p className="text-sm text-text-dimmed group-hover:text-foreground transition-colors">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Advantage */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
          <div className="text-center">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">The Business Advantage</h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">Strategic Foundation</div>
                <div className="text-sm text-text-dimmed">
                  I don't just code features—I help define which features will drive business success
                </div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">Seamless Translation</div>
                <div className="text-sm text-text-dimmed">
                  Fluent in both boardroom strategy and development implementation
                </div>
              </div>
              <div className="text-center p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-2">Complete Ownership</div>
                <div className="text-sm text-text-dimmed">
                  From discovery workshops to production deployment—the full pipeline
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
