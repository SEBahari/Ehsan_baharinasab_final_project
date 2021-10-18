import DBReducer from './DB.Reducer/DB.reducer'
import AuthReducer from './Auth.Reducer/Auth.reducer'
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
   DB: DBReducer,
   auth: AuthReducer,
});

export default rootReducer;