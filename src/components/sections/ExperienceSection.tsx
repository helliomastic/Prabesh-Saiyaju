import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { AnimatedElement } from "../motion/AnimatedElement";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: " Frontend Developer",
    company: "DeltaByte Technologies",
    period: "2025 - Present",
    description: [
      "Leading development of enterprise-level React applications",
      "Implementing modern UI components and optimizing performance",
      "Developers and conducting code reviews",
    ],
    technologies: ["React", "Shadcn", "Tailwind CSS"],
  },
  {
    title: "Full Stack Developer",
    company: "DeltaByte Technologies",
    period: "2021 - 2024",
    description: [
      "Built scalable web applications using modern technologies",
      "Implemented real-time features using WebSocket",
      "Reduced API response time by 40% through optimization",
    ],
    technologies: ["React", "Python", "MySQL", "Django", "Github"],
  },
  {
    title: "Graphic Designer",
    company: "Hamro Store Ltd.",
    period: "2019-2021",
    description: [
      "Created logos, banners, and marketing materials",
      "Used tools like Adobe Photoshop, Illustrator, and Figma",
      "Improved site performance metrics",
      "Designed engaging graphics for web and social media",
      "Maintained brand guidelines in all design projects",
    ],
    technologies: ["Adobe Photoshop", "Illustrator", "Figma"],
  },

  {
    title: "Web Developer Intern",
    company: "StartUp Hub",
    period: "2020",
    description: [
      "Assisted in website development",
      "Fixed bugs and improved functionality",
      "Learned modern development practices",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Git", "Python"],
  },
];

// Experience counter component for years of experience
const ExperienceCounter = () => {
  return (
    <div className="max-w-full sm:max-w-md mx-auto mb-12 sm:mb-16 bg-white/5 backdrop-blur-lg rounded-xl p-6 sm:p-8 border border-portfolio-purple/20">
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-medium text-white/80 mb-3 sm:mb-4">
          Years of Experience
        </h3>
        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              duration: 1.5,
              bounce: 0.4,
            }}
            className="relative"
          >
            <div className="text-5xl sm:text-7xl font-bold text-gradient">
              4+
            </div>

            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`experience-ring-${i}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-portfolio-purple/30"
                style={{
                  width: `${100 + i * 40}%`,
                  height: `${100 + i * 40}%`,
                  opacity: 0.7 - i * 0.2,
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7 - i * 0.2, 0.9 - i * 0.2, 0.7 - i * 0.2],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}

            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`experience-particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-portfolio-purple/70"
                style={{
                  top: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                  left: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
        <p className="mt-4 sm:mt-6 text-white/60 text-sm sm:text-base">
          Creating amazing web experiences and solutions since 2021.
        </p>
      </div>
    </div>
  );
};

const ExperienceCard = ({
  item,
  index,
}: {
  item: ExperienceItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative pl-7 md:pl-8 pb-10 md:pb-12"
    >
      <motion.div
        className="absolute left-0 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-portfolio-purple z-10"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(139, 92, 246, 0)",
            "0 0 0 10px rgba(139, 92, 246, 0.3)",
            "0 0 0 0 rgba(139, 92, 246, 0)",
          ],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />

      {index !== experiences.length - 1 && (
        <div className="absolute left-[5.5px] sm:left-[7.5px] top-3 sm:top-4 w-[1px] h-full bg-white/20" />
      )}

      <motion.div
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-5 sm:p-6 card-hover"
        whileHover={{
          y: -5,
          boxShadow: "0 15px 30px -10px rgba(139, 92, 246, 0.3)",
          borderColor: "rgba(139, 92, 246, 0.4)",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-wrap justify-between items-center mb-2 sm:mb-3 gap-2">
          <h3 className="text-base sm:text-xl font-semibold text-white">
            {item.title}
          </h3>
          <motion.span
            className="bg-portfolio-purple/20 text-portfolio-purple px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
            whileHover={{
              backgroundColor: "rgba(139, 92, 246, 0.3)",
              scale: 1.05,
            }}
          >
            {item.period}
          </motion.span>
        </div>

        <p className="text-portfolio-purple font-medium mb-2 sm:mb-4 text-sm sm:text-base">
          {item.company}
        </p>

        <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
          {item.description.map((desc, i) => (
            <motion.li
              key={i}
              className="flex"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-portfolio-purple mr-2">•</span>
              <span className="text-white/70">{desc}</span>
            </motion.li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mt-3 sm:mt-4">
          {item.technologies.map((tech, i) => (
            <motion.span
              key={i}
              className="text-xs bg-white/10 text-white/80 px-2 sm:px-3 py-1 rounded-full"
              whileHover={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                color: "rgba(255, 255, 255, 0.95)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
              viewport={{ once: true }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  return (
    <section
      id="experience"
      className="section-container py-14 sm:py-20 md:py-24"
    >
      <AnimatedElement>
        <h2 className="section-title text-center text-3xl sm:text-4xl md:text-5xl">
          Experience
        </h2>
      </AnimatedElement>
      <AnimatedElement
        delay={0.2}
        className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center"
      >
        <p className="text-white/70 text-sm sm:text-base">
          My professional journey has equipped me with diverse skills and
          experiences in web development and design. Here's a snapshot of my
          career path.
        </p>
      </AnimatedElement>
      <ExperienceCounter />
      <div className="relative max-w-3xl mx-auto px-1 sm:px-0" ref={ref}>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} item={exp} index={index} />
        ))}
        <motion.div
          className="absolute left-[5.5px] sm:left-[7.5px] top-0 w-[1px] origin-top bg-portfolio-purple"
          style={{
            height: scrollYProgress,
            scaleY: scrollYProgress,
            boxShadow: "0 0 8px rgba(139, 92, 246, 0.6)",
          }}
        />
      </div>
    </section>
  );
};

export default ExperienceSection;
