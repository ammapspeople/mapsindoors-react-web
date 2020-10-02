import React, { useRef, useEffect, useState } from 'react';

function ReactLocationInfo({ location }) {
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.location = location;
    });

    return <mi-location-info ref={elementRef} location={location}></mi-location-info>
}

export default function LocationDetails(props) {
    return <React.Fragment>
        <p className="location-details-category">{Object.values(props.location.properties.categories)[0]}</p>
        <h2 className="location-details-title">{props.location.properties.name}</h2>
        <ReactLocationInfo className="location-details-info" location={props.location}></ReactLocationInfo>
    </React.Fragment>
}
