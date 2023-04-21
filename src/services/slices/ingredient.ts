import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {IIngredient} from '../../types/types'
import { RootState } from '../store'


interface IIngredientState {
    ingredient: IIngredient | undefined | null
}
const initialState: IIngredientState = {
    ingredient: null
}

const ingredient = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        setActiveIngredient: (state, {payload}: PayloadAction<IIngredient | undefined>) => {
            state.ingredient = payload

        },
        resetActiveIngredient: (state) => {
            state.ingredient = initialState.ingredient
        }
    }
})

export default ingredient.reducer

export const {setActiveIngredient, resetActiveIngredient } = ingredient.actions

export const getActiveIngredient = (state: RootState) => state.ingredient.ingredient
