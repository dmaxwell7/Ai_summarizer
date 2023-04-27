import { configureStore } from "@reduxjs/toolkit";
Import 

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})