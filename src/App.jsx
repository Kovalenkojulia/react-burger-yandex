import React from 'react';
import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import BurgerIngredients from './components/burger-ingredients/burger-ingredients'
import {dataBurger} from './utils/data'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <AppHeader/>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>

        <div className={styles.main}>
            <BurgerConstructor dataBurger={dataBurger}/>
            <BurgerIngredients dataBurger={dataBurger}/>
        </div>


    </div>
  );
}

export default App;
