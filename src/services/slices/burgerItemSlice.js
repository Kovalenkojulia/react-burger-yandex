import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'


   export const burgerItemSlice = createSlice({
    name: 'burgerItem',
    initialState: {
        //ingredients: null,
        //loading: false,
        //error: null,
        isModalOpened: false
    },
    reducers: {
        openModal: (state) => {
            state.isModalOpened = true
        },
        closeModal: (state) => {
            state.isModalOpened = false
        }
    },

})

export const {openModal, closeModal} = burgerItemSlice.actions


