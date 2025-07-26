// src/store/themeSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { APP_COLORS } from "../utils/theme";

type ThemeState = {
    secondaryColor: string;
};

const initialState: ThemeState = {
    secondaryColor: APP_COLORS.SECONDARY_COLOR, // default initial color
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setSecondaryColor(state, action: PayloadAction<string>) {
            state.secondaryColor = action.payload;
        },
    },
});

export const { setSecondaryColor } = themeSlice.actions;

export default themeSlice.reducer;
