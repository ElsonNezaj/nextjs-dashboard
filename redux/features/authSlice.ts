import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  value: string;
};

const initialState = {
  value: '',
} as InitialState;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setValue: (state: InitialState, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = authSlice.actions;
export default authSlice.reducer;
