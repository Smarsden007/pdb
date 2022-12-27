import { createSlice } from '@reduxjs/toolkit';

const userAuthFromLocalStorage = () => {
  const isAuth = localStorage.getItem('isAuth');

  if (isAuth && JSON.parse(isAuth) === true) {
    return true;
  }

  return false;
};

const initialState = {
  isAuth: userAuthFromLocalStorage(),
  user: null,
  fullName: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.isAuth = true;
      console.log(action.payload)
      state.fullName = action.payload.fullName},
         // store the full name in the user object
    
    unauthenticateUser: (state) => {
      state.isAuth = false;
      state.user = null;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;

export default authSlice.reducer;
