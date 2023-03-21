import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

export const forgotPassword = createAsyncThunk(
    "auth/resetPassword",
    async (email) => {
        const response = await fetch(
            "https://norma.nomoreparties.space/api/password-reset",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: '' }),
            }
        );

        if (!response.ok) {
            throw new Error("Ошибка при отправке запроса");
        }

        const data = await response.json();
        return data;
    }
);

const forgotPasswordSlice = createSlice({
    name: "resetPassword",
    initialState: {
        loading: false,
        success: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(forgotPassword.pending, (state) => {
                state.loading = true;
                state.success = false;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state) => {
                state.loading = false;
                state.success = true;
                const navigate = useNavigate();
                navigate('/reset-password')
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default forgotPasswordSlice.reducer;
