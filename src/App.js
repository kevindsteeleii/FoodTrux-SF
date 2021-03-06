import React from 'react';
import { connect } from 'react-redux';

import Modal from './containers/modal';
import Header from './containers/header';
import Title from './components/title';
import FilterDashboard from './containers/filterDashboard';
import MyMap from './mapComponents/map';
import TruckList from './containers/truckList';

import * as _actions from './redux/actions/baseActions';
import './stylesheets/App.scss';

class App extends React.Component {
  
  componentDidMount(){
    this.props.getTrucks();
  }

  render() {
    const { modal } = this.props;

    return (<div style={{ position: "relative" }}>
      {modal && <Modal/>}
      <div id="App">
        <Header>
          <Title/>
          <FilterDashboard/>
        </Header>
        <MyMap/>
        <TruckList/>
      </div>
      
    </div>);
  }
}

const mapStateToProps = (state) => (
  {
    foodTrucks: state.base.foodTrucks,
    modal: state.base.modalVisible
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    getTrucks: () => dispatch(_actions.getTrucks())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
