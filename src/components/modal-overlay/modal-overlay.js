import styles from "./modal-overlay.module.css";
import ReactDOM from "react-dom";

const ModalOverlay = ({children, showAnimation}) => {

  const modalRoot = document.getElementById("react-modals");

  return ReactDOM.createPortal(
    <div
      style={
        !showAnimation
          ? {opacity: 1}
          : {opacity: 0}
      }
      className={styles.modal}
    >
      {children}
    </div>,
    modalRoot
  );
};

export default ModalOverlay;
