import React, { Children } from "react";
import { FaTimes } from "react-icons/fa";
import { AppContext, useGlobalContext } from "../Context/Context";

import "./Modal.css";
const Modal = (props) => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen && `show-modal`} `}>
      <div className="modal-container">
        {props.children}
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
