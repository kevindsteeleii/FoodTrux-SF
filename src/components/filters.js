import React from 'react';
import connect from 'react-redux';

import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/Filter.scss';

// used to filter for the various 
const Filters = (props) => {
  return(<>
    <div id="filter-contents">

    </div>
  </>)
}

const mapStateToProps = (state) => ({
  radiusFilterStatus: state.filter.filterWithinRadius,
  foodFilterStatus: state.filter.filterByFoodItems,
  openFilterStatus: state.filter.filterWhenOpen,
  filterFoodList: state.filter.filteredFoodList
})

// const mapDispatchToProps = (dispatch) => ({
//   filterByRadius: (val) => dispatch(_filter.filterByRadius(val)),
//   filterByFoodItems: (val) => dispatch(_filter.filterByFoodItems(val)),

// })

export default connect(mapStateToProps)(Filters);