import {createSlice, createAsyncThunk, isRejectedWithValue} from '@reduxjs/toolkit'

/*export const createOrder = createAsyncThunk(
    'order/createOrder',
    async ({ ingredients }) => {
        //console.log(ingredients)
        const url = 'https://norma.nomoreparties.space/api/orders';

        //let ingredientsId = []
        //ingredients.map((item)=> {ingredientsId.push(item?._id)})
        const order = {
             "ingredients": ["609646e4dc916e00276b286e","609646e4dc916e00276b2870"]
            //'ingredients': ingredientsId
        }
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({order}),
        });

        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message);
        }

        //const orderIngredients = order.ingredients.map((ingredient) => ingredient._id);
        //const updatedOrder = { ...order, ingredients: orderIngredients };

        return { order};
    },
);*/

export const createOrder = createAsyncThunk(
    'order/createOrder',
    async (ingredients) => {
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
            // Обработка ошибок
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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createOrder.pending, (state) => {
            console.log('createOrder is pending');
            state.isLoading = true;
        });
        builder.addCase(createOrder.fulfilled, (state, action) => {
            console.log('createOrder is fulfilled');
            console.log('data', action.payload.order);
            state.order = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(createOrder.rejected, (state, action) => {
            console.log('createOrder is rejected');
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});


export default orderSlice.reducer;

export const getOrder = state => state.order.order
