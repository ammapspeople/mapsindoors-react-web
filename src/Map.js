import React, { useState, useRef, useEffect } from 'react';

import Search from './Search';
import LocationDetails from './LocationDetails';

function Map() {
  // I cannot get react-router to work from within the event listeners, so I create my own home-rolled poor man's "router"
  const pages = Object.freeze({
    NONE: 'NONE',
    SEARCH: 'SEARCH',
    LOCATION_DETAILS: 'LOCATION_DETAILS'
  });
  let [page, setPage] = useState(pages.NONE);

  let [location, setLocation] = useState({});

  const mapElementReference = useRef(null); // We need a reference to the mi-map in order to add event listeners.

  useEffect(() => { // The function passed to useEffect will run after the render is committed to the screen.
      mapElementReference.current.addEventListener('mapsIndoorsReady', () => {
        mapElementReference.current.panTo({lat: 38.8979504120527, lng: -77.03665279788513});
      });

      mapElementReference.current.addEventListener('locationClicked', location => {
        setLocationAndPage(location.detail);
    });
  });

  function close() {
    console.log('Close');
    setPage(pages.NONE);
  }

  function setLocationAndPage(location, panTo = false) {
    setLocation(location);
    setPage(pages.LOCATION_DETAILS);

    if (panTo === true) {
      mapElementReference.current.panTo({ lat: location.geometry.coordinates[1], lng: location.geometry.coordinates[0]});
    }
  }

  return <div className="map">
    <mi-map ref={mapElementReference} zoom="18" position-control="TOP_CENTER" mi-api-key="demo" gm-api-key="AIzaSyBNhmxW2OntKAVs7hjxmAjFscioPcfWZSc" floor-selector="RIGHT_CENTER"></mi-map>
    {page !== pages.NONE &&
      <mi-card>
        <button className="card-close" onClick={() => close()}>&mdash;</button>

        { page === pages.SEARCH &&
          <Search resultClicked={setLocationAndPage}></Search>
        }

        { page === pages.LOCATION_DETAILS &&
          <LocationDetails location={location}></LocationDetails>
        }
      </mi-card>
    }

    {page === pages.NONE &&
      <mi-card class="no-page">
        <button className="card-close" onClick={() => setPage(pages.SEARCH)}>▲</button>
      </mi-card>
    }
  </div>
}

export default Map;
