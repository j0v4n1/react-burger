import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: null
}

const authenticationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const { actions, reducer } = authenticationSlice;
export const { setAccessToken } = actions;
export default reducer;
