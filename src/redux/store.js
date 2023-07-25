import { configureStore } from '@reduxjs/toolkit';

import rocketSlice from './rockets/rocketSlice';

const rootReducer = {
  rockets: rocketSlice.reducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
