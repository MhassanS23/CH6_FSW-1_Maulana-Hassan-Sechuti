import { configureStore } from "@reduxjs/toolkit";
import {carsReducer} from "../features/car/carsSlice.js";

export const store = configureStore ({
    reducer: {
        cars: carsReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})