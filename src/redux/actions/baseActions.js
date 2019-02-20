import axios from 'axios';
import * as _ from '../../constants';

// changes latitude/longitude coordinates based on clicking on map/ dragging marker
export const changeCoords = (latitude, longitude) => {
  return (dispatch) => dispatch({type: _.CHANGE_COORDINATES, payload:[latitude, longitude]});
}

// changes zoom based on map data
export const zoom = (payload) => {
  return (dispatch) => dispatch({ type: _.CHANGE_ZOOM, payload });
}

// selects corresponding truck from click selection in truck listing
export const selectTruck = (payload) => {
  return (dispatch) => dispatch({ type: _.SELECT_TRUCK, payload });
}

// toggles modal on/off
export const modalToggle = (payload) => {
  return (dispatch) => dispatch({ type: _.TOGGLE_MODAL, payload });
}

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
          return item;
        }
      })
      return dispatch({ type: _.GET_ALL_TRUCKS, payload: sortData});
    }) // if error occurs...
    .catch(err => dispatch({ type: _.ASYNC_ERROR, payload: err}));
  }
}

/* Provides a non repeating list of food items available, used in conjunction with food items filter actions 
  it also generates a hash with k-v pairs of food item as key and value is an array of the id's of corresponding food trucks that carry that item
*/
export const getAvailableFoods = (trucks) => {
  return (dispatch) =>{
    const unFilteredFoods = [];
    const foodHash = {};

    // just appends the formatted string with the list of items with
    // looks like this "Tacos:Burritos:Tortas:Quesadillas:Chips & Salsa & Various Beverages"
    for(let truck of trucks) {
      unFilteredFoods.push(truck.fooditems);
    }
    
  }
}
