import styles from './item-constructor.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../../ingredient-details/ingredient-details'
import Modal from '../../modal/modal'
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {ingredientType} from '../../../utils/types'


const IngredientsItem = ({data}) => {
    console.log(data)
    const [isModalOpened, setIsModalOpened] = useState(false)
    const onOpen = () => {
        setIsModalOpened(true)
    }
    const onClose = () => {
        setIsModalOpened(false)
    }

    return (
        <>
            <div onClick={onOpen}>
                <img src={data.image} alt={data.name}/>
                <div className={styles.icon}>
                    <p className="text text_type_digits-default">{data.price}</p>
                    <CurrencyIcon type="primary"/>
                </div>

                <p className="text text_type_main-default">
                    {data.name}
                </p>
            </div>
            {
                isModalOpened &&
                <Modal onClose={onClose} title={'Детали ингредиента'}>
                    <IngredientDetails data={data}/>
                </Modal>
            }

        </>
    )
}

IngredientsItem.propTypes = {
    'data': ingredientType.isRequired,


}
export default IngredientsItem
