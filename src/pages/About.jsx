import React from 'react';

const About = () => {
  return (
    <section className="about-us bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-orange-500">About WarmPaws</h1>
        <p className="text-lg text-gray-700 mb-4">
          WarmPaws is dedicated to creating a loving and safe environment for pets and their owners. 
          Our mission is to provide high-quality pet care products, services, and resources that 
          ensure your furry friends stay happy and healthy.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          From premium pet accessories to expert advice, WarmPaws is your trusted companion in 
          every step of your pet’s journey. We believe every pet deserves warmth, love, and comfort.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Our Mission</h3>
            <p className="text-gray-600">
              To provide pets with products and services that promote health, happiness, and comfort.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Our Vision</h3>
            <p className="text-gray-600">
              To become a trusted name in pet care, spreading love and warmth to pets everywhere.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-orange-400">Our Values</h3>
            <p className="text-gray-600">
              Compassion, trust, quality, and dedication to the well-being of every pet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
