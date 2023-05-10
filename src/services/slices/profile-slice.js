import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileName: null,
    profileEmail: null,
    isLoggedIn: false,
    accessToken: null
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setProfileName: (state, action) => {
            state.profileName = action.payload
        },
        setProfileEmail: (state, action) => {
            state.profileEmail = action.payload
        },
        setIsLoggedIn: state => {state.isLoggedIn = true}
    }
})

export const { actions, reducer } = profileSlice;
export const { setAccessToken, setProfileName, setProfileEmail, setIsLoggedIn } = actions;
export default reducer;
