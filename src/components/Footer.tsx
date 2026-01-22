import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-primary border-t border-primary-foreground/5">
      <div className="container px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-xl font-heading font-bold text-primary-foreground">Zakir Aleem</p>
            <p className="text-sm text-primary-foreground/50">
              Mechanical & Technical Supervisor
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-primary-foreground/30">
            <span>©</span>
            <span>{currentYear}</span>
            <span className="mx-2">•</span>
            <span>Crafted with precision</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
