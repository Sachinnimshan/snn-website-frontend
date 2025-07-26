import { configureStore } from '@reduxjs/toolkit';
import { webApiSlice } from '../api/webApiSlice';
import themeReducer from '../api/themeSlice'

export const store = configureStore({
    reducer: {
        [webApiSlice.reducerPath]: webApiSlice.reducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(webApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
