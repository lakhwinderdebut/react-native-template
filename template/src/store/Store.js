import {configureStore} from '@reduxjs/toolkit';
import authReducer from './reducers/AuthSlice';

const Store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default Store;
