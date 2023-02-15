import BurgerConstructorTab from './burger-constructor-tab/burger-constructor-tab'
import styles from './burger-constructor.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import IngredientsItem from './item-constructor/ingredients-item'
import {ingredientType} from '../../utils/types'

const BurgerIngredients = ({dataBurger}) => {
    return (
        <div>
            <BurgerConstructorTab />
            <div className={styles.scroller}>
            <p className="text text_type_main-medium mt-10">
                Булки
            </p>

            <div className={styles.item}>
                {dataBurger.filter(data => data.type === 'bun').map((data) => {
                        return (
                           <IngredientsItem key={data._id} data={data}/>
                        )
                    }
                )
                }
            </div>

            <p className="text text_type_main-medium mt-10">
                Соусы
            </p>
            <div className={styles.item}>
                {dataBurger.filter(data => data.type === 'sauce').map((data) => {
                        return (
                            <IngredientsItem key={data._id} data={data} />
                        )}
                    )
                }
            </div>

                <p className="text text_type_main-medium mt-10">
                    Начинки
                </p>

                <div className={styles.item}>
                    {dataBurger.filter(data => data.type === 'main').map((data) => {
                        return (
                            <IngredientsItem key={data._id} data={data}/>
                        )}
                    )
                    }
                </div>

            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    dataBurger: PropTypes.arrayOf(ingredientType).isRequired,
};

export default BurgerIngredients
