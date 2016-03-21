import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import Root from "./root"


const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Root />
	</Provider>,
  document.getElementById('root')
);


// for testing the store and reducers

// ReactDOM.render(
// 	<h1>my things</h1>,
//   document.getElementById('root')
// );


// footie state log =========================
// console.log('Initial state:');
// console.log(Store.getState());
// console.log('--------------');

// console.log('Dispatching ADD_SCORE.');
// Store.dispatch({
//   type: 'ADD_SCORE',
//   id: 0,
//   value: 6,
//   player: "Carli Lloyd",
//   challenge: "Ronaldo Chop"
// });
// console.log('Current state:');
// console.log(Store.getState());
// console.log('--------------');











// original state log =========================
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