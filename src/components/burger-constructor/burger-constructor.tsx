import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import { FC, useContext, useEffect, useMemo, useRef, useState } from 'react'
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
import {getCurrentUser} from '../../services/slices/userSlice'
import {useNavigate} from 'react-router-dom'
import {IIngredient, IIngredientWithUUID} from '../../types/types'

const BurgerConstructor: FC = () => {
    const dispatch = useDispatch()
    const user = useSelector(getCurrentUser)
    const navigate = useNavigate()
    const totalPrice = useSelector(getTotalPrice)
    const bun = useSelector(getConstructorBun)
    const fillings = useSelector(getConstructorFillings)
    const order = useSelector(getOrder)
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
            // @ts-ignore
            dispatch<any>(createOrder({
                ingredients: [
                    bun._id,
                    ...fillings.map((filling: IIngredient) => filling._id),
                    bun._id,
                ],
            }))
        }
    }


    const handleClose = () => {
        //if (!order) return;
        dispatch(resetConstructor());
        //dispatch(resetOrder())
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
