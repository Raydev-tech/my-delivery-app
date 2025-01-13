import React from 'react';

export default function ShipNow() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-4">Ship Now Service</h1>
      <p className="text-center text-lg mb-8">
        Request Pickup, Delivery, or Xpress Drop Off anywhere at your convenience.
      </p>
      
      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Delivery Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Standard Delivery</h3>
            <p className="text-base mb-4">Reliable and affordable delivery service with a typical delivery time of 3-5 business days.</p>
            <p className="text-base">Perfect for less urgent deliveries.</p>
          </div>
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Expedited Delivery</h3>
            <p className="text-base mb-4">Need it sooner? Our expedited service gets your delivery to its destination within 1-2 business days.</p>
            <p className="text-base">For time-sensitive packages that require faster processing.</p>
          </div>
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Xpress Drop-off</h3>
            <p className="text-base mb-4">Conveniently drop off your package at one of our Xpress locations, with minimal wait time for processing and delivery.</p>
            <p className="text-base">Ideal for quick and easy drop-offs without the need for pickup.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Service Areas</h2>
        <p className="text-center text-lg mb-4">
          We deliver to a wide range of locations! Whether you need a local delivery or shipping across the country, we've got you covered.
        </p>
        <div className="text-center">
          <ul className="list-disc list-inside text-lg">
            <li>Local deliveries within the city</li>
            <li>National deliveries to all states</li>
            <li>International deliveries available</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-4">Request a Pickup</h2>
        <p className="text-center text-lg mb-8">
          Ready to ship? Schedule a pickup for your items from your location.
        </p>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 ease-in-out">
            <a href="customerdashboard">
                Schedule Pickup
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
