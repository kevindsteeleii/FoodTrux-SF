import React from 'react';
import connect from 'react-redux';

import * as _filter from '../redux/actions/filterActions';
import '../stylesheets/filter.scss';
const FilterRange = (props) => {
  return(<>
    <div id="filter-range">

    </div>
  </>)
}

const mapStateToProps = (state) => ({
  radiusFilterStatus: state.filter.filterWithinRadius
})

const mapDispatchToProps = (dispatch) => ({
  filterByRadius: (val) => dispatch(_filter.filterByRadius(val))
})


export default connect(mapStateToProps, mapDispatchToProps)(FilterRange);