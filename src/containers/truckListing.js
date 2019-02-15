import { connect } from 'react-redux';

import '../stylesheets/Components.scss';
 import React from 'react'
 
const truckListing = (props) => {
   return (
     <div>
       
     </div>
   )
 }

const mapStateToProps = (state) => ({
  trucksListed: state.base.foodTrucks,
  trucksFiltered: state.base.filteredTrucks
})

export default connect(mapStateToProps)(truckListing);