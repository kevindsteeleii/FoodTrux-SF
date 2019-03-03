import React from 'react';
import { connect } from 'react-redux';

const ModalBox = ({selectedTruck}) => {
  return(<div id="modal-box">
    <span>Put Truck info here.</span>
  </div>)
}

const mapStateToProps = (state) => ({
  selectedTruck: state.base.selectedTruck
});

export default connect(mapStateToProps)(ModalBox);