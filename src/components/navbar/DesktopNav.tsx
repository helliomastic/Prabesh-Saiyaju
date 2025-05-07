
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "../ui/navigation-menu";
import { NavLink } from "./types";

interface DesktopNavProps {
  navLinks: NavLink[];
  activeLink: string;
  handleNavClick: (href: string) => void;
}

const DesktopNav = ({ navLinks, activeLink, handleNavClick }: DesktopNavProps) => {
  return (
    <nav className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-1">
          {navLinks.map((link, index) => {
            const isActive = activeLink === link.href.substring(1);
            
            return (
              <NavigationMenuItem key={link.href}>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`relative group flex items-center px-4 py-2 text-sm rounded-full transition-all duration-300 ${
                      isActive 
                        ? "text-white" 
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    <span className="relative z-10">{link.title}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute inset-0 rounded-full bg-portfolio-purple/20 border border-portfolio-purple/30 -z-10"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                  </a>
                </motion.div>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNav;
