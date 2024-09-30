import {createSlice, nanoid, PayloadAction} from '@reduxjs/toolkit';
import {avatarApi} from './api/avatarApi';
import {FetchBaseQueryError} from '@reduxjs/toolkit/query';

type Data = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Auth = {
  email: string;
  password: string;
};

type UserState = {
  user: Data | Data[] | null;
  userData: Auth | null;
  token: string | null;
  isLoading: boolean;
  error: FetchBaseQueryError | null;
  isDarkTheme: boolean;
};

const initialState: UserState = {
  user: null,
  userData: null,
  token: null,
  isLoading: false,
  error: null,
  isDarkTheme: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = null;
    },
    swithcThemeMode: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
    addUserDataAction: (state, action) => {
      state.userData = action.payload;
      state.token = nanoid();
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(avatarApi.endpoints.getAvatar.matchPending, state => {
        state.isLoading = true;
      })
      .addMatcher(
        avatarApi.endpoints.getAvatar.matchFulfilled,
        (state, action) => {
          state.user = action.payload;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addMatcher(
        avatarApi.endpoints.getAvatar.matchRejected,
        (state, action: PayloadAction<FetchBaseQueryError | undefined>) => {
          if (action.payload) {
            state.error = action.payload;
          } else {
            state.error = {
              status: 'FETCH_ERROR',
              error: 'Unknown error occurred',
            } as FetchBaseQueryError;
          }
          state.isLoading = false;
        },
      );
  },
});

export default userSlice.reducer;
export const {removeToken, swithcThemeMode, addUserDataAction, addToken} =
  userSlice.actions;
