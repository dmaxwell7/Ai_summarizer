import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";
Import { articleApi}

export const store = configureStore({
    reducer: {},
    middleware: (GetDefaultMiddleware) => 
    GetDefaultMiddleware().concat()
})