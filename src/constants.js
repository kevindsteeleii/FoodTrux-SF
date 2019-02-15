/* ACTION.TYPES as constants*/
// base Reducer action types
export const CHANGE_COORDINATES = 'CHANGE_COORDINATES';
export const CHANGE_ZOOM = 'CHANGE_ZOOM';
export const FILTER_BY = 'FILTER_BY';
export const RADIUS_CHANGE = 'RADIUS_CHANGE';
export const GET_ALL_TRUCKS = 'GET_ALL_TRUCKS';
export const FILTER_TRUCKS = 'FILTER_TRUCKS';
export const GET_NEARBY_TRUCKS = 'GET_NEARBY_TRUCKS';
export const SELECT_TRUCK = 'SELECT_TRUCK';
export const ASYNC_ERROR = 'ASYNC_ERROR';

// filter modes Reducer action types
export const FILTER_WITHIN_RADIUS = 'WITHIN_RADIUS';
export const FILTER_BY_FOOD_ITEMS = 'BY_FOOD_ITEM';
export const FILTER_IF_OPEN = 'IS_OPEN';

/* Base URLs */
export const ALL_TRUCKS_URL = 'https://data.sfgov.org/resource/6a9r-agq8.json'

/* Measurements and such */
export const R = 3959; // earth's radius in miles