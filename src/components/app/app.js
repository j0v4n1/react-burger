import AppHeader from "../app-header/app-header";
import BurgerConstructor from "../burger-constructor/burger-constructor";


import './app.css';

const App = () => {
    return (
        <>
            <AppHeader/>
            <main className={'content'}>
                <BurgerConstructor/>
            </main>
        </>

    )
}

export default App;
