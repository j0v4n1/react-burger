import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const keydownHandler = ({ key }) => {
    if (key === "Escape") {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modals}>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById("react-modals")
  );
};

Modal.propTypes = {
  children: PropTypes.element,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
