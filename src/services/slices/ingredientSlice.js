import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    ingredient: null,
}
export const modalIngredientSlice = createSlice({
    name: 'modalIngredient',
    initialState,
    reducers: {
        showActiveIngredient: (state, {payload}) => {
            state.ingredient = payload;



        },
        resetIngredient: state => {
            state.ingredient = initialState.ingredient
        },
    },
});

export const { showActiveIngredient, resetIngredient} = modalIngredientSlice.actions;
export const getActiveIngredient = state => state.ingredient.ingredient
export default modalIngredientSlice.reducer;
