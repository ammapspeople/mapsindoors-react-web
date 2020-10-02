import React, { useState, useRef, useEffect } from 'react';

function ReactListItemLocation({ location, resultClicked }) {
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.location = location;

        elementRef.current.addEventListener('locationClicked', e => {
            resultClicked(e.detail);
        });
    });

    return <mi-list-item-location ref={elementRef} location={location}></mi-list-item-location>
}

function Search(props) {
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
        <ReactListItemLocation resultClicked={props.resultClicked} key={location.id} location={location}></ReactListItemLocation>
      )}
  </div>
}

export default Search;
