import { motion } from 'framer-motion';

interface ProjectDetailsProps {
  project: {
    id: string;
    title: string;
    description: string;
    bullets: string[];
    technologies: string[];
    accentColor: string;
  };
  isActive: boolean;
}

const ProjectDetails = ({ project, isActive }: ProjectDetailsProps) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: 50 }}
      animate={{ 
        opacity: isActive ? 1 : 0,
        x: isActive ? 0 : 50
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="bg-transparent rounded-2xl p-8 h-[600px] flex flex-col">
        {/* Accent line */}
        <div className={`w-12 h-1 bg-gradient-to-r ${project.accentColor === 'pink-500' ? 'from-pink-500 to-rose-500' : 'from-blue-500 to-cyan-500'} rounded-full mb-6`} />
        
        {/* Project title */}
        <h2 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h2>
        
        {/* Project description */}
        <p className="text-gray-300 text-base mb-6 leading-relaxed flex-shrink-0">
          {project.description}
        </p>
        
        {/* Bullet points */}
        <div className="mb-6 flex-1">
          {project.bullets.map((bullet, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.accentColor === 'pink-500' ? 'from-pink-500 to-rose-500' : 'from-blue-500 to-cyan-500'} mt-2 mr-3 flex-shrink-0`} />
              <p className="text-gray-300 text-sm leading-relaxed">
                {bullet}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 flex-shrink-0">
          {project.technologies.map((tech, index) => (
            <motion.div
              key={tech}
              className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-white text-xs font-medium"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
