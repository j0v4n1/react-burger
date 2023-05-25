import styles from './order-information.module.css';
import {CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useSelector} from "react-redux";

const OrderInformation = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);

  return (
    <article className={styles['order-information']}>
      <p className={`text text_type_digits-default ${styles.number}`}>#034533</p>
      <h3 className="text text_type_main-medium mt-10 mb-3">Black Hole Singularity острый бургер</h3>
      <p style={{color: '#00CCCC'}} className='text text_type_main-small'>Выполнен</p>
      <h4 className='text text_type_main-medium mt-15 mb-6'>Состав:</h4>
      <ul className={styles['ingredients-list']}>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[0].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[1].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[2].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[3].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[4].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
        <li className={styles['ingredients-item']}>
          <div className={styles['ingredients-item-image-and-name-wrapper']}>
            <div className={styles['ingredients-item-image-wrapper']}>
              <img className={styles['ingredients-item-image']} src={ingredients[5].image} alt=""/>
            </div>
            <p className='text text_type_main-default'>Флюоресцентная булка R2-D3</p>
          </div>
          <div className={styles['ingredients-item-price']}>
            <div className="text text_type_digits-default">{`${2} x`}</div>
            <div className="text text_type_digits-default ml-1 mr-2">20</div>
            <CurrencyIcon type={"primary"}/>
          </div>
        </li>
      </ul>
      <div className={styles['date-and-total-price-wrapper']}>
        <div className='ext text_type_main-small text_color_inactive'>
          Вчера, 13:50 i-GMT+3
        </div>
        <div className={styles['total-price']}>
          <div className='text text_type_digits-default mr-2'>510</div>
          <CurrencyIcon type='primary'/>
        </div>
      </div>
    </article>
  )
}

export default OrderInformation;
