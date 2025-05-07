
import { useInView } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface AnimatedElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  threshold?: number;
}

export const AnimatedElement = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  threshold = 0.1,
}: AnimatedElementProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
    amount: threshold,
  });

  const directionVariants = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        ...directionVariants[direction]
      }}
      animate={
        isInView ? { 
          opacity: 1, 
          y: 0, 
          x: 0 
        } : {}
      }
      transition={{
        duration,
        delay,
        ease: [0.33, 1, 0.68, 1],
      }}
      className={cn(className, "will-change-transform")} // Added will-change-transform
    >
      {children}
    </motion.div>
  );
};

export const StaggeredContainer = ({ 
  children, 
  className, 
  delayIncrement = 0.1,
  staggerChildren = 0.1,
}: { 
  children: ReactNode,
  className?: string,
  delayIncrement?: number,
  staggerChildren?: number,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren: delayIncrement,
          }
        }
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const StaggerChild = ({ 
  children, 
  className,
  direction = "up",
}: { 
  children: ReactNode, 
  className?: string,
  direction?: "up" | "down" | "left" | "right" | "none"
}) => {
  const directionVariants = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };

  return (
    <motion.div
      variants={{
        hidden: { 
          opacity: 0, 
          ...directionVariants[direction]
        },
        visible: { 
          opacity: 1, 
          y: 0, 
          x: 0,
          transition: {
            duration: 0.6,
            ease: [0.33, 1, 0.68, 1],
          }
        }
      }}
      className={cn(className, "will-change-transform")} // Added will-change-transform
    >
      {children}
    </motion.div>
  );
}
