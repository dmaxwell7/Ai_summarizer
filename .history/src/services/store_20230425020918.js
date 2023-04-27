import { configureStore } from "@reduxjs/toolkit";
ist/getDefaultMiddleware";

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})