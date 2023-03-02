import {createSlice, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'


export const createOrder = createAsyncThunk(
    'order/createOrder',
    async (ingredients, { rejectWithValue }) => {
        try {
            const response = await fetch('https://norma.nomoreparties.space/api/orders', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify(ingredients),
            });
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


    const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: null,
        isLoading: false,
        error: null,
    },
    reducers: {
        resetOrder: (state) => {
            state.order = null;
            state.isLoading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            state.order = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});


export default orderSlice.reducer;
export const { resetOrder } = orderSlice.actions;

export const getOrder = state => state.order.order
