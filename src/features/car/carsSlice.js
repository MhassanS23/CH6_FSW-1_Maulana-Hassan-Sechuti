import { createSlice } from '@reduxjs/toolkit';



const initialState = {
    filterCars: [],
    loading: true,
    error: null,
};

export const carSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        filteredDataCars: (state, action) =>{
            state.filterCars = action.payload; 
        },
    },
});

export const {filteredDataCars} = carSlice.actions;
export const carsReducer = carSlice.reducer;