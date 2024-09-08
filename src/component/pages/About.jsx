import React from "react";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-900 to-gray-900 rounded-lg p-12 mb-12 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">About ASCENSION</h1>
        <p className="max-w-2xl mx-auto text-lg">
          At ASCENSION, we are dedicated to providing you with premium quality
          products that elevate your lifestyle. We believe in innovation,
          quality, and customer satisfaction.
        </p>
      </div>

      {/* Our Story Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          Our Story
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto text-center">
          ASCENSION started with a simple idea: to bring high-quality,
          aesthetically pleasing, and functional products to people all around
          the world. Our journey began in 2020, and since then, we have been
          committed to pushing the boundaries of e-commerce by focusing on
          quality, innovation, and exceptional customer experience.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-700 text-lg">
            To deliver top-notch products that exceed our customers'
            expectations and to continuously innovate in our field, ensuring
            that we stay ahead of the curve.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-4">
            Our Vision
          </h3>
          <p className="text-gray-700 text-lg">
            To become a leading global e-commerce platform known for quality,
            innovation, and excellent customer service.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Customer-Centric Approach",
            "Innovation & Creativity",
            "Integrity & Transparency",
            "Quality Assurance",
            "Sustainability",
            "Community Engagement",
          ].map((value, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <h4 className="text-xl font-semibold text-purple-900 mb-2">
                {value}
              </h4>
              <p className="text-gray-600">
                We believe in {value.toLowerCase()} to build lasting
                relationships with our customers and the community.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Team Member */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="/assets/Ubaidkhan1.jpg"
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-purple-900">
              Ubaid Khan
            </h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>
          {/* Add more team members similarly */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 rounded-lg p-12">
        <h2 className="text-3xl font-bold text-purple-900 mb-6 text-center">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Testimonial */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700 mb-4">
              "ASCENSION has truly transformed my shopping experience. Their
              products are top-notch, and their customer service is
              unparalleled!"
            </p>
            <p className="text-purple-900 fonSt-semibold">- Jane Smith</p>
          </div>
          {/* Add more testimonials similarly */}
        </div>
      </section>
    </div>
  );
};

export default About;
