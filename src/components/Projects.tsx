import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ProjectImageCard from './ProjectImageCard';
import ProjectDetails from './ProjectDetails';
import projectsData from '../data/projects.json';

// Projects section with scroll animations
const Projects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  
  // Convert projects object to array for mapping
  const projectsArray = Object.values(projectsData.projects);

  // Create refs for each project card
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    projectRefs.current = projectRefs.current.slice(0, projectsArray.length);
  }, [projectsArray.length]);

  // Use Intersection Observer to track which project is in view
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    projectRefs.current.forEach((ref, index) => {
      if (!ref) return;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Check if project is in the middle 50% of viewport
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setActiveProjectIndex(index);
            }
          });
        },
        {
          threshold: [0, 0.5, 1],
          rootMargin: '-20% 0px -30% 0px'
        }
      );
      
      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <section className="bg-black/20 backdrop-blur-sm py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              My Projects
            </span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="flex gap-12 items-start relative">
          {/* Left column - Project Image Cards (scrollable) */}
          <div className="flex-1 max-w-4xl">
            <div className="space-y-0">
              {projectsArray.map((project, index) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    projectRefs.current[index] = el;
                  }}
                >
                  <ProjectImageCard 
                    project={project} 
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Project Details (sticky) */}
          <div className="flex-shrink-0 w-[500px] sticky top-32 self-start">
            <ProjectDetails 
              project={projectsArray[activeProjectIndex]} 
              isActive={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
