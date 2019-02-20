import React from 'react';
import connect from 'react-redux';

import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/filter.scss';
const FilterFood = (props) => {
  return(<>
    <div id="filter-food">

    </div>
  </>)
}

const mapStateToProps = (state) => ({
  foodFilterStatus: state.filter.filterByFoodItems,
  filterFoodList: state.filter.filteredFoodList
})

const mapDispatchToProps = (dispatch) => ({
  filterByFoodItems: (val) => dispatch(_filter.filterByFoodItems(val)),
  growFoodList: (val) => dispatch(_filter.growFoodList(val)),
  shrinkFoodList: (val, list) => dispatch(_filter.shrinkFoodList(val, list)),
  clearFoodList: () => dispatch(_filter.clearFoodList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterFood);