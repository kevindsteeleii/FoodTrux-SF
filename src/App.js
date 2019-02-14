import React from 'react';
import { connect } from 'react-redux';

import Map from './components/map';
import * as _actions from './redux/actions/baseActions';
import './stylesheets/App.scss';

class App extends React.Component {

  componentDidMount(){
    this.props.getTrucks();
  }

  render() {
    return (<>
      <div id="App">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium unde, debitis molestiae tempore itaque aperiam. Optio laborum aperiam saepe quis magnam praesentium harum minus expedita repudiandae accusamus sequi eos, repellat in dicta illo temporibus at qui quo numquam amet!
      </div>
      <Map/>
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
    getTrucks: () => dispatch(_actions.getTrucks())
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
