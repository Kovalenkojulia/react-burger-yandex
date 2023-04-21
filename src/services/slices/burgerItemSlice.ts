import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {

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

    },

})

export default burgerItemSlice.reducer
export const {openModal, closeModal} = burgerItemSlice.actions



