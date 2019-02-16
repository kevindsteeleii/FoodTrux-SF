import * as _ from '../../constants';

export const filterByRadius = (val) => {
  return (dispatch) => { dispatch({type: _.FILTER_WITHIN_RADIUS, payload: val}) }
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
export const getFilteredTrucks = (val) => {
  return (dispatch) =>  { dispatch({ type: _.FILTERED_TRUCKS, payload: val}) }
}