/* ACTION.TYPES as constants*/
// base Reducer action types
export const CHANGE_COORDINATES = "CHANGE_COORDINATES";
export const TOGGLE_DIRECTIONS = "TOGGLE_DIRECTIONS";
export const SET_DESTINATION = "SET_DESTINATION";

export const CHANGE_ZOOM = "CHANGE_ZOOM";

export const TOGGLE_MODAL = "TOGGLE_MODAL";
export const GET_ALL_TRUCKS = "GET_ALL_TRUCKS";

export const ADD_TO_FOOD_LIST = "ADD_TO_FOOD_LIST";
export const ADD_TO_FOOD_HASH = "ADD_TO_FOOD_HASH";

export const SELECT_TRUCK = "SELECT_TRUCK";
export const DESELECT_TRUCK = "DESELECT_TRUCK";
export const ASYNC_ERROR = "ASYNC_ERROR";


// export const 

// SECTION: All the things for filter
export const RADIUS_CHANGE = "RADIUS_CHANGE";
export const FILTER_WITHIN_RADIUS = "FILTER_WITHIN_RADIUS";
export const FILTER_BY_FOOD_ITEMS = "FILTER_BY_FOOD_ITEMS";
export const FILTER_IF_OPEN = "FILTER_IF_OPEN";

// action types for filtered food list
export const GROW_FOOD_LIST = "GROW_FOOD_LIST";
export const SHRINK_FOOD_LIST = "SHRINK_FOOD_LIST";
export const CLEAR_FOOD_LIST = "CLEAR_FOOD_LIST";

// action type for filtering trucks
export const SET_FILTERED_TRUCKS = "SET_FILTERED_TRUCKS";
// END:

/* Base URLs */
export const ALL_TRUCKS_URL = "https://data.sfgov.org/resource/6a9r-agq8.json"

/* Measurements and such */
// export const R = 3959; // earth"s radius in miles