import React, { useState, useRef, useEffect } from 'react';

function ReactListItemLocation({ location }) {
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.location = location;
    });

    return <mi-list-item-location ref={elementRef} location={location}></mi-list-item-location>
}

function Search() {
  const searchElementReference = useRef(null);

  let [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchElementReference.current.addEventListener('results', event => {
        setSearchResults(event.detail);
    });

    searchElementReference.current.addEventListener('cleared', event => {
        setSearchResults([]);
    });

  });

  return <div className="search">
      <mi-search ref={searchElementReference} mapsindoors="true" placeholder="Search"></mi-search>
      {searchResults.map(location =>
        <ReactListItemLocation key={location.id} location={location}></ReactListItemLocation>
      )}
  </div>
}

export default Search;
