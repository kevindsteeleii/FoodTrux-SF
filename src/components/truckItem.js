import React from 'react';
import { connect } from 'react-redux';
/* Truck Object Internals (for reference)
:@computed_region_bh8s_q3mv: "28855"
:@computed_region_fyvs_ahh9: "6"
:@computed_region_p5aj_wyqh: "2"
:@computed_region_rxqg_mtj9: "9"
:@computed_region_yftq_j783: "12"
address: "147 FREMONT ST"
applicant: "Mini Mobile Food Catering"
approved: "2018-07-10T00:00:00.000"
block: "3719"
blocklot: "3719003"
cnn: "5861002"
dayshours: "Mo-Fr:9AM-10AM"
expirationdate: "2019-07-15T00:00:00.000"
facilitytype: "Truck"
fooditems: "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages"
latitude: "37.7901855706334"
locationdescription: "FREMONT ST: END to NATOMA ST (116 - 169)"
longitude: "-122.395471725809"
lot: "003"
objectid: "1183762"
permit: "18MFF-0053"
priorpermit: "1"
received: "2018-07-10"
schedule: "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0053&ExportPDF=1&Filename=18MFF-0053_schedule.pdf"
status: "APPROVED"
x: "6013984.177"
y: "2115732.906"
*/
const truckItem = (props) =>{
  const { 
    address, applicant, dayshours,
    fooditems, latitude, longitude,
    schedule, status
  } = props
  return (<>
      <div className="truck-item"
        
      ></div>
  </>);
}

/* Retrieves food items of truck as an array */
const getFoodList = (fooditems) => fooditems.replace('.', '').split(': ');

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(truckItem);
