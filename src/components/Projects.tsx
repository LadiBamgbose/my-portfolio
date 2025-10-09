import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import ProjectImageCard from './ProjectImageCard';
import ProjectDetails from './ProjectDetails';
import projectsData from '../data/projects.json';

const Projects = () => {
  const projectsArray = Object.values(projectsData.projects);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Track scroll progress of the projects container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to project index
  const activeProjectIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, projectsArray.length - 1]
  );

  // Update active index when scroll changes
  useEffect(() => {
    return activeProjectIndex.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
  }, [activeProjectIndex]);

  return (
    <section className="bg-black/20 backdrop-blur-sm pt-6 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Curated <span className="italic">work</span>
            </span>
          </h2>
        </motion.div>

        {/* Two column layout */}
        <div ref={containerRef} className="flex gap-16 relative pt-12">
          {/* Left column - Project Image Cards */}
          <div className="flex-1 max-w-3xl space-y-8">
            {projectsArray.map((project, index) => (
              <ProjectImageCard 
                key={project.id}
                project={project} 
                index={index}
              />
            ))}
          </div>

          {/* Right column - Project Details (sticky) */}
          <div className="flex-shrink-0 w-[500px]">
            <div className="sticky top-36">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projectsArray[activeIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ProjectDetails project={projectsArray[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
