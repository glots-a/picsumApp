import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
//import {AVATAR_URL} from 'react-native-dotenv';
const AVATAR_URL = 'https://reqres.in/api/';

type Data = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type ApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: object;
  request?: object;
};

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
      transformResponse: (response: ApiResponse<Data>) => response.data,
    }),
  }),
});

export const {useGetAvatarQuery} = avatarApi;
