import React from 'react';
import { connect } from 'react-redux';

import { selectTruck } from '../redux/actions/baseActions';
import '../stylesheets/Components.scss';
/* Truck Object Internals (for reference)
address: "147 FREMONT ST"
applicant: "Mini Mobile Food Catering"
approved: "2018-07-10T00:00:00.000"
dayshours: "Mo-Fr:9AM-10AM"
expirationdate: "2019-07-15T00:00:00.000"
fooditems: "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages"
latitude: "37.7901855706334"
locationdescription: "FREMONT ST: END to NATOMA ST (116 - 169)"
longitude: "-122.395471725809"
objectid: "1183762"
status: "APPROVED"
*/

const truckItem = (props) =>{
  const { applicant } = props.truck
  return (<>
      <div className="truck-item" onClick={e => handleItemClick(e, props)}>
        <p>{applicant}</p>
      </div>
  </>);
}

/* Retrieves food items of truck as an array */
const getFoodList = (fooditems) => fooditems.replace('.', '').split(': ')
  .filter(item => {
    if (item !== 'Cold Truck') {
      return item;
    }
  });

// handles the onClick for truckItem
const handleItemClick = (e, props) => {
  const { 
    /* address, applicant, dayshours, */
    fooditems/* , latitude, longitude,
    schedule, status */
  } = props.truck;
  const foodList = getFoodList(fooditems);
  const { selectTruck } = props;
  console.log(`Food List: ${foodList}`);
  selectTruck(props.truck);
}
// *TODO: add an action that pops up a modal with expanded detail view of individual truck items
const mapDispatchToProps = (dispatch) => ({
  selectTruck: (val) => dispatch(selectTruck(val))
})

export default connect(null, mapDispatchToProps)(truckItem);
