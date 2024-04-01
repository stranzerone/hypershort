// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './TaskSlice.js'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

export default store;
