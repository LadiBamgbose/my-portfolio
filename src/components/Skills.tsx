import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiReact, 
  SiCss3, 
  SiHtml5, 
  SiTailwindcss, 
  SiC,
  SiCplusplus,
  SiPython,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiReactrouter,
  SiNodemon,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiPostman,
  SiZapier,
  SiN8N,
  SiMake,
  SiGithubactions,
  SiOpenai,
  SiAnthropic
} from 'react-icons/si';
import { Brain, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    name: 'FRONTEND',
    skills: [
      { name: 'Javascript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'CSS', icon: SiCss3, color: '#1572B6' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' }
    ]
  },
  {
    name: 'BACKEND',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'Express.js', icon: SiExpress, color: '#000000' },
      { name: 'React Router', icon: SiReactrouter, color: '#CA4245' },
      { name: 'Nodemon', icon: SiNodemon, color: '#76D04B' }
    ]
  },
  {
    name: 'DATABASE',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'Prisma', icon: SiPrisma, color: '#2D3748' }
    ]
  },
  {
    name: 'TOOLS',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#181717' },
      { name: 'npm', icon: SiNpm, color: '#CB3837' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' }
    ]
  },
  {
    name: 'AUTOMATION TOOLS',
    skills: [
      { name: 'Zapier', icon: SiZapier, color: '#FF4A00' },
      { name: 'n8n', icon: SiN8N, color: '#EA4B71' },
      { name: 'Make', icon: SiMake, color: '#6D00CC' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' }
    ]
  },
  {
    name: 'AI TOOLS',
    skills: [
      { name: 'ChatGPT', icon: SiOpenai, color: '#10A37F' },
      { name: 'Claude Code', icon: SiAnthropic, color: '#D97757' },
      { name: 'Cursor AI', icon: Sparkles, color: '#A855F7' },
      { name: 'GitHub Copilot', icon: Brain, color: '#7B68EE' }
    ]
  }
];

const Skills = () => {
  return (
    <section className="bg-black/30 backdrop-blur-sm py-32 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              My <span className="italic">Skills</span>
            </span>
          </h2>
        </motion.div>

        {/* Skills List */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: false, amount: 0.2 }}
              className="flex gap-8 items-start"
            >
              {/* Category Name */}
              <div className="w-48 flex-shrink-0">
                <h3 className="text-gray-400 font-semibold text-sm tracking-wider">
                  {category.name}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: false, amount: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 hover:bg-white/10 hover:border-white/20 transition-all cursor-default flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" style={{ color: skill.color }} />
                      <span className="text-gray-200 font-medium text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

