import React, { useState } from 'react';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Valid email is required.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    toast(`Thank you for contacting support, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' }); 
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Support</h1>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6 space-y-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start space-y-4 sm:space-y-0">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-700">Need Assistance?</h2>
            <p className="text-gray-600">
              Our support team is here to help. Reach out to us via the form below or use the contact details provided.
            </p>
          </div>
          <div className="text-gray-600">
            <p className="font-medium">Email: <a href="mailto:support@example.com" className="text-green-600 hover:underline">support@example.com</a></p>
            <p className="font-medium">Phone: <a href="tel:+1234567890" className="text-green-600 hover:underline">+1 (234) 567-890</a></p>
            <p className="font-medium">Hours: Mon - Fri, 9 AM - 6 PM</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              placeholder="How can we help you?"
              className={`mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md shadow hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
