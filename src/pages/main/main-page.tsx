import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from 'react-dnd'

import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'

import styles from '../../components/app/app.module.css'
import React, { FC, useEffect, useState } from 'react'

const MainPage: FC = () => {

    return(
        <main className={styles.main}>
        <DndProvider backend={HTML5Backend}>
        <div >
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>

            </div>
            <div className={styles.burger} >
                <BurgerIngredients />
                <BurgerConstructor/>

            </div>
        </div>
        </DndProvider>
        </main>
    )
}
export default MainPage
