import { motion } from 'framer-motion';

// Contact page
const Contact = () => {
  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300">
            Let's connect and discuss opportunities
          </p>
        </motion.div>

        {/* Coming Soon */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact Form Coming Soon
            </h2>
            <p className="text-white/80 text-lg">
              Contact information and form will be added here!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

