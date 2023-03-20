import styles from './ingredient-details.module.css'
import {ingredientType} from '../../utils/types'

import {useDispatch, useSelector} from 'react-redux'
import {getActiveIngredient, setActiveIngredient} from '../../services/slices/ingredientSlice'
import {useParams} from 'react-router-dom'
import {fetchIngredients, getIngredients} from '../../services/slices/ingredientsSlice'
import {useEffect} from 'react'
import clsx from 'clsx'

const IngredientDetails = ({data, outsideModal}) => {
    const dispatch = useDispatch()
    const ingredients = useSelector(getIngredients)
    const ingredient = useSelector(getActiveIngredient)
    const {id} = useParams()

    useEffect(() => {
        if(!ingredients.length){
            dispatch(fetchIngredients())
        }
        if(ingredients.length && !ingredient){
            dispatch(
                setActiveIngredient(
                    ingredients.find((ingredient)=>{
                        return ingredient._id === id
                    })
                )
            )
        }
    }, [dispatch, ingredients, id, ingredient])



    return (
        <div >
            <div className={clsx( styles.card, {
                [styles.containerOutsideModal]: outsideModal,
            })}>
                {outsideModal && (
                    <h1 className="text text_type_main-large">Детали ингредиента</h1>
                )}
                <img src={ingredient?.image_large} alt={'alt'} className={styles.image}/>
                <p className="text text_type_main-small">
                    {ingredient?.name}
                </p>

            </div>

            <div className={styles.details}>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                    </p>
                    <p className="text text_type_digits-default">{ingredient?.calories}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_digits-default">{ingredient?.proteins}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_digits-default">{ingredient?.fat}</p>
                </div>
                <div className={styles.item}>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_digits-default">{ingredient?.carbohydrates}</p>
                </div>
            </div>

        </div>
    )

}

IngredientDetails.propTypes = {
    data: ingredientType,
}
export default IngredientDetails
