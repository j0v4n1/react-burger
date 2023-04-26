import {useState, useEffect, useRef} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";
import Modal from "../modal/modal";
import {useDispatch, useSelector} from "react-redux"
import {fetchIngredients} from "../../services/actions/fetch-ingredients";
import BurgerIngredient from "../burger-ingredient/burger-ingredient";

const BurgerIngredients = () => {

  const ingredients = useSelector(store => store.burgerIngredients.ingredients)
  const dispatch = useDispatch();

  const scrollRef = useRef();

  const scrollHandler = () => {

    if (scrollRef.current.scrollTop < 294) {
      setCurrent("bun");
    } else if (scrollRef.current.scrollTop < 876) {
      setCurrent("sauce");
    } else {
      setCurrent("main");
    }
  };

  useEffect(() => {
    dispatch(fetchIngredients());
    scrollRef.current.addEventListener("scroll", scrollHandler);
    return () => {
      scrollRef.current.removeEventListener("scroll", scrollHandler);
    };
  }, [])


  const [selectedIngredientId, setSelectedIngredientId] = useState("");
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [current, setCurrent] = useState("bun");

  function changeModalContent(modalElement) {
    setModalContent(modalElement)
  }

  const buns = ingredients.map(ingredient => {
    if (ingredient.type === "bun") {
      return <BurgerIngredient
        setIsVisibleModal={setIsVisibleModal}
        setSelectedIngredientId={setSelectedIngredientId}
        changeModalContent={changeModalContent}
        _id={ingredient._id}
        newId={ingredient.newId}
        proteins={ingredient.proteins}
        fat={ingredient.fat}
        carbohydrates={ingredient.carbohydrates}
        calories={ingredient.calories}
        type={ingredient.type}
        image={ingredient.image}
        price={ingredient.price}
        name={ingredient.name}
        key={ingredient._id}
        className={styles.item}
      />;
    }
  });
  const sauces = ingredients.map(ingredient => {
    if (ingredient.type === "sauce") {
      return <BurgerIngredient
        setIsVisibleModal={setIsVisibleModal}
        setSelectedIngredientId={setSelectedIngredientId}
        changeModalContent={changeModalContent}
        _id={ingredient._id}
        newId={ingredient.newId}
        proteins={ingredient.proteins}
        fat={ingredient.fat}
        carbohydrates={ingredient.carbohydrates}
        calories={ingredient.calories}
        type={ingredient.type}
        image={ingredient.image}
        price={ingredient.price}
        name={ingredient.name}
        key={ingredient._id}
        className={styles.item}
      />;
    }
  });
  const cutlets = ingredients.map(ingredient => {
    if (ingredient.type === "main") {
      return <BurgerIngredient
        setIsVisibleModal={setIsVisibleModal}
        setSelectedIngredientId={setSelectedIngredientId}
        changeModalContent={changeModalContent}
        newId={ingredient.newId}
        _id={ingredient._id}
        proteins={ingredient.proteins}
        fat={ingredient.fat}
        carbohydrates={ingredient.carbohydrates}
        calories={ingredient.calories}
        type={ingredient.type}
        image={ingredient.image}
        price={ingredient.price}
        name={ingredient.name}
        key={ingredient._id}
        className={styles.item}
      />;
    }
  });

  return <section className={`${styles.ingredients} text text_type_main-default`}>
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
          <Tab
            value="sauce"
            active={current === "sauce"}
            onClick={setCurrent}
          >
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
    <div ref={scrollRef} style={{scrollBehavior: "smooth"}} className={styles.wrapper}>
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
      <Modal data={ingredients}
             setIsVisibleModal={setIsVisibleModal}
             isVisibleModal={isVisibleModal}
             selectedIngredientId={selectedIngredientId}
             modalContent={modalContent}
             onClose={() => {
               setIsVisibleModal(false)
             }}/>
    </div>
  </section>;
};

export default BurgerIngredients;
