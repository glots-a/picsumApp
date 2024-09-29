import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AVATAR_URL} from 'react-native-dotenv';

export const avatarApi = createApi({
  reducerPath: 'avatar',
  baseQuery: fetchBaseQuery({
    baseUrl: `${AVATAR_URL}`,
  }),
  endpoints: builder => ({
    getAvatar: builder.query({
      query: () => ({
        url: 'users/4',
      }),
      transformResponse: response => response?.data,
    }),
  }),
});

export const {useGetAvatarQuery} = avatarApi;
