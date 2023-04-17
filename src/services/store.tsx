import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredientsSlice';
import  burgerItemSliceReducer  from './slices/burgerItemSlice';
import orderSliceReducer from './slices/orderSlice'
import burgerConstructorReducer from './slices/burgerConstructorSlice'
import userReducer from './slices/userSlice'
import feedReducer from './slices/feedSlice'
import userFeedReducer from './slices/user-feed'
import ingredientReducer from './slices/ingredient'
import { websocketMiddleware } from './middlewares/websocketMiddleware'
import {feedActions, userFeedActions} from '../utils/constants'


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsConstructor: burgerConstructorReducer,
    burgerItem: burgerItemSliceReducer,
    order: orderSliceReducer,
    user: userReducer,
    ingredient: ingredientReducer,
    feed: feedReducer,
    userFeed: userFeedReducer,


});

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            .concat(websocketMiddleware(feedActions))
            .concat(websocketMiddleware(userFeedActions)),
});

export default store;

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
