import React, { useEffect } from 'react'
import L from 'leaflet';
import 'leaflet-routing-machine';
import { connect } from 'react-redux';

import TileLayer from './tileLayer';
import * as _ from '../redux/actions/baseActions';
import '../stylesheets/mapComponents.scss';



const Map = ({latitude, longitude, zoom, changeZoom, changeCoordinates, ...props}) => {
  let map;

  if (document.getElementById('map') !== undefined) {
    map = L.map('map', {
      center: new L.LatLng(latitude, longitude),
      zoom
    });
  
    setTimeout(()=> {
      map.invalidateSize();
    }, 100);

    const tileURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
    const mapTileLayer = new L.TileLayer(tileURL, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18, 
      minZoom: 12, 
      accessToken: process.env.REACT_APP_TOKEN, 
      id: 'mapbox.streets'
    });

    map.addLayer(mapTileLayer);

    const marker = L.marker(L.latLng(latitude, longitude), {
      draggable: true    
    });

    marker.addTo(map);
    marker.on('click dragend', e => {
      // e.type is the event so either 'click' or 'dragend'
      if (e.type === 'dragend'){
        // change lat and long
        const { lat, lng} = e.target._latlng;
        changeCoordinates(lat, lng);
      }
    });

    mapEvents(map, props);
  }
  
  return (
    <div id="map">
      {map !== undefined  && <></>}
    </div>
  )
}

const mapEvents = (map, props) => {
  map.on('zoom', (evt) => zoomMap(evt, props))
}

const zoomMap = (evt, {changeZoomLevel}) => {
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
