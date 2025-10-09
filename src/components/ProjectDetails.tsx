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
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
    <div className="w-full bg-transparent rounded-2xl p-8 flex flex-col">
      {/* Accent line */}
      <motion.div 
        className={`w-12 h-1 bg-gradient-to-r ${project.accentColor === 'pink-500' ? 'from-pink-500 to-rose-500' : 'from-blue-500 to-cyan-500'} rounded-full mb-6`}
        initial={{ width: 0 }}
        animate={{ width: 48 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      />
      
      {/* Project title */}
      <motion.h2 
        className="text-4xl font-bold text-white mb-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        {project.title}
      </motion.h2>
      
      {/* Project description */}
      <motion.p 
        className="text-gray-300 text-lg mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {project.description}
      </motion.p>
      
      {/* Bullet points */}
      <div className="mb-8 space-y-3">
        {project.bullets.map((bullet, index) => (
          <motion.div
            key={`${project.id}-bullet-${index}`}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.25 + index * 0.05 }}
          >
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.accentColor === 'pink-500' ? 'from-pink-500 to-rose-500' : 'from-blue-500 to-cyan-500'} mt-2 mr-3 flex-shrink-0`} />
            <p className="text-gray-400 text-sm leading-relaxed">
              {bullet}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <motion.div
            key={`${project.id}-tech-${tech}`}
            className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 rounded-full text-white text-xs font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.35 + index * 0.03 }}
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;
