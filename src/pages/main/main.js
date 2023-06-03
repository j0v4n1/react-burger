import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Modal from '../../components/modal/modal';
import IngredientDetails from '../../components/ingredient-details/ingredient-details';
import { remove } from '../../services/slices/ingredient-details';

const Main = () => {

  const dispatch = useDispatch();
  const ingredientsFailed = useSelector(state => state.burgerIngredients.ingredientsFailed);

  const handleCloseIngredientDetails = () => {
    dispatch(remove())
  }

  return ingredientsFailed ? <h1>Что-то пошло не так, перезагрузите страницу или зайдите на страницу попозже</h1> :
    <>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredients />
        <BurgerConstructor />
      </DndProvider>
      <Routes>
        <Route path='/ingredients/:id' element={
          <Modal onRemove={handleCloseIngredientDetails} closeModalPath={'/'}>
            <IngredientDetails />
          </Modal>} />
      </Routes>
    </>;
};

export default Main;
