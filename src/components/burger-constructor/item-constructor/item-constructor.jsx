import styles from './item-constructor.module.css'
import {CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientDetails from '../../ingredient-details/ingredient-details'
import Modal from '../../modal/modal'
import React, {useState} from 'react'
import PropTypes from 'prop-types'

const ItemConstructor = ({image, name, price, calories, proteins, fat, carbohydrates}) => {
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
            <img src={image} alt={name}/>
            <div className={styles.icon}>
                <p className="text text_type_digits-default">{price}</p>
                <CurrencyIcon type="primary" />
            </div>

            <p className="text text_type_main-default">
                {name}
            </p>
        </div>
            <Modal isOpen={isModalOpened} onClose={onClose}>
                <IngredientDetails name={name} image={image} calories={calories} proteins={proteins} fat={fat} carbohydrates={carbohydrates}/>
            </Modal>
        </>
    )
}

ItemConstructor.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    calories: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
}
export default ItemConstructor;
