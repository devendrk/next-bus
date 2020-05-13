import React from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import styles from "./LeafletMap.module.css";
const defaultLocation: LatLngTuple = [60.29186, 25.04134];
const zoom: number = 12;

const LeafletMap: React.FC = ({ children }) => {
  return (
    <Map id={styles.mapId} center={defaultLocation} zoom={zoom}>
      <Marker position={defaultLocation} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      {children}
    </Map>
  );
};

export default LeafletMap;
