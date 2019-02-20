import * as _ from '../../constants';

const initialState = {
  latitude: 37.7946,
  longitude: -122.3999,
  zoom: 13,
  // radius: 0.189, // default range appx. 1000 ft.
  foodTrucks : [],
  foodList: [],
  foodHash: {},
  selectedTruck: null,
  modalVisible: false
};

export const base = (state = initialState, { type, payload }) => {
  /* lattitude, longitude, zoom, filter, and state local variables for changing state */
  let latitude, longitude, zoom, /* radius, */ foodTrucks, selectedTruck, modalVisible, foodList, foodHash;

  switch(type){
    case _.CHANGE_COORDINATES:
      [latitude, longitude] = payload;
      return {...state, latitude, longitude};

    case _.CHANGE_ZOOM:
      zoom = payload;
      return {...state, zoom};

    // case _.RADIUS_CHANGE:
    //   radius = payload;
    //   return {...state, radius};

    case _.GET_ALL_TRUCKS:
      foodTrucks = payload;
      return {...state, foodTrucks};

    case _.ADD_TO_FOODLIST:
      foodList = [...state.foodList, payload];
      return {...state, foodList};

    case _.ADD_TO_FOOD_HASH:
      foodHash = payload;
      return {...state, foodHash};

    case _.SELECT_TRUCK:
      selectedTruck = payload;
      return {...state, selectedTruck};

    case _.TOGGLE_MODAL:
      modalVisible = payload;
      return {...state, modalVisible}

    case _.ASYNC_ERROR:
    default:
      return state;
  }
}