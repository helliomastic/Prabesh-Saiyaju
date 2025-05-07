import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import BlogSection from "../components/sections/BlogSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";
import { useRef } from "react";

const Index = () => {
  const mainRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={mainRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen relative"
    >
      {/* Optimized background with fewer animations */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Ensure this wrapper is relative */}
        <div className="relative w-full h-full">
          {/* Simplified primary gradient */}
          <motion.div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-portfolio-purple/15 via-background to-background"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />

          {/* Simplified grid overlay - static instead of animated */}
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />

          {/* Reduced number of animated particles */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-portfolio-purple/10"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, Math.random() * 80 - 40],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: Math.random() * 8 + 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Simplified glassmorphism effects */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-portfolio-purple/3 blur-[100px]"
            style={{ top: "10%", right: "10%" }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-portfolio-blue/3 blur-[80px]"
            style={{ bottom: "15%", left: "5%" }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 10,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Index;
