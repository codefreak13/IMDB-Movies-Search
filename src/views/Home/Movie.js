import React from 'react';

import {
  remove,
  addToFilter,
  removeFromFilter,
  clearMovies,
} from '../../redux/reducers';
import {MovieContainer} from '../../components';

export default Movie = ({movie, dispatch, filter, setvalue}) => {
  const exists = filter.includes(movie.id);
  return (
    <MovieContainer
      {...movie}
      removeText="Remove from Favourite"
      removePress={() => {
        setvalue('');
        dispatch(clearMovies());
        dispatch(remove(movie));
      }}
      searchText={exists ? 'Show in Search' : 'Hide from Search'}
      searchPress={() => {
        setvalue('');
        dispatch(clearMovies());
        exists
          ? dispatch(removeFromFilter(movie))
          : dispatch(addToFilter(movie));
      }}
    />
  );
};
