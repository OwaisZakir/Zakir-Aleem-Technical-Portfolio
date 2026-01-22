import { Cog, Zap, Droplets, Sun, Building2, Gauge } from "lucide-react";

const ExpertiseSection = () => {
  const expertiseCategories = [
    {
      icon: Cog,
      title: "Mechanical Systems",
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
    <section id="expertise" className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Technical Proficiency
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Core Expertise
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical capabilities developed through 15+ years of hands-on experience 
            across diverse industrial environments
          </p>
        </div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon and title */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <category.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
