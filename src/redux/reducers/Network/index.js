import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  toggleNetwork: true,
};

const networkManagerSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    checkNetwork: (state, {payload}) => {
      state.toggleNetwork = payload;
    },
  },
});

export const {
  actions: {checkNetwork},
} = networkManagerSlice;

export default networkManagerSlice.reducer;
