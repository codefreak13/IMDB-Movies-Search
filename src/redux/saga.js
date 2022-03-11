import {call, takeEvery, put, all} from 'redux-saga/effects';
import Axios from 'axios';
import {fetchMovies, fetchMovieRating} from './reducers';
import {sagaActions} from './sagaActions';
import * as RootNavigation from '../navigation/RootNavigation';

const BASE_URL = 'https://imdb-api.com/en/API';
const API_KEY = 'k_0451hw5s'; //API KEY WAS NOT STORED IN ENV FILE SO AS TO ENABLE TESTER TO ADD ANOTHER KEY WHEN THIS KEY'S CALL IS MAXED

let callAPI = async ({url, method, data}) => {
  return await Axios({
    url,
    method,
    data,
  });
};

function* fetchMoviesSaga({payload: {expression}}) {
  try {
    let result = yield call(() =>
      callAPI({url: `${BASE_URL}/SearchMovie/${API_KEY}/${expression}`}),
    );
    yield put(fetchMovies(result.data.results));
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

function* fetchMovieRatingSaga({payload: {item}}) {
  try {
    let result = yield call(() =>
      callAPI({url: `${BASE_URL}/Ratings/${API_KEY}/${item.id}`}),
    );
    yield put(fetchMovieRating({id: item.id, rating: result.data.imDb}));
    RootNavigation.navigate('Movie', {
      movie: {...item, rating: result.data.imDb},
    });
  } catch (e) {
    yield put({type: 'FETCH_FAILED'});
  }
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(sagaActions.FETCH_MOVIES, fetchMoviesSaga),
    yield takeEvery(sagaActions.FETCH_MOVIE_RATING, fetchMovieRatingSaga),
  ]);
}
