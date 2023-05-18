import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


export const getDataCars = createAsyncThunk('cars/getDataCars', async () => {
    try {
        const response = await axios.get('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
        return response.data;
    } catch (error) {
        console.log(error);
    }
})


const initialState = {
    cars: [],
    loading: true,
    error: null,
}

export const carSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {},
    extraReducers: {
        [getDataCars.pending]: (state) => {
            state.loading = true
        },
        [getDataCars.fulfilled]: (state, {payload}) => {
            state.cars = payload
            state.loading = false
        },
        [getDataCars.rejected]: (state) => {
            state.loading = false
        },
    },
});

export const carsReducer = carSlice.reducer;