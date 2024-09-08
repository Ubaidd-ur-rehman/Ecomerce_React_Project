import React from "react";
import { motion } from "framer-motion";

const Policies = () => {
  // Animation variants for Framer Motion
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-8">
          <motion.h1
            className="text-4xl font-extrabold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Policies
          </motion.h1>

          <motion.section
            className="mb-16 border-b border-gray-300 pb-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Return Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are committed to ensuring your satisfaction. If you are not
              happy with your purchase, you can return it within 30 days of
              receipt for a full refund or exchange. Please ensure that the item
              is in its original condition, and include all packaging materials.
              For more information, visit our Returns Center or contact customer
              service.
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>Items must be returned within 30 days of receipt.</li>
              <li>Items should be in original condition and packaging.</li>
              <li>Contact customer service for return instructions.</li>
            </ul>
          </motion.section>

          <motion.section
            className="mb-16 border-b border-gray-300 pb-8"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Privacy Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is paramount. We collect and use your personal
              information solely to process orders, enhance our services, and
              communicate with you. We are committed to safeguarding your data
              and do not sell or rent your information to third parties. For
              detailed information, please review our full Privacy Policy.
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>
                Data collected is used for order processing and service
                improvement.
              </li>
              <li>We do not sell or rent your personal data.</li>
              <li>Review our full Privacy Policy for detailed information.</li>
            </ul>
          </motion.section>

          <motion.section
            className="mb-16"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Shipping Policy
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer various shipping options to meet your needs. Orders are
              processed within 1-2 business days. Delivery times depend on your
              location and selected shipping method. You will receive a tracking
              number once your order has shipped. For more information on rates
              and delivery times, please refer to our Shipping Policy.
            </p>
            <ul className="list-disc list-inside pl-4 text-gray-600">
              <li>Orders are processed within 1-2 business days.</li>
              <li>
                Delivery times vary based on location and shipping method.
              </li>
              <li>Tracking numbers are provided once orders have shipped.</li>
            </ul>
          </motion.section>
        </div>

        <motion.div
          className="bg-gray-900 text-white py-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Policies;
