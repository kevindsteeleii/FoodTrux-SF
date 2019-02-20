import React from 'react';

import { connect } from 'react-redux';
import '../stylesheets/components.scss';

const Modal = (props) => {
  return(<><div id="modal">
  </div></>)
}

const mapStateToProps = (state) => ({
  selectedTruck: state.base.selectedTruck,
  modalToggle: state.base.modalToggle
})

export default connect(mapStateToProps)(Modal);