import { GraduationCap, Award, Languages } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "Technical Training Institute",
      year: "2007",
    },
    {
      degree: "Matriculation (Science)",
      institution: "Board of Secondary Education",
      year: "2004",
    },
  ];

  const certifications = [
    "CNG Plant Operations & Safety",
    "Industrial Electrical Safety",
    "HVAC Systems Certification",
    "First Aid & Emergency Response",
  ];

  const languages = [
    { name: "Urdu", level: "Native" },
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Punjabi", level: "Conversational" },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Academic Background
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Education & Credentials
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-accent pl-4">
                  <p className="font-semibold text-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-accent mt-1">{edu.year}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="bg-card rounded-2xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                <Languages className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{lang.name}</span>
                  <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
