import {createSlice} from '@reduxjs/toolkit';
import {avatarApi} from './api/avatarApi';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  isDarkTheme: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initiateUser: () => {},
    setToken: (state, action) => {
      state.token = action.payload;
    },
    removeToken: state => {
      state.token = null;
    },
    swithcThemeMode: state => {
      state.isDarkTheme = !state.isDarkTheme;
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
        (state, action) => {
          state.error = action.payload;
          state.isLoading = false;
        },
      );
  },
});

export default userSlice.reducer;
export const {initiateUser, setToken, removeToken, swithcThemeMode} =
  userSlice.actions;
