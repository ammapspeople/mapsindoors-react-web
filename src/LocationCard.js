import React, { useRef, useEffect, useState } from 'react';

function ReactLocationInfo({ location }) {
    const elementRef = useRef(null);

    useEffect(() => {
        elementRef.current.location = location;
    });

    return <mi-location-info ref={elementRef} location={location}></mi-location-info>
}

export default function LocationCard(props) {

    function close() {
        console.log('Close');
        props.close();
    }

    return <mi-card>
        <button className="location-card-close" onClick={close}>&mdash;</button>
        <p className="location-card-category">{Object.values(props.location.properties.categories)[0]}</p>
        <h2 className="location-card-title">{props.location.properties.name}</h2>
        <ReactLocationInfo className="location-card-info" location={props.location}></ReactLocationInfo>
    </mi-card>;
}
