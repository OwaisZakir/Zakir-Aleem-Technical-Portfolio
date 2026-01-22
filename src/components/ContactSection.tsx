import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Karachi, Pakistan",
      href: null,
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 XXX XXXXXXX",
      href: "tel:+92XXXXXXXXXX",
    },
    {
      icon: Mail,
      label: "Email",
      value: "zakir.aleem@email.com",
      href: "mailto:zakir.aleem@email.com",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 hero-gradient relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Accent line */}
      <div className="absolute right-0 top-0 h-full w-1 bg-accent" />

      <div className="container px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold tracking-wider uppercase text-sm mb-3">
            Let's Connect
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            Available for new opportunities in technical supervision, facilities management, 
            and industrial operations. Let's discuss how I can contribute to your organization's success.
          </p>
        </div>

        {/* Contact cards */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href || undefined}
                className={`group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10 text-center hover:bg-primary-foreground/15 transition-all duration-300 ${
                  item.href ? "cursor-pointer" : "cursor-default"
                }`}
              >
                <div className="w-14 h-14 rounded-xl bg-accent mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-7 w-7 text-accent-foreground" />
                </div>
                <p className="text-sm text-primary-foreground/60 mb-1">{item.label}</p>
                <p className="font-semibold text-primary-foreground">{item.value}</p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-10 py-6 text-base shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="mailto:zakir.aleem@email.com">
                <Send className="mr-2 h-5 w-5" />
                Send a Message
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
