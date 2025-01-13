import React from 'react';

const TrackingMap = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Track Your Delivery</h1>
      <div className="flex flex-col items-center space-y-6">
        
        <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Order #12345</h2>
          <p className="text-gray-700">Status: <span className="text-blue-600 font-bold">In Transit</span></p>
          <p className="text-gray-700">Estimated Delivery: <span className="font-semibold">Jan 12, 2025</span></p>
        </div>

        <div className="w-full max-w-4xl h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509413!2d144.95592531589435!3d-37.81720997975121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57750a5434b4351!2sFlinders%20St%20Station!5e0!3m2!1sen!2sus!4v1688495010673!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            title="Delivery Tracking Map"
            className="border-none"
          ></iframe>
        </div>

        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
            Refresh Status
          </button>
          <button className="px-4 py-2 bg-gray-600 text-white rounded-lg shadow hover:bg-gray-700">
            <a href="contactus">
              Contact Support
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingMap;
