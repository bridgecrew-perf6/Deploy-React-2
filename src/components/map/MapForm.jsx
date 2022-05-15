import React, {useState} from "react";
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from "leaflet";



const icon = L.icon({
  iconUrl: "./static/map/location-100.png",
  iconSize: [38, 38],
});

export default function MapForm({ positionDefault = [-21.453611, 47.085833] }) {

  const [markers, setMarkers] = useState([-21.453611, 47.085833])
  const handleClick = (e) => {
    console.log(e.latlng)
    setMarkers([e.latlng.lat, e.latlng.lng])
  }

  return (
    
    <Map center={positionDefault}  zoom={15.5} style={{ height: '500px', width: '100%' }} onClick={handleClick}>
            <TileLayer
             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
             url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
  
            <Marker position={markers} icon={icon}>
                <Popup>
                    {markers.lat}
                    <br />
                    {markers.log}
                </Popup>
            </Marker>
     </Map>
  );
}
