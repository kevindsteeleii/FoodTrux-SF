import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { base } from './reducers/base';
import { filter } from './reducers/filter';


const middleware = applyMiddleware(thunk);
const rootReducer = combineReducers({
  base,
  filter
});

export const store = createStore(rootReducer, composeWithDevTools(middleware));