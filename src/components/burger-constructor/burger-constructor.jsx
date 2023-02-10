import BurgerConstructorTab from './burger-constructor-tab/burger-constructor-tab'
import styles from './burger-constructor.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'
import ItemConstructor from './item-constructor/item-constructor'

const BurgerConstructor = ({dataBurger}) => {
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
                           <ItemConstructor key={data._id} name={data.name} price ={data.price} image={data.image} calories={data.calories} carbohydrates={data.carbohydrates} proteins={data.proteins} fat={data.fat}/>
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
                            <ItemConstructor key={data._id} name={data.name} price ={data.price} image={data.image} calories={data.calories} proteins={data.proteins} fat={data.fat} carbohydrates={data.carbohydrates} />
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
                            <ItemConstructor key={data._id} name={data.name} price ={data.price} image={data.image} calories={data.calories} proteins={data.proteins} fat={data.fat} carbohydrates={data.carbohydrates}/>
                        )}
                    )
                    }
                </div>

            </div>
        </div>
    )
}

BurgerConstructor.propTypes = {
    dataBurger: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default BurgerConstructor
