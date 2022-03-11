import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';

import {
  productsSlice,
  cartSlice,
  networkManagerSlice,
  persistConfig,
  movieConfig,
} from './reducers';
import saga from './saga';

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: {
    network: networkManagerSlice,
    products: persistReducer(movieConfig, productsSlice),
    cart: persistReducer(persistConfig, cartSlice),
  },
  middleware,
});

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
export default store;
