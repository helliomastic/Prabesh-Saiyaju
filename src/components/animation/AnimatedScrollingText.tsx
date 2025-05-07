
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollingItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
  duration?: number;
}

const ScrollingItem = ({ 
  children, 
  className,
  direction = "left",
  duration = 20 
}: ScrollingItemProps) => {
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div
        className={cn("flex items-center gap-8 will-change-transform", className)}
        animate={{
          x: direction === "left" 
            ? [0, -1000] 
            : [-1000, 0]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
      >
        {children}
        {/* Duplicate content to create seamless loop */}
        {children}
      </motion.div>
    </div>
  );
};

interface AnimatedScrollingTextProps {
  items: {
    row1: string[];
    row2: string[];
    row3: string[];
  };
  className?: string;
}

const AnimatedScrollingText = ({ 
  items,
  className
}: AnimatedScrollingTextProps) => {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <ScrollingItem 
        direction="right" 
        duration={25}
        className="py-4 text-lg font-medium"
      >
        {items.row1.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
          >
            <span className="bg-portfolio-purple/20 text-portfolio-purple px-6 py-3 rounded-full">
              {item}
            </span>
            <div className="text-portfolio-purple/50 mx-4">•</div>
          </div>
        ))}
      </ScrollingItem>
      
      <ScrollingItem 
        direction="left"
        duration={20}
        className="py-4 text-lg font-medium"
      >
        {items.row2.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
          >
            <span className="bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm border border-white/10">
              {item}
            </span>
            <div className="text-white/50 mx-4">•</div>
          </div>
        ))}
      </ScrollingItem>
      
      <ScrollingItem 
        direction="right"
        duration={22}
        className="py-4 text-lg font-medium"
      >
        {items.row3.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2"
          >
            <span className="glass-effect text-portfolio-purple px-6 py-3 rounded-full">
              {item}
            </span>
            <div className="text-portfolio-purple/50 mx-4">•</div>
          </div>
        ))}
      </ScrollingItem>
    </div>
  );
};

export default AnimatedScrollingText;
