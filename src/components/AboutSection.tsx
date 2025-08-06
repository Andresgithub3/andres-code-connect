import {
  GraduationCap,
  Briefcase,
  Users,
  TrendingUp,
  Lightbulb,
  Target,
} from "lucide-react";

const AboutSection = () => {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Lightbulb className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-medium text-primary">About Me</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Business Experience Meets{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Technical Excellence
            </span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-4xl mx-auto leading-relaxed">
            While most developers focus purely on code,{" "}
            <strong className="text-foreground">
              I bring business acumen and technical expertise
            </strong>{" "}
            to deliver solutions that drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Key Differentiators */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Business Strategy Background
                </h3>
                <p className="text-text-dimmed leading-relaxed">
                  <strong>7+ years</strong> in business development and
                  consulting at PwC. I understand the business context behind
                  every technical decision.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Stakeholder Communication
                </h3>
                <p className="text-text-dimmed leading-relaxed">
                  Proven ability to{" "}
                  <strong>translate complex technical concepts</strong> for
                  non-technical stakeholders and gather requirements that lead
                  to successful outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Results-Driven Approach
                </h3>
                <p className="text-text-dimmed leading-relaxed">
                  Every project is measured against{" "}
                  <strong>business objectives</strong>. I focus on ROI, user
                  conversion, and measurable business impact.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Background Cards */}
          <div className="space-y-6">
            <div className="bg-card/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Current Education</h3>
                  <p className="text-primary font-medium">
                    BrainStation Software Engineering Diploma
                  </p>
                </div>
              </div>
              <p className="text-text-dimmed">
                <strong>Intensive full-stack program</strong> (Oct 2024 - Jun
                2025) covering modern React, Node.js, and database technologies.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Business Foundation</h3>
                  <p className="text-primary font-medium">
                    Business Degree - MacEwan University
                  </p>
                </div>
              </div>
              <p className="text-text-dimmed">
                <strong>Strategic foundation</strong> in business strategy,
                project management, and organizational dynamics.
              </p>
            </div>

            <div className="bg-card/30 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300 group">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    Recruitment Expertise
                  </h3>
                  <p className="text-primary font-medium">
                    Technical Talent Acquisition
                  </p>
                </div>
              </div>
              <p className="text-text-dimmed">
                <strong>Deep understanding</strong> of technical roles from
                years of evaluating and placing software engineers.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-text-dimmed mb-6 max-w-2xl mx-auto">
              Let's discuss how my unique combination of business experience and
              technical expertise can help bring your vision to life.
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-transform relative z-50"
                onClick={() => scrollToSection("contact")}
              >
                Schedule a Call
              </button>
              <button
                className="border border-primary/50 text-primary px-8 py-3 rounded-xl font-semibold hover:bg-primary/10 transition-colors relative z-50"
                onClick={() => scrollToSection("project")}
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
