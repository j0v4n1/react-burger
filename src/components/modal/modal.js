import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import {useEffect} from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import PropTypes from "prop-types";
import {remove} from "../../services/slices/ingredient-details-slice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Modal = ({children}) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  const handleCloseIngredientDetails = () => {
    navigate('/');
    dispatch(remove());
  }

  const keydownHandler = ({key}) => {
    if (key === "Escape") {
      handleCloseIngredientDetails()
    }
  };

  return ReactDOM.createPortal(
    <div className={styles.modals}>
      <ModalOverlay onClose={handleCloseIngredientDetails}/>
      <div className={styles.modal}>{children}</div>
    </div>,
    document.getElementById("react-modals")
  );
};

Modal.propTypes = {
  children: PropTypes.element,
};

export default Modal;
