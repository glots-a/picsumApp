import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from 'react-native-dotenv';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: builder => ({
    getPicsumImages: builder.query({
      query: ({page, limit}) => {
        return {
          url: 'v2/list',
          params: {
            page: page || 1,
            limit: limit || 10,
          },
        };
      },
      serializeQueryArgs: ({endpointName}) => endpointName,
      merge: (currentCache, newItems, {arg}) => {
        if (arg.page === 1) {
          return newItems;
        }

        return [...currentCache, ...newItems];
      },
      forceRefetch({currentArg, previousArg}) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {useGetPicsumImagesQuery} = userApi;
