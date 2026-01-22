import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const SkillsSection = () => {
  const { skillCategories } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-3xl rounded-full" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Skills Overview
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => (
            <AnimatedSection
              key={index}
              delay={0.1 * index}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative h-full"
              >
                <div className={`absolute -inset-px bg-gradient-to-r ${cat.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                <div className="relative bg-card rounded-2xl p-8 border border-border group-hover:border-transparent h-full">
                  <h3 className="text-xl font-heading font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className={`w-4 h-4 rounded-full bg-gradient-to-r ${cat.color}`} />
                    {cat.category}
                  </h3>
                  <div className="space-y-6">
                    {cat.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">
                            {skill.name}
                          </span>
                          <span className="text-sm font-semibold text-accent">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${cat.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.5 + skillIndex * 0.1,
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
