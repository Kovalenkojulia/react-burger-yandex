import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredientsSlice';
import { burgerItemSlice } from './slices/burgerItemSlice';
import orderSliceReducer from './slices/orderSlice'
import burgerConstructorReducer from './slices/burgerConstructorSlice'


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsConstructor: burgerConstructorReducer,
    burgerItem: burgerItemSlice.reducer,
    order: orderSliceReducer,

});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
