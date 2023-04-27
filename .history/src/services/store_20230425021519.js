import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        [articleApi.r]
    },
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})