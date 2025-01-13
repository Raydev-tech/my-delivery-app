import { useState } from 'react'
import DeliveryRequestForm from './DeliveryRequestForm'
import OrderHistory from './OrderHistory'
import TrackingMap from './TrackingMap'

export default function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('request')

  return (
    <div>
      {/* <div className="container mx-auto p-4"> */}
        <h1 className="text-2xl font-bold mb-4 text-center">Customer Dashboard</h1>
      <div className="text-center mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'request' ? 'bg-gray-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('request')}
        >
          Request Delivery
        </button>
        <button
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'history' ? 'bg-gray-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('history')}
        >
          Order History
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === 'tracking' ? 'bg-gray-600 text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab('tracking')}
        >
          Track Delivery
        </button>
      </div>
      {activeTab === 'request' && <DeliveryRequestForm />}
      {activeTab === 'history' && <OrderHistory />}
      {activeTab === 'tracking' && <TrackingMap />}
    </div>
  )
}

