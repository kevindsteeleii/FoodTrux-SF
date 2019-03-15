import React from "react";
import { connect } from "react-redux";

import { selectTruck, modalToggle } from "../redux/actions/baseActions";
import "../stylesheets/components.scss";
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
  const { applicant } = props.truck;
  // eslint-disable-next-line
  const name = applicant.split(' ').filter((word, idx) => {
    if (idx < 3) {
      return word;
    }
  }).join(' ');
  
  return (<>
      <div className="truck-item" onClick={e => handleItemClick(e, props)}>
        <p>{name}</p>
      </div>
  </>);
}

// handles the onClick for truckItem
const handleItemClick = (e, props) => {
  const { selectTruck, modalToggle } = props;
  selectTruck(props.truck);
  modalToggle(true);
}
// *TODO: add an action that pops up a modal with expanded detail view of individual truck items
const mapDispatchToProps = (dispatch) => ({
  selectTruck: (val) => dispatch(selectTruck(val)),
  modalToggle: (val) => dispatch(modalToggle(val))
})

export default connect(null, mapDispatchToProps)(truckItem);
