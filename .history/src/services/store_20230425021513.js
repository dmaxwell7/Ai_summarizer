import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        []
    },
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})