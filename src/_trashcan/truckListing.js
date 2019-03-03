import React from 'react';
import { connect } from 'react-redux';

import TruckItem from '../components/truckItem';
import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/components.scss'

class TruckListing extends React.Component{

  componentDidMount() {
    const { trucks, initFilterTrucks } = this.props;
    initFilterTrucks(trucks);
  }

  componentDidUpdate() {
    const { filterByRadius } = this.props;
    filterByRadius(this.props);
    this.truckItems = this.getTruckItems();
  }

  getTruckItems = () => {
    const { filteredTrucks } = this.props;
    return filteredTrucks.map(truck => <TruckItem lat={parseFloat(truck.latitude)} lng={parseFloat(truck.longitude)} key={`${truck.applicant}-${truck.objectid}`} truck={truck} />);
  }

  render() {
    return(<div id="truck-list">
      {this.truckItems}
    </div>);
  }
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
});

export default connect(mapStateToProps, mapDispatchToProps)(TruckListing);