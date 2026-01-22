import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "./AnimatedText";
import MagneticButton from "./MagneticButton";
import { useRef } from 'react';
import { usePortfolio } from "@/context/PortfolioContext";

const HeroSection = () => {
  const { personalInfo } = usePortfolio();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExpertise = () => {
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
  };

  const stats = [
    { value: personalInfo.yearsExperience, label: "Years Experience" },
    { value: personalInfo.projectsDelivered, label: "Projects Delivered" },
    { value: personalInfo.industriesServed, label: "Industries Served" },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary noise"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Accent line */}
      <motion.div 
        className="absolute left-8 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-accent to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
      
      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 px-6 py-20"
      >
        <div className="max-w-5xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-3 mb-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full glass-dark px-5 py-2.5 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-primary-foreground/80">{personalInfo.status}</span>
            </div>
          </motion.div>

          {/* Main content */}
          <div className="text-center lg:text-left">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 text-primary-foreground/60 mb-6"
            >
              <MapPin className="h-4 w-4" />
              <span className="text-sm tracking-wide uppercase">{personalInfo.location}</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-primary-foreground tracking-tight mb-4">
              <AnimatedText text={personalInfo.name} delay={0.3} />
              <span className="block text-accent">
                <AnimatedText text={personalInfo.lastName} delay={0.5} />
              </span>
            </h1>

            {/* Title */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-xl md:text-2xl text-primary-foreground/70 font-light mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {personalInfo.title}
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-lg text-primary-foreground/50 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed"
            >
              {personalInfo.tagline.split('15+ years').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && <span className="text-accent font-medium">{personalInfo.yearsExperience} years</span>}
                </span>
              ))}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-20"
            >
              <MagneticButton>
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="group relative bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base rounded-full overflow-hidden transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Get In Touch
                    <Sparkles className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </Button>
              </MagneticButton>
              
              <MagneticButton>
                <Button
                  onClick={scrollToExpertise}
                  variant="outline"
                  size="lg"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-6 text-base rounded-full backdrop-blur-sm"
                >
                  Explore My Work
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-primary-foreground/40 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-primary-foreground/40"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
