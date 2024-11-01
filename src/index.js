import { CreateStore } from './store/CreateStore/index.js'
import { todoReducer } from './store/reducers/index.js'
import { render } from './utils/render/index.js'
import { addTodo, removeTodo } from './actions/index.js'
import { ToDoList } from './components/ToDoList/index.js'


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