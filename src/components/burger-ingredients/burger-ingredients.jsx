import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, ConstructorElement, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import BunImage from '../../images/bun-02.png'
import styles from './burger-ingredients.module.css'
const BurgerIngredients = ({dataBurger}) => {
    console.log(dataBurger)
    return (
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
            <Button htmlType="button" type="primary" size="large" >
                Оформить заказ
            </Button>
        </div>
    </div>
        </div>



    )


}

export default BurgerIngredients;
