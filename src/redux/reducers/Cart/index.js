import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  cart: [],
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, {payload}) => {
      const exist = state?.cart?.find(movie => movie.id === payload.id);
      !exist && state.cart.push(payload);
      return state;
    },
    remove: (state, {payload}) => {
      const filter = state.cart.filter(movie => movie.id !== payload.id);
      state.cart = filter;
      return state;
    },
  },
});

const {
  actions: {add, remove},
} = cartSlice;

export {add, remove, persistConfig};
export default cartSlice.reducer;
