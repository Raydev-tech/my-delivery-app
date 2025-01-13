import React from 'react';

export default function OverseaShipping() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-4">Oversea Shipping</h1>
      <p className="text-center text-lg mb-8">
        Ship from UK, Canada, USA, China, and Any Other Countries to Nigeria.
      </p>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Our Overseas Shipping Options</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Standard International Shipping</h3>
            <p className="text-base mb-4">Affordable and reliable international shipping with delivery times ranging from 7-14 days.</p>
            <p className="text-base">Perfect for non-urgent deliveries, with tracking available for peace of mind.</p>
          </div>
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Express Shipping</h3>
            <p className="text-base mb-4">Get your items delivered within 3-7 days with expedited processing and fast transit times.</p>
            <p className="text-base">Best for urgent packages that need to arrive quickly without compromising security.</p>
          </div>

          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-3">Air Freight</h3>
            <p className="text-base mb-4">Ideal for larger or heavier packages, with delivery within 5-10 days depending on the destination.</p>
            <p className="text-base">For bulkier or heavier shipments that need the fastest air transportation.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Countries We Ship From</h2>
        <p className="text-center text-lg mb-4">
          We can ship your products from the following countries to Nigeria and other destinations:
        </p>
        <div className="text-center">
          <ul className="list-disc list-inside text-lg">
            <li>United Kingdom</li>
            <li>Canada</li>
            <li>United States</li>
            <li>China</li>
            <li>Germany, France, and other European countries</li>
            <li>Australia, Japan, and other Asia-Pacific countries</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Estimated Delivery Times</h2>
        <p className="text-center text-lg mb-4">
          Depending on the shipping method and destination, here are our estimated delivery times:
        </p>
        <div className="text-center">
          <ul className="list-disc list-inside text-lg">
            <li><strong>Standard International Shipping:</strong> 7-14 days</li>
            <li><strong>Express Shipping:</strong> 3-7 days</li>
            <li><strong>Air Freight:</strong> 5-10 days</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-4">Ready to Ship?</h2>
        <p className="text-center text-lg mb-8">
          Choose the best shipping option for your needs and get your products delivered from overseas to Nigeria!
        </p>
        <div className="flex justify-center">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 ease-in-out">
            <a href="customerdashboard">
                Get a Quote & Schedule Shipping
            </a>
          </button>
        </div>
      </section>
    </div>
  );
}
