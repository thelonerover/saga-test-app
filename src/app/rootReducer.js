import { combineReducers } from '@reduxjs/toolkit';
import tickersReducer from '../features/ticker/tickerSlice';

const rootReducer = combineReducers({
    ticker: tickersReducer
});

export default rootReducer;