import { removeTodo } from "../../actions/index.js";


export const ToDoList = (store) => {
    const todoListContainer = document.getElementById('todo-list')

    return () => {
        const todos = store.getState().todos
        todoListContainer.innerHTML = ''

        todos.forEach(todo => {
            const listItem = document.createElement('li')
            listItem.textContent = todo.task
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.onclick = () => removeTodo(store, todo.id)
            listItem.appendChild(deleteButton)
            todoListContainer.appendChild(listItem)
        });
    }
};