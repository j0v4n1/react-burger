import styles from "./modal.module.css";
import ReactDOM from "react-dom";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {useEffect, useRef} from "react";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {Transition} from "react-transition-group";
import PropTypes from "prop-types";
import ingredientsPropTypes from "../../utils/utils";

const Modal = ({data, selectedIngredientId, modalContent, onClose, isVisibleModal, setIsVisibleModal}) => {

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const keydownHandler = ({key}) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  const duration = 500;

  const nodeRef = useRef(null);

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    visibility: 'hidden',
    opacity: 0,
  }

  const transitionStyles = {
    entering: {opacity: 1, visibility: 'visible'},
    entered: {opacity: 1, visibility: 'visible'},
    exiting: {opacity: 0, visibility: 'hidden'},
    exited: {opacity: 0, visibility: 'hidden'},
  };


  const orderDetailsState = modalContent === "order-details" ? <OrderDetails/> : null;
  const ingredientDetailsState = modalContent === "ingredient-details" ?
    <IngredientDetails selectedIngredientId={selectedIngredientId} data={data}/> : null;

  return ReactDOM.createPortal(
    <Transition nodeRef={nodeRef} in={isVisibleModal} timeout={duration} unmountOnExit mountOnEnter>
      {state => (
          <div ref={nodeRef} className={styles.modals} style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <ModalOverlay onClose={() => {
              setIsVisibleModal(false)}
            }/>
            <div className={styles.modal}>
              <button
                onClick={onClose}
                aria-label="Закрыть"
                type="button"
                className={styles.closeButton}>
              </button>
              {orderDetailsState}
              {ingredientDetailsState}
            </div>
          </div>
        )}
    </Transition>,
    document.getElementById('react-modals')
  );
};

Modal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(ingredientsPropTypes)).isRequired,
  selectedIngredientId: PropTypes.string,
  modalContent: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  isVisibleModal: PropTypes.bool.isRequired,
  setIsVisibleModal: PropTypes.func.isRequired
}

export default Modal;
