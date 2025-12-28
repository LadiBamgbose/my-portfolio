import { motion } from 'framer-motion';

interface ProjectImageCardProps {
  project: {
    id: string;
    title: string;
    heading: string;
    description: string;
    image?: string;
    video?: string;
    gradient: string;
    accentColor: string;
  };
  index: number;
}

const ProjectImageCard = ({ project, index }: ProjectImageCardProps) => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      {/* Outer container with grey border */}
      <div className="relative rounded-3xl border-2 border-gray-500 overflow-hidden h-[600px]">
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
        
        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Project heading header */}
          <div className="px-6 pt-6 pb-4 flex-shrink-0">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-white text-lg font-medium flex-1">
                {project.heading}
              </h3>
              <motion.div
                className="w-6 h-6 flex-shrink-0"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </div>
          </div>
          
          {/* Black container for project image/video - extends to bottom */}
          <div className="relative bg-black overflow-hidden shadow-2xl flex-1 rounded-b-5xl flex items-center justify-center p-3">
            {project.video ? (
              <div className="w-full h-full max-w-full max-h-full rounded-2xl overflow-hidden">
                <video 
                  src={project.video} 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            ) : project.image ? (
              <div className="w-full h-full max-w-full max-h-full rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm">No image available</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectImageCard;
