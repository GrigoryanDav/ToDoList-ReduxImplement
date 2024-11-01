import { ADD_TODO, REMOVE_TODO } from "../utils/constants/index.js";


export const addTodo = (store, task) => {
    store.dispatch({
        type: ADD_TODO,
        payload: {'id': Date.now(), task}
    })
}

export const removeTodo = (store, id) => {
    store.dispatch({
        type: REMOVE_TODO,
        payload: id,
    })
}