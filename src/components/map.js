import React from 'react';
import L from 'leaflet';
import { MAP_TOKEN as accessToken } from '../secret';
import '../stylesheets/Components.scss';

export default class Map extends React.Component {

  state = {
    latitude: 37.7946,
    longitude: -122.3999,
    zoom: 13  
  }

  componentDidMount(){
    const { latitude, longitude, zoom } = this.state;

    let map = L.map('map').setView([latitude, longitude], zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    minZoom: 12,
    id: 'mapbox.streets',
    
    accessToken: accessToken,
    crossOrigin: true
    }).addTo(map);
    map.invalidateSize();
    this.mapEvents(map);
  }

  /* Used to register/add map events and the like */
  mapEvents = (map) => {
    map.on('click', this.clickOnMap);
  }

  componentDidUpdate() {
    // fixes the partial loading problem with leaflet
    window.dispatchEvent(new Event('resize'));
  }

  // click on map -> add a marker, marker lat and long kept in store
  clickOnMap = (evt) => {
    const { lat, lng } = evt.latlng;

    let otherLayers = Object.keys(evt.target._layers);

    if (otherLayers.length >= 1) {
      otherLayers.forEach((layer, index) => {
        if (index > 0) {evt.target.removeLayer(evt.target._layers[layer])}
      })
    }

    this.setState({ latitude: lat, longitude: lng}, () => {

      if (lat !== null && lng !== null) {
        L.marker([ lat, lng], { draggable: true }).addTo(evt.target);
        // debugger;
        evt.target.options.center = [lat, lng];
        evt.target.panTo(evt.latlng);
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
