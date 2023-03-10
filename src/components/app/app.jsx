import React, {useState, useEffect} from 'react'

import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import BurgerIngredients from '../burger-ingredients/burger-ingredients'
import IngredientDetails from '../ingredient-details/ingredient-details'
import OrderDetails from '../order-details/order-details'
import {DataContext} from '../../services/data-context'
import {HTML5Backend} from 'react-dnd-html5-backend'

import styles from './app.module.css'
import {DndProvider} from 'react-dnd'


function App() {

    const [state, setState] = useState({
        isLoading: false,
        hasError: false,
        data: []
    })
    const dataUrl = `https://norma.nomoreparties.space/api/ingredients`
    useEffect(() => {

        const getDataBurger = () => {
            setState({data: [], hasError: false, isLoading: true})

            fetch(dataUrl)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    return Promise.reject(`Ошибка ${res.status}`)
                })
                .then(({data}) => setState((prevState) => ({...prevState, data: data || [], isLoading: false})))
                .catch(e => {
                    setState((prevState) => ({...prevState, hasError: true, isLoading: false}))
                })
        }

        getDataBurger()
    }, [])


    const {data, isLoading, hasError} = state
    const dataBurger = data || []
    if (isLoading || dataBurger.length === 0) {
        return (
            <div>Loading</div>
        )
    }


    return (
        <div className={styles.page}>
            <AppHeader/>
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>

            </div>
            <main className={styles.main}>
                <DataContext.Provider value={{dataBurger}}>
                    <DndProvider backend={HTML5Backend}>
                    <BurgerIngredients dataBurger={dataBurger}/>
                    <BurgerConstructor />
                    </DndProvider>
                </DataContext.Provider>
            </main>
        </div>
    )
}

export default App

