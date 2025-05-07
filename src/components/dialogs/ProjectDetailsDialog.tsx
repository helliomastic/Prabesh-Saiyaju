
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  url?: string;
}

interface ProjectDetailsDialogProps {
  project: ProjectDetails | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailsDialog = ({ project, open, onOpenChange }: ProjectDetailsDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-white/10 backdrop-blur-md border border-white/10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-portfolio-purple">{project.title}</DialogTitle>
          <DialogDescription>
            <span className="inline-block px-3 py-1 mt-1 rounded-full text-xs font-semibold text-portfolio-purple bg-portfolio-purple/10">
              {project.category}
            </span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-2">
          <div className="relative h-[200px] sm:h-[250px] rounded-lg overflow-hidden mb-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          </div>
          
          <div className="space-y-4">
            <p className="text-white/90">{project.description}</p>
            
            <div>
              <h4 className="text-sm font-medium mb-2 text-white/70">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {project.url && (
              <motion.div 
                className="pt-4 flex justify-end"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
                  onClick={() => {
                    window.open(project.url, "_blank", "noopener,noreferrer");
                  }}
                >
                  Visit Project <ExternalLink size={16} />
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
