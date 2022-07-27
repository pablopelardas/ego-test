import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    menu: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setMenu: (state, actions) => {
            state.menu = actions.payload;
        },
    },
});

export const { setMenu } = uiSlice.actions;
export const selectMenu = state => state.ui.menu;

export default uiSlice.reducer;