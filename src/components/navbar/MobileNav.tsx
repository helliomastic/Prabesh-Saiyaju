
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "./types";

interface MobileNavProps {
  isOpen: boolean;
  navLinks: NavLink[];
  activeLink: string;
  headerHeight: string;
  handleNavClick: (href: string) => void;
}

const MobileNav = ({ isOpen, navLinks, activeLink, headerHeight, handleNavClick }: MobileNavProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, backdropFilter: "blur(0px)" }}
          animate={{ 
            opacity: 1, 
            height: "calc(100vh - var(--header-height))", 
            backdropFilter: "blur(15px)"
          }}
          exit={{ 
            opacity: 0, 
            height: 0, 
            backdropFilter: "blur(0px)",
            transition: { duration: 0.3, ease: "easeInOut" }
          }}
          transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
          className="md:hidden fixed inset-x-0 top-[var(--header-height)] bg-black/80 backdrop-blur-xl z-40 flex flex-col overflow-hidden border-t border-white/10"
          style={{ '--header-height': headerHeight } as React.CSSProperties}
        >
          <motion.div 
            className="container h-full mx-auto px-3 xs:px-4 py-4 xs:py-6 flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <div className="flex flex-col space-y-2 xs:space-y-3">
              {navLinks.map((link, index) => {
                const isActive = activeLink === link.href.substring(1);
                
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative text-sm xs:text-base py-3 xs:py-4 px-3 xs:px-4 rounded-lg transition-all ${
                      isActive 
                        ? "text-white bg-portfolio-purple/20 border-l-2 border-portfolio-purple" 
                        : "text-white/70 hover:text-white hover:bg-white/5 border-l-2 border-transparent"
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <span className="relative z-10 text-base xs:text-lg">{link.title}</span>
                    {isActive && (
                      <motion.span
                        className="absolute inset-0 bg-portfolio-purple/10 rounded-lg -z-10"
                        layoutId="activeMobileIndicator"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
            
            <div className="mt-auto pt-4 xs:pt-6 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xs xs:text-sm text-white/60 text-center"
              >
                <p>© {new Date().getFullYear()} Portfolio</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
