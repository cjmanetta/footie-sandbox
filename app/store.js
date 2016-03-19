// import Todos from './reducers/todo_app';
import scores from './reducers/scores';
import { createStore } from 'redux';

// const store = createStore(Todos);
const store = createStore(scores);

export default store;