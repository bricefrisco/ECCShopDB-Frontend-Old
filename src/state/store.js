import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import chestShopsReducer from './chestShopsSlice';
import regionsReducer from './regionsSlice';
import playersReducer from './playersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    chestShops: chestShopsReducer,
    regions: regionsReducer,
    players: playersReducer,
  },
});
