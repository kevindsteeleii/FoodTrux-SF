import React, {useEffect, useState, createContext} from 'react';
import {connect} from 'react-redux';

import FilterDropDown from './filterDropDown';

import * as _action from '../redux/actions/baseActions';
import * as _help from '../helper';

const filterDash = (props) => {
  const [toggle, setToggle] = useState(false);

  return(<>
    <div id="filter-dash" onClick={e => handleClick(e, toggle, setToggle)}>
      <p className="title">Filter DashBoard <span><i className="fas fa-filter"/></span></p> 
    </div>
    <FilterDropDown toggle={toggle}/>
    </>);
}

/* INFO: toggles view and components inside of the filter dash */
const handleClick = (evt, toggle, setToggle) => {
  setToggle(!toggle);
  evt.persist();
}

/* INFO: handle radius filtering */
const handleRadiusFilter = ({latitude, longitude}, radius, trucks) => {
  let filterTrucks = trucks.filter(truck => {
    let truckLat = truck.latitude;
    let truckLng = truck.longitude;
    truckLat = parseFloat(truckLat);
    truckLng = parseFloat(truckLng);
    let distance = _help.distanceInMiles([latitude, longitude], [truckLat, truckLng]);
    if (distance <= radius) {
      return truck;
    }
  })
  return filterTrucks;
}

const mapStateToProps = (state) => ({
  foodTrucks: state.base.foodTrucks,
  latitude: state.base.latitude,
  longitude: state.base.longitude
});

const mapDispatchToProps = (dispatch) => ({
  setFilteredTrucks: (val) => dispatch(_action.setFilteredTrucks(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(filterDash);