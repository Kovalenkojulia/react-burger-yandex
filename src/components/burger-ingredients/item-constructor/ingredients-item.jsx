import styles from './item-constructor.module.css'
import {Counter, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../../ingredient-details/ingredient-details'
import Modal from '../../modal/modal'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {ingredientType} from '../../../utils/types'
import {useDrag} from 'react-dnd'
import {useDispatch, useSelector} from 'react-redux'



const IngredientsItem = ({ingredient}) => {
    const dispatch =useDispatch()
    const countValue = useSelector((state) => state.ingredientsConstructor.counters[ingredient._id])
    //console.log(countValue)

    const [isModalOpened, setIsModalOpened] = useState(false)
    const onOpen = () => {
        setIsModalOpened(true)
    }
    const onClose = () => {
        setIsModalOpened(false)
    }
    const [, dragRef] = useDrag({
        type: "ingredient",
        item: ingredient,
    });

    return (
        <>
            <div onClick={onOpen} className={styles.card}>
                {countValue > 0 && <Counter count={countValue} size="default" extraClass="m-1" /> }


                <img ref={dragRef} src={ingredient.image} alt={ingredient.name}/>
                <div className={styles.icon}>
                    <p className="text text_type_digits-default">{ingredient.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>

                <p className="text text_type_main-default">
                    {ingredient.name}
                </p>
            </div>
            {
                isModalOpened &&
                <Modal onClose={onClose} title={'Детали ингредиента'}>
                    <IngredientDetails data={ingredient}/>
                </Modal>
            }

        </>
    )
}
IngredientsItem.propTypes = {
    ingredient: ingredientType.isRequired,
};

export default IngredientsItem
