import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";

const MainPage = () => {
  return (
    <main className={"content"}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
    </main>
  );
};

export default MainPage;
