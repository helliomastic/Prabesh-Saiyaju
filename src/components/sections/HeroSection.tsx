import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

// Animation variants for text elements - simplified
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Simplified mobile animation variants
const mobileImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const mobileHeroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const HeroSection = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[90vh] sm:min-h-screen flex items-center py-16 sm:py-10 md:py-0"
      ref={containerRef}
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10 md:gap-12">
          {isMobile ? (
            // Mobile-optimized content
            <motion.div
              initial="hidden"
              animate="visible"
              variants={mobileHeroVariants}
              className="w-full lg:w-1/2 z-10"
            >
              <motion.h1
                variants={mobileItemVariants}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 xs:mb-5 sm:mb-6 leading-tight sm:leading-snug lg:leading-[1.2]"
              >
                <span className="text-white block">PRABESH SAIYAJU</span>
                <span className=" text-portfolio-purple block">Summary</span>
                <p className="text-white/70 text-sm xs:text-base sm:text-lg mb-6 mt-9 sm:mb-8 max-w-xl">
                  Passionate Full-Stack Web Developer from Kathmandu, Nepal,
                  dedicated to pushing the boundaries of web technologies to
                  create immersive and innovative digital experiences.
                </p>
              </motion.h1>
              <motion.div
                variants={mobileItemVariants}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-6 xs:px-8 py-4 xs:py-5 text-sm xs:text-base sm:text-lg rounded-md uppercase tracking-wider w-full sm:w-auto"
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Button>
              </motion.div>

              {/* Mobile image with simpler animation */}
            </motion.div>
          ) : (
            // Desktop version with simplified animations
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full lg:w-1/2 z-10"
            >
              <motion.h1
                custom={1}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="text-3xl xs:text-4xl sm:text-5xl lg:text-7xl font-bold mb-3 xs:mb-5 sm:mb-6 leading-tight sm:leading-snug lg:leading-[1.2]"
              >
                <span className="text-white block">PRABESH SAIYAJU</span>
                <span className="text-portfolio-purple block">Summary</span>
              </motion.h1>

              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={textVariants}
                className="mb-5 xs:mb-7 sm:mb-8"
              >
                <p className="text-white/70 text-sm xs:text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
                  Passionate Full-Stack Web Developer from Kathmandu, Nepal,
                  dedicated to pushing the boundaries of web technologies to
                  create immersive and innovative digital experiences.
                </p>
              </motion.div>

              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <Button
                  className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white px-6 xs:px-8 py-4 xs:py-5 text-sm xs:text-base sm:text-lg rounded-md uppercase tracking-wider w-full sm:w-auto"
                  onClick={scrollToContact}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          )}

          {/* Desktop image section - simplified */}
          <div className="w-full lg:w-1/2 flex justify-center items-center mt-4 sm:mt-8 lg:mt-0 hidden sm:flex">
            <div className="relative w-full max-w-[180px] xs:max-w-xs sm:max-w-md md:max-w-lg">
              <img
                src="/lovable-uploads/e8d8d4b5-9364-4469-9f61-999f9a4d757e.png"
                alt="Profile"
                className="w-full h-auto object-contain"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(139, 92, 246, 0.2))",
                }}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Simplified background animation */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-portfolio-purple/5 via-transparent to-transparent" />
      </motion.div>

      {/* Simplified scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute bottom-4 xs:bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
        onClick={scrollDown}
      >
        <span className="text-white/50 mb-1 xs:mb-2 text-xs">Scroll Down</span>
        <ArrowDown className="text-white w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
