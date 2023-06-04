import styles from "../burger-constructor-ingredient/burger-constructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { removeIngredient } from "../../services/slices/burger-constructor";
import {useDrag, useDrop} from 'react-dnd';

const BurgerConstructorIngredient = ({ ingredient, findCard, moveCard }) => {

  const id = ingredient.uniqueId
  const dispatch = useDispatch();
  const originalIndex = findCard(id).index

  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: 'ingredient',
      item: { id, originalIndex },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
      end: (item, monitor) => {
        const { id: droppedId, originalIndex } = item
        const didDrop = monitor.didDrop()
        if (!didDrop) {
          moveCard(droppedId, originalIndex)
        }
      },
    }),
    [id, originalIndex, moveCard],
  )

  const [, drop] = useDrop(
    () => ({
      accept: 'ingredient',
      hover({ id: draggedId }) {
        if (draggedId !== id) {
          const { index: overIndex } = findCard(id)
          moveCard(draggedId, overIndex)
        }
      },
    }),
    [findCard, moveCard],
  )
  const opacity = isDragging ? 0 : 1
  const handleRemoveIngredient = () => {
    dispatch(removeIngredient(ingredient.uniqueId))
  }
  return (
    <li key={ingredient.uniqueId} className={styles.item} ref={(node) => drag(drop(node))} style={{ opacity }}>
      <div className="mr-2">
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={handleRemoveIngredient}
      />
    </li>
  );
};

export default BurgerConstructorIngredient;
