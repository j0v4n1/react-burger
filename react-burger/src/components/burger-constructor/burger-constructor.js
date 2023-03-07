import {
  ConstructorElement,
  DragIcon,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import ModalOverlay from "../modal-overlay/modal-overlay";
import Modal from "../modal/modal";
import {useState} from "react";

const BurgerConstructor = ({data}) => {

  const [selectedIngredientId, setSelectedIngredientId] = useState(null);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  function changeModalContent(modalElement) {
    setModalContent(modalElement)
  }

  const bun = data.find((el) => el.type === "bun");

  return (
    <div className={styles.constructor}>
      <ul className={styles.mainList}>
        {!bun ? null :
          <li className="ml-8"
              onClick={() => {
                setIsVisibleModal(true);
                setSelectedIngredientId(bun._id);
                changeModalContent('ingredient-details')
              }}>
            <ConstructorElement
              type="top"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>}
        <li>
          <ul className={styles.list}>
            {data.map(({_id, name, price, image, type}) => {
              if (type !== "bun") {
                return (
                  <li key={_id} className={styles.item}
                      onClick={() => {
                        setIsVisibleModal(true);
                        setSelectedIngredientId(_id);
                        changeModalContent('ingredient-details')
                      }}>
                    <div className="mr-2">
                      <DragIcon type="primary"/>
                    </div>
                    <ConstructorElement
                      text={name}
                      price={price}
                      thumbnail={image}
                    />
                  </li>
                );
              }
              return null
            })}
            <ModalOverlay onClose={() => {
              setIsVisibleModal(false)
            }} isVisibleModal={isVisibleModal}>
              <Modal data={data}
                     selectedIngredientId={selectedIngredientId}
                     modalContent={modalContent}
                     onClose={() => {
                       setIsVisibleModal(false)
                     }}/>
            </ModalOverlay>
          </ul>
        </li>
        {bun ? (
          <li className="ml-8"
              onClick={() => {
                setIsVisibleModal(true);
                setSelectedIngredientId(bun._id);
                changeModalContent('ingredient-details')
              }}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={`${bun.name} (верх)`}
              price={bun.price}
              thumbnail={bun.image}
            />
          </li>
        ) : null}
      </ul>
      <div className={styles.bottom}>
        <div
          className="mr-10"
          style={{display: "flex", alignItems: "center"}}
        >
          <div className="mr-2 text text_type_digits-medium">610</div>
          <div className={styles.svgWrapper}>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
        <Button
          onClick={() => {
            setIsVisibleModal(true);
            changeModalContent('order-details');
          }}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default BurgerConstructor;
