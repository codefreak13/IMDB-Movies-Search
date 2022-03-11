import productsSlice, {
  fetchMovies,
  fetchMovieRating,
  addToFilter,
  removeFromFilter,
  movieConfig,
  clearMovies,
  clearFilter,
} from './Products';
import cartSlice, {add, remove, persistConfig} from './Cart';
import networkManagerSlice, {checkNetwork} from './Network';

export {
  productsSlice,
  fetchMovies,
  fetchMovieRating,
  cartSlice,
  add,
  remove,
  persistConfig,
  networkManagerSlice,
  checkNetwork,
  movieConfig,
  addToFilter,
  removeFromFilter,
  clearMovies,
  clearFilter,
};
