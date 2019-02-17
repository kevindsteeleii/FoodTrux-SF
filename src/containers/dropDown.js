import React from 'react';
import { connect } from 'react-redux';

import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/Filter.scss';

class FilterDropDown extends React.Component{

  state = {
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { toggle } = this.props;
    const prevToggle = prevProps.toggle;
    if (toggle !== prevToggle) {
      this.checkToggle(this.props);
    }
  }

  checkToggle = ({toggle}) => {
    const filterDropdown = document.getElementById('filter-dropdown');
    if (!!filterDropdown) {
      if (toggle) {
        filterDropdown.classList.remove('hidden');
        filterDropdown.classList.add('visible');
      } else {
        filterDropdown.classList.remove('visible');
        filterDropdown.classList.add('hidden');
      }
    }
  }

  render() {
    return(<>
      <div id="filter-dropdown hidden"></div>
    </>);
  }
}

const mapStateToProps = (state) => ({
  foodTrucks: state.base.foodTrucks,
  filterByRadius: state.filter.filterByRadius,
  filterByFoodItems: state.filter.filterByFoodItems,
  filterWhenOpen: state.filter.filterWhenOpen
})

const mapDispatchToProps = (dispatch) => ({
  filterByRadius: (val) => dispatch(_filter.filterByRadius(val)),
  filterByFoodItems: (val) => dispatch(_filter.filterByFoodItems(val)),
  growFoodList: (val) => dispatch(_filter.growFoodList(val)),
  shrinkFoodList: (val, foodList) => dispatch(_filter.shrinkFoodList(val, foodList)),
  clearFoodList: () => dispatch(_filter.clearFoodList())
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterDropDown);