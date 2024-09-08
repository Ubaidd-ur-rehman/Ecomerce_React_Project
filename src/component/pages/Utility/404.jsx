import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="text-center p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <motion.h1
          className="text-6xl font-extrabold text-gray-900 mb-4"
          variants={textVariants}
        >
          404
        </motion.h1>
        <motion.p
          className="text-xl text-gray-700 mb-6"
          variants={textVariants}
        >
          Oops! The page you're looking for doesn't exist.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 mb-8"
          variants={textVariants}
        >
          It might have been moved or deleted. Try going back to the homepage.
        </motion.p>
        <motion.a
          href="/"
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          variants={textVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Homepage
        </motion.a>
      </div>
    </motion.div>
  );
};

export default NotFound;
