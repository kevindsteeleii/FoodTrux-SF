import React from 'react';
import { connect } from 'react-redux';

import FilterDropDown from './filterDropDown';
import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/Filter.scss';

/* HOC used to house logic and inputs for the filtering functionality and their options */
class FilterDashboard extends React.Component{

  state = {
    dropDownToggle: false
  }
  componentDidUpdate() {
    // set initial value of local filtered trucks to all and then pass through multiple if's to determine if it needs to be filtered
    const { getFilteredTrucks, foodTrucks } = this.props;
    let filteredTrucks = foodTrucks;
    //_NOTE: set filter stuff here
    //check for _____ filter and adjust accordingly

    getFilteredTrucks(filteredTrucks);
  }

  // toggles the dropdown menu
  handleClick = evt => {
    const { dropDownToggle } = this.state;
    this.setState({ dropDownToggle: !dropDownToggle });
    evt.persist();
  }

  render() {
    const { dropDownToggle } = this.state;

    return(<><div id="filter-dash" onClick={this.handleClick}>
      <p className="title">Filter DashBoard <span><i className="fas fa-filter"/></span></p> 
      <FilterDropDown toggle={dropDownToggle}>
        <div>Testing</div>
      </FilterDropDown>
    </div></>);
  }
}

const mapStateToProps = (state) => ({
  foodTrucks: state.base.foodTrucks,
  filterByRadius: state.filter.filterByRadius,
  filterByFoodItems: state.filter.filterByFoodItems,
  filterWhenOpen: state.filter.filterWhenOpen
});

const mapDispatchToProps = (dispatch) => ({
  getFilteredTrucks: (val) => dispatch(_filter.getFilteredTrucks(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDashboard);
