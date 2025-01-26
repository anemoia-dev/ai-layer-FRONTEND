import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  langauge: 'ar',
};

const languageSlice = createSlice({
  name: 'languageSwitcher',
  initialState,
  reducers: {
    changeL: (state, action) => {
      state.langauge = action.langauge;
    },
  },
});

export const { changeL } = languageSlice.actions;
export default languageSlice.reducer;
