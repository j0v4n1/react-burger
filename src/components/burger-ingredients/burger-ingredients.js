import {useState, useEffect, useRef} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/slices/burger-ingredients-slice";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";
import IngredientDetails from "../ingredient-details/ingredient-details";
import {remove} from "../../services/slices/ingredient-details-slice";

const BurgerIngredients = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients);
  const dispatch = useDispatch();
  const currentIngredient = useSelector(store => store.ingredientDetails.currentIngredient);
  const scrollRef = useRef(null);
  const [current, setCurrent] = useState("bun");

  useEffect(() => {
    dispatch(fetchIngredients());
    const scrollNode = scrollRef.current;
    if (scrollNode) {
      scrollNode.addEventListener("scroll", scrollHandler);
    }
    return () => {
      if (scrollNode) {
        scrollNode.removeEventListener("scroll", scrollHandler);
      }
    };
  }, []);

  const scrollHandler = () => {
    if (scrollRef.current.scrollTop < 294) {
      setCurrent("bun");
    } else if (scrollRef.current.scrollTop < 876) {
      setCurrent("sauce");
    } else {
      setCurrent("main");
    }
  };

  const handleCloseIngredientDetails = () => {
    dispatch(remove());
  }

  const buns = ingredients.map((ingredient) => {
    if (ingredient.type === "bun") {
      return (<BurgerIngredient
          key={ingredient._id}
          ingredient={ingredient}
          className={styles.item}
        />);
    }
  });

  const sauces = ingredients.map((ingredient) => {
    if (ingredient.type === "sauce") {
      return (<BurgerIngredient
          key={ingredient._id}
          ingredient={ingredient}
          className={styles.item}
        />);
    }
  });

  const cutlets = ingredients.map((ingredient) => {
    if (ingredient.type === "main") {
      return (<BurgerIngredient
          key={ingredient._id}
          ingredient={ingredient}
          className={styles.item}
        />);
    }
  });

  return (<section className={`${styles.ingredients} text text_type_main-default`}>
      <h1 className={styles.title}>Соберите бургер</h1>
      <ul
        className={"mt-5"}
        style={{display: "flex", padding: 0, listStyle: "none"}}
      >
        <li>
          <a href={"#buns"} className={styles.link}>
            <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
              Булки
            </Tab>
          </a>
        </li>
        <li>
          <a href={"#sauce"} className={styles.link}>
            <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
              Соусы
            </Tab>
          </a>
        </li>
        <li>
          <a href={"#main"} className={styles.link}>
            <Tab value="main" active={current === "main"} onClick={setCurrent}>
              Начинки
            </Tab>
          </a>
        </li>
      </ul>
      <div
        ref={scrollRef}
        style={{scrollBehavior: "smooth"}}
        className={styles.wrapper}
      >
        <h2 id="buns" className={"text text_type_main-medium"}>
          Булки
        </h2>
        <ul className={styles.list}>{buns}</ul>
        <h2 id="sauce" className={"text text_type_main-medium"}>
          Соусы
        </h2>
        <ul className={styles.list}>{sauces}</ul>
        <h2 id="main" className={"text text_type_main-medium"}>
          Начинки
        </h2>
        <ul className={styles.list}>{cutlets}</ul>
        {currentIngredient && (<Modal
            onClose={handleCloseIngredientDetails}
          >
            <IngredientDetails/>
          </Modal>)}
      </div>
    </section>);
};

export default BurgerIngredients;
