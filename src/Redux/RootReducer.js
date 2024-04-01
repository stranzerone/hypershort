// src/app/rootReducer.js

import { combineReducers } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';

const rootReducer = combineReducers({
  tasks: tasksReducer,
});

export default rootReducer;
