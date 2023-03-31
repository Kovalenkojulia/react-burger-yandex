import styles from './ingredient-details.module.css'
import {ingredientType} from '../../utils/types'

import {useDispatch, useSelector} from 'react-redux'
import {getActiveIngredient, setActiveIngredient} from '../../services/slices/ingredient'
import {useParams} from 'react-router-dom'
import {fetchIngredients, getIngredients} from '../../services/slices/ingredientsSlice'
import {useEffect, FC} from 'react'
import clsx from 'clsx'

interface IIngredientDetailProps {
    outsideModal?: boolean
}

const IngredientDetails: FC<IIngredientDetailProps> = ({ outsideModal}) => {
    const dispatch = useDispatch()
    //const ingredients = useSelector(getIngredients)
    const ingredients = useSelector((state: any) => state.ingredients.data)
    const ingredient = useSelector(getActiveIngredient)
    console.log(ingredients)


    const {id} = useParams()

    useEffect(() => {
        if(!ingredients.length){
            dispatch<any>(fetchIngredients())
        }
        if(ingredients.length && !ingredient){
            console.log('id:', id);
            dispatch(
                setActiveIngredient(
                    ingredients.find((ingredient: any)=>{
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


export default IngredientDetails
