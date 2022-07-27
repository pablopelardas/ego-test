import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    models: [],
    model: {},
};

export const modelSlice = createSlice({
    name: 'models',
    initialState,
    reducers: {
        setModels: (state, actions) => {
            state.models = actions.payload;
        },
        setModel: (state, actions) => {
            state.model = actions.payload;
        }
    },
});

export const { setModels, setModel } = modelSlice.actions;
export const selectModels = state => state.models.models;

export default modelSlice.reducer;