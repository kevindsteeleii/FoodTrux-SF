// react funcional component w/ hooks for map
import React, { /* useState,  */useEffect} from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { connect } from 'react-redux';

import * as _ from '../redux/actions/baseActions';
import '../stylesheets/mapComponents.scss';

const Map = ({ latitude, longitude, zoom, filteredTrucks, radius, changeCoordinates, changeZoomLevel }) => {
  const map = new L.map('map', {
    center: new L.LatLng(latitude, longitude), 
    zoom
  });

  return(<div id="map">

  </div>)
}

/* Used to register/add map events and the like */
const mapEvents = (map) => {
  map.on('zoom', zoomMap)
}

/* Used for map tile stuff */
const mapLayerOperations = (layer) => {

}

const zoomMap = (evt, { changeZoomLevel }) => {
  changeZoomLevel(evt.target._zoom);
}

const mapStateToProps = state => ({
  latitude: state.base.latitude,
  longitude: state.base.longitude,
  zoom: state.base.zoom,
  filteredTrucks: state.base.filteredTrucks,
  radius: state.filter.radius
});

const mapDispatchToProps = dispatch => ({
  changeCoordinates: (lat, lng) => dispatch(_.changeCoords(lat, lng)),
  changeZoomLevel: (zoom) => dispatch(_.zoom(zoom))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);