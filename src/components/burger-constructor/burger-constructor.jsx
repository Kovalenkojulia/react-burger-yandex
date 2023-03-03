import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import {useContext, useEffect, useMemo, useRef, useState} from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import {useDispatch, useSelector} from 'react-redux'
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
import {resetOrder} from '../../services/slices/orderSlice'

const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector(getTotalPrice)
    const bun = useSelector(getConstructorBun)
    const fillings = useSelector(getConstructorFillings)
    const order = useSelector(getOrder)
    const orderId = order?.order?.number
    const modalRef = useRef()



    const [, dropTargetRef] = useDrop({
        accept: 'ingredient',
        drop(ingredient) {
            handleOnDrop(ingredient)
        },
    })

    const handleOnDrop = (ingredient) => {
        dispatch(
            addIngredient({
                ...ingredient,
                uuid: nanoid(10),
            })
        )
    }

    const handleOrderClick = () => {
        if (orderId) {
        } else {
            dispatch(createOrder({
                ingredients: [
                    bun._id,
                    ...fillings.map((filling) => filling._id),
                    bun._id,
                ],
            }))
        }
    }


    const handleClose = () => {
        if (!order) return;
        dispatch(resetConstructor());
        dispatch(resetOrder())
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
                        fillings.map((filling, index) => (
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
            {orderId && (
                <Modal onClose={handleClose}>
                    <OrderDetails orderId={orderId}/>
                </Modal>
            )}
        </>

    )
}


export default BurgerConstructor
