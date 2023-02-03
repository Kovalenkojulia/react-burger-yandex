import BurgerConstructorTab from './burger-constructor-tab/burger-constructor-tab'
import styles from './burger-constructor.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types'

const BurgerConstructor = ({dataBurger}) => {
    return (
        <section>
            <BurgerConstructorTab />
            <div className={styles.scroller}>
            <p className="text text_type_main-medium mt-10">
                Булки
            </p>

            <div className={styles.item}>
                {dataBurger.filter(data => data.type === 'bun').map((data) => {
                        return (
                            <div key={data._id}>
                                <img src={data.image}/>
                                <div className={styles.icon}>
                                    <p className="text text_type_digits-default">20</p>
                                    <CurrencyIcon type="primary" />
                                </div>

                                <p className="text text_type_main-default">
                                    {data.name}
                                </p>
                            </div>
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
                            <div key={data._id}>
                                <img src={data.image}/>
                                <div className={styles.icon}>
                                    <p className="text text_type_digits-default">20</p>
                                    <CurrencyIcon type="primary" />
                                </div>

                                <p className="text text_type_main-default">
                                    {data.name}
                                </p>
                            </div>

                        )
                    }
                )

                }
            </div>
            </div>
        </section>
    )
    BurgerConstructor.propTypes = {
        _id: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string
    }
}

export default BurgerConstructor
