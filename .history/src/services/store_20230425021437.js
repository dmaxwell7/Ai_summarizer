import { configureStore } from "@reduxjs/toolkit";
Import { artice}

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})