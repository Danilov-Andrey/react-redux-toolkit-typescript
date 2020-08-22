import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadTodos, selectTodos} from "../reducers/todos.slice";

export const Todos = () => {
    const todos = useSelector(selectTodos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadTodos())
    }, [dispatch])
    const renderList = () => {
        return (
            <>
                <li>
                    Название {todos[0].title}
                </li>
                <li>
                    Айди юзера {todos[0].userId}
                </li>
                <li>
                    Айди туду {todos[0].id}
                </li>
                <li>
                    {!todos[0].completed ? "Не выполнено еще" : "А вот и выполнено"}
                </li>
            </>
        )
    }
    const info = !todos.length ? "Падажи гружу сек" : renderList()

    return (
        <ul>
            {info}
        </ul>
    )
}