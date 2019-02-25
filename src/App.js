import React from 'react';
import { connect } from 'react-redux';

import Header from './containers/header';
import Title from './components/title';
import FilterDashboard from './containers/filterDashboard';
import Map from './mapComponents/map';
import TruckList from './containers/truckList';

import * as _actions from './redux/actions/baseActions';
import * as _filter from './redux/actions/filterActions';
import './stylesheets/App.scss';

class App extends React.Component {
  
  componentDidMount(){
    this.props.getTrucks();
    const { foodTrucks } = this.props;
    this.props.initFilterTrucks(foodTrucks);
  }

  componentDidUpdate() {
    const { foodTrucks } = this.props;
    this.props.initFilterTrucks(foodTrucks);
  }

  render() {
    return (<>
      <div id="App">
        <Header>
          <Title/>
          <FilterDashboard/>
        </Header>
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
    initFilterTrucks: (trucks) => dispatch(_filter.initFilterTrucks(trucks))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
