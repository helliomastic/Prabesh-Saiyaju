
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  animateOnHover?: boolean;
  size?: "sm" | "md" | "lg";
}

const Logo = ({ className, animateOnHover = true, size = "md" }: LogoProps) => {
  // Size mapping for responsive design
  const sizeClasses = {
    sm: "text-xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
  };

  // Animation variants for the logo
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.33, 1, 0.68, 1],
      },
    }),
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut", // Added smooth easing
      },
    },
  };

  const logoWrapperVariants = {
    hover: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // Character array for individual letter animations
  const characters = ["Z", "A", "Y", "N"];

  return (
    <motion.div
      className={cn("relative flex items-center", className)}
      initial="hidden"
      animate="visible"
      whileHover={animateOnHover ? "hover" : undefined}
      variants={logoWrapperVariants}
    >
      <div className="flex items-center relative">
        {/* Glowing accent behind the Z letter */}
        <motion.div
          className="absolute w-6 h-6 rounded-full bg-portfolio-purple/30 blur-md will-change-transform" // Added will-change-transform
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut" // Added smooth easing
          }}
          style={{ left: "-5px", top: "50%", transform: "translateY(-50%)" }}
        />

        {/* Main Logo Text */}
        <div className={cn("font-bold tracking-tight flex", sizeClasses[size])}>
          {characters.map((char, i) => (
            <motion.span
              key={`logo-char-${i}`}
              custom={i}
              variants={letterVariants}
              className={
                i === 0
                  ? "text-portfolio-purple will-change-transform" // Added will-change-transform
                  : i === characters.length - 1
                  ? "text-portfolio-blue will-change-transform" // Added will-change-transform
                  : "text-white will-change-transform" // Added will-change-transform
              }
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Decorative dot */}
        <motion.div
          className="w-1.5 h-1.5 bg-portfolio-purple rounded-full ml-1 will-change-transform" // Added will-change-transform
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.3,
            type: "spring", 
            stiffness: 300, 
            damping: 15 
          }}
        />
      </div>

      {/* Stylized underline accent */}
      <motion.div
        className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-portfolio-purple to-portfolio-blue rounded-full will-change-transform" // Added will-change-transform
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ 
          delay: 0.3, 
          duration: 0.7,
          ease: [0.33, 1, 0.68, 1]
        }}
      />
    </motion.div>
  );
};

export default Logo;
