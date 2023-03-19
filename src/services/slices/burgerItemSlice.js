import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    ingredient: null,
    isModalOpened: false
}


   export const burgerItemSlice = createSlice({
    name: 'burgerItem',
    initialState,
    reducers: {
        openModal: (state) => {
            state.isModalOpened = true
        },
        closeModal: (state) => {
            state.isModalOpened = false
        },
        setActiveIngredient: (state, {payload}) => {
            state.ingredient = payload
        },
        resetActiveIngredient: (state) =>{
            state.ingredient = initialState.ingredient
        }
    },

})

export const {openModal, closeModal, resetActiveIngredient, setActiveIngredient} = burgerItemSlice.actions


