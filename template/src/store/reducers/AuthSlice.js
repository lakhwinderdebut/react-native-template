import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
});

export const authToken = state => state.auth.authToken;

export default AuthSlice.reducer;
