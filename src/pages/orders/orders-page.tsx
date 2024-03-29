import React, { FC, useEffect } from 'react';
import {useAppSelector, useAppDispatch} from '../../hooks/hook'
import OrderStatus from '../../components/order-status/order-status'
import styles from './orders-page.module.css';
import ProfileNavigation from '../../components/profile-navigation/profile-navigation'
import {
    closeUserSocket,
    getUserFeedError,
    getUserOrders,
    initUserSocket,
} from '../../services/slices/user-feed';
import { USER_ORDERS_API_ENDPOINT } from '../../utils/constants';
import jsCookie from 'js-cookie';

const OrdersPage: FC = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(getUserOrders);
    const error = useAppSelector(getUserFeedError);

    useEffect(() => {
        dispatch(
            initUserSocket(
                USER_ORDERS_API_ENDPOINT + `?token=${jsCookie.get("accessToken")}`
            )
        );

        return () => {
            dispatch(closeUserSocket());
        };
    }, [dispatch]);

    if (error) {
        return (
            <main className={styles.main}>
                <p className="text text_type_main-default text_color_error">
                    Ошибка загрузки заказов
                </p>
            </main>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.menu}>
                <ProfileNavigation />
                <p className="text text_type_main-default text_color_inactive mt-20">
                    В этом разделе вы можете просмотреть свою историю заказов
                </p>
            </div>
            <div className={styles.feed}>
                {orders.length > 0 &&
                    orders.map((order) => (
                        <OrderStatus
                            key={order._id}
                            urlPrefix={"/profile/orders"}
                            order={order}
                            showStatus
                        />
                    ))}
            </div>
        </main>
    );
};

export default OrdersPage;
