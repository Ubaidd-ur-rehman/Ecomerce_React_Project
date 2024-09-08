import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 lg:px-0">
      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto p-10 bg-white rounded-lg shadow-lg mb-16">
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-8">
          Learn More About Our Services
        </h1>
        <p className="text-gray-600 text-center text-xl leading-relaxed">
          Discover the unique features and benefits that make our services stand
          out. From innovative solutions to exceptional support, find out how we
          can help you achieve your goals.
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto mt-12 p-8">
        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl  mx-auto mt-16 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
          Benefits of Using Our Services
        </h2>
        <ul className="space-y-6 ">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex cursor-pointer justify-center justify-items-center space-x-3 text-lg text-gray-700"
            >
              <span className="flex-shrink-0">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 4.707 7.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <p className="leading-relaxed hover:text-blue-700 transition-colors duration-300">
                {benefit}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 mt-20 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Experience?
          </h3>
          <p className="text-white text-lg mb-8">
            Take the next step today and see the impact our services can have on
            your business or personal life.
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-full font-semibold hover:bg-blue-700 hover:text-white transition duration-300 transform hover:scale-105 shadow-lg">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

// Sample data for features and benefits
const features = [
  {
    title: "Custom Solutions",
    description:
      "Tailored solutions designed to meet your specific needs and requirements, ensuring maximum impact.",
  },
  {
    title: "Expert Team",
    description:
      "Our team of professionals brings years of experience to help you navigate challenges and seize opportunities.",
  },
  {
    title: "Innovative Technology",
    description:
      "Stay ahead of the curve with our state-of-the-art technology and tools, designed to drive success.",
  },
  {
    title: "24/7 Support",
    description:
      "Around-the-clock support to assist you whenever you need it, ensuring a seamless experience.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Grow with confidence with our scalable solutions that adapt to your evolving needs.",
  },
  {
    title: "Affordable Pricing",
    description:
      "Get the best value with our competitive pricing, designed to fit your budget.",
  },
];

const benefits = [
  "Improve operational efficiency and productivity.",
  "Reduce costs and maximize your ROI.",
  "Gain a competitive edge in your industry.",
  "Access to cutting-edge technology and tools.",
  "24/7 dedicated customer support.",
  "Flexible and scalable to meet your growth needs.",
];

export default LearnMore;
