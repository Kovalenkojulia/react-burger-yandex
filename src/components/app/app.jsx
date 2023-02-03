import React from 'react';
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import {dataBurger} from '../../utils/data'

import styles from './app.module.css'

function App() {
  return (
    <main>
      <AppHeader/>
        <div className={styles.title}>
            <p className="text text_type_main-large">
                Соберите бургер
            </p>

        </div>


        <div className={styles.main}>
            <BurgerConstructor dataBurger={dataBurger}/>
            <BurgerIngredients dataBurger={dataBurger}/>
        </div>


    </main>
  );
}

export default App;
