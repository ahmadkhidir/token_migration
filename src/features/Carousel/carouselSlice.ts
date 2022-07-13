import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { data } from "./carouselApi"

const carouselSlice = createSlice({
    name: 'carousel',
    initialState: {
        data: []
    },
    reducers: undefined,
    extraReducers: (builder) => {
        builder.addCase(
            carouselFetchApi.fulfilled,
            (state, action) => {
                console.log(action.payload[0])
                state.data = action.payload
            }
        )
    },
})

export const carouselFetchApi = createAsyncThunk(
    'carousel/fetchData',
    async () => {
        const response = await data
        return response.data
    }
)

export const {} = carouselSlice.actions

export const selectData = (state: any) => state.carousel.data

export default carouselSlice.reducer