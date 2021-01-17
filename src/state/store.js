import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import chestShopsReducer from './chestShopsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    chestShops: chestShopsReducer,
  },
});
