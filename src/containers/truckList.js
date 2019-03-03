import React from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import * as _help from '../helper';
import '../stylesheets/components.scss';

const TruckList = (props) => {

  return(<div id="truck-list">
    {getFilteredTrucks(props)}
  </div>)
}

const getFilteredTrucks = (props) => {
  const truckItems =  _help.getCloseTrucks(props)
  return truckItems.map(truck => <TruckItem key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
}

const mapStateToProps = (state) => ({
  lat: state.base.latitude,
  lng: state.base.longitude,
  radius: state.filter.radius,
  filteredTrucks: state.filter.filteredTrucks
});

export default connect(mapStateToProps)(TruckList);