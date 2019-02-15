import * as _ from '../../constants';

const initialState = {
  latitude: JSON.parse(localStorage.getItem('latitude')) || 37.7946,
  longitude: JSON.parse(localStorage.getItem('longitude')) || -122.3999,
  zoom: JSON.parse(localStorage.getItem('zoom')) || 13,
  radius: JSON.parse(localStorage.getItem('radius')) || 0.0015,
  filter: JSON.parse(localStorage.getItem('filter')) || '',
  foodTrucks : [],
  filteredTrucks: [],
  nearbyTrucks: [],
  selectedTruck: null
};

export const base = (state = initialState, { type, payload }) => {
  /* lattitude, longitude, zoom, filter, and state local variables for changing state */
  let latitude, longitude, zoom, filter, radius, foodTrucks, filteredTrucks, nearbyTrucks, selectedTruck;

  switch(type){
    case _.CHANGE_COORDINATES:
      [latitude, longitude] = payload;
      return {...state, latitude, longitude};

    case _.CHANGE_ZOOM:
      zoom = payload;
      return {...state, zoom};

    case _.FILTER_BY:
      filter = payload;
      return {...state, filter};

    case _.RADIUS_CHANGE:
      radius = payload;
      return {...state, radius};

    case _.GET_ALL_TRUCKS:
      foodTrucks = payload;
      return {...state, foodTrucks};

    case _.FILTER_TRUCKS:
      filteredTrucks = payload;
      return {...state, filteredTrucks};

    case _.GET_NEARBY_TRUCKS:
      nearbyTrucks = payload;
      return {...state, nearbyTrucks};

    case _.SELECT_TRUCK:
      selectedTruck = payload;
      return {...state, selectedTruck};

    
    case _.ASYNC_ERROR:
    default:
      return state;
  }
}