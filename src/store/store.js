import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slices/user-action';

const store = configureStore({
    reducer: {
        userReducer: userReducer
    }
});

export default store;

