import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './slices/ingredientsSlice';
import  burgerItemSliceReducer  from './slices/burgerItemSlice';
import orderSliceReducer from './slices/orderSlice'
import burgerConstructorReducer from './slices/burgerConstructorSlice'
import userReducer from './slices/userSlice'
import ingredientReducer from './slices/ingredient'


const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredientsConstructor: burgerConstructorReducer,
    burgerItem: burgerItemSliceReducer,
    order: orderSliceReducer,
    user: userReducer,
    ingredient: ingredientReducer,


});

const store = configureStore({
    reducer: rootReducer,
});

export default store;
