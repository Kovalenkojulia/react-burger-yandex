import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { FC, useRef, useState } from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import {useAppSelector, useAppDispatch} from '../../hooks/hook'

import {
    addIngredient,
    getConstructorBun,
    getConstructorFillings,
    getTotalPrice,
    resetConstructor
} from '../../services/slices/burgerConstructorSlice'
import {useDrop} from 'react-dnd'
import {nanoid} from '@reduxjs/toolkit'
import {createOrder, getOrder} from '../../services/slices/orderSlice'
import {getCurrentUser} from '../../services/slices/userSlice'
import {useNavigate} from 'react-router-dom'
import {IIngredient, IIngredientWithUUID} from '../../types/types'

const BurgerConstructor: FC = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(getCurrentUser)
    const navigate = useNavigate()
    const totalPrice = useAppSelector(getTotalPrice)
    const bun = useAppSelector(getConstructorBun)
    const fillings = useAppSelector(getConstructorFillings)
    const order = useAppSelector(getOrder)
    //const orderId = order?.order?.number
    const modalRef = useRef()
    const [isModalVisible, setIsModalVisible] = useState(false)


    const [, dropTargetRef] = useDrop({
        accept: 'ingredient',
        drop(ingredient: IIngredient) {
            handleOnDrop(ingredient)
        },
    })



    const handleOnDrop = (ingredient: IIngredient) => {
        dispatch(
            addIngredient({
                ...ingredient,
                uuid: nanoid(10),
            })
        )
    }

    const handleOrderClick = () => {
        if (!user) {
            navigate('/login')
        } else if (bun) {
            setIsModalVisible(true)
            dispatch(createOrder({
                ingredients: [
                    bun._id,
                    ...fillings.map((filling: IIngredient) => filling._id),
                    bun._id,
                ],
            }))
        }
    }


    const handleClose = () => {
        dispatch(resetConstructor());
        setIsModalVisible(false)
    }



    return (
        <>
            <div ref={dropTargetRef} className={styles.elements}>
                <div className={styles.element}>
                    {bun && (
                        <ConstructorElement
                            type="top"
                            isLocked={true}
                            text={`${bun.name} (верх)`}
                            price={bun.price}
                            thumbnail={bun.image}
                        />
                    )

                    }


                </div>
                <div className={styles.scroller}>
                    {
                        fillings.map((filling: IIngredientWithUUID, index: number
                        ) => (
                            <div key={filling.uuid}>
                                <BurgerIngredientsItem filling={filling} index={index}/>
                            </div>
                        ))
                    }

                </div>
                <div className={styles.element}>
                    {bun && (
                        <ConstructorElement
                            type="bottom"
                            isLocked={true}
                            text={`${bun.name} (низ)`}
                            price={bun.price}
                            thumbnail={bun.image}

                        />

                    )}

                </div>

                <div className={styles.order}>
                    <p className="text text_type_digits-medium">{totalPrice}</p>
                    <CurrencyIcon type="primary"/>
                    <div className={styles.button}>
                        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick} disabled={!bun || !fillings.length}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
            {isModalVisible && (
                <Modal onClose={handleClose}>
                    {order && (
                        <OrderDetails orderId={order?.order?.number}/>
                    )}

                </Modal>
            )}
        </>

    )
}


export default BurgerConstructor
