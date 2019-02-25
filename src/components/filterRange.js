import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as _helper from '../helper';
import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/filter.scss';

const FilterRange = (props) => {
  const { radius, radiusChange } = props;
  const [ feet, setFeet ] = useState(Math.floor(radius * 5180));
  

  const handleVolumeChange = (evt) => {
    let miles = parseFloat(evt.target.value);
    radiusChange(miles);
    setFeet(Math.floor(miles * 5180));
  }

  return(<>
    <div id="filter-range">
      {radius >= 1 
        ?<span>{radius.toFixed(3)} Miles</span> 
        :<span>{feet} Feet</span>}

      <input type="range" name="radius" value={radius} min={0.0579} max={6.0} id="radius-slider" step={.0005} onChange={handleVolumeChange}/>
    </div>
  </>)
}

/* const handleRadiusFilter = ({latitude, longitude, foodTrucks}, radius) => {
  let filterTrucks = foodTrucks.filter(truck => {
    let truckLat = truck.latitude;
    let truckLng = truck.longitude;
    radius = parseFloat(radius);
    truckLat = parseFloat(truckLat);
    truckLng = parseFloat(truckLng);
    let distance = _helper.distanceInMiles([latitude, longitude], [truckLat, truckLng]);
 
    if (distance !== undefined && distance <= radius) {
      return truck;
    }
  });
  return filterTrucks;
} */

const mapStateToProps = state => ({
  radius: state.filter.radius
});

const mapDispatchToProps = (dispatch) => ({
  radiusChange: (val) => dispatch(_filter.radiusChange(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterRange);