import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchIngredients = createAsyncThunk(
    "ingredients/fetchIngredients",
    async (_, {rejectWithValue}) => {
        const response = await fetch(
            "https://norma.nomoreparties.space/api/ingredients", {
                method: 'GET'
            }
        )
        if (response.ok){
            const data = await response.json();
            return data;
        } else {
            return rejectWithValue(`${response.statusText}`)
        }

    }
);

const ingredientsSlice = createSlice({
    name: "ingredients",
    initialState: {
        data: [],
        isLoading: false,
        hasError: false,
    },

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchIngredients.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchIngredients.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.data = action.payload.data;
            })
            .addCase(fetchIngredients.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            });
    },
});


export default ingredientsSlice.reducer;
