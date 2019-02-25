import React from 'react';
import { connect } from 'react-redux';

import FilterDropDown from './filterDropDown';
import * as _actions from '../redux/actions/filterActions';
import '../stylesheets/filter.scss';

/* HOC used to house logic and inputs for the filtering functionality and their options */
class FilterDashboard extends React.Component{

  state = {
    dropDownToggle: false
  }
  // toggles the dropdown menu
  handleClick = evt => {
    const { dropDownToggle } = this.state;
    this.setState({ dropDownToggle: !dropDownToggle });
    evt.persist();
  }

  render() {
    const { dropDownToggle } = this.state;
    // filterByRadius(this.props);
    return(<>
    <div id="filter-dash" onClick={this.handleClick}>
      <p className="title">Filter DashBoard <span><i className="fas fa-filter"/></span></p> 
    </div>
    <FilterDropDown toggle={dropDownToggle}>
        <div>Testing</div>
    </FilterDropDown>
    </>);
  }
}

const mapStateToProps = (state) => ({
  foodTrucks: state.base.foodTrucks,
  filteredTrucks: state.filter.filteredTrucks,
  radius: state.filter.radius,
  latitude: state.base.latitude,
  longitude: state.base.longitude
});

const mapDispatchToProps = (dispatch) => ({
  filterByRadius: (props) =>  dispatch(_actions.filterByRadius(props)),  // TODO: other filters pending...
  initFilterTrucks: (allTrucks) => dispatch(_actions.initFilterTrucks(allTrucks))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDashboard);
