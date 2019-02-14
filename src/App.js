import React, { Component } from 'react';
import axios from 'axios';
import to from 'await-to-js';
import Map from './components/map';
import './stylesheets/App.scss';

class App extends Component {

  state = {
    foodTrucks : [],
    nearbyFoodTrucks: [],
    longitude: null,
    latitude: null,
  }

  async componentDidMount(){
    let response, error, data;
    [error, response] = await to(axios('https://data.sfgov.org/resource/6a9r-agq8.json'));

    if (error) {
      console.error(error);
    }
    if (!response) {
      console.log('Promise unresolved. No response...');
    } else {
      data = await response.data;
      this.setState({ foodTrucks: data });
    }
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

export default App;
