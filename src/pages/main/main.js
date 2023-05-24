import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import {useSelector} from "react-redux";

const Main = () => {

  const ingredientsFailed = useSelector(state => state.burgerIngredients.ingredientsFailed);

  return (
    ingredientsFailed ?
      <h1>Что-то пошло не так, перезагрузите страницу или зайдите на страницу попозже</h1> :
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </DndProvider>
  );
};

export default Main;
