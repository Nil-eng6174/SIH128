"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default Leaflet marker icons in Next.js
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function Map() {
  const center: [number, number] = [19.0760, 72.8777]; // Example center

  return (
    <MapContainer center={center} zoom={11} style={{ height: "100%", width: "100%", borderRadius: "0.5rem", zIndex: 0 }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Cluster / Hotspot Indicator */}
      <Circle 
        center={[19.1, 72.85]} 
        pathOptions={{ color: 'red', fillColor: '#fca5a5', fillOpacity: 0.4 }} 
        radius={3000} 
      >
        <Popup>
          <strong>Cluster Alert</strong><br/>
          4 cases of Suspected Contagious Disease
        </Popup>
      </Circle>

      {/* Individual Cases */}
      <Marker position={[19.1, 72.85]} icon={icon}>
        <Popup>Case 8942: 3 Cows</Popup>
      </Marker>
      <Marker position={[19.12, 72.84]} icon={icon}>
        <Popup>Case 8943: 1 Cow</Popup>
      </Marker>
      <Marker position={[19.05, 72.9]} icon={icon}>
        <Popup>Case 8941: 1 Buffalo</Popup>
      </Marker>

    </MapContainer>
  );
}
