import {useEffect, useState} from "react";
import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import "./app.css";

const App = () => {
  const [data, setData] = useState([]);

  const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    request(dataUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  function request(url) {
    return fetch(url).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

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
