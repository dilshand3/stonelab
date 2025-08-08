import { createSlice } from "@reduxjs/toolkit";

interface IAppState {
    showMenu: Boolean;
    showServiceDailaugeBox: boolean;
    showAboutusDailaugeBox: boolean;
}

const AppIntialState: IAppState = {
    showMenu: false,
    showServiceDailaugeBox: false,
    showAboutusDailaugeBox: false
}

export const AppState = createSlice({
    name: "AppState",
    initialState: AppIntialState,
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        },
        toggleServiceDailaugeBox: (state) => {
            state.showServiceDailaugeBox = !state.showServiceDailaugeBox
        },
        toggleAboutusDailaugeBox: (state) => {
            state.showAboutusDailaugeBox = !state.showAboutusDailaugeBox
        }
    }
})

export const { toggleMenu, toggleServiceDailaugeBox, toggleAboutusDailaugeBox } = AppState.actions;
export default AppState.reducer;