import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import "./app.css";
import getIngredients from '../../utils/burger-api';
import dataContext from "../../utils/data-context";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getIngredients().then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <AppHeader/>
      <main className={"content"}>
        <dataContext.Provider value={data}>
          <BurgerIngredients/>
          <BurgerConstructor/>
        </dataContext.Provider>
      </main>
    </>
  );
};

export default App;
