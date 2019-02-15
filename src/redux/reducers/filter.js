import * as _ from '../../constants';
/* Reducer for filter modes wh/ can overlap */

const initialState = {
  filterWithinRadius: false,
  filterByFoodItems: false,
  filterWhenOpen: false,
  filterFoodList: []
}

export const filter = (state = initialState, { type, payload}) => {
  let { filterWithinRadius, filterByFoodItems, filterWhenOpen } = state;

  switch(type) {
    case _.FILTER_WITHIN_RADIUS:
      payload = filterWithinRadius;
      return {...state, filterWithinRadius};

    case _.FILTER_BY_FOOD_ITEMS:
      payload = filterByFoodItems;
      return {...state, filterByFoodItems};

    case _.FILTER_IF_OPEN:
      payload = filterWhenOpen;
      return {...state, filterWhenOpen};

    default:
      return state;
  }
}
