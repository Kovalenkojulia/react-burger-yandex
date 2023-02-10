import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BunImage from '../../images/bun-02.png'
import styles from './burger-ingredients.module.css'
import PropTypes from 'prop-types'
import {useState} from 'react'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import IngredientDetails from '../ingredient-details/ingredient-details'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import {ingredientType} from '../../utils/types'
const BurgerIngredients = ({dataBurger, isOpen}) => {
    const [isModalOpened, setIsModalOpened] = useState(false)
    const onOpen = () => {
        setIsModalOpened(true)
    }
    const onClose = () => {
        setIsModalOpened(false)
    }

    return (
        <>
        <div className={styles.elements}>
        <div className={styles.element}>

            <ConstructorElement
                type="top"
                isLocked={true}
                text="Краторная булка N-200i (верх)"
                price={200}
                thumbnail={BunImage}
            />
        </div>
            <div className={styles.scroller}>
                <BurgerIngredientsItem dataBurger={dataBurger}/>
            </div>
            <div className={styles.element}>
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={BunImage}
            />
            </div>

    <div className={styles.order}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
        <div className={styles.button}>
            <Button htmlType="button" type="primary" size="large" onClick={onOpen} >
                Оформить заказ
            </Button>
        </div>
    </div>
        </div>
            <Modal isOpen={isModalOpened} onClose={onClose}>
                <OrderDetails/>
            </Modal>

        </>

    )
}

BurgerIngredients.propTypes = {
    dataBurger: ingredientType.isRequired,
    isOpen: PropTypes.func.isRequired
}

export default BurgerIngredients;
