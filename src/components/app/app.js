import { useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import data from "../../utils/data";

import "./app.css";

const App = () => {
  const [transformData, setTransformData] = useState(
    data.map(({ _id, price, type, name, image }) => {
      return { id: _id, price: price, type: type, name: name, image: image };
    })
  );

  return (
    <>
      <AppHeader />
      <main className={"content"}>
        <BurgerIngredients data={transformData} />
        <BurgerConstructor data={transformData} />
      </main>
    </>
  );
};

export default App;
