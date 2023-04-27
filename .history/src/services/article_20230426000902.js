import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const options = {
    method: 'GET',
    url: 'https://api-basketball.p.rapidapi.com/timezone',
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key': '2e7d15c4cbmsh27d60c288c2a928p133279jsn8c9eefc48dc1',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };
  



export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `test`
        })
    })
});

// left off at 40:30 min