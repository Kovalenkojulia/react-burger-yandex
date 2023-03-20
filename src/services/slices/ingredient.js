import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    ingredient: null
}

const ingredient = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        setActiveIngredient: (state, {payload}) => {
            state.ingredient = payload

        },
        resetActiveIngredient: (state) => {
            state.ingredient = initialState.ingredient
        }
    }
})

export default ingredient.reducer

export const {setActiveIngredient, resetActiveIngredient } = ingredient.actions

export const getActiveIngredient = state => state.ingredient.ingredient
