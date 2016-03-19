import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import TodoApp from "./todo_app"

ReactDOM.render(
	<Provider store={Store}>
		<TodoApp />
	</Provider>,
  document.getElementById('root')
);
// state log =========================
// console.log('Initial state:');
// console.log(Store.getState());
// console.log('--------------');

// console.log('Dispatching ADD_TODO.');
// Store.dispatch({
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'Learn Redux'
// });
// console.log('Current state:');
// console.log(Store.getState());
// console.log('--------------');

// console.log('Dispatching ADD_TODO.');
// Store.dispatch({
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'Go shopping'
// });
// console.log('Current state:');
// console.log(Store.getState());
// console.log('--------------');

// console.log('Dispatching TOGGLE_TODO.');
// Store.dispatch({
//   type: 'TOGGLE_TODO',
//   id: 0
// });
// console.log('Current state:');
// console.log(Store.getState());
// console.log('--------------');

// console.log('Dispatching SET_VISIBILITY_FILTER');
// Store.dispatch({
//   type: 'SET_VISIBILITY_FILTER',
//   filter: 'SHOW_COMPLETED'
// });
// console.log('Current state:');
// console.log(Store.getState());
// console.log('--------------');