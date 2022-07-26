import {configureStore} from '@reduxjs/toolkit';
import modelReducer from '../slices/modelSlice';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
    reducer: {
        models: modelReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
});