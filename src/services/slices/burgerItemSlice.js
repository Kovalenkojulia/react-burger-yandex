import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchIngredients = createAsyncThunk(
    'ingredients/fetchIngredients',
    async (_, {rejectWithValue}) => {
        const response = await fetch(
            'https://norma.nomoreparties.space/api/ingredients', {
                method: 'GET'
            }
        )
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            return rejectWithValue(`${response.statusText}`)
        }

    }
)

   export const burgerItemSlice = createSlice({
    name: 'burgerItem',
    initialState: {
        ingredients: [],
        loading: false,
        error: null,
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.loading = false
                state.ingredients = action.payload
            })
            .addCase(fetchIngredients.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const {openModal, closeModal} = burgerItemSlice.actions


