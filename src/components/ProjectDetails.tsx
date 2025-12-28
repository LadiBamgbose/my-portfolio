import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectDetailsProps {
  project: {
    id: string;
    title: string;
    description: string;
    bullets: string[];
    technologies: string[];
    gradient: string;
    liveUrl?: string;
  };
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  // Extract domain from URL (e.g., "https://dvffrnt.com" -> "dvffrnt.com")
  const getDomainFromUrl = (url: string) => {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname.replace('www.', '');
    } catch {
      return url;
    }
  };

  return (
    <div className="w-full bg-transparent rounded-2xl p-8 flex flex-col">
      {/* Accent line */}
      <motion.div 
        className={`w-12 h-1 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}
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
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 mr-3 flex-shrink-0`} />
            <p className="text-gray-400 text-sm leading-relaxed">
              {bullet}
            </p>
          </motion.div>
        ))}
      </div>
      
      {/* Tech stack badges */}
      <div className="flex flex-wrap gap-2 mb-8">
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
      
      {/* Live URL button */}
      {project.liveUrl && (
        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>{getDomainFromUrl(project.liveUrl)}</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      )}
    </div>
  );
};

export default ProjectDetails;
