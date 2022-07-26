import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    models: [],
};

export const modelSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setModels: (state, actions) => {
            state.models = actions.payload;
        },
    },
});

export const { setModels } = modelSlice.actions;
export const selectModels = state => state;

export default modelSlice.reducer;