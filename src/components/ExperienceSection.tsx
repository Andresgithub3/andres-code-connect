import {
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  ChevronRight,
  Award,
} from "lucide-react";
import { useState } from "react";
import React from "react";

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const experiences = [
    {
      company: "Freelance Developer",
      role: "Full-Stack Developer",
      period: "Aug 2019 - Present",
      location: "Edmonton, AB",
      type: "Current",
      description:
        "Building revenue-driving applications while managing complete client relationships.",
      highlights: [
        "Built 5+ production applications using modern React and Node.js",
        "95% on-time project delivery using agile methodologies",
        "100% client satisfaction rate with repeat business",
        "Generated $200K+ in measurable client value",
      ],
      icon: Building,
      color: "from-green-500 to-emerald-500",
      stats: { projects: "5+", satisfaction: "100%", delivery: "95%" },
    },
    {
      company: "TEEMA",
      role: "Senior Associate - Technical Recruitment",
      period: "2021 - 2024",
      location: "Edmonton, AB",
      type: "Previous",
      description:
        "Specialized in technical talent acquisition with exceptional placement success.",
      highlights: [
        "Achieved 65% submission-to-interview ratio (industry avg: 20-30%)",
        "Built network of 500+ software engineers and tech professionals",
        "Defined technical requirements for Fortune 500 companies",
        "Mentored junior recruiters on technical screening",
      ],
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-500",
      stats: { ratio: "65%", network: "500+", clients: "50+" },
    },
    {
      company: "PwC",
      role: "Client Strategist & Manager",
      period: "2018 - 2021",
      location: "Calgary, AB",
      type: "Previous",
      description:
        "Led enterprise technology solutions and cross-functional initiatives.",
      highlights: [
        "Managed technical assessments for Fortune 500 clients",
        "Led cross-functional teams of 8-12 professionals",
        "Facilitated $2M+ technology roadmap implementations",
        "Developed digital transformation strategies",
      ],
      icon: Award,
      color: "from-purple-500 to-pink-500",
      stats: { value: "$2M+", teams: "8-12", clients: "Fortune 500" },
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Calendar className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">
              Career Journey
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Experience That{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Bridges Business & Technology
            </span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-4xl mx-auto">
            My career combines hands-on development with strategic business
            experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(index)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 ${
                  selectedExperience === index
                    ? `bg-gradient-to-r ${exp.color} text-white shadow-2xl scale-105`
                    : "bg-card/50 backdrop-blur-sm hover:bg-card/80 border border-border/50"
                }`}
              >
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className={`p-2 rounded-lg ${
                      selectedExperience === index
                        ? "bg-white/20"
                        : "bg-primary/10"
                    }`}
                  >
                    {React.createElement(exp.icon, {
                      className: `w-5 h-5 ${
                        selectedExperience === index
                          ? "text-white"
                          : "text-primary"
                      }`,
                    })}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{exp.company}</h3>
                    <p
                      className={`text-sm ${
                        selectedExperience === index
                          ? "text-white/80"
                          : "text-primary"
                      }`}
                    >
                      {exp.role}
                    </p>
                  </div>
                  {selectedExperience === index && (
                    <ChevronRight className="w-5 h-5 text-white" />
                  )}
                </div>

                <div
                  className={`flex items-center gap-4 text-sm ${
                    selectedExperience === index
                      ? "text-white/70"
                      : "text-text-dimmed"
                  }`}
                >
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {selectedExperience === index && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-sm text-white/80">
                      {exp.type === "Current"
                        ? "🟢 Current Role"
                        : "✅ Completed"}
                    </div>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-2xl">
              <div
                className={`bg-gradient-to-r ${experiences[selectedExperience].color} p-1 rounded-2xl mb-6`}
              >
                <div className="bg-white rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-r ${experiences[selectedExperience].color}`}
                    >
                      {React.createElement(
                        experiences[selectedExperience].icon,
                        { className: "w-8 h-8 text-white" }
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">
                        {experiences[selectedExperience].company}
                      </h3>
                      <p className="text-primary font-semibold text-lg">
                        {experiences[selectedExperience].role}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-text-dimmed mt-1">
                        <span>{experiences[selectedExperience].period}</span>
                        <span>•</span>
                        <span>{experiences[selectedExperience].location}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-text-dimmed leading-relaxed">
                    {experiences[selectedExperience].description}
                  </p>
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {Object.entries(experiences[selectedExperience].stats).map(
                  ([key, value], index) => (
                    <div
                      key={index}
                      className="text-center p-4 bg-secondary/30 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-primary mb-1">
                        {value}
                      </div>
                      <div className="text-xs text-text-dimmed capitalize">
                        {key.replace(/([A-Z])/g, " $1")}
                      </div>
                    </div>
                  )
                )}
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold mb-4">Key Achievements</h4>
                {experiences[selectedExperience].highlights.map(
                  (highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Why This Experience Matters
            </h3>
            <p className="text-lg text-text-dimmed max-w-4xl mx-auto mb-8">
              This unique combination means I understand projects from every
              angle—business requirements, technical constraints, team dynamics,
              and stakeholder expectations.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="font-semibold mb-2">
                  Business-First Approach
                </div>
                <div className="text-sm text-text-dimmed">
                  Every technical decision aligned with business outcomes
                </div>
              </div>
              <div className="p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="font-semibold mb-2">Proven Track Record</div>
                <div className="text-sm text-text-dimmed">
                  Consistent delivery of high-impact solutions
                </div>
              </div>
              <div className="p-6 bg-card/30 rounded-2xl backdrop-blur-sm">
                <div className="font-semibold mb-2">Stakeholder Fluency</div>
                <div className="text-sm text-text-dimmed">
                  Bridge technical and business teams seamlessly
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
