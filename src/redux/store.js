import { configureStore } from '@reduxjs/toolkit';
import { greettingReducer } from './greettingSlice';

const store = configureStore({
  reducer: {
    greettings: greettingReducer,
  },
});

export default store;
