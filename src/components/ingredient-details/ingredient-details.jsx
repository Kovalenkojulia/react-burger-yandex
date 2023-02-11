import styles from './ingredient-details.module.css'
import PropTypes from 'prop-types'
import Modal from '../modal/modal'
import IngredientsItem from '../burger-ingredients/item-constructor/ingredients-item'
import {ingredientType} from '../../utils/types'

const IngredientDetails = ({data}) => {
    return (
        <div >
            <div className={styles.card}>
                <img src={data.image} alt={'alt'} className={styles.image}/>
                <p className="text text_type_main-small">
                    {data.name}
                </p>

            </div>

            <div className={styles.details}>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_digits-default">{data.calories}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">{data.proteins}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">{data.fat}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">{data.carbohydrates}</p>
                </div>
            </div>

        </div>
    )
}

IngredientDetails.propTypes = {
    data: ingredientType.isRequired,
}
export default IngredientDetails
