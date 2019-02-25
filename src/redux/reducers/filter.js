import * as _ from '../../constants';
/* NOTE: Reducer for filter modes wh/ can overlap */
const initialState = {
  filterWithinRadius: true, // will probably never be toggled
  // NOTE: may want to add an option to increase/decrease the size by feet and/or miles
  radius: 0.189, // in miles by default it's appx. 1000 ft.
  filterByFoodItems: false,
  filterWhenOpen: false,
  filteredFoodList: [],
  filteredTrucks: []
}

export const filter = (state = initialState, { type, payload}) => {
  let { filterWithinRadius, radius, filterByFoodItems, filterWhenOpen, filteredFoodList, filteredTrucks } = state;

  switch(type) {

    case _.FILTER_WITHIN_RADIUS:
      payload = filterWithinRadius;
      return {...state, filterWithinRadius};

    case _.RADIUS_CHANGE:
      radius = payload;
      return {...state, radius};

    case _.FILTER_BY_FOOD_ITEMS:
      payload = filterByFoodItems;
      return {...state, filterByFoodItems};

    case _.GROW_FOOD_LIST:
      filteredFoodList = [...filteredFoodList, payload];
      return {...state, filteredFoodList};

    case _.SHRINK_FOOD_LIST:
      let { val, list } = payload;
      // eslint-disable-next-line 
      filteredFoodList = list.filter(item => {
        if (item !== val){
          return item
        }
      });
      return {...state, filteredFoodList};

    case _.CLEAR_FOOD_LIST:
      return {...state, filteredFoodList: [], filterByFoodItems: false};

    case _.FILTER_IF_OPEN:
      payload = filterWhenOpen;
      return {...state, filterWhenOpen};

    case _.SET_FILTERED_TRUCKS:
      filteredTrucks = payload;
      return {...state, filteredTrucks};

    default:
      return state;
  }
}
