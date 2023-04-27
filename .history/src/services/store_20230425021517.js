import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";


export const store = configureStore({
    reducer: {
        [articleApi]
    },
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})