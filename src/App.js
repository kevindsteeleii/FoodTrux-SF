import React, { Component } from 'react';
import axios from 'axios';
import './stylesheets/App.scss';

class App extends Component {

  state = {
    foodTrucks : [],
    nearbyFoodTrucks: [],
    longitude: null,
    latitude: null,
  }

  async componentDidMount(){
    const response = await axios('https://data.sfgov.org/resource/6a9r-agq8.json');
    const data = await response.data;
    this.setState({ foodTrucks: data });
  }

  testButton = async(evt) => {
    evt.persist();
  }

  render() {
    return (<>
      <div id="App">
        <button onClick={this.testButton}>Test</button><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium unde, debitis molestiae tempore itaque aperiam. Optio laborum aperiam saepe quis magnam praesentium harum minus expedita repudiandae accusamus sequi eos, repellat in dicta illo temporibus at qui quo numquam amet!
      </div>
      <div id="mapid"></div>
    </>);
  }
}

export default App;
