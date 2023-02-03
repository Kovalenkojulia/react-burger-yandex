import BurgerIngredientsItem from './burger-ingredients-item/burger-ingredients-item'
import {Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'

import styles from './burger-ingredients.module.css'
const BurgerIngredients = ({dataBurger}) => {
    console.log(dataBurger)
    return (
        <section>
            <div className={styles.scroller}>
                <BurgerIngredientsItem dataBurger={dataBurger}/>

            </div>

            <div className={styles.order}>
                <p className="text text_type_digits-medium">610</p>
                <CurrencyIcon type="primary" />
                <div className={'ml-10'}>
                    <Button htmlType="button" type="primary" size="large" >
                        Оформить заказ
                    </Button>
                </div>

            </div>






        </section>
    )


}

export default BurgerIngredients;
