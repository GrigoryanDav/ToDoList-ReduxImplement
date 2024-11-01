import { ADD_TODO, REMOVE_TODO } from '../../utils/constants'

export const todoReducer = (state, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)};
        default:
            return state
    }
}