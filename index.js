import { CreateStore } from './src/store/CreateStore'
import { todoReducer } from './src/store/reducers'
import { render } from './src/utils/render'
import { addTodo, removeTodo } from './src/actions'
import { ToDoList } from './src/components/ToDoList'


const initialState = { todos: [] }
const store = CreateStore(todoReducer, initialState)

store.subscribe(() => render(store))

ToDoList(store)
render(store)

const toDoInput = document.getElementById('todoInput')
const addButton = document.getElementById('addButton')

addButton.onclick = () => {
    const task = toDoInput.value.trim()
    if(task) {
        addTodo(store, task)
        toDoInput.value = ''
    }
}