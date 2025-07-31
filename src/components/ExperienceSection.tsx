import { Building, Calendar, MapPin, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Freelance",
      role: "Full-Stack Developer",
      period: "Aug 2019 - Present",
      location: "Edmonton, AB",
      description: "Lead full-stack development projects while managing client relationships and business operations.",
      achievements: [
        "Built and deployed multiple client applications using modern React and Node.js stack",
        "Managed complete project lifecycle from requirements gathering to deployment",
        "Implemented agile methodologies resulting in 95% on-time project delivery",
        "Maintained strong client relationships with 100% satisfaction rate"
      ],
      icon: Building,
      color: "text-primary"
    },
    {
      company: "TEEMA",
      role: "Senior Associate - Technical Recruitment",
      period: "2021 - 2024",
      location: "Edmonton, AB",
      description: "Specialized in technical talent acquisition with exceptional placement success rates.",
      achievements: [
        "Achieved 65% submission-to-interview ratio (industry average: 20-30%)",
        "Developed deep understanding of technical roles across various industries",
        "Built extensive network of software engineers and technical professionals",
        "Collaborated with hiring managers to define technical requirements and cultural fit"
      ],
      icon: TrendingUp,
      color: "text-accent"
    },
    {
      company: "PwC",
      role: "Client Strategist & Manager",
      period: "2018 - 2021",
      location: "Calgary, AB",
      description: "Led enterprise technology solutions and cross-functional team initiatives.",
      achievements: [
        "Managed complex technical assessments for Fortune 500 clients",
        "Led cross-functional teams of 8-12 professionals on enterprise projects",
        "Facilitated stakeholder communication between technical and business teams",
        "Developed strategic technology roadmaps for client digital transformation"
      ],
      icon: Building,
      color: "text-accent-glow"
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Experience That <span className="text-primary">Bridges Business & Technology</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-4xl mx-auto">
            My career journey combines hands-on technical development with strategic business 
            experience, giving me unique insights into what makes software projects successful.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300"
            >
              <div className="grid lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <exp.icon className={`w-6 h-6 ${exp.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <p className="text-primary font-semibold">{exp.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-text-dimmed">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <p className="text-text-dimmed leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div 
                        key={achIndex}
                        className="flex items-start space-x-3 bg-secondary/20 p-4 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-text-dimmed leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Why This Experience Matters</h3>
            <p className="text-lg text-text-dimmed max-w-4xl mx-auto">
              This unique combination of enterprise consulting, technical recruitment, and hands-on 
              development means I understand projects from every angle—business requirements, 
              technical constraints, team dynamics, and stakeholder expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;