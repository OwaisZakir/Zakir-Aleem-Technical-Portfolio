import { motion } from "framer-motion";
import { usePortfolio } from "@/context/PortfolioContext";

const Footer = () => {
  const { personalInfo } = usePortfolio();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary border-t border-primary-foreground/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      <div className="container px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground tracking-tight mb-2">
              {personalInfo.name} {personalInfo.lastName}
            </h3>
            <p className="text-sm text-primary-foreground/50 font-light">
              {personalInfo.title}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2 text-sm text-primary-foreground/40 font-medium">
              <span>©</span>
              <span>{currentYear}</span>
              <span className="mx-1">•</span>
              <span className="text-accent/60">VVIP Portfolio</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/30">
              Designed & Created by <span className="text-primary-foreground/60 font-semibold">{personalInfo.designedBy}</span>
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent mt-12"
        />
      </div>
    </footer>
  );
};

export default Footer;
