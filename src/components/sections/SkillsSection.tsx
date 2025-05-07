import { AnimatedElement } from "../motion/AnimatedElement";
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";

const skillLogosRow1 = [
  { name: "React", icon: "⚛️" },
  { name: "Python", icon: "🐍 " },
  { name: "Django", icon: "⚙️" },
  { name: "Flask", icon: "🧪 " },
  { name: "CSS", icon: "🎨" },
  { name: "HTML", icon: "🌐" },
  { name: "Tailwind", icon: "🌊" },
];

const skillLogosRow2 = [
  { name: "MySQL", icon: "🐬" },
  { name: "Figma", icon: "🖌️" },
  { name: "Git", icon: "🔄" },
  { name: "NumPy", icon: "🔢" },
  { name: "Pandas", icon: "🐼" },
  { name: "PhotoShop", icon: "🖼️" },
  { name: "Adobe Illustrator", icon: "✒️" },
];

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="
        flex flex-col items-center justify-center gap-2 
        px-3 min-w-[66px] sm:min-w-[100px] md:px-8 md:gap-3
        "
      // Padding and gap reduced on mobile
    >
      <span className="text-2xl sm:text-3xl md:text-4xl">{icon}</span>
      <span className="text-xs sm:text-sm md:text-white/70 md:font-medium text-white/70">
        {name}
      </span>
    </motion.div>
  );
};

const ScrollingMotion = ({
  children,
  direction = "left",
}: {
  children: React.ReactNode;
  direction?: "left" | "right";
}) => {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const animation =
    direction === "left" ? { x: ["0%", "-50%"] } : { x: ["0%", "50%"] };

  const transition = {
    duration: 30,
    ease: "linear",
    repeat: Infinity,
  };

  useEffect(() => {
    controls.start(animation);
    return () => {
      controls.stop();
    };
  }, [direction]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.stop();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.start(animation);
  };

  return (
    <div
      className="w-full overflow-hidden relative py-6 xs:py-8 sm:py-12" // Reduced Y padding for mobile
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 xs:w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 xs:w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
      <motion.div
        className="flex items-center gap-3 xs:gap-4 sm:gap-8"
        animate={controls}
        transition={transition}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

const TransparentBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-lg shadow-portfolio-purple/5 mb-4 sm:mb-8">
      {children}
    </div>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-8 xs:py-12 sm:py-16 md:py-24 w-full overflow-hidden bg-background"
    >
      <div className="w-full px-1 xs:px-2 sm:px-4">
        <AnimatedElement className="mb-6 xs:mb-8 sm:mb-16 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold">
            My Skills
          </h2>
        </AnimatedElement>
        <AnimatedElement
          delay={0.2}
          className="w-full space-y-3 xs:space-y-5 sm:space-y-10"
        >
          <TransparentBox>
            <ScrollingMotion direction="left">
              {skillLogosRow1.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </ScrollingMotion>
          </TransparentBox>
          <TransparentBox>
            <ScrollingMotion direction="right">
              {skillLogosRow2.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  name={skill.name}
                  icon={skill.icon}
                />
              ))}
            </ScrollingMotion>
          </TransparentBox>
        </AnimatedElement>
        <AnimatedElement
          delay={0.4}
          className="text-center mt-4 xs:mt-6 sm:mt-12 max-w-2xl mx-auto px-1 xs:px-2 sm:px-4"
        >
          <p className="text-white/70 text-xs xs:text-sm sm:text-base">
            I've worked with various technologies throughout my{" "}
            <span className="text-portfolio-purple font-medium">4+ years</span>{" "}
            of experience, constantly expanding my skill set to stay up-to-date
            with the latest trends and best practices.
          </p>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default SkillsSection;
