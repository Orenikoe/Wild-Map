import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import './Map-style.css'

 function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAz4T6y4tt_IU8o-ngId8z0lO-wlwOpOrs",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <MarkerF position={center} />
    </GoogleMap>
  
  );
}

export default Home;