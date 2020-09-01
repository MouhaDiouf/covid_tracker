import React from 'react';
import './Map.css';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';
import leaflet from 'leaflet';
function Map({ countries, center, zoom }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
        ></TileLayer>
        {/* Loop through all the countries and draw circles */}
      </LeafletMap>
    </div>
  );
}

export default Map;
