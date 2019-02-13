import React, { Component } from 'react';
import axios from 'axios';
import { MTA_BUS_KEY as SECRET } from './secret';
// import adapter from './Adapter';
import './stylesheets/App.scss';

class App extends Component {
  testButton = async(evt) => {
    const URLBase = 'http://bustime.mta.info/api/where/stops-for-location.json?';
    // adapter.defaultCall(40.8316, -73.9099)
    const response = await axios(`${URLBase}lat=${40.8316}&lon=${-73.9099}&latSpan=${0.0015}&lonSpan=${0.0015}&key=${SECRET}`)
    const data = await response.json()
    console.log(data)
  }

  render() {
    return (
      <div id="App">
        <button onClick={this.testButton}>Test</button><br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi praesentium unde, debitis molestiae tempore itaque aperiam. Optio laborum aperiam saepe quis magnam praesentium harum minus expedita repudiandae accusamus sequi eos, repellat in dicta illo temporibus at qui quo numquam amet!
      </div>
    );
  }
}

export default App;
