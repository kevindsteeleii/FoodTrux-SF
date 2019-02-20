import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import '../stylesheets/Components.scss';

const TruckList = (props) => {
  const trucks = getFilteredTrucks(props);

  return(<div id="truck-list">
    {trucks}
  </div>)
}

const getFilteredTrucks = ({filteredTrucks}) => {
  return filteredTrucks.map(truck => <TruckItem key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
}

const mapStateToProps = (state) => ({
  filteredTrucks: state.filter.filteredTrucks
})

export default connect(mapStateToProps)(TruckList);