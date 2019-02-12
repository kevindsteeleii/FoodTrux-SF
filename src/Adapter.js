import axios from 'axios';
import SECRET from './secret';
const URLBase = 'http://bustime.mta.info/api/where/stops-for-location.json?'
const Adapter = {
  defaultCall: async function(lat, long, diam=0.015) {
    const RES = await axios.get(`${URLBase}lat=${lat}&lon=${long}latSpan=${diam}&lonSpan=${diam}&key=${SECRET}`)
    return await RES.json();
    // http://bustime.mta.info/api/where/stops-for-location.json?lat=40.8316&lon=-73.9099&latSpan=0.005&lonSpan=0.0015&key=<key>
  },
}

export default Adapter;