import { Shield, Wrench, Zap, Users } from "lucide-react";

const SummarySection = () => {
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
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
              Professional Profile
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Professional Summary
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          {/* Summary text */}
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border mb-16">
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed text-center">
              A results-driven <span className="font-semibold text-foreground">Mechanical & Technical Supervisor</span> with 
              over <span className="font-semibold text-accent">15 years of progressive experience</span> in 
              industrial operations, facilities management, and technical systems maintenance. 
              Demonstrated expertise in managing complex mechanical and electrical infrastructure 
              across diverse sectors including <span className="font-medium">CNG plants, hospitals, RO water treatment 
              facilities, and power generation systems</span>. Known for ensuring operational 
              continuity, implementing safety protocols, and leading cross-functional teams to 
              deliver reliable, efficient technical solutions.
            </p>
          </div>

          {/* Highlight cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
