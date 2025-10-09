import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ExperienceItem {
  id: number;
  date: string;
  company: string;
  location: string;
  role: string;
  description: string[];
}

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress within the component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 90%"]
  });

  // Transform scroll progress to bar height (0% to 100%)
  const barHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      date: 'JULY 2024 - PRESENT',
      company: 'Deloitte',
      location: 'Atlanta, GA',
      role: 'AI & Engineering Analyst',
      description: [
        'Built React + Flask dashboards backed by PostgreSQL to let 500+ client users query and visualize KPIs; reduced manual Excel reporting by 85%.',
        'Implemented anomaly detection models in scikit-learn (Isolation Forest, Logistic Regression) to flag corrupted vendor files with 92% precision, reducing failed transfers by 12%.',
        'Developed REST APIs in Flask + FastAPI, containerized with Docker, to automate third-party vendor data exchange; reduced average troubleshooting time from 3 days → under 4 hrs.',
        'Led sprint planning across Jira + GitHub Actions CI/CD, ensuring 100% on-time delivery of two production integrations; earned Deloitte\'s Applause Award for technical execution.',
      ],
    },
    {
      id: 2,
      date: 'MAY 2023 - AUG 2024',
      company: 'Stackwell Capital',
      location: 'Philadelphia, PA',
      role: 'Business Technology Summer Consultant',
      description: [
        'Created a detailed project strategy for an early stage fintech startup on a mission to target and reverse black underinvestment in the market.',
        'Developed a product roadmap for a mobile-native robo advisor application that provides automated investment portfolios for new investors.',
      ],
    },
  ];

  return (
    <section  className="relative min-h-screen py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <p className="text-gray-400 text-sm tracking-[0.3em] uppercase mb-4">THE EXPERIENCE</p>
        <h2 className="text-6xl font-light text-white mb-24">
          Experience That<br />
          Brings <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent italic">Ideas to Life</span>
        </h2>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Vertical Bar Container */}
          <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 rounded-full overflow-hidden">
            {/* Background bar */}
            <div className="absolute inset-0 bg-white/10" />
            
            {/* Animated gradient bar */}
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
              style={{ height: barHeight }}
            />
          </div>

          {/* Experience Items */}
          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid grid-cols-2 gap-16 items-start"
              >
                {/* Left Side - Company Info */}
                <div className="text-right pr-8">
                  <p className="text-gray-400 text-base mb-3">{exp.date}</p>
                  <h3 className="text-3xl font-light text-white mb-2">{exp.company}</h3>
                  <p className="text-white/60 text-base flex items-center justify-end gap-2">
                    <span className="inline-block w-3 h-3 bg-white/40 rounded-sm" />
                    {exp.location}
                  </p>
                </div>

                {/* Right Side - Role and Description */}
                <div className="pl-8">
                  <h4 className="text-3xl font-normal text-white mb-8">{exp.role}</h4>
                  
                  <div className="space-y-5">
                    {exp.description.map((point, i) => (
                      <p key={i} className="text-white/70 text-lg leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

