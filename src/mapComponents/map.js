import React from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import { connect } from 'react-redux';

import * as _ from '../redux/actions/baseActions';
import '../stylesheets/mapComponents.scss';

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
      accessToken: require('../constants').MAP_KEY, 
      id: 'mapbox.streets'
    });

    map.addLayer(mapTileLayer);

    const marker = L.marker(L.latLng(latitude, longitude), {
      draggable: true    
    })

    marker.addTo(map);
    marker.on('click dragend', e => {
      // e.type is the event so either 'click' or 'dragend'
      if (e.type === 'dragend'){
        // change lat and long
        const { lat, lng} = e.target._latlng;
        this.props.changeCoordinates(lat, lng);
      }
    })

  /*   // _NOTE: works but needs tweaking
    // const routeContol = L.Routing.control({
    //   waypoints: [
    //     L.latLng(latitude, longitude)
    //   ],
    //   show: true,
    //   routeWhileDragging: true
    // }).addTo(map);
 */
    // fixes partial loads with a manual resizing set asynchronously
    setTimeout(()=> {
      map.invalidateSize();
    }, 100);
    this.mapEvents(map);
    this.mapLayerOperations(mapTileLayer);
  }

  mapQuest = e => {
    debugger;
    console.log(e);
  }

  componentDidUpdate() {
    // fixes the partial loading problem with leaflet
    window.dispatchEvent(new Event('resize'));
  }

  /* Used to register/add map events and the like */
  mapEvents = (map) => {
    map.on('zoom', this.zoomMap)
  }



  /* Used for map tile stuff */
  mapLayerOperations = (layer) => {

  }

  zoomMap = evt => {
    this.props.changeZoomLevel(evt.target._zoom);
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