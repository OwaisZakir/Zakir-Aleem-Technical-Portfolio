import { Mail, MapPin, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExpertise = () => {
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen hero-gradient flex items-center justify-center overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent line */}
      <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
      
      <div className="container relative z-10 px-6 py-20 text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/80 mb-6 backdrop-blur-sm border border-primary-foreground/10">
            <MapPin className="h-4 w-4" />
            <span>Karachi, Pakistan</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight mb-4">
            Zakir Aleem
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/90 mb-6">
            Mechanical & Technical Supervisor
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
            Engineering Excellence Through 15+ Years of Technical Leadership
            <span className="block mt-2 text-accent font-medium">
              CNG Plants • RO Systems • Power Generation • Facilities Management
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              onClick={scrollToExpertise}
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-base backdrop-blur-sm"
            >
              View Expertise
            </Button>
          </div>

          {/* Quick stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-bold text-accent">15+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Years Experience</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-bold text-accent">6+</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Industries Served</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-3xl md:text-4xl font-bold text-accent">100%</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Safety Focused</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary-foreground/50" />
      </div>
    </section>
  );
};

export default HeroSection;
