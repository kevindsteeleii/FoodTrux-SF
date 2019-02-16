 import React from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import '../stylesheets/Components.scss';

class truckListing extends React.Component {
  componentDidMount() {
    let { filterByFoodItems, filterWithinRadius, filterWhenOpen, filteredTrucks } = this.props;
    let searchTerm = '';
    if (filterByFoodItems) {
      // Appropriate filter
      searchTerm = 'filterByFoodItems';
    }
    if (filterWithinRadius) {
      // appropriate filter
      searchTerm = 'filterWithinRadius';
    }
    if (filterWhenOpen) {
      // appropriate filtering
      searchTerm = 'filterWhenOpen';
    }
    console.log('Search term is: ',searchTerm, '\nFiltered Trucks: ', filteredTrucks);
  }

  getFilteredTrucks = ({filteredTrucks}) => {
    return filteredTrucks.map(truck => <TruckItem key={`${truck.applicant}-${truck.objectid}`} truck={truck} />)
  }

  render() {
    const filteredTrucks = this.getFilteredTrucks(this.props);
    return(
    <div>
      {filteredTrucks}
    </div>
    );
   }
}

const mapStateToProps = (state) => ({
  filteredTrucks: state.filter.filteredTrucks,
  filterWithinRadius: state.filter.filterWithinRadius,
  filterByFoodItems: state.filter.filterByFoodItems,
  filterWhenOpen: state.filter.filterWhenOpen,
  latitude: state.base.latitude,
  longitude: state.base.longitude
});

 export default connect(mapStateToProps)(truckListing);



