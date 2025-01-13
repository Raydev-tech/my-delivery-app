import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="max-w-4xl px-6 bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We are a team of passionate individuals dedicated to providing the best service to our customers. 
          Our mission is to create exceptional experiences and deliver value in everything we do.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          With years of experience in our industry, we strive to make every interaction meaningful and impactful.
          Our diverse team of experts work together to ensure we exceed expectations at every step.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our vision is to be a leader in our industry, providing innovative solutions and fostering long-term
          relationships with our clients and partners.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>Integrity: We always act with honesty and transparency.</li>
          <li>Innovation: We embrace change and continuously seek new ways to improve.</li>
          <li>Excellence: We strive for perfection in every project we undertake.</li>
          <li>Collaboration: We work together, harnessing the strengths of our team and clients.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
