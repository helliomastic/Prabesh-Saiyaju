import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedElement } from "../motion/AnimatedElement";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "../ui/carousel";
import { ExternalLink } from "lucide-react";
import ProjectDetailsDialog from "../dialogs/ProjectDetailsDialog";
import { ProjectDetails } from "../dialogs/ProjectDetailsDialog";

const projects = [
  {
    id: 1,
    title: "AI Blog Post Generator",
    category: "AI Project",
    description:
      "Responsive art gallery website showcasing various artists and their works. The platform features an intuitive navigation system allowing visitors to browse artworks by artist, medium, or theme. Each artwork includes detailed information, high-resolution images, and purchasing options. The admin panel allows gallery owners to easily update collections and monitor visitor engagement.",
    technologies: [
      "Django",
      "AI APIs",
      "Text-Generation",
      "NLP Libraries",
      "SQLite",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT17K1WCNUtD1HtEJilDOVqut_dFY5TbNmd0g&s",
    url: "https://artgallery-demo.com",
  },
  {
    id: 3,
    title: "Travel Blog",
    category: "Web Design",
    description:
      "Dynamic travel blog with content management system and interactive map integration. Users can filter travel stories by destination, travel type, or budget. Each blog post includes high-quality images, travel tips, cost breakdowns, and an interactive map showing the journey route. The site also features a booking widget integration for accommodations and tours mentioned in the posts.",
    technologies: ["WordPress", "MySQL"],
    image:
      "https://createandgo.com/wp-content/uploads/2021/10/Travel-Blogger-Collage.jpg",
    url: "https://travelblog-demo.com",
  },
  {
    id: 5,
    title: "Move Recommendation System",
    category: "Web Platform",
    description:
      "A smart web app that suggests movies based on user preferences using machine learning techniques like collaborative and content-based filtering. Built with Python, Flask, and modern web tools for a smooth user experience.",
    technologies: ["Django", "SQLite", "API", "NumPy", "Pandas"],
    image: "https://miro.medium.com/v2/resize:fit:1400/0*BIJL7Ue0fMQqxd_d",
  },
  {
    id: 6,
    title: "E-commerce Marketplace",
    category: "Web Development",
    description:
      "Multi-vendor e-commerce platform with product listings, payment integration, and user reviews. Sellers can manage their stores, track inventory, and analyze sales performance through a comprehensive dashboard. Shoppers enjoy features like wishlists, order tracking, and personalized recommendations. The platform supports multiple payment gateways and shipping methods for global reach.",
    technologies: ["Django", "Python", "Stripe", "Tailwind", "React"],
    image: "https://i.ytimg.com/vi/P8YuWEkTeuE/maxresdefault.jpg",
    url: "https://ecommerce-demo.com",
  },
  {
    id: 8,
    title: "Portfolio Website",
    category: "Web Design",
    description:
      "A modern, responsive portfolio showcasing my work and skills. Built with React and Tailwind CSS for a seamless user experience. The site features smooth animations, a dynamic project gallery, and a contact form with email integration. The design adapts perfectly to all screen sizes while maintaining fast loading times and accessibility standards.",
    technologies: ["React", "Tailwind CSS", " Django", "Python"],
    image: "https://cdn.buttercms.com/jaVjQEh9QOvVeJ1XJ60w",
    url: "https://portfolio-demo.com",
  },
];

const ProjectCard = ({
  project,
  onClick,
}: {
  project: ProjectDetails;
  onClick: () => void;
}) => {
  const handleViewProjectClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="group relative h-[370px] xs:h-[420px] sm:h-[450px] w-full transform rounded-xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
        <div className="relative h-32 xs:h-44 sm:h-[220px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute top-2 xs:top-4 left-2 xs:left-4 bg-portfolio-purple/90 text-white px-2 xs:px-3 py-1 rounded-full text-xs xs:text-sm font-medium backdrop-blur-sm">
            {project.title}
          </div>
        </div>
        <div className="p-3 xs:p-4 sm:p-6 flex flex-col gap-2 xs:gap-3 h-[200px] xs:h-[230px]">
          <div className="space-y-1">
            <span className="inline-block px-2 xs:px-3 py-1 rounded-full text-xs font-semibold text-portfolio-purple bg-portfolio-purple/10">
              {project.category}
            </span>
            <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white group-hover:text-portfolio-purple transition-colors">
              {project.title}
            </h3>
          </div>
          <p className="text-white/80 text-xs xs:text-sm sm:text-base leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 xs:gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-white/70 transition-colors duration-200 group-hover:bg-portfolio-purple/20 group-hover:text-portfolio-purple"
              >
                {tech}
              </span>
            ))}
          </div>
          <motion.button
            onClick={handleViewProjectClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-auto w-full py-2 rounded-lg flex items-center justify-center gap-2 bg-portfolio-purple/10 text-portfolio-purple text-xs xs:text-sm font-medium transition-colors duration-300 group-hover:bg-portfolio-purple group-hover:text-white"
          >
            View Project <ExternalLink size={14} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenProjectDetails = (project: ProjectDetails) => {
    setSelectedProject(project);
    setDialogOpen(true);
    // Toast notification removed from here
  };

  return (
    <section
      id="projects"
      className="py-8 xs:py-12 sm:py-20 md:py-24 w-full overflow-hidden bg-white/5"
    >
      <div className="max-w-[1600px] mx-auto px-1 xs:px-2 sm:px-6">
        <AnimatedElement className="mb-6 xs:mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            My Work
          </h2>
        </AnimatedElement>
        <AnimatedElement
          delay={0.2}
          className="max-w-3xl mx-auto mb-7 xs:mb-10 sm:mb-16 text-center"
        >
          <p className="text-white/80 leading-relaxed text-xs xs:text-sm sm:text-lg">
            Here are some of my recent projects. Each one represents a unique
            challenge that I enjoyed solving with{" "}
            <span className="text-portfolio-purple font-medium">
              creative and technical solutions
            </span>
            .
          </p>
        </AnimatedElement>
        <AnimatedElement delay={0.3} className="w-full">
          <div className="relative px-0 xs:px-2 sm:px-8">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                skipSnaps: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-1 xs:-ml-2 md:-ml-6">
                {projects.map((project) => (
                  <CarouselItem
                    key={project.id}
                    className="pl-1 xs:pl-2 md:pl-6 basis-1/2 xs:basis-1/2 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                  >
                    <ProjectCard
                      project={project}
                      onClick={() => handleOpenProjectDetails(project)}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-4 sm:mt-8 flex justify-center gap-2 sm:gap-4">
                <CarouselPrevious className="position-static bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white" />
                <CarouselNext className="position-static bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white" />
              </div>
            </Carousel>
          </div>
        </AnimatedElement>
        <div className="mt-6 xs:mt-10 sm:mt-16 text-center">
          <AnimatedElement delay={0.4}>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-portfolio-purple hover:bg-portfolio-purple/90 text-white font-medium tracking-wide rounded-lg shadow-lg shadow-portfolio-purple/20 transition-all duration-300 text-xs xs:text-sm sm:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discuss a Project
            </motion.a>
          </AnimatedElement>
        </div>
      </div>

      {/* Project Details Dialog */}
      <ProjectDetailsDialog
        project={selectedProject}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </section>
  );
};

export default ProjectsSection;
