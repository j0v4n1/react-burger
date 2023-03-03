import styles from "./modal-overlay.module.css";
import Modal from "../modal/modal";
import ReactDOM from "react-dom";
import { useState } from "react";

const ModalOverlay = ({ children, isVisibleModal }) => {
  const modalRoot = document.getElementById("react-modals");

  return ReactDOM.createPortal(
    <div
      style={
        isVisibleModal
          ? { visibility: "visible", opacity: 1 }
          : { visibility: "hidden", opacity: 0 }
      }
      className={styles.modal}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default ModalOverlay;