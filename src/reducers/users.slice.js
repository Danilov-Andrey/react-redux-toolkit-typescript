import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = []

export const loadUsers = createAsyncThunk(
    "users/loadUsers",
    async () => {
        return await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())
    }
)

export const userReducer = createSlice({
    name: "users",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(
            loadUsers.fulfilled,
            (state, action) => {
                state.push(...action.payload)
            }
        )
    }
})

export const selectUsers = state => state.users