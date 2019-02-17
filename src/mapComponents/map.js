import React from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';

import { MAPBOX_API_TOKEN as accessToken, THUNDER_FOREST_API_TOKEN  } from '../secret';
import * as _ from '../redux/actions/baseActions';
import '../stylesheets/MapComponents.scss';

class Map extends React.Component {

  componentDidMount(){
    const { latitude, longitude, zoom } = this.props;

    const map = new L.map('map', {
      center: new L.LatLng(latitude, longitude), 
      zoom
    });

    const tileURL = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}';
    const mapTileLayer = new L.TileLayer(tileURL, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18, 
      minZoom: 12, 
      accessToken, 
      id: 'mapbox.streets'
    });

    map.addLayer(mapTileLayer);
    // fixes partial loads with a manual resizing set asynchronously
    setTimeout(()=> {
      map.invalidateSize();
    }, 100)
    this.mapEvents(map);
    this.mapLayerOperations(mapTileLayer);
  }

  componentDidUpdate() {
    // fixes the partial loading problem with leaflet
    window.dispatchEvent(new Event('resize'));
  }

  /* Used to register/add map events and the like */
  mapEvents = (map) => {
    map.on('click', evt => this.clickOnMap(evt, map));
    map.on('zoom', this.zoomMap)
  }

  /* Used for map tile stuff */
  mapLayerOperations = (layer) => {

  }

  zoomMap = evt => {
    this.props.changeZoomLevel(evt.target._zoom);
  }

  // click on map -> add a marker, marker lat and long kept in store
  clickOnMap = (evt, map) => {
    const { lat, lng } = evt.latlng;

    let otherLayers = Object.keys(evt.target._layers);

    if (otherLayers.length >= 1) {
      otherLayers.forEach((layer, index) => {
        if (index > 0) {evt.target.removeLayer(evt.target._layers[layer])}
      })
    }

    this.props.changeCoordinates(lat, lng);

    const marker = L.marker([ lat, lng], { draggable: true, interactive: true }).addTo(evt.target);
    map.invalidateSize();
    evt.target.options.center = [lat, lng];
    evt.target.panTo(evt.latlng);
    marker.on('dragend', this.handleMarkerDrag);
  }

  handleMarkerDrag = (e) => {
    let {lat, lng} = e.target._latlng;
    this.props.changeCoordinates(lat, lng);
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
  zoom: state.base.zoom,
  filteredTrucks: state.filter.filteredTrucks
});

const mapDispatchToProps = dispatch => ({
  changeCoordinates: (lat, lng) => dispatch(_.changeCoords(lat, lng)),
  changeZoomLevel: (zoom) => dispatch(_.zoom(zoom))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);