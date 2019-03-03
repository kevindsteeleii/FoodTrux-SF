import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/components.scss';
/* REFACTOR: turn into a class to slow down the callstack */
const TruckList = (props) => {

  useEffect(() => {
    filterTrucks(props);
  });

  return(<div id="truck-list">
    {getFilteredTrucks(props)}
  </div>)
}

const getFilteredTrucks = ({filteredTrucks}) => {
  // let filteredTrucks = _help.getCloseTrucks(props); // make them into the filtered trucks in state here!!
  const truckItems =  filteredTrucks.map(truck => <TruckItem key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
  return truckItems;
}

const filterTrucks = (props) => {
  props.filterByRadius(props);
}

const mapStateToProps = (state) => ({
  trucks: state.base.foodTrucks,
  lat: state.base.latitude,
  lng: state.base.longitude,
  radius: state.filter.radius,
  filteredTrucks: state.filter.filteredTrucks
});

const mapDispatchToProps = (dispatch) => ({
  initFilterTrucks: (trucks) => dispatch(_filter.initFilterTrucks(trucks)),
  filterByRadius: (props) => dispatch(_filter.filterByRadius(props))
})


export default connect(mapStateToProps, mapDispatchToProps)(TruckList);