import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'
import {useContext, useEffect, useMemo, useState} from 'react'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import {ingredientType} from '../../utils/types'
import {DataContext} from '../../services/data-context'
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

const BurgerConstructor = () => {
    const dispatch = useDispatch()
    const totalPrice = useSelector(getTotalPrice)
    const bun = useSelector(getConstructorBun)
    const {data, loading, error} = useSelector((state) => state.ingredients)
    const fillings = useSelector(getConstructorFillings)
    //console.log(fillings)
    const firstBun = data.find((ingredient) => ingredient.type === 'bun')
    //const ingredients = data.map(item => item._id)
    //console.log(ingredients)

    const [isModalOpened, setIsModalOpened] = useState(false)
    const order = useSelector(getOrder)
    //console.log(order)
    const orderId = order?.order?.number


    useEffect(() => {
        if (firstBun && !bun) {
            dispatch(addIngredient(firstBun))
        }
    }, [firstBun, dispatch, bun])


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
        if (order) {
            setIsModalOpened(true)
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
        if (order) {
            dispatch(resetConstructor())
            setIsModalOpened(false)
        }
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
                        <Button htmlType="button" type="primary" size="large" onClick={handleOrderClick}>
                            Оформить заказ
                        </Button>
                    </div>
                </div>
            </div>
            {isModalOpened && (
                <Modal onClose={handleClose}>
                    <OrderDetails orderId={orderId}/>
                </Modal>
            )}
        </>

    )
}


export default BurgerConstructor
