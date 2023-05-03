import { createSlice, createAsyncThunk, SerializedError } from '@reduxjs/toolkit'
import {API_ENDPOINT} from '../../utils/constants'
import CheckResponse from '../../utils/check-response'
import {IIngredient} from '../../types/types'
import { RootState } from '../store'

export const fetchIngredients = createAsyncThunk(
    "ingredients/fetchIngredients",
    async (_, {rejectWithValue}) => {
        const response = await fetch(
            API_ENDPOINT + 'ingredients', {
                method: 'GET'
            }
        )
        const data = await CheckResponse(response)
        return data

    }
);

interface IIngredientsState {
    data: IIngredient[];
    hasError: SerializedError | null;
    isLoading: boolean;
}


export const initialState: IIngredientsState = {
    data: [],
    hasError: null,
    isLoading: false,
}
const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.isLoading = true;
                state.hasError = initialState.hasError;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = initialState.hasError;
                state.data = action.payload.data;
            })
            .addCase(fetchIngredients.rejected, (state) => {
                state.data = initialState.data
                state.isLoading = false;
                state.hasError = initialState.hasError;
            });
    },
});


export default ingredientsSlice.reducer;

export const getIngredients = (state: RootState) => state.ingredients.data;
