import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './MapContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gmaps</h1>
        </header>
        <p className="App-intro">
        <MapContainer />
        </p>
      </div>
    );
  }
}

export default App;
