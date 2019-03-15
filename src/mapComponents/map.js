import React from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet.awesome-markers";
import { connect } from "react-redux";

import * as _help from "../helper";
import * as _ from "../redux/actions/baseActions";
import "../stylesheets/mapComponents.scss";

class Map extends React.Component {
  componentDidMount(){
    const { latitude, longitude, zoom, radius } = this.props;
    this.localTrucks = [];

    this.map = new L.map("map", {
      center: new L.LatLng(latitude, longitude), 
      zoom
    });

    const tileURL = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
    this.tileLayer = new L.TileLayer(tileURL, {
      attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
      maxZoom: 20, 
      minZoom: 12, 
      accessToken: process.env.REACT_APP_TOKEN, 
      id: "mapbox.streets"
    });

    this.map.addLayer(this.tileLayer);

    const marker = L.marker(L.latLng(latitude, longitude), {
      draggable: true
    });

    marker.addTo(this.map);    

    marker.on("click dragend", e => {
      // e.type is the event so either "click" or "dragend"
      if (e.type === "dragend"){
        // change lat and long
        const { lat, lng} = e.target._latlng;
        this.props.changeCoordinates(lat, lng);
      }
    });

    this.radarStyle = {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5
    }

    this.radarCircle = L.circle([latitude, longitude], {
      ...this.radarStyle,
      radius: 1609.34 * radius
    }).addTo(this.map);

    // fixes partial loads with a manual resizing set asynchronously
    setTimeout(()=> {
      this.map.invalidateSize();
    }, 100);
    window.dispatchEvent(new Event("resize"));

    this.routing = L.Routing.control({   
      waypoints: [
        L.latLng(latitude, longitude)
      ],
      collapsible: true,
      show: false
    }).addTo(this.map);

  }

  componentDidUpdate() {
    this.radarCircle.remove(); // remove original one, so it teleports
    this.localTrucks.forEach(localT => {
      localT.remove()
    });
    const { filteredTrucks, radius, selectTruck, modalToggle, hasDirections, destinationLat, destinationLng } = this.props;
    // fixes the partial loading problem with leaflet
    window.dispatchEvent(new Event("resize"));

    if (filteredTrucks !== undefined && filteredTrucks.length > 0) {
      filteredTrucks.forEach(truck => {
        let {latitude, longitude} = truck;

        let foodTruckIcon = L.AwesomeMarkers.icon({
          icon: 'map-pin',
          prefix: 'fa',
          className: 'map-pin'
        });

        if (_help.isTruckClose(this.props, latitude, longitude)) {
          const localTruck = L.marker([latitude, longitude], {icon: foodTruckIcon})
          .on("click", evt => {
            if (evt.type === 'click') {
              selectTruck(truck);
              modalToggle(true);
            }
          })
          .addTo(this.map);

          this.localTrucks.push(localTruck);
        }
      });
    }
    this.radarCircle = L.circle([this.props.latitude, this.props.longitude], {
      ...this.radarStyle,
      radius: 1609.34 * radius
    }).addTo(this.map);

      this.routing.setWaypoints([
        L.latLng(this.props.latitude, this.props.longitude),
        L.latLng(destinationLat, destinationLng)
      ]);

    if (hasDirections) {
      // this.routing.setWaypoints([
      //   L.latLng(this.props.latitude, this.props.longitude),
      //   L.latLng(destinationLat, destinationLng)
      // ]);

      // L.latLng(this.props.latitude, this.props.longitude),
      // L.latLng(destinationLat, destinationLng)
    }

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
  filteredTrucks: state.filter.filteredTrucks,
  radius: state.filter.radius,
  hasDirections: state.filter.hasDirections,
  destinationLat: state.filter.destinationLat,
  destinationLng: state.filter.destinationLng
});

const mapDispatchToProps = dispatch => ({
  changeCoordinates: (lat, lng) => dispatch(_.changeCoords(lat, lng)),
  changeZoomLevel: (zoom) => dispatch(_.zoom(zoom)),
  modalToggle: (val) => dispatch(_.modalToggle(val)),
  selectTruck: (truck) => dispatch(_.selectTruck(truck))
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);