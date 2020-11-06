import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import tickerReducer from '../features/ticker/tickerSlice';
import createSagaMiddleware from 'redux-saga';
import { watchFetchRandomArticle } from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: {
    ticker: tickerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchFetchRandomArticle);