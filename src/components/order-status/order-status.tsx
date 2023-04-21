import styles from './order-status.module.css'
import clsx from 'clsx'
import {Link, useLocation} from 'react-router-dom'
import {IOrder} from '../../types/types'
import {CurrencyIcon, FormattedDate} from '@ya.praktikum/react-developer-burger-ui-components'
import {useAppSelector} from '../../hooks/hook'
import {getIngredients} from '../../services/slices/ingredientsSlice'
import IngredientSammary from '../ingredient-summary/ingredient-sammary'
import {MAX_INGREDIENTS_NUMBER, orderStatuses} from '../../utils/constants'
import {IIngredient} from '../../types/types'
import { FC } from 'react'

interface IOrderStatus {
    urlPrefix: string
    showStatus?: boolean
    order: IOrder
}
export function calcPrice(
    ingredients: IIngredient[],
    orderIngredients: string[]
): number {
    return orderIngredients.reduce((sum: number, id: string) => {
        const ingredient = ingredients.find((ingredient) => ingredient._id === id);
        if (ingredient) {
            return sum + ingredient.price;
        }
        return sum;
    }, 0);
}

export function getIngredientsByIDs(
    ingredients: IIngredient[],
    IDs: string[]
): IIngredient[] {
    return IDs.reduce((acc: IIngredient[], id: string) => {
        const ingredient = ingredients.find((ingredient) => ingredient._id === id);
        if (ingredient) {
            return [...acc, ingredient];
        }
        return acc;
    }, []);
}
const OrderStatus: FC<IOrderStatus> = ({urlPrefix, showStatus, order}) => {
    const location = useLocation()
    const ingredients = useAppSelector(getIngredients)
    const price = calcPrice(ingredients, order.ingredients)
    const orderIngredients = getIngredientsByIDs(ingredients, order.ingredients)
    return(
        <Link
            to={`${urlPrefix}/${order._id}`}
            state={{ backgroundLocation: location }}
            className={styles.container}
        >
            <div className={styles.orderCredentials}>
                <span className="text_type_digits-default">#{order.number}</span>
                <span className="text_type_main-default text_color_inactive">
          <FormattedDate date={new Date(order.createdAt)} />
        </span>
            </div>
            <h4 className={clsx(styles.header, "text_type_main-medium")}>
                {order.name}
            </h4>
            {showStatus && (
                <p
                    className={clsx(styles.status, "text_type_main-default", {
                        text_color_success: order.status === "done",
                    })}
                >
                    {orderStatuses[order.status]}
                </p>
            )}
            <div className={styles.orderDetails}>
                <div className={styles.ingredients}>
                    {orderIngredients
                        .slice(0, MAX_INGREDIENTS_NUMBER)
                        .map((ingredient, i, array) => (
                            <IngredientSammary
                                key={i}
                                url={ingredient.image_mobile}
                                index={i}
                                last={i === array.length - 1}
                                count={orderIngredients.length - array.length}
                            />
                        ))}
                </div>
                <div className={styles.price}>
                    <span className="text_type_digits-default">{price}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </Link>
    )
}

export default OrderStatus
