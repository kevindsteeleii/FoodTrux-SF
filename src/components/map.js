import React, { Component } from 'react';
import L from 'leaflet';
import { MAP_TOKEN as accessToken } from '../secret';
import '../stylesheets/Components.scss';

export default class Map extends Component {

  state = {
    latitude: null,
    longitude: null
  }
  async componentDidMount(){
    const map = L.map('map').setView([37.77, -122.42], 13);
    
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken,
    crossOrigin: true
    }).addTo(map);
    this.mapFunctions(map)
  }

  clickOnMap = (evt) => {
    // should add a
    debugger;
    alert(`Clicked on map at ${evt.latlng}`)
    const { lat, lng } = evt.latlng;
    this.setState({ latitude: lat, longitude: lng})
  }

  mapFunctions = (map) => {
    const { latitude, longitude } = this.state;

    map.on('click', this.clickOnMap);

    if (latitude !== null && longitude !== null) {
      L.marker([ latitude, longitude]).addTo(map);
      debugger;
    }

    console.log('testing');
  }

  render() {
    return (
      <div id="map" /* onClick={this.clickOnMap} */>
        
      </div>
    )
  }
}
