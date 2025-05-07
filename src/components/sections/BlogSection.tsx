import { motion } from "framer-motion";
import { AnimatedElement } from "../motion/AnimatedElement";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "Web Development with Modern Tools",
    excerpt:
      "Explore the latest web development frameworks and tools to build better applications.",
    date: "May 10, 2023",
    tags: ["Web Development", "Frontend", "Tools"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 3,
    title: "Creating Smooth Animations for Better UX",
    excerpt:
      "Implement beautiful, physics-based animations to enhance user experience in web applications.",
    date: "April 5, 2025",
    tags: ["Smooth Animation", "UX Design", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500&q=80",
  },
  {
    id: 4,
    title: "Building Beautiful UIs with Tailwind CSS",
    excerpt:
      "Master Tailwind CSS to create stunning and responsive user interfaces efficiently.",
    date: "March 30, 2023",
    tags: ["Tailwind CSS", "Design", "Frontend"],
    image:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&w=800&h=500&q=80",
  },

  {
    id: 6,
    title: "Graphic Design",
    excerpt:
      "Explore fundamental principles and tools for creating impactful graphic designs.",
    date: "March 20, 2021",
    tags: ["Graphic Design", "Design", "Creative"],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&h=500&q=80",
  },
];

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="group">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden card-hover h-full flex flex-col min-w-[260px] xs:min-w-[320px] md:min-w-[350px] max-w-[400px]">
        <div className="relative h-32 xs:h-48 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark/80 to-transparent" />
          <div className="absolute bottom-2 xs:bottom-4 left-2 xs:left-4 right-2 xs:right-4">
            <div className="flex gap-1 xs:gap-2 mb-1 xs:mb-2">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-portfolio-purple/80 text-white px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-3 xs:p-5 md:p-6 flex-1 flex flex-col">
          <span className="text-xs xs:text-sm text-portfolio-purple mb-1 xs:mb-2">
            {post.date}
          </span>
          <h3 className="text-base xs:text-lg md:text-xl font-semibold mb-2 xs:mb-3 group-hover:text-portfolio-purple transition-colors">
            {post.title}
          </h3>
          <p className="text-white/70 text-xs xs:text-sm mb-3 xs:mb-4 flex-1">
            {post.excerpt}
          </p>
          <div className="mt-auto">
            <Button
              variant="ghost"
              className="p-0 h-auto text-portfolio-purple hover:text-portfolio-purple/80 hover:bg-transparent group"
            >
              Read more
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContinuousScroll = () => {
  const duplicatedPosts = [...blogPosts, ...blogPosts, ...blogPosts]; // Triple the posts for smoother looping
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Skip animation for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let animationId: number;
    let startTime = performance.now();
    const scrollSpeed = 0.02; // Further reduced for even slower animation
    const totalWidth = containerRef.current?.scrollWidth || 0;

    const animateScroll = (timestamp: number) => {
      if (isPaused) {
        startTime =
          timestamp - (containerRef.current?.scrollLeft || 0) / scrollSpeed;
        animationId = requestAnimationFrame(animateScroll);
        return;
      }

      const elapsed = timestamp - startTime;
      const scrollPosition = (elapsed * scrollSpeed) % totalWidth;

      if (containerRef.current) {
        if (scrollPosition >= totalWidth / 3) {
          // Reset animation when one-third of the content is scrolled (one complete set)
          startTime = performance.now();
        }
        containerRef.current.style.transform = `translateX(${-scrollPosition}px)`;
      }

      animationId = requestAnimationFrame(animateScroll);
    };

    // Start animation with a longer delay
    setTimeout(() => {
      animationId = requestAnimationFrame(animateScroll);
    }, 500);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="w-full overflow-x-hidden py-6 xs:py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={containerRef}
        className="flex gap-3 xs:gap-6 force-gpu"
        style={{
          willChange: "transform",
          transition: "transform 0.1s linear",
        }}
      >
        {duplicatedPosts.map((post, index) => (
          <BlogCard key={`${post.id}-${index}`} post={post} />
        ))}
      </div>
    </div>
  );
};

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="py-14 sm:py-20 md:py-24 w-full overflow-hidden bg-portfolio-dark/50"
    >
      <div className="max-w-[100vw] mx-auto px-2 xs:px-4">
        <AnimatedElement>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-7 sm:mb-10">
            From My Blog
          </h2>
        </AnimatedElement>
        <AnimatedElement
          delay={0.2}
          className="max-w-3xl mx-auto mb-10 sm:mb-16 text-center"
        >
          <p className="text-white/70 text-sm sm:text-base">
            I write about web development, design trends, and my experiences in
            the tech industry. Check out some of my latest articles.
          </p>
        </AnimatedElement>
        <AnimatedElement delay={0.3} className="w-full">
          <ContinuousScroll />
        </AnimatedElement>
        <div className="mt-8 sm:mt-12 text-center">
          <AnimatedElement delay={0.4}>
            <Button className="bg-portfolio-purple hover:bg-portfolio-purple/90 px-6 sm:px-8">
              View All Posts
            </Button>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
