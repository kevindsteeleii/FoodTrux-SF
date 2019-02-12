import axios from 'axios';
const URLBase = 'http://bustime.mta.info/api/where/stops-for-location.json?'
const Adapter = {
  defaultCall: async function(lat, long, diam=0.015) {
    const RES = await axios.get(`${URLBase}lat=${lat}&lon=${long}latSpan=${diam}&lonSpan=${diam}&key=${}`)
    return await RES.json();
    // http://bustime.mta.info/api/where/stops-for-location.json?lat=40.8316&lon=-73.9099&latSpan=0.005&lonSpan=0.0015&key=4b675b38-8cd5-484d-bc9f-7ad20c1b60a8
  },
}

export default Adapter;