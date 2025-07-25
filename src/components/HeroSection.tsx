import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import headshot from "@/assets/andres-headshot.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background to-section-bg">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Business-Minded Developer Who{" "}
              <span className="text-primary">Delivers Results</span>
            </h1>
            <p className="text-xl text-text-dimmed leading-relaxed max-w-2xl">
              I combine 7+ years of business experience with modern full-stack development 
              to build solutions that drive real business outcomes, not just pretty interfaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 text-lg shadow-elegant transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Get My Free Project Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              View Featured Project
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">7+</div>
              <div className="text-sm text-text-dimmed mt-1">Years Business Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">65%</div>
              <div className="text-sm text-text-dimmed mt-1">Submission-to-Interview Ratio</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-dimmed mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110"></div>
            <img 
              src={headshot} 
              alt="Andres Tenias - Full-Stack Developer" 
              className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-elegant filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;