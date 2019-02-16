import React from 'react';
import { connect } from 'react-redux';

import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/Components.scss';

/* HOC used to house logic and inputs for the filtering functionality and their options */
class FilterDashboard extends React.Component{
  // state will handle the needs of interactivity for the filter state/s
  state = {
    
  }

  componentDidUpdate() {
    // set initial value of local filtered trucks to all and then pass through multiple if's to determine if it needs to be filtered
    const { getFilteredTrucks, foodTrucks } = this.props;
    let filteredTrucks = foodTrucks;
    // set filter stuff here
    //check for _____ filter and adjust accordingly

    getFilteredTrucks(filteredTrucks);
  }

  render() {
    const { children } = this.props;

    return(<><div id="filter-dash">
      {children}
      <h1>Filter DashBoard</h1>
    </div></>);
  }
}

const mapStateToProps = (state) => ({
  foodTrucks: state.base.foodTrucks
})

const mapDispatchToProps = (dispatch) => ({
  filterByRadius: (val) => dispatch(_filter.filterByRadius(val)),
  filterByFoodItems: (val) => dispatch(_filter.filterByFoodItems(val)),
  growFoodList: (val) => dispatch(_filter.growFoodList(val)),
  shrinkFoodList: (val, foodList) => dispatch(_filter.shrinkFoodList(val, foodList)),
  clearFoodList: () => dispatch(_filter.clearFoodList()),
  getFilteredTrucks: (val) => dispatch(_filter.getFilteredTrucks(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterDashboard);
