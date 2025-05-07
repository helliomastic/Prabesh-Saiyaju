import React from "react";
import { AnimatedElement } from "../motion/AnimatedElement";
import AnimatedScrollingText from "../animation/AnimatedScrollingText";
import { useIsMobile } from "@/hooks/use-mobile";

const educationRow = [
  "CB Sagarmatha College +2 (Science) — 2020",
  "SEE Secondary Education Examination - 2019",
  "Academia Int College(Bachelor's in Computer Science) - 2022 - Present",
];

const EducationSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="education"
      className="section-container py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <AnimatedElement>
        <h2 className="section-title text-center mb-4 sm:mb-6 md:mb-7 text-2xl sm:text-3xl md:text-4xl">
          Education
        </h2>
      </AnimatedElement>
      <AnimatedElement
        delay={0.2}
        className="max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 text-center px-2 xs:px-4"
      >
        <p className="text-white/70 text-sm sm:text-base">
          My academic journey has provided me with a strong foundation in
          technology and sciences, enabling me to bring both technical knowledge
          and analytical thinking to my work.
        </p>
      </AnimatedElement>
      <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 max-w-full overflow-hidden">
        <AnimatedScrollingText
          items={{
            row1: educationRow,
            row2: [],
            row3: [],
          }}
        />
      </div>
    </section>
  );
};

export default EducationSection;
