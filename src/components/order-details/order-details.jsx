import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-details.module.css'
import {useDispatch, useSelector} from 'react-redux'
import {createOrder, getOrder} from '../../services/slices/orderSlice'
import {useEffect} from 'react'
import {ingredientType} from '../../utils/types'
import IngredientsItem from '../burger-ingredients/item-constructor/ingredients-item'
import PropTypes from 'prop-types'

const OrderDetails = ({orderId}) => {

    return (
        <div className={styles.order}>
            <p className="text text_type_digits-large">{orderId}</p>
            <p className="text text_type_main-default mt-8 mb-15">
                идентификатор заказа
            </p>
            <CheckMarkIcon type="primary" />
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>

            <p className="text text_type_main-default text_color_inactive">
                Дождитесь готовности на орбитальной станции
            </p>

        </div>

    )
}
OrderDetails.propTypes = {
    orderId: PropTypes.number.isRequired,
};
export default OrderDetails;
