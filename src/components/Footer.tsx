import { ArrowUp, Mail, Linkedin, Github, Instagram } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      name: "Github",
      icon: <Github className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "https://github.com/helliomastic",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "https://www.linkedin.com/in/prabesh-saiyaju-185a99284/",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "https://www.instagram.com/zayn_25267/profilecard/?igsh=MTV0aGk1ZG51NjQwZA==",
    },
    {
      name: "Email",
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5" />,
      href: "mailto:saiyajuprabesh2526@gmail.com",
    },
  ];

  return (
    <footer className="bg-portfolio-dark/90 backdrop-blur-md py-6 sm:py-9 md:py-12 px-3 border-t border-white/10 w-full">
      <div className="container mx-auto px-1 xs:px-2 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          <div className="flex flex-col items-center md:items-start mb-2 sm:mb-4 md:mb-0 gap-1 xs:gap-2 md:gap-3 w-full md:w-auto">
            {/* Logo from Navbar */}
            <Logo size="sm" animateOnHover={false} />
            <span className="text-base sm:text-lg md:text-xl font-bold text-gradient">
              Prabesh Saiyaju
            </span>
            <p className="text-white/60 mt-0.5 md:mt-1 text-center md:text-left text-xs sm:text-sm">
              From Concept to Code – Seamlessly.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 xs:gap-4 md:gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-white/60 hover:text-portfolio-purple transition-colors p-2 rounded-full hover:bg-white/5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-4 sm:mt-7 md:mt-10 pt-4 sm:pt-6 md:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 md:gap-4">
          <p className="text-white/60 text-xs mb-2 sm:mb-0 text-center">
            © {new Date().getFullYear()} All rights reserved by{" "}
            <span className="text-portfolio-purple font-bold text-sm ">
              Prabesh Saiyaju
            </span>
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 sm:p-3 bg-portfolio-purple/20 hover:bg-portfolio-purple/30 rounded-full transition-colors group"
          >
            <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-portfolio-purple group-hover:-translate-y-1 transition-transform" />
            <span className="sr-only">Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
