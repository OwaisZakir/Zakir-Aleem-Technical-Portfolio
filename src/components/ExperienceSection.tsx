import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Technical Supervisor",
      company: "Industrial Facilities & CNG Plants",
      location: "Karachi, Pakistan",
      period: "2015 - Present",
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Career Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                        <p className="text-accent font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
