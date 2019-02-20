import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';

import * as _help from '../helper';
import TruckItem from '../components/truckItem';
import '../stylesheets/components.scss';

const TruckList = (props) => {
  const { 
    filterWithinRadius, /* filterByFoodItems, // pending the other filters of course
    filterWhenOpen, filteredFoodList, */
    latitude, longitude, radius, filteredTrucks
  } = props;

  const [trucks, setTrucks] = useState(filteredTrucks);

  let sortTrucks;
  useEffect(() => {

    sortTrucks = filteredTrucks;
    if (filterWithinRadius) {
      sortTrucks = sortTrucks.filter(truck => {
        let truckLat = truck.latitude;
        let truckLng = truck.longitude;
        truckLat = parseFloat(truckLat);
        truckLng = parseFloat(truckLng);
        let distance = _help.distanceInMiles([latitude, longitude], [truckLat, truckLng]);
        
        if (distance <= radius){
          return truck;
        }
      })
    }

    /* Other sorts pending */
    
    setTrucks(sortTrucks);
  })

  return(<div id="truck-list">
    {getFilteredTrucks(trucks)}
  </div>)
}

const getFilteredTrucks = (filteredTrucks) => {
  return filteredTrucks.map(truck => <TruckItem key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
}

const mapStateToProps = (state) => ({
  latitude: state.base.latitude,
  longitude: state.base.longitude,
  filteredTrucks: state.filter.filteredTrucks,
  radius: state.filter.radius,
  filterWithinRadius: state.filter.filterWithinRadius,
  filterByFoodItems: state.filter.filterByFoodItems,
  filterWhenOpen: state.filter.filterWhenOpen,
  filteredFoodList: state.filter.filteredFoodList
})

export default connect(mapStateToProps)(TruckList);