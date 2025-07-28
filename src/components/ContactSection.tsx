import { Input } from "@/components/ui/input";
import { supabase, type Contact } from "@/lib/supabase";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Show loading state (optional)
      const loadingToast = toast({
        title: "Sending message...",
        description: "Please wait while we process your request.",
      });

      // Prepare data for Supabase
      const contactData: Omit<Contact, "id" | "created_at"> = {
        name: formData.name,
        email: formData.email,
        project_details: formData.projectDetails,
      };

      // Insert into Supabase
      const { data, error } = await supabase
        .from("contacts")
        .insert([contactData])
        .select();

      if (error) {
        throw error;
      }

      // Success!
      toast({
        title: "Message Sent Successfully!",
        description:
          "I'll get back to you within 24 hours with your free project quote.",
      });

      // Clear the form
      setFormData({ name: "", email: "", projectDetails: "" });
    } catch (error) {
      console.error("Error submitting form:", error);

      toast({
        title: "Something went wrong",
        description:
          "Please try again or email me directly at your.email@domain.com",
        variant: "destructive",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Ready to <span className="text-primary">Start Your Project?</span>
          </h2>
          <p className="text-xl text-text-dimmed max-w-3xl mx-auto">
            Let's discuss how my business experience and technical expertise can
            help bring your vision to life with measurable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-6">
              Tell Me About Your Project
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-secondary/50 border-border focus:border-primary"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-secondary/50 border-border focus:border-primary"
                  placeholder="your.email@company.com"
                  required
                />
              </div>

              <div>
                <Label htmlFor="projectDetails" className="text-sm font-medium">
                  Project Details
                </Label>
                <Textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className="mt-2 bg-secondary/50 border-border focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-glow text-primary-foreground hover:text-primary border border-transparent hover:border-primary font-semibold px-4 py-2 text-base shadow-elegant transition-all duration-300 hover:scale-105 rounded-lg"
              >
                Contact me
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-text-dimmed text-center">
                🔒 Your information is secure and will never be shared. I'll
                respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:aetg94@gmail.com"
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      aetg94@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+17809722452"
                      className="text-primary hover:text-primary-glow transition-colors"
                    >
                      780-972-2452
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-text-dimmed">
                      Edmonton, Alberta, Canada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Professional Profiles
              </h3>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/andresteniasgil/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">LinkedIn Profile</p>
                    <p className="text-sm text-text-dimmed">
                      Professional background & recommendations
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/Andresgithub3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-secondary/30 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">GitHub Portfolio</p>
                    <p className="text-sm text-text-dimmed">
                      Code examples & project repositories
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-primary/20">
              <h4 className="text-lg font-semibold mb-3">
                Quick Response Guarantee
              </h4>
              <p className="text-text-dimmed text-sm">
                I typically respond to all project inquiries within 24 hours.
                For urgent requests, feel free to call directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
