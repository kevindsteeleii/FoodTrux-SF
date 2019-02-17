import {combineReducers } from 'redux';
import { base } from './base';
import { filter } from './filter';

const rootReducer = combineReducers({
  base,
  filter
});

export default rootReducer;