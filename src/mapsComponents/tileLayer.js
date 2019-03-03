import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { connect } from 'react-redux';

import '../stylesheets/mapComponents.scss';

const TileLayer = ({ map }) => {
  const tileURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
  const mapTileLayer = new L.TileLayer(tileURL, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18, 
    minZoom: 12, 
    accessToken: process.env.REACT_APP_TOKEN, 
    id: 'mapbox.streets'
  });
  map.addLayer(mapTileLayer);
  return (<></>)
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(TileLayer);
