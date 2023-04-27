import { createSlice, createAsyncThunk, SerializedError, PayloadAction } from '@reduxjs/toolkit'
import {ICreateOrderPayload, IOrderResponse} from '../../types/types'
import api from '../../utils/api'
import { RootState } from '../store'
import {API_ENDPOINT} from '../../utils/constants'


export const createOrder = createAsyncThunk(
    "order/createOrder",
    async (ingredients: ICreateOrderPayload) => {
        return await api.createOrder(ingredients);
    }
);

interface IOrderState {
    order: IOrderResponse | null;
    error: SerializedError | null;
    loading: boolean;
}

export const initialState: IOrderState = {
    order: null,
    error: null,
    loading: false,
};



const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            createOrder.fulfilled,
            (state, { payload }: PayloadAction<IOrderResponse>) => {
                state.order = payload;
                state.loading = false;
            }
        );
        builder.addCase(createOrder.rejected, (state, { error }) => {
            state.order = initialState.order;
            state.error = error;
            state.loading = false;
        });
        builder.addCase(createOrder.pending, (state) => {
            state.error = initialState.error;
            state.loading = true;
        });
    },
});

export default orderSlice.reducer;

export const getOrder = (state: RootState) => state.order.order;
export const getOrderIsLoading = (state: RootState) => state.order.loading;
