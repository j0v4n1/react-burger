import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import "./app.css";
import getIngredients from '../../utils/burger-api'

const App = () => {
  const [data, setData] = useState([]);

  const dataUrl = "https://norma.nomoreparties.space/api";

  useEffect(() => {
    getIngredients(dataUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <AppHeader/>
      <main className={"content"}>
        <BurgerIngredients data={data}/>
        <BurgerConstructor data={data}/>
      </main>
    </>
  );
};

export default App;
