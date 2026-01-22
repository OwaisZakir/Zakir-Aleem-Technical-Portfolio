import { GraduationCap, Award, Languages, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { usePortfolio } from "@/context/PortfolioContext";

const EducationSection = () => {
  const { education, certifications, languages } = usePortfolio();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Education & Credentials
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <AnimatedSection delay={0.1}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-accent to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative glass rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-orange-500 flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div 
                      key={index} 
                      className="relative pl-5 border-l-2 border-accent"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <p className="font-semibold text-foreground">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <p className="text-sm text-accent font-medium mt-1">{edu.year}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Certifications */}
          <AnimatedSection delay={0.2}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative glass rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Certifications</h3>
                </div>
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    >
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{cert}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.3}>
            <motion.div 
              whileHover={{ y: -4 }}
              className="group relative h-full"
            >
              <div className="absolute -inset-px bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
              <div className="relative glass rounded-2xl p-8 h-full">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Languages className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">Languages</h3>
                </div>
                <div className="space-y-5">
                  {languages.map((lang, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-xs text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                          {lang.level}
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percent}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.6 + index * 0.1,
                            ease: [0.22, 1, 0.36, 1]
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
