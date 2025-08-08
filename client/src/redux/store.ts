import { configureStore } from "@reduxjs/toolkit";
import AppstateReducer from './states/states';

export const store = configureStore({
    reducer: {
        appState: AppstateReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;