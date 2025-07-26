import { Code, Database, Settings, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Sass",
        "Responsive Design",
      ],
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MySQL",
        "PostgreSQL",
        "Supabase",
        "REST APIs",
      ],
    },
    {
      icon: Settings,
      title: "Tools & Methodologies",
      skills: [
        "Git/GitHub",
        "JIRA",
        "Postman",
        "Agile/Scrum",
        "CI/CD",
        "Testing",
      ],
    },
    {
      icon: Users,
      title: "Business & Soft Skills",
      skills: [
        "Stakeholder Management",
        "Requirements Analysis",
        "Team Leadership",
        "Technical Communication",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Technical Skills With{" "}
            <span className="text-primary">Business Context</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-3xl mx-auto">
            My technical toolkit is enhanced by business understanding, ensuring
            every solution aligns with organizational goals and user needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-secondary/50 px-4 py-2 rounded-lg text-center text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Strategic Foundation</h3>
            <p className="text-lg text-text-dimmed mb-6 max-w-4xl mx-auto">
              Unlike traditional developers, I bring strategic consulting
              experience to every line of code. This unique combination means I
              don't just build what's requested—I help define what should be
              built, understand why it matters, and deliver solutions that drive
              real business outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Strategic Foundation
                </div>
                <div className="text-sm text-text-dimmed">
                  7+ Years Business Experience I don't just code features—I help
                  define which features will drive business success based on
                  real consulting experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Seamless Translation
                </div>
                <div className="text-sm text-text-dimmed">
                  Business ↔ Technical Bridge Fluent in both boardroom strategy
                  and development implementation, eliminating costly
                  miscommunication
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  Complete Ownership
                </div>
                <div className="text-sm text-text-dimmed">
                  Discovery Through Deployment Can lead stakeholder workshops,
                  architect solutions, and build production applications—the
                  full strategic-to-technical pipeline
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
