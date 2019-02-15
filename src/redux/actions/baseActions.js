import axios from 'axios';
import * as _ from '../../constants';

export const changeCoords = (latitude, longitude) => {
  return (dispatch) => dispatch({type: _.CHANGE_COORDINATES, payload:[latitude, longitude]})
}

export const zoom = (payload) => {
  return (dispatch) => dispatch({ type: _.CHANGE_ZOOM, payload })
}
// wanted to add async/await to but... it doesn't play nice so...
export const getTrucks = () => {
  return (dispatch) => {
    axios('https://data.sfgov.org/resource/6a9r-agq8.json')
    .then(resp => dispatch({ type: _.GET_ALL_TRUCKS, payload: resp.data}))
    .catch(err => dispatch({ type: _.ASYNC_ERROR, payload: err}))
  }
}
