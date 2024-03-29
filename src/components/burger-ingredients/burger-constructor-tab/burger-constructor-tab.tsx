import React, { FC } from 'react'
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-constructor-tab.module.css'

interface IBurgerConstructorTabProps {
    currentTab: string
    onTabClick: (tab: string) => void
}
const BurgerConstructorTab: FC<IBurgerConstructorTabProps> = ({currentTab, onTabClick}) => {


    return (
        <main className={styles.main}>
            <Tab value="buns" active={currentTab === 'bun'} onClick={()=> onTabClick('bun')}>
                Булки
            </Tab>
            <Tab  value="two" active={currentTab === 'sauce'} onClick={()=> onTabClick('main')}>
                Соусы
            </Tab>
            <Tab value="three" active={currentTab === 'main'} onClick={()=>onTabClick('sauce')}>
                Начинки
            </Tab>
        </main>
    )
}

export default BurgerConstructorTab;
