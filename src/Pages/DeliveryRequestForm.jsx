import { useState } from 'react'
import toast from "react-hot-toast";

export default function DeliveryRequestForm() {
  const [formData, setFormData] = useState({
    pickupAddress: '',
    dropoffAddress: '',
    packageSize: '',
    packageWeight: '',
    deliveryTime: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Delivery request submitted:', formData)
    toast.success("Delivery request submitted successfully")
    // Reset form after submission
    setFormData({
      pickupAddress: '',
      dropoffAddress: '',
      packageSize: '',
      packageWeight: '',
      deliveryTime: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 border-2 border-gray-300 rounded-lg shadow-lg bg-white">
      <div>
        <label htmlFor="pickupAddress" className="block mb-2 font-semibold text-gray-700">Pickup Address</label>
        <input
          type="text"
          id="pickupAddress"
          name="pickupAddress"
          value={formData.pickupAddress}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-600"
        />
      </div>
      <div>
        <label htmlFor="dropoffAddress" className="block mb-2 font-semibold text-gray-700">Drop-off Address</label>
        <input
          type="text"
          id="dropoffAddress"
          name="dropoffAddress"
          value={formData.dropoffAddress}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-600"
        />
      </div>
      <div>
        <label htmlFor="packageSize" className="block mb-2 font-semibold text-gray-700">Package Size</label>
        <select
          id="packageSize"
          name="packageSize"
          value={formData.packageSize}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-600"
        >
          <option value="">Select size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="packageWeight" className="block mb-2 font-semibold text-gray-700">Package Weight (kg)</label>
        <input
          type="number"
          id="packageWeight"
          name="packageWeight"
          value={formData.packageWeight}
          onChange={handleChange}
          required
          min="0"
          step="0.1"
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-600"
        />
      </div>
      <div>
        <label htmlFor="deliveryTime" className="block mb-2 font-semibold text-gray-700">Desired Delivery Time</label>
        <input
          type="datetime-local"
          id="deliveryTime"
          name="deliveryTime"
          value={formData.deliveryTime}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-600"
        />
      </div>
      <button 
        type="submit"
        className="w-full px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
      >
        Schedule Delivery
      </button>
    </form>
  )
}
