const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Mechanical",
      skills: [
        { name: "CNG Plant Operations", level: 95 },
        { name: "Compressor Systems", level: 90 },
        { name: "HVAC Systems", level: 85 },
        { name: "Hydraulic Systems", level: 80 },
      ],
    },
    {
      category: "Electrical",
      skills: [
        { name: "VFD Configuration", level: 90 },
        { name: "Industrial Wiring", level: 85 },
        { name: "Motor Controls", level: 88 },
        { name: "Power Distribution", level: 82 },
      ],
    },
    {
      category: "Water Systems",
      skills: [
        { name: "RO Plant Operations", level: 92 },
        { name: "Water Treatment", level: 88 },
        { name: "Pump Systems", level: 85 },
        { name: "Quality Testing", level: 80 },
      ],
    },
    {
      category: "Energy Systems",
      skills: [
        { name: "Solar Installation", level: 85 },
        { name: "Generator Operations", level: 92 },
        { name: "Power Backup", level: 88 },
        { name: "UPS Systems", level: 82 },
      ],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-secondary/50">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Technical Proficiency
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Skills Overview
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-accent" />
                {cat.category}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
