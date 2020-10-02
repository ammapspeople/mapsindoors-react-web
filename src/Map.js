import React, { useState, useRef, useEffect } from 'react';

import LocationCard from './LocationCard';

function Map() {
  let [location, setLocation] = useState({});

  const mapElementReference = useRef(null); // We need a reference to the mi-map in order to add event listeners.

  useEffect(() => { // The function passed to useEffect will run after the render is committed to the screen.
      mapElementReference.current.addEventListener('mapsIndoorsReady', () => {
        mapElementReference.current.panTo({lat: 38.8979504120527, lng: -77.03665279788513});
      });

      mapElementReference.current.addEventListener('locationClicked', location => {
        setLocation(location.detail);
    });
  });
  return <div className="map">
    <mi-map ref={mapElementReference} zoom="18" position-control="TOP_CENTER" mi-api-key="demo" gm-api-key="AIzaSyBNhmxW2OntKAVs7hjxmAjFscioPcfWZSc" floor-selector="RIGHT_CENTER"></mi-map>
    {location.id &&
        <LocationCard close={() => setLocation({})} className="map-card" location={location}></LocationCard>
    }
  </div>
}

export default Map;
