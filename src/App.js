import React from 'react';
import { connect } from 'react-redux';

import Title from './components/title';
import FilterDash from './containers/filterDashboard';
import Map from './mapComponents/map';
import TruckList from './containers/truckList';

import * as _actions from './redux/actions/baseActions';
import * as _filter from './redux/actions/filterActions';
import './stylesheets/App.scss';

class App extends React.Component {
  
  componentDidMount(){
    this.props.getTrucks();
  }

  render() {
    return (<>
      <div id="App">
        <FilterDash>
          <Title/>
        </FilterDash>
        <Map/>
        <TruckList/>
      </div>
    </>);
  }
}

const mapStateToProps = (state) => (
  {
    foodTrucks: state.base.foodTrucks
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getTrucks: () => dispatch(_actions.getTrucks()),
    getFilteredTrucks: (val) => dispatch(_filter.getFilteredTrucks(val)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
