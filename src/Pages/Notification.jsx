import React, { useState } from 'react';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Delivery In Progress',
      message: 'Your order #12345 is on its way!',
      status: 'In Progress',
    },
    {
      id: 2,
      title: 'Delivered',
      message: 'Your order #54321 has been delivered!',
      status: 'Delivered',
    },
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Delivery Notifications</h1>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg shadow-md ${
              notification.status === 'Delivered' ? 'bg-green-100' : 'bg-blue-100'
            }`}
          >
            <h2 className="text-xl font-semibold">{notification.title}</h2>
            <p className="text-gray-700">{notification.message}</p>
            <span
              className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
                notification.status === 'Delivered'
                  ? 'bg-green-600 text-white'
                  : 'bg-blue-600 text-white'
              }`}
            >
              {notification.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
