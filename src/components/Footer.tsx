const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-navy-deep border-t border-border/10">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-primary-foreground">Zakir Aleem</p>
            <p className="text-sm text-primary-foreground/60">
              Mechanical & Technical Supervisor
            </p>
          </div>
          <p className="text-sm text-primary-foreground/40">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
