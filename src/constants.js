/* ACTION.TYPES as constants*/
// base Reducer action types
export const CHANGE_COORDINATES = 'CHANGE_COORDINATES';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CHANGE_ZOOM = 'CHANGE_ZOOM';
export const RADIUS_CHANGE = 'RADIUS_CHANGE';
export const GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';

export const ADD_TO_FOODLIST = 'ADD_TO_FOODLIST';
export const ADD_TO_FOOD_HASH = 'ADD_TO_FOOD_HASH';

export const SELECT_TRUCK = 'SELECT_TRUCK';
export const ASYNC_ERROR = 'ASYNC_ERROR';

// filter modes Reducer action types
export const FILTER_WITHIN_RADIUS = 'FILTER_WITHIN_RADIUS';
export const FILTER_BY_FOOD_ITEMS = 'FILTER_BY_FOOD_ITEMS';
export const FILTER_IF_OPEN = 'FILTER_IF_OPEN';

// action types for filtered food list
export const GROW_FOOD_LIST = 'GROW_FOOD_LIST';
export const SHRINK_FOOD_LIST = 'SHRINK_FOOD_LIST';
export const CLEAR_FOOD_LIST = 'CLEAR_FOOD_LIST';

// action type for filtering trucks
export const FILTERED_TRUCKS = 'FILTERED_TRUCKS';

/* Base URLs */
export const ALL_TRUCKS_URL = 'https://data.sfgov.org/resource/6a9r-agq8.json'

/* Measurements and such */
// export const R = 3959; // earth's radius in miles