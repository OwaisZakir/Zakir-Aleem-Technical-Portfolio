import { Shield, Wrench, Zap, Users, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SummarySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Wrench,
      title: "Technical Versatility",
      description: "Multi-disciplinary expertise across mechanical, electrical, and water systems",
    },
    {
      icon: Shield,
      title: "Safety Leadership",
      description: "Proven track record in implementing and maintaining safety protocols",
    },
    {
      icon: Zap,
      title: "Operations Continuity",
      description: "Ensuring uninterrupted operations through proactive maintenance",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading and mentoring technical teams to achieve excellence",
    },
  ];

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Subtle gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-20">
            <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
              Professional Profile
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
              About Me
            </h2>
            <motion.div 
              className="w-24 h-1 bg-accent mx-auto rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </AnimatedSection>

          {/* Summary card */}
          <AnimatedSection delay={0.2} className="mb-20">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-accent/5 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative glass rounded-3xl p-10 md:p-14">
                <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed text-center font-light">
                  A results-driven <span className="font-semibold text-foreground">Mechanical & Technical Supervisor</span> with 
                  over <span className="font-semibold text-accent">15 years of progressive experience</span> in 
                  industrial operations, facilities management, and technical systems maintenance. 
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mt-6">
                  Demonstrated expertise in managing complex mechanical and electrical infrastructure 
                  across diverse sectors including <span className="font-medium text-foreground/70">CNG plants, hospitals, RO water treatment 
                  facilities, and power generation systems</span>.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <AnimatedSection
                key={index}
                delay={0.1 * index}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="group relative h-full"
                >
                  <div className="absolute inset-0 bg-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-5 p-6 rounded-2xl glass h-full">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                      <item.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-semibold text-lg text-foreground mb-2 flex items-center gap-2">
                        {item.title}
                        <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
