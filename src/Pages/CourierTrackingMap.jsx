import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const TrackingMap = ({ courierLocation, ownerLocation }) => {
  const polylinePositions = [
    [courierLocation.lat, courierLocation.lng],
    [ownerLocation.lat, ownerLocation.lng],
  ];

  return (
    <div className="h-[400px]">
      <MapContainer
        center={[courierLocation.lat, courierLocation.lng]}
        zoom={13}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[courierLocation.lat, courierLocation.lng]}>
          <Popup>Courier Location</Popup>
        </Marker>
        <Marker position={[ownerLocation.lat, ownerLocation.lng]}>
          <Popup>Product Owner Location</Popup>
        </Marker>
        <Polyline positions={polylinePositions} color="blue" />
      </MapContainer>
    </div>
  );
};

export default TrackingMap;
