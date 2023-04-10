// стили
import "./app.css";
// компоненты
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
// библиотеки
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";

const App = () => {

  return (
    <>
      <AppHeader/>
      <main className={"content"}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </DndProvider>
      </main>
    </>
  );
};

export default App;
