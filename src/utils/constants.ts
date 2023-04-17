import { ICategoriesNames, IWSActions, IOrderStatuses} from '../types/types'
import {addFeedOrders, setFeedError, openSocket, closeSocket, initSocket} from '../services/slices/feedSlice'
import {addUserFeedOrders, setUserFeedError, openUserSocket, closeUserSocket, initUserSocket} from '../services/slices/user-feed'

export const API_ENDPOINT: string = "https://norma.nomoreparties.space/api/"

export const ALL_ORDERS_API_ENDPOINT: string =
    "wss://norma.nomoreparties.space/orders/all";
export const USER_ORDERS_API_ENDPOINT: string =
    "wss://norma.nomoreparties.space/orders";

export const MAX_INGREDIENTS_NUMBER: number = 5;
export const MAX_ORDER_NUMBER: number = 10;

export const categoriesNames: ICategoriesNames = {
    bun: "Булки",
    sauce: "Соусы",
    main: "Начинки",
};

export const orderStatuses: IOrderStatuses = {
    done: "Выполнен",
    pending: "Готовится",
    created: "Создан",
};
export const feedActions: IWSActions = {
    onMessage: addFeedOrders,
    onError: setFeedError,
    open: openSocket,
    close: closeSocket,
    initSocket: initSocket,
};
export const userFeedActions: IWSActions = {
    onMessage: addUserFeedOrders,
    onError: setUserFeedError,
    open: openUserSocket,
    close: closeUserSocket,
    initSocket: initUserSocket,
};
