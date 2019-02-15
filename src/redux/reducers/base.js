import { CHANGE_COORDINATES, CHANGE_ZOOM, FILTER_RESULT, RADIUS_CHANGE, GET_ALL_TRUCKS, FILTER_TRUCKS, GET_NEARBY_TRUCKS, ASYNC_ERROR  } from '../../constants';

const initialState = {
  latitude: JSON.parse(localStorage.getItem('latitude')) || 37.7946,
  longitude: JSON.parse(localStorage.getItem('longitude')) || -122.3999,
  zoom: JSON.parse(localStorage.getItem('zoom')) || 13,
  radius: JSON.parse(localStorage.getItem('radius')) || 0.0015,
  filter: JSON.parse(localStorage.getItem('filter')) || '',
  foodTrucks : [],
  filteredTrucks: [],
  nearbyTrucks: []
}

export const base = (state = initialState, { type, payload }) => {
  /* lattitude, longitude, zoom, filter, and state local variables for changing state */
  let latitude, longitude, zoom, filter, radius, foodTrucks, filteredTrucks, nearbyTrucks, copyState = {...state};

  switch(type){
    case CHANGE_COORDINATES:
      [latitude, longitude] = payload;
      return {...state, latitude, longitude};

    case CHANGE_ZOOM:
      zoom = payload;
      return {...state, zoom};

    case FILTER_RESULT:
      filter = payload;
      return {...state, filter};

    case RADIUS_CHANGE:
      radius = payload;
      return {...state, radius};

    case GET_ALL_TRUCKS:
      foodTrucks = payload;
      return {...state, foodTrucks};

    case FILTER_TRUCKS:
      filteredTrucks = payload;
      return {...state, filteredTrucks};

    case GET_NEARBY_TRUCKS:
      nearbyTrucks = payload;
      return {...state, nearbyTrucks};

    
    case ASYNC_ERROR:
    default:
      return state;
  }
}