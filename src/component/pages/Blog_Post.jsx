import React from "react";
import { motion } from "framer-motion";

const Blog_Post = () => {
  // Animation Variants for Framer Motion
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      transition: { ease: "easeInOut", duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="max-w-4xl mx-auto my-10 p-8 bg-white shadow-lg rounded-lg border border-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Exploring the Future of Technology
      </motion.h1>

      <motion.p
        className="text-gray-700 mb-8 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        In the ever-evolving world of technology, it's crucial to stay ahead of
        the curve. As innovations continue to reshape industries and redefine
        our way of life, understanding the latest trends and breakthroughs can
        give us a significant advantage. From artificial intelligence to quantum
        computing, the future promises to be an exciting era of discovery and
        advancement.
      </motion.p>

      <motion.div
        className="relative w-full h-80 bg-gradient-to-r from-purple-300 to-blue-300 rounded-lg mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
          Future Technology Innovations
        </div>
      </motion.div>

      <motion.p
        className="text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        The rise of new technologies is reshaping the landscape of business and
        everyday life. Embracing these changes and adapting to new tools and
        methodologies is key to thriving in the digital age. Organizations and
        individuals alike must stay informed and agile to leverage the
        opportunities these innovations present.
      </motion.p>

      <div className="flex justify-center mt-10">
        <motion.button
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Read More
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Blog_Post;
