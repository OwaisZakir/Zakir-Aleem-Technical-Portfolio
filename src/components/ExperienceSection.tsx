import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Technical Supervisor",
      company: "Industrial Facilities & CNG Plants",
      location: "Karachi, Pakistan",
      period: "2015 - Present",
      current: true,
      responsibilities: [
        "Lead comprehensive maintenance operations for CNG compression systems, ensuring 99%+ uptime",
        "Supervise installation and maintenance of RO water treatment plants with daily capacity of 50,000+ liters",
        "Manage electrical systems including VFD drives, panel boards, and power distribution networks",
        "Implement preventive maintenance schedules reducing equipment failures by 40%",
        "Oversee solar power installations and integration with existing power systems",
        "Coordinate with vendors and contractors for specialized equipment and services",
      ],
    },
    {
      title: "Mechanical Supervisor",
      company: "Hospital & Healthcare Facilities",
      location: "Karachi, Pakistan",
      period: "2012 - 2015",
      current: false,
      responsibilities: [
        "Managed critical HVAC systems ensuring optimal environmental conditions for patient care",
        "Supervised generator operations providing uninterrupted power backup for medical equipment",
        "Maintained water supply systems including pumping stations and storage facilities",
        "Implemented safety protocols in compliance with healthcare facility standards",
        "Led a team of 10+ technicians across multiple facility maintenance disciplines",
      ],
    },
    {
      title: "Maintenance Technician",
      company: "Commercial & Industrial Sector",
      location: "Karachi, Pakistan",
      period: "2008 - 2012",
      current: false,
      responsibilities: [
        "Performed troubleshooting and repairs on mechanical and electrical equipment",
        "Assisted in installation of new machinery and equipment commissioning",
        "Maintained detailed maintenance logs and equipment documentation",
        "Participated in safety training and emergency response drills",
        "Developed expertise in compressor systems, motors, and control panels",
      ],
    },
  ];

  return (
    <section ref={ref} className="py-28 lg:py-40 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      
      <div className="container px-6 relative z-10">
        {/* Section header */}
        <AnimatedSection className="text-center mb-20">
          <span className="inline-block text-accent font-medium tracking-wider uppercase text-sm mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
            Experience
          </h2>
          <motion.div 
            className="w-24 h-1 bg-accent mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </AnimatedSection>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-border to-transparent md:-translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: 'top' }}
            />

            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                delay={0.2 + index * 0.2}
                direction={index % 2 === 0 ? 'left' : 'right'}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 md:-translate-x-1/2 z-10">
                    <motion.div
                      className={`w-full h-full rounded-full ${exp.current ? 'bg-accent' : 'bg-muted-foreground'} ring-4 ring-background`}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                    />
                    {exp.current && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-accent"
                        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </div>

                  {/* Content card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                    <motion.div 
                      whileHover={{ y: -4 }}
                      className="group relative"
                    >
                      <div className="absolute -inset-1 bg-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      <div className="relative glass rounded-2xl p-6 md:p-8">
                        {/* Current badge */}
                        {exp.current && (
                          <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-medium mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            Current Position
                          </div>
                        )}

                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                            <Briefcase className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-xl font-heading font-bold text-foreground">{exp.title}</h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                          </div>
                        </div>

                        {/* Meta info */}
                        <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-4 w-4" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                        </div>

                        {/* Responsibilities */}
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li
                              key={respIndex}
                              className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                            >
                              <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
