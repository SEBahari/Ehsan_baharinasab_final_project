import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   username: '',
   token: '',
   refreshToken: '',
   isLogin: false,
};

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      loginUser(state, action) {
         state.username = action.payload.username;
         state.token = action.payload.token;
         state.refreshToken = action.payload.refreshToken;
         state.isLogin = true;
      },
      logoutUser(state, action) {
         state.username = '';
         state.token = '';
         state.refreshToken = '';
         state.isLogin = false;
      },
   }
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;