import React from "react";
import { connect } from "react-redux";

import * as _ from "../redux/actions/baseActions";
import ModalBox from "../components/modalBox";
import "../stylesheets/modal.scss";

const Modal = (props) => {
  return (<>
    <div title="modal" id="modal" onClick={e => {handleModalToggle(e, props)}}>
      <ModalBox/>
    </div>
  </>)
}

const handleModalToggle = (e, { deselectTruck, modalToggle }) => {
  if (e.target.title === 'modal') {
    modalToggle(false);
    deselectTruck();
  }
  e.persist();
}

const mapDispatchToProps = (dispatch) => ({
  deselectTruck: () => dispatch(_.deselectTruck()),
  modalToggle: (val) => dispatch(_.modalToggle(val))
});

export default connect(null, mapDispatchToProps)(Modal);
