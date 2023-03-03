import styles from "./modal.module.css";
import IngredientDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";

const Modal = ({
  data,
  onHandleCloseModal,
  selectedIngredientId,
  modalContent,
}) => {
  const orderDetailsState =
    modalContent === "order-details" ? <OrderDetails /> : null;
  const ingredientDetailsState =
    modalContent === "ingredient-details" ? (
      <IngredientDetails
        selectedIngredientId={selectedIngredientId}
        data={data}
      />
    ) : null;
  console.log(modalContent);
  return (
    <div className={styles.modal}>
      <button
        onClick={onHandleCloseModal}
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
