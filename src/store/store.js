import {configureStore} from "@reduxjs/toolkit";
import {todosReducer} from "../reducers/todos.slice";
import {userReducer} from "../reducers/users.slice";

export const store = configureStore({
    reducer: {
        todos: todosReducer.reducer,
        users: userReducer.reducer
    }
})