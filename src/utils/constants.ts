import { ICategoriesNames, IWSActions, IOrderStatuses } from '../types/types'
import { addFeedOrders, setFeedError, openSocket, closeSocket, initSocket } from '../services/slices/feedSlice'
import {
    addUserFeedOrders,
    setUserFeedError,
    openUserSocket,
    closeUserSocket,
    initUserSocket
} from '../services/slices/user-feed'

export const API_ENDPOINT: string = 'https://norma.nomoreparties.space/api/'

export const ALL_ORDERS_API_ENDPOINT: string =
    'wss://norma.nomoreparties.space/orders/all'
export const USER_ORDERS_API_ENDPOINT: string =
    'wss://norma.nomoreparties.space/orders'

export const MAX_INGREDIENTS_NUMBER: number = 5
export const MAX_ORDER_NUMBER: number = 10

export const categoriesNames: ICategoriesNames = {
    bun: 'Булки',
    sauce: 'Соусы',
    main: 'Начинки',
}

export const orderStatuses: IOrderStatuses = {
    done: 'Выполнен',
    pending: 'Готовится',
    created: 'Создан',
}
export const feedActions: IWSActions = {
    onMessage: addFeedOrders,
    onError: setFeedError,
    open: openSocket,
    close: closeSocket,
    initSocket: initSocket,
}
export const userFeedActions: IWSActions = {
    onMessage: addUserFeedOrders,
    onError: setUserFeedError,
    open: openUserSocket,
    close: closeUserSocket,
    initSocket: initUserSocket,
}

export const testUrl = 'http://localhost:3000'

export const bunIngredient = {
    _id: '643d69a5c3f7b9001cfa093d',
    name: 'Флюоресцентная булка R2-D3',
    type: 'bun',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/bun-01.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
    uuid: 't0bqmCy4uh',
}

export const fillingIngredient = {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    uuid: 'bjuXIIqEJC',
}

export const FILLINGS = [
    {
        _id: '643d69a5c3f7b9001cfa093e',
        name: 'Филе Люминесцентного тетраодонтимформа',
        type: 'main',
        proteins: 44,
        fat: 26,
        carbohydrates: 85,
        calories: 643,
        price: 988,
        image: 'https://code.s3.yandex.net/react/code/meat-03.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
        uuid: 'bjuXIIqEJC',
    },
    {
        _id: '643d69a5c3f7b9001cfa0940',
        name: 'Говяжий метеорит (отбивная)',
        type: 'main',
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: 'https://code.s3.yandex.net/react/code/meat-04.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
        uuid: '0gonYVUuw3',
    },
    {
        _id: '643d69a5c3f7b9001cfa0947',
        name: 'Плоды Фалленианского дерева',
        type: 'main',
        proteins: 20,
        fat: 5,
        carbohydrates: 55,
        calories: 77,
        price: 874,
        image: 'https://code.s3.yandex.net/react/code/sp_1.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/sp_1-large.png',
        uuid: '4Mj1VWwSqx',
    },
]

export const luminousFillet = {
    _id: '643d69a5c3f7b9001cfa093e',
    name: 'Филе Люминесцентного тетраодонтимформа',
    type: 'main',
    proteins: 44,
    fat: 26,
    carbohydrates: 85,
    calories: 643,
    price: 988,
    image: 'https://code.s3.yandex.net/react/code/meat-03.png',
    image_mobile:
        'https://code.s3.yandex.net/react/code/meat-03-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-03-large.png',
    uuid: 'bjuXIIqEJC',
}

export const meteorite = {
    _id: '643d69a5c3f7b9001cfa0940',
    name: 'Говяжий метеорит (отбивная)',
    type: 'main',
    proteins: 800,
    fat: 800,
    carbohydrates: 300,
    calories: 2674,
    price: 3000,
    image: 'https://code.s3.yandex.net/react/code/meat-04.png',
    image_mobile:
        'https://code.s3.yandex.net/react/code/meat-04-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/meat-04-large.png',
    uuid: '0gonYVUuw3',
}

export const fallenFruits = {
    _id: '643d69a5c3f7b9001cfa0947',
    name: 'Плоды Фалленианского дерева',
    type: 'main',
    proteins: 20,
    fat: 5,
    carbohydrates: 55,
    calories: 77,
    price: 874,
    image: 'https://code.s3.yandex.net/react/code/sp_1.png',
    image_mobile: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
    image_large: 'https://code.s3.yandex.net/react/code/sp_1-large.png',
    uuid: '4Mj1VWwSqx',
}




