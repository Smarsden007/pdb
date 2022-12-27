import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import { tasksReducer } from './tasksReducer'; 
export const store = configureStore({
  reducer: {
    auth: authSlice,
    tasks: tasksReducer,
  },
});
