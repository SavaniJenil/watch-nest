import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: "searchSuggestions",
    initialState: {},
    reducers: {
        cacheSearchSuggestions: (state, action) => {
            state = Object.assign(state,action.payload);
        }
    }
});

export const { cacheSearchSuggestions } = searchSlice.actions;

export default searchSlice.reducer;