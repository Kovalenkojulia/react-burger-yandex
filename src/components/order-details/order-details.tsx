import {CheckMarkIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './order-details.module.css'
import { FC } from 'react'
import {getOrderIsLoading} from '../../services/slices/orderSlice'
import { useAppSelector } from '../../hooks/hook'

interface IOrderDetails {
    orderId?: number
}
const OrderDetails: FC<IOrderDetails> = ({orderId}) => {
    const isOrderLoading = useAppSelector(getOrderIsLoading)
    if (isOrderLoading){
        return <div>Loading...</div>
    }


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

export default OrderDetails;
