import { useEffect, useState } from "react";

import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import ModalOverlay from "../modal-overlay/modal-overlay";
import Modal from "../modal/modal";

import "./app.css";

const App = () => {
  const [data, setData] = useState([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedIngredientId, setSelectedIngredientId] = useState(null)

  const dataUrl = "https://norma.nomoreparties.space/api/ingredients";

  useEffect(() => {
    request(dataUrl).then((res) => {
      setData(res.data);
    });
  }, []);

  function changeModalContent(modalElement) {
    setModalContent(modalElement)
  }

  function onSelectedIngredientId(id) {
    setSelectedIngredientId(id)
  }

  function handleCloseModal() {
    setIsVisibleModal(false);
  }

  function handleOpenModal() {
    setIsVisibleModal(true);
  }

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
      <AppHeader />
      <main className={"content"}>
        <BurgerIngredients
          data={data}
          changeModalContent={changeModalContent}
          onSelectedIngredientId={onSelectedIngredientId}
          onHandleOpenModal={handleOpenModal}
        />
        <BurgerConstructor 
        onHandleOpenModal={handleOpenModal} 
        data={data} 
        changeModalContent={changeModalContent}/>
      </main>
      <ModalOverlay isVisibleModal={isVisibleModal}>
        <Modal data={data}
        onHandleCloseModal={handleCloseModal}
        selectedIngredientId={selectedIngredientId}
        modalContent={modalContent}/>
      </ModalOverlay>
    </>
  );
};

export default App;
