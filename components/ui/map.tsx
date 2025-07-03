"use client";

import { Location } from "@/app/generated/prisma";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// Import LatLngTuple from leaflet or react-leaflet for explicit typing
import { LatLngTuple } from "leaflet";

// adding custom marker
const customMarkerIconUrl = "/locatiopin.svg";
const customIcon = L.icon({
  iconUrl: customMarkerIconUrl,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

interface MapProps {
  itineraries: Location[];
}

export default function Map({ itineraries }: MapProps) {
  // Define a default center as LatLngTuple
  const defaultCenter: LatLngTuple = [0, 0];
  const initialCenter: LatLngTuple =
    itineraries.length > 0
      ? ([itineraries[0].lat, itineraries[0].lng] as LatLngTuple)
      : defaultCenter;

  return (
    <MapContainer
      center={initialCenter}
      zoom={8}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >

    <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {itineraries.map((location, key) => (
        <Marker
          icon={customIcon}
          key={key}
          position={[location.lat, location.lng]}
        >
          <Popup>{location.locationTitle}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
