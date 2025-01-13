import React from 'react';

export default function PersonalShopper() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-4 animate__animated animate__fadeIn">
        Personal Shopper Service
      </h1>
      <p className="text-center text-lg mb-8 animate__animated animate__fadeIn animate__delay-1s">
        We shop quality products for you & ship to your doorstep from your favorite stores worldwide.
      </p>

      <section className="mb-8 animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-3xl font-semibold text-center mb-4">How Our Personal Shopper Service Works</h2>
        <p className="text-center text-lg mb-4">
          Our personal shopper service allows you to shop from top stores around the world and have your products
          delivered to you directly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-3s">
            <h3 className="text-xl font-semibold mb-3">Step 1: Choose Your Products</h3>
            <p className="text-base">Tell us the products you want from your preferred online store, and we will handle the rest.</p>
          </div>

          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-4s">
            <h3 className="text-xl font-semibold mb-3">Step 2: We Shop for You</h3>
            <p className="text-base">Our personal shopper will purchase the items on your behalf, ensuring quality and the best deals.</p>
          </div>

          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-5s">
            <h3 className="text-xl font-semibold mb-3">Step 3: We Ship to Your Door</h3>
            <p className="text-base">Once the items are purchased, we ship them directly to your doorstep with reliable international shipping options.</p>
          </div>
        </div>
      </section>

      <section className="mb-8 animate__animated animate__fadeIn animate__delay-6s">
        <h2 className="text-3xl font-semibold text-center mb-4">What We Can Shop For</h2>
        <p className="text-center text-lg mb-4">
          We can shop from a wide range of stores, including fashion, electronics, beauty products, and much more.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-7s">
            <h3 className="text-xl font-semibold mb-3">Fashion & Apparel</h3>
            <p className="text-base">Get the latest fashion trends from top clothing stores worldwide.</p>
          </div>

          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-8s">
            <h3 className="text-xl font-semibold mb-3">Electronics</h3>
            <p className="text-base">Shop for the latest gadgets and electronics from global brands.</p>
          </div>

          <div className="rounded-lg bg-gray-800 text-white p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out animate__animated animate__fadeInUp animate__delay-9s">
            <h3 className="text-xl font-semibold mb-3">Beauty & Health</h3>
            <p className="text-base">Find high-quality beauty and health products from top international stores.</p>
          </div>
        </div>
      </section>

      <section className="mb-8 animate__animated animate__fadeIn animate__delay-10s">
        <h2 className="text-3xl font-semibold text-center mb-4">Where We Shop From</h2>
        <p className="text-center text-lg mb-4">
          We can shop from a variety of international online stores. Some of our preferred shopping destinations include:
        </p>
        <div className="text-center">
          <ul className="list-disc list-inside text-lg">
            <li>Amazon (USA, UK, Canada, etc.)</li>
            <li>eBay (Global)</li>
            <li>ASOS (UK & Global)</li>
            <li>Alibaba (China)</li>
            <li>Apple Store (USA, UK, etc.)</li>
            <li>Sephora (Global)</li>
            <li>Zara (Global)</li>
            <li>Walmart (USA, Canada)</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-center mb-4 animate__animated animate__fadeIn animate__delay-11s">Ready to Shop?</h2>
        <p className="text-center text-lg mb-8 animate__animated animate__fadeIn animate__delay-12s">
          Get started with our Personal Shopper service today and have your products shipped directly to your doorstep!
        </p>
        <div className="flex justify-center animate__animated animate__fadeIn animate__delay-13s">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300 ease-in-out">
            <a href="productpage">Start Shopping Now</a>
          </button>
        </div>
      </section>
    </div>
  );
}
