import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";
import CVButton from "@/components/CVButton";
import { useState } from "react";

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/applayout-crm.mp4" type="video/mp4" />
        </video>
        {/* Fallback gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full animate-spin-slow" />
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Business-Minded Developer Who
              <div className="inline-block">
                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-primary pr-2 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Delivers Results
                </span>
              </div>
            </h1>

            <p className="text-xl lg:text-2xl text-text-dimmed leading-relaxed max-w-2xl">
              <strong className="text-foreground">
                7+ years business experience
              </strong>{" "}
              + modern full-stack development =
              <span className="text-primary font-semibold">
                {" "}
                solutions that actually work
              </span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <CVButton />
            <Button
              variant="outline"
              size="lg"
              className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              See My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Enhanced stats with animations */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                7+
              </div>
              <div className="text-sm text-text-dimmed">
                Years Business Experience
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                5
              </div>
              <div className="text-sm text-text-dimmed">
                Live Projects Deployed
              </div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                100%
              </div>
              <div className="text-sm text-text-dimmed">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced image section */}
        <div className="flex justify-center lg:justify-end animate-fade-in-right">
          <div className="relative group">
            {/* Glassmorphism container */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl scale-110 group-hover:scale-125 transition-transform duration-700" />

            {/* Main image container */}
            <div className="relative bg-card/30 backdrop-blur-md p-8 rounded-3xl border border-white/20">
              <img
                src="/src/assets/andres-photo-512.jpg"
                alt="Andres Tenias - Full-Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-3xl border-4 border-primary/20 shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 cursor-pointer"
              />
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                Full-Stack Expert
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
