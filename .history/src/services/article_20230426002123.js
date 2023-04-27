import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

  
export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers, {getState}) => {
            headers.set('X-RapidAPI-Key', 'KEY');
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});

// left off at 40:30 min