import axios from 'axios';
import * as _ from '../../constants';

export const changeCoords = (latitude, longitude) => {
  return (dispatch) => dispatch({type: _.CHANGE_COORDINATES, payload:[latitude, longitude]})
}

export const zoom = (payload) => {
  return (dispatch) => dispatch({ type: _.CHANGE_ZOOM, payload })
}

// wanted to add async/await to but... it doesn't play nice so...
/* Returns array of objects of usable food trucks */
export const getTrucks = () => {
  return (dispatch) => {
    axios('https://data.sfgov.org/resource/6a9r-agq8.json')
    .then(resp => resp.data)
    .then(presortData => {
      /* filters for trucks that  don't have latitude/longitude data, food items listed, an address, hours of operation,aren't approved, and not a truck */
    // eslint-disable-next-line
      const sortData = presortData.filter(item => {
      if ((item.latitude !== item.longitude) && !!item.fooditems && !!item.address && !!item.dayshours && item.status === 'APPROVED' && item.facilitytype === 'Truck') 
      {
        return item
      }
    })
      return dispatch({ type: _.GET_ALL_TRUCKS, payload: sortData})
    })
    .catch(err => dispatch({ type: _.ASYNC_ERROR, payload: err}))
  }
}
