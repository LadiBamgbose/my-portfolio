import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect, useMemo } from 'react';
import ProjectImageCard from './ProjectImageCard';
import ProjectDetails from './ProjectDetails';
import projectsData from '../data/projects.json';

const Projects = () => {
  const allProjects = Object.values(projectsData.projects);
  const [selectedCategory, setSelectedCategory] = useState('Full Stack');
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    return allProjects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, allProjects]);

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedCategory]);
  
  // Track scroll progress of the projects container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to project index (using filtered projects)
  const activeProjectIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.max(0, filteredProjects.length - 1)]
  );

  // Update active index when scroll changes
  useEffect(() => {
    return activeProjectIndex.on("change", (latest) => {
      setActiveIndex(Math.round(latest));
    });
  }, [activeProjectIndex]);

  const categories = ['Full Stack', 'Backend', 'Frontend', 'AI/Machine learning'];

  return (
    <section className="bg-black/20 backdrop-blur-sm pt-6 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              Curated <span className="italic">work</span>
            </span>
          </h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50 border border-gray-700/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Two column layout */}
        {filteredProjects.length > 0 ? (
          <div ref={containerRef} className="flex gap-16 relative pt-12">
            {/* Left column - Project Image Cards */}
            <div className="flex-1 max-w-3xl space-y-8">
              {filteredProjects.map((project, index) => (
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
                    key={filteredProjects[activeIndex]?.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ProjectDetails project={filteredProjects[activeIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
