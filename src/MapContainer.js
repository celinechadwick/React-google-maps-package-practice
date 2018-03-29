import {GoogleApiWrapper,Map,Marker,InfoWindow, Listing} from 'google-maps-react';
import React, {Component} from 'react';
const style={height:'50%', width:'50%'};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      places: []
    }

    // binding this to event-handler functions
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    return (
      <div>
      <Map
         google={this.props.google}
         style={style}
         initialCenter={{
           lat: 40.7549,
           lng: -73.984016
         }}
         zoom={14}
         onClick={this.onMapClicked.bind(this)}
       >
      </Map>
    </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDb_vXDLSBgM8gxr_kuZLTJwoGQcjDPRDQ')
})(MapContainer)
