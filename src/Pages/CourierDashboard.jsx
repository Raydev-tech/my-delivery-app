import { useState, useEffect } from "react";
import TrackingMap from "./TrackingMap";

export default function CourierDashboard() {
  const [deliveries, setDeliveries] = useState([]);
  const [selectedDelivery, setSelectedDelivery] = useState(null);

  const courierLocation = { lat: 37.7749, lng: -122.4194 }; // Example courier location
  const ownerLocation = selectedDelivery
    ? { lat: selectedDelivery.ownerLat, lng: selectedDelivery.ownerLng }
    : null;

  useEffect(() => {
    const mockDeliveries = [
      {
        id: "1",
        pickupAddress: "123 Main St",
        dropoffAddress: "456 Elm St",
        status: "Delivered",
        ownerLat: 37.7849,
        ownerLng: -122.4094,
      },
      {
        id: "2",
        pickupAddress: "789 Oak St",
        dropoffAddress: "101 Pine St",
        status: "In Transit",
        ownerLat: 37.7649,
        ownerLng: -122.4294,
      },
      {
        id: "3",
        pickupAddress: "202 Maple St",
        dropoffAddress: "303 Cedar St",
        status: "Pending",
        ownerLat: 37.7749,
        ownerLng: -122.4394,
      },
    ];
    setDeliveries(mockDeliveries);
  }, []);

  const handleStatusUpdate = (id, newStatus) => {
    setDeliveries((prevDeliveries) =>
      prevDeliveries.map((delivery) =>
        delivery.id === id ? { ...delivery, status: newStatus } : delivery
      )
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Courier Dashboard</h1>
      <div className="overflow-x-auto shadow-md rounded-lg mb-8">
        <table className="min-w-full table-auto">
          <caption className="text-center font-semibold mb-4">
            A list of your assigned deliveries.
          </caption>
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Delivery ID</th>
              <th className="px-4 py-2 text-left">Pickup</th>
              <th className="px-4 py-2 text-left">Drop-off</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery) => (
              <tr key={delivery.id} className="border-t">
                <td className="px-4 py-2">{delivery.id}</td>
                <td className="px-4 py-2">{delivery.pickupAddress}</td>
                <td className="px-4 py-2">{delivery.dropoffAddress}</td>
                <td className="px-4 py-2">{delivery.status}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleStatusUpdate(delivery.id, "Picked Up")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                  >
                    Picked Up
                  </button>
                  <button
                    onClick={() => handleStatusUpdate(delivery.id, "Delivered")}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Delivered
                  </button>
                  <button
                    onClick={() => setSelectedDelivery(delivery)}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 ml-2"
                  >
                    Track
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tracking Map */}
      {selectedDelivery && ownerLocation && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Tracking Map</h2>
          <TrackingMap
            courierLocation={courierLocation}
            ownerLocation={ownerLocation}
          />
        </div>
      )}
    </div>
  );
}
