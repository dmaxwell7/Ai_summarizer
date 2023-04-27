import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});

// left off at 40:30 min