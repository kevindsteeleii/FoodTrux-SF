import React, { useState } from 'react';
import { connect } from 'react-redux';

import ModalBox from '../components/modalBox';
import '../stylesheets/modal.scss';

// TODO: Add modal that returns info of selected Truck
const Modal = (props) => {
  return (<>
    <div id="modal">
      <ModalBox/>
    </div>
  </>)
}

const mapStateToProps = (state) => ({
  selectedTruck: state.base.selectedTruck
})

export default connect(mapStateToProps)(Modal);
