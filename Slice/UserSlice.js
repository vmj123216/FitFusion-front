import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        userStats: {},
        workouts: []
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload.user || {};
            state.userStats = action.payload.userStats || {};
            state.workouts = action.payload.workouts || [];
        },
        clearUser: (state) => {
            state.user = {};
            state.userStats = {};
            state.workouts = [];
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export const UserReducer = userSlice.reducer;