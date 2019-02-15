import React from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';

import { MAP_TOKEN as accessToken } from '../secret';
import * as _ from '../redux/actions/baseActions';
import '../stylesheets/Components.scss';

class Map extends React.Component {

  componentDidMount(){
    const { latitude, longitude, zoom } = this.props;

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
    window.dispatchEvent(new Event('resize'));
  }

  componentDidUpdate() {
    // fixes the partial loading problem with leaflet
    window.dispatchEvent(new Event('resize'));
  }

  /* Used to register/add map events and the like */
  mapEvents = (map) => {
    map.on('click', this.clickOnMap);
    map.on('zoom', this.zoomMap)
  }

  zoomMap = evt => {
    this.props.changeZoomLevel(evt.target._zoom);
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

    this.props.changeCoordinates(lat, lng);

    if (lat !== null && lng !== null) {
      L.marker([ lat, lng], { draggable: true }).addTo(evt.target);
      evt.target.options.center = [lat, lng];
      evt.target.panTo(evt.latlng);
    }
  }

  render() {
    return (
      <div id="map">
        
      </div>
    )
  }
}

const mapStateToProps = state => ({
  latitude: state.base.latitude,
  longitude: state.base.longitude,
  zoom: state.base.zoom
})

const mapDispatchToProps = dispatch => ({
  changeCoordinates: (lat, lng) => dispatch(_.changeCoords(lat, lng)),
  changeZoomLevel: (zoom) => dispatch(_.zoom(zoom))
})

export default connect(mapStateToProps, mapDispatchToProps)(Map);