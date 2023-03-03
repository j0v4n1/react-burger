import styles from "./modal.module.css";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import {useEffect} from "react";

const Modal = ({data, selectedIngredientId, modalContent, onClose}) => {

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });

  const keydownHandler = ({key}) => {
    if (key === 'Escape') {
      onClose();
    }
  };

  const orderDetailsState = modalContent === "order-details" ? <OrderDetails/> : null;
  const ingredientDetailsState = modalContent === "ingredient-details" ?
    <IngredientDetails selectedIngredientId={selectedIngredientId} data={data}/> : null;

  return (
    <div className={styles.modal}>
      <button
        onClick={onClose}
        aria-label="Закрыть"
        type="button"
        className={styles.closeButton}
      ></button>
      {orderDetailsState}
      {ingredientDetailsState}
    </div>
  );
};

export default Modal;
