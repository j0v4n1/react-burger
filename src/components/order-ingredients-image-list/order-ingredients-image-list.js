import styles from './order-ingredients-image-list.module.css';
import { useSelector } from 'react-redux';
import { filterIngredients } from '../../utils/utils';

const OrderIngredientsImageList = ({ order }) => {
  const burgerIngredients = useSelector((store) => store.burgerIngredients.ingredients);
  const { ingredients } = order;

  const flattedIngredients = filterIngredients(ingredients, burgerIngredients);

  return flattedIngredients.map((ingredient, index) => {
    return (
      index <= 5 && (
        <li
          key={ingredient._id.concat(index)}
          style={{ zIndex: ingredients.length - index }}
          className={styles['order__images-item']}>
          <img
            className={styles['order__image']}
            style={index >= 5 && flattedIngredients.length > 6 ? { opacity: '.6', backgroundColor: '#1C1C21' } : null}
            src={ingredient.image}
            alt={ingredient.name}
          />
          {index >= 5 && flattedIngredients.length > 6 ? (
            <div className={`text text_type_digits-default ${styles['order__image-invisible-ingredients-counter']}`}>
              +{flattedIngredients.length - 6}
            </div>
          ) : null}
        </li>
      )
    );
  });
};

export default OrderIngredientsImageList;
