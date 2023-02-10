import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import Modal from '../modal/modal'
import ItemConstructor from '../burger-constructor/item-constructor/item-constructor'

const IngredientDetails = ({image, name, calories, proteins, fat, carbohydrates}) => {
    return (
        <div >
            <div className={styles.card}>
                <img src={image} alt={'alt'} className={styles.image}/>
                <p className="text text_type_main-small">
                    {name}
                </p>

            </div>

            <div className={styles.details}>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_digits-default">{calories}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">{proteins}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">{fat}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">{carbohydrates}</p>
                </div>
            </div>

        </div>
    )
}

IngredientDetails.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
}
export default IngredientDetails
