import { motion } from "framer-motion";
import { useState } from "react";

// About page - Framer Motion playground
const About = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPink, setIsPink] = useState(false);

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-300">
            Framer Motion Playground - Experiment with animations below!
          </p>
        </motion.div>

        {/* Animation Playground */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Hover Scale Card */}
          <motion.div
            onClick={() => setIsPink(!isPink)} // toggle on click
            className="rounded-2xl p-8 cursor-pointer"
            style={{ transformPerspective: 500, originX: 0 }}
            animate={{
              background: isPink
                ? "linear-gradient(to bottom right, #ec4899, #f472b6)" // pink gradient
                : "linear-gradient(to bottom right, #3b82f6, #9333ea)", // blue-purple gradient
                rotateY: isPink ? 45 : 0,
            }}
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">Hover Me!</h3>
            <p className="text-white/80">
              This card changes gradient when clicked
            </p>
          </motion.div>

          {/* Animated Button */}
          <motion.div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Toggle Animation
            </h3>
            <motion.button
              className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full"
              onClick={() => setIsVisible(!isVisible)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Toggle Box
            </motion.button>

            <motion.div
              className="mt-4 h-20 bg-white/20 rounded-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                height: isVisible ? 80 : 0,
              }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>

          {/* Floating Animation */}
          <motion.div
            className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Floating Effect
            </h3>
            <p className="text-white/80">
              This card floats and gently rotates automatically
            </p>
          </motion.div>

          {/* Stagger Animation */}
          <motion.div
            className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stagger Effect
            </h3>
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                className="h-4 bg-white/30 rounded mb-2"
                variants={{
                  hidden: { x: -50, opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Experimental Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Experiment Zone
          </h2>
          <p className="text-gray-300 text-lg">
            Add your own Framer Motion experiments here!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
