import React from 'react';
import * as _ from '../redux/actions/baseActions';
import { connect } from 'react-redux';

import XCircle from '../_icons/xCircle';

const ModalBox = ({selectedTruck, deselectTruck, modalToggle}) => {
  const { applicant, dayshours, fooditems } = selectedTruck;
  return(<div id="modal-box">
    <XCircle actions={[deselectTruck, modalToggle]}/>
    <div className="modal-text">
      <p><b>Name:</b> {applicant}</p>
      <p><b>Operational Hours:</b> {dayshours}</p>
      <p><b>Serves:</b> {fooditems.split(/:|;/).join(', ')}</p>
    </div>
    <button>Click for Directions</button>
  </div>)
}

const mapStateToProps = (state) => ({
  selectedTruck: state.base.selectedTruck,
  latitude: state.base.latitude,
  longitude: state.base.longitude
});

const mapDispatchToProps = (dispatch) => ({
  deselectTruck: () => dispatch(_.deselectTruck()),
  modalToggle: (val) => dispatch(_.modalToggle(val))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);