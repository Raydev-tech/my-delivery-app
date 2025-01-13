import React, { useState } from 'react';

const ProductPage = () => {
  const products = [
    { 
      id: 1, 
      name: 'Fashion Jacket', 
      price: 120, 
      src: 'https://example.com/fashion-jacket.jpg'
    },
    { 
      id: 2, 
      name: 'Wireless Headphones', 
      price: 150, 
      src: 'https://example.com/wireless-headphones.jpg'
    },
    { 
      id: 3, 
      name: 'Smart Watch', 
      price: 200, 
      src: 'https://example.com/smart-watch.jpg'
    },
    { 
      id: 4, 
      name: 'Sunglasses', 
      price: 80, 
      src: 'https://example.com/sunglasses.jpg'
    },
  ];

  const [cart, setCart] = useState([]);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [isScheduled, setIsScheduled] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleScheduleDelivery = () => {
    if (deliveryDate) {
      setIsScheduled(true);
    } else {
      alert('Please select a delivery date.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold mb-6">Product Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300 ease-in-out"
          >
            <img
              src={product.src}
              alt={product.name}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-lg text-gray-700 mb-4">Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-200"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="border-t border-gray-300 pt-4">
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>${item.price}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-between mt-4">
              <span className="font-semibold text-lg">Total:</span>
              <span className="font-semibold text-lg">
                ${cart.reduce((total, product) => total + product.price, 0)}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Schedule Delivery</h2>
        <input
          type="date"
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          className="border border-gray-300 p-2 rounded-md mb-4"
        />
        <button
          onClick={handleScheduleDelivery}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-200"
        >
          Schedule Delivery
        </button>

        {isScheduled && (
          <p className="mt-4 text-gray-800">Your delivery is scheduled for {deliveryDate}!</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
