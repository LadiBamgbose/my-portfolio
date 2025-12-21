import { motion, useScroll, useTransform } from 'framer-motion';
import { useInfiniteTypewriter } from '../hooks/useTypewriter';
import { useRef } from 'react';

// Modern hero section component with Framer Motion animations
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const { displayText: welcomeText, isComplete } = useInfiniteTypewriter({ 
    text: "Welcome,", 
    typeSpeed: 200,
    deleteSpeed: 150,
    pauseTime: 10000,
    delay: 600 
  });

  return (
    <motion.section 
      ref={ref}
      className="relative z-10 h-screen flex items-center justify-center px-6"
      style={{ opacity, scale, y }}
    >
      <div className="text-center max-w-4xl">
        {/* Welcome Message */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-4">
            {/* Welcome Line */}
            <motion.div
              className="text-7xl md:text-8xl font-bold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-flex items-center">
                <span className={`transition-all duration-300 ${
                  isComplete ? 'bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]' : 'text-white'
                }`}>
                  {welcomeText}
                </span>
                <motion.span
                  className="inline-block w-1 h-20 bg-blue-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                />
              </span>
            </motion.div>

            {/* Name Line */}
            <motion.h1 
              className="text-6xl md:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%] inline-block cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ladi Bamgbose
              </motion.span>
            </motion.h1>
          </div>
          
          {/* Description */}
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            An AI and Engineering Analyst at{' '}
            <span className="text-white font-medium">Deloitte</span>{' '}
            and tech enthusiast passionate about innovation and cutting-edge solutions.
          </motion.p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.button 
            className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-full backdrop-blur-sm"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
