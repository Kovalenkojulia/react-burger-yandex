import React from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-constructor-tab.module.css'
const BurgerConstructorTab = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <main className={styles.main}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </main>
    )
}

export default BurgerConstructorTab;