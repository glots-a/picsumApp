import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'react-native-dotenv';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: builder => ({
    getPicsumImages: builder.query({
      query: () => ({
        url: '/get///',
      }),
      transformResponse: resp => resp?.data,
    }),
  }),
});

export const {useGetPicsumImagesQuery} = userApi;
