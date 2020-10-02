import React from 'react';
import './App.css';

import Map from './Map';
import Nav from './Navigation';

function AppTitle(props) {
  return <header className="app-title">
      <h1>{props.title}</h1>
  </header>;
}

function App() {
  return (
    <div className="App">
      <AppTitle title="Welcome to MapsIndoors"></AppTitle>
      <Nav navIsActive={false}></Nav>
      <Map></Map>
    </div>
  );
}

export default App;
