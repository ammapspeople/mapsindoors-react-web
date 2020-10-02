import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {
  const mapElementReference = useRef(null); // We need a reference to the mi-map in order to add event listeners.

  useEffect(() => { // The function passed to useEffect will run after the render is committed to the screen.
      mapElementReference.current.addEventListener('mapsIndoorsReady', () => {
        mapElementReference.current.panTo({lat: 38.8979504120527, lng: -77.03665279788513});
      });
  });

  return (
    <div className="App">
      <mi-card>
        <mi-map ref={mapElementReference} zoom="18" position-control="TOP_CENTER" mi-api-key="demo" gm-api-key="AIzaSyBNhmxW2OntKAVs7hjxmAjFscioPcfWZSc" floor-selector="RIGHT_CENTER"></mi-map>
      </mi-card>
    </div>
  );
}

export default App;
