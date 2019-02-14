import React, { Component } from 'react';
import L from 'leaflet';
import { MAP_TOKEN as accessToken } from '../secret';
import '../stylesheets/Components.scss';

export default class Map extends Component {

  state = {
    latitude: 37.77,
    longitude: -122.42,
    zoom: 13
  }

  async componentDidMount(){
    const { latitude, longitude, zoom } = this.state;

    const map = L.map('map').setView([latitude, longitude], zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: accessToken,
    crossOrigin: true
    }).addTo(map);

    map.on('click', this.clickOnMap);
  }

  // click on map -> add a marker, marker lat and long kept in store
  clickOnMap = (evt) => {
    const { lat, lng } = evt.latlng;
    const { zoom } = this.state;

    let otherLayers = Object.keys(evt.target._layers);

    if (otherLayers.length >= 1) {
      otherLayers.forEach((layer, index) => {
        if (index > 0) {evt.target.removeLayer(evt.target._layers[layer])}
      })
    }
    
    this.setState({ latitude: lat, longitude: lng}, () => {
      if (lat !== null && lng !== null) {
        L.marker([ lat, lng], { draggable: true }).addTo(evt.target);
      }
    })
  }

  render() {
    return (
      <div id="map">
        
      </div>
    )
  }
}
