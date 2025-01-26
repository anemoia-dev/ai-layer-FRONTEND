import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  isRegistered: false,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.token = action.payload.token;
      state.isRegistered = true;
    },
  },
});

export const { register } = authSlice.actions;
export default authSlice.reducer;
