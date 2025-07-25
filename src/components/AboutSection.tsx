import { GraduationCap, Briefcase, Users, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Business Experience Meets <span className="text-primary">Technical Excellence</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-4xl mx-auto leading-relaxed">
            While most developers focus purely on code, I bring a unique combination of business 
            acumen and technical expertise to every project. I understand stakeholder needs, 
            translate requirements effectively, and deliver solutions that drive measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Strategy Background</h3>
                  <p className="text-text-dimmed leading-relaxed">
                    7+ years in business development, client strategy, and technical recruitment. 
                    I've worked with enterprise clients at PwC and understand the business context 
                    behind every technical decision.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Stakeholder Communication</h3>
                  <p className="text-text-dimmed leading-relaxed">
                    Proven ability to translate complex technical concepts for non-technical 
                    stakeholders and gather requirements that lead to successful project outcomes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Results-Driven Approach</h3>
                  <p className="text-text-dimmed leading-relaxed">
                    Every project is measured against business objectives. I focus on ROI, 
                    user conversion, and measurable business impact rather than just technical complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Current Education</h3>
                  <p className="text-text-dimmed">BrainStation Software Engineering Diploma</p>
                </div>
              </div>
              <p className="text-text-dimmed">
                Intensive full-stack development program (Oct 2024 - Jun 2025) 
                covering modern React, Node.js, and database technologies.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Business Foundation</h3>
                  <p className="text-text-dimmed">Business Degree - MacEwan University</p>
                </div>
              </div>
              <p className="text-text-dimmed">
                Strong foundation in business strategy, project management, 
                and organizational dynamics that informs every technical decision.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Recruitment Expertise</h3>
                  <p className="text-text-dimmed">Technical Talent Acquisition</p>
                </div>
              </div>
              <p className="text-text-dimmed">
                Deep understanding of technical roles and requirements from years 
                of evaluating and placing software engineers across various industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;