import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";


import './app.css';

const App = () => {
    return (
        <>
            <AppHeader/>
            <main className={'content'}>
                <BurgerIngredients/>
                <BurgerConstructor/>
            </main>
        </>

    )
}

export default App;
