import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {loadUsers, selectUsers} from "../reducers/users.slice";

export const Users = () => {
    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])
    const renderList = () => {
        return (
            <>
                <li>
                    Имя юзера {users[0].name}
                </li>
                <li>
                    Айди юзера {users[0].id}
                </li>
                <li>
                    Телефончик юзера {users[0].phone}
                </li>
            </>
        )
    }
    const info = !users.length ? "Падажи гружу сек" : renderList()

    return (
        <ul>
            {info}
        </ul>
    )
}