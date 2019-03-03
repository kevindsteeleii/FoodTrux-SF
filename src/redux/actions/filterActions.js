import * as _ from '../../constants';
import * as _help from '../../helper';

// loads once upon initial mount, by default filter trucks are all available trucks, the filter conditions reduces the number
export const initFilterTrucks = (val) => {
  /* Cull trucks w/ location info I'm using i.e. lat and lng
    REFACTOR: check for other data to be used for geolocation, maybe a table idk ;)
  */
  // eslint-disable-next-line 
  const payload = val.filter(truck => {
    const {latitude, longitude} = truck;
    if (latitude !== undefined && longitude !== undefined) {
      return truck;
    }
  })
  return (dispatch) => dispatch({ type: _.SET_FILTERED_TRUCKS, payload })
}
 // eslint-disable-next-line 
export const filterByRadius = ({radius, lat, lng, trucks}) => {
   // eslint-disable-next-line 
  const payload = trucks.filter(truck => {
    let truckLat = parseFloat(truck.latitude);
    let truckLng = parseFloat(truck.longitude);

    let distance = _help.distanceInMiles([lat, lng], [truckLat, truckLng]);
    if (distance !== undefined && distance <= radius) {
      return truck;
    }

  })
  return (dispatch) => { dispatch({type: _.SET_FILTERED_TRUCKS, payload }) }
}

// changes radius to search for food trucks in
export const radiusChange = (val) => {
  return (dispatch) => { dispatch({type: _.RADIUS_CHANGE, payload: val}) }
}

// turns on the filter by food items
export const filterByFoodItems = (val) => {
  return (dispatch) => { dispatch({type: _.FILTER_BY_FOOD_ITEMS, payload: val}) }
}

// adds single food search term to list/array of terms
export const growFoodList = (val) => {
  return (dispatch) => { dispatch({ type: _.GROW_FOOD_LIST, payload: val }) }
}

// takes val to remove and list and returns a filtered array to add to
export const shrinkFoodList = (val, list) => {
  return (dispatch) => { dispatch({ type: _.SHRINK_FOOD_LIST, payload: {val, list} }) }
}

// resets food filter list to empty and toggles the filter by food state to false
export const clearFoodList = () => {
  return (dispatch) => { 
    dispatch({ type: _.FILTER_BY_FOOD_ITEMS, payload: false });
    dispatch({ type: _.CLEAR_FOOD_LIST, payload: null});
  }
}

export const filterIfOpen = (val) => {
  return (dispatch) => { dispatch({type: _.FILTER_WITHIN_RADIUS, payload: val}) }
}

// onComponentDidMount -> filter vals are checked and filtered list is returned 
export const setFilteredTrucks = (val) => {
  return (dispatch) =>  { dispatch({ type: _.SET_FILTERED_TRUCKS, payload: val}) }
}