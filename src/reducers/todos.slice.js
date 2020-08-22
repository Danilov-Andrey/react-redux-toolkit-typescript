import {configureStore, createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = []

export const loadTodos = createAsyncThunk(
    "todos/loadTodos",
    async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return await response.json()
})

export const todosReducer = createSlice({
    name: "todos",
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(
        loadTodos.fulfilled,
            (state, action) => {
                state.push(...action.payload)
            })
    }
})

export const selectTodos = (state) => state.todos

