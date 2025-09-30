import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="flex-[0_0_600px] md:flex-[0_0_600px]"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="relative rounded-2xl h-[600px] md:h-[700px] cursor-grab active:cursor-grabbing shadow-2xl overflow-hidden"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)",
          transition: { duration: 0.3 }
        }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Very Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-cyan-600 to-purple-700" />
        
        {/* Grey Card with Border */}
        <div className={`absolute inset-0 border rounded-xl transition-all duration-300 ${
          !isHovered 
            ? 'bg-black/90 border-transparent bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-[2px]' 
            : ' border-gray-600/50'
        }`}>
          <div className={`h-full w-full rounded-xl ${
            !isHovered ? 'bg-black' : 'bg-transparent'
          }`} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full p-6 flex flex-col justify-between text-white">
          {isHovered ? (
            <>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  {project.title}
                </h3>
              </div>
              
              <div className="flex-1 flex items-center justify-center">
                <p className="text-gray-200 text-lg md:text-xl text-center max-w-md">
                  {project.description}
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            project.image && (
              <div className="h-full w-full flex flex-col justify-between">
                {/* Title */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6">
                    {project.title}
                  </h3>
                </div>
                
                {/* Image */}
                <div className="flex-1 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-h-full max-w-full object-contain rounded-lg"
                  />
                </div>
                
                {/* Tech Stack */}
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
