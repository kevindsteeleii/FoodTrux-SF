import axios from 'axios';
import {MTA_BUS_KEY as SECRET} from './secret';

const URLBase = 'http://bustime.mta.info/api/where/stops-for-location.json?';
 
// eslint-disable-next-line
const proxy = {
  host: '127.0.0.1',
  port: 3000
}
const config = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : "*",
    'X-Requested-With': 'XMLHttpRequest'
  },
  proxy: proxy
}


const Adapter = {
  defaultCall: async function(lat, long, diameter=0.0015) {
    try {
       const response = await axios.get(`${URLBase}lat=${lat}&lon=${long}&latSpan=${diameter}&lonSpan=${diameter}&key=${SECRET}`, config)
       console.log(response)
       return response;
    } catch (err) {
      console.log(err);
    }
     // http://bustime.mta.info/api/where/stops-for-location.json?lat=40.8316&lon=-73.9099&latSpan=0.005&lonSpan=0.0015&key=<key>
  }
}

export default Adapter;