import { useState, useEffect } from 'react'

export default function OrderHistory() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const mockOrders = [
      {
        id: '1',
        date: '2023-05-01',
        status: 'Delivered',
        pickupAddress: '123 Main St',
        dropoffAddress: '456 Elm St',
      },
      {
        id: '2',
        date: '2023-05-02',
        status: 'In Transit',
        pickupAddress: '789 Oak St',
        dropoffAddress: '101 Pine St',
      },
      {
        id: '3',
        date: '2023-05-03',
        status: 'Pending',
        pickupAddress: '202 Maple St',
        dropoffAddress: '303 Cedar St',
      },
    ]
    setOrders(mockOrders)
  }, [])

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Order History</h2>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border-b px-4 py-3 text-left">Order ID</th>
              <th className="border-b px-4 py-3 text-left">Date</th>
              <th className="border-b px-4 py-3 text-left">Status</th>
              <th className="border-b px-4 py-3 text-left">Pickup</th>
              <th className="border-b px-4 py-3 text-left">Drop-off</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b even:bg-gray-50 hover:bg-gray-200">
                <td className="px-4 py-3 text-gray-800">{order.id}</td>
                <td className="px-4 py-3 text-gray-800">{order.date}</td>
                <td className={`px-4 py-3 ${order.status === 'Delivered' ? 'text-green-600' : order.status === 'In Transit' ? 'text-yellow-600' : 'text-red-600'}`}>{order.status}</td>
                <td className="px-4 py-3 text-gray-800">{order.pickupAddress}</td>
                <td className="px-4 py-3 text-gray-800">{order.dropoffAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
