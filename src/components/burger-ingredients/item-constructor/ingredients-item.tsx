import styles from './item-constructor.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import React, {useState} from 'react'
import {useDrag} from 'react-dnd'
import {useAppDispatch, useAppSelector} from '../../../hooks/hook'
import {IIngredient} from '../../../types/types'
import { RootState } from '../../../services/store'

interface Props {
    ingredient: IIngredient
    type: string
    title?: string
}
const IngredientsItem = ({ingredient, title, type}: Props) => {
    const dispatch =useAppDispatch()

    const countValue = useAppSelector((state: RootState) => state.ingredientsConstructor.counters[ingredient._id])


    const [isModalOpened, setIsModalOpened] = useState(false)
    const onOpen = () => {
        setIsModalOpened(true)
    }
    const onClose = () => {
        setIsModalOpened(false)
    }
    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
    });

    return (
        <>
            <div onClick={onOpen} className={styles.card}>
                {countValue > 0 && <Counter count={countValue} size="default" extraClass="m-1" /> }


                <img ref={dragRef} src={ingredient.image} alt={ingredient.name} data-cy={"BurgerIngredient"}/>
                <div className={styles.icon}>
                    <p className="text text_type_digits-default">{ingredient.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>

                <p className="text text_type_main-default">
                    {ingredient.name}
                </p>
            </div>


        </>
    )
}


export default IngredientsItem
