import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import Modal from '../modal/modal'

const IngredientDetails = ({image, name, calories, proteins, fat, carbohydrates}) => {
    return (
        <div>
            <p className="text text_type_main-large">
                Детали ингредиента
            </p>
            <img src={image} alt={'alt'}/>
            <p className="text text_type_main-small">
                {name}
            </p>
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
    calories: PropTypes.string.isRequired,
    proteins: PropTypes.string.isRequired,
    fat: PropTypes.string.isRequired,
    carbohydrates: PropTypes.string.isRequired,
}
export default IngredientDetails
