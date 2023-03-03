import styles from "./ingredient-details.module.css";

const IngredientDetails = ({ data, selectedIngredientId }) => {

  const selectedIngredient = data.find(el => {
    return el._id === selectedIngredientId
  })

  return (
    <>
      <div className={styles.titleWrapper}>
      <h3 className={`${styles.title} text text_type_main-large`}>
          Детали ингредиента
        </h3>
      </div>
      <img
        className={styles.image}
        src={selectedIngredient ? selectedIngredient.image : null}
        alt={selectedIngredient ? selectedIngredient.name : null}
      />
      <h4 className={`${styles.name} text text_type_main-medium`}>
        {selectedIngredient ? selectedIngredient.name : null}
      </h4>
      <div className={styles.pfcWrapper}>
        <div className={styles.calories}>
          <h5 className={`text text_type_main-default text_color_inactive`}>Калории,ккал</h5>
          <p className={'text text_type_digits-default text_color_inactive mt-2'}>
            {selectedIngredient ? selectedIngredient.calories : null}
          </p>
        </div>
        <div className={styles.calories}>
          <h5 className={`text text_type_main-default text_color_inactive`}>Белки, г</h5>
          <p className={'text text_type_digits-default text_color_inactive mt-2'}>
            {selectedIngredient ? selectedIngredient.proteins : null}
          </p>
        </div>
        <div className={styles.calories}>
          <h5 className={`text text_type_main-default text_color_inactive`}>Жиры, г</h5>
          <p className={'text text_type_digits-default text_color_inactive mt-2'}>
            {selectedIngredient ? selectedIngredient.fat : null}
          </p>
        </div>
        <div className={styles.calories}>
          <h5 className={`text text_type_main-default text_color_inactive`}>Углеводы, г</h5>
          <p className={'text text_type_digits-default text_color_inactive mt-2'}>
            {selectedIngredient ? selectedIngredient.carbohydrates : null}
          </p>
        </div>
      </div>
    </>
  );
};

export default IngredientDetails;
