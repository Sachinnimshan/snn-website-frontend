import { configureStore } from '@reduxjs/toolkit';
import { webApiSlice } from '../api/webApiSlice';

export const store = configureStore({
    reducer: {
        [webApiSlice.reducerPath]: webApiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(webApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
