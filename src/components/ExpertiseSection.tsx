import { Cog, Zap, Droplets, Sun, Building2, Gauge, ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const ExpertiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const expertiseCategories = [
    {
      icon: Cog,
      title: "Mechanical Systems",
      color: "from-orange-500 to-red-500",
      skills: [
        "CNG Plant Operations & Maintenance",
        "Compressor Systems & Reciprocating Equipment",
        "HVAC Systems Installation & Maintenance",
        "Hydraulic & Pneumatic Systems",
        "Preventive Maintenance Planning",
      ],
    },
    {
      icon: Zap,
      title: "Electrical Systems",
      color: "from-yellow-500 to-orange-500",
      skills: [
        "VFD (Variable Frequency Drive) Configuration",
        "Industrial Wiring & Panel Boards",
        "Motor Control & Protection Systems",
        "Electrical Safety Compliance",
        "Power Distribution Systems",
      ],
    },
    {
      icon: Droplets,
      title: "Water Systems",
      color: "from-blue-500 to-cyan-500",
      skills: [
        "RO Plant Installation & Operation",
        "Water Treatment & Purification",
        "Pump Systems & Piping Networks",
        "Quality Control & Testing",
        "Membrane Maintenance & Replacement",
      ],
    },
    {
      icon: Sun,
      title: "Energy Systems",
      color: "from-amber-500 to-yellow-500",
      skills: [
        "Solar Power Installation",
        "Diesel Generator Operations",
        "Power Backup Systems",
        "Energy Efficiency Optimization",
        "UPS Systems & Battery Banks",
      ],
    },
    {
      icon: Building2,
      title: "Facilities Management",
      color: "from-emerald-500 to-teal-500",
      skills: [
        "Building Maintenance & Operations",
        "Infrastructure Planning",
        "Vendor & Contractor Management",
        "Asset Lifecycle Management",
        "Emergency Response Protocols",
      ],
    },
    {
      icon: Gauge,
      title: "Technical Operations",
      color: "from-violet-500 to-purple-500",
      skills: [
        "Equipment Troubleshooting & Diagnostics",
        "Technical Documentation & Reporting",
        "Safety Protocol Implementation",
        "Inventory & Spare Parts Management",
        "Team Training & Development",
      ],
    },
  ];

  return (
    <section ref={ref} id="expertise" className="py-28 lg:py-40 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-3xl rounded-full" />

      <div className="container px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Technical Proficiency
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Core Expertise
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full mb-8"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive technical capabilities developed through 15+ years of hands-on experience 
            across diverse industrial environments
          </p>
        </AnimatedSection>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCategories.map((category, index) => (
            <AnimatedSection
              key={index}
              delay={0.1 * index}
            >
              <motion.div
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-px bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`} />
                
                <div className="relative bg-card rounded-2xl p-6 border border-border group-hover:border-transparent transition-colors duration-300 h-full">
                  {/* Icon and title */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                        <category.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-foreground">{category.title}</h3>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Skills list */}
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                        transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                        className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color} mt-2 flex-shrink-0`} />
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
