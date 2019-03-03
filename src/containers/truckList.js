import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import * as _filter from '../redux/actions/filterActions';
import * as _help from '../helper';
import '../stylesheets/components.scss';
/* REFACTOR: turn into a class to slow down the callstack */
const TruckList = (props) => {

  return(<div id="truck-list">
    {getFilteredTrucks(props)}
  </div>)
}

const getFilteredTrucks = (props) => {
  const truckItems =  _help.getCloseTrucks(props)
  return truckItems.map(truck => <TruckItem lat={parseFloat(truck.latitude)} lng={parseFloat(truck.longitude)} key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
}

const mapStateToProps = (state) => ({
  trucks: state.base.foodTrucks,
  lat: state.base.latitude,
  lng: state.base.longitude,
  radius: state.filter.radius,
  filteredTrucks: state.filter.filteredTrucks
});

const mapDispatchToProps = (dispatch) => ({
  initFilterTrucks: (trucks) => dispatch(_filter.initFilterTrucks(trucks))
})


export default connect(mapStateToProps, mapDispatchToProps)(TruckList);