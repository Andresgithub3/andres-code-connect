import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Shield, Users, TrendingUp } from "lucide-react";

const ProjectSection = () => {
  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Featured Project: <span className="text-primary">PLACED CRM</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-3xl mx-auto">
            A comprehensive recruitment lifecycle management platform that demonstrates 
            my ability to build business-critical applications with modern technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Business Challenge</h3>
                <p className="text-text-dimmed leading-relaxed">
                  Solo recruiters and small recruitment firms needed a comprehensive, 
                  affordable CRM solution to manage their entire recruitment lifecycle—from 
                  candidate sourcing to client placement—without the complexity and cost 
                  of enterprise solutions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Technical Solution</h3>
                <p className="text-text-dimmed leading-relaxed">
                  Built a modern, single-tenant CRM platform using React 19.1.0 with Material UI v7 
                  for responsive design, powered by Supabase for real-time database operations, 
                  authentication, and file storage. Implemented UUID-based security for data isolation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Business Impact</h3>
                <ul className="space-y-2 text-text-dimmed">
                  <li className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>40% improvement in candidate pipeline management efficiency</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Streamlined client-candidate matching process</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Database className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Centralized data management reducing administrative overhead</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 text-base shadow-elegant transition-all duration-300 hover:scale-105 rounded-lg"
              >
                View Live Demo
                <ExternalLink className="ml-2 h-4 w-4" />
              </button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                View Code
                <Github className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Database className="w-5 h-5 text-primary mr-2" />
                Technical Architecture
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary/30 p-3 rounded-lg text-center">
                  <div className="font-semibold text-primary">Frontend</div>
                  <div className="text-sm text-text-dimmed mt-1">React 19.1.0<br />Material UI v7</div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg text-center">
                  <div className="font-semibold text-primary">Backend</div>
                  <div className="text-sm text-text-dimmed mt-1">Supabase<br />PostgreSQL</div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg text-center">
                  <div className="font-semibold text-primary">Security</div>
                  <div className="text-sm text-text-dimmed mt-1">UUID-based<br />Row Level Security</div>
                </div>
                <div className="bg-secondary/30 p-3 rounded-lg text-center">
                  <div className="font-semibold text-primary">Storage</div>
                  <div className="text-sm text-text-dimmed mt-1">Supabase Storage<br />File Management</div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Shield className="w-5 h-5 text-primary mr-2" />
                Key Features
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-dimmed">Comprehensive candidate profile management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-dimmed">Client relationship tracking and communication</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-dimmed">Job posting and application workflow</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-dimmed">Real-time analytics and reporting dashboard</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-text-dimmed">Secure document storage and sharing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;