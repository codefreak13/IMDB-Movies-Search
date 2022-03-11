import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  loading: true,
  data: [],
  filter: [],
};

const movieConfig = {
  key: 'movie',
  storage: AsyncStorage,
  whitelist: ['filter'],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchMovies: (state, {payload}) => {
      const filters = state.filter;
      const data = payload.filter(item => !filters.includes(item.id));
      state.data = data;
      state.loading = false;
    },
    fetchMovieRating: (state, {payload: {id, rating}}) => {
      const {data} = state;
      const exist = data.find(movie => movie.id === id);
      const updatedMovie = {...exist, rating};
      data[data.indexOf(exist)] = updatedMovie;
    },
    addToFilter: (state, {payload}) => {
      const exist = state?.filter?.find(id => id === payload.id);
      !exist && state.filter.push(payload.id);
      return state;
    },
    removeFromFilter: (state, {payload}) => {
      const filter = state.filter.filter(id => id !== payload.id);
      state.filter = filter;
      return state;
    },
    clearFilter: state => {
      state.filter = [];
      return state;
    },
    clearMovies: state => {
      state.data = [];
      return state;
    },
  },
});

const {
  actions: {
    fetchMovies,
    fetchMovieRating,
    removeFromFilter,
    addToFilter,
    clearMovies,
    clearFilter,
  },
} = productsSlice;

export {
  fetchMovies,
  fetchMovieRating,
  addToFilter,
  removeFromFilter,
  movieConfig,
  clearMovies,
  clearFilter,
};
export default productsSlice.reducer;
