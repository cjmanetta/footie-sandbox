import Todos from './reducers/todo_app';
import { createStore } from 'redux';

const store = createStore(Todos);

export default store;