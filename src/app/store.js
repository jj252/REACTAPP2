import { configureStore } from '@reduxjs/toolkit';
import { questionsReducer } from '../utils/Navigation';

export const store = configureStore({
  reducer: {
    questions: questionsReducer
  }
});

console.log('STATE OF STORE',store.getState());
