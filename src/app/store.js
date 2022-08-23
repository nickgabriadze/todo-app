import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoer.js';

export const store = configureStore({
  reducer: {
    todoReducer: todoReducer
  },
});
