import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
    loading: false,
    data: []
}

export const getProduct = createAsyncThunk('getProduct', async () => {
    const { data } = await axios.get("https://dummyjson.com/products")
    return data
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true
        })

        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.data = action.payload
            state.loading = false
        })
    }
})


// export const { names } = productSlice.actions

export default productSlice.reducer
