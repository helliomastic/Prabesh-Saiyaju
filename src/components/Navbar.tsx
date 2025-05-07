
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./Logo";
import MobileMenuButton from "./navbar/MobileMenuButton";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";
import { navLinks } from "./navbar/types";
import { useScrollDetection } from "@/hooks/use-scroll-detection";
import { useActiveSectionDetection } from "@/hooks/use-active-section-detection";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const isScrolled = useScrollDetection(50);
  const activeLink = useActiveSectionDetection();

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        const headerHeight = navRef.current ? navRef.current.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 100);
  };

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-1" : "py-2 sm:py-4"
      }`}
    >
      <div className="container mx-auto px-2 xs:px-4">
        <motion.div 
          className={`mx-auto max-w-6xl rounded-full transition-all duration-500 ${
            isScrolled 
              ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-portfolio-purple/10" 
              : "bg-black/20 backdrop-blur-md"
          }`}
          animate={{
            boxShadow: isScrolled 
              ? ["0 4px 20px rgba(139, 92, 246, 0.1)", "0 4px 25px rgba(139, 92, 246, 0.15)", "0 4px 20px rgba(139, 92, 246, 0.1)"]
              : "none"
          }}
          transition={{
            duration: 2,
            repeat: isScrolled ? Infinity : 0,
            repeatType: "reverse"
          }}
        >
          <div className="flex justify-between items-center px-3 xs:px-6 py-2 sm:py-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative z-10"
            >
              <a 
                href="#home" 
                className="relative flex items-center" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
              >
                <Logo animateOnHover={true} />
              </a>
            </motion.div>

            <DesktopNav 
              navLinks={navLinks}
              activeLink={activeLink}
              handleNavClick={handleNavClick}
            />

            <MobileMenuButton 
              isOpen={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </motion.div>
      </div>

      <MobileNav 
        isOpen={mobileMenuOpen}
        navLinks={navLinks}
        activeLink={activeLink}
        headerHeight={navRef.current ? `${navRef.current.offsetHeight}px` : '60px'}
        handleNavClick={handleNavClick}
      />
    </motion.header>
  );
};

export default Navbar;
