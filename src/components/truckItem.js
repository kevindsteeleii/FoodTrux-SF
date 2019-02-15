import React from 'react';
import { connect } from 'react-redux';
/* 
:@computed_region_bh8s_q3mv(pin): "28855"
:@computed_region_fyvs_ahh9(pin): "6"
:@computed_region_p5aj_wyqh(pin): "2"
:@computed_region_rxqg_mtj9(pin): "9"
:@computed_region_yftq_j783(pin): "12"
address(pin): "147 FREMONT ST"
applicant(pin): "Mini Mobile Food Catering"
approved(pin): "2018-07-10T00:00:00.000"
block(pin): "3719"
blocklot(pin): "3719003"
cnn(pin): "5861002"
dayshours(pin): "Mo-Fr:9AM-10AM"
expirationdate(pin): "2019-07-15T00:00:00.000"
facilitytype(pin): "Truck"
fooditems(pin): "Cold Truck: Corn Dogs: Noodle Soups: Candy: Pre-packaged Snacks: Sandwiches: Chips: Coffee: Tea: Various Beverages"
latitude(pin): "37.7901855706334"
locationdescription(pin): "FREMONT ST: END to NATOMA ST (116 - 169)"
longitude(pin): "-122.395471725809"
lot(pin): "003"
objectid(pin): "1183762"
permit(pin): "18MFF-0053"
priorpermit(pin): "1"
received(pin): "2018-07-10"
schedule(pin): "http://bsm.sfdpw.org/PermitsTracker/reports/report.aspx?title=schedule&report=rptSchedule&params=permit=18MFF-0053&ExportPDF=1&Filename=18MFF-0053_schedule.pdf"
status(pin): "APPROVED"
x(pin): "6013984.177"
y(pin): "2115732.906"
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
