import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authToken: null,
};

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.authToken = action.payload.authToken;
    },
    setSignOut: state => {
      state.authToken = null;
    },
  },
});

export const {setSignIn, setSignOut} = AuthSlice.actions;

export const authToken = state => state.auth.authToken;

export default AuthSlice.reducer;
