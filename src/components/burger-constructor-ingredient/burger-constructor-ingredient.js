import styles from '../burger-constructor-ingredient/burger-constructor-ingredient.module.css';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { reOrder, removeIngredient } from '../../services/slices/burger-constructor';
import { useDrag, useDrop } from 'react-dnd';
import { BURGER_CONSRTUCTOR_INGREDIENT_TYPE } from '../../constants/constants';
import { useRef } from 'react';

const BurgerConstructorIngredient = ({ ingredient, index }) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const handleRemoveIngredient = () => {
    dispatch(removeIngredient(ingredient.uniqueId));
  };

  const [{ handlerId }, drop] = useDrop({
    accept: BURGER_CONSRTUCTOR_INGREDIENT_TYPE,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      dispatch(
        reOrder({
          dragIndex,
          hoverIndex,
        })
      );
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: BURGER_CONSRTUCTOR_INGREDIENT_TYPE,
    item: () => {
      return { ingredient, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <li style={{ opacity }} data-handler-id={handlerId} ref={ref} className={styles.item}>
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
