import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initiateUser: () => {},
  },
});

export default userSlice.reducer;
export const {initiateUser} = userSlice.actions;
